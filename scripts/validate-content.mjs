import {
  ARCHETYPES,
  AUTHOR_REFERENCES,
  BAND_RANGES,
  DIMENSIONS,
  QUESTIONS,
  RESEARCH_SOURCES,
  SPECTRUM_BANDS,
} from '../src/content/index.js';

const errors = [];
const dimensionIds = DIMENSIONS.map(({ id }) => id);
const dimensionSet = new Set(dimensionIds);
const researchSourceSet = new Set(RESEARCH_SOURCES.map(({ id }) => id));
const authorReferenceSet = new Set(Object.keys(AUTHOR_REFERENCES));

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function assertUnique(values, label) {
  assert(new Set(values).size === values.length, `${label} must contain unique IDs`);
}

function assertUrl(url, label) {
  try {
    const parsed = new URL(url);
    assert(parsed.protocol === 'http:' || parsed.protocol === 'https:', `${label} must use HTTP(S)`);
  } catch {
    errors.push(`${label} is not a valid URL: ${url}`);
  }
}

assert(DIMENSIONS.length === 5, `Expected exactly 5 dimensions, found ${DIMENSIONS.length}`);
assertUnique(dimensionIds, 'Dimensions');

assert(BAND_RANGES.length === 10, `Expected 10 score bands, found ${BAND_RANGES.length}`);
assert(BAND_RANGES[0]?.[0] === -100, 'Band ranges must start at -100');
assert(BAND_RANGES.at(-1)?.[1] === 100, 'Band ranges must end at 100');
for (let index = 1; index < BAND_RANGES.length; index += 1) {
  assert(
    BAND_RANGES[index - 1][1] + 1 === BAND_RANGES[index][0],
    `Band ranges are not contiguous at index ${index}`,
  );
}

assert(QUESTIONS.length === 25, `Expected 25 questionnaire items, found ${QUESTIONS.length}`);
assertUnique(QUESTIONS.map(({ id }) => id), 'Question');
for (const dimension of DIMENSIONS) {
  const dimensionQuestions = QUESTIONS.filter(({ dimension: questionDimension }) => questionDimension === dimension.id);
  assert(dimensionQuestions.length === 5, `${dimension.id} must have exactly 5 questions`);
}
for (const question of QUESTIONS) {
  assert(dimensionSet.has(question.dimension), `Question ${question.id} references unknown dimension ${question.dimension}`);
  assert([-1, 1].includes(question.polarity), `Question ${question.id} must have polarity -1 or 1`);
}

assertUnique(RESEARCH_SOURCES.map(({ id }) => id), 'Research source');
for (const source of RESEARCH_SOURCES) assertUrl(source.url, `Research source ${source.id}`);
for (const [referenceId, reference] of Object.entries(AUTHOR_REFERENCES)) {
  assertUrl(reference.url, `Author reference ${referenceId}`);
  if (reference.quote) {
    assert(reference.quote.trim().split(/\s+/).length <= 25, `Direct quote ${referenceId} exceeds 25 words`);
    assert(Boolean(reference.locator), `Direct quote ${referenceId} needs a locator`);
  }
}

assert(Object.keys(SPECTRUM_BANDS).length === DIMENSIONS.length, 'Spectrum bands must cover every dimension exactly once');
for (const dimension of DIMENSIONS) {
  const catalog = SPECTRUM_BANDS[dimension.id];
  assert(Boolean(catalog), `Missing spectrum catalog for ${dimension.id}`);
  if (!catalog) continue;

  assert(Array.isArray(catalog.bands) && catalog.bands.length === 10, `${dimension.id} must have 10 spectrum bands`);
  assert(Array.isArray(catalog.basisCitationIds) && catalog.basisCitationIds.length > 0, `${dimension.id} basis is missing author references`);
  for (const citationId of catalog.basisCitationIds ?? []) {
    assert(authorReferenceSet.has(citationId), `${dimension.id} basis references unknown author work ${citationId}`);
  }
  for (const sourceId of catalog.sourceIds ?? []) {
    assert(researchSourceSet.has(sourceId), `${dimension.id} references unknown research source ${sourceId}`);
  }
  for (let index = 0; index < (catalog.bands?.length ?? 0); index += 1) {
    const band = catalog.bands[index];
    assert(Number.isInteger(band.min) && Number.isInteger(band.max), `${dimension.id} band ${index} must have integer bounds`);
    assert(band.min <= band.max, `${dimension.id} band ${index} has inverted bounds`);
    assert(Array.isArray(band.citationIds) && band.citationIds.length > 0, `${dimension.id} band ${index} is missing author references`);
    for (const citationId of band.citationIds ?? []) {
      assert(authorReferenceSet.has(citationId), `${dimension.id} band ${index} references unknown author work ${citationId}`);
    }
    if (index > 0) {
      assert(catalog.bands[index - 1].max + 1 === band.min, `${dimension.id} bands overlap or have a gap at index ${index}`);
    }
  }
  assert(catalog.bands?.[0]?.min === -100, `${dimension.id} bands must start at -100`);
  assert(catalog.bands?.at(-1)?.max === 100, `${dimension.id} bands must end at 100`);
}

assertUnique(ARCHETYPES.map(({ id }) => id), 'Archetype');
for (const archetype of ARCHETYPES) {
  assert(Array.isArray(archetype.summaryCitationIds) && archetype.summaryCitationIds.length > 0, `${archetype.id} is missing summary references`);
  for (const citationId of archetype.summaryCitationIds ?? []) {
    assert(authorReferenceSet.has(citationId), `${archetype.id} references unknown summary work ${citationId}`);
  }
  for (const dimension of DIMENSIONS) {
    const value = archetype.profile?.[dimension.id];
    assert(Number.isFinite(value) && value >= -100 && value <= 100, `${archetype.id} has an invalid ${dimension.id} profile value`);
    assert(Boolean(archetype.dimensionNotes?.[dimension.id]), `${archetype.id} is missing a ${dimension.id} explanation`);
    const dimensionCitations = archetype.dimensionCitationIds?.[dimension.id] ?? [];
    assert(dimensionCitations.length > 0, `${archetype.id} is missing ${dimension.id} references`);
    for (const citationId of dimensionCitations) {
      assert(authorReferenceSet.has(citationId), `${archetype.id} references unknown ${dimension.id} work ${citationId}`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Content validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Content validation passed: ${DIMENSIONS.length} dimensions, ${QUESTIONS.length} questions, ${ARCHETYPES.length} archetypes, and ${RESEARCH_SOURCES.length} research sources.`);
}
