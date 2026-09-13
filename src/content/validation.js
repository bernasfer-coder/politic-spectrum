const VALIDATION_PLAN_VERSION = 'validation-plan-2026-09';
const CORE_DIMENSION_IDS = ['economic', 'social', 'authority', 'identity', 'foreign', 'religion'];

const CORE_CONSTRUCT_MAP = {
  economic: {
    construct: 'Preferred role of private ownership, markets, public ownership, redistribution, taxation, and regulation.',
    include: ['ownership', 'planning', 'competition', 'public provision', 'labor power', 'redistribution'],
    exclude: ['income', 'economic knowledge', 'party label', 'implementation authority'],
    risks: ['Taxation, spending, regulation, and ownership may be bundled.', 'Equality concerns may cross-load.'],
  },
  social: {
    construct: 'Preferred pace and direction of cultural change, personal autonomy, inherited norms, and social equality.',
    include: ['family', 'gender', 'sexuality', 'moral pluralism', 'anti-discrimination', 'inherited institutions'],
    exclude: ['economic redistribution', 'state coercion as such', 'national sovereignty', 'religiosity as a complete construct'],
    risks: ['Progressive items may also measure authority, minority rights, immigration, or religion.'],
  },
  authority: {
    construct: 'Acceptable scope of coercion, executive power, surveillance, dissent restrictions, and institutional limits.',
    include: ['speech', 'protest', 'police powers', 'emergency powers', 'due process', 'dissent', 'executive limits'],
    exclude: ['economic left/right', 'nationalism', 'religion', 'democracy in every procedural sense'],
    risks: ['Threat perception and trust in officials may be mistaken for general support for authority.'],
  },
  identity: {
    construct: 'Whether political membership and obligation are organized primarily around the nation, sovereignty, shared civic culture, or universal cooperation.',
    include: ['sovereignty', 'national preference', 'civic belonging', 'international institutions', 'universal obligations'],
    exclude: ['immigration policy by itself', 'ethnicity', 'military intervention', 'cultural traditionalism by itself'],
    risks: ['Migration, minority rights, international law, and foreign policy may cross-load.'],
  },
  foreign: {
    construct: 'Willingness to use force, alliances, sanctions, and coercive influence beyond the state’s borders.',
    include: ['intervention', 'restraint', 'deterrence', 'alliances', 'diplomacy', 'humanitarian force', 'nation-building'],
    exclude: ['domestic authoritarianism', 'national pride', 'defense spending alone', 'a single conflict preference'],
    risks: ['Alliances and military action are not identical.', 'Humanitarian motives may be confused with force preference.'],
  },
  religion: {
    construct: 'Preferred relationship between religious authority or moral tradition and public law, state institutions, and civic pluralism.',
    include: ['secular neutrality', 'religious establishment', 'religiously grounded law', 'pluralist accommodation', 'religious institutional autonomy'],
    exclude: ['private faith or sincerity', 'which religion is true', 'religion as a proxy for social traditionalism', 'religion as a proxy for authoritarianism'],
    risks: ['Religious freedom and religious establishment are not opposites.', 'Religious identity, personal belief, and public-law preference may diverge.'],
  },
};

const CANDIDATE_FACETS = [
  { id: 'democracy', label: 'Democracy / institutions', priority: 'high', treatment: 'separate facet or module' },
  { id: 'immigration', label: 'Immigration / integration', priority: 'high', treatment: 'facet; do not use as a proxy for nationalism' },
  { id: 'ecology', label: 'Ecology / growth', priority: 'medium-high', treatment: 'issue facet or module' },
  { id: 'decentralization', label: 'Decentralization', priority: 'medium', treatment: 'facet' },
  { id: 'populism', label: 'Populism', priority: 'high', treatment: 'tag or discourse lens, not a default axis' },
  { id: 'equality', label: 'Equality / hierarchy', priority: 'medium-high', treatment: 'cross-cutting facet' },
  { id: 'technology', label: 'Technology / expertise', priority: 'medium', treatment: 'contextual module or tags' },
];

