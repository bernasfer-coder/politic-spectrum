import { useEffect, useMemo, useRef, useState } from 'react';
import { GEOGRAPHY_CASES, GEOGRAPHY_CONTINENTS, GEOGRAPHY_LABELS, GEOGRAPHY_PLACES, GEOGRAPHY_RELATIONSHIPS, GEOGRAPHY_REVIEW_DATE } from './content/geography.js';
import { ARCHETYPES, ENCYCLOPEDIA_ENTRIES, TAXONOMY_LABELS } from './content/index.js';
import { filterGeographyCases, GEOGRAPHY_DEFAULTS, GEOGRAPHY_PERIODS, geographyHash, LABELS_BY_ID, PLACES_BY_ID, readGeographyState } from './geography-model.js';
import './geography.css';
import GeographyMap from './GeographyMap.jsx';
import { COUNTRY_OPTIONS } from './geography-map-model.js';

const RELATIONSHIPS_BY_ID = Object.fromEntries(GEOGRAPHY_RELATIONSHIPS.map((item) => [item.id, item]));
const LIBRARY_COUNTS = Object.freeze({ labels: TAXONOMY_LABELS.length, profiles: ARCHETYPES.length, entries: Object.keys(ENCYCLOPEDIA_ENTRIES).length });

function Select({ label, value, options, onChange }) {
  return <label className="geo-field"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}><option value="all">All</option>{options.map((option) => <option key={option.id ?? option} value={option.id ?? option}>{option.name ?? option.label ?? option}</option>)}</select></label>;
}

function Evidence({ sourceIds, locator, sources }) {
  return <details className="geo-evidence"><summary>Sources & reading limits ({sourceIds.length})</summary>
    {locator && <p><strong>Claim location:</strong> {locator}</p>}
    {sourceIds.map((id) => {
      const source = sources[id];
      return <div className="geo-source" key={id}><a href={source.canonicalUrl} target="_blank" rel="noreferrer">{source.title} ↗</a><p>{source.note}</p><p>{source.description}</p><a href={`#bibliography/${source.id}`}>Bibliography & rights record →</a></div>;
    })}
  </details>;
}

function Related({ item, entryTitles }) {
  return <div className="geo-related">{item.relatedEntries.map((entry) => <div key={entry.id}><a href={`#encyclopedia/${entry.id}`}>Related encyclopedia: {entryTitles[entry.id]} →</a><small>{entry.note}</small></div>)}
    {item.researchWorkId && <a href={`#bibliography/work-${item.researchWorkId}`}>Research work & edition limits →</a>}
  </div>;
}

