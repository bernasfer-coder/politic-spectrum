import { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ARCHETYPES,
  AUTHOR_REFERENCES,
  BIBLIOGRAPHY_ACCESS_DATE,
  BIBLIOGRAPHY_RECORDS,
  BAND_RANGES,
  DEFAULT_SCORES,
  DIMENSIONS,
  OPTION_LABELS,
  OPTION_VALUES,
  PALETTES,
  QUESTIONS,
  RESEARCH_SOURCES,
  RESEARCH_BACKLOG,
  RESEARCH_COVERAGE_MATRIX,
  RESEARCH_PEOPLE,
  RESEARCH_POLITICAL_FORMS,
  RESEARCH_RELATIONSHIPS,
  RESEARCH_SECTIONS,
  RESEARCH_WORKS,
  RIGHTS_RECORDS,
  SOURCES,
  SPECTRUM_BANDS,
  TAXONOMY_LABELS,
} from './content/index.js';
import './styles.css';


function calculateScores(answers) {
  return Object.fromEntries(DIMENSIONS.map(({ id }) => {
    const relevant = QUESTIONS.filter((question) => question.dimension === id && answers[question.id] !== undefined);
    const total = relevant.reduce((sum, question) => {
      const answer = answers[question.id];
      return sum + answer * question.polarity;
    }, 0);
    return [id, relevant.length ? Math.round(total / relevant.length) : 0];
  }));
}

function distanceBetween(left, right) {
  const total = DIMENSIONS.reduce((sum, { id }) => sum + ((left[id] - right[id]) ** 2), 0);
  return Math.sqrt(total / DIMENSIONS.length);
}

function getMatches(scores) {
  return ARCHETYPES
    .map((archetype) => ({ ...archetype, distance: distanceBetween(scores, archetype.profile) }))
    .sort((a, b) => a.distance - b.distance);
}

function formatScore(value) {
  return value > 0 ? `+${value}` : `${value}`;
}

function formatRange(range) {
  return `${formatScore(range[0])} to ${formatScore(range[1])}`;
}

function getBand(dimensionId, value) {
  const bands = SPECTRUM_BANDS[dimensionId].bands;
  return bands.find((band) => value >= band.min && value <= band.max) || bands[bands.length - 1];
}

function scoreLabel(value, dimension) {
  return getBand(dimension.id, value).label;
}

function EvidenceLinks({ citationIds = [], compact = false }) {
  const citations = citationIds.map((id) => ({ id, ...AUTHOR_REFERENCES[id] })).filter(({ author }) => author);
  if (!citations.length) return null;
  const directCitations = citations.filter((citation) => citation.quote && RIGHTS_RECORDS.authorReferences[citation.id]?.publicationStatus === 'allowed');
  const withheldDirectCitations = citations.filter((citation) => citation.quote && !directCitations.includes(citation));

  return <div className={compact ? 'evidence-links compact' : 'evidence-links'}>
    <div className="evidence-links-header"><span>{directCitations.length ? 'Text & authors' : 'Authors & works'}</span><em>{directCitations.length ? 'includes direct text' : 'interpretive synthesis'}</em></div>
    <div className="evidence-link-list">{citations.map((citation) => <a key={`${citation.author}-${citation.work}`} href={citation.url} target="_blank" rel="noreferrer">{citation.author} · {citation.work} ({citation.year}) ↗</a>)}</div>
    {withheldDirectCitations.length ? <small className="direct-citation"><strong>Quotation held:</strong> direct text is withheld until the exact edition/translation and publication rights are verified.</small> : null}
    {directCitations.map((citation) => <small className="direct-citation" key={`${citation.author}-${citation.locator}`}><strong>Direct text:</strong> “{citation.quote}” — {citation.author}, {citation.locator}.{citation.context ? ` ${citation.context}` : ''}</small>)}
  </div>;
}

const QUESTIONNAIRE_CACHE_KEY = 'politic-spectrum:questionnaire:v2';
const LEGACY_QUESTIONNAIRE_CACHE_KEY = 'politic-spectrum:questionnaire:v1';
const QUESTIONNAIRE_CACHE_VERSION = 2;

function loadQuestionnaireCache() {
  if (typeof window === 'undefined') return null;
  try {
    const stored = [QUESTIONNAIRE_CACHE_KEY, LEGACY_QUESTIONNAIRE_CACHE_KEY]
      .map((key) => window.localStorage.getItem(key))
      .filter(Boolean)
      .map((value) => {
        try {
          return JSON.parse(value);
        } catch {
          return null;
        }
      })
      .find((entry) => entry?.version === QUESTIONNAIRE_CACHE_VERSION || entry?.version === 1);
    if (!stored || !stored.answers || typeof stored.answers !== 'object') return null;
    const validQuestionIds = new Set(QUESTIONS.map(({ id }) => id));
    const answers = Object.fromEntries(Object.entries(stored.answers).filter(([id, value]) => validQuestionIds.has(id) && OPTION_VALUES.includes(value)));
    const firstUnanswered = QUESTIONS.findIndex(({ id }) => answers[id] === undefined);
    const complete = firstUnanswered === -1;
    const savedIndex = Number.isInteger(stored.questionIndex) ? Math.min(Math.max(stored.questionIndex, 0), QUESTIONS.length - 1) : 0;
    return { answers, complete, questionIndex: complete ? QUESTIONS.length - 1 : firstUnanswered >= 0 ? firstUnanswered : savedIndex };
  } catch {
    return null;
  }
}

function saveQuestionnaireCache(answers, questionIndex) {
  if (typeof window === 'undefined') return;
  try {
    if (Object.keys(answers).length === 0) {
      window.localStorage.removeItem(QUESTIONNAIRE_CACHE_KEY);
      window.localStorage.removeItem(LEGACY_QUESTIONNAIRE_CACHE_KEY);
      return;
    }
    window.localStorage.setItem(QUESTIONNAIRE_CACHE_KEY, JSON.stringify({ version: QUESTIONNAIRE_CACHE_VERSION, answers, questionIndex }));
  } catch {
    // Local storage can be unavailable in private browsing or restricted contexts.
  }
}

function getInitialMode() {
  if (typeof window !== 'undefined' && window.location.hash.startsWith('#bibliography')) return 'bibliography';
  return null;
}

