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

const democraticSocialistEntry = ENCYCLOPEDIA_ENTRIES['democratic-socialist'];
const democraticSocialistProfile = ARCHETYPES.find(({ id }) => id === 'democratic-socialist').profile;
for (const { id } of DIMENSIONS) {
  assert.equal(democraticSocialistEntry.dimensionInterpretations[id].score, democraticSocialistProfile[id], `democratic-socialist.${id} must preserve its canonical coordinate`);
}
for (const [sourceId, evidenceRole, publicationDate] of [
  ['allendeCongress1971Spanish', 'primary', '1971-05-21'],
  ['chileCopperLaw17450', 'primary', '1971-07-16'],
  ['memoriaCopperNationalization', 'secondary', null],
  ['memoriaUnidadPopular', 'secondary', null],
  ['vergaraCopperModernization2004', 'secondary', '2004'],
]) {
  assert.ok(democraticSocialistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a democratic-socialist reference trail`);
  assert.ok(JSON.stringify(democraticSocialistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish primary evidence from interpretation`);
  assert.equal(record.publicationDate, publicationDate, `${sourceId} must preserve known dates without inventing missing ones`);
  assert.equal(record.accessDate, '2026-09-16');
  assert.deepEqual(record.languages, ['Spanish']);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null, `${sourceId} must not add an uncleared quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:democratic-socialist'), `${sourceId} needs an encyclopedia backlink`);
  if (sourceId.startsWith('memoria')) assert.match(record.license, /excluding digital objects/, 'a research-text licence must not cover every collection item');
}
const allendeSpeech = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-allendeCongress1971Spanish');
const copperLaw = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-chileCopperLaw17450');
const vergaraCopper = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-vergaraCopperModernization2004');
assert.match(allendeSpeech.description, /2001 edition/, 'speech and archive-edition dates must remain distinct');
assert.match(copperLaw.description, /15 July 1971/, 'sanction and publication dates must remain distinct');
assert.deepEqual(vergaraCopper.creators, ['Ángela Vergara Marshall']);
assert.match(vergaraCopper.sourceType, /selected Spanish sections/, 'selected sections must not become a complete-article review');
const democraticSocialistDescription = democraticSocialistEntry.sections.find(({ id }) => id === 'description').blocks.map(({ text }) => text).join(' ');
assert.match(democraticSocialistDescription, /under existing conditions/, 'labor rights must retain their statutory qualification');
assert.match(democraticSocialistDescription, /not evidence that workers controlled/, 'participation provisions must not become demonstrated control');
const democraticSocialistHistory = democraticSocialistEntry.sections.find(({ id }) => id === 'history').timeline.map(({ text }) => text).join(' ');
assert.match(democraticSocialistHistory, /not a finding that every action/, 'political commitments must not become certified outcomes');
assert.match(democraticSocialistHistory, /broader than support for his entire socialist programme/, 'one legislative vote must not classify every supporter');
assert.ok(democraticSocialistEntry.researchGaps.some((gap) => gap.includes('compensation decisions')), 'implementation research must remain open');
assert.ok(democraticSocialistEntry.researchGaps.some((gap) => gap.includes('domestic and foreign intervention')), 'the wider breakdown must remain an explicit research task');

const classicalLiberalEntry = ENCYCLOPEDIA_ENTRIES['classical-liberal'];
const classicalLiberalProfile = ARCHETYPES.find(({ id }) => id === 'classical-liberal').profile;
for (const { id } of DIMENSIONS) {
  assert.equal(classicalLiberalEntry.dimensionInterpretations[id].score, classicalLiberalProfile[id], `classical-liberal.${id} must preserve its canonical coordinate`);
}
for (const [sourceId, evidenceRole, publicationDate] of [
  ['tocquevilleAlgeria1841French', 'primary', '1841'],
  ['tocquevilleAfricaReport1847French', 'primary', '1847-05-28'],
  ['duongTocquevilleAlgeria2018', 'secondary', '2018-01-31'],
  ['pittsAlgerianMirror2009', 'secondary', '2009-08-01'],
]) {
  assert.ok(classicalLiberalEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a classical-liberal reference trail`);
  assert.ok(JSON.stringify(classicalLiberalEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish primary evidence from interpretation`);
  assert.equal(record.publicationDate, publicationDate, `${sourceId} must preserve the documented date and its qualification`);
  assert.equal(record.accessDate, '2026-09-16');
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} must retain its rights boundary`);
  assert.equal(record.directQuote, null, `${sourceId} must not add an uncleared quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:classical-liberal'), `${sourceId} needs an encyclopedia backlink`);
  if (evidenceRole === 'secondary') {
    assert.match(record.sourceType, /abstract only/, `${sourceId} must not imply a full-article review`);
    assert.equal(record.review.confidence, 'medium', `${sourceId} must retain its limited review confidence`);
  }
}
const tocquevilleEssay = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-tocquevilleAlgeria1841French');
assert.match(tocquevilleEssay.description, /not a verified first-publication date/);
assert.match(tocquevilleEssay.description, /12 March 2002/, 'digital edition and text dates must stay distinct');
assert.match(tocquevilleEssay.publisher, /Jean-Marie Tremblay/, 'digital edition credit must survive bibliography generation');
const classicalLiberalDescription = classicalLiberalEntry.sections.find(({ id }) => id === 'description').blocks.map(({ text }) => text).join(' ');
assert.match(classicalLiberalDescription, /not a demand for equal citizenship or withdrawal/, 'criticism of abuses must not imply anti-imperial equality');
assert.match(classicalLiberalDescription, /not an independent audit/, 'reported conditions must retain their evidence boundary');
const classicalLiberalCriticisms = classicalLiberalEntry.sections.find(({ id }) => id === 'criticisms').blocks.map(({ text }) => text).join(' ');
assert.match(classicalLiberalCriticisms, /Duong’s stated interpretation/);
assert.match(classicalLiberalCriticisms, /neither her complete article nor Khodja’s book has been reviewed here/, 'Khodja’s primary work must not acquire a false review status');
assert.ok(classicalLiberalEntry.researchGaps.some((gap) => gap.includes('landing-page description conflicts')), 'edition provenance remains an open task');
assert.ok(classicalLiberalEntry.researchGaps.some((gap) => gap.includes('French- and Arabic-language scholarship')), 'full-text and regional perspectives remain an open task');

const nationalConservativeEntry = ENCYCLOPEDIA_ENTRIES['national-conservative'];
const nationalConservativeProfile = ARCHETYPES.find(({ id }) => id === 'national-conservative').profile;
for (const { id } of DIMENSIONS) {
  assert.equal(nationalConservativeEntry.dimensionInterpretations[id].score, nationalConservativeProfile[id], `national-conservative.${id} must preserve its canonical coordinate`);
}
for (const [sourceId, evidenceRole, publicationDate] of [
  ['wilhelmSocialProclamation1881', 'primary', '1881-11-17'],
  ['ghdiAntiSocialistLaw1878', 'primary', '1878-10-21'],
  ['ritterSocialInsurance1983', 'secondary', '1983-08-27'],
  ['ziemannIndustrialSociety2016', 'secondary', '2016-04-13'],
]) {
  assert.ok(nationalConservativeEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a national-conservative reference trail`);
  assert.ok(JSON.stringify(nationalConservativeEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish primary evidence from interpretation`);
  assert.equal(record.publicationDate, publicationDate, `${sourceId} must distinguish document and edition dates`);
  assert.equal(record.accessDate, '2026-09-16');
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} must retain its rights boundary`);
  assert.equal(record.directQuote, null, `${sourceId} must not add an uncleared quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:national-conservative'), `${sourceId} needs an encyclopedia backlink`);
}
const wilhelmProclamation = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-wilhelmSocialProclamation1881');
const antiSocialistLaw = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-ghdiAntiSocialistLaw1878');
const ritterInsurance = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-ritterSocialInsurance1983');
const ziemannInsurance = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-ziemannIndustrialSociety2016');
assert.match(wilhelmProclamation.description, /Erwin Fink/, 'translation credit must survive bibliography generation');
assert.match(wilhelmProclamation.sourceType, /excerpt/, 'the proclamation excerpt must not become a complete proceedings review');
assert.match(antiSocialistLaw.description, /Vernon L. Lidtke/, 'the law translation needs source-edition credit');
assert.match(antiSocialistLaw.license, /not a reuse grant/, 'GHDI permission must not become permission for this project');
assert.match(ritterInsurance.sourceType, /selected German article sections/);
assert.match(ziemannInsurance.sourceType, /selected German sidebar/);
assert.deepEqual(ritterInsurance.creators, ['Gerhard A. Ritter']);
assert.deepEqual(ziemannInsurance.creators, ['Benjamin Ziemann']);
const nationalConservativeDescription = nationalConservativeEntry.sections.find(({ id }) => id === 'description').blocks.map(({ text }) => text).join(' ');
assert.match(nationalConservativeDescription, /not proof of workers’ loyalty/, 'announced intentions must not become measured outcomes');
assert.match(nationalConservativeDescription, /GHDI’s editorial introduction/, 'modern commentary must not become a statutory provision');
assert.match(nationalConservativeDescription, /surviving elections did not make these restrictions compatible with equal political liberty/, 'electoral channels must not erase repression');
const nationalConservativeCriticisms = nationalConservativeEntry.sections.find(({ id }) => id === 'criticisms').blocks.map(({ text }) => text).join(' ');
assert.match(nationalConservativeCriticisms, /contrary to Bismarck’s aims/, 'institutional effects must remain distinct from government intentions');
assert.match(nationalConservativeCriticisms, /nor convert it into evidence of universal inclusion/, 'benefit provision must not imply universal coverage');
const bismarckExample = nationalConservativeEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries.find(({ name }) => name === 'Otto von Bismarck');
assert.match(bismarckExample.caveat, /not an exact six-axis match/);
assert.ok(nationalConservativeEntry.researchGaps.some((gap) => gap.includes('each insurance branch')), 'statutory and implementation follow-up must stay open');
assert.ok(nationalConservativeEntry.researchGaps.some((gap) => gap.includes('Poland example points to a Hungary report')), 'unrepaired card evidence must remain flagged');

const religiousTraditionalistEntry = ENCYCLOPEDIA_ENTRIES['religious-traditionalist'];
const religiousTraditionalistProfile = ARCHETYPES.find(({ id }) => id === 'religious-traditionalist').profile;
for (const { id } of DIMENSIONS) {
  assert.equal(religiousTraditionalistEntry.dimensionInterpretations[id].score, religiousTraditionalistProfile[id], `religious-traditionalist.${id} must preserve its canonical coordinate`);
}
for (const [sourceId, evidenceRole] of [
  ['barmenDeclaration1934German', 'primary'],
  ['gailusChurchStateNazism2018', 'secondary'],
  ['silomonProtestantResistance2009', 'secondary'],
  ['ushmmGermanChurches', 'secondary'],
]) {
  assert.ok(religiousTraditionalistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a religious-traditionalist reference trail`);
  assert.ok(JSON.stringify(religiousTraditionalistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once, including reused sources`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish declaration and historical interpretation`);
  assert.equal(record.accessDate, '2026-09-16', `${sourceId} needs its consultation date`);
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} must retain its rights boundary`);
  assert.equal(record.directQuote, null, `${sourceId} must not add an uncleared quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:religious-traditionalist'), `${sourceId} needs an encyclopedia backlink`);
  if (['barmenDeclaration1934German', 'ushmmGermanChurches'].includes(sourceId)) {
    assert.ok(record.relationships.profileEntries.includes('encyclopedia:national-socialist'), `${sourceId} must preserve the existing cross-entry relationship`);
  }
}
const gailusChurchState = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-gailusChurchStateNazism2018');
const silomonResistance = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-silomonProtestantResistance2009');
assert.equal(gailusChurchState.publicationDate, '2018-11-01');
assert.deepEqual(gailusChurchState.creators, ['Manfred Gailus']);
assert.deepEqual(gailusChurchState.languages, ['German']);
assert.equal(silomonResistance.publicationDate, '2009-03-21');
assert.deepEqual(silomonResistance.creators, ['Anke Silomon']);
assert.match(silomonResistance.sourceType, /selected German article sections/, 'a bounded reading must not become a review of the entire article or its source books');
const religiousTraditionalistIntroduction = religiousTraditionalistEntry.sections.find(({ id }) => id === 'introduction').blocks.map(({ text }) => text).join(' ');
assert.match(religiousTraditionalistIntroduction, /not verified translations/, 'translation limits must stay visible');
const religiousTraditionalistDescription = religiousTraditionalistEntry.sections.find(({ id }) => id === 'description').blocks.map(({ text }) => text).join(' ');
assert.match(religiousTraditionalistDescription, /rejects a church taking on state functions/, 'Barmen must limit both institutions');
assert.match(religiousTraditionalistDescription, /not a secular constitutional blueprint/, 'theological limits must not become secularism');
assert.match(religiousTraditionalistDescription, /not a movement to restore democracy/, 'church opposition must not become comprehensive political resistance');
assert.match(religiousTraditionalistDescription, /this site’s analytical safeguard/, 'editorial inference must remain distinct from source findings');
const religiousTraditionalistExamples = religiousTraditionalistEntry.sections.find(({ id }) => id === 'examples').blocks;
const kreyssigCase = religiousTraditionalistExamples.find(({ type }) => type === 'people').entries.find(({ name }) => name === 'Lothar Kreyssig');
assert.ok(kreyssigCase.citations.researchSourceIds.includes('silomonProtestantResistance2009'));
assert.match(kreyssigCase.caveat, /not a six-axis classification/, 'an individual example must not imply a complete profile match');
const barmenCase = religiousTraditionalistExamples.find(({ type }) => type === 'examples').entries.find(({ name }) => name === 'Barmen Confessing Synod');
assert.match(barmenCase.match, /not a country-wide ideology/, 'the synod must not become a country match');
const religiousTraditionalistCriticism = religiousTraditionalistEntry.sections.find(({ id }) => id === 'criticisms').blocks.map(({ text }) => text).join(' ');
assert.match(religiousTraditionalistCriticism, /must not erase complicity/, 'church autonomy must not erase persecution or institutional failure');
assert.ok(religiousTraditionalistEntry.researchGaps.some((gap) => gap.includes('Collate the EKD Barmen transcription')), 'primary-edition follow-up must remain open');
assert.ok(religiousTraditionalistEntry.researchGaps.some((gap) => gap.includes('further-reading leads, not independently reviewed books')), 'unread scholarship must not be promoted to reviewed evidence');

const progressiveEntry = ENCYCLOPEDIA_ENTRIES['progressive-liberal'];
const progressiveProfile = ARCHETYPES.find(({ id }) => id === 'progressive-liberal').profile;
for (const { id } of DIMENSIONS) {
  assert.equal(progressiveEntry.dimensionInterpretations[id].score, progressiveProfile[id], `progressive-liberal.${id} must preserve its canonical coordinate`);
}
for (const [sourceId, evidenceRole] of [
  ['ssaOldAgeAssistance1935', 'primary'],
  ['ssaOldAgeBenefits1935', 'primary'],
  ['fdrSocialSecuritySigning1935', 'primary'],
  ['dewittCoverageExclusions2010', 'secondary'],
  ['pooleSegregatedOrigins2006', 'secondary'],
]) {
  assert.ok(progressiveEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a progressive-liberal reference trail`);
  assert.ok(JSON.stringify(progressiveEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish primary evidence and interpretation`);
  assert.equal(record.accessDate, '2026-09-16', `${sourceId} needs its consultation date`);
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} must retain its publication boundary`);
  assert.equal(record.directQuote, null, `${sourceId} must not add an uncleared quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:progressive-liberal'), `${sourceId} needs an encyclopedia backlink`);
}
const assistance1935 = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-ssaOldAgeAssistance1935');
const benefits1935 = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-ssaOldAgeBenefits1935');
const rooseveltStatement = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-fdrSocialSecuritySigning1935');
const dewittCoverage = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-dewittCoverageExclusions2010');
const pooleDescription = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-pooleSegregatedOrigins2006');
assert.equal(assistance1935.publicationDate, '1935-08-14');
assert.equal(benefits1935.publicationDate, '1935-08-14');
assert.notEqual(assistance1935.canonicalUrl, benefits1935.canonicalUrl, 'the two distinct statutory titles need specific source links');
assert.match(rooseveltStatement.sourceType, /selected excerpt/, 'a displayed excerpt must not become a complete-speech review');
assert.equal(dewittCoverage.publicationDate, '2010-11', 'article and original legislation dates must remain distinct');
assert.match(dewittCoverage.description, /not a consensus finding/, 'the administrative explanation must remain attributed');
assert.match(pooleDescription.sourceType, /publisher-description-only/, 'a publisher description must not become full-book review');
assert.equal(pooleDescription.publicationDate, '2006-05-29');
const progressiveDescription = progressiveEntry.sections.find(({ id }) => id === 'description').blocks.map(({ text }) => text).join(' ');
assert.match(progressiveDescription, /Title II was a different federal/, 'assistance and federal benefits must not become one uniform programme');
assert.match(progressiveDescription, /not a statutory rule declaring every Black person ineligible/, 'occupational exclusions must not become an explicit universal racial bar');
assert.match(progressiveDescription, /does not establish equal effects/, 'race-neutral statutory wording must not establish equal outcomes');
assert.match(progressiveDescription, /original provisions, not current eligibility rules/, 'the historical statute must not become current benefits guidance');
const progressiveCriticism = progressiveEntry.sections.find(({ id }) => id === 'criticisms').blocks.map(({ text }) => text).join(' ');
assert.match(progressiveCriticism, /1930 occupational data, not observed benefit payments/, 'occupational exposure must not be reported as observed outcomes');
assert.match(progressiveCriticism, /Only that publisher description, not the full book/, 'limited access must remain visible in the prose');
const originalActExample = progressiveEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'examples').entries.find(({ name }) => name === 'United States Social Security Act of 1935');
assert.ok(originalActExample.citations.researchSourceIds.includes('ssaOldAgeBenefits1935'), 'the narrowed historical example needs the specific law');
assert.ok(progressiveEntry.researchGaps.some((gap) => gap.includes('Read Poole’s full study')), 'historiographical follow-up must remain open');
assert.ok(progressiveEntry.researchGaps.some((gap) => gap.includes('Audit the separate reference card')), 'the unchanged card’s broad source links need an explicit follow-up');

