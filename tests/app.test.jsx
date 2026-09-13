import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  App,
  calculateScores,
  distanceBetween,
  getBand,
  getMatches,
  loadQuestionnaireCache,
  saveQuestionnaireCache,
} from '../src/main.jsx';
import {
  ARCHETYPES,
  DEFAULT_SCORES,
  DIMENSIONS,
  OPTION_VALUES,
  QUESTIONS,
  SPECTRUM_BANDS,
} from '../src/content/index.js';

const CACHE_KEY = 'politic-spectrum:questionnaire:v4';

beforeEach(() => {
  window.localStorage.clear();
  window.history.replaceState(null, '', '/');
});

afterEach(() => {
  cleanup();
});

describe('scoring helpers', () => {
  it('averages answered items by dimension and respects item polarity', () => {
    const answers = Object.fromEntries(QUESTIONS.map((question) => [question.id, 100]));
    const expected = Object.fromEntries(DIMENSIONS.map((dimension) => {
      const items = QUESTIONS.filter((question) => question.dimension === dimension.id);
      const total = items.reduce((sum, question) => sum + question.polarity * 100, 0);
      return [dimension.id, total / items.length];
    }));

    expect(calculateScores(answers)).toEqual(expected);
    expect(calculateScores({})).toEqual(DEFAULT_SCORES);
  });

  it('returns stable distances, matches, and boundary bands', () => {
    expect(distanceBetween(DEFAULT_SCORES, DEFAULT_SCORES)).toBe(0);
    expect(getMatches(DEFAULT_SCORES)).toHaveLength(ARCHETYPES.length);
    for (const dimension of DIMENSIONS) {
      expect(getBand(dimension.id, -100)).toEqual(SPECTRUM_BANDS[dimension.id].bands[0]);
      expect(getBand(dimension.id, 100)).toEqual(SPECTRUM_BANDS[dimension.id].bands.at(-1));
    }
  });
});

describe('questionnaire persistence', () => {
  it('filters invalid cached answers and resumes at the first unanswered item', () => {
    window.localStorage.setItem(CACHE_KEY, JSON.stringify({
      version: 2,
      questionIndex: 4,
      answers: { [QUESTIONS[0].id]: 50, invalid: 999 },
    }));

    expect(loadQuestionnaireCache()).toEqual({
      answers: { [QUESTIONS[0].id]: 50 },
      complete: false,
      questionIndex: 1,
    });
  });

  it('saves a partial cache and removes it when answers are reset', () => {
    saveQuestionnaireCache({ [QUESTIONS[0].id]: OPTION_VALUES[3] }, 1);
    expect(JSON.parse(window.localStorage.getItem(CACHE_KEY))).toMatchObject({ version: 4, questionIndex: 1 });
    saveQuestionnaireCache({}, 0);
    expect(window.localStorage.getItem(CACHE_KEY)).toBeNull();
  });

  it('starts safely when localStorage contains malformed JSON', () => {
    window.localStorage.setItem(CACHE_KEY, '{not valid json');
    expect(() => render(<App />)).not.toThrow();
    expect(screen.getByRole('heading', { name: /Answer honestly, not strategically/i })).toBeInTheDocument();
  });
});

describe('primary user flows', () => {
  it('answers, advances, and persists the first questionnaire response', async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByRole('heading', { name: /Answer honestly, not strategically/i })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Strongly agree/i }));
    expect(screen.getByRole('button', { name: /Next question/i })).toBeEnabled();
    await user.click(screen.getByRole('button', { name: /Next question/i }));

    expect(screen.getByText(/QUESTION 02/)).toBeInTheDocument();
    expect(JSON.parse(window.localStorage.getItem(CACHE_KEY)).answers[QUESTIONS[0].id]).toBe(100);
  });

  it('changes all six FreeMode sliders and updates the readout', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('tab', { name: /FreeMode/i }));

    const sliders = screen.getAllByRole('slider');
    expect(sliders).toHaveLength(6);
    for (const slider of sliders) fireEvent.change(slider, { target: { value: '100' } });
    expect(sliders.every((slider) => slider.value === '100')).toBe(true);
    expect(screen.getByText(/YOUR SIX-BAND READOUT/i)).toBeInTheDocument();
  });

  it('selects a library profile and exposes the research atlas', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('tab', { name: /Spectrum Library/i }));

    const selectedReference = screen.getByText('SELECTED REFERENCE');
    const profileMap = screen.getByRole('grid', { name: /Nine-cell political spectrum profile map/i });
    expect(selectedReference.compareDocumentPosition(profileMap) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    const horizontalDimension = screen.getByRole('combobox', { name: /Horizontal profile map dimension/i });
    const verticalDimension = screen.getByRole('combobox', { name: /Vertical profile map dimension/i });
    expect(horizontalDimension).toHaveValue('economic');
    expect(verticalDimension).toHaveValue('authority');
    const communistCellBefore = screen.getByRole('button', { name: /Communist \/ Marxist-Leninist/i }).closest('[role="gridcell"]');
    await user.selectOptions(horizontalDimension, 'social');
    expect(horizontalDimension).toHaveValue('social');
    expect(screen.getByRole('grid', { name: /Social values by Authority/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Social values/i })).toBeInTheDocument();
    const communistCellAfter = screen.getByRole('button', { name: /Communist \/ Marxist-Leninist/i }).closest('[role="gridcell"]');
    expect(communistCellAfter).not.toBe(communistCellBefore);
    expect(screen.getAllByRole('gridcell')).toHaveLength(9);
    expect(screen.getByRole('button', { name: /Communist \/ Marxist-Leninist/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Anarcho-capitalist/i })).toBeInTheDocument();
    expect(screen.getByText(/63 of 63 labels/i)).toBeInTheDocument();
    expect(document.querySelectorAll('.taxonomy-card')).toHaveLength(8);
    await user.click(screen.getByRole('button', { name: /Show all 63 labels/i }));
    expect(document.querySelectorAll('.taxonomy-card')).toHaveLength(63);
    expect(screen.getByRole('button', { name: /Show curated set/i })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Historical fascist \/ Nazi-like/i }));
    expect(screen.getByRole('heading', { name: /Historical fascist \/ Nazi-like/i })).toBeInTheDocument();
    expect(screen.getByText(/Palette: Historical warning · rust/i)).toBeInTheDocument();
    expect(screen.getByText(/RESEARCH ATLAS/i)).toBeInTheDocument();
    expect(screen.getByText(/Recurring political forms · 12 patterns/i)).toBeInTheDocument();
  });

  it('restores a complete questionnaire as the calculated result view', async () => {
    const user = userEvent.setup();
    render(<App />);

    for (let index = 0; index < QUESTIONS.length; index += 1) {
      await user.click(screen.getByRole('button', { name: /Strongly agree/i }));
      if (index < QUESTIONS.length - 1) await user.click(screen.getByRole('button', { name: /Next question/i }));
    }
    await user.click(screen.getByRole('button', { name: /Reveal my profile/i }));

    expect(screen.getByRole('heading', { name: /Build a profile by feel/i })).toBeInTheDocument();
    expect(JSON.parse(window.localStorage.getItem(CACHE_KEY)).answers).toHaveProperty(QUESTIONS.at(-1).id, 100);

    cleanup();
    render(<App />);
    expect(screen.getByRole('heading', { name: /Build a profile by feel/i })).toBeInTheDocument();
  }, 15000);
});
