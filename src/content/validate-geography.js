import { GEOGRAPHY_CASES, GEOGRAPHY_CONTINENTS, GEOGRAPHY_COUNTRIES, GEOGRAPHY_LABELS, GEOGRAPHY_PLACES, GEOGRAPHY_RELATIONSHIPS } from './geography.js';

export function validateGeography({ sourceIds, entryIds, workIds, bibliography, cases = GEOGRAPHY_CASES, labels = GEOGRAPHY_LABELS, places = GEOGRAPHY_PLACES }) {
  const errors = [];
  const check = (condition, message) => { if (!condition) errors.push(`Geography: ${message}`); };
  for (const [name, records] of Object.entries({ cases, labels, places, countries: GEOGRAPHY_COUNTRIES, relationships: GEOGRAPHY_RELATIONSHIPS })) {
    check(new Set(records.map(({ id }) => id)).size === records.length, `${name} IDs must be unique`);
    for (const item of records) check(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.id), `${name} has an invalid ID`);
  }
  const labelSet = new Set(labels.map(({ id }) => id));
  const placeSet = new Set(places.map(({ id }) => id));
  const countrySet = new Set(GEOGRAPHY_COUNTRIES.map(({ id }) => id));
  const relationshipSet = new Set(GEOGRAPHY_RELATIONSHIPS.map(({ id }) => id));
  function checkSources(item) {
    check(item.sourceIds?.length > 0, `${item.id} needs claim-level sources`);
    for (const id of item.sourceIds ?? []) {
      check(sourceIds.has(id), `${item.id} has unknown source ${id}`);
      check(bibliography.filter((record) => record.citationIds.researchSourceIds.includes(id)).length === 1, `${item.id} source ${id} must resolve once in the bibliography`);
    }
  }
  for (const place of places) {
    for (const field of ['name', 'type', 'modernLocation', 'note']) check(Boolean(place[field]), `${place.id} lacks ${field}`);
    check(place.continents?.length && place.regions?.length, `${place.id} needs geographic groupings`);
    for (const continent of place.continents ?? []) check(GEOGRAPHY_CONTINENTS.includes(continent), `${place.id} has unknown continent`);
    for (const id of place.countryIds ?? []) check(countrySet.has(id), `${place.id} has unknown country ${id}`);
  }
  for (const label of labels) {
    checkSources(label);
    for (const field of ['name', 'family', 'description']) check(Boolean(label[field]), `${label.id} lacks ${field}`);
    check(Array.isArray(label.aliases) && Array.isArray(label.relatedEntries), `${label.id} needs alias and related-entry arrays`);
    check(!('profile' in label) && !('scores' in label), `${label.id} must not silently acquire a scored profile`);
    for (const link of label.relatedEntries ?? []) check(entryIds.has(link.id) && link.note, `${label.id} has an invalid or unexplained encyclopedia link`);
    if (label.researchWorkId) check(workIds.has(label.researchWorkId), `${label.id} links an unknown research work`);
  }
  for (const item of cases) {
    checkSources(item);
    check(labelSet.has(item.labelId), `${item.id} has unknown label`);
    check(placeSet.has(item.placeId), `${item.id} has unknown place`);
    check(relationshipSet.has(item.relationship), `${item.id} has unknown relationship`);
    check(Number.isInteger(item.startYear) && Number.isInteger(item.endYear) && item.startYear <= item.endYear, `${item.id} has invalid or reversed dates`);
    check(['year', 'approximate', 'century', 'snapshot'].includes(item.datePrecision), `${item.id} needs date precision`);
    if (item.datePrecision === 'snapshot') check(item.startYear === item.endYear, `${item.id} snapshot must not imply an ongoing range`);
    check(/^\d{4}-\d{2}-\d{2}$/.test(item.reviewedAt), `${item.id} needs a review date`);
    check(['low', 'medium', 'high'].includes(item.confidence), `${item.id} needs confidence`);
    for (const field of ['actor', 'historicalSetting', 'periodLabel', 'claim', 'limitation', 'locator', 'evidenceKind']) check(Boolean(item[field]), `${item.id} lacks ${field}`);
    for (const id of item.sourceIds ?? []) {
      const record = bibliography.find((record) => record.citationIds.researchSourceIds.includes(id));
      check(record?.relationships.profileEntries.includes(`geography:${item.id}`), `${item.id} source ${id} needs a bibliography backlink`);
    }
  }
  return errors;
}
