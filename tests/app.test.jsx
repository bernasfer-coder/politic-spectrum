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
  BIBLIOGRAPHY_RECORDS,
  DEFAULT_SCORES,
  DIMENSIONS,
  ENCYCLOPEDIA_ENTRIES,
  OPTION_VALUES,
  PALETTES,
  QUESTIONS,
  SPECTRUM_BANDS,
} from '../src/content/index.js';

const CACHE_KEY = 'politic-spectrum:questionnaire:v4';
const BIBLIOGRAPHY_TOTAL = BIBLIOGRAPHY_RECORDS.length;

beforeEach(() => {
  window.localStorage.clear();
  window.history.replaceState(null, '', '/');
});

afterEach(() => {
  cleanup();
});

describe('scoring helpers', () => {
  it('gives every reference profile an explicit, readable palette', () => {
    for (const profile of ARCHETYPES) {
      const palette = PALETTES[profile.id] || PALETTES[profile.palette];
      expect(palette, `${profile.id} needs a registered palette`).toBeDefined();
      expect(palette.primary).toMatch(/^#[0-9a-f]{6}$/i);
      expect(palette.background).toMatch(/^#[0-9a-f]{6}$/i);
      expect(profile.accent).toBe(palette.primary);
    }

    expect(ARCHETYPES.find(({ id }) => id === 'national-socialist').palette).toBe('national-socialist');
    expect(PALETTES['national-socialist'].label).toMatch(/black \/ red/i);
    expect(PALETTES['national-socialist'].background).toBe('#030405');
    expect(PALETTES['national-socialist'].primary).toBe('#ff3038');
  });

  it('keeps Italian fascism and Nazism as distinct documented reference profiles', () => {
    const italian = ARCHETYPES.find(({ id }) => id === 'historical-fascist');
    const nazi = ARCHETYPES.find(({ id }) => id === 'national-socialist');

    for (const profile of [italian, nazi]) {
      expect(getMatches(profile.profile)[0].id).toBe(profile.id);
      expect(ENCYCLOPEDIA_ENTRIES[profile.id].title).toBe(profile.name);
      expect(profile.current).toEqual([]);
      expect(profile.warning).toBeTruthy();
      expect(Object.keys(profile.profile)).toHaveLength(6);
    }
    expect(italian.people.map(({ name }) => name)).toEqual(['Benito Mussolini']);
    expect(nazi.people.map(({ name }) => name)).toEqual(['Adolf Hitler', 'Joseph Goebbels']);
    expect(italian.historical.every(({ name }) => !/Nazi|Germany|Occupied Europe/i.test(name))).toBe(true);
    expect(italian.summaryCitationIds).not.toContain('hitlerMeinKampf');
    expect(Object.values(italian.dimensionCitationIds).flat()).not.toContain('hitlerMeinKampf');
    expect(ENCYCLOPEDIA_ENTRIES['historical-fascist'].aliases).not.toContain('Nazism');
  });

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
    expect(screen.getByRole('tab', { name: /Reference profiles/i })).toHaveAttribute('aria-selected', 'true');
    await user.click(screen.getByRole('tab', { name: /Label catalogue/i }));
    expect(screen.getByText('UNIFIED LABEL CATALOGUE')).toBeInTheDocument();
    expect(screen.getByText(/92 of 92 labels/i)).toBeInTheDocument();
    expect(document.querySelectorAll('.taxonomy-card')).toHaveLength(8);
    const catalogueSource = screen.getByRole('combobox', { name: /Catalogue source/i });
    await user.selectOptions(catalogueSource, 'reference-profile');
    expect(screen.getByText(/28 of 92 labels/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Show all 28 labels/i }));
    expect(document.querySelectorAll('.taxonomy-card')).toHaveLength(28);
    await user.click(screen.getByRole('button', { name: /Clear filters/i }));
    await user.click(screen.getByRole('button', { name: /Show all 92 labels/i }));
    expect(document.querySelectorAll('.taxonomy-card')).toHaveLength(92);
    expect(screen.getByRole('button', { name: /Show curated set/i })).toBeInTheDocument();
    await user.click(screen.getByRole('tab', { name: /Reference profiles/i }));
    await user.click(screen.getByRole('button', { name: /Italian and interwar fascism/i }));
    expect(screen.getByRole('heading', { name: /Italian and interwar fascism/i })).toBeInTheDocument();
    expect(screen.getByText(/Palette: Historical warning · rust/i)).toBeInTheDocument();
    await user.click(screen.getByRole('tab', { name: /Encyclopedia/i }));
    expect(screen.getByText(/29 of 29 entries/i)).toBeInTheDocument();
    await user.click(screen.getByRole('link', { name: /Authoritarian collectivist/i }));
    expect(screen.getByRole('heading', { name: /Authoritarian collectivist/i })).toBeInTheDocument();
    expect(screen.getByText('SIX-AXIS READING', { exact: true })).toBeInTheDocument();
    expect(window.location.hash).toBe('#encyclopedia/authoritarian-collectivist');
    await user.click(screen.getByRole('link', { name: /All encyclopedia entries/i }));
    expect(screen.getByText(/POLITICAL ENCYCLOPEDIA/i)).toBeInTheDocument();
    await user.click(screen.getByRole('tab', { name: /Research atlas/i }));
    expect(screen.getByText('RESEARCH ATLAS', { exact: true })).toBeInTheDocument();
    expect(screen.getByText(/Recurring political forms · 12 patterns/i)).toBeInTheDocument();
  });

  it('filters the compact bibliography by atomic regions and a bounded year range', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('tab', { name: /Bibliography/i }));

    expect(screen.getAllByRole('slider')).toHaveLength(2);
    expect(document.querySelectorAll('.bibliography-card')).toHaveLength(12);
    expect(screen.getByText(new RegExp(`1–12 of ${BIBLIOGRAPHY_TOTAL} matching · ${BIBLIOGRAPHY_TOTAL} total`, 'i'))).toBeInTheDocument();

    await user.click(screen.getByRole('checkbox', { name: 'Europe', exact: true }));
    expect(screen.getByText(new RegExp(`1–12 of 33 matching · ${BIBLIOGRAPHY_TOTAL} total`, 'i'))).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Next →/i })).toBeEnabled();
    await user.click(screen.getByRole('button', { name: /Next →/i }));
    expect(screen.getByText(/Page 2 of 3/i)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Clear filters/i }));
    await screen.findByText(new RegExp(`1–12 of ${BIBLIOGRAPHY_TOTAL} matching · ${BIBLIOGRAPHY_TOTAL} total`, 'i'));
    fireEvent.change(screen.getByRole('spinbutton', { name: 'Begin publication year', exact: true }), { target: { value: '1900' } });
    fireEvent.change(screen.getByRole('spinbutton', { name: 'End publication year', exact: true }), { target: { value: '1950' } });
    expect(screen.getByText(new RegExp(`1–12 of \\d+ matching · ${BIBLIOGRAPHY_TOTAL} total`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(/1900 CE — 1950 CE/i)).toBeInTheDocument();
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