function App() {
  const [cachedQuestionnaire] = useState(loadQuestionnaireCache);
  const [mode, setMode] = useState(() => getInitialMode() || (cachedQuestionnaire?.complete ? 'freemode' : 'questionnaire'));
  const [scores, setScores] = useState(cachedQuestionnaire?.complete ? calculateScores(cachedQuestionnaire.answers) : DEFAULT_SCORES);
  const [answers, setAnswers] = useState(cachedQuestionnaire?.answers ?? {});
  const [questionIndex, setQuestionIndex] = useState(cachedQuestionnaire?.questionIndex ?? 0);
  const [selectedTypeId, setSelectedTypeId] = useState('social-democratic');

  useEffect(() => {
    saveQuestionnaireCache(answers, questionIndex);
  }, [answers, questionIndex]);

  const matches = useMemo(() => getMatches(scores), [scores]);
  const topMatch = matches[0];
  const selectedType = ARCHETYPES.find((archetype) => archetype.id === selectedTypeId) || ARCHETYPES[0];
  const themeScores = mode === 'questionnaire' ? calculateScores(answers) : mode === 'library' ? selectedType.profile : scores;
  const themeMatch = useMemo(() => {
    const hasSignal = Object.values(themeScores).some((value) => value !== 0);
    return mode === 'library' ? selectedType : hasSignal ? getMatches(themeScores)[0] : { id: 'neutral' };
  }, [mode, selectedType, themeScores]);
  const palette = PALETTES[themeMatch.id] || PALETTES.neutral;
  const themeStyle = {
    '--cyan': palette.primary,
    '--violet': palette.secondary,
    '--orange': palette.warm,
    '--bg': palette.background,
    '--soft': palette.soft,
    '--muted': palette.muted,
    '--line': palette.line,
    '--theme-glow': palette.glow,
  };
  const currentQuestion = QUESTIONS[questionIndex];
  const currentDimension = DIMENSIONS.find(({ id }) => id === currentQuestion.dimension);
  const completedCount = QUESTIONS.filter(({ id }) => answers[id] !== undefined).length;
  const questionnaireComplete = completedCount === QUESTIONS.length;

  function selectAnswer(value) {
    setAnswers((previous) => ({ ...previous, [currentQuestion.id]: value }));
  }

  function showResult() {
    if (!questionnaireComplete) return;
    setScores(calculateScores(answers));
    changeMode('freemode');
  }

  function changeMode(nextMode) {
    setMode(nextMode);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', nextMode === 'bibliography' ? '#bibliography' : window.location.pathname);
    }
  }

  function resetQuestionnaire() {
    setAnswers({});
    setQuestionIndex(0);
    setScores(DEFAULT_SCORES);
    changeMode('questionnaire');
    if (typeof window !== 'undefined') window.localStorage.removeItem(LEGACY_QUESTIONNAIRE_CACHE_KEY);
  }

  function updateScore(dimensionId, value) {
    setScores((previous) => ({ ...previous, [dimensionId]: Number(value) }));
  }

  return (
    <div className="app-shell" style={themeStyle}>
      <header className="topbar">
        <div className="brand-lockup">
          <div className="brand-mark" aria-hidden="true"><span /><span /><span /></div>
          <div>
            <p className="brand-name">POLITIC SPECTRUM</p>
            <p className="brand-tagline">A five-axis political fingerprint</p>
          </div>
        </div>
        <div className="topbar-meta"><span className="palette-readout"><i className="palette-swatch" /> Palette: {palette.label}</span><span className="meta-divider" /> v0.1</div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">READ THE FULL MAP</p>
            <h1>Politics is more than<br /><em>left</em> or <em>right.</em></h1>
            <p className="hero-lede">Explore your political position across five independent dimensions. Build a profile from your answers, or move the axes yourself and see which documented patterns it resembles.</p>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-ring ring-three" />
            <div className="orbit-axis axis-a" /><div className="orbit-axis axis-b" /><div className="orbit-axis axis-c" />
            <div className="orbit-core">5D</div>
            <span className="orbit-label label-top">SOCIAL</span><span className="orbit-label label-right">MARKET</span><span className="orbit-label label-bottom">AUTHORITY</span><span className="orbit-label label-left">IDENTITY</span>
          </div>
        </section>

        <section className="workspace-panel">
          <div className="mode-switcher" role="tablist" aria-label="Analysis mode">
            <button className={mode === 'questionnaire' ? 'mode-tab active' : 'mode-tab'} onClick={() => changeMode('questionnaire')} role="tab" aria-selected={mode === 'questionnaire'}>
              <span className="tab-number">01</span><span><strong>Questionnaire</strong><small>Let the model find your position</small></span>
            </button>
            <button className={mode === 'freemode' ? 'mode-tab active' : 'mode-tab'} onClick={() => changeMode('freemode')} role="tab" aria-selected={mode === 'freemode'}>
              <span className="tab-number">02</span><span><strong>FreeMode</strong><small>Move the five axes yourself</small></span>
            </button>
            <button className={mode === 'library' ? 'mode-tab active' : 'mode-tab'} onClick={() => { setSelectedTypeId(topMatch.id); changeMode('library'); }} role="tab" aria-selected={mode === 'library'}>
              <span className="tab-number">03</span><span><strong>Spectrum Library</strong><small>Study each political type</small></span>
            </button>
            <button className={mode === 'bibliography' ? 'mode-tab active' : 'mode-tab'} onClick={() => changeMode('bibliography')} role="tab" aria-selected={mode === 'bibliography'}>
              <span className="tab-number">04</span><span><strong>Bibliography</strong><small>Trace every source and claim</small></span>
            </button>
          </div>

          {mode === 'questionnaire' ? (
            <Questionnaire
              currentQuestion={currentQuestion}
              currentDimension={currentDimension}
              questionIndex={questionIndex}
              answers={answers}
              completedCount={completedCount}
              questionnaireComplete={questionnaireComplete}
              onSelect={selectAnswer}
              onPrevious={() => setQuestionIndex((index) => Math.max(0, index - 1))}
              onNext={() => setQuestionIndex((index) => Math.min(QUESTIONS.length - 1, index + 1))}
              onShowResult={showResult}
              onReset={resetQuestionnaire}
            />
          ) : mode === 'freemode' ? (
            <FreeMode scores={scores} matches={matches} topMatch={topMatch} onUpdateScore={updateScore} onUseQuestionnaire={() => changeMode('questionnaire')} />
          ) : mode === 'library' ? (
            <SpectrumLibrary selectedType={selectedType} onSelectType={setSelectedTypeId} onLoadInFreeMode={() => { setScores({ ...selectedType.profile }); changeMode('freemode'); }} />
          ) : (
            <BibliographyPage />
          )}
        </section>
      </main>

      <footer className="site-footer">
        <p><strong>POLITIC SPECTRUM</strong> is an educational model, not a clinical or scientific diagnosis.</p>
        <p>Profiles are approximate. Sources and context matter more than labels. <button className="footer-link" onClick={() => changeMode('bibliography')}>Bibliography ↗</button></p>
      </footer>
    </div>
  );
}

