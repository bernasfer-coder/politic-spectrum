import assert from 'node:assert/strict';
import {
  BIBLIOGRAPHY_RECORDS,
  DIMENSIONS,
  RESEARCH_COVERAGE_MATRIX,
  RESEARCH_PEOPLE,
  RESEARCH_RELATIONSHIPS,
  RESEARCH_WORKS,
} from '../src/content/index.js';

const dimensionIds = new Set(DIMENSIONS.map(({ id }) => id));
const workIds = new Set(RESEARCH_WORKS.map(({ id }) => id));
const personIds = new Set(RESEARCH_PEOPLE.map(({ id }) => id));
const bibliographyFor = (field, id) => BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds[field]?.includes(id));

assert.equal(RESEARCH_WORKS.length, 17, 'the curated research inventory should contain 17 works/legal texts');
assert.equal(RESEARCH_PEOPLE.length, 17, 'the curated research inventory should contain 17 people');
assert.equal(RESEARCH_COVERAGE_MATRIX.length, DIMENSIONS.length, 'coverage must include every dimension');

for (const work of RESEARCH_WORKS) {
  assert.ok(work.claims.length >= 2, `${work.id} should expose at least two claim-level evidence records`);
  assert.equal(new Set(work.claims.map(({ id }) => id)).size, work.claims.length, `${work.id} claim IDs must be unique`);
  for (const item of work.claims) {
    assert.ok(dimensionIds.has(item.dimensionId), `${work.id} claim has an unknown dimension`);
    assert.ok(item.locator && item.summary, `${work.id} claim must include a locator and plain-language summary`);
    assert.ok(item.positionRange[0] >= -100 && item.positionRange[1] <= 100, `${work.id} claim range must fit the five-axis scale`);
  }
  assert.equal(bibliographyFor('researchWorkIds', work.id).length, 1, `${work.id} must have one bibliography record`);
}

for (const person of RESEARCH_PEOPLE) {
  assert.equal(person.claimEvidence.length, DIMENSIONS.length, `${person.id} must include evidence boundaries for every dimension`);
  assert.ok(person.claimEvidence.every((item) => item.sourceUrl && item.locator && item.summary), `${person.id} claim evidence must identify its source and boundary`);
  assert.ok(person.works.every((id) => workIds.has(id)), `${person.id} references an unknown work`);
  assert.ok(person.relatedPeople.every((id) => personIds.has(id)), `${person.id} references an unknown person`);
  assert.equal(bibliographyFor('researchPersonIds', person.id).length, 1, `${person.id} must have one bibliography record`);
}

for (const row of RESEARCH_COVERAGE_MATRIX) {
  assert.ok(dimensionIds.has(row.dimensionId), `${row.dimensionId} coverage row must be a known dimension`);
  assert.equal(row.bands.length, 10, `${row.dimensionId} coverage must have ten 20-point cells`);
  for (const cell of row.bands) {
    assert.ok(['strong', 'thin', 'gap'].includes(cell.status), `${row.dimensionId} band ${cell.band} has an invalid coverage status`);
    assert.ok(cell.total >= 0, `${row.dimensionId} band ${cell.band} cannot have negative coverage`);
  }
}

for (const relationship of RESEARCH_RELATIONSHIPS) {
  assert.ok(workIds.has(relationship.from) || personIds.has(relationship.from), 'relationship source must resolve');
  assert.ok(workIds.has(relationship.to) || personIds.has(relationship.to), 'relationship target must resolve');
  assert.ok(relationship.note, 'relationship must include a distinction note');
}

const roleMatches = RESEARCH_PEOPLE.filter((person) => person.roles.includes('lawyer') || person.roles.includes('jurist') || person.roles.includes('legal scholar'));
assert.ok(roleMatches.length >= 3, 'research filters should have a meaningful legal role cohort');
assert.ok(RESEARCH_WORKS.some((work) => work.originalLanguage.includes('Classical Chinese')));
assert.ok(RESEARCH_WORKS.some((work) => work.regions.some((region) => region.includes('Latin America'))));

console.log(`Research tests passed: ${RESEARCH_WORKS.length} works, ${RESEARCH_PEOPLE.length} people, ${RESEARCH_RELATIONSHIPS.length} relationships, and ${DIMENSIONS.length * 10} coverage cells.`);