const conservativeEntry = ENCYCLOPEDIA_ENTRIES.conservative;
const conservativeProfile = ARCHETYPES.find(({ id }) => id === 'conservative').profile;
for (const { id } of DIMENSIONS) {
  assert.equal(conservativeEntry.dimensionInterpretations[id].score, conservativeProfile[id], `conservative.${id} must preserve its canonical coordinate`);
}
for (const [sourceId, evidenceRole] of [
  ['guizotDemocracyFrance1849', 'primary'],
  ['rosanvallonDoctrinaires1993', 'secondary'],
  ['englertGuizotCapacity2024', 'secondary'],
  ['assembleeFebruary1848', 'secondary'],
]) {
  assert.ok(conservativeEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a conservatism reference trail`);
  assert.ok(JSON.stringify(conservativeEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish historical argument from interpretation`);
  assert.equal(record.accessDate, '2026-09-16', `${sourceId} needs its consultation date`);
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} must retain its rights boundary`);
  assert.equal(record.directQuote, null, `${sourceId} must not add an uncleared quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:conservative'), `${sourceId} needs an encyclopedia backlink`);
}
const guizotPrimary = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-guizotDemocracyFrance1849');
const rosanvallonTranscript = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-rosanvallonDoctrinaires1993');
const englertAbstract = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-englertGuizotCapacity2024');
const februaryHistory = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-assembleeFebruary1848');
assert.equal(guizotPrimary.publicationDate, '1849', 'the original edition and ebook release dates must remain distinct');
assert.deepEqual(guizotPrimary.languages, ['English']);
assert.match(guizotPrimary.description, /translator is not identified/, 'unknown translation attribution must stay explicit');
assert.equal(rosanvallonTranscript.publicationDate, null, 'the conference date must not silently become the uncertain print date');
assert.deepEqual(rosanvallonTranscript.languages, ['French']);
assert.match(rosanvallonTranscript.description, /Uncorrected intervention/, 'a conference transcript must not become a revised journal article');
assert.equal(englertAbstract.publicationDate, '2024-03-21');
assert.match(englertAbstract.sourceType, /abstract only/, 'abstract access must not imply full-chapter review');
assert.equal(februaryHistory.publicationDate, null, 'the historical event date must not become the webpage date');
const conservativeDescription = conservativeEntry.sections.find(({ id }) => id === 'description').blocks.map(({ text }) => text).join(' ');
assert.match(conservativeDescription, /not by itself a commitment to equal participation/, 'constitutional checks must not imply an equal franchise');
assert.match(conservativeDescription, /based only on the abstract/, 'the limited consultation must remain visible in the prose');
assert.match(conservativeDescription, /does not accept his condemnation/, 'primary polemic must not become the project’s neutral classification');
const conservativeCriticism = conservativeEntry.sections.find(({ id }) => id === 'criticisms').blocks.map(({ text }) => text).join(' ');
assert.match(conservativeCriticism, /not a consensus verdict/, 'a disputed scholarly interpretation must stay attributed');
const februaryCrisis = conservativeEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1848:'));
assert.deepEqual(februaryCrisis.citations.researchSourceIds, ['assembleeFebruary1848'], 'historical sequence must cite institutional history, not only Guizot’s retrospective polemic');
assert.ok(conservativeEntry.researchGaps.some((gap) => gap.includes('Collate the 1849 English Guizot edition')), 'French-original and translation review must remain open');
assert.ok(conservativeEntry.researchGaps.some((gap) => gap.includes('Review the full Englert chapter')), 'abstract-only scholarship needs an explicit follow-up gap');