function Questionnaire({ currentQuestion, currentDimension, questionIndex, answers, completedCount, questionnaireComplete, onSelect, onPrevious, onNext, onShowResult, onReset }) {
  const selected = answers[currentQuestion.id];
  const progress = ((questionIndex + 1) / QUESTIONS.length) * 100;

  return (
    <div className="questionnaire-view">
      <div className="section-heading-row">
        <div><p className="eyebrow">FIND YOUR POSITION</p><h2>Answer honestly, not strategically.</h2></div>
        <div className="progress-stat"><strong>{String(questionIndex + 1).padStart(2, '0')}</strong><span> / {String(QUESTIONS.length).padStart(2, '0')} questions</span></div>
      </div>
      <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>

      <div className="question-grid">
        <aside className="question-context">
          <div className="dimension-number">{currentDimension.index}</div>
          <p className="context-label">Current dimension</p>
          <h3>{currentDimension.label}</h3>
          <p>{currentDimension.description}</p>
          <div className="axis-mini"><span>{currentDimension.low}</span><i /><span>{currentDimension.high}</span></div>
          <div className="answered-count"><span className="checkmark">✓</span>{completedCount} of {QUESTIONS.length} answered</div>
        </aside>

        <div className="question-card">
          <p className="question-kicker">QUESTION {String(questionIndex + 1).padStart(2, '0')} <span>·</span> {currentDimension.questionLabel.toUpperCase()}</p>
          <h3>{currentQuestion.prompt}</h3>
          <p className="question-hint">Choose the response that best reflects your instinct. There are no correct answers.</p>
          <div className="answer-list">
            {OPTION_LABELS.map((label, index) => {
              const value = OPTION_VALUES[index];
              return <button key={label} className={selected === value ? 'answer-option selected' : 'answer-option'} onClick={() => onSelect(value)}><span className="option-radio">{selected === value ? '●' : '○'}</span><span>{label}</span><span className="option-arrow">→</span></button>;
            })}
          </div>
          <div className="question-actions">
            <button className="text-button" onClick={onPrevious} disabled={questionIndex === 0}>← Previous</button>
            {questionIndex < QUESTIONS.length - 1 ? <button className="primary-button" onClick={onNext} disabled={selected === undefined}>Next question <span>→</span></button> : <button className="primary-button" onClick={onShowResult} disabled={!questionnaireComplete}>Reveal my profile <span>✦</span></button>}
          </div>
        </div>
      </div>
      <div className="utility-row"><button className="text-button subdued" onClick={onReset}>Reset questionnaire</button><p>About 5 minutes <span>·</span> 25 questions <span>·</span> 5 dimensions <span>·</span> Saved locally in this browser</p></div>
    </div>
  );
}

function displayBibliographyValue(value) {
  if (value === null || value === undefined || value === '') return 'Not recorded';
  if (Array.isArray(value)) return value.length ? value.join(' · ') : 'Not recorded';
  return String(value);
}

function bibliographyRecordTypeLabel(recordType) {
  return recordType === 'author-reference' ? 'Author / work' : recordType === 'research-source' ? 'Research source' : recordType === 'research-work' ? 'Research work' : recordType === 'research-person' ? 'Person profile' : 'Context source';
}

function BibliographyPage() {
  const [filters, setFilters] = useState({ query: '', recordType: 'all', sourceType: 'all', discipline: 'all', dimension: 'all', region: 'all', tradition: 'all', period: 'all', entity: 'all', evidenceRole: 'all', reviewStatus: 'all', confidence: 'all', accessStatus: 'all', quote: 'all' });
  const [sort, setSort] = useState('title');
  const filterOptions = useMemo(() => ({
    recordType: [...new Set(BIBLIOGRAPHY_RECORDS.map((record) => record.recordType))].map(bibliographyRecordTypeLabel),
    sourceType: [...new Set(BIBLIOGRAPHY_RECORDS.map((record) => record.sourceType))].sort(),
    discipline: [...new Set(BIBLIOGRAPHY_RECORDS.map((record) => record.discipline))].sort(),
    dimension: DIMENSIONS.map(({ id, label }) => ({ value: id, label })),
    region: [...new Set(BIBLIOGRAPHY_RECORDS.flatMap((record) => record.relationships.regions))].sort(),
    tradition: [...new Set(BIBLIOGRAPHY_RECORDS.flatMap((record) => record.relationships.traditions))].sort(),
    period: [...new Set(BIBLIOGRAPHY_RECORDS.flatMap((record) => record.relationships.periods))].sort(),
    entity: [...new Set(BIBLIOGRAPHY_RECORDS.flatMap((record) => record.relationships.entities))].sort(),
    evidenceRole: [...new Set(BIBLIOGRAPHY_RECORDS.map((record) => record.evidenceRole))].sort(),
    reviewStatus: [...new Set(BIBLIOGRAPHY_RECORDS.map((record) => record.review.status))].sort(),
    confidence: [...new Set(BIBLIOGRAPHY_RECORDS.map((record) => record.review.confidence))].sort(),
    accessStatus: [...new Set(BIBLIOGRAPHY_RECORDS.map((record) => record.accessStatus))].sort(),
  }), []);
  const filteredRecords = useMemo(() => {
    const query = filters.query.trim().toLowerCase();
    const records = BIBLIOGRAPHY_RECORDS.filter((record) => {
      const searchable = [
        record.id,
        record.citationKey,
        record.title,
        ...record.creators,
        record.institution,
        record.sourceType,
        record.discipline,
        record.description,
        ...record.relationships.dimensions,
        ...record.relationships.bands,
        ...record.relationships.taxonomyLabelIds,
        ...record.relationships.archetypeIds,
        ...record.relationships.profileEntries,
        ...record.relationships.regions,
        ...record.relationships.traditions,
        ...record.relationships.periods,
        ...record.relationships.entities,
        ...record.relationships.works,
        ...record.relationships.people,
        ...record.relationships.claims,
      ].filter(Boolean).join(' ').toLowerCase();
      const recordTypeMatches = filters.recordType === 'all' || bibliographyRecordTypeLabel(record.recordType) === filters.recordType;
      const sourceTypeMatches = filters.sourceType === 'all' || record.sourceType === filters.sourceType;
      const disciplineMatches = filters.discipline === 'all' || record.discipline === filters.discipline;
      const dimensionMatches = filters.dimension === 'all' || record.relationships.dimensionIds.includes(filters.dimension);
      const regionMatches = filters.region === 'all' || record.relationships.regions.includes(filters.region);
      const traditionMatches = filters.tradition === 'all' || record.relationships.traditions.includes(filters.tradition);
      const periodMatches = filters.period === 'all' || record.relationships.periods.includes(filters.period);
      const entityMatches = filters.entity === 'all' || record.relationships.entities.includes(filters.entity);
      const roleMatches = filters.evidenceRole === 'all' || record.evidenceRole === filters.evidenceRole;
      const reviewMatches = filters.reviewStatus === 'all' || record.review.status === filters.reviewStatus;
      const confidenceMatches = filters.confidence === 'all' || record.review.confidence === filters.confidence;
      const accessMatches = filters.accessStatus === 'all' || record.accessStatus === filters.accessStatus;
      const quoteMatches = filters.quote === 'all' || (filters.quote === 'quote' ? Boolean(record.quoteLocator) : !record.quoteLocator);
      return (!query || searchable.includes(query)) && recordTypeMatches && sourceTypeMatches && disciplineMatches && dimensionMatches && regionMatches && traditionMatches && periodMatches && entityMatches && roleMatches && reviewMatches && confidenceMatches && accessMatches && quoteMatches;
    });

    return records.sort((left, right) => {
      if (sort === 'author') return displayBibliographyValue(left.creators[0] || left.institution).localeCompare(displayBibliographyValue(right.creators[0] || right.institution));
      if (sort === 'oldest' || sort === 'newest') {
        const leftYear = Number.parseInt(String(left.publicationDate ?? '').slice(0, 4), 10) || (sort === 'oldest' ? Number.MAX_SAFE_INTEGER : 0);
        const rightYear = Number.parseInt(String(right.publicationDate ?? '').slice(0, 4), 10) || (sort === 'oldest' ? Number.MAX_SAFE_INTEGER : 0);
        return sort === 'oldest' ? leftYear - rightYear : rightYear - leftYear;
      }
      if (sort === 'review') return left.review.status.localeCompare(right.review.status) || left.review.confidence.localeCompare(right.review.confidence);
      return left.title.localeCompare(right.title);
    });
  }, [filters, sort]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.location.hash.startsWith('#bibliography/')) return;
    const recordId = window.location.hash.slice('#bibliography/'.length);
    window.requestAnimationFrame(() => document.getElementById(`source-${recordId}`)?.scrollIntoView({ block: 'start' }));
  }, []);

  function updateFilter(key, value) {
    setFilters((previous) => ({ ...previous, [key]: value }));
  }

  function clearFilters() {
    setFilters({ query: '', recordType: 'all', sourceType: 'all', discipline: 'all', dimension: 'all', region: 'all', tradition: 'all', period: 'all', entity: 'all', evidenceRole: 'all', reviewStatus: 'all', confidence: 'all', accessStatus: 'all', quote: 'all' });
  }

  return (
    <div className="bibliography-view">
      <div className="section-heading-row bibliography-heading">
        <div><p className="eyebrow">SOURCE REGISTRY</p><h2>Every claim has a trail.</h2></div>
        <div className="bibliography-count"><strong>{BIBLIOGRAPHY_RECORDS.length}</strong><span>records · reviewed {BIBLIOGRAPHY_ACCESS_DATE}</span></div>
      </div>
      <p className="bibliography-intro">This catalogue records the sources currently used by the questionnaire, five-axis bands, spectrum profiles, and normalized label catalogue. It distinguishes primary texts, scholarly interpretation, methodology, and contextual links so a citation is not mistaken for proof of an exact label or position.</p>
      <div className="bibliography-notice"><span>!</span><p><strong>Editorial rule:</strong> “Not recorded” means the project has not verified that field. Rights status describes what this app may publish, not a legal clearance for the linked work. <a href="https://github.com/bernasfer-coder/politic-spectrum/issues/12" target="_blank" rel="noreferrer">Suggest a correction or source update ↗</a></p></div>

      <div className="bibliography-filters" aria-label="Filter bibliography records">
        <label className="bibliography-search"><span>Search title, author, ID, claim, or place</span><input type="search" value={filters.query} onChange={(event) => updateFilter('query', event.target.value)} placeholder="e.g. nationalism, Hayek, foreign policy" /></label>
        <FilterSelect label="Record" value={filters.recordType} options={filterOptions.recordType.map((label) => ({ value: label, label }))} onChange={(value) => updateFilter('recordType', value)} />
        <FilterSelect label="Source type" value={filters.sourceType} options={filterOptions.sourceType} onChange={(value) => updateFilter('sourceType', value)} />
        <FilterSelect label="Discipline" value={filters.discipline} options={filterOptions.discipline} onChange={(value) => updateFilter('discipline', value)} />
        <FilterSelect label="Dimension" value={filters.dimension} options={filterOptions.dimension} onChange={(value) => updateFilter('dimension', value)} />
        <FilterSelect label="Region" value={filters.region} options={filterOptions.region} onChange={(value) => updateFilter('region', value)} />
        <FilterSelect label="Tradition / family" value={filters.tradition} options={filterOptions.tradition} onChange={(value) => updateFilter('tradition', value)} />
        <FilterSelect label="Period" value={filters.period} options={filterOptions.period} onChange={(value) => updateFilter('period', value)} />
        <FilterSelect label="Entity / place" value={filters.entity} options={filterOptions.entity} onChange={(value) => updateFilter('entity', value)} />
        <FilterSelect label="Evidence role" value={filters.evidenceRole} options={filterOptions.evidenceRole} onChange={(value) => updateFilter('evidenceRole', value)} />
        <FilterSelect label="Review" value={filters.reviewStatus} options={filterOptions.reviewStatus} onChange={(value) => updateFilter('reviewStatus', value)} />
        <FilterSelect label="Confidence" value={filters.confidence} options={filterOptions.confidence} onChange={(value) => updateFilter('confidence', value)} />
        <FilterSelect label="Access" value={filters.accessStatus} options={filterOptions.accessStatus} onChange={(value) => updateFilter('accessStatus', value)} />
        <FilterSelect label="Direct quote" value={filters.quote} options={[{ value: 'quote', label: 'Has locator' }, { value: 'no-quote', label: 'No locator' }]} onChange={(value) => updateFilter('quote', value)} />
      </div>

      <div className="bibliography-result-bar"><span>{filteredRecords.length} of {BIBLIOGRAPHY_RECORDS.length} records</span><label>Sort <select value={sort} onChange={(event) => setSort(event.target.value)}><option value="title">Title A–Z</option><option value="author">Author / institution</option><option value="oldest">Publication oldest</option><option value="newest">Publication newest</option><option value="review">Review status</option></select></label><button className="text-button subdued" onClick={clearFilters}>Clear filters</button></div>

      {filteredRecords.length ? <div className="bibliography-grid">{filteredRecords.map((record) => <BibliographyRecord key={record.id} record={record} />)}</div> : <div className="bibliography-empty"><strong>No bibliography records match these filters.</strong><p>Clear one filter or search for an author, source ID, dimension, or label.</p></div>}
      <p className="bibliography-footnote">Stable anchors use each record’s ID. The catalogue is generated from structured content in the repository; build validation checks citation resolution, duplicate IDs and URLs, rights metadata, and relationship integrity.</p>
    </div>
  );
}

