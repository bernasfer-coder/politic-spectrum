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
  it('presents Albania’s first postal out-of-country vote with the observer and official-result boundaries intact', () => {
    window.history.replaceState(null, '', '/#geography?case=albania-2025-parliamentary-election-and-diaspora-vote');
    renderAtlas();
    expect(cards()).toHaveLength(1);
    expect(cards()[0]).toHaveTextContent('245,935 people in 85 countries');
    expect(cards()[0]).toHaveTextContent('about 41,000 applications were rejected');
    expect(cards()[0]).toHaveTextContent('1,207 ballot boxes in Tirana');
    expect(cards()[0]).toHaveTextContent('not proof of unreported spending');
    expect(cards()[0]).toHaveTextContent('No national ideological label or six-axis score');
  });

  it('shows the bounded 2026 Japanese snap election and preserves attribution limits on electoral access', () => {
    window.history.replaceState(null, '', '/#geography?case=japanese-2026-snap-election-and-electoral-access');
    renderAtlas();
    expect(cards()).toHaveLength(1);
    expect(cards()[0]).toHaveTextContent('23 January–15 June 2026');
    expect(cards()[0]).toHaveTextContent('315 seats');
    expect(cards()[0]).toHaveTextContent('44,642 polling stations');
    expect(cards()[0]).toHaveTextContent('are attributed legislative claims');
    expect(cards()[0]).toHaveTextContent('not evidence that any given elector was prevented from voting');
    expect(cards()[0]).toHaveTextContent('no six-axis score');
  });

  it('shows Djibouti’s 2025 eligibility amendment and distinguishes provisional observer figures from the final court tally', () => {
    window.history.replaceState(null, '', '/#geography?case=djibouti-2025-amendment-and-2026-presidential-election');
    renderAtlas();
    expect(cards()).toHaveLength(1);
    expect(cards()[0]).toHaveTextContent('2025–2026');
    expect(cards()[0]).toHaveTextContent('204,874 votes, 97.01%');
    expect(cards()[0]).toHaveTextContent('261,857 registered');
    expect(cards()[0]).toHaveTextContent('256,467 registered');
    expect(cards()[0]).toHaveTextContent('No ideological label or six-axis score');
    expect(cards()[0]).toHaveTextContent('No event-specific book-length analysis was located');
  });

  it('shows São Tomé and Príncipe’s 2026 parliamentary election only as a sourced pre-election snapshot', () => {
    window.history.replaceState(null, '', '/#geography?case=sao-tome-2026-national-assembly-election-pre-election');
    renderAtlas();
    expect(cards()).toHaveLength(1);
    expect(cards()[0]).toHaveTextContent('27 September 2026');
    expect(cards()[0]).toHaveTextContent('no findings about the 27 September vote');
    expect(cards()[0]).toHaveTextContent('No voting, counting, certified results');
    expect(cards()[0]).toHaveTextContent('no ideological label or six-axis score');
  });

  it('shows Sabah’s bounded 2025 election and distinguishes official returns from interpretation', () => {
    window.history.replaceState(null, '', '/#geography?case=sabah-2025-state-election-and-chief-minister-appointment');
    renderAtlas();
    expect(cards()).toHaveLength(1);
    expect(cards()[0]).toHaveTextContent('29–30 November 2025');
    expect(cards()[0]).toHaveTextContent('GRS) 29, Warisan 25');
    expect(cards()[0]).toHaveTextContent('64.35%');
    expect(cards()[0]).toHaveTextContent('same-author');
    expect(cards()[0]).toHaveTextContent('No six-axis score is warranted');
  });

  it('shows the 2026 Malaysian term-limit bill as a proposal that did not pass', () => {
    window.history.replaceState(null, '', '/#geography?case=malaysian-2026-prime-minister-term-limit-amendment');
    renderAtlas();
    expect(cards()).toHaveLength(1);
    expect(cards()[0]).toHaveTextContent('23 February–3 September 2026');
    expect(cards()[0]).toHaveTextContent('146 in favour, 44 members not voting and 32 absent');
    expect(cards()[0]).toHaveTextContent('No ideological classification or six-axis score is warranted');
    expect(cards()[0]).toHaveTextContent('no event-specific book-length analysis was located');
  });

  it('shows Sweden’s bounded 2026 election result and keeps government formation unresolved', () => {
    window.history.replaceState(null, '', '/#geography?case=sweden-2026-riksdag-election-and-government-formation');
    renderAtlas();
    expect(cards()).toHaveLength(1);
    expect(cards()[0]).toHaveTextContent('13–25 September 2026');
    expect(cards()[0]).toHaveTextContent('Social Democrats 99');
    expect(cards()[0]).toHaveTextContent('84.9 per cent');
    expect(cards()[0]).toHaveTextContent('exploratory assignment, not her appointment');
    expect(cards()[0]).toHaveTextContent('not be misreported as a full observation verdict');
    expect(cards()[0]).toHaveTextContent('No score or permanent label for Sweden');
  });

  it('filters by country, connection and period with a resettable empty state', async () => {
    const user = userEvent.setup();
    renderAtlas();
    expect(cards()).toHaveLength(205);
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

  it('shows the updated Uganda election result and distinguishes a withdrawn petition from a merits ruling', () => {
    window.history.replaceState(null, '', '/#geography?case=ugandan-late-museveni-order-and-2026-electoral-contestation');
    renderAtlas();
    expect(cards()).toHaveLength(1);
    expect(cards()[0]).toHaveTextContent('529-seat elected Parliament: NRM 371');
    expect(cards()[0]).toHaveTextContent('closed procedurally, not tried to a merits judgment');
    expect(cards()[0]).toHaveTextContent('The EAC record is preliminary');
    expect(cards()[0]).toHaveTextContent('accessible here only through its abstract/extract');
  });

  it('shows Gambian party registrations as administrative context, not presidential nominations', () => {
    window.history.replaceState(null, '', '/#geography?case=gambia-2026-presidential-election-pre-election-snapshot');
    renderAtlas();
    expect(cards()).toHaveLength(1);
    expect(cards()[0]).toHaveTextContent('National Builders Party, Gambia Labour Party and National Democratic Party');
    expect(cards()[0]).toHaveTextContent('do not say those parties will field presidential candidates');
    expect(cards()[0]).toHaveTextContent('disagreement with the Commission’s published calendar');
  });

  it('shows France’s 2027 budget timetable as prospective, not as an enacted outcome', () => {
    window.history.replaceState(null, '', '/#geography?case=france-2024-2026-minority-government-and-budget-crisis');
    renderAtlas();
    expect(cards()).toHaveLength(1);
    expect(cards()[0]).toHaveTextContent('forecasts of 0.5% growth and 2.1% inflation for 2026');
    expect(cards()[0]).toHaveTextContent('first part of the Finance Bill on 12–19 October');
    expect(cards()[0]).toHaveTextContent('whole-bill vote planned for 17 November');
    expect(cards()[0]).toHaveTextContent('The new budget proposal, scrutiny, votes and any enacted law remained future');
  });

  it('shows the bounded Bolivia 2025 election case and its documented evidence gap', async () => {
    const user = userEvent.setup();
    renderAtlas();
    await user.selectOptions(screen.getByRole('combobox', { name: /Country/ }), 'map-068');
    expect(cards()).toHaveLength(2);
    const caseCard = screen.getByRole('article', { name: 'Bolivia’s 2025 elections and executive transition' });
    expect(caseCard).toHaveTextContent('60,000-vote conflict');
    expect(caseCard).toHaveTextContent('No event-specific book-length scholarship was located');
  });

  it('shows the bounded Argentina 2025 election, attributed analysis and source limits', async () => {
    const user = userEvent.setup();
    renderAtlas();
    await user.selectOptions(screen.getByRole('combobox', { name: /Country/ }), 'map-032');
    const caseCard = screen.getByRole('article', { name: 'Argentina’s 2025 national midterm legislative election' });
    expect(caseCard).toHaveTextContent('Orr interprets this as a rightward party-system realignment');
    expect(caseCard).toHaveTextContent('did not collate all 24 actas');
    expect(caseCard).toHaveTextContent('does not assign Argentina, the electorate, LLA, Peronism or any other party a six-axis score');
  });

  it('shows the bounded Sudan war case with attributed civilian-protection evidence', async () => {
    window.history.replaceState(null, '', '/#geography?case=sudan-2023-25-war-fragmented-authority-and-civilian-protection');
    renderAtlas();
    expect(cards()).toHaveLength(1);
    expect(cards()[0]).toHaveTextContent('2023–2025');
    expect(cards()[0]).toHaveTextContent('at least 3,384 civilian deaths');
    expect(cards()[0]).toHaveTextContent('not a complete census or court judgment');
    expect(cards()[0]).toHaveTextContent('not a present-day control map');
  });

  it('shows the bounded Côte d’Ivoire 2025 election and separates the official result from observer and rights evidence', () => {
    window.history.replaceState(null, '', '/#geography?case=cote-divoire-2025-presidential-election-candidacy-and-civic-space');
    renderAtlas();
    expect(cards()).toHaveLength(1);
    expect(cards()[0]).toHaveTextContent('2025 · presidential election');
    expect(cards()[0]).toHaveTextContent('3,759,030 votes (89.77%)');
    expect(cards()[0]).toHaveTextContent('not a project audit of every polling station');
    expect(cards()[0]).toHaveTextContent('does not support a six-axis profile');
  });

  it('shows the South African GNU as a bounded unscored 2024–2026 case', () => {
    window.history.replaceState(null, '', '/#geography?case=south-african-2024-government-national-unity-coalition-transition');
    renderAtlas();
    expect(cards()).toHaveLength(1);
    expect(cards()[0]).toHaveTextContent('2024–2026');
    expect(cards()[0]).toHaveTextContent('No six-axis scores are assigned');
    expect(cards()[0]).toHaveTextContent('no book-length study of the complete period through 22 September 2026 was located');
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