const theocraticEntry = ENCYCLOPEDIA_ENTRIES.theocratic;
const theocraticProfile = ARCHETYPES.find(({ id }) => id === 'theocratic').profile;
for (const { id } of DIMENSIONS) {
  assert.equal(theocraticEntry.dimensionInterpretations[id].score, theocraticProfile[id], `theocratic.${id} must preserve its canonical coordinate`);
}
for (const [sourceId, evidenceRole] of [
  ['iranCouncilConstitution1989', 'primary'],
  ['constituteIran1989', 'primary'],
  ['buchtaIranInstitutions2020', 'secondary'],
]) {
  assert.ok(theocraticEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a theocracy reference trail`);
  assert.ok(JSON.stringify(theocraticEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish constitutional evidence from interpretation`);
  assert.equal(record.accessDate, '2026-09-16', `${sourceId} needs its consultation date`);
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} must preserve its publication boundary`);
  assert.equal(record.directQuote, null, `${sourceId} must not add an uncleared quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:theocratic'), `${sourceId} needs an encyclopedia backlink`);
}
const iranCouncilText = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-iranCouncilConstitution1989');
const iranRepositoryText = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-constituteIran1989');
const buchtaIran = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-buchtaIranInstitutions2020');
assert.equal(iranCouncilText.publicationDate, '1989', 'constitutional revision and webpage publication dates must remain distinct');
assert.match(iranCouncilText.description, /Javad Arabshirazi and Hossein Beheshti Shakib/, 'the named translation needs attribution');
assert.match(iranRepositoryText.description, /article 110\(7\) differs/, 'the unresolved translation discrepancy must remain visible');
assert.equal(iranRepositoryText.canonicalUrl, 'https://www.constituteproject.org/constitution/Iran_1989', 'metadata correction must preserve the established source URL');
assert.equal(buchtaIran.publicationDate, '2020-05-15', 'the institutional assessment must be dated');
assert.deepEqual(buchtaIran.languages, ['German']);
const theocraticDescription = theocraticEntry.sections.find(({ id }) => id === 'description').blocks.map(({ text }) => text).join(' ');
assert.match(theocraticDescription, /six religious jurists selected by the Leader and six Muslim legal jurists chosen by parliament/, 'Council composition must not become twelve directly appointed clerics');
assert.match(theocraticDescription, /Assembly of Experts is a different institution/, 'the two councils must not be merged');
assert.match(theocraticDescription, /Formal removal powers do not prove effective accountability/, 'constitutional design must stay separate from effectiveness');
const theocraticCriticisms = theocraticEntry.sections.find(({ id }) => id === 'criticisms').blocks.map(({ text }) => text).join(' ');
assert.match(theocraticCriticisms, /article 110\(9\) expressly requires confirmation of presidential candidates/, 'specific candidate-qualification text must not be attributed to article 99 alone');
assert.match(theocraticCriticisms, /not be mistaken for the wording of article 99 itself/, 'dated scholarly interpretation must stay distinct from primary wording');