function BibliographyRecord({ record }) {
  const relationships = [
    ['Dimensions', record.relationships.dimensions],
    ['Bands', record.relationships.bands],
    ['Labels', record.relationships.taxonomyLabelIds],
    ['Regions', record.relationships.regions],
    ['Traditions / families', record.relationships.traditions],
    ['Periods', record.relationships.periods],
    ['Entities / places', record.relationships.entities],
    ['Spectrum profiles', record.relationships.archetypeIds],
    ['Profile examples', record.relationships.profileEntries],
    ['Claims', record.relationships.claims],
    ['Works / evidence base', record.relationships.works],
    ['People', record.relationships.people],
  ].filter(([, values]) => values.length);
  const publicationNote = record.quoteLocator ? record.publicationStatus === 'allowed' ? 'Direct quotation approved for this record.' : 'Direct quotation held pending exact edition, translation, and rights review.' : 'No direct quotation is published for this record.';

  return (
    <article className="bibliography-card" id={`source-${record.id}`}>
      <div className="bibliography-card-top"><div><p className="bibliography-card-kicker">{bibliographyRecordTypeLabel(record.recordType)} · {record.evidenceRole}</p><h3>{record.title}</h3><p className="bibliography-creators">{displayBibliographyValue(record.creators.length ? record.creators : record.institution)}</p></div><a className="bibliography-anchor" href={`#bibliography/${record.id}`} aria-label={`Stable link to ${record.title}`}>#{record.citationKey}</a></div>
      <p className="bibliography-description">{record.description}</p>
      <div className="bibliography-meta-grid">
        <div><span>Type / discipline</span><strong>{record.sourceType}</strong><small>{record.discipline}</small></div>
        <div><span>Publication / publisher</span><strong>{displayBibliographyValue(record.publicationDate)}</strong><small>{displayBibliographyValue(record.publisher)}</small></div>
        <div><span>Language / identifier</span><strong>{displayBibliographyValue(record.languages)}</strong><small>{Object.keys(record.identifiers).length ? Object.entries(record.identifiers).map(([key, value]) => `${key}: ${value}`).join(' · ') : 'Not recorded'}</small></div>
        <div><span>Review / confidence</span><strong>{record.review.status}</strong><small>{record.review.confidence} · {record.review.reviewedAt}</small></div>
      </div>
      <div className="bibliography-badges"><span>{record.accessStatus}</span><span>{record.publicationStatus}</span><span>{record.rightsStatus}</span>{record.quoteLocator && <span>locator: {record.quoteLocator}</span>}</div>
      <p className="bibliography-rights"><strong>Rights note:</strong> {record.license} {publicationNote}</p>
      <div className="bibliography-card-actions"><a href={record.canonicalUrl} target="_blank" rel="noreferrer">Open canonical source ↗</a><span>accessed {record.accessDate}</span></div>
      <details className="bibliography-usage"><summary>Where this record is used</summary><div className="bibliography-usage-grid">{relationships.length ? relationships.map(([label, values]) => <div key={label}><span>{label}</span><p>{values.join(' · ')}</p></div>) : <p>No downstream usage mapping is recorded.</p>}</div></details>
    </article>
  );
}

