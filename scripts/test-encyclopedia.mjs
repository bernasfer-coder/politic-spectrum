import assert from 'node:assert/strict';
import {
  ARCHETYPES,
  AUTHOR_REFERENCES,
  BIBLIOGRAPHY_RECORDS,
  DIMENSIONS,
  ENCYCLOPEDIA_ENTRIES,
  RESEARCH_SOURCES,
} from '../src/content/index.js';

const authorReferenceIds = new Set(Object.keys(AUTHOR_REFERENCES));
const researchSourceIds = new Set(RESEARCH_SOURCES.map(({ id }) => id));
const dimensionIds = new Set(DIMENSIONS.map(({ id }) => id));
const requiredSectionIds = ['introduction', 'description', 'history', 'variants', 'examples', 'related-labels', 'criticisms'];

assert.ok(Object.keys(ENCYCLOPEDIA_ENTRIES).length >= 1, 'the encyclopedia needs at least one entry');

function validateCitations(record, location) {
  for (const id of record.authorReferenceIds ?? []) {
    assert.ok(authorReferenceIds.has(id), `${location} cites unknown author reference ${id}`);
  }
  for (const id of record.researchSourceIds ?? []) {
    assert.ok(researchSourceIds.has(id), `${location} cites unknown research source ${id}`);
  }
}

function walkEvidence(value, location = 'entry') {
  if (!value || typeof value !== 'object') return;
  if (value.citations) validateCitations(value.citations, location);
  for (const [key, child] of Object.entries(value)) {
    if (key !== 'citations') walkEvidence(child, `${location}.${key}`);
  }
}

for (const [id, entry] of Object.entries(ENCYCLOPEDIA_ENTRIES)) {
  assert.equal(entry.id, id, `${id} must repeat its registry key`);
  assert.ok(entry.title && entry.summary && entry.scopeNote, `${id} needs title, summary, and scope boundary`);
  assert.ok(['researched-draft', 'reviewed', 'published'].includes(entry.status), `${id} has an invalid editorial status`);
  assert.ok(['low', 'medium', 'high'].includes(entry.confidence), `${id} has an invalid confidence value`);
  assert.deepEqual(Object.keys(entry.dimensionInterpretations).sort(), [...dimensionIds].sort(), `${id} must cover every public dimension`);
  for (const [dimensionId, interpretation] of Object.entries(entry.dimensionInterpretations)) {
    assert.ok(Number.isInteger(interpretation.score) && interpretation.score >= -100 && interpretation.score <= 100, `${id}.${dimensionId} needs a score from -100 to 100`);
    assert.ok(interpretation.label && interpretation.explanation, `${id}.${dimensionId} needs a label and explanation`);
  }
  const sectionIds = entry.sections.map(({ id: sectionId }) => sectionId);
  for (const sectionId of requiredSectionIds) assert.ok(sectionIds.includes(sectionId), `${id} is missing section ${sectionId}`);
  assert.equal(new Set(sectionIds).size, sectionIds.length, `${id} section IDs must be unique`);
  assert.ok(entry.references.authorReferenceIds.length >= 3, `${id} needs multiple author references`);
  assert.ok(entry.references.researchSourceIds.length >= 1, `${id} needs a research-source trail`);
  assert.ok(entry.researchGaps.length >= 2, `${id} needs explicit research gaps`);
  walkEvidence(entry, id);
}

for (const profileId of ['communist', 'anarcho-capitalist', 'anarcho-communist', 'liberal-constitutionalist', 'militarist-imperialist', 'libertarian-market', 'historical-fascist']) {
  const profile = ARCHETYPES.find(({ id }) => id === profileId).profile;
  for (const { id } of DIMENSIONS) {
    assert.equal(ENCYCLOPEDIA_ENTRIES[profileId].dimensionInterpretations[id].score, profile[id], `${profileId}.${id} must use the same orientation as its reference card`);
  }
}
assert.equal(ENCYCLOPEDIA_ENTRIES.communist.dimensionInterpretations.religion.score, 55, 'the existing secular communist coordinate must remain positive');
assert.equal(ENCYCLOPEDIA_ENTRIES['anarcho-capitalist'].dimensionInterpretations.economic.score, -96, 'the existing strongly market-oriented coordinate must remain negative');
assert.equal(ENCYCLOPEDIA_ENTRIES['anarcho-communist'].dimensionInterpretations.religion.score, 45, 'the existing secular anarcho-communist coordinate must remain positive');
assert.equal(ENCYCLOPEDIA_ENTRIES['liberal-constitutionalist'].dimensionInterpretations.economic.score, -30, 'the existing market-oriented liberal constitutional coordinate must remain negative');
assert.equal(ENCYCLOPEDIA_ENTRIES['liberal-constitutionalist'].dimensionInterpretations.religion.score, 55, 'the existing secular liberal constitutional coordinate must remain positive');
assert.equal(ENCYCLOPEDIA_ENTRIES['militarist-imperialist'].dimensionInterpretations.economic.score, -12, 'the compound imperial profile must preserve its existing canonical economic coordinate');