const QUESTION_AUDIT = {
  'economic-1': { status: 'review', concern: 'Own and tightly control name different instruments; essential varies by country.', futureAction: 'Split ownership from regulation/control or define the policy target.' },
  'economic-2': { status: 'review', concern: 'Combines taxation, public spending, and inequality reduction.', futureAction: 'Split taxation, public provision, and redistribution.' },
  'economic-3': { status: 'keep-provisionally', concern: 'Market-versus-planning anchor; better may invite efficiency or fairness interpretations.', futureAction: 'Retain as an anchor and test the respondent’s interpretation of better.' },
  'economic-4': { status: 'review', concern: 'Combines worker ownership and workplace governance.', futureAction: 'Separate worker ownership from worker voice in management.' },
  'economic-5': { status: 'review', concern: 'Combines taxes, regulation, and public-service scope with an implied trade-off.', futureAction: 'Ask about taxation/regulation and public-service scope separately.' },
  'social-1': { status: 'review', concern: 'Relationships and gender roles are distinct domains; actively remove may sound legalistic.', futureAction: 'Split personal relationships from gender-role policy and test translations.' },
  'social-2': { status: 'review', concern: 'Family, religion, culture, and stability are bundled; stable is a leading positive cue.', futureAction: 'Use separate items and avoid assuming stability is desirable.' },
  'social-3': { status: 'keep-provisionally', concern: 'Clear pluralism/autonomy anchor that also touches authority.', futureAction: 'Retain and compare with a less state-focused autonomy item.' },
  'social-4': { status: 'review', concern: 'Combines anti-discrimination, identity, and conflict with local tradition.', futureAction: 'Separate equal protection from overriding local norms.' },
  'social-5': { status: 'review', concern: 'Combines school policy, religion, inherited culture, and self-expression.', futureAction: 'Split education policy from religious/cultural transmission.' },
  'authority-1': { status: 'review', concern: 'Speech restriction, official judgment, and social-order threat are all present.', futureAction: 'Use a clear speech-restriction item and test threat perception separately.' },
  'authority-2': { status: 'keep-provisionally', concern: 'Civil-liberties anchor with possible social-values overlap.', futureAction: 'Retain and add a parallel institutional-limits item.' },
  'authority-3': { status: 'review', concern: 'Police, intelligence, dissent, and disorder are bundled.', futureAction: 'Separate surveillance, policing, and dissent restrictions.' },
  'authority-4': { status: 'keep-provisionally', concern: 'Protest and disruption wording may be context-sensitive.', futureAction: 'Retain and cognitive-test disruption wording across languages.' },
  'authority-5': { status: 'keep-provisionally', concern: 'Emergency executive-power judgment may depend on crisis experience.', futureAction: 'Retain as a scenario anchor and record imagined crisis context.' },
  'identity-1': { status: 'keep-provisionally', concern: 'Sovereignty/international-law trade-off may also measure legal institutionalism.', futureAction: 'Clarify whether the target is sovereignty or court preference.' },
  'identity-2': { status: 'review', concern: 'Migration and cultural exchange are separate policies and a candidate facet.', futureAction: 'Split migration from general cultural exchange.' },
  'identity-3': { status: 'review', concern: 'Common culture, group identity, and cohesion are bundled.', futureAction: 'Separate civic commonality, assimilation, and pluralism.' },
  'identity-4': { status: 'keep-provisionally', concern: 'Cross-border authority overlaps foreign policy.', futureAction: 'Pair with identity-1 and test the cooperation interpretation.' },
  'identity-5': { status: 'keep-provisionally', concern: 'National-partiality trade-off also invokes equality.', futureAction: 'Add a non-resource-based national-obligation item.' },
  'foreign-1': { status: 'review', concern: 'Interests, allies, and influence are different reasons for action.', futureAction: 'Split defense of allies from coercive influence and intervention.' },
  'foreign-2': { status: 'review', concern: 'Alliances and interventions are distinct; whenever possible is vague.', futureAction: 'Ask about alliances and interventions separately.' },
  'foreign-3': { status: 'review', concern: 'Diplomacy, trade, and force are not one alternative.', futureAction: 'Separate diplomatic settlement from trade and sanctions.' },
  'foreign-4': { status: 'keep-provisionally', concern: 'Humanitarian salience may overpower the force-preference construct.', futureAction: 'Retain as a scenario anchor and add a neutral force item.' },
  'foreign-5': { status: 'review', concern: 'Deterrence, territorial defense, nation-building, and regime change are bundled.', futureAction: 'Split defensive deterrence from external political transformation.' },
  'religion-1': { status: 'review', concern: 'Formal religious authority can mean advisory influence, constitutional review, or coercive control.', futureAction: 'Specify the institutional role being evaluated and test whether respondents distinguish advice from veto power.' },
  'religion-2': { status: 'keep-provisionally', concern: 'State neutrality can mean equal treatment, strict separation, or exclusion from public life.', futureAction: 'Retain as a neutrality anchor and test those interpretations across languages.' },
  'religion-3': { status: 'keep-provisionally', concern: 'Conflict between civil and religious law is hypothetical for many respondents.', futureAction: 'Retain as a public-law priority item and add a concrete scenario in cognitive interviews.' },
  'religion-4': { status: 'review', concern: 'Reflecting a dominant tradition may refer to symbols, holidays, education, or unequal legal status.', futureAction: 'Split cultural expression from formal preference and unequal treatment.' },
  'religion-5': { status: 'review', concern: 'Institutional religious autonomy is combined with an equal-rights safeguard.', futureAction: 'Test whether respondents can separately evaluate organizational freedom and rights limits.' },
};

