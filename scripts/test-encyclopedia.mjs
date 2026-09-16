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

const nationalityEntry = ENCYCLOPEDIA_ENTRIES['ethnic-nationalist'];
for (const [sourceId, evidenceRole, publicationDate, confidence] of [
  ['reichNationality1913', 'primary', '1913-07-22', 'medium'],
  ['gosewinkelCitizenship2008', 'secondary', '2008', 'high'],
  ['alexopoulouRacism2018', 'secondary', '2018-09-14', 'high'],
]) {
  assert.ok(nationalityEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an ethnic-nationalism reference trail`);
  assert.ok(JSON.stringify(nationalityEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve exactly once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-16');
  assert.equal(record.review.confidence, confidence);
  assert.deepEqual(record.languages, ['German']);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:ethnic-nationalist']);
}
const nationalityStatute = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-reichNationality1913');
const citizenshipPaper = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-gosewinkelCitizenship2008');
const alexopoulouEssay = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-alexopoulouRacism2018');
assert.match(nationalityStatute.description, /31 July publication.*1 January 1914 commencement/, 'statute, publication and commencement dates must remain distinct');
assert.match(nationalityStatute.note, /facsimile text was not visually collated/);
assert.match(citizenshipPaper.note, /Printed pp\. 4 and 6–7 \(PDF pages 8 and 10–11\)/);
assert.match(alexopoulouEssay.description, /2001 and 2016 books, not the 2008 discussion paper/);
assert.match(alexopoulouEssay.license, /CC BY-NC-ND 3\.0 DE/);
const nationalityDescription = nationalityEntry.sections.find(({ id }) => id === 'description').blocks.find(({ text }) => text?.startsWith('The 1913 German nationality statute'));
assert.match(nationalityDescription.text, /gender and marital-status inequalities/);
assert.match(nationalityDescription.text, /does not establish equal access in practice/);
const nationalityBoundary = nationalityEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('Reading boundary: Alexopoulou'));
assert.match(nationalityBoundary.text, /not presented as a direct exchange/);
assert.match(nationalityBoundary.text, /All six scores remain unchanged/);
for (const { id } of DIMENSIONS) assert.equal(nationalityEntry.dimensionInterpretations[id].score, ARCHETYPES.find(({ id: profileId }) => profileId === 'ethnic-nationalist').profile[id]);
assert.ok(nationalityEntry.researchGaps.some((gap) => gap.startsWith('Collate the 1913 transcription')));
assert.ok(nationalityEntry.researchGaps.some((gap) => gap.startsWith('Read the full Gosewinkel 2008 paper')));

const ethiopiaEntry = ENCYCLOPEDIA_ENTRIES['militarist-imperialist'];
for (const [sourceId, evidenceRole, publicationDate, language, confidence] of [
  ['selassieLeagueAppeal1936', 'primary', '1936-06-30', 'English translation; Amharic original not collated', 'medium'],
  ['leagueCovenant1919', 'primary', '1919-06-28', 'English', 'high'],
  ['baerSanctionsSecurity1973', 'secondary', '1973', 'English', 'medium'],
  ['unLeagueAtWork', 'secondary', null, 'English', 'high'],
]) {
  assert.ok(ethiopiaEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an imperialism reference trail`);
  assert.ok(JSON.stringify(ethiopiaEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve to one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-16');
  assert.deepEqual(record.languages, [language]);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:militarist-imperialist']);
}
const selassieAppeal = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-selassieLeagueAppeal1936');
const baerSanctions = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-baerSanctionsSecurity1973');
assert.match(selassieAppeal.note, /Document 7 only/);
assert.match(selassieAppeal.description, /Translator and English edition are unidentified/);
assert.match(baerSanctions.note, /Full article and cited diplomatic files not consulted/);
assert.match(baerSanctions.description, /22 May 2009/, 'online release must not replace the print publication date');
assert.match(baerSanctions.license, /IO Foundation 1973/);
const ethiopiaDescription = ethiopiaEntry.sections.find(({ id }) => id === 'description').blocks;
assert.ok(ethiopiaDescription.some(({ text, citations }) => /Article 22/.test(text) && citations.researchSourceIds.includes('leagueCovenant1919')), 'collective security must not erase the mandate hierarchy');
const selassiePerson = ethiopiaEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries.find(({ name }) => name.startsWith('Haile Selassie'));
assert.match(selassiePerson.role, /not an advocate/);
assert.match(selassiePerson.caveat, /does not represent every Ethiopian community/);
const ethiopiaBoundary = ethiopiaEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('Consultation limits: the appeal'));
assert.match(ethiopiaBoundary.text, /scores remain unchanged/);
assert.match(ethiopiaBoundary.text, /no present-day country match/);
assert.ok(ethiopiaEntry.researchGaps.some((gap) => gap.startsWith('Collate the full 1936 appeal')));
assert.ok(ethiopiaEntry.researchGaps.some((gap) => gap.startsWith('Read Baer’s full 1973 article')));

const weimarEntry = ENCYCLOPEDIA_ENTRIES['liberal-constitutionalist'];
for (const [sourceId, evidenceRole, publicationDate] of [
  ['ghdiWeimarGerman', 'primary', '1919-08-11'],
  ['ghdiReichstagFireDecreeGerman', 'primary', '1933-02-28'],
  ['raithelFireDecree2010', 'secondary', '2010'],
  ['seefriedWeimarCrisis2016', 'secondary', '2016-09-30'],
]) {
  assert.ok(weimarEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a constitutionalist reference trail`);
  assert.ok(JSON.stringify(weimarEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once, including reused sources`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-16');
  assert.deepEqual(record.languages, ['German']);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:liberal-constitutionalist'));
  if (sourceId !== 'ghdiWeimarGerman') assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:liberal-constitutionalist']);
}
const weimarText = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-ghdiWeimarGerman');
const fireDecree = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-ghdiReichstagFireDecreeGerman');
const raithelDecree = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-raithelFireDecree2010');
const seefriedCrisis = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-seefriedWeimarCrisis2016');
assert.match(weimarText.note, /Articles 153, 159, and 165/, 'earlier consultation locators must be retained');
assert.match(weimarText.note, /excerpt omits Article 25/, 'excerpt boundaries must not disappear');
assert.ok(weimarText.relationships.profileEntries.includes('encyclopedia:democratic-socialist'), 'reusing the constitution must retain the earlier entry backlink');
assert.match(fireDecree.note, /facsimile returned 403/);
assert.match(raithelDecree.description, /different author and date/, 'the commentator must not become the primary decree author');
assert.match(seefriedCrisis.license, /CC BY-NC-ND 3\.0 DE/);
const weimarBoundary = weimarEntry.sections.find(({ id }) => id === 'description').blocks.find(({ text }) => text?.startsWith('The Weimar and 1933 documents'));
assert.match(weimarBoundary.text, /not a classification of Nazi dictatorship as liberal constitutionalism/);
const decreeTimeline = weimarEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('28 February 1933'));
assert.match(decreeTimeline.text, /not validation of its claimed defensive justification/);
assert.ok(weimarEntry.researchGaps.some((gap) => gap.startsWith('Collate the Weimar provisions')), 'the primary-source verification gap must remain visible');

const breadEntry = ENCYCLOPEDIA_ENTRIES['anarcho-communist'];
for (const [sourceId, evidenceRole, publicationDate, language] of [
  ['kropotkinBread1892French', 'primary', '1892', 'French'],
  ['kinnaMutualAid1995', 'secondary', '1995-08', 'English'],
]) {
  assert.ok(breadEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an anarcho-communist reference trail`);
  assert.ok(JSON.stringify(breadEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-16');
  assert.deepEqual(record.languages, [language]);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:anarcho-communist'], `${sourceId} must stay within this entry`);
}
const breadFrench = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-kropotkinBread1892French');
const kinnaMutualAid = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-kinnaMutualAid1995');
assert.match(breadFrench.description, /not independently collated with the scan/);
assert.match(breadFrench.note, /Separate edition witness from the existing English author reference/);
assert.equal(breadFrench.review.confidence, 'medium');
assert.match(kinnaMutualAid.description, /Print issue August 1995; online publication 20 February 2009/);
assert.match(kinnaMutualAid.note, /Printed pp\. 274 and 282–283 \(PDF pages 16 and 24–25\)/);
assert.equal(kinnaMutualAid.identifiers.doi, '10.1017/S0020859000113227');
const breadDescription = breadEntry.sections.find(({ id }) => id === 'description').blocks.find(({ text }) => text?.startsWith('In Les denrées'));
assert.match(breadDescription.text, /proposed rules, not measured outcomes/);
const breadCriticism = breadEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('Objections, sections'));
assert.match(breadCriticism.text, /affirms a right to live/, 'access conditions must not erase the countervailing commitment');
assert.match(breadCriticism.text, /editorial question/, 'the assessment must be distinguished from primary-source wording');
assert.ok(breadEntry.researchGaps.some((gap) => gap.startsWith('Collate the selected 1892 French transcription')), 'edition and implementation gaps must remain visible');

const molinariEntry = ENCYCLOPEDIA_ENTRIES['anarcho-capitalist'];
for (const [sourceId, evidenceRole, publicationDate, language] of [
  ['molinariSecurity1849French', 'primary', '1849-02', 'French'],
  ['hartParisSchool2019', 'secondary', '2019-04-25', 'English'],
  ['longMolinariLegacy2013', 'secondary', '2013-05-01', 'English'],
]) {
  assert.ok(molinariEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an anarcho-capitalist reference trail`);
  assert.ok(JSON.stringify(molinariEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-16');
  assert.deepEqual(record.languages, [language]);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:anarcho-capitalist'], `${sourceId} must stay within this entry`);
}
const molinariPrimary = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-molinariSecurity1849French');
const hartParisSchool = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-hartParisSchool2019');
const longMolinari = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-longMolinariLegacy2013');
assert.match(molinariPrimary.description, /Historical essay date differs from the consulted 2025 edition/);
assert.match(molinariPrimary.note, /Selected passages, not the whole edition/);
assert.match(hartParisSchool.note, /Printed p\. 309 \(PDF page 16\)/, 'print and PDF locators must remain distinct');
assert.match(longMolinari.description, /Other contributors retain separate authorship/, 'forum authors must not be conflated');
assert.equal(longMolinari.review.confidence, 'medium');
assert.match(longMolinari.license, /not a blanket commercial reuse licence/);
const molinariPerson = molinariEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries.find(({ name }) => name.startsWith('Gustave de Molinari'));
assert.match(molinariPerson.caveat, /Not a match across all six axes/);
assert.match(molinariPerson.caveat, /racial hierarchy/, 'historical exclusion must not be erased from an influence claim');
const molinariVariant = molinariEntry.sections.find(({ id }) => id === 'variants').blocks[0].rows.find(({ label }) => label === 'Competition among providers versus competition for contracts');
assert.match(molinariVariant.relation, /later primary works still require direct review/);
assert.ok(molinariEntry.researchGaps.some((gap) => gap.includes('Collate Molinari’s 1849 journal printing')), 'edition and intellectual-lineage research must remain open');

const communistNepEntry = ENCYCLOPEDIA_ENTRIES.communist;
for (const [sourceId, evidenceRole, publicationDate, language] of [
  ['leninTaxInKind1921', 'primary', '1921-05', 'English'],
  ['leninPartyUnityDraft1921', 'primary', '1921', 'English'],
  ['bukharinNewEconomicPolicy1921', 'primary', '1921', 'English'],
  ['schattenbergBolshevikVictory2014', 'secondary', '2014-08-05', 'German'],
]) {
  assert.ok(communistNepEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a communist-entry reference trail`);
  assert.ok(JSON.stringify(communistNepEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-16');
  assert.deepEqual(record.languages, [language]);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:communist'], `${sourceId} must stay within this entry`);
}
const nepTaxRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-leninTaxInKind1921');
const nepDraftRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-leninPartyUnityDraft1921');
const nepBukharinRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-bukharinNewEconomicPolicy1921');
assert.match(nepTaxRecord.description, /Completed 21 April 1921; first published May 1921/, 'composition and publication dates must stay distinct');
assert.match(nepTaxRecord.note, /Yuri Sdobnikov/, 'translation attribution must remain visible');
assert.match(nepDraftRecord.note, /draft, not a transcription of the adopted resolution/, 'draft status must remain explicit');
assert.match(nepBukharinRecord.note, /translator unidentified/, 'unknown translation provenance must not be invented');
assert.match(nepBukharinRecord.license, /host’s statement/, 'a host rights assertion must not become blanket clearance');
const nepTimeline = communistNepEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1921:'));
assert.ok(nepTimeline.citations.researchSourceIds.includes('leninPartyUnityDraft1921'));
assert.ok(nepTimeline.citations.researchSourceIds.includes('schattenbergBolshevikVictory2014'));
assert.match(nepTimeline.text, /not the final resolution/, 'draft and enacted institutional history need separate treatment');
const nepEvidence = communistNepEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ title }) => title === 'Policy arguments are not outcome measurements');
assert.match(nepEvidence.text, /not adopted here as neutral explanations/, 'polemical allegations must not become unqualified historical findings');
assert.match(nepEvidence.text, /No current-country classification or numerical coordinates are changed/);
assert.ok(communistNepEntry.researchGaps.some((gap) => gap.includes('independent regional evidence on NEP outcomes')), 'implementation research must remain open');

const antiColonialEntry = ENCYCLOPEDIA_ENTRIES['anti-colonial-liberation'];
const antiColonialProfile = ARCHETYPES.find(({ id }) => id === 'anti-colonial-liberation').profile;
for (const { id } of DIMENSIONS) {
  assert.equal(antiColonialEntry.dimensionInterpretations[id].score, antiColonialProfile[id], `anti-colonial-liberation.${id} must preserve its canonical coordinate`);
}
for (const [sourceId, evidenceRole, publicationDate] of [
  ['cabralPartyPrinciples1965', 'primary', '1969-09'],
  ['dalaquaDemocraticFreedom2020', 'secondary', '2020'],
]) {
  assert.ok(antiColonialEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an anti-colonial reference trail`);
  assert.ok(JSON.stringify(antiColonialEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-16');
  assert.deepEqual(record.languages, ['Portuguese']);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:anti-colonial-liberation'], `${sourceId} must stay within this entry`);
}
const cabralPartyPrinciples = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-cabralPartyPrinciples1965');
const dalaquaDemocraticFreedom = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-dalaquaDemocraticFreedom2020');
assert.match(cabralPartyPrinciples.note, /printed pp\. 29–35 \(PDF pages 43–49\)/, 'printed and PDF page numbers must remain distinguishable');
assert.match(cabralPartyPrinciples.description, /Edition dated September 1969; document dated November 1965/, 'document and edition dates must not be conflated');
assert.match(dalaquaDemocraticFreedom.description, /2020 journal issue; SciELO collection publication dated 14 May 2021/, 'journal issue and collection publication need separate dates');
assert.match(dalaquaDemocraticFreedom.note, /Not a complete review/, 'selected-section consultation must not imply a complete article or primary-edition review');
assert.match(dalaquaDemocraticFreedom.license, /creativecommons\.org\/licenses\/by\/4\.0/, 'the identified licence must not be replaced with an unknown-licence claim');
const antiColonialDescription = antiColonialEntry.sections.find(({ id }) => id === 'description').blocks.map(({ text }) => text).join(' ');
assert.match(antiColonialDescription, /implemented without reopening debate/, 'the centralized decision rule must remain visible alongside participatory ideals');
assert.match(antiColonialDescription, /not an independent finding/, 'philosophical interpretation must not certify institutional outcomes');
const antiColonialEvidenceNotes = antiColonialEntry.sections.find(({ id }) => id === 'criticisms').blocks.filter(({ type }) => type === 'evidence-note').map(({ text }) => text).join(' ');
assert.match(antiColonialEvidenceNotes, /Neither supports a current-country classification or new numerical coordinates/, 'a bounded historical reading must not silently recalibrate countries or the model');
assert.ok(antiColonialEntry.researchGaps.some((gap) => gap.includes('candidate selection, disciplinary practice')), 'independent institutional evidence must remain an explicit gap');

const authoritarianCollectivistEntry = ENCYCLOPEDIA_ENTRIES['authoritarian-collectivist'];
const authoritarianCollectivistProfile = ARCHETYPES.find(({ id }) => id === 'authoritarian-collectivist').profile;
for (const { id } of DIMENSIONS) {
  assert.equal(authoritarianCollectivistEntry.dimensionInterpretations[id].score, authoritarianCollectivistProfile[id], `authoritarian-collectivist.${id} must preserve its canonical coordinate`);
}
for (const [sourceId, evidenceRole, publicationDate] of [
  ['friedrichshainWorkers1953', 'primary', '1953-06-15'],
  ['sedNormsDeclaration1953', 'primary', '1953-06-17'],
  ['cieslaHertleWahlBerlin1953', 'secondary', '2013-05-17'],
  ['lemkeJuneUprising2003', 'secondary', '2003-06-02'],
]) {
  assert.ok(authoritarianCollectivistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an authoritarian-collectivist reference trail`);
  assert.ok(JSON.stringify(authoritarianCollectivistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-16');
  assert.deepEqual(record.languages, ['German']);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:authoritarian-collectivist'], `${sourceId} must stay within the selected entry`);
}
const friedrichshainResolution = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-friedrichshainWorkers1953');
const sedNormsDeclaration = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-sedNormsDeclaration1953');
const berlinUprisingHistory = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-cieslaHertleWahlBerlin1953');
assert.match(friedrichshainResolution.description, /Document date, not a verified first-publication date/, 'a primary dateline must not become a verified publication date');
assert.match(friedrichshainResolution.note, /NY 4090\/437, Bl\. 8/, 'the project transcription must preserve its archival locator');
assert.match(sedNormsDeclaration.description, /statement dated 16 June 1953/, 'statement and newspaper publication dates must remain distinct');
assert.deepEqual(sedNormsDeclaration.creators, ['Politbüro des Zentralkomitees der SED']);
assert.match(berlinUprisingHistory.description, /image caption gives 16 June/, 'the conflicting later caption must remain visible');
const authoritarianDescription = authoritarianCollectivistEntry.sections.find(({ id }) => id === 'description').blocks.map(({ text }) => text).join(' ');
assert.match(authoritarianDescription, /not independent proof/, 'a party declaration must not certify free workplace consent');
const authoritarianHistory = authoritarianCollectivistEntry.sections.find(({ id }) => id === 'history').timeline.map(({ text }) => text).join(' ');
assert.match(authoritarianHistory, /not a programme shared by every East German worker/, 'one resolution must not represent every worker');
const authoritarianCriticisms = authoritarianCollectivistEntry.sections.find(({ id }) => id === 'criticisms').blocks.map(({ text }) => text).join(' ');
assert.match(authoritarianCriticisms, /not this entry’s explanation/, 'official conspiracy allegations must not become editorial findings');
assert.match(authoritarianCriticisms, /foreign-policy preferences must remain separate/, 'an ally’s intervention must not determine the subject’s foreign-policy score');
assert.ok(authoritarianCollectivistEntry.researchGaps.some((gap) => gap.includes('pay records, union practices')), 'workplace implementation research must remain open');
assert.ok(authoritarianCollectivistEntry.researchGaps.some((gap) => gap.includes('beyond Berlin')), 'regional diversity must remain an explicit gap');

const anarchistCommunalistEntry = ENCYCLOPEDIA_ENTRIES['anarchist-communalist'];
const anarchistCommunalistProfile = ARCHETYPES.find(({ id }) => id === 'anarchist-communalist').profile;
for (const { id } of DIMENSIONS) {
  assert.equal(anarchistCommunalistEntry.dimensionInterpretations[id].score, anarchistCommunalistProfile[id], `anarchist-communalist.${id} must preserve its canonical coordinate`);
}
for (const [sourceId, evidenceRole, publicationDate, language] of [
  ['communeWomenAddress1871', 'primary', '1871-04-14', 'French'],
  ['rougerieWomenCommune1997', 'secondary', '1997', 'French'],
  ['carnavaletParisiennes2022', 'secondary', '2022', 'French'],
  ['muldoonCommuneFeminism2023', 'secondary', '2023', 'English'],
]) {
  assert.ok(anarchistCommunalistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an anarchist-communalist reference trail`);
  assert.ok(JSON.stringify(anarchistCommunalistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish primary statements from interpretation`);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-16');
  assert.deepEqual(record.languages, [language]);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:anarchist-communalist'], `${sourceId} must stay within this entry’s research pass`);
}
const communeAddress = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-communeWomenAddress1871');
const rougerieWomen = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-rougerieWomenCommune1997');
const carnavaletWomen = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-carnavaletParisiennes2022');
const communeFeminism = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-muldoonCommuneFeminism2023');
assert.match(communeAddress.description, /dated 13 April 1871/, 'address and publication dates must remain distinct');
assert.deepEqual(communeAddress.creators, ['Comité central des citoyennes de Paris'], 'the modern editor must not become the historical author');
assert.match(rougerieWomen.sourceType, /selected French reprint sections/, 'selected passages must not become a full-chapter review');
assert.match(carnavaletWomen.sourceType, /press dossier/, 'the press dossier must not become the exhibition catalogue');
assert.match(carnavaletWomen.description, /not individual authors of page 10/, 'curatorial credits must not be misattributed');
assert.match(communeFeminism.sourceType, /abstract and metadata only/, 'full-text access limits must remain visible');
assert.equal(communeFeminism.review.confidence, 'medium');
assert.match(communeFeminism.description, /31 January 2022/, 'online and issue dates must remain distinct');
const communeHistory = anarchistCommunalistEntry.sections.find(({ id }) => id === 'history').timeline.map(({ text }) => text).join(' ');
assert.match(communeHistory, /neither vote nor stand/, 'club participation must not imply electoral inclusion');
assert.match(communeHistory, /small amount implemented/, 'cooperative proposals must not become accomplished citywide reform');
const communeDescription = anarchistCommunalistEntry.sections.find(({ id }) => id === 'description').blocks.map(({ text }) => text).join(' ');
assert.match(communeDescription, /not proof that equal citizenship was secured/, 'demands must not become certified outcomes');
const communeCriticisms = anarchistCommunalistEntry.sections.find(({ id }) => id === 'criticisms').blocks.map(({ text }) => text).join(' ');
assert.match(communeCriticisms, /not a transparent record/, 'manipulated images must retain their evidence boundary');
assert.ok(anarchistCommunalistEntry.researchGaps.some((gap) => gap.includes('actual participation, remuneration')), 'implementation research must remain open');
assert.ok(anarchistCommunalistEntry.researchGaps.some((gap) => gap.includes('full Muldoon–Müller–Leipold article')), 'the full scholarly article must remain a research gap');

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