function SpectrumLibrary({ selectedType, onSelectType, onLoadInFreeMode }) {
  const [filters, setFilters] = useState({ query: '', family: 'all', labelType: 'all', region: 'all', status: 'all', axis: 'all' });
  const filterOptions = useMemo(() => ({
    family: [...new Set(TAXONOMY_LABELS.map(({ family }) => family))].sort(),
    labelType: [...new Set(TAXONOMY_LABELS.map(({ labelType }) => labelType))].sort(),
    region: [...new Set(TAXONOMY_LABELS.map(({ region }) => region))].sort(),
    status: [...new Set(TAXONOMY_LABELS.map(({ status }) => status))].sort(),
  }), []);
  const filteredLabels = useMemo(() => {
    const query = filters.query.trim().toLowerCase();
    return TAXONOMY_LABELS.filter((label) => {
      const searchable = [label.canonicalName, ...label.aliases, label.family, label.region, label.period, label.summary].join(' ').toLowerCase();
      const queryMatches = !query || searchable.includes(query);
      const familyMatches = filters.family === 'all' || label.family === filters.family;
      const typeMatches = filters.labelType === 'all' || label.labelType === filters.labelType;
      const regionMatches = filters.region === 'all' || label.region === filters.region;
      const statusMatches = filters.status === 'all' || label.status === filters.status;
      const axisMatches = filters.axis === 'all' || Number.isFinite(label.axisPositions?.[filters.axis]);
      return queryMatches && familyMatches && typeMatches && regionMatches && statusMatches && axisMatches;
    });
  }, [filters]);

  function updateFilter(key, value) {
    setFilters((previous) => ({ ...previous, [key]: value }));
  }

  return (
    <div className="library-view">
      <div className="section-heading-row">
        <div><p className="eyebrow">REFERENCE PROFILES</p><h2>Select a spectrum. Read the logic.</h2></div>
        <button className="secondary-button" onClick={onLoadInFreeMode}>Load this profile <span>↗</span></button>
      </div>
      <p className="library-intro">Choose a reference pattern below. The five cards explain not only where it sits on each axis, but why that position follows from the underlying political ideas.</p>

      <div className="type-picker" role="listbox" aria-label="Political spectrum reference profiles">
        {ARCHETYPES.map((archetype) => <button key={archetype.id} className={selectedType.id === archetype.id ? 'type-option selected' : 'type-option'} onClick={() => onSelectType(archetype.id)} aria-selected={selectedType.id === archetype.id}><span className="type-swatch" style={{ background: archetype.accent }} /><span><strong>{archetype.name}</strong><small>{archetype.profile.economic < 0 ? 'Market-leaning' : 'Collectivist-leaning'} · {archetype.profile.authority < 0 ? 'Low authority' : 'High authority'}</small></span><span className="type-arrow">→</span></button>)}
      </div>

      <div className="library-detail">
        <div className="library-detail-heading"><div><p className="eyebrow">SELECTED REFERENCE</p><h3><span className="accent-dot" style={{ background: selectedType.accent }} />{selectedType.name}</h3><p>{selectedType.summary}</p><EvidenceLinks citationIds={selectedType.summaryCitationIds} /></div><div className="library-score-note"><span>Profile coordinates</span><strong>5 axes · −100 to +100</strong></div></div>
        {selectedType.warning && <div className="warning-banner"><span>!</span><p><strong>Historical context:</strong> {selectedType.warning}</p></div>}
        <div className="library-axis-list">{DIMENSIONS.map((dimension) => { const value = selectedType.profile[dimension.id]; const band = getBand(dimension.id, value); const fill = `${(value + 100) / 2}%`; return <article className="library-axis-card" key={dimension.id}><div className="library-axis-top"><span className="axis-index">{dimension.index}</span><div><h4>{dimension.label}</h4><p>{dimension.low} <span>↔</span> {dimension.high}</p></div><strong>{formatScore(value)}</strong></div><div className="library-range"><i><b style={{ width: fill, background: selectedType.accent }} /></i><span className="library-zero" /><span className="library-marker" style={{ left: fill, borderColor: selectedType.accent, background: selectedType.accent }} /></div><div className="library-axis-label"><strong>{band.label}</strong><span>Band {BAND_RANGES.findIndex(([min, max]) => value >= min && value <= max) + 1} / 10</span></div><div className="band-description"><p>{band.summary}</p><EvidenceLinks citationIds={band.citationIds} compact /></div><div className="reason-block"><span>Why this profile lands here</span><p>{selectedType.dimensionNotes[dimension.id]}</p><EvidenceLinks citationIds={selectedType.dimensionCitationIds[dimension.id]} compact /></div></article>; })}</div>
      </div>

      <TaxonomyCatalogue filters={filters} filterOptions={filterOptions} filteredLabels={filteredLabels} onUpdateFilter={updateFilter} />
      <ResearchAtlas />
    </div>
  );
}

function TaxonomyCatalogue({ filters, filterOptions, filteredLabels, onUpdateFilter }) {
  return (
    <section className="taxonomy-catalogue">
      <div className="taxonomy-heading">
        <div><p className="eyebrow">NORMALIZED LABEL CATALOGUE</p><h3>Search political traditions without flattening them.</h3></div>
        <p>A sourced starter registry of historical and contemporary labels. Aliases are searchable, while differences and uncertainty stay visible.</p>
      </div>

      <div className="taxonomy-filters" aria-label="Filter political labels">
        <label className="taxonomy-search"><span>Search labels</span><input type="search" value={filters.query} onChange={(event) => onUpdateFilter('query', event.target.value)} placeholder="e.g. nationalism, councils, liberal" /></label>
        <FilterSelect label="Family" value={filters.family} options={filterOptions.family} onChange={(value) => onUpdateFilter('family', value)} />
        <FilterSelect label="Label type" value={filters.labelType} options={filterOptions.labelType} onChange={(value) => onUpdateFilter('labelType', value)} />
        <FilterSelect label="Region" value={filters.region} options={filterOptions.region} onChange={(value) => onUpdateFilter('region', value)} />
        <FilterSelect label="Status" value={filters.status} options={filterOptions.status} onChange={(value) => onUpdateFilter('status', value)} />
        <FilterSelect label="Axis coverage" value={filters.axis} options={DIMENSIONS.map(({ id, label }) => ({ value: id, label }))} onChange={(value) => onUpdateFilter('axis', value)} />
      </div>

      <div className="taxonomy-result-bar"><span>{filteredLabels.length} of {TAXONOMY_LABELS.length} labels</span><span>Search covers canonical names, aliases, periods, regions, and summaries.</span></div>

      {filteredLabels.length ? (
        <div className="taxonomy-grid">
          {filteredLabels.map((label) => <TaxonomyCard key={label.id} label={label} />)}
        </div>
      ) : (
        <div className="taxonomy-empty"><strong>No labels match these filters.</strong><p>Try clearing one filter or searching for an alias.</p></div>
      )}

      <p className="taxonomy-disclaimer">The axis positions are approximate interpretive coordinates, not historical measurements. Broad labels such as populism and monarchism can vary substantially by time, place, faction, and policy.</p>
    </section>
  );
}

