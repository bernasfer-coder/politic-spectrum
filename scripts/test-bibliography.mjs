import assert from 'node:assert/strict';
import {
  ARCHETYPES,
  AUTHOR_REFERENCES,
  BIBLIOGRAPHY_RECORDS,
  DIMENSIONS,
  RESEARCH_SOURCES,
  SOURCES,
  TAXONOMY_LABELS,
} from '../src/content/index.js';

const unique = (values) => new Set(values).size === values.length;
const recordsFor = (field, id) => BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds[field]?.includes(id));

const sourceUrls = [...RESEARCH_SOURCES, ...Object.values(AUTHOR_REFERENCES), ...Object.values(SOURCES)].map(({ url }) => url);
assert.ok(BIBLIOGRAPHY_RECORDS.length >= new Set(sourceUrls).size);
assert.ok(unique(BIBLIOGRAPHY_RECORDS.map((record) => record.id)), 'bibliography IDs must be unique');
assert.ok(unique(BIBLIOGRAPHY_RECORDS.map((record) => record.canonicalUrl)), 'bibliography canonical URLs must be unique');

for (const record of BIBLIOGRAPHY_RECORDS) {
  assert.match(record.id, /^(research|author|link|work|person)-[A-Za-z0-9-]+$/);
  assert.ok(record.title && record.canonicalUrl && record.accessDate, `${record.id} must have stable source metadata`);
  assert.ok(record.review?.reviewer && record.review?.reviewedAt, `${record.id} must have review provenance`);
  assert.ok(record.rightsStatus && record.license && record.commercialUse && record.publicationStatus && record.editorialAction, `${record.id} must have rights metadata`);
  assert.ok(Object.values(record.relationships).some((values) => values.length), `${record.id} must map to downstream content`);
}

const sharedSourceLinkIds = RESEARCH_SOURCES.map(({ sourceLinkId }) => sourceLinkId).filter(Boolean);
assert.ok(unique(sharedSourceLinkIds), 'a source link may be shared with only one research record');
for (const source of RESEARCH_SOURCES) {
  assert.equal(recordsFor('researchSourceIds', source.id).length, 1, source.id);
  if (source.sourceLinkId) {
    assert.equal(SOURCES[source.sourceLinkId]?.url, source.url, 'shared citations must identify the exact same source');
    const [record] = recordsFor('researchSourceIds', source.id);
    assert.equal(record.id, `link-${source.sourceLinkId}`, 'sharing a source must preserve its existing public anchor');
    assert.ok(record.citationIds.sourceLinkIds.includes(source.sourceLinkId), 'shared records must resolve both citation types');
  }
}
for (const id of Object.keys(AUTHOR_REFERENCES)) assert.equal(recordsFor('authorReferenceIds', id).length, 1, id);
for (const id of Object.keys(SOURCES)) assert.equal(recordsFor('sourceLinkIds', id).length, 1, id);

const dimensionIds = new Set(DIMENSIONS.map((dimension) => dimension.id));
const taxonomyIds = new Set(TAXONOMY_LABELS.map((label) => label.id));
const archetypeIds = new Set(ARCHETYPES.map((archetype) => archetype.id));
for (const record of BIBLIOGRAPHY_RECORDS) {
  for (const id of record.relationships.dimensionIds) assert.ok(dimensionIds.has(id), `${record.id} has unknown dimension ${id}`);
  for (const id of record.relationships.taxonomyLabelIds) assert.ok(taxonomyIds.has(id), `${record.id} has unknown taxonomy label ${id}`);
  for (const id of record.relationships.archetypeIds) assert.ok(archetypeIds.has(id), `${record.id} has unknown archetype ${id}`);
}

console.log(`Bibliography tests passed: ${BIBLIOGRAPHY_RECORDS.length} records, all citations resolve exactly once.`);