const civicEntry = ENCYCLOPEDIA_ENTRIES['civic-nationalist'];
const civicProfile = ARCHETYPES.find(({ id }) => id === 'civic-nationalist').profile;
assert.equal(civicEntry.dimensionInterpretations.religion.score, civicProfile.religion, 'the civic article must match the existing secular-positive card');
assert.equal(civicEntry.dimensionInterpretations.religion.score, 15, 'the religion repair must preserve the canonical magnitude');
for (const [sourceId, evidenceRole] of [
  ['algeriaSenatusConsulte1865', 'primary'],
  ['algeriaCremieuxDecrees1870', 'primary'],
  ['immigrationMuseumColonialStatus', 'secondary'],
  ['direcheStoraExhibition2022', 'secondary'],
]) {
  assert.ok(civicEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a civic-nationalist reference trail`);
  assert.ok(JSON.stringify(civicEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish legal texts from historical interpretation`);
  assert.equal(record.accessDate, '2026-09-16', `${sourceId} needs its consultation date`);
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} must remain summary-and-link only`);
  assert.equal(record.directQuote, null, `${sourceId} must not introduce an unreviewed quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:civic-nationalist'), `${sourceId} needs an encyclopedia backlink`);
}
const civicTimeline = civicEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(civicTimeline.find(({ period }) => period.startsWith('1865:'))?.citations.researchSourceIds.includes('algeriaSenatusConsulte1865'), 'the 1865 rules need contemporaneous legal evidence');
assert.ok(civicTimeline.find(({ period }) => period.startsWith('1870:'))?.citations.researchSourceIds.includes('algeriaCremieuxDecrees1870'), 'the 1870 routes need distinct legal evidence');
const colonialCounterexample = civicEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('French Algeria:'));
assert.match(colonialCounterexample.match, /Counterexample, not an ideological match/, 'colonial exclusion must not become a scored civic ideal');
assert.ok(civicEntry.researchGaps.some((gap) => gap.includes('social-axis magnitude mismatch')), 'the unresolved magnitude mismatch must stay visible');

const monarchistEntry = ENCYCLOPEDIA_ENTRIES.monarchist;
for (const [sourceId, evidenceRole] of [
  ['brazilConstitution1824', 'primary'],
  ['lynchModeratingPower2005', 'secondary'],
  ['brazilCouncilDecree1847', 'primary'],
  ['ferrazImperialCabinets2017', 'secondary'],
]) {
  assert.ok(monarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a monarchist reference trail`);
  assert.ok(JSON.stringify(monarchistEntry.sections).includes(sourceId), `${sourceId} needs a claim-level citation`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve to one reused or new record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish formal rules from historical interpretation`);
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} must retain the summary-and-link boundary`);
  assert.equal(record.directQuote, null, `${sourceId} must not introduce a quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:monarchist'), `${sourceId} needs an encyclopedia backlink`);
}
const cabinetEvidence = monarchistEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.includes('Table 7'));
assert.ok(cabinetEvidence, 'the cabinet study needs an explicit evidence-boundary note');
assert.match(cabinetEvidence.text, /proxy for 1858 and no index for 1859/, 'the selected budget evidence must preserve its missing-data and proxy qualifications');

const fascistEntry = ENCYCLOPEDIA_ENTRIES['historical-fascist'];
for (const [sourceId, evidenceRole] of [
  ['cdecAntisemiticDecrees1938', 'primary'],
  ['anselmiPropertyReport2001', 'secondary'],
  ['ushmmItalyPersecution', 'secondary'],
]) {
  assert.ok(fascistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an Italian Fascism reference trail`);
  assert.ok(JSON.stringify(fascistEntry.sections).includes(sourceId), `${sourceId} needs a claim-level citation`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs exactly one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish contemporary legislation from later historical research`);
  assert.equal(record.accessDate, '2026-09-16', `${sourceId} needs its consultation date`);
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} must retain the summary-and-link boundary`);
  assert.equal(record.directQuote, null, `${sourceId} must not introduce an unreviewed quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:historical-fascist'), `${sourceId} needs an encyclopedia backlink`);
}
const fascistHistory = fascistEntry.sections.find(({ id }) => id === 'history').timeline;
const italyRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'link-fascistItaly');
assert.ok(italyRecord.relationships.archetypeIds.includes('historical-fascist'), 'the shared museum source must retain its historical-card backlink');
assert.equal(italyRecord.rightsStatus, 'permission-sensitive', 'source sharing must not weaken the existing rights boundary');
const italianLaws = fascistHistory.find(({ period }) => period.startsWith('1938:'));
const rsiDispossession = fascistHistory.find(({ period }) => period.startsWith('1943–1944:'));
assert.ok(italianLaws && rsiDispossession, 'Italian persecution must retain distinct pre-occupation and RSI phases');
assert.ok(italianLaws.citations.researchSourceIds.includes('cdecAntisemiticDecrees1938'), 'the 1938 legal claims need primary-document evidence');
assert.ok(rsiDispossession.citations.researchSourceIds.includes('anselmiPropertyReport2001'), 'the RSI account must disclose its later commission-report source');

