import {
  ARCHETYPES,
  AUTHOR_REFERENCES,
  BIBLIOGRAPHY_RECORDS,
  BAND_RANGES,
  DIMENSIONS,
  QUESTIONS,
  RESEARCH_SOURCES,
  RESEARCH_BACKLOG,
  RESEARCH_COVERAGE_MATRIX,
  RESEARCH_PEOPLE,
  RESEARCH_RELATIONSHIPS,
  RESEARCH_SECTIONS,
  RESEARCH_WORKS,
  RIGHTS_RECORDS,
  SOURCES,
  SPECTRUM_BANDS,
  TAXONOMY_LABELS,
} from '../src/content/index.js';
import {
  CANDIDATE_FACETS,
  CORE_CONSTRUCT_MAP,
  CORE_DIMENSION_IDS,
  QUESTION_AUDIT,
  VALIDATION_MODEL_DEFINITIONS,
  VALIDATION_STATUS,
} from '../src/content/validation.js';

const errors = [];
const warnings = [];
const dimensionIds = DIMENSIONS.map(({ id }) => id);
const dimensionSet = new Set(dimensionIds);
const researchSourceSet = new Set(RESEARCH_SOURCES.map(({ id }) => id));
const authorReferenceSet = new Set(Object.keys(AUTHOR_REFERENCES));
const bibliographyRecordSet = new Set(BIBLIOGRAPHY_RECORDS.map(({ id }) => id));
const taxonomyLabelSet = new Set(TAXONOMY_LABELS.map(({ id }) => id));
const archetypeSet = new Set(ARCHETYPES.map(({ id }) => id));
const researchWorkSet = new Set(RESEARCH_WORKS.map(({ id }) => id));
const researchPersonSet = new Set(RESEARCH_PEOPLE.map(({ id }) => id));
const questionSet = new Set(QUESTIONS.map(({ id }) => id));
const candidateFacetSet = new Set(CANDIDATE_FACETS.map(({ id }) => id));

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

function assertRightsRecord(rightsRecord, label) {
  assert(Boolean(rightsRecord), `${label} is missing a rights/provenance record`);
  if (!rightsRecord) return;
  assert(Boolean(rightsRecord.reviewedAt), `${label} is missing a rights review date`);
  assert(Boolean(rightsRecord.rightsStatus), `${label} is missing a rights status`);
  assert(Boolean(rightsRecord.license), `${label} is missing a licence note`);
  assert(Boolean(rightsRecord.commercialUse), `${label} is missing a commercial-use decision`);
  assert(Boolean(rightsRecord.publicationStatus), `${label} is missing a publication status`);
  assert(Boolean(rightsRecord.action), `${label} is missing an editorial action`);
}

