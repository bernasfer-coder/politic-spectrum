import {
  ARCHETYPES,
  DIMENSIONS,
  FLIPPED_DIMENSION_IDS,
  QUESTIONS,
  SPECTRUM_BANDS,
  TAXONOMY_LABELS,
} from '../src/content/index.js';

const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

const dimensions = Object.fromEntries(DIMENSIONS.map((dimension) => [dimension.id, dimension]));
const expectedEndpoints = {
  economic: ['Free-market', 'Collectivist'],
  social: ['Traditionalist', 'Progressive'],
  authority: ['Libertarian', 'Authoritarian'],
  identity: ['Nationalist', 'Internationalist'],
  foreign: ['Interventionist', 'Pacifist / restraint'],
  religion: ['Secular public law', 'Religiously grounded law'],
};

for (const [id, [low, high]] of Object.entries(expectedEndpoints)) {
  assert(dimensions[id]?.low === low, `${id} must use ${low} at -100`);
  assert(dimensions[id]?.high === high, `${id} must use ${high} at +100`);
}

assert(JSON.stringify([...FLIPPED_DIMENSION_IDS].sort()) === JSON.stringify(['economic', 'foreign', 'identity', 'social']), 'Only the four requested dimensions may be flipped');

const expectedPolarities = {
  economic: [1, 1, -1, 1, -1],
  social: [1, -1, 1, 1, -1],
  authority: [1, -1, 1, -1, 1],
  identity: [-1, 1, -1, 1, -1],
  foreign: [-1, 1, 1, -1, 1],
  religion: [1, -1, -1, 1, 1],
};

for (const [dimensionId, expected] of Object.entries(expectedPolarities)) {
  const actual = QUESTIONS.filter(({ dimension }) => dimension === dimensionId).map(({ polarity }) => polarity);
  assert(JSON.stringify(actual) === JSON.stringify(expected), `${dimensionId} questionnaire polarities do not match the requested orientation`);
}

for (const [id, expectedLow, expectedHigh] of [
  ['economic', 'Laissez-faire / minarchist', 'Revolutionary state-socialist'],
  ['social', 'Hard traditionalist', 'Revolutionary emancipatory'],
  ['identity', 'Exclusionary ethnonationalist tendency', 'Cosmopolitan / post-national'],
  ['foreign', 'Militarist / expansionist tendency', 'Pacifist / non-interventionist'],
  ['religion', 'Militant secularist', 'Theocratic / clerical-authoritarian'],
]) {
  assert(SPECTRUM_BANDS[id].bands[0].label === expectedLow, `${id} low band was not reversed`);
  assert(SPECTRUM_BANDS[id].bands.at(-1).label === expectedHigh, `${id} high band was not reversed`);
}

const authoritarianCollectivist = ARCHETYPES.find(({ id }) => id === 'authoritarian-collectivist');
assert(authoritarianCollectivist.profile.economic === 88, 'Collectivist archetype economic score should be positive after reorientation');
assert(authoritarianCollectivist.profile.social === 18, 'Collectivist archetype social score should be positive after reorientation');
assert(authoritarianCollectivist.profile.identity === 38, 'Collectivist archetype identity score should be positive after reorientation');
assert(authoritarianCollectivist.profile.foreign === -24, 'Collectivist archetype foreign score should be negative after reorientation');
assert(authoritarianCollectivist.profile.authority === 86, 'Authority must remain unchanged for the collectivist archetype');

const libertarianMarket = ARCHETYPES.find(({ id }) => id === 'libertarian-market');
assert(libertarianMarket.profile.economic === -86, 'Market archetype economic score should be negative after reorientation');
assert(libertarianMarket.profile.social === 34, 'Market archetype social score should be positive after reorientation');
assert(libertarianMarket.profile.identity === 34, 'Market archetype identity score should be positive after reorientation');
assert(libertarianMarket.profile.foreign === 72, 'Market archetype foreign score should be positive after reorientation');
assert(libertarianMarket.profile.authority === -88, 'Authority must remain unchanged for the market archetype');

const classicalLiberal = TAXONOMY_LABELS.find(({ id }) => id === 'classical-liberalism');
assert(classicalLiberal.axisPositions.economic === -65, 'Taxonomy coordinates must use the new economic orientation');
assert(classicalLiberal.axisPositions.social === 20, 'Taxonomy coordinates must use the new social orientation');
assert(classicalLiberal.axisPositions.identity === 10, 'Taxonomy coordinates must use the new identity orientation');
assert(classicalLiberal.axisPositions.foreign === 30, 'Taxonomy coordinates must use the new foreign-policy orientation');
assert(classicalLiberal.axisPositions.authority === -55, 'Taxonomy authority coordinates must remain unchanged');

if (failures.length) {
  console.error(`Polarity tests failed with ${failures.length} error(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log('Polarity tests passed: endpoints, questionnaire scoring, bands, archetypes, taxonomy coordinates, and Authority preservation.');
}