const naziEntry = ENCYCLOPEDIA_ENTRIES['national-socialist'];
const naziProfile = ARCHETYPES.find(({ id }) => id === 'national-socialist').profile;
assert.equal(naziEntry.dimensionInterpretations.economic.score, naziProfile.economic, 'the Nazi article must preserve the canonical economic sign and magnitude');
assert.equal(naziEntry.dimensionInterpretations.economic.score, 5, 'economic orientation repair is not a new Nazi profile calibration');
for (const [sourceId, evidenceRole] of [
  ['reichConcordat1933German', 'primary'],
  ['barmenDeclaration1934German', 'primary'],
  ['piusXiMitBrennender1937', 'primary'],
  ['ushmmGermanChurches', 'secondary'],
]) {
  assert.ok(naziEntry.references.researchSourceIds.includes(sourceId), `${sourceId} must remain in the Nazi entry reference trail`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish primary documents from historical synthesis`);
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} is not cleared for republication`);
  assert.equal(record.directQuote, null, `${sourceId} must not silently become a quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:national-socialist'), `${sourceId} needs an encyclopedia backlink`);
}

const libertarianSocialistEntry = ENCYCLOPEDIA_ENTRIES['libertarian-socialist'];
for (const [sourceId, evidenceRole] of [
  ['proudhonFederative1863French', 'primary'],
  ['dejacqueLetter1857French', 'primary'],
  ['cagiaoProudhonFederalism2011', 'secondary'],
  ['msheDejacqueVolume2019', 'contextual'],
]) {
  assert.ok(libertarianSocialistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a libertarian-socialist reference trail`);
  assert.ok(JSON.stringify(libertarianSocialistEntry.sections).includes(sourceId), `${sourceId} needs an in-entry claim citation`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs exactly one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish primary argument, scholarship, and book metadata`);
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} remains summary-and-link only`);
  assert.equal(record.directQuote, null, `${sourceId} must not introduce an unreviewed quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:libertarian-socialist'), `${sourceId} needs an encyclopedia backlink`);
}

const indigenousEntry = ENCYCLOPEDIA_ENTRIES['indigenous-relational-governance'];
assert.equal(indigenousEntry.confidence, 'low', 'one local case must not establish confidence in a global Indigenous profile');
for (const [sourceId, evidenceRole] of [
  ['whakaputangaTexts1835', 'primary'],
  ['dpmcTreatyTextsKawharu', 'primary'],
  ['teRakiStageOne2014Release', 'primary'],
  ['keaneWhakaputanga2017', 'secondary'],
]) {
  assert.ok(indigenousEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an Indigenous-governance reference trail`);
  assert.ok(JSON.stringify(indigenousEntry.sections).includes(sourceId), `${sourceId} needs a claim-level citation`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs exactly one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish historical documents, institutional statements, and synthesis`);
  assert.equal(record.accessDate, '2026-09-16', `${sourceId} needs its actual consultation date`);
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} is not cleared for source republication`);
  assert.equal(record.directQuote, null, `${sourceId} must not introduce a quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:indigenous-relational-governance'), `${sourceId} needs an encyclopedia backlink`);
}
const teRakiFinding = indigenousEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('2014'));
assert.ok(teRakiFinding, 'the Tribunal finding needs a dated historical record');
assert.match(teRakiFinding.text, /Bay of Islands and Hokianga in February 1840/, 'the historical finding must retain its geographic and temporal boundary');
assert.match(teRakiFinding.text, /left aside how and when the Crown later acquired sovereignty/, 'the 2014 release must not become an unrestricted current-sovereignty determination');

const marketLibertarianEntry = ENCYCLOPEDIA_ENTRIES['libertarian-market'];
for (const [sourceId, evidenceRole] of [
  ['friedmanEducation1955', 'primary'],
  ['cowenPublicGoods', 'secondary'],
  ['euckenFreiburgHistory', 'secondary'],
  ['freiburgOrdoliberalDebates', 'secondary'],
]) {
  assert.ok(marketLibertarianEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a market-libertarian reference trail`);
  assert.ok(JSON.stringify(marketLibertarianEntry.sections).includes(sourceId), `${sourceId} needs a claim-level citation`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must reuse one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish policy argument from later synthesis`);
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} must retain the summary-and-link boundary`);
  assert.equal(record.directQuote, null, `${sourceId} must not introduce a quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:libertarian-market'), `${sourceId} needs an encyclopedia backlink`);
}

console.log(`Encyclopedia tests passed: ${Object.keys(ENCYCLOPEDIA_ENTRIES).length} entry with claim-level citation validation across ${DIMENSIONS.length} dimensions.`);