const greenCommonsEntry = ENCYCLOPEDIA_ENTRIES['green-commons'];
const greenCommonsProfile = ARCHETYPES.find(({ id }) => id === 'green-commons').profile;
for (const { id } of DIMENSIONS) {
  assert.equal(greenCommonsEntry.dimensionInterpretations[id].score, greenCommonsProfile[id], `green-commons.${id} must preserve the canonical coordinate`);
}
for (const [sourceId, evidenceRole] of [
  ['ostromPolycentricAER2010', 'primary'],
  ['coxCommonsDesign2010', 'secondary'],
]) {
  assert.ok(greenCommonsEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a green-commons reference trail`);
  assert.ok(JSON.stringify(greenCommonsEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish the author's framework from its later review`);
  assert.equal(record.accessDate, '2026-09-16', `${sourceId} needs its actual consultation date`);
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} must remain summary/link-only`);
  assert.equal(record.directQuote, null, `${sourceId} must not introduce a quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:green-commons'), `${sourceId} needs an encyclopedia backlink`);
}
const ostromPublished = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-ostromPolycentricAER2010');
assert.equal(ostromPublished.publicationDate, '2010-06', 'the published revision must not inherit the 2009 lecture date');
const commonsDescription = greenCommonsEntry.sections.find(({ id }) => id === 'description').blocks.map(({ text }) => text).join(' ');
assert.match(commonsDescription, /resource attributes from ownership arrangements/, 'resource type must not imply a single property regime');
assert.match(commonsDescription, /not unrestricted access/, 'governed commons must remain distinct from open access');
const commonsReview = greenCommonsEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('2010:'));
assert.match(commonsReview.text, /91 studies and coded 77 cases/, 'published study and case counts must remain distinct');
assert.deepEqual(commonsReview.citations.researchSourceIds, ['coxCommonsDesign2010'], 'the published review, not an earlier report, supports these counts');
const commonsCriticisms = greenCommonsEntry.sections.find(({ id }) => id === 'criticisms').blocks.map(({ text }) => text).join(' ');
assert.match(commonsCriticisms, /not 77 independent communities/, 'the case unit must not be converted into a community count');
assert.match(commonsCriticisms, /Missing or ambiguous evidence was not coded as absence/, 'missing observations must not become negative evidence');
assert.match(commonsCriticisms, /probabilistically, not as a checklist guaranteeing success/, 'the methodological safeguard must remain explicit');

