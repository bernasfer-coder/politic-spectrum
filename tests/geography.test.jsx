import { act, cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { App } from '../src/main.jsx';
import GeographyAtlas from '../src/GeographyAtlas.jsx';
import { BIBLIOGRAPHY_RECORDS, ENCYCLOPEDIA_ENTRIES } from '../src/content/index.js';

const entryTitles = Object.fromEntries(Object.values(ENCYCLOPEDIA_ENTRIES).map(({ id, title }) => [id, title]));
function renderAtlas() { return render(<GeographyAtlas bibliography={BIBLIOGRAPHY_RECORDS} entryTitles={entryTitles} />); }
const cards = () => screen.getAllByRole('article');

beforeEach(() => { window.localStorage.clear(); window.history.replaceState(null, '', '/#geography'); });
afterEach(() => { cleanup(); vi.restoreAllMocks(); });

describe('geographic atlas', () => {
  it('filters by country, connection and period with a resettable empty state', async () => {
    const user = userEvent.setup();
    renderAtlas();
  expect(cards()).toHaveLength(157);
    await user.selectOptions(screen.getByRole('combobox', { name: /Country/ }), 'iran');
    expect(cards()).toHaveLength(2);
    expect(cards()[0]).toHaveTextContent('1979–2024');
    expect(cards()[1]).toHaveTextContent('1989');
    await user.selectOptions(screen.getByRole('combobox', { name: 'Period' }), '2000-onward');
    expect(screen.queryAllByRole('article')).toHaveLength(1);
    expect(cards()[0]).toHaveTextContent('1979–2024');
    await user.click(screen.getByRole('button', { name: 'Reset atlas filters' }));
    await user.selectOptions(screen.getByRole('combobox', { name: 'Connection' }), 'experimented');
    expect(cards()[0]).toHaveTextContent('Democratic confederalism');
  });

  it('keeps Lebanon’s contemporary continuation separately bounded from the post-Taif record', async () => {
    const user = userEvent.setup();
    renderAtlas();
    await user.selectOptions(screen.getByRole('combobox', { name: /Country/ }), 'map-422');
    expect(cards()).toHaveLength(2);
    expect(cards()[0]).toHaveTextContent('Lebanese post-Taif consociational and protest order');
    expect(cards()[1]).toHaveTextContent('Lebanese 2022–2026 presidential transition and sovereignty contestation');
    expect(cards()[1]).toHaveTextContent('through 23 September 2026');
  });

  it('shows label context before cases without inventing scored cards', async () => {
    const user = userEvent.setup();
    renderAtlas();
    await user.selectOptions(screen.getByRole('combobox', { name: 'Political label' }), 'nasserism');
    expect(cards()).toHaveLength(2);
    const context = screen.getByRole('complementary', { name: 'Selected political label' });
    expect(context).toHaveTextContent('no six-axis score assigned');
    expect(context.compareDocumentPosition(cards()[0]) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(within(cards()[0]).getByRole('link', { name: /Related encyclopedia/ })).toHaveAttribute('href', '#encyclopedia/anti-colonial-liberation');
  });

  it('normalizes accented aliases and persists a timeline URL', async () => {
    const user = userEvent.setup();
    renderAtlas();
    await user.type(screen.getByRole('searchbox'), 'Ocalan');
    expect(cards()).toHaveLength(1);
    await user.click(screen.getByRole('button', { name: 'Timeline', exact: true }));
    expect(window.location.hash).toContain('view=timeline');
    cleanup();
    renderAtlas();
    expect(screen.getByRole('searchbox')).toHaveValue('Ocalan');
    expect(screen.getByRole('list', { name: 'Chronological geographic cases' })).toBeInTheDocument();
    expect(cards()).toHaveLength(1);
  });

  it('restores a shared case and responds to back/forward hash state', async () => {
    window.history.replaceState(null, '', '/#geography?case=buber-jerusalem');
    renderAtlas();
    expect(cards()).toHaveLength(1);
    expect(cards()[0]).toHaveTextContent('Martin Buber');
    await act(async () => { window.history.replaceState(null, '', '/#geography?country=iran'); window.dispatchEvent(new PopStateEvent('popstate')); });
    expect(cards()[0]).toHaveTextContent('1989');
    expect(screen.getByRole('combobox', { name: /Country/ })).toHaveValue('iran');
  });

  it('preserves contested-place access and tracks newly catalogued Oceania', async () => {
    const user = userEvent.setup();
    renderAtlas();
    await user.selectOptions(screen.getByRole('combobox', { name: /Place \/ historical/ }), 'jerusalem');
    expect(cards()).toHaveLength(1);
    await user.click(screen.getByRole('button', { name: /Oceania/ }));
    expect(cards()).toHaveLength(13);
    expect(cards()[0]).toHaveTextContent('New Zealand Treaty, bicultural, constitutional and welfare-democratic order');
    expect(screen.getByRole('button', { name: /Oceania/ })).toHaveAttribute('aria-pressed', 'true');
    await user.click(within(screen.getByRole('group', { name: 'Browse continents' })).getByRole('button', { name: /Antarctica/ }));
    expect(cards()).toHaveLength(1);
    expect(cards()[0]).toHaveTextContent('Antarctic Treaty governance');
    expect(within(screen.getByRole('group', { name: 'Browse continents' })).getByRole('button', { name: /Antarctica/ })).toHaveAttribute('aria-pressed', 'true');
  });

  it('offers a manual share-link fallback on the HTTP LAN site', async () => {
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: vi.fn().mockRejectedValue(new Error('HTTP')) } });
    renderAtlas();
    fireEvent.click(screen.getByRole('button', { name: 'Copy link' }));
    expect(await screen.findByText(/Copy the selected link manually/)).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Share this atlas view/ })).toHaveFocus();
  });

  it('opens directly through the app route and loads a related encyclopedia page', async () => {
    const user = userEvent.setup();
    window.history.replaceState(null, '', '/#geography?case=iran-constitution-1989');
    render(<App />);
    expect(await screen.findByRole('heading', { name: /Ideas have histories/ })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Geographic Atlas/ })).toHaveAttribute('aria-selected', 'true');
    const link = within(cards()[0]).getByRole('link', { name: /Related encyclopedia/ });
    await user.click(link);
    await act(async () => { window.history.replaceState(null, '', link.getAttribute('href')); window.dispatchEvent(new HashChangeEvent('hashchange')); });
    expect(await screen.findByRole('heading', { name: ENCYCLOPEDIA_ENTRIES.theocratic.title, exact: true })).toBeInTheDocument();
  });
});