function FilterSelect({ label, value, options, onChange }) {
  const normalizedOptions = options.map((option) => typeof option === 'string' ? { value: option, label: option } : option);
  return <label className="taxonomy-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}><option value="all">All</option>{normalizedOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>;
}

function TaxonomyCard({ label }) {
  const coveredAxes = DIMENSIONS.filter((dimension) => Number.isFinite(label.axisPositions?.[dimension.id]));
  return (
    <article className="taxonomy-card">
      <div className="taxonomy-card-top"><div><p className="taxonomy-card-kicker">{label.labelType} · {label.status}</p><h4>{label.canonicalName}</h4></div>{label.warning && <span className="taxonomy-warning">Context-sensitive</span>}</div>
      <p className="taxonomy-summary">{label.summary}</p>
      <div className="taxonomy-meta"><span>{label.family}</span><span>{label.region}</span><span>{label.period}</span></div>
      <div className="taxonomy-axis-chips">{coveredAxes.length ? coveredAxes.map((dimension) => { const value = label.axisPositions[dimension.id]; return <span key={dimension.id}><b>{dimension.questionLabel}</b> {getBand(dimension.id, value).label}</span>; }) : <span><b>Axis profile</b> varies by context</span>}</div>
      <details className="taxonomy-differences"><summary>How this differs from nearby labels</summary><p>{label.differences}</p></details>
      <div className="taxonomy-aliases"><span>Aliases</span><p>{label.aliases.join(' · ')}</p></div>
      {label.warning && <p className="taxonomy-warning-note">{label.warning}</p>}
      <div className="taxonomy-sources"><span>Sources</span>{label.sourceIds.map((sourceId) => { const source = RESEARCH_SOURCES.find((item) => item.id === sourceId); return source ? <a key={source.id} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a> : null; })}</div>
    </article>
  );
}

function ResearchAtlas() {
  const [filters, setFilters] = useState({ query: '', recordType: 'all', role: 'all', region: 'all', period: 'all', language: 'all', dimension: 'all', confidence: 'all' });
  const [showAll, setShowAll] = useState(false);
  const workEntries = useMemo(() => RESEARCH_WORKS.map((work) => ({ ...work, entryType: 'work', recordId: `work-${work.id}` })), []);
  const peopleEntries = useMemo(() => RESEARCH_PEOPLE.map((person) => ({ ...person, entryType: 'person', recordId: `person-${person.id}` })), []);
  const entries = useMemo(() => [...workEntries, ...peopleEntries], [peopleEntries, workEntries]);
  const personById = useMemo(() => Object.fromEntries(RESEARCH_PEOPLE.map((person) => [person.id, person])), []);
  const workById = useMemo(() => Object.fromEntries(RESEARCH_WORKS.map((work) => [work.id, work])), []);
  const filterOptions = useMemo(() => ({
    role: [...new Set(RESEARCH_PEOPLE.flatMap(({ roles }) => roles))].sort(),
    region: [...new Set(entries.flatMap((entry) => entry.regions ?? [entry.region]))].filter(Boolean).sort(),
    period: [...new Set(entries.flatMap((entry) => entry.periods ?? [entry.period]))].filter(Boolean).sort(),
    language: [...new Set(entries.flatMap((entry) => entry.entryType === 'work' ? [entry.originalLanguage] : entry.works.flatMap((workId) => workById[workId]?.originalLanguage ?? [])))].filter(Boolean).sort(),
    dimension: DIMENSIONS.map(({ id, label }) => ({ value: id, label })),
    confidence: [...new Set(RESEARCH_PEOPLE.map(({ confidence }) => confidence))].sort(),
  }), [entries, workById]);
  const filteredEntries = useMemo(() => {
    const query = filters.query.trim().toLowerCase();
    return entries.filter((entry) => {
      const searchable = [entry.id, entry.title, entry.fullName, ...(entry.creators ?? []), ...(entry.roles ?? []), ...(entry.traditions ?? []), ...(entry.regions ?? [entry.region]), ...(entry.periods ?? [entry.period]), entry.context, entry.selfDescription].filter(Boolean).join(' ').toLowerCase();
      const queryMatches = !query || searchable.includes(query);
      const typeMatches = filters.recordType === 'all' || entry.entryType === filters.recordType;
      const roleMatches = filters.role === 'all' || entry.roles?.includes(filters.role);
      const regionMatches = filters.region === 'all' || (entry.regions ?? [entry.region]).includes(filters.region);
      const periodMatches = filters.period === 'all' || (entry.periods ?? [entry.period]).includes(filters.period);
      const languages = entry.entryType === 'work' ? [entry.originalLanguage] : entry.works.flatMap((workId) => workById[workId]?.originalLanguage ?? []);
      const languageMatches = filters.language === 'all' || languages.includes(filters.language);
      const dimensionMatches = filters.dimension === 'all' || entry.dimensionIds?.includes(filters.dimension);
      const confidenceMatches = filters.confidence === 'all' || entry.confidence === filters.confidence || entry.review?.confidence === filters.confidence;
      return queryMatches && typeMatches && roleMatches && regionMatches && periodMatches && languageMatches && dimensionMatches && confidenceMatches;
    });
  }, [entries, filters, workById]);

  function updateFilter(key, value) {
    setShowAll(false);
    setFilters((previous) => ({ ...previous, [key]: value }));
  }

  function clearFilters() {
    setShowAll(false);
    setFilters({ query: '', recordType: 'all', role: 'all', region: 'all', period: 'all', language: 'all', dimension: 'all', confidence: 'all' });
  }

  const visibleEntries = showAll ? filteredEntries : filteredEntries.slice(0, 8);

  return (
    <section className="research-atlas">
      <div className="research-atlas-heading">
        <div><p className="eyebrow">RESEARCH ATLAS</p><h3>Read the evidence behind the labels.</h3></div>
        <p>A curated, expandable inventory of primary works, legal documents, scholars, leaders, and movement voices. Ranges show interpretation; they are not claims of exact ideological identity.</p>
      </div>
      <div className="atlas-stats"><div><strong>{RESEARCH_WORKS.length}</strong><span>works & legal texts</span></div><div><strong>{RESEARCH_PEOPLE.length}</strong><span>documented people</span></div><div><strong>{RESEARCH_RELATIONSHIPS.length}</strong><span>cautious relationships</span></div><div><strong>{RESEARCH_BACKLOG.length}</strong><span>open research gaps</span></div></div>
      <ResearchCoverageMatrix />
      <details className="atlas-sections"><summary>Recurring political forms · {RESEARCH_POLITICAL_FORMS.length} patterns</summary><div className="atlas-section-grid">{RESEARCH_POLITICAL_FORMS.map((form) => <div key={form.id}><strong>{form.label}</strong><p>{form.description}</p><small><strong>Anchors:</strong> {form.workIds.map((workId) => workById[workId]?.title ?? workId).join(' · ')}</small><p className="atlas-coverage-note"><strong>Boundary:</strong> {form.caution}</p></div>)}</div></details>
      <details className="atlas-sections"><summary>Editorial map · {RESEARCH_SECTIONS.length} sections</summary><div className="atlas-section-grid">{RESEARCH_SECTIONS.map((section) => <div key={section.id}><strong>{section.label}</strong><p>{section.description}</p></div>)}</div></details>
      <details className="atlas-backlog"><summary>Prioritized bibliography backlog · {RESEARCH_BACKLOG.length} items</summary><div className="atlas-backlog-list">{RESEARCH_BACKLOG.map((item) => <div key={item.id}><span className={`atlas-priority ${item.priority}`}>{item.priority}</span><strong>{item.title}</strong><p>{item.reason}</p></div>)}</div></details>

      <div className="atlas-filter-heading"><div><p className="eyebrow">EXPLORE THE INVENTORY</p><h4>Curated first, searchable when you want depth.</h4></div><button className="text-button subdued" onClick={clearFilters}>Clear filters</button></div>
      <div className="atlas-filters" aria-label="Filter research inventory">
        <label className="atlas-search"><span>Search people, works, traditions</span><input type="search" value={filters.query} onChange={(event) => updateFilter('query', event.target.value)} placeholder="e.g. constitutionalism, Gandhi, commons" /></label>
        <FilterSelect label="Record" value={filters.recordType} options={[{ value: 'work', label: 'Works & legal texts' }, { value: 'person', label: 'People' }]} onChange={(value) => updateFilter('recordType', value)} />
        <FilterSelect label="Role" value={filters.role} options={filterOptions.role} onChange={(value) => updateFilter('role', value)} />
        <FilterSelect label="Region" value={filters.region} options={filterOptions.region} onChange={(value) => updateFilter('region', value)} />
        <FilterSelect label="Period" value={filters.period} options={filterOptions.period} onChange={(value) => updateFilter('period', value)} />
        <FilterSelect label="Language" value={filters.language} options={filterOptions.language} onChange={(value) => updateFilter('language', value)} />
        <FilterSelect label="Dimension" value={filters.dimension} options={filterOptions.dimension} onChange={(value) => updateFilter('dimension', value)} />
        <FilterSelect label="Confidence" value={filters.confidence} options={filterOptions.confidence} onChange={(value) => updateFilter('confidence', value)} />
      </div>
      <div className="atlas-result-bar"><span>{filteredEntries.length} of {entries.length} entries</span><span>Every entry shows its evidence boundary and review state.</span></div>
      {visibleEntries.length ? <div className="atlas-grid">{visibleEntries.map((entry) => <ResearchEntryCard key={entry.recordId} entry={entry} workById={workById} />)}</div> : <div className="atlas-empty"><strong>No research entries match these filters.</strong><p>Clear one filter or broaden the search.</p></div>}
      {filteredEntries.length > 8 && <button className="atlas-more" onClick={() => setShowAll((previous) => !previous)}>{showAll ? 'Show curated set' : `Show all ${filteredEntries.length} entries`} <span>{showAll ? '↑' : '↓'}</span></button>}
      <ResearchRelationshipMap personById={personById} workById={workById} />
      <p className="research-atlas-note">Editorial rule: direct evidence, paraphrase, analyst interpretation, and illustrative matching remain separate. A person may illuminate one dimension and be a poor match on another.</p>
    </section>
  );
}