const socialDemocraticEntry = ENCYCLOPEDIA_ENTRIES['social-democratic'];
const socialDemocraticProfile = ARCHETYPES.find(({ id }) => id === 'social-democratic').profile;
for (const { id } of DIMENSIONS) {
  assert.equal(socialDemocraticEntry.dimensionInterpretations[id].score, socialDemocraticProfile[id], `social-democratic.${id} must retain its canonical coordinate`);
}
for (const [sourceId, evidenceRole] of [
  ['ghdiGodesberg', 'primary'],
  ['ghdiGodesbergGerman', 'primary'],
  ['lompeGodesberg1979', 'secondary'],
  ['bpbSpdProgrammatics', 'secondary'],
]) {
  assert.ok(socialDemocraticEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a social-democratic reference trail`);
  assert.ok(JSON.stringify(socialDemocraticEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish the programme from interpretation`);
  assert.equal(record.accessDate, '2026-09-16', `${sourceId} needs its consultation date`);
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} must retain its publication boundary`);
  assert.equal(record.directQuote, null, `${sourceId} must not add an unreviewed quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:social-democratic'), `${sourceId} needs an encyclopedia backlink`);
}
const godesbergEnglish = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-ghdiGodesberg');
const godesbergGerman = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-ghdiGodesbergGerman');
assert.deepEqual(godesbergEnglish.languages, ['English'], 'the existing English excerpt must not be labelled German');
assert.deepEqual(godesbergGerman.languages, ['German'], 'the German edition needs separate provenance');
assert.ok(godesbergEnglish.relationships.profileEntries.includes('encyclopedia:democratic-socialist'), 'metadata repair must preserve the existing neighboring-entry backlink');
const socialDemocraticHistory = socialDemocraticEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(socialDemocraticHistory.find(({ period }) => period.startsWith('1960:'))?.citations.researchSourceIds.includes('bpbSpdProgrammatics'), 'the later foreign-policy clarification must disclose its secondary source');
assert.ok(socialDemocraticEntry.researchGaps.some((gap) => gap.includes('complete programme')), 'excerpt limits must remain visible');

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