const VALIDATION_CRITERIA = [
  { id: 'content', label: 'Content relevance and coverage', mandatory: true },
  { id: 'response-process', label: 'Intended response process', mandatory: true },
  { id: 'structure', label: 'Interpretable structure and cross-loading', mandatory: true },
  { id: 'reliability', label: 'Internal and test–retest reliability', mandatory: true },
  { id: 'measurement-error', label: 'Measurement error and band stability', mandatory: true },
  { id: 'cross-context', label: 'Language and cross-context comparability', mandatory: true },
  { id: 'incremental-value', label: 'Incremental value beyond the current core', mandatory: true },
  { id: 'comprehension-accessibility', label: 'Comprehension, completion, and accessibility', mandatory: true },
  { id: 'maintenance-ethics', label: 'Maintenance, uncertainty, and ethics', mandatory: true },
];

const M5_MODEL = {
  id: '5d-v1',
  family: 'M5',
  axisIds: CORE_DIMENSION_IDS.filter((dimensionId) => dimensionId !== 'religion'),
  facetIds: [],
  purpose: 'Legacy five-axis comparator retained to measure the incremental value of adding Religion.',
  status: 'legacy comparator; empirical comparison not run',
};

const M6_MODEL = {
  id: '6d-v1',
  family: 'M6',
  axisIds: [...CORE_DIMENSION_IDS],
  facetIds: [],
  purpose: 'Current didactic product model: the five original axes plus Religion in public life.',
  status: 'current product baseline; empirical validation not run',
};

const M7_MODELS = CANDIDATE_FACETS.map((facet) => ({
  id: `M7-with-${facet.id}`,
  family: 'M7',
  axisIds: [...CORE_DIMENSION_IDS, facet.id],
  facetIds: [facet.id],
  purpose: `Test whether ${facet.label} adds information beyond the 6D core without unacceptable overload.`,
  status: 'planned; blocked until a separate item bank and participant data exist',
}));

const M8_MODELS = CANDIDATE_FACETS.flatMap((left, leftIndex) => CANDIDATE_FACETS.slice(leftIndex + 1).map((right) => ({
  id: `M8-with-${left.id}-${right.id}`,
  family: 'M8',
  axisIds: [...CORE_DIMENSION_IDS, left.id, right.id],
  facetIds: [left.id, right.id],
  purpose: `Preregistered pair comparison beyond the 6D core for ${left.label} plus ${right.label}.`,
  status: 'planned; blocked until pair selection, multiplicity plan, item banks, and participant data exist',
})));

const VALIDATION_MODEL_DEFINITIONS = [
  M5_MODEL,
  M6_MODEL,
  ...M7_MODELS,
  ...M8_MODELS,
  {
    id: 'M6-plus-facets',
    family: 'M6-plus-facets',
    axisIds: [...CORE_DIMENSION_IDS],
    facetIds: CANDIDATE_FACETS.map(({ id }) => id),
    purpose: 'Keep six public coordinates while testing whether facets improve explanation and filtering.',
    status: 'planned; facet modules are not validated numerical axes',
  },
];

const VALIDATION_STATUS = {
  planVersion: VALIDATION_PLAN_VERSION,
  coreModel: M6_MODEL.id,
  previousCoreModel: M5_MODEL.id,
  empiricalStatus: 'not-run',
  evidenceBoundary: 'Synthetic or randomly generated answers may exercise code paths but cannot establish reliability, validity, comprehension, invariance, or incremental value. The public 6D model remains an educational hypothesis.',
  nextEvidence: 'Compare the legacy 5D and current 6D models using preregistered cognitive interviews and a consented, privacy-safe participant pilot before adding further axes.',
};

export {
  CANDIDATE_FACETS,
  CORE_CONSTRUCT_MAP,
  CORE_DIMENSION_IDS,
  QUESTION_AUDIT,
  VALIDATION_CRITERIA,
  VALIDATION_MODEL_DEFINITIONS,
  VALIDATION_PLAN_VERSION,
  VALIDATION_STATUS,
};