export default function GeographyAtlas({ bibliography, entryTitles }) {
  const [state, setState] = useState(() => readGeographyState(window.location.hash));
  const [shareMessage, setShareMessage] = useState('');
  const shareInput = useRef(null);
  const sources = useMemo(() => Object.fromEntries(bibliography.flatMap((record) => record.citationIds.researchSourceIds.map((id) => [id, record]))), [bibliography]);
  const results = useMemo(() => filterGeographyCases(state), [state]);
  const label = state.label !== 'all' ? LABELS_BY_ID[state.label] : state.case ? LABELS_BY_ID[GEOGRAPHY_CASES.find(({ id }) => id === state.case).labelId] : null;
  const shareUrl = `${window.location.origin}${window.location.pathname}${window.location.search}${geographyHash(state)}`;
  const activeFilterCount = Object.keys(GEOGRAPHY_DEFAULTS).filter((key) => !['view', 'case'].includes(key) && state[key] !== GEOGRAPHY_DEFAULTS[key]).length;

  useEffect(() => {
    function sync() {
      if (/^#geography(?:\?|$)/.test(window.location.hash)) {
        setState(readGeographyState(window.location.hash));
        setShareMessage('');
      }
    }
    window.addEventListener('hashchange', sync);
    window.addEventListener('popstate', sync);
    return () => { window.removeEventListener('hashchange', sync); window.removeEventListener('popstate', sync); };
  }, []);

  function update(patch, replace = false) {
    const next = { ...state, case: '', ...patch };
    setState(next);
    setShareMessage('');
    const hash = geographyHash(next);
    if (hash !== window.location.hash) window.history[replace ? 'replaceState' : 'pushState'](null, '', hash);
  }

  async function copyLink() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(shareUrl);
      setShareMessage('Link copied.');
    } catch {
      shareInput.current?.focus();
      shareInput.current?.select();
      setShareMessage('Copy the selected link manually. Clipboard access may be unavailable on HTTP.');
    }
  }

  return <section className="geo-atlas" aria-labelledby="geo-heading">
    <div className="geo-heading"><div><p className="eyebrow">POLITICAL GEOGRAPHY · LIBRARY CROSS-REFERENCE</p><h2 id="geo-heading">Ideas have histories.<br /><em>Explore their places.</em></h2><p>Follow political ideas through the places where they were developed, advocated or put into practice.</p></div><div className="geo-stat"><strong>{GEOGRAPHY_CASES.length}</strong><span>documented cases</span><small>{GEOGRAPHY_LABELS.length} mapped traditions · reviewed {GEOGRAPHY_REVIEW_DATE}</small></div></div>

    <div className="geo-boundary"><strong>Cases, not labels for countries.</strong> The atlas is linked to the current research library and bibliography. A library label enters this map only when a place-specific claim has its own source and limitation; unmapped labels remain research gaps rather than guessed country matches. Country tags are modern locators, not claims about populations, historical sovereignty or today’s governments. Contemporary cases are dated snapshots, not live status reports.</div>

    <div className="geo-library-bridge" aria-label="Atlas coverage of the research library"><div><p className="eyebrow">ATLAS ↔ LIBRARY</p><h3>One vocabulary, two ways to learn.</h3><p>Use the library for the full label catalogue, six-axis profiles and encyclopedia entries. Use the atlas for dated, sourced place connections. These are complementary views, not interchangeable classifications.</p></div><div className="geo-library-bridge-stats"><a href="#library"><strong>{LIBRARY_COUNTS.labels}</strong><span>normalized labels</span></a><a href="#library"><strong>{LIBRARY_COUNTS.profiles}</strong><span>profile cards</span></a><a href="#library"><strong>{LIBRARY_COUNTS.entries}</strong><span>encyclopedia entries</span></a><div><strong>{GEOGRAPHY_LABELS.length}</strong><span>mapped traditions</span></div></div></div>

    <GeographyMap state={state} onSelect={update} resultCount={results.length} />

    <div className="geo-continents" role="group" aria-label="Browse continents">
      {['all', ...GEOGRAPHY_CONTINENTS].map((continent) => {
        const count = GEOGRAPHY_CASES.filter((item) => continent === 'all' || PLACES_BY_ID[item.placeId].continents.includes(continent)).length;
        return <button key={continent} aria-pressed={state.continent === continent} onClick={() => update({ continent, region: 'all', country: 'all', place: 'all' })}><span>{continent === 'all' ? 'All places' : continent}</span><small>{count ? `${count} cases` : 'Research gap'}</small></button>;
      })}
    </div>

    <div className="geo-filters" role="search" aria-label="Filter geographic cases">
      <label className="geo-field geo-search"><span>Search ideas, people or places</span><input type="search" maxLength={200} value={state.q} placeholder="Try Nasser, Baghdad or Öcalan…" onChange={(event) => update({ q: event.target.value }, true)} /></label>
      <Select label="Political label" value={state.label} options={GEOGRAPHY_LABELS} onChange={(label) => update({ label })} />
      <Select label="Connection" value={state.relationship} options={GEOGRAPHY_RELATIONSHIPS} onChange={(relationship) => update({ relationship })} />
      <Select label="Period" value={state.period} options={GEOGRAPHY_PERIODS} onChange={(period) => update({ period })} />
      <Select label="Region" value={state.region} options={[...new Set(GEOGRAPHY_PLACES.flatMap(({ regions }) => regions))].sort()} onChange={(region) => update({ region })} />
      <Select label="Country / territory · modern locator" value={state.country} options={COUNTRY_OPTIONS} onChange={(country) => update({ country })} />
      <Select label="Place / historical setting" value={state.place} options={GEOGRAPHY_PLACES} onChange={(place) => update({ place })} />
    </div>

    {label && <aside className="geo-label-context" aria-label="Selected political label"><p className="eyebrow">{label.family}</p><h3>{label.name}</h3><p>{label.description}</p><p className="geo-muted">Research label — no six-axis score assigned. Related encyclopedia links provide context, not equivalent profiles.</p><Related item={label} entryTitles={entryTitles} /><Evidence sourceIds={label.sourceIds} sources={sources} /></aside>}

    <div className="geo-toolbar"><p role="status">{results.length} of {GEOGRAPHY_CASES.length} cases{activeFilterCount ? ` · ${activeFilterCount} active filters` : ''}{state.case ? ' · shared case' : ''}</p><div role="group" aria-label="Geographic results view"><button aria-pressed={state.view === 'cards'} onClick={() => update({ view: 'cards', case: state.case })}>Cards</button><button aria-pressed={state.view === 'timeline'} onClick={() => update({ view: 'timeline', case: state.case })}>Timeline</button></div><button className="text-button" onClick={() => update({ ...GEOGRAPHY_DEFAULTS })}>Reset atlas filters</button></div>

    {results.length ? <ol className={`geo-results geo-${state.view}`} aria-label={state.view === 'timeline' ? 'Chronological geographic cases' : 'Geographic case cards'}>{results.map((item) => {
      const place = PLACES_BY_ID[item.placeId];
      const itemLabel = LABELS_BY_ID[item.labelId];
      const relationship = RELATIONSHIPS_BY_ID[item.relationship];
      return <li key={item.id}><article className="geo-card" aria-labelledby={`geo-title-${item.id}`}>
        <div className="geo-card-top"><span className={`geo-badge geo-${item.relationship}`} title={relationship.description}>{relationship.label}</span><span>{place.type}</span></div>
        <p className="geo-date">{item.periodLabel}</p>
        <h3 id={`geo-title-${item.id}`}>{itemLabel.name}</h3>
        <p className="geo-place">{place.name}</p>
        <dl><div><dt>Who</dt><dd>{item.actor}</dd></div><div><dt>Setting</dt><dd>{item.historicalSetting}</dd></div></dl>
        <p className="geo-claim">{item.claim}</p>
        <p className="geo-limit"><strong>Boundary:</strong> {item.limitation}</p>
        <details className="geo-place-detail"><summary>Location & date notes</summary><p>{place.modernLocation}. {place.note}</p><p>Date precision: {item.datePrecision}. Numeric dates support filtering; the displayed period states their limits. Evidence: {item.evidenceKind}. Editorial confidence: {item.confidence}. Source review: {item.reviewedAt}.</p></details>
        <Evidence sourceIds={item.sourceIds} locator={item.locator} sources={sources} />
        <Related item={itemLabel} entryTitles={entryTitles} />
        <div className="geo-card-actions"><a href={geographyHash({ ...GEOGRAPHY_DEFAULTS, label: item.labelId })}>Explore this label →</a><a href={geographyHash({ ...GEOGRAPHY_DEFAULTS, case: item.id })} aria-label={`Link to case: ${item.actor} · ${item.placeId}`}>Case permalink ↗</a></div>
      </article></li>;
    })}</ol> : <div className="geo-empty"><h3>No documented cases match these filters.</h3><p>This means a research gap or an empty filter combination—not that no political traditions existed here.</p><button className="secondary-button" onClick={() => update({ ...GEOGRAPHY_DEFAULTS })}>Show the starter collection</button></div>}

    <details className="geo-method"><summary>How to read this atlas</summary><dl>{GEOGRAPHY_RELATIONSHIPS.map(({ id, label, description }) => <div key={id}><dt>{label}</dt><dd>{description}</dd></div>)}</dl><p>A place can have several traditions and each tradition can have several places. Dates can mark an intellectual period, institutional text or observation—not the beginning and end of the ideology. Country, regional and continent tags overlap. Jerusalem, transnational networks and treaty areas have dedicated place filters instead of forced country assignments.</p><p>The current library contains {LIBRARY_COUNTS.labels} normalized labels, {LIBRARY_COUNTS.profiles} profile cards and {LIBRARY_COUNTS.entries} encyclopedia entries; this atlas maps the subset with documented place-specific evidence. “Implemented” does not mean successful, universal or complete. No spectrum scores are inferred from nationality, religion or location. The map navigates the same dated records as the cards and timeline; its boundaries do not represent historical or current ideological control. Zero cases indicates missing research.</p></details>
    <div className="geo-share"><label className="geo-field"><span>Share this atlas view</span><input ref={shareInput} readOnly value={shareUrl} onFocus={(event) => event.target.select()} /></label><button className="secondary-button" onClick={copyLink}>Copy link</button><p role="status">{shareMessage}</p></div>
  </section>;
}