function assertBibliographyRecordReview(record, label) {
  assert(Boolean(record.review?.reviewedAt), `${label} is missing a review date`);
  assert(Boolean(record.review?.reviewer), `${label} is missing a reviewer`);
  assert(Boolean(record.rightsStatus), `${label} is missing a rights status`);
  assert(Boolean(record.license), `${label} is missing a licence note`);
  assert(Boolean(record.commercialUse), `${label} is missing a commercial-use decision`);
  assert(Boolean(record.publicationStatus), `${label} is missing a publication status`);
  assert(Boolean(record.editorialAction), `${label} is missing an editorial action`);
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
assert(JSON.stringify(CORE_DIMENSION_IDS) === JSON.stringify(dimensionIds), 'Validation construct map must follow the public dimension order');
assert(Object.keys(CORE_CONSTRUCT_MAP).length === DIMENSIONS.length, 'Every core dimension needs an operational construct map');
assert(Object.keys(QUESTION_AUDIT).length === questionSet.size, 'Every questionnaire item needs a validation audit entry');
for (const questionId of questionSet) {
  const audit = QUESTION_AUDIT[questionId];
  assert(Boolean(audit), `Question ${questionId} is missing from the validation audit`);
  if (audit) {
    assert(['keep-provisionally', 'review'].includes(audit.status), `Question ${questionId} has an invalid validation-audit status`);
    assert(Boolean(audit.concern) && Boolean(audit.futureAction), `Question ${questionId} validation audit is incomplete`);
  }
}
assert(VALIDATION_STATUS.coreModel === '5d-v1', 'Validation registry must preserve the 5d-v1 core');
assert(VALIDATION_STATUS.empiricalStatus === 'not-run', 'Validation registry must not imply that participant validation has occurred');
assert(VALIDATION_MODEL_DEFINITIONS.length > 0, 'Validation registry must contain model definitions');
for (const model of VALIDATION_MODEL_DEFINITIONS) {
  assert(Boolean(model.id) && Boolean(model.family) && Boolean(model.purpose) && Boolean(model.status), `Validation model ${model.id ?? 'unknown'} is incomplete`);
  assert(model.axisIds.length >= 4, `Validation model ${model.id ?? 'unknown'} must retain at least four axes`);
  assert(model.axisIds.every((axisId) => CORE_DIMENSION_IDS.includes(axisId) || candidateFacetSet.has(axisId)), `Validation model ${model.id ?? 'unknown'} references an unknown axis or facet`);
  assert((model.facetIds ?? []).every((facetId) => candidateFacetSet.has(facetId)), `Validation model ${model.id ?? 'unknown'} references an unknown candidate facet`);
}
for (const dimension of DIMENSIONS) {
  const dimensionQuestions = QUESTIONS.filter(({ dimension: questionDimension }) => questionDimension === dimension.id);
  assert(dimensionQuestions.length === 5, `${dimension.id} must have exactly 5 questions`);
}
for (const question of QUESTIONS) {
  assert(dimensionSet.has(question.dimension), `Question ${question.id} references unknown dimension ${question.dimension}`);
  assert([-1, 1].includes(question.polarity), `Question ${question.id} must have polarity -1 or 1`);
}

assertUnique(RESEARCH_SOURCES.map(({ id }) => id), 'Research source');
for (const source of RESEARCH_SOURCES) {
  assertUrl(source.url, `Research source ${source.id}`);
  assertRightsRecord(RIGHTS_RECORDS.researchSources[source.id], `Research source ${source.id}`);
}
for (const [sourceId, source] of Object.entries(SOURCES)) {
  assertUrl(source.url, `Source link ${sourceId}`);
  assertRightsRecord(RIGHTS_RECORDS.sourceLinks[sourceId], `Source link ${sourceId}`);
}
for (const [referenceId, reference] of Object.entries(AUTHOR_REFERENCES)) {
  assertUrl(reference.url, `Author reference ${referenceId}`);
  assertRightsRecord(RIGHTS_RECORDS.authorReferences[referenceId], `Author reference ${referenceId}`);
  if (reference.quote) {
    assert(reference.quote.trim().split(/\s+/).length <= 25, `Direct quote ${referenceId} exceeds 25 words`);
    assert(Boolean(reference.locator), `Direct quote ${referenceId} needs a locator`);
    if (RIGHTS_RECORDS.authorReferences[referenceId]?.publicationStatus !== 'allowed') {
      warnings.push(`Direct quote ${referenceId} is held from publication pending rights review`);
    }
  }
}

const researchWorkRights = RIGHTS_RECORDS.researchWorks ?? {};
assert(Object.keys(researchWorkRights).length === researchWorkSet.size, `Research-work rights inventory must cover exactly ${researchWorkSet.size} works`);
for (const work of RESEARCH_WORKS) {
  const rights = researchWorkRights[work.id];
  assertRightsRecord(rights, `Research work ${work.id}`);
  if (rights) {
    assert(['link-only', 'review-required', 'allowed-with-attribution'].includes(rights.publicationStatus), `Research work ${work.id} has an invalid publication status`);
    assert(Boolean(rights.notes), `Research work ${work.id} is missing a rights rationale`);
  }
}

assertUnique(BIBLIOGRAPHY_RECORDS.map(({ id }) => id), 'Bibliography record');
assertUnique(BIBLIOGRAPHY_RECORDS.map(({ canonicalUrl }) => canonicalUrl), 'Bibliography canonical URL');
for (const record of BIBLIOGRAPHY_RECORDS) {
  assert(Boolean(record.id), 'Bibliography record is missing a stable ID');
  assert(Boolean(record.citationKey), `Bibliography ${record.id} is missing a citation key`);
  assert(Boolean(record.title), `Bibliography ${record.id} is missing a title`);
  assert(Boolean(record.recordType), `Bibliography ${record.id} is missing a record type`);
  assert(Boolean(record.sourceType), `Bibliography ${record.id} is missing a source type`);
  assert(Boolean(record.discipline), `Bibliography ${record.id} is missing a discipline`);
  assertUrl(record.canonicalUrl, `Bibliography ${record.id}`);
  assert(Boolean(record.accessDate), `Bibliography ${record.id} is missing an access date`);
  assertBibliographyRecordReview(record, `Bibliography ${record.id}`);
  assert(['primary', 'secondary', 'methodology', 'contextual'].includes(record.evidenceRole), `Bibliography ${record.id} has an invalid evidence role`);
  assert(['reviewed', 'needs-review'].includes(record.review?.status), `Bibliography ${record.id} has an invalid review status`);
  assert(['high', 'medium', 'low'].includes(record.review?.confidence), `Bibliography ${record.id} has an invalid confidence value`);
  assert(Array.isArray(record.creators), `Bibliography ${record.id} creators must be an array`);
  for (const dimensionId of record.relationships?.dimensionIds ?? []) {
    assert(dimensionSet.has(dimensionId), `Bibliography ${record.id} references unknown dimension ${dimensionId}`);
  }
  for (const labelId of record.relationships?.taxonomyLabelIds ?? []) {
    assert(taxonomyLabelSet.has(labelId), `Bibliography ${record.id} references unknown taxonomy label ${labelId}`);
  }
  for (const archetypeId of record.relationships?.archetypeIds ?? []) {
    assert(archetypeSet.has(archetypeId), `Bibliography ${record.id} references unknown archetype ${archetypeId}`);
  }
  const relationshipCount = Object.values(record.relationships ?? {}).reduce((sum, values) => sum + (Array.isArray(values) ? values.length : 0), 0);
  assert(relationshipCount > 0, `Bibliography ${record.id} is orphaned from the content model`);
}

function recordsForCitation(field, citationId) {
  return BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds?.[field]?.includes(citationId));
}