function ResearchCoverageMatrix() {
  return <details className="atlas-coverage"><summary>Coverage matrix · {RESEARCH_COVERAGE_MATRIX.reduce((sum, row) => sum + row.bands.filter((band) => band.status === 'strong').length, 0)} strong bands, gaps marked</summary><p className="atlas-coverage-note">Counts combine works and people whose documented position range overlaps a 20-point band. “Thin” means one or two evidence anchors; “gap” means the expanded inventory still needs research.</p><div className="coverage-grid">{RESEARCH_COVERAGE_MATRIX.map((row) => { const dimension = DIMENSIONS.find(({ id }) => id === row.dimensionId); return <div className="coverage-row" key={row.dimensionId}><div className="coverage-label"><strong>{dimension.label}</strong><span>{dimension.low} ↔ {dimension.high}</span></div><div className="coverage-bands">{row.bands.map((band) => <span className={`coverage-cell ${band.status}`} key={`${row.dimensionId}-${band.band}`} title={`${dimension.label}, band ${band.band}: ${band.total} evidence anchors`}><b>{band.band}</b><small>{band.total}</small></span>)}</div></div>; })}</div><div className="coverage-legend"><span className="strong">Strong · 3+</span><span className="thin">Thin · 1–2</span><span className="gap">Gap · 0</span></div></details>;
}

function ResearchEntryCard({ entry, workById }) {
  const isWork = entry.entryType === 'work';
  const dimensionItems = isWork ? entry.claims : DIMENSIONS.map((dimension) => ({ dimensionId: dimension.id, positionRange: entry.profile[dimension.id].range, summary: entry.profile[dimension.id].note, evidenceType: 'analyst range' }));
  const confidence = isWork ? entry.review.confidence : entry.confidence;
  const regions = isWork ? entry.regions : [entry.region];
  const periods = isWork ? entry.periods : [entry.period];
  return <article className="research-entry-card"><div className="research-entry-top"><div><p className="research-entry-kicker">{isWork ? 'WORK / LEGAL TEXT' : 'DOCUMENTED PERSON'} · {isWork ? entry.evidenceRole : entry.roles.slice(0, 2).join(' · ')}</p><h4>{isWork ? entry.title : entry.fullName}</h4><p className="research-entry-creators">{isWork ? entry.creators.join(' · ') : entry.dates}</p></div><span className={`research-confidence ${confidence}`}>{confidence}</span></div><p className="research-entry-context"><strong>Why this appears:</strong> {entry.context}</p><div className="research-entry-meta"><span>{isWork ? entry.sourceType : entry.discipline}</span><span>{regions.join(' · ')}</span><span>{periods.join(' · ')}</span></div>{!isWork && <p className="research-self-description"><strong>Self-description:</strong> {entry.selfDescription}</p>}<div className="research-claims"><span>Evidence by dimension</span>{dimensionItems.map((item) => { const dimension = DIMENSIONS.find(({ id }) => id === item.dimensionId); return <div className="research-claim" key={item.id ?? item.dimensionId}><div><strong>{dimension?.questionLabel ?? item.dimensionId}</strong><em>{formatRange(item.positionRange)}</em></div><p>{item.summary}</p><small>{item.evidenceType}{item.locator ? ` · ${item.locator}` : ''}</small></div>; })}</div>{isWork && <p className="research-translation"><strong>Language / translation:</strong> {entry.translationNote}</p>}{!isWork && <div className="research-work-links"><span>Works / evidence base</span><p>{entry.works.length ? entry.works.map((workId) => workById[workId]?.title ?? workId).join(' · ') : 'Institutional archive, indexed speeches, opinions, or documented public record; see the source link.'}</p></div>}<div className="research-entry-actions"><a href={entry.canonicalUrl} target="_blank" rel="noreferrer">Open source record ↗</a><a href={`#bibliography/${entry.recordId}`}>Bibliography record ↗</a></div></article>;
}

