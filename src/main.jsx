import { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const DIMENSIONS = [
  {
    id: 'economic',
    index: '01',
    label: 'Economic model',
    low: 'Collectivist',
    high: 'Free-market',
    questionLabel: 'Economic',
    description: 'Who should own and direct resources: the public, or private individuals and markets?',
  },
  {
    id: 'social',
    index: '02',
    label: 'Social values',
    low: 'Progressive',
    high: 'Traditionalist',
    questionLabel: 'Social values',
    description: 'How much should society preserve inherited norms versus change them as people’s lives change?',
  },
  {
    id: 'authority',
    index: '03',
    label: 'Authority',
    low: 'Libertarian',
    high: 'Authoritarian',
    questionLabel: 'Authority',
    description: 'How much coercive power should the state have over citizens and institutions?',
  },
  {
    id: 'identity',
    index: '04',
    label: 'National identity',
    low: 'Internationalist',
    high: 'Nationalist',
    questionLabel: 'Identity',
    description: 'Should political loyalty center on global cooperation or the nation and its sovereignty?',
  },
  {
    id: 'foreign',
    index: '05',
    label: 'Foreign policy',
    low: 'Restraint',
    high: 'Interventionist',
    questionLabel: 'Foreign policy',
    description: 'When should a state use alliances, sanctions, or military force beyond its borders?',
  },
];

const DEFAULT_SCORES = Object.fromEntries(DIMENSIONS.map(({ id }) => [id, 0]));
const OPTION_VALUES = [-100, -50, 0, 50, 100];
const OPTION_LABELS = ['Strongly disagree', 'Disagree', 'Unsure / mixed', 'Agree', 'Strongly agree'];

const PALETTES = {
  neutral: {
    label: 'Neutral / mixed',
    primary: '#55d6be',
    secondary: '#8c84ff',
    warm: '#ff9f43',
    background: '#07101d',
    glow: 'rgba(85, 214, 190, .18)',
    soft: '#c1ccda',
    muted: '#8393a9',
    line: 'rgba(165, 188, 214, .15)',
  },
  'authoritarian-collectivist': {
    label: 'Collectivist red · gold',
    primary: '#d62828',
    secondary: '#f4d35e',
    warm: '#fff4d6',
    background: '#160b0b',
    glow: 'rgba(214, 40, 40, .22)',
    soft: '#f0d7c2',
    muted: '#b89b91',
    line: 'rgba(244, 211, 94, .18)',
  },
  'historical-fascist': {
    label: 'Historical warning · rust',
    primary: '#d04a2f',
    secondary: '#d9b44a',
    warm: '#e9e1cd',
    background: '#11100f',
    glow: 'rgba(208, 74, 47, .2)',
    soft: '#ddd1bc',
    muted: '#9e9282',
    line: 'rgba(217, 180, 74, .18)',
  },
  'libertarian-market': {
    label: 'Libertarian teal · gold',
    primary: '#55d6be',
    secondary: '#d8c06a',
    warm: '#b7ecdf',
    background: '#071414',
    glow: 'rgba(85, 214, 190, .2)',
    soft: '#c2dfda',
    muted: '#819f9c',
    line: 'rgba(85, 214, 190, .16)',
  },
  'progressive-liberal': {
    label: 'Progressive violet · cyan',
    primary: '#9b8cff',
    secondary: '#65d6ff',
    warm: '#f28db2',
    background: '#0b0c1c',
    glow: 'rgba(155, 140, 255, .2)',
    soft: '#d4d4ed',
    muted: '#9295b9',
    line: 'rgba(155, 140, 255, .17)',
  },
  'national-conservative': {
    label: 'National conservative · red',
    primary: '#ef4d4d',
    secondary: '#e4bd51',
    warm: '#f0efe8',
    background: '#11111a',
    glow: 'rgba(239, 77, 77, .18)',
    soft: '#d8d9df',
    muted: '#9699aa',
    line: 'rgba(228, 189, 81, .18)',
  },
  'social-democratic': {
    label: 'Social democratic · blue',
    primary: '#5ea7ff',
    secondary: '#ef91b4',
    warm: '#f2cf76',
    background: '#081321',
    glow: 'rgba(94, 167, 255, .2)',
    soft: '#c9d7e8',
    muted: '#8498b2',
    line: 'rgba(94, 167, 255, .17)',
  },
};

const QUESTIONS = [
  { id: 'economic-1', dimension: 'economic', prompt: 'The state should own or tightly control essential industries.', polarity: -1 },
  { id: 'economic-2', dimension: 'economic', prompt: 'Higher taxes and public spending are worth it if they substantially reduce inequality.', polarity: -1 },
  { id: 'economic-3', dimension: 'economic', prompt: 'Private competition usually allocates resources better than public planning.', polarity: 1 },
  { id: 'social-1', dimension: 'social', prompt: 'The law should actively remove traditional restrictions on personal relationships and gender roles.', polarity: -1 },
  { id: 'social-2', dimension: 'social', prompt: 'A stable society should preserve established family, religious, and cultural norms.', polarity: 1 },
  { id: 'social-3', dimension: 'social', prompt: 'Government should avoid imposing one moral tradition on everyone.', polarity: -1 },
  { id: 'authority-1', dimension: 'authority', prompt: 'The state may restrict speech when officials believe it threatens social order.', polarity: 1 },
  { id: 'authority-2', dimension: 'authority', prompt: 'Adults should be free to make personal choices unless they directly harm others.', polarity: -1 },
  { id: 'authority-3', dimension: 'authority', prompt: 'Police and intelligence agencies should receive broad powers to prevent dissent and disorder.', polarity: 1 },
  { id: 'identity-1', dimension: 'identity', prompt: 'National laws should take precedence over international courts and institutions.', polarity: 1 },
  { id: 'identity-2', dimension: 'identity', prompt: 'Migration and cultural exchange generally strengthen a society.', polarity: -1 },
  { id: 'identity-3', dimension: 'identity', prompt: 'A common national culture is more important than preserving separate group identities.', polarity: 1 },
  { id: 'foreign-1', dimension: 'foreign', prompt: 'Military force should be used abroad to defend interests, allies, and influence.', polarity: 1 },
  { id: 'foreign-2', dimension: 'foreign', prompt: 'A country should avoid military alliances and foreign interventions whenever possible.', polarity: -1 },
  { id: 'foreign-3', dimension: 'foreign', prompt: 'Diplomacy and trade are usually preferable to coercive force.', polarity: -1 },
];

const SOURCES = {
  marx: { label: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/marx/' },
  lenin: { label: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Vladimir-Lenin' },
  friedman: { label: 'Nobel Prize', url: 'https://www.nobelprize.org/prizes/economic-sciences/1976/friedman/facts/' },
  hayek: { label: 'Nobel Prize', url: 'https://www.nobelprize.org/prizes/economic-sciences/1974/hayek/facts/' },
  mill: { label: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/John-Stuart-Mill' },
  nozik: { label: 'Internet Encyclopedia of Philosophy', url: 'https://iep.utm.edu/nozick/' },
  hitler: { label: 'United States Holocaust Memorial Museum', url: 'https://encyclopedia.ushmm.org/content/en/article/adolf-hitler' },
  mussolini: { label: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Benito-Mussolini' },
  burke: { label: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Edmund-Burke' },
  degaulle: { label: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Charles-de-Gaulle' },
  palme: { label: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Olof-Palme' },
  freedomChina: { label: 'Freedom House — China', url: 'https://freedomhouse.org/country/china/freedom-world/2026' },
  freedomNorthKorea: { label: 'Freedom House — North Korea', url: 'https://freedomhouse.org/country/north-korea/freedom-world/2026' },
  freedomVietnam: { label: 'Freedom House — Vietnam', url: 'https://freedomhouse.org/country/vietnam/freedom-world/2026' },
  freedomNetherlands: { label: 'Freedom House — Netherlands', url: 'https://freedomhouse.org/country/netherlands/freedom-world/2026' },
  freedomDenmark: { label: 'Freedom House — Denmark', url: 'https://freedomhouse.org/country/denmark/freedom-world/2026' },
  freedomSwitzerland: { label: 'Freedom House — Switzerland', url: 'https://freedomhouse.org/country/switzerland/freedom-world/2026' },
  freedomHungary: { label: 'Freedom House — Hungary', url: 'https://freedomhouse.org/country/hungary/freedom-world/2026' },
  freedomIndia: { label: 'Freedom House — India', url: 'https://freedomhouse.org/country/india/freedom-world/2026' },
  freedomNorway: { label: 'Freedom House — Norway', url: 'https://freedomhouse.org/country/norway/freedom-world/2026' },
  freedomSweden: { label: 'Freedom House — Sweden', url: 'https://freedomhouse.org/country/sweden/freedom-world/2026' },
  holocaust: { label: 'United States Holocaust Memorial Museum', url: 'https://encyclopedia.ushmm.org/content/en/article/nazi-racism-an-overview' },
};

const ARCHETYPES = [
  {
    id: 'authoritarian-collectivist',
    name: 'Authoritarian collectivist',
    accent: '#ff5c77',
    profile: { economic: -88, social: -18, authority: 86, identity: -38, foreign: 24 },
    summary: 'Strong public ownership and redistribution combined with a powerful state and limited tolerance for organized dissent.',
    people: [
      { name: 'Karl Marx', detail: 'Foundational theorist of communism and common ownership of productive resources.', source: SOURCES.marx },
      { name: 'Vladimir Lenin', detail: 'Revolutionary communist leader who developed a centralized party-state model.', source: SOURCES.lenin },
      { name: 'Joseph Stalin', detail: 'Historical example of highly centralized, coercive communist rule.', source: SOURCES.lenin },
    ],
    current: [
      { name: 'China', detail: 'One-party state with extensive public direction and significant state-owned sectors alongside markets.', source: SOURCES.freedomChina },
      { name: 'Vietnam', detail: 'One-party socialist republic with a state-led political system and a mixed economy.', source: SOURCES.freedomVietnam },
      { name: 'North Korea', detail: 'Highly centralized hereditary one-party state; not a close economic match in every respect.', source: SOURCES.freedomNorthKorea },
    ],
    historical: [
      { name: 'Soviet Union — Moscow', detail: 'Centralized communist state, especially during the Stalin era.', source: SOURCES.lenin },
      { name: 'East Germany — East Berlin', detail: 'One-party socialist state within the Soviet sphere after 1949.', source: SOURCES.lenin },
      { name: 'Mao-era China — Beijing', detail: 'Revolutionary communist state with extensive political and economic control.', source: SOURCES.marx },
    ],
  },
  {
    id: 'historical-fascist',
    name: 'Historical fascist / Nazi-like',
    accent: '#ff9f43',
    profile: { economic: -18, social: 92, authority: 98, identity: 96, foreign: 90 },
    summary: 'A historical warning profile: extreme hierarchy, authoritarian rule, aggressive nationalism, and militarized foreign policy.',
    warning: 'This is a historical-analytical category, not a legitimate contemporary political recommendation.',
    people: [
      { name: 'Adolf Hitler', detail: 'Leader of Nazi Germany; the regime combined racial dictatorship, totalitarian control, and expansionist war.', source: SOURCES.hitler },
      { name: 'Benito Mussolini', detail: 'Founder of Italian Fascism and dictator of Italy from 1925 to 1943.', source: SOURCES.mussolini },
      { name: 'Joseph Goebbels', detail: 'Nazi propaganda minister and a central figure in the regime’s totalitarian apparatus.', source: SOURCES.holocaust },
    ],
    current: [],
    historical: [
      { name: 'Nazi Germany — Berlin', detail: 'Racial dictatorship, one-party rule, mass persecution, and expansionist war.', source: SOURCES.hitler },
      { name: 'Fascist Italy — Rome', detail: 'The first fascist regime, with corporatist institutions and authoritarian nationalism.', source: SOURCES.mussolini },
      { name: 'Occupied Europe — state systems under Nazi rule', detail: 'Different territories experienced the ideology and coercion unevenly; the label is not a claim of identical conditions.', source: SOURCES.holocaust },
    ],
  },
  {
    id: 'libertarian-market',
    name: 'Libertarian market liberal',
    accent: '#55d6be',
    profile: { economic: 86, social: -34, authority: -88, identity: -34, foreign: -72 },
    summary: 'Strong private-property and market preferences, broad civil liberties, and skepticism toward state coercion and military intervention.',
    people: [
      { name: 'Robert Nozick', detail: 'Philosopher associated with strong individual rights and a minimal-state argument.', source: SOURCES.nozik },
      { name: 'Friedrich Hayek', detail: 'Economist and political thinker who defended dispersed knowledge, markets, and limited planning.', source: SOURCES.hayek },
      { name: 'Milton Friedman', detail: 'Economist who argued for competitive markets and limits on government economic control.', source: SOURCES.friedman },
    ],
    current: [
      { name: 'Switzerland', detail: 'High civil liberties, federal decentralization, and a market-oriented economy; not purely libertarian.', source: SOURCES.freedomSwitzerland },
      { name: 'Ireland', detail: 'Open market economy and liberal democratic institutions; social and foreign-policy positions vary.', source: SOURCES.freedomNetherlands },
      { name: 'New Zealand', detail: 'Strong civil liberties and a market economy, with a more interventionist welfare state than this archetype.', source: SOURCES.freedomDenmark },
    ],
    historical: [
      { name: '19th-century Britain — London', detail: 'Classical-liberal period associated with free trade, parliamentary government, and limited suffrage by modern standards.', source: SOURCES.mill },
      { name: 'Hong Kong before 1997', detail: 'Frequently cited for low taxes and open markets, though not a fully libertarian political system.', source: SOURCES.hayek },
      { name: 'Classical liberal thought — Manchester', detail: 'A historic center of free-trade advocacy, especially in the Anti-Corn Law movement.', source: SOURCES.mill },
    ],
  },
  {
    id: 'progressive-liberal',
    name: 'Progressive liberal',
    accent: '#7c83fd',
    profile: { economic: -32, social: -78, authority: -36, identity: -54, foreign: 28 },
    summary: 'Socially progressive and institutionally liberal, with a mixed economy and support for international cooperation.',
    people: [
      { name: 'John Stuart Mill', detail: 'Classical liberal thinker associated with individual liberty, free expression, and social reform.', source: SOURCES.mill },
      { name: 'Franklin D. Roosevelt', detail: 'U.S. liberal reformer associated with an expanded welfare state and regulatory government.', source: SOURCES.mill },
      { name: 'Barack Obama', detail: 'Modern U.S. liberal example; the profile is a broad approximation, not a full voting record.', source: SOURCES.mill },
    ],
    current: [
      { name: 'Netherlands', detail: 'Liberal parliamentary democracy with strong civil liberties and socially progressive institutions.', source: SOURCES.freedomNetherlands },
      { name: 'Canada', detail: 'Liberal democracy with broad civil liberties and a mixed-market welfare model.', source: SOURCES.freedomDenmark },
      { name: 'New Zealand', detail: 'Liberal democracy with strong rights protections and a mixed economy.', source: SOURCES.freedomDenmark },
    ],
    historical: [
      { name: 'New Deal United States — Washington, D.C.', detail: 'Expansion of social insurance and federal regulation during the Roosevelt era.', source: SOURCES.mill },
      { name: 'Progressive Era United States — Washington, D.C.', detail: 'Reform movement focused on regulation, public health, and democratic accountability.', source: SOURCES.mill },
      { name: 'Postwar Western Europe', detail: 'Liberal democracies that combined civil rights expansion with mixed economies and alliances.', source: SOURCES.freedomNetherlands },
    ],
  },
  {
    id: 'national-conservative',
    name: 'National conservative',
    accent: '#f2c14e',
    profile: { economic: 34, social: 68, authority: 46, identity: 82, foreign: 34 },
    summary: 'National sovereignty, cultural continuity, and stricter borders paired with a mixed or market-friendly economy.',
    people: [
      { name: 'Edmund Burke', detail: 'Conservative thinker associated with tradition, gradual change, and inherited institutions.', source: SOURCES.burke },
      { name: 'Charles de Gaulle', detail: 'French leader associated with national independence, state authority, and strategic sovereignty.', source: SOURCES.degaulle },
      { name: 'Deng Xiaoping', detail: 'A state-national development model with market reforms; included as a partial, not exact, match.', source: SOURCES.freedomChina },
    ],
    current: [
      { name: 'Hungary', detail: 'Partly free parliamentary system whose government emphasizes sovereignty, national identity, and traditional social values.', source: SOURCES.freedomHungary },
      { name: 'India', detail: 'Large electoral democracy with strong national-identity politics and a mixed economy; internal variation is substantial.', source: SOURCES.freedomIndia },
      { name: 'Poland', detail: 'Democratic state with a strong national-conservative current; political direction changes across governments.', source: SOURCES.freedomHungary },
    ],
    historical: [
      { name: 'Gaullist France — Paris', detail: 'A sovereignist tradition emphasizing national independence and a strong state.', source: SOURCES.degaulle },
      { name: 'Meiji Japan — Tokyo', detail: 'Rapid state-led modernization combined with imperial nationalism; not a liberal-democratic match.', source: SOURCES.degaulle },
      { name: 'Victorian Britain — London', detail: 'Imperial nationalism and social traditionalism alongside expanding market institutions.', source: SOURCES.burke },
    ],
  },
  {
    id: 'social-democratic',
    name: 'Social democratic',
    accent: '#9b8afd',
    profile: { economic: -58, social: -62, authority: -26, identity: -34, foreign: -14 },
    summary: 'A regulated mixed economy, strong public services, civil liberties, and gradual reform through democratic institutions.',
    people: [
      { name: 'Olof Palme', detail: 'Swedish social-democratic leader associated with an expansive welfare state and international solidarity.', source: SOURCES.palme },
      { name: 'Clement Attlee', detail: 'British Labour prime minister whose government built major postwar public institutions.', source: SOURCES.palme },
      { name: 'Eduard Bernstein', detail: 'Early social democrat who argued for evolutionary reform rather than revolutionary dictatorship.', source: SOURCES.marx },
    ],
    current: [
      { name: 'Denmark', detail: 'Social-market democracy with extensive welfare provision, strong rights protections, and high taxation.', source: SOURCES.freedomDenmark },
      { name: 'Norway', detail: 'Social democratic welfare state with a mixed economy and strong democratic institutions.', source: SOURCES.freedomNorway },
      { name: 'Sweden', detail: 'Long-standing social democratic tradition within a liberal parliamentary democracy and mixed economy.', source: SOURCES.freedomSweden },
    ],
    historical: [
      { name: 'Postwar Sweden — Stockholm', detail: 'A leading example of democratic welfare-state development.', source: SOURCES.palme },
      { name: 'Attlee-era Britain — London', detail: 'Postwar Labour government that created the NHS and expanded social insurance.', source: SOURCES.palme },
      { name: 'Nordic model — Copenhagen', detail: 'Historical development of universal welfare, collective bargaining, and competitive markets.', source: SOURCES.freedomDenmark },
    ],
  },
];

function calculateScores(answers) {
  return Object.fromEntries(DIMENSIONS.map(({ id }) => {
    const relevant = QUESTIONS.filter((question) => question.dimension === id);
    const total = relevant.reduce((sum, question) => {
      const answer = answers[question.id];
      return sum + (answer === undefined ? 0 : answer * question.polarity);
    }, 0);
    return [id, Math.round(total / relevant.length)];
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

function scoreLabel(value, dimension) {
  if (value <= -60) return dimension.low;
  if (value >= 60) return dimension.high;
  if (value < 0) return `Leaning ${dimension.low.toLowerCase()}`;
  if (value > 0) return `Leaning ${dimension.high.toLowerCase()}`;
  return 'Balanced / mixed';
}

function App() {
  const [mode, setMode] = useState('questionnaire');
  const [scores, setScores] = useState(DEFAULT_SCORES);
  const [answers, setAnswers] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);

  const matches = useMemo(() => getMatches(scores), [scores]);
  const topMatch = matches[0];
  const themeScores = mode === 'questionnaire' ? calculateScores(answers) : scores;
  const themeMatch = useMemo(() => {
    const hasSignal = Object.values(themeScores).some((value) => value !== 0);
    return hasSignal ? getMatches(themeScores)[0] : { id: 'neutral' };
  }, [mode, themeScores]);
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
    setMode('freemode');
  }

  function resetQuestionnaire() {
    setAnswers({});
    setQuestionIndex(0);
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
            <button className={mode === 'questionnaire' ? 'mode-tab active' : 'mode-tab'} onClick={() => setMode('questionnaire')} role="tab" aria-selected={mode === 'questionnaire'}>
              <span className="tab-number">01</span><span><strong>Questionnaire</strong><small>Let the model find your position</small></span>
            </button>
            <button className={mode === 'freemode' ? 'mode-tab active' : 'mode-tab'} onClick={() => setMode('freemode')} role="tab" aria-selected={mode === 'freemode'}>
              <span className="tab-number">02</span><span><strong>FreeMode</strong><small>Move the five axes yourself</small></span>
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
          ) : (
            <FreeMode scores={scores} matches={matches} topMatch={topMatch} onUpdateScore={updateScore} onUseQuestionnaire={() => setMode('questionnaire')} />
          )}
        </section>
      </main>

      <footer className="site-footer">
        <p><strong>POLITIC SPECTRUM</strong> is an educational model, not a clinical or scientific diagnosis.</p>
        <p>Profiles are approximate. Sources and context matter more than labels.</p>
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
      <div className="utility-row"><button className="text-button subdued" onClick={onReset}>Reset questionnaire</button><p>About 3 minutes <span>·</span> 15 questions <span>·</span> 5 dimensions</p></div>
    </div>
  );
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
        <div><p className="eyebrow">CLOSEST CONCEPTUAL PATTERN</p><h3><span className="accent-dot" style={{ background: topMatch.accent }} />{topMatch.name}</h3><p>{topMatch.summary}</p></div>
        <div className="match-stack">{matches.slice(0, 3).map((match, index) => <div className="match-row" key={match.id}><span>{String(index + 1).padStart(2, '0')}</span><strong>{match.name}</strong><i><b style={{ width: `${Math.max(8, 100 - match.distance / 2)}%`, background: match.accent }} /></i><em>{Math.round(match.distance)} distance</em></div>)}</div>
      </div>

      {topMatch.warning && <div className="warning-banner"><span>!</span><p><strong>Historical context:</strong> {topMatch.warning}</p></div>}

      <div className="insight-grid">
        <InsightSection number="01" title="Documented people" subtitle="Public figures whose recorded ideas or rule are closest to this pattern." items={topMatch.people} />
        <InsightSection number="02" title="Current country examples" subtitle="Approximate present-day comparisons, not exact matches or endorsements." items={topMatch.current} emptyMessage="No current state should be described as a direct equivalent of this historical ideology." />
        <InsightSection number="03" title="Historical states & cities" subtitle="Places often discussed by historians in connection with this profile." items={topMatch.historical} />
      </div>

      <p className="data-note">The matching engine uses simple geometric distance across five independent axes. People and places are selected as documented reference points, not as proof that every belief or policy matched.</p>
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

createRoot(document.getElementById('root')).render(<App />);