for (const source of RESEARCH_SOURCES) {
  const matches = recordsForCitation('researchSourceIds', source.id);
  assert(matches.length === 1, `Research source ${source.id} must resolve to exactly one bibliography record; found ${matches.length}`);
  if (matches[0]) assert(bibliographyRecordSet.has(matches[0].id), `Research source ${source.id} resolves outside the bibliography set`);
}
for (const referenceId of authorReferenceSet) {
  const matches = recordsForCitation('authorReferenceIds', referenceId);
  assert(matches.length === 1, `Author reference ${referenceId} must resolve to exactly one bibliography record; found ${matches.length}`);
}
for (const sourceLinkId of Object.keys(SOURCES)) {
  const matches = recordsForCitation('sourceLinkIds', sourceLinkId);
  assert(matches.length === 1, `Source link ${sourceLinkId} must resolve to exactly one bibliography record; found ${matches.length}`);
}
for (const workId of researchWorkSet) {
  const matches = recordsForCitation('researchWorkIds', workId);
  assert(matches.length === 1, `Research work ${workId} must resolve to exactly one bibliography record; found ${matches.length}`);
}
for (const personId of researchPersonSet) {
  const matches = recordsForCitation('researchPersonIds', personId);
  assert(matches.length === 1, `Research person ${personId} must resolve to exactly one bibliography record; found ${matches.length}`);
}
for (const work of RESEARCH_WORKS) {
  assertUrl(work.canonicalUrl, `Research work ${work.id}`);
  assertUnique(work.claims.map(({ id }) => id), `Research work ${work.id} claim`);
  assert(work.creators?.length > 0, `Research work ${work.id} is missing creators`);
  assert(Boolean(work.originalLanguage), `Research work ${work.id} is missing original language`);
  assert(Boolean(work.context), `Research work ${work.id} is missing context`);
  assert(['reviewed', 'needs-review'].includes(work.review?.status), `Research work ${work.id} has invalid review status`);
  assert(['high', 'medium', 'low'].includes(work.review?.confidence), `Research work ${work.id} has invalid confidence`);
  for (const dimensionId of work.dimensionIds ?? []) assert(dimensionSet.has(dimensionId), `Research work ${work.id} references unknown dimension ${dimensionId}`);
  for (const item of work.claims ?? []) {
    assert(dimensionSet.has(item.dimensionId), `Research work ${work.id} claim ${item.id} references unknown dimension ${item.dimensionId}`);
    assert(Array.isArray(item.positionRange) && item.positionRange.length === 2 && item.positionRange[0] <= item.positionRange[1] && item.positionRange[0] >= -100 && item.positionRange[1] <= 100, `Research work ${work.id} claim ${item.id} has invalid position range`);
    assert(Boolean(item.summary), `Research work ${work.id} claim ${item.id} is missing a summary`);
    assert(Boolean(item.locator), `Research work ${work.id} claim ${item.id} is missing a locator`);
  }
}
assertUnique(RESEARCH_WORKS.map(({ id }) => id), 'Research work');
for (const person of RESEARCH_PEOPLE) {
  assertUrl(person.canonicalUrl, `Research person ${person.id}`);
  assert(Boolean(person.fullName), `Research person ${person.id} is missing a name`);
  assert(person.roles?.length > 0, `Research person ${person.id} is missing roles`);
  assert(Boolean(person.region) && Boolean(person.period), `Research person ${person.id} is missing region or period`);
  assert(['documented', 'strongly-supported', 'plausible/partial', 'contested', 'insufficient evidence'].includes(person.confidence), `Research person ${person.id} has invalid confidence`);
  for (const workId of person.works ?? []) assert(researchWorkSet.has(workId), `Research person ${person.id} references unknown work ${workId}`);
  for (const relatedId of person.relatedPeople ?? []) assert(researchPersonSet.has(relatedId), `Research person ${person.id} references unknown related person ${relatedId}`);
  assert(person.claimEvidence?.length === DIMENSIONS.length, `Research person ${person.id} must have one claim-evidence record per dimension`);
  for (const item of person.claimEvidence ?? []) {
    assert(dimensionSet.has(item.dimensionId), `Research person ${person.id} claim evidence references unknown dimension ${item.dimensionId}`);
    assert(Boolean(item.summary) && Boolean(item.sourceUrl) && Boolean(item.locator), `Research person ${person.id} claim evidence for ${item.dimensionId} is incomplete`);
    assert(Array.isArray(item.sourceIds), `Research person ${person.id} claim evidence for ${item.dimensionId} must list source IDs`);
  }
  for (const dimension of DIMENSIONS) {
    const range = person.profile?.[dimension.id]?.range;
    assert(Array.isArray(range) && range.length === 2 && range[0] <= range[1] && range[0] >= -100 && range[1] <= 100, `Research person ${person.id} has invalid ${dimension.id} range`);
    assert(Boolean(person.profile?.[dimension.id]?.note), `Research person ${person.id} is missing ${dimension.id} interpretation`);
  }
}
assertUnique(RESEARCH_PEOPLE.map(({ id }) => id), 'Research person');
for (const relationship of RESEARCH_RELATIONSHIPS) {
  assert(researchPersonSet.has(relationship.from) || researchWorkSet.has(relationship.from), `Research relationship has unknown source ${relationship.from}`);
  assert(researchPersonSet.has(relationship.to) || researchWorkSet.has(relationship.to), `Research relationship has unknown target ${relationship.to}`);
  assert(['same_as', 'close_to', 'distinct_from', 'influenced', 'opposed', 'successor_to', 'criticized', 'historically_contextualized'].includes(relationship.type), `Research relationship ${relationship.from} → ${relationship.to} has invalid type`);
  assert(Boolean(relationship.note), `Research relationship ${relationship.from} → ${relationship.to} is missing a note`);
}
assertUnique(RESEARCH_RELATIONSHIPS.map(({ from, to, type }) => `${from}:${to}:${type}`), 'Research relationship');
for (const row of RESEARCH_COVERAGE_MATRIX) {
  assert(dimensionSet.has(row.dimensionId), `Coverage matrix references unknown dimension ${row.dimensionId}`);
  assert(row.bands.length === BAND_RANGES.length, `Coverage matrix ${row.dimensionId} must contain one cell per band`);
  for (const cell of row.bands) {
    assert(['strong', 'thin', 'gap'].includes(cell.status), `Coverage matrix ${row.dimensionId} band ${cell.band} has invalid status`);
    assert(cell.works.every((id) => researchWorkSet.has(id)), `Coverage matrix ${row.dimensionId} references unknown work`);
    assert(cell.people.every((id) => researchPersonSet.has(id)), `Coverage matrix ${row.dimensionId} references unknown person`);
  }
}
assert(RESEARCH_SECTIONS.length >= 7, 'Research atlas is missing editorial sections');
assert(RESEARCH_BACKLOG.length > 0, 'Research atlas must record unresolved bibliography gaps');