function ResearchRelationshipMap({ personById, workById }) {
  const labelFor = (id) => personById[id]?.fullName ?? workById[id]?.title ?? id;
  return <details className="atlas-relationships"><summary>Relationship map · same, close, distinct, influence, opposition</summary><div className="relationship-list">{RESEARCH_RELATIONSHIPS.map((relationship) => <div key={`${relationship.from}-${relationship.to}-${relationship.type}`}><span>{relationship.type.replaceAll('_', ' ')}</span><strong>{labelFor(relationship.from)} → {labelFor(relationship.to)}</strong><p>{relationship.note}</p></div>)}</div></details>;
}

function FreeMode({ scores, matches, topMatch, onUpdateScore, onUseQuestionnaire }) {
  return (
    <div className="freemode-view">
      <div className="section-heading-row">
        <div><p className="eyebrow">DIRECT MANIPULATION</p><h2>Build a profile by feel.</h2></div>
        <button className="secondary-button" onClick={onUseQuestionnaire}>Take the questionnaire <span>↗</span></button>
      </div>
      <p className="free-intro">Drag any axis and watch the closest documented patterns, contemporary country examples, and historical references update in real time.</p>

      <div className="axis-grid">
        {DIMENSIONS.map((dimension) => <AxisSlider key={dimension.id} dimension={dimension} value={scores[dimension.id]} onChange={onUpdateScore} />)}
      </div>

      <div className="profile-summary">
        <div><p className="eyebrow">CLOSEST CONCEPTUAL PATTERN</p><h3><span className="accent-dot" style={{ background: topMatch.accent }} />{topMatch.name}</h3><p>{topMatch.summary}</p><EvidenceLinks citationIds={topMatch.summaryCitationIds} /></div>
        <div className="match-stack">{matches.slice(0, 3).map((match, index) => <div className="match-row" key={match.id}><span>{String(index + 1).padStart(2, '0')}</span><strong>{match.name}</strong><i><b style={{ width: `${Math.max(8, 100 - match.distance / 2)}%`, background: match.accent }} /></i><em>{Math.round(match.distance)} distance</em></div>)}</div>
      </div>

      <div className="axis-readout"><div className="axis-readout-heading"><p className="eyebrow">YOUR FIVE-BAND READOUT</p><p>One independent interpretation for every axis.</p></div>{DIMENSIONS.map((dimension) => { const band = getBand(dimension.id, scores[dimension.id]); return <div className="axis-readout-item" key={dimension.id}><span>{dimension.index}</span><div><strong>{dimension.label}</strong><small>{band.label}</small></div><em>{formatScore(scores[dimension.id])}</em></div>; })}</div>

      {topMatch.warning && <div className="warning-banner"><span>!</span><p><strong>Historical context:</strong> {topMatch.warning}</p></div>}

      <div className="insight-grid">
        <InsightSection number="01" title="Documented people" subtitle="Public figures whose recorded ideas or rule are closest to this pattern." items={topMatch.people} />
        <InsightSection number="02" title="Current country examples" subtitle="Approximate present-day comparisons, not exact matches or endorsements." items={topMatch.current} emptyMessage="No current state should be described as a direct equivalent of this historical ideology." />
        <InsightSection number="03" title="Historical states & cities" subtitle="Places often discussed by historians in connection with this profile." items={topMatch.historical} />
      </div>

      <p className="data-note">The matching engine uses simple geometric distance across five independent axes. People and places are selected as documented reference points, not as proof that every belief or policy matched.</p>
      <SpectrumGuide scores={scores} />
    </div>
  );
}

function AxisSlider({ dimension, value, onChange }) {
  const fill = `${(value + 100) / 2}%`;
  return <div className="axis-card"><div className="axis-card-top"><span className="axis-index">{dimension.index}</span><div><h3>{dimension.label}</h3><p>{scoreLabel(value, dimension)}</p></div><strong>{formatScore(value)}</strong></div><div className="range-wrap"><input aria-label={`${dimension.label} score`} type="range" min="-100" max="100" step="1" value={value} onChange={(event) => onChange(dimension.id, event.target.value)} style={{ '--range-fill': fill }} /><div className="range-labels"><span>{dimension.low}</span><span>0</span><span>{dimension.high}</span></div></div></div>;
}

function InsightSection({ number, title, subtitle, items, emptyMessage }) {
  return <section className="insight-section"><div className="insight-header"><span className="insight-number">{number}</span><div><h3>{title}</h3><p>{subtitle}</p></div></div>{items?.length ? <div className="insight-list">{items.map((item) => <article className="insight-card" key={item.name}><div><h4>{item.name}</h4><p>{item.detail}</p></div><a href={item.source.url} target="_blank" rel="noreferrer">{item.source.label} <span>↗</span></a></article>)}</div> : <div className="empty-insight"><span>—</span><p>{emptyMessage}</p></div>}</section>;
}

function SpectrumGuide({ scores }) {
  return <section className="spectrum-guide"><div className="guide-heading"><div><p className="eyebrow">RESEARCHED TAXONOMY</p><h3>Ten 20-point bands on every axis.</h3></div><p>Each band names a policy tendency, not a complete ideology. Your five independent labels should be read together.</p></div><div className="guide-list">{DIMENSIONS.map((dimension, index) => { const taxonomy = SPECTRUM_BANDS[dimension.id]; const activeBand = getBand(dimension.id, scores[dimension.id]); return <details className="guide-dimension" key={dimension.id} open={index === 0}><summary><span className="guide-dimension-index">{dimension.index}</span><span className="guide-dimension-name"><strong>{dimension.label}</strong><small>Current: {activeBand.label}</small></span><span className="guide-count">10 bands <b>＋</b></span></summary><div className="guide-content"><p className="guide-basis">{taxonomy.basis}</p><EvidenceLinks citationIds={taxonomy.basisCitationIds} compact /><div className="band-table">{taxonomy.bands.map((band) => <div className={band.label === activeBand.label ? 'band-row active' : 'band-row'} key={band.label}><span className="band-range">{formatScore(band.min)} to {formatScore(band.max)}</span><div><strong>{band.label}</strong><div className="band-summary"><p>{band.summary}</p><EvidenceLinks citationIds={band.citationIds} compact /></div><small>{band.families.join(' · ')}</small></div></div>)}</div><div className="guide-sources"><span>Research basis</span>{taxonomy.sourceIds.map((sourceId) => { const source = RESEARCH_SOURCES.find((item) => item.id === sourceId); return <a key={source.id} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>; })}</div></div></details>; })}</div><div className="research-note"><strong>How the bands were chosen.</strong> The labels synthesize political-theory definitions with comparative measurement practice. They are intentionally descriptive and probabilistic: a score at one band does not prove a person belongs to a named movement, and country or historical comparisons require separate evidence.</div></section>;
}

createRoot(document.getElementById('root')).render(<App />);