assert(TAXONOMY_LABELS.length >= 20, `Expected at least 20 normalized taxonomy labels, found ${TAXONOMY_LABELS.length}`);
assertUnique(TAXONOMY_LABELS.map(({ id }) => id), 'Taxonomy label');
for (const label of TAXONOMY_LABELS) {
  assert(Boolean(label.canonicalName), `${label.id} is missing a canonical name`);
  assert(Array.isArray(label.aliases) && label.aliases.length > 0, `${label.id} is missing aliases`);
  assert(Boolean(label.labelType), `${label.id} is missing a label type`);
  assert(Boolean(label.family), `${label.id} is missing an ideology family`);
  assert(Boolean(label.region), `${label.id} is missing a region`);
  assert(Boolean(label.period), `${label.id} is missing a period`);
  assert(Boolean(label.status), `${label.id} is missing a status`);
  assert(Boolean(label.summary), `${label.id} is missing a summary`);
  assert(Boolean(label.differences), `${label.id} is missing a differences note`);
  assert(Array.isArray(label.sourceIds) && label.sourceIds.length > 0, `${label.id} is missing sources`);
  for (const sourceId of label.sourceIds ?? []) {
    assert(researchSourceSet.has(sourceId), `${label.id} references unknown research source ${sourceId}`);
  }
  for (const dimension of DIMENSIONS) {
    const value = label.axisPositions?.[dimension.id];
    assert(value === null || (Number.isFinite(value) && value >= -100 && value <= 100), `${label.id} has an invalid ${dimension.id} taxonomy position`);
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
  console.log(`Content validation passed: ${DIMENSIONS.length} dimensions, ${QUESTIONS.length} questions, ${ARCHETYPES.length} archetypes, ${RESEARCH_SOURCES.length} research sources, and ${BIBLIOGRAPHY_RECORDS.length} bibliography records.`);
  if (warnings.length > 0) {
    console.warn(`Rights review warnings (${warnings.length}):`);
    for (const warning of warnings) console.warn(`- ${warning}`);
  }
}
