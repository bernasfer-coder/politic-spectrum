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
for (const archetype of ARCHETYPES) {
  const entry = ENCYCLOPEDIA_ENTRIES[archetype.id];
  assert.ok(entry, `${archetype.id} needs a matching encyclopedia entry`);
  assert.equal(entry.title, archetype.name, `${archetype.id} card and encyclopedia title must stay aligned`);
  for (const dimension of DIMENSIONS) {
    assert.equal(entry.dimensionInterpretations[dimension.id].score, archetype.profile[dimension.id], `${archetype.id}.${dimension.id} must stay aligned between card and encyclopedia`);
  }
}
assert.equal(ENCYCLOPEDIA_ENTRIES.communist.dimensionInterpretations.religion.score, 55, 'the existing secular communist coordinate must remain positive');
assert.equal(ENCYCLOPEDIA_ENTRIES['anarcho-capitalist'].dimensionInterpretations.economic.score, -96, 'the existing strongly market-oriented coordinate must remain negative');
assert.equal(ENCYCLOPEDIA_ENTRIES['anarcho-communist'].dimensionInterpretations.religion.score, 45, 'the existing secular anarcho-communist coordinate must remain positive');
assert.equal(ENCYCLOPEDIA_ENTRIES['liberal-constitutionalist'].dimensionInterpretations.economic.score, -30, 'the existing market-oriented liberal constitutional coordinate must remain negative');
assert.equal(ENCYCLOPEDIA_ENTRIES['liberal-constitutionalist'].dimensionInterpretations.religion.score, 55, 'the existing secular liberal constitutional coordinate must remain positive');
assert.equal(ENCYCLOPEDIA_ENTRIES['militarist-imperialist'].dimensionInterpretations.economic.score, -12, 'the compound imperial profile must preserve its existing canonical economic coordinate');

const authoritarianGdrEntry = ENCYCLOPEDIA_ENTRIES['authoritarian-collectivist'];
for (const [sourceId, role, date, language] of [
  ['ghdiGdrConstitution1968', 'primary', '1968-04-06', 'German'],
  ['klessmannGdrState1950s2002', 'secondary', '2002-12-24', 'German'],
  ['rossGdrGrassroots1998', 'secondary', '1998', 'English'],
]) {
  assert.ok(authoritarianGdrEntry.references.researchSourceIds.includes(sourceId));
  assert.ok(JSON.stringify(authoritarianGdrEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, role);
  assert.equal(record.publicationDate, date);
  assert.deepEqual(record.languages, [language]);
  assert.equal(record.accessDate, '2026-09-16');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:authoritarian-collectivist']);
}
const gdrConstitutionRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-ghdiGdrConstitution1968');
assert.match(gdrConstitutionRecord.note, /two-page English translation.*full German constitution/);
assert.match(gdrConstitutionRecord.description, /official constitutional self-description/);
const klessmannRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-klessmannGdrState1950s2002');
assert.match(klessmannRecord.description, /24 December 2002/);
assert.match(klessmannRecord.note, /Complete available German institutional article/);
const rossRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-rossGdrGrassroots1998');
assert.match(rossRecord.sourceType, /doctoral thesis/);
assert.match(rossRecord.description, /not the full 10 MB thesis/);
const authoritarianGdrDescription = authoritarianGdrEntry.sections.find(({ id }) => id === 'description').blocks;
assert.ok(authoritarianGdrDescription.some(({ text }) => text?.includes('constitutional self-description') && text.includes('party-state')));
const authoritarianGdrHistory = authoritarianGdrEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(authoritarianGdrHistory.some(({ period, text }) => period.startsWith('1949–1968: East German') && text.includes('local adaptation')));
const authoritarianGdrVariant = authoritarianGdrEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('East German socialist state'));
assert.ok(authoritarianGdrVariant);
const gdrExample = authoritarianGdrEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name === 'German Democratic Republic: socialist state-building');
assert.match(gdrExample.caveat, /not an exact six-axis country score/);
const authoritarianGdrCriticisms = authoritarianGdrEntry.sections.find(({ id }) => id === 'criticisms').blocks;
assert.ok(authoritarianGdrCriticisms.some(({ text }) => text?.includes('formal party-state model as socially uniform') && text.includes('Local adaptation does not cancel coercion')));
assert.ok(authoritarianGdrEntry.researchGaps.some((gap) => gap.startsWith('Read the full German text of the 1968 Constitution')));
assert.ok(authoritarianGdrEntry.researchGaps.some((gap) => gap.startsWith('Read Ross’s complete thesis')));
assert.deepEqual(Object.fromEntries(Object.entries(authoritarianGdrEntry.dimensionInterpretations).map(([id, { score }]) => [id, score])), { economic: 88, social: 18, authority: 86, identity: 38, foreign: -24, religion: 60 });

const historicalFascistEntry = ENCYCLOPEDIA_ENTRIES['historical-fascist'];
for (const [sourceId, role, date] of [
  ['pasettiColonialismCorporative2016', 'secondary', '2017-04-23'],
  ['treccaniRacismImperialism2022', 'secondary', null],
  ['laricciaLateranPacts2016', 'secondary', '2016'],
]) {
  assert.ok(historicalFascistEntry.references.researchSourceIds.includes(sourceId));
  assert.ok(JSON.stringify(historicalFascistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, role);
  assert.equal(record.publicationDate, date);
  assert.deepEqual(record.languages, ['Italian']);
  assert.equal(record.accessDate, '2026-09-16');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, sourceId === 'laricciaLateranPacts2016'
    ? ['encyclopedia:historical-fascist', 'encyclopedia:theocratic']
    : ['encyclopedia:historical-fascist']);
}
const pasettiRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-pasettiColonialismCorporative2016');
assert.equal(pasettiRecord.identifiers.doi, '10.12977/stor655');
assert.match(pasettiRecord.description, /23 April 2017/);
assert.match(pasettiRecord.note, /selected sections read/);
const fascistRacismRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-treccaniRacismImperialism2022');
assert.match(fascistRacismRecord.description, /No publication date is displayed/);
assert.match(fascistRacismRecord.note, /No publication date is displayed/);
const laricciaRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-laricciaLateranPacts2016');
assert.match(laricciaRecord.description, /Sergio Lariccia.*2016/);
assert.match(laricciaRecord.note, /Full treaty facsimiles/);
const fascistDescription = historicalFascistEntry.sections.find(({ id }) => id === 'description').blocks;
assert.ok(fascistDescription.some(({ text }) => text?.includes('corporatist aspiration') && text.includes('colonial practice')));
assert.ok(fascistDescription.some(({ text }) => text?.includes('colonial racial policy') && text.includes('1938')));
const historicalFascistHistory = historicalFascistEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(historicalFascistHistory.some(({ period, text }) => period.startsWith('1930s: corporatist empire') && text.includes('fragmented')));
const fascistVariant = historicalFascistEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Corporatist imperialism'));
assert.ok(fascistVariant);
const imperialExample = historicalFascistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Italian East Africa and Libya'));
assert.match(imperialExample.caveat, /uneven and limited/);
const fascistCriticisms = historicalFascistEntry.sections.find(({ id }) => id === 'criticisms').blocks;
assert.ok(fascistCriticisms.some(({ text }) => text?.includes('category error') && text.includes('discipline labor')));
assert.ok(fascistCriticisms.some(({ text }) => text?.includes('Lateran settlement') && text.includes('not be read as proof')));
assert.ok(historicalFascistEntry.researchGaps.some((gap) => gap.startsWith('Read Pasetti’s full article')));
assert.ok(historicalFascistEntry.researchGaps.some((gap) => gap.startsWith('Collate the 1929 Lateran Treaty')));

const liberalConstitutionalismEntry = ENCYCLOPEDIA_ENTRIES['liberal-constitutionalist'];
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['tunisiaConstitution1861ArabicOfficial', 'primary', '1861-04-26', ['Arabic'], 'high'],
  ['tunisiaConstitution1861FrenchOfficial', 'primary', '1861-04-26', ['French'], 'high'],
  ['marchIslamicConstitutionalismTunisia1861', 'secondary', '2020-05-16', ['English'], 'medium'],
  ['khadharTunisianConstitution1861French1989', 'secondary', '1989', ['French'], 'high'],
]) {
  assert.ok(liberalConstitutionalismEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Tunisian constitutionalism reference trail`);
  assert.ok(JSON.stringify(liberalConstitutionalismEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-18');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:liberal-constitutionalist'), `${sourceId} needs a liberal-constitutionalist backlink`);
}
const tunisianHistory = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1857–1864 — Tunisian constitutional reform'));
assert.ok(tunisianHistory, 'the Tunisian 1861 constitutional episode must remain visible');
assert.match(tunisianHistory.text, /60-member Supreme Council/);
assert.ok(tunisianHistory.citations.researchSourceIds.includes('marchIslamicConstitutionalismTunisia1861'));
const tunisianVariant = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Tunisian constitutional reform'));
assert.ok(tunisianVariant, 'the Tunisian case must be separated as a dated constitutional variant');
const tunisianExample = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('Tunisia’s 1857–1864 reform sequence'));
assert.ok(tunisianExample, 'Tunisia must appear as a bounded historical example');
assert.ok(liberalConstitutionalismEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The Tunisian case adds a formalism')));
assert.ok(liberalConstitutionalismEntry.researchGaps.some((gap) => gap.startsWith('Collate the Arabic and French witnesses of the Tunisian Constitution')));
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['frusChinaProvincialAssemblies1908', 'primary', '1908', ['English translation'], 'high'],
  ['frusChinaProvisionalConstitution1912', 'primary', '1914', ['English translation'], 'high'],
  ['changLateQingConstitutionalism1989', 'secondary', '1989', ['English translation'], 'high'],
  ['zarrowAfterEmpire2012', 'secondary', '2012', ['English'], 'high'],
  ['zhangConstitutionalReformsChina2024', 'secondary', '2024-12-19', ['English'], 'medium'],
]) {
  assert.ok(liberalConstitutionalismEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Chinese constitutionalism reference trail`);
  assert.ok(JSON.stringify(liberalConstitutionalismEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-18');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:liberal-constitutionalist'), `${sourceId} needs a liberal-constitutionalist backlink`);
}
const pengChineseRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-pengQingConstitutionMaking2021Chinese');
assert.ok(liberalConstitutionalismEntry.references.researchSourceIds.includes('pengQingConstitutionMaking2021Chinese'));
assert.ok(JSON.stringify(liberalConstitutionalismEntry.sections).includes('pengQingConstitutionMaking2021Chinese'));
assert.equal(pengChineseRecord.evidenceRole, 'secondary');
assert.equal(pengChineseRecord.publicationDate, '2021');
assert.equal(pengChineseRecord.accessDate, '2026-09-19');
assert.deepEqual(pengChineseRecord.languages, ['Chinese']);
assert.equal(pengChineseRecord.review.confidence, 'medium');
assert.equal(pengChineseRecord.publicationStatus, 'link-only');
assert.equal(pengChineseRecord.directQuote, null);
assert.ok(pengChineseRecord.relationships.profileEntries.includes('encyclopedia:liberal-constitutionalist'));
assert.ok(liberalConstitutionalismEntry.researchGaps.some((gap) => gap.startsWith('This pass adds Peng Jian’s Chinese-language catalogue record')));
const chineseDescription = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'description').blocks;
assert.ok(chineseDescription.some(({ text }) => text?.startsWith('Late-Qing and early republican China adds an East Asian constitutional case')));
const chineseIntroduction = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'introduction').blocks;
assert.ok(chineseIntroduction.some(({ text }) => text?.startsWith('The late-Qing sequence is best read as a contested constitutional transition')));
const chineseInstitutionalDescription = chineseDescription.find(({ text }) => text?.startsWith('A closer institutional reading distinguishes four layers'));
assert.ok(chineseInstitutionalDescription, 'the Chinese institutional layers must be explicit');
assert.ok(chineseInstitutionalDescription.citations.researchSourceIds.includes('frusChinaProvincialAssemblies1908'));
const chineseHistory = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1908–1914 — Late-Qing reform'));
assert.ok(chineseHistory, 'the late-Qing and early republican constitutional sequence must remain visible');
assert.match(chineseHistory.text, /dissolved representative bodies/);
const chineseDetailedHistory = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1908–1912 — Provincial assemblies'));
assert.ok(chineseDetailedHistory, 'the provincial-assembly and Nineteen Articles sequence must be separately visible');
assert.match(chineseDetailedHistory.text, /restricted male franchise/);
const chineseVariant = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Late-Qing constitutional reform'));
assert.ok(chineseVariant, 'the Chinese constitutional variant must be separated as a dated case');
assert.match(chineseVariant.distinction, /not an uninterrupted parliamentary system/);
const chineseExample = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('Late-Qing and early republican China is a bounded example'));
assert.ok(chineseExample, 'China must appear as a bounded historical example');
const chineseDetailedExample = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('The Chinese case also demonstrates why the word'));
assert.ok(chineseDetailedExample, 'the Chinese representation and franchise detail must be visible');
assert.ok(liberalConstitutionalismEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The Chinese sequence adds a safeguard')));
assert.ok(liberalConstitutionalismEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The deeper safeguard is to avoid treating either constitutional text')));
for (const dimension of ['economic', 'authority', 'identity', 'social']) {
  assert.ok(liberalConstitutionalismEntry.dimensionInterpretations[dimension].citations.researchSourceIds.some((sourceId) => sourceId.startsWith('frusChina') || sourceId === 'zarrowAfterEmpire2012'), `${dimension} needs the Chinese constitutionalism evidence trail`);
}
assert.ok(liberalConstitutionalismEntry.researchGaps.some((gap) => gap.startsWith('Study the late-Qing constitutional movement')));
for (const [sourceId, role, date] of [
  ['southAfricaConstitution1996Rights', 'primary', '1996'],
  ['southAfricaMakwanyaneCourt1995', 'primary', '1995-06-06'],
  ['khoslaTushnetStateCapacity2022', 'secondary', '2022-05-21'],
]) {
  assert.ok(liberalConstitutionalismEntry.references.researchSourceIds.includes(sourceId));
  assert.ok(JSON.stringify(liberalConstitutionalismEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, role);
  assert.equal(record.publicationDate, date);
  assert.deepEqual(record.languages, ['English']);
  assert.equal(record.accessDate, '2026-09-16');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:liberal-constitutionalist']);
}
const southAfricaScholar = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-khoslaTushnetStateCapacity2022');
assert.equal(southAfricaScholar.identifiers.doi, '10.1093/ajcl/avac009');
assert.match(southAfricaScholar.description, /First online publication date.*March 2022/);
assert.match(southAfricaScholar.note, /selected South Africa discussion/);
assert.match(southAfricaScholar.license, /CC BY 4\.0/);
const makwanyaneRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-southAfricaMakwanyaneCourt1995');
assert.match(makwanyaneRecord.description, /retrospective institutional summary/);
assert.match(makwanyaneRecord.note, /full judgment.*not independently read/);
const southAfricaDescription = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'description').blocks;
assert.ok(southAfricaDescription.some(({ text }) => text?.includes('post-apartheid constitutional order') && text.includes('do not by themselves prove equal access')));
assert.ok(southAfricaDescription.some(({ text }) => text?.includes('state capacity') && text.includes('dialogic or weak-form review')));
const liberalHistory = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'history').timeline;
const saIndex = liberalHistory.findIndex(({ period }) => period.startsWith('1995–1996: South African'));
assert.ok(saIndex >= 0);
const southAfricaExample = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.includes('South Africa’s 1996 Bill of Rights'));
assert.ok(southAfricaExample);
const liberalCriticisms = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'criticisms').blocks;
assert.ok(liberalCriticisms.some(({ text }) => text?.includes('constitutionalism is only a negative restraint')));
assert.ok(liberalConstitutionalismEntry.researchGaps.some((gap) => gap.startsWith('Read the full S v Makwanyane judgment')));
assert.ok(liberalConstitutionalismEntry.researchGaps.some((gap) => gap.startsWith('Compare South Africa’s socioeconomic-rights remedies')));
for (const [sourceId, role, date, languages] of [
  ['germanBasicLaw1949', 'primary', '1949-05-23', ['English', 'German']],
  ['kommersBasicLawFiftyYear2000', 'secondary', '2019-06-24', ['English']],
  ['meinelWestGermanConstitutionalism2016', 'secondary', '2016-04-11', ['English']],
]) {
  assert.ok(liberalConstitutionalismEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a German constitutionalism reference trail`);
  assert.ok(JSON.stringify(liberalConstitutionalismEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, role);
  assert.equal(record.publicationDate, date);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, 'high');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  const expectedProfiles = sourceId === 'brazilConstitution1988'
    ? ['encyclopedia:indigenous-relational-governance', 'encyclopedia:liberal-constitutionalist']
    : ['encyclopedia:liberal-constitutionalist'];
  assert.deepEqual([...record.relationships.profileEntries].sort(), expectedProfiles.sort());
}
const germanSocialMarketRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-bpbSocialMarketEconomy');
assert.ok(germanSocialMarketRecord.relationships.profileEntries.includes('encyclopedia:liberal-constitutionalist'));
const germanLiberalHistory = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(germanLiberalHistory.some(({ period }) => period.startsWith('1949 onward — West German')));
const germanLiberalVariant = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Postwar West German constitutional'));
assert.ok(germanLiberalVariant, 'West German constitutional liberalism must be separated as a dated variant');
const germanLiberalExample = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('The Federal Republic of Germany’s Basic Law'));
assert.ok(germanLiberalExample, 'West German constitutional reconstruction must appear as a bounded example');
assert.match(germanLiberalExample.text, /does not classify present-day Germany/);
assert.ok(liberalConstitutionalismEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The West German case makes the counter-majoritarian question')));
assert.ok(liberalConstitutionalismEntry.researchGaps.some((gap) => gap.startsWith('Read the original German Basic Law')));
assert.deepEqual(Object.fromEntries(Object.entries(liberalConstitutionalismEntry.dimensionInterpretations).map(([id, { score }]) => [id, score])), { economic: -30, social: 25, authority: -65, identity: 25, foreign: 35, religion: 55 });
for (const [sourceId, role, date] of [
  ['indiaConstitution1950', 'primary', '1950-01-26'],
  ['indiaKesavananda1973', 'primary', '1973-04-24'],
  ['chakrabartyIndianConstitution2018', 'secondary', '2018-12'],
  ['deIndianConstitutionEveryday2020', 'secondary', '2020-10'],
  ['fischerIndiaConstitutionalReform2007', 'secondary', '2007'],
]) {
  assert.ok(liberalConstitutionalismEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an Indian constitutionalism reference trail`);
  assert.ok(JSON.stringify(liberalConstitutionalismEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, role);
  assert.equal(record.publicationDate, date);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, ['English']);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:liberal-constitutionalist'), `${sourceId} needs an encyclopedia backlink`);
}
const indiaTimeline = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(indiaTimeline.find(({ period }) => period.startsWith('1946–1950: India’s Constituent Assembly')));
assert.ok(indiaTimeline.find(({ period }) => period.startsWith('24 April 1973: Kesavananda Bharati')));
const indiaVariant = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Transformative constitutionalism in India'));
assert.ok(indiaVariant, 'India must be separated as a dated postcolonial variant');
const indiaExample = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('India’s postcolonial constitutional order'));
assert.ok(indiaExample, 'India must appear as a bounded historical example');
assert.match(indiaExample.text, /not an exact six-axis match/);
assert.ok(liberalConstitutionalismEntry.researchGaps.some((gap) => gap.startsWith('Read and collate the complete Constitution of India')));
assert.ok(liberalConstitutionalismEntry.researchGaps.some((gap) => gap.startsWith('Extend the Indian case through the full Kesavananda Bharati')));
assert.ok(liberalConstitutionalismEntry.researchGaps.some((gap) => gap.startsWith('Add Dalit, Adivasi, Muslim')));
assert.deepEqual(Object.fromEntries(Object.entries(liberalConstitutionalismEntry.dimensionInterpretations).map(([id, { score }]) => [id, score])), { economic: -30, social: 25, authority: -65, identity: 25, foreign: 35, religion: 55 });
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['mexicoConstitution1917OfficialSpanish', 'primary', '1917-02-05', ['Spanish'], 'high'],
  ['locMexicoConstitution1917', 'contextual', null, ['English', 'Spanish'], 'high'],
  ['niemeyerQueretaro1974', 'secondary', '1974', ['English'], 'medium'],
  ['velazquezAgrarianConstitution2017Spanish', 'secondary', '2017-09', ['Spanish'], 'high'],
  ['carboMagonArticle1232017', 'secondary', '2017-11-16', ['Spanish'], 'medium'],
]) {
  assert.ok(liberalConstitutionalismEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Mexican constitutionalism reference trail`);
  assert.ok(JSON.stringify(liberalConstitutionalismEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish legal evidence, context, and scholarship`);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:liberal-constitutionalist'), `${sourceId} needs a liberal-constitutionalism backlink`);
}
const mexicanConstitutionTimeline = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1916–1917: Mexican revolutionary social constitutionalism'));
assert.ok(mexicanConstitutionTimeline, 'the Mexican social-constitutional timeline case must remain visible');
assert.ok(mexicanConstitutionTimeline.citations.researchSourceIds.includes('mexicoConstitution1917OfficialSpanish'));
const mexicanConstitutionVariant = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Mexican revolutionary social constitutionalism'));
assert.ok(mexicanConstitutionVariant, 'the Mexican case must be separated as a social-constitutional variant');
const mexicanConstitutionExample = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('Mexico’s 1917 Constitution'));
assert.ok(mexicanConstitutionExample, 'Mexico must appear as a bounded historical example');
assert.match(mexicanConstitutionExample.text, /not a complete record of enforcement/);
const mexicanConstitutionSafeguard = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('The Mexican case adds a safeguard'));
assert.ok(mexicanConstitutionSafeguard, 'the Mexican case needs a design-versus-implementation safeguard');
assert.ok(liberalConstitutionalismEntry.researchGaps.some((gap) => gap.startsWith('Read and collate the original Spanish 1917 Constitution')));
for (const [sourceId, evidenceRole, publicationDate, languages, confidence, publicationStatus] of [
  ['rousseauDuContratSocial1762French', 'primary', '1762', ['French'], 'high', 'review-required'],
  ['unigeRousseauInstitutions2013', 'secondary', '2013', ['French'], 'high', 'link-only'],
  ['rosenblattRousseauGeneva1991', 'secondary', '1991', ['French'], 'high', 'link-only'],
  ['cambridgeRousseauGeneva1997', 'secondary', '1997', ['English'], 'high', 'link-only'],
  ['switzerlandReformationOfficial', 'contextual', null, ['English'], 'medium', 'link-only'],
]) {
  assert.ok(liberalConstitutionalismEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Rousseau/Swiss reference trail`);
  assert.ok(JSON.stringify(liberalConstitutionalismEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.deepEqual(record.languages, languages);
  assert.equal(record.accessDate, '2026-09-17');
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, publicationStatus);
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:liberal-constitutionalist']);
}
const swissReformationTimeline = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(swissReformationTimeline.some(({ period }) => period.startsWith('Sixteenth century antecedent — Swiss Reformation')));
for (const sourceId of [
  'genevaEcclesiasticalOrdinances1541French',
  'genevaConsistoryRegisters1542French',
  'genevaCouncilRegistersRCnum1545French',
  'rangelGenevaConfessionalization2024',
  'hopflChristianPolityGeneva2009',
  'wattWomenConsistoryGeneva1993',
]) {
  assert.ok(liberalConstitutionalismEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Swiss Reformation reference trail`);
  assert.ok(JSON.stringify(liberalConstitutionalismEntry.sections).includes(sourceId), `${sourceId} needs claim-level use in the liberal entry`);
  const [record] = BIBLIOGRAPHY_RECORDS.filter((item) => item.citationIds.researchSourceIds?.includes(sourceId));
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:liberal-constitutionalist'), `${sourceId} needs a liberal-constitutionalism backlink`);
}
const genevaLiberalTimeline = swissReformationTimeline.find(({ period }) => period.startsWith('1541–1564 — Geneva’s negotiated ecclesiastical constitution'));
assert.ok(genevaLiberalTimeline, 'the Genevan constitutional antecedent must remain visible');
assert.ok(genevaLiberalTimeline.citations.researchSourceIds.includes('genevaEcclesiasticalOrdinances1541French'));
const genevaRatificationTimeline = swissReformationTimeline.find(({ period }) => period.startsWith('1541–1542 — Genevan civic ratification'));
assert.ok(genevaRatificationTimeline, 'the Genevan civic-ratification detail must remain visible');
assert.ok(genevaRatificationTimeline.citations.researchSourceIds.includes('genevaCouncilRegistersRCnum1545French'));
assert.ok(swissReformationTimeline.some(({ period }) => period.startsWith('1762 — Rousseau’s Genevan')));
const rousseauVariant = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Rousseauian popular sovereignty'));
assert.ok(rousseauVariant, 'Rousseauian popular sovereignty must be separated as a boundary variant');
const swissReformationVariant = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Swiss Reformation civic-confessional constitutionalism'));
assert.ok(swissReformationVariant, 'the Swiss Reformation must be separated as an antecedent variant');
assert.ok(swissReformationVariant.citations.researchSourceIds.includes('rangelGenevaConfessionalization2024'));
const genevaInstitutionalVariant = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Genevan ecclesiastical constitutionalism'));
assert.ok(genevaInstitutionalVariant, 'the Genevan office-and-ratification detail must be separated as a precise variant');
const rousseauExample = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('Jean-Jacques Rousseau belongs'));
assert.ok(rousseauExample, 'Rousseau must appear as a bounded illustrative example');
const swissReformationExample = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('Zurich and Geneva under the Swiss Reformers'));
assert.ok(swissReformationExample, 'the Swiss Reformers must appear as a bounded illustrative example');
assert.match(swissReformationExample.text, /not liberal democracies/);
const genevaInstitutionalExample = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('Geneva’s 1541–1542 settlement'));
assert.ok(genevaInstitutionalExample, 'the Genevan ratification detail must appear as a bounded example');
assert.match(genevaInstitutionalExample.text, /not for inferring popular sovereignty/);
assert.ok(liberalConstitutionalismEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The Swiss Reformation adds a religious-coercion safeguard')));
assert.ok(liberalConstitutionalismEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The Genevan ratification record adds a safeguard')));
assert.ok(liberalConstitutionalismEntry.researchGaps.some((gap) => gap.startsWith('Research the Swiss Reformers')));
assert.ok(liberalConstitutionalismEntry.researchGaps.some((gap) => gap.startsWith('This Genevan update adds a more precise')));
assert.ok(liberalConstitutionalismEntry.researchGaps.some((gap) => gap.startsWith('Read the complete German, French and Latin primary corpus')));
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['swissConstitution1848Parliament', 'primary', '1848-09-12', ['German', 'French', 'Italian'], 'high'],
  ['swissFederalArchivesAfter1848', 'contextual', null, ['English'], 'high'],
  ['dardanelliMuellerSwissFederalism2017', 'secondary', '2017-09-27', ['English'], 'high'],
]) {
  assert.ok(liberalConstitutionalismEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Swiss federal constitutional reference trail`);
  assert.ok(JSON.stringify(liberalConstitutionalismEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  const expectedBrazilianProfiles = sourceId === 'brazilConstitution1988'
    ? ['encyclopedia:indigenous-relational-governance', 'encyclopedia:liberal-constitutionalist']
    : ['encyclopedia:liberal-constitutionalist'];
  assert.deepEqual([...record.relationships.profileEntries].sort(), expectedBrazilianProfiles.sort());
}
const swissFederalHistory = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(swissFederalHistory.some(({ period }) => period.startsWith('1847–1848 — Swiss federal founding')));
const swissFederalVariant = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Swiss federal-radical constitutionalism'));
assert.ok(swissFederalVariant, 'Swiss federal constitutionalism must be separated from the Reformation antecedent');
const swissFederalExample = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('Switzerland’s first federal constitution'));
assert.ok(swissFederalExample, 'the Swiss federal founding must appear as a bounded example');
assert.match(swissFederalExample.text, /founding electorate was inclusive/);
assert.ok(liberalConstitutionalismEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The 1848 Swiss case adds a federalism-and-inclusion safeguard')));
assert.ok(liberalConstitutionalismEntry.researchGaps.some((gap) => gap.startsWith('Read the complete 1848 Swiss Federal Constitution')));
assert.ok(liberalConstitutionalismEntry.researchGaps.some((gap) => gap.startsWith('Add original Ottoman Turkish')));
for (const sourceId of ['echrConvention', 'coeDemocraticCitizenship', 'unRuleLawHumanRights', 'oxfordConstitutionalJustice']) {
  assert.ok(liberalConstitutionalismEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a regional human-rights constitutionalism reference trail`);
  assert.ok(JSON.stringify(liberalConstitutionalismEntry.sections).includes(sourceId), `${sourceId} needs claim-level use in the liberal entry`);
  const [record] = BIBLIOGRAPHY_RECORDS.filter((item) => item.citationIds.researchSourceIds?.includes(sourceId));
  assert.ok(record, `${sourceId} needs a bibliography record`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:liberal-constitutionalist'), `${sourceId} needs a liberal-constitutionalism backlink`);
}
const humanRightsTimeline = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'history').timeline;
const echrTimeline = humanRightsTimeline.find(({ period }) => period.startsWith('4 November 1950–3 September 1953'));
assert.ok(echrTimeline, 'the European Convention timeline case must remain visible');
assert.ok(echrTimeline.citations.researchSourceIds.includes('echrConvention'));
const echrVariant = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Regional human-rights constitutionalism'));
assert.ok(echrVariant, 'the European Convention system must be separated as a regional human-rights variant');
const echrExample = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('The European Convention system is a bounded example'));
assert.ok(echrExample, 'the European Convention system must appear as a bounded example');
assert.match(echrExample.text, /no country-wide ideological score/);
assert.ok(liberalConstitutionalismEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The European Convention case adds a transnational accountability safeguard')));
assert.ok(liberalConstitutionalismEntry.researchGaps.some((gap) => gap.startsWith('Read the complete European Convention')));
for (const [sourceId, publicationDate] of [
  ['sasakiNamikKemalConstitutionalPlan2006', '2006-02-20'],
  ['sonmezOttomanConstitutionalism2016', '2016-01-05'],
  ['sivilogluOttomanLiberalism2024', '2024-12-26'],
]) {
  assert.ok(liberalConstitutionalismEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an Ottoman constitutionalism reference trail`);
  assert.ok(JSON.stringify(liberalConstitutionalismEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, 'secondary');
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, ['English']);
  assert.equal(record.review.confidence, 'medium');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:liberal-constitutionalist'));
}
for (const [sourceId, evidenceRole, publicationDate, languages, confidence, publicationStatus] of [
  ['moreauOttomanStateConstitutionalReforms2013', 'secondary', '2013', ['French'], 'high', 'link-only'],
  ['hillKhayrDinArabicConstitutionalism2025', 'secondary', '2025-07-21', ['English'], 'medium', 'link-only'],
  ['khayrDinAqwamAlMasalik1867Arabic', 'primary', '1867', ['Arabic'], 'medium', 'review-required'],
]) {
  assert.ok(liberalConstitutionalismEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an Arabic-Ottoman constitutionalism reference trail`);
  assert.ok(JSON.stringify(liberalConstitutionalismEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.deepEqual(record.languages, languages);
  assert.equal(record.accessDate, '2026-09-17');
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, publicationStatus);
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:liberal-constitutionalist'));
}
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['ottomanConstitutionTurkishCourt1876', 'primary', '1876-12-23', ['Ottoman Turkish'], 'high'],
  ['toprakOttomanElections2013', 'secondary', '2013-07-26', ['Turkish', 'English abstract'], 'medium'],
  ['ahmedOttomanUlemaIslamicConstitution2026', 'secondary', '2026', ['English'], 'medium'],
]) {
  assert.ok(liberalConstitutionalismEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a late Ottoman reference trail`);
  assert.ok(JSON.stringify(liberalConstitutionalismEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.deepEqual(record.languages, languages);
  assert.equal(record.accessDate, '2026-09-18');
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:liberal-constitutionalist'));
}
const ottomanLiberalIntroduction = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'introduction').blocks;
assert.ok(ottomanLiberalIntroduction.some(({ text }) => text?.startsWith('The late Ottoman constitutional debate supplies a bounded non-Western case')));
assert.ok(ottomanLiberalIntroduction.some(({ text }) => text?.startsWith('The Constantinople-centered case becomes more precise')));
assert.ok(ottomanLiberalIntroduction.some(({ text }) => text?.startsWith('An Arabic-Ottoman reform strand broadens this case')));
const ottomanLiberalDescription = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'description').blocks;
assert.ok(ottomanLiberalDescription.some(({ text }) => text?.startsWith('Ottoman constitutional liberalism should not be treated')));
assert.ok(ottomanLiberalDescription.some(({ text }) => text?.startsWith('The Khayr al-Din case shows')));
const ottomanLiberalHistory = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(ottomanLiberalHistory.some(({ period }) => period.startsWith('1860s–1909 — Ottoman constitutional thought')));
assert.ok(ottomanLiberalHistory.some(({ period }) => period.startsWith('1876–1909 — Ottoman legal text')));
assert.ok(ottomanLiberalHistory.some(({ period }) => period.startsWith('1867–1878 — Khayr al-Din al-Tunisi')));
const ottomanLiberalVariant = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Ottoman constitutional liberalism'));
assert.ok(ottomanLiberalVariant, 'Ottoman constitutional liberalism must be separated from the monarchist case');
const arabicOttomanVariant = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Arabic–Ottoman reform constitutionalism'));
assert.ok(arabicOttomanVariant, 'Arabic–Ottoman reform constitutionalism must be separated from Young Ottoman constitutionalism');
const ottomanLiberalExample = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('Young Ottoman constitutionalism'));
assert.ok(ottomanLiberalExample, 'Young Ottoman constitutionalism must appear as a bounded example');
const khayrDinExample = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('Khayr al-Din al-Tunisi’s 1867 Arabic treatise'));
assert.ok(khayrDinExample, 'Khayr al-Din must appear as a bounded example');
const ottomanLiberalCriticisms = liberalConstitutionalismEntry.sections.find(({ id }) => id === 'criticisms').blocks;
assert.ok(ottomanLiberalCriticisms.some(({ text }) => text?.startsWith('The late Ottoman case adds a translation')));
assert.ok(ottomanLiberalCriticisms.some(({ text }) => text?.startsWith('The Arabic-Ottoman reform case adds a state-capacity')));
assert.ok(liberalConstitutionalismEntry.researchGaps.some((gap) => gap.startsWith('Collate the original Ottoman Turkish, Arabic and French texts')));
assert.ok(liberalConstitutionalismEntry.researchGaps.some((gap) => gap.startsWith('Read the complete Arabic Aqwam al-Masalik')));

const deliberativeCentreEntry = ENCYCLOPEDIA_ENTRIES['centrist-pragmatist'];
for (const [sourceId, role, date] of [
  ['irishAssemblyTerms2016', 'primary', '2016-07'],
  ['irishAssemblySelection2016', 'primary', null],
  ['irishAssemblyRecruitment2018', 'primary', '2018-02-21'],
  ['suiterEpistemicDeliberation2021', 'secondary', '2021-07-23'],
  ['carolanGlennonConsensus2024', 'secondary', '2024-03-08'],
  ['doyleWalshRejoinder2024', 'secondary', '2024-03-08'],
]) {
  assert.ok(deliberativeCentreEntry.references.researchSourceIds.includes(sourceId));
  assert.ok(JSON.stringify(deliberativeCentreEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, role);
  assert.equal(record.publicationDate, date);
  assert.deepEqual(record.languages, ['English']);
  assert.equal(record.accessDate, '2026-09-16');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:centrist-pragmatist']);
}
const deliberationStudyRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-suiterEpistemicDeliberation2021');
assert.deepEqual(deliberationStudyRecord.creators, ['Jane Suiter', 'David M. Farrell', 'Clodagh Harris', 'Philip Murphy']);
assert.equal(deliberationStudyRecord.identifiers.doi, '10.1177/14789299211020909');
assert.match(deliberationStudyRecord.description, /first online publication.*2022/);
assert.match(deliberationStudyRecord.note, /No transcript recoding, statistical replication/);
assert.match(deliberationStudyRecord.license, /CC BY 4\.0/);
const consensusReplyRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-carolanGlennonConsensus2024');
assert.equal(consensusReplyRecord.identifiers.doi, '10.1093/icon/moae012');
assert.match(consensusReplyRecord.note, /sections 1–2/);
const consensusRejoinderRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-doyleWalshRejoinder2024');
assert.equal(consensusRejoinderRecord.identifiers.doi, '10.1093/icon/moae015');
assert.match(consensusRejoinderRecord.note, /Expert Advisory Group but write personally/);
assert.match(consensusRejoinderRecord.license, /CC BY 4\.0/);
const recruitmentStatementRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-irishAssemblyRecruitment2018');
assert.match(recruitmentStatementRecord.description, /7 February 2023 update/);
assert.match(recruitmentStatementRecord.note, /audit was not independently reviewed/);
const centreDescription = deliberativeCentreEntry.sections.find(({ id }) => id === 'description').blocks;
assert.ok(centreDescription.some(({ text }) => text?.includes('majority voting, not unanimity') && text.includes('not automatic implementation')));
assert.ok(centreDescription.some(({ text }) => text?.includes('did not establish that participants mirrored every public attitude')));
const centreHistory = deliberativeCentreEntry.sections.find(({ id }) => id === 'history').timeline;
const irishExperimentIndex = centreHistory.findIndex(({ period }) => period.startsWith('2016–2018: Irish'));
assert.ok(irishExperimentIndex >= 0 && irishExperimentIndex < centreHistory.findIndex(({ period }) => period.startsWith('Present:')));
const irishProceduralExample = deliberativeCentreEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name === 'Ireland’s Citizens’ Assembly');
assert.match(irishProceduralExample.caveat, /Neither the members nor their recommendations inherit/);
const centreCriticisms = deliberativeCentreEntry.sections.find(({ id }) => id === 'criticisms').blocks;
assert.ok(centreCriticisms.some(({ text }) => text?.includes('excludes private roundtables') && text.includes('causal effect on voters')));
assert.ok(centreCriticisms.some(({ text }) => text?.includes('January 2018 referendum-procedure meeting, not the earlier abortion meetings')));
assert.ok(centreCriticisms.some(({ text }) => text?.includes('Carolan and Glennon interpret') && text.includes('Doyle and Walsh reply')));
assert.ok(deliberativeCentreEntry.researchGaps.some((gap) => gap.startsWith('Audit the Irish recruitment methodology')));
assert.ok(deliberativeCentreEntry.researchGaps.some((gap) => gap.startsWith('Read the complete Carolan–Glennon argument')));
assert.deepEqual(Object.fromEntries(Object.entries(deliberativeCentreEntry.dimensionInterpretations).map(([id, { score }]) => [id, score])), { economic: 0, social: 0, authority: 8, identity: 0, foreign: 15, religion: 10 });

const christianDemocracyEntry = ENCYCLOPEDIA_ENTRIES['christian-democratic'];
for (const [sourceId, role, date, language] of [
  ['sweetMaritainPolitical2019', 'secondary', '2019-05-01', 'English'],
  ['vaticanGaudiumSpesFrench1965', 'primary', '1965-12-07', 'French'],
]) {
  assert.ok(christianDemocracyEntry.references.researchSourceIds.includes(sourceId));
  assert.ok(JSON.stringify(christianDemocracyEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, role);
  assert.equal(record.publicationDate, date);
  assert.deepEqual(record.languages, [language]);
  assert.equal(record.accessDate, '2026-09-16');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:christian-democratic']);
}
for (const [sourceId, role, date, language] of [
  ['mrpColinManifesto1944French', 'contextual', '1944', 'French'],
  ['callotMrpHistory1980French', 'secondary', '1980', 'French'],
]) {
  assert.ok(christianDemocracyEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a French MRP reference trail`);
  assert.ok(JSON.stringify(christianDemocracyEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, role);
  assert.equal(record.publicationDate, date);
  assert.deepEqual(record.languages, [language]);
  assert.equal(record.accessDate, '2026-09-19');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:christian-democratic']);
}
const indigenousGovernanceEntry = ENCYCLOPEDIA_ENTRIES['indigenous-relational-governance'];
assert.ok(indigenousGovernanceEntry.references.researchSourceIds.includes('brazilConstitution1988'), 'Brazilian Indigenous case needs the official Constitution witness');
assert.ok(JSON.stringify(indigenousGovernanceEntry.sections).includes('brazilConstitution1988'), 'Brazilian Indigenous case needs claim-level use of the official Constitution witness');
for (const [sourceId, role, date, language] of [
  ['barataAmazonLegalPluralism2018Portuguese', 'secondary', '2018', 'Portuguese'],
]) {
  assert.ok(indigenousGovernanceEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Brazilian Indigenous reference trail`);
  assert.ok(JSON.stringify(indigenousGovernanceEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, role);
  assert.equal(record.publicationDate, date);
  assert.deepEqual(record.languages, [language]);
  assert.equal(record.accessDate, '2026-09-19');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:indigenous-relational-governance']);
}
assert.ok(indigenousGovernanceEntry.researchGaps.some((gap) => gap.startsWith('Extend the Brazilian case through Indigenous-authored')));
for (const [sourceId, role, date, language, confidence] of [
  ['copeiHistoryOfficial', 'primary', null, 'Spanish', 'medium'],
  ['copeiMessage2025', 'primary', '2025-01-14', 'Spanish', 'medium'],
  ['invernizziChristianDemocracyAmericas2019', 'secondary', '2019', 'English', 'high'],
  ['lupuCopeiBreakdown2016', 'secondary', '2016', 'English', 'high'],
]) {
  assert.ok(christianDemocracyEntry.references.researchSourceIds.includes(sourceId), sourceId + ' needs a Venezuelan Christian-democratic reference trail');
  assert.ok(JSON.stringify(christianDemocracyEntry.sections).includes(sourceId), sourceId + ' needs claim-level use');
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, sourceId + ' must resolve once');
  const [record] = records;
  assert.equal(record.evidenceRole, role);
  assert.equal(record.publicationDate, date);
  assert.deepEqual(record.languages, [language]);
  assert.equal(record.accessDate, '2026-09-18');
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:christian-democratic']);
}
const copeiHistory = christianDemocracyEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(copeiHistory.some(({ period, citations }) => period.startsWith('1946–1998: Venezuelan COPEI') && citations.researchSourceIds.includes('copeiHistoryOfficial')));
const copeiVariant = christianDemocracyEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Venezuelan social-Christian party democracy'));
assert.ok(copeiVariant, 'Venezuelan COPEI must be a separate bounded variant');
const copeiExample = christianDemocracyEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ entries = [] }) => entries.some(({ name }) => name.startsWith('Venezuela: COPEI')));
assert.ok(copeiExample, 'Venezuelan COPEI must appear as a bounded historical example');
const copeiPerson = christianDemocracyEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries.find(({ name }) => name.startsWith('Rafael Caldera'));
assert.ok(copeiPerson, 'Rafael Caldera must appear with a bounded political-role caveat');
assert.ok(christianDemocracyEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The Venezuelan case adds a safeguard')));
assert.ok(christianDemocracyEntry.researchGaps.some((gap) => gap.startsWith('Extend the Venezuelan COPEI case')));
const sweetMaritainRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-sweetMaritainPolitical2019');
assert.deepEqual(sweetMaritainRecord.creators, ['William Sweet']);
assert.match(sweetMaritainRecord.description, /substantive revision; first publication was 5 December 1997/);
assert.match(sweetMaritainRecord.note, /selected section 3\.5/);
assert.match(sweetMaritainRecord.note, /not independently reviewed/);
const gaudiumRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-vaticanGaudiumSpesFrench1965');
assert.match(gaudiumRecord.description, /not .*certified English translation/);
assert.match(gaudiumRecord.note, /no full-document or Latin-edition collation/);
const reusedFreedomRecords = BIBLIOGRAPHY_RECORDS.filter(({ id }) => id === 'research-vaticanReligiousFreedomFrench');
assert.equal(reusedFreedomRecords.length, 1);
assert.equal(reusedFreedomRecords[0].accessDate, '2026-09-15', 'reusing a source must not replace its original metadata');
assert.deepEqual([...reusedFreedomRecords[0].relationships.profileEntries].sort(), ['encyclopedia:christian-democratic', 'encyclopedia:religious-traditionalist']);
assert.ok(christianDemocracyEntry.references.researchSourceIds.includes('vaticanReligiousFreedomFrench'));
const christianDescription = christianDemocracyEntry.sections.find(({ id }) => id === 'description').blocks;
assert.ok(christianDescription.some(({ text }) => text?.includes('agreement on basic rights from agreement about their ultimate foundation')));
assert.ok(christianDescription.some(({ text }) => text?.includes('not evidence that any particular party maintained independence')));
assert.ok(christianDescription.some(({ text }) => text?.includes('does not mandate one church–state arrangement')));
const christianHistory = christianDemocracyEntry.sections.find(({ id }) => id === 'history').timeline;
const councilIndex = christianHistory.findIndex(({ period }) => period.startsWith('7 December 1965'));
const laterIndex = christianHistory.findIndex(({ period }) => period.startsWith('Late twentieth century–present'));
assert.ok(councilIndex >= 0 && laterIndex > councilIndex);
assert.equal(new Set(christianHistory.map(({ period }) => period)).size, christianHistory.length);
const christianCriticisms = christianDemocracyEntry.sections.find(({ id }) => id === 'criticisms').blocks;
assert.ok(christianCriticisms.some(({ text }) => text?.includes('limited institutional detail')));
assert.ok(christianCriticisms.some(({ text }) => text?.includes('do not establish a causal line from Maritain')));
assert.ok(christianDemocracyEntry.researchGaps.some((gap) => gap.includes('identity coordinate of -20 with the main card’s -40')));
assert.ok(christianDemocracyEntry.researchGaps.some((gap) => gap.startsWith('Independently read and compare')));
assert.ok(christianDemocracyEntry.researchGaps.some((gap) => gap.startsWith('Collate the selected French conciliar provisions')));
for (const [sourceId, role, date, language] of [
  ['pdcChileRevolucionLibertad1965', 'primary', '1965', 'Spanish'],
  ['memoriaChilenaRevolucionLibertad', 'secondary', null, 'Spanish'],
  ['sanchezBarriaAgrarianReform2021', 'secondary', '2021', 'Spanish'],
  ['kirkendallFreireFrei2004', 'secondary', '2004-11-17', 'English'],
  ['ferreiraChristianDemocracyChileUruguay2023', 'secondary', '2023-12-22', 'Portuguese'],
]) {
  assert.ok(christianDemocracyEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Chilean Christian-democratic reference trail`);
  assert.ok(JSON.stringify(christianDemocracyEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, role);
  assert.equal(record.publicationDate, date);
  assert.deepEqual(record.languages, [language]);
  assert.equal(record.accessDate, '2026-09-17');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:christian-democratic']);
}
const chileHistory = christianDemocracyEntry.sections.find(({ id }) => id === 'history').timeline;
const chileTimeline = chileHistory.find(({ period }) => period.startsWith('1964–1970:'));
assert.ok(chileTimeline, 'the Chilean Christian-democratic timeline case must remain visible');
assert.ok(chileTimeline.citations.researchSourceIds.includes('memoriaChilenaRevolucionLibertad'));
assert.ok(chileTimeline.citations.researchSourceIds.includes('kirkendallFreireFrei2004'));
const chileVariant = christianDemocracyEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Latin American developmental Christian democracy'));
assert.ok(chileVariant, 'the Chilean case must be separated as a dated Christian-democratic variant');
const chileExample = christianDemocracyEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Chile: Eduardo Frei Montalva'));
assert.ok(chileExample, 'Chile must appear as a bounded Christian-democratic historical example');
assert.match(chileExample.caveat, /not a present-day country classification/);
const chileCriticism = christianDemocracyEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.includes('reformist incorporation'));
assert.ok(chileCriticism, 'the Chilean case needs a criticism and evidence boundary');
assert.ok(christianDemocracyEntry.researchGaps.some((gap) => gap.startsWith('Read and collate the complete Spanish text of the Chilean')));
assert.ok(christianDemocracyEntry.researchGaps.some((gap) => gap.startsWith('Extend the Chilean agrarian and educational case')));
assert.ok(christianDemocracyEntry.researchGaps.some((gap) => gap.startsWith('Compare Chile’s Revolución en Libertad')));
for (const [sourceId, role, date, languages] of [
  ['dcItalyIdeasReconstructive1943', 'primary', '1943', ['Italian']],
  ['italyConstitution1948', 'primary', '1948-01-01', ['Italian', 'English translation']],
  ['forlenzaThomassenChristianDemocracy2024', 'secondary', '2024-04-02', ['English']],
]) {
  assert.ok(christianDemocracyEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an Italian Christian-democratic reference trail`);
  assert.ok(JSON.stringify(christianDemocracyEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, role);
  assert.equal(record.publicationDate, date);
  assert.deepEqual(record.languages, languages);
  assert.equal(record.accessDate, '2026-09-17');
  assert.equal(record.review.confidence, 'high');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:christian-democratic']);
}
const italianHistory = christianDemocracyEntry.sections.find(({ id }) => id === 'history').timeline;
const italianTimeline = italianHistory.find(({ period }) => period.startsWith('1943–1948: Italian Christian democracy'));
assert.ok(italianTimeline, 'the Italian constitutional reconstruction timeline case must remain visible');
assert.ok(italianTimeline.citations.researchSourceIds.includes('italyConstitution1948'));
const italianVariant = christianDemocracyEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Italian post-fascist constitutional'));
assert.ok(italianVariant, 'the Italian case must be separated as a dated Christian-democratic variant');
const italianExample = christianDemocracyEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name === 'Italian Reconstructive Ideas and the 1948 Constitution');
assert.ok(italianExample, 'Italy must appear as a bounded Christian-democratic historical example');
assert.match(italianExample.caveat, /wider settlement/);
assert.ok(christianCriticisms.some(({ text }) => text?.includes('Italian case adds a coalition and attribution safeguard')));
assert.ok(christianDemocracyEntry.researchGaps.some((gap) => gap.startsWith('Read and collate the complete Italian 1943 programme')));
for (const [sourceId, role, date, languages, confidence] of [
  ['swissHlsChristianDemocrats2018', 'secondary', '2018-03-13', ['German'], 'high'],
  ['swissParliamentChristianDemocrats', 'contextual', '2016-05-23', ['French'], 'high'],
  ['swissFederalChancelleryDemocracy2008', 'contextual', '2008', ['French'], 'medium'],
  ['bochslerSwitzerlandPoliticalDataYearbook2020', 'secondary', '2021', ['English'], 'high'],
]) {
  assert.ok(christianDemocracyEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Swiss Christian-democratic reference trail`);
  assert.ok(JSON.stringify(christianDemocracyEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, role);
  assert.equal(record.publicationDate, date);
  assert.deepEqual(record.languages, languages);
  assert.equal(record.accessDate, '2026-09-17');
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:christian-democratic']);
}
const swissHistory = christianDemocracyEntry.sections.find(({ id }) => id === 'history').timeline;
const swissTimeline = swissHistory.find(({ period }) => period.startsWith('1848–2021: Swiss Catholic-conservative'));
assert.ok(swissTimeline, 'the Swiss Christian-democratic timeline case must remain visible');
assert.ok(swissTimeline.citations.researchSourceIds.includes('swissHlsChristianDemocrats2018'));
const swissVariant = christianDemocracyEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Swiss federalist confessional-to-centrist'));
assert.ok(swissVariant, 'the Swiss case must be separated as a dated Christian-democratic variant');
const swissExample = christianDemocracyEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Swiss CVP/PDC'));
assert.ok(swissExample, 'Switzerland must appear as a bounded Christian-democratic historical example');
assert.match(swissExample.caveat, /cantonal variation/);
assert.ok(christianCriticisms.some(({ text }) => text?.includes('Swiss case adds a safeguard')));
assert.ok(christianDemocracyEntry.researchGaps.some((gap) => gap.startsWith('Extend the Swiss case through')));
assert.ok(christianDemocracyEntry.researchGaps.some((gap) => gap.startsWith('Separate the national CVP/PDC')));
for (const [sourceId, role, date, languages, confidence] of [
  ['kadocBekeCvp1945', 'secondary', '2005', ['Dutch'], 'high'],
  ['cdvHistoryCvp1945', 'primary', null, ['Dutch'], 'medium'],
  ['conwayBelgiumPoliticalCatholicism1996', 'secondary', '1996-04-11', ['English'], 'medium'],
  ['jadoullePscCvpProgramme1995French', 'secondary', '1995', ['French'], 'medium'],
]) {
  assert.ok(christianDemocracyEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Belgian Christian-democratic reference trail`);
  assert.ok(JSON.stringify(christianDemocracyEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, role);
  assert.equal(record.publicationDate, date);
  assert.deepEqual(record.languages, languages);
  assert.equal(record.accessDate, '2026-09-18');
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:christian-democratic']);
}
const belgianHistory = christianDemocracyEntry.sections.find(({ id }) => id === 'history').timeline;
const belgianTimeline = belgianHistory.find(({ period }) => period.startsWith('1945–1968: Belgian'));
assert.ok(belgianTimeline, 'the Belgian CVP/PSC timeline case must remain visible');
assert.ok(belgianTimeline.citations.researchSourceIds.includes('kadocBekeCvp1945'));
const belgianVariant = christianDemocracyEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Belgian postwar people’s-party'));
assert.ok(belgianVariant, 'the Belgian case must be separated as a dated Christian-democratic variant');
const belgianExample = christianDemocracyEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Belgium: CVP/PSC'));
assert.ok(belgianExample, 'Belgium must appear as a bounded Christian-democratic historical example');
assert.match(belgianExample.caveat, /present-day Belgian classification/);
assert.ok(christianCriticisms.some(({ text }) => text?.startsWith('The Belgian case adds a pillarization-and-internal-conflict safeguard')));
assert.ok(christianDemocracyEntry.researchGaps.some((gap) => gap.startsWith('The Belgian addition remains bounded')));
for (const [sourceId, role, date, languages] of [
  ['cdsDeclarationPrinciples1974', 'primary', '1974-07-19', ['Portuguese']],
  ['portugalConstitution1976Official', 'primary', '1976-04-02', ['Portuguese']],
  ['leitaoPortugalChristianDemocracy2013', 'secondary', '2013', ['Portuguese']],
]) {
  assert.ok(christianDemocracyEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Portuguese Christian-democratic reference trail`);
  assert.ok(JSON.stringify(christianDemocracyEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, role);
  assert.equal(record.publicationDate, date);
  assert.deepEqual(record.languages, languages);
  assert.equal(record.accessDate, '2026-09-17');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:christian-democratic']);
}
for (const [sourceId, role, date, languages, confidence] of [
  ['parliamentCdsConstitutionProject1975', 'primary', '1975', ['Portuguese'], 'high'],
  ['portugalConstitutionalRevisionsOfficial', 'contextual', null, ['English'], 'high'],
  ['cdsHistoryOfficial', 'contextual', null, ['Portuguese'], 'medium'],
  ['duartePortugueseRight2016', 'secondary', '2016-06', ['Portuguese'], 'medium'],
  ['monizBrissosReligiousPopulismPortugal2022', 'secondary', '2022', ['Portuguese', 'English'], 'medium'],
]) {
  assert.ok(christianDemocracyEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an extended Portuguese Christian-democratic reference trail`);
  assert.ok(JSON.stringify(christianDemocracyEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, role);
  assert.equal(record.publicationDate, date);
  assert.deepEqual(record.languages, languages);
  assert.equal(record.accessDate, '2026-09-18');
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:christian-democratic']);
}
const portugalHistory = christianDemocracyEntry.sections.find(({ id }) => id === 'history').timeline;
const portugalTimeline = portugalHistory.find(({ period }) => period.startsWith('1974–1989 — Portuguese'));
assert.ok(portugalTimeline, 'the Portuguese Christian-democratic transition case must remain visible');
assert.ok(portugalTimeline.citations.researchSourceIds.includes('portugalConstitution1976Official'));
assert.ok(portugalTimeline.citations.researchSourceIds.includes('parliamentCdsConstitutionProject1975'));
assert.ok(portugalTimeline.citations.researchSourceIds.includes('portugalConstitutionalRevisionsOfficial'));
const portugalVariant = christianDemocracyEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Portuguese transition-era Christian democracy'));
assert.ok(portugalVariant, 'the Portuguese case must be separated as a dated Christian-democratic variant');
const portugalExample = christianDemocracyEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Portuguese Christian-democratic'));
assert.ok(portugalExample, 'Portugal must appear as a bounded Christian-democratic historical example');
assert.match(portugalExample.caveat, /wider constituent settlement/);
assert.match(portugalExample.caveat, /religious-populist/);
assert.ok(christianCriticisms.some(({ text }) => text?.startsWith('Portugal adds a transition and attribution safeguard')));
assert.ok(christianDemocracyEntry.researchGaps.some((gap) => gap.startsWith('Read the full Portuguese CDS and PDC programmes, including the CDS July 1975 constitutional project')));
for (const [sourceId, role, date, language, confidence] of [
  ['ovpFoundation1945German', 'contextual', null, 'German', 'high'],
  ['ovpProgramme1945German', 'primary', '1945', 'German', 'medium'],
  ['corduwenerChristianDemocratDecade2023', 'secondary', '2023-08-10', 'English', 'medium'],
]) {
  assert.ok(christianDemocracyEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an Austrian Christian-democratic reference trail`);
  assert.ok(JSON.stringify(christianDemocracyEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, role);
  assert.equal(record.publicationDate, date);
  assert.deepEqual(record.languages, [language]);
  assert.equal(record.accessDate, '2026-09-17');
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:christian-democratic']);
}
const austrianHistory = christianDemocracyEntry.sections.find(({ id }) => id === 'history').timeline;
const austrianTimeline = austrianHistory.find(({ period }) => period.startsWith('April 1945: Austrian'));
assert.ok(austrianTimeline, 'the Austrian ÖVP formation case must remain visible');
assert.ok(austrianTimeline.citations.researchSourceIds.includes('ovpProgramme1945German'));
const austrianVariant = christianDemocracyEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Austrian postwar people’s-party'));
assert.ok(austrianVariant, 'the Austrian case must be separated as a dated Christian-democratic variant');
const austrianExample = christianDemocracyEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Austria: postwar ÖVP'));
assert.ok(austrianExample, 'Austria must appear as a bounded Christian-democratic historical example');
assert.match(austrianExample.caveat, /not be used as a present-day country classification/);
assert.ok(christianCriticisms.some(({ text }) => text?.startsWith('The Austrian case adds a postwar rupture-and-continuity safeguard')));
assert.ok(christianDemocracyEntry.researchGaps.some((gap) => gap.startsWith('Read the complete German text and publication history of the ÖVP')));
for (const [sourceId, role, date, languages, confidence] of [
  ['cduBerlinFoundingAppeal1945', 'primary', '1945-06-26', ['German', 'English translation'], 'high'],
  ['cduColognePrinciples1945', 'primary', '1945-07-01', ['German'], 'medium'],
  ['kasCduFoundingWestZones', 'secondary', null, ['German'], 'high'],
]) {
  assert.ok(christianDemocracyEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a German Christian-democratic founding trail`);
  assert.ok(JSON.stringify(christianDemocracyEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, role);
  assert.equal(record.publicationDate, date);
  assert.deepEqual(record.languages, languages);
  assert.equal(record.accessDate, '2026-09-17');
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:christian-democratic']);
}
const germanFoundingHistory = christianDemocracyEntry.sections.find(({ id }) => id === 'history').timeline;
const germanFoundingTimeline = germanFoundingHistory.find(({ period }) => period.startsWith('1945–1950: German'));
assert.ok(germanFoundingTimeline, 'the German Christian-democratic founding timeline case must remain visible');
assert.ok(germanFoundingTimeline.citations.researchSourceIds.includes('cduColognePrinciples1945'));
const germanFoundingVariant = christianDemocracyEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('German post-Nazi supraconfessional'));
assert.ok(germanFoundingVariant, 'the German founding case must be separated as a bounded Christian-democratic variant');
const germanFoundingExample = christianDemocracyEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('German CDU founding appeal'));
assert.ok(germanFoundingExample, 'the German founding documents must appear as a bounded historical example');
assert.match(germanFoundingExample.caveat, /do not establish complete denazification/);
assert.ok(christianCriticisms.some(({ text }) => text?.startsWith('The German founding case adds a rhetoric-and-consolidation safeguard')));
assert.ok(christianDemocracyEntry.researchGaps.some((gap) => gap.startsWith('Collate the complete German Kölner Leitsätze')));
assert.deepEqual(Object.fromEntries(Object.entries(christianDemocracyEntry.dimensionInterpretations).map(([id, { score }]) => [id, score])), { economic: -5, social: -30, authority: 20, identity: -20, foreign: 15, religion: -62 });

const frenchMonarchyEntry = ENCYCLOPEDIA_ENTRIES.monarchist;
for (const [sourceId, role, date, language] of [
  ['franceConstitution1791', 'primary', '1791-09-03', 'French'],
  ['barnaveRoyalInviolability1791', 'primary', '1791-07-15', 'French'],
  ['caianiLouisXVI2012Abstract', 'secondary', '2012', 'English'],
]) {
  assert.ok(frenchMonarchyEntry.references.researchSourceIds.includes(sourceId));
  assert.ok(JSON.stringify(frenchMonarchyEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, role);
  assert.equal(record.publicationDate, date);
  assert.deepEqual(record.languages, [language]);
  assert.equal(record.accessDate, '2026-09-16');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:monarchist']);
}
const caianiRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-caianiLouisXVI2012Abstract');
assert.equal(caianiRecord.identifiers.doi, '10.1017/CBO9781139207317');
assert.match(caianiRecord.sourceType, /abstract and metadata only/);
assert.match(caianiRecord.note, /no PDF pages/);
assert.match(caianiRecord.description, /2014 deposit and 2026 modification dates are not publication dates/);
const frenchDescription = frenchMonarchyEntry.sections.find(({ id }) => id === 'description').blocks;
assert.ok(frenchDescription.some(({ text }) => text?.includes('next two legislatures') && text.includes('original legislature')));
assert.ok(frenchDescription.some(({ text }) => text?.includes('could not dissolve') && text.includes('not evidence of effective accountability')));
const frenchHistory = frenchMonarchyEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(frenchHistory.findIndex(({ period }) => period.startsWith('15 July 1791')) < frenchHistory.findIndex(({ period }) => period.startsWith('1847')));
assert.ok(frenchMonarchyEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.includes('Only the abstract was reviewed')));
assert.ok(frenchMonarchyEntry.researchGaps.some((gap) => gap.includes('modern headnote places June dates in a July sequence')));
assert.ok(frenchMonarchyEntry.researchGaps.some((gap) => gap.includes('existing article/card differences')));
assert.deepEqual(Object.values(frenchMonarchyEntry.dimensionInterpretations).map(({ score }) => score), [-12, -48, 52, -42, -18, -52]);
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['assembleeCharterJuly1830', 'primary', '1830-08-14', ['French'], 'high'],
  ['senatRestorationChamber1814', 'secondary', null, ['French'], 'high'],
  ['laubaRestorationLegal2010', 'secondary', '2010–2011', ['French', 'English'], 'medium'],
]) {
  assert.ok(frenchMonarchyEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a French Restoration reference trail`);
  assert.ok(JSON.stringify(frenchMonarchyEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:monarchist']);
}
const frenchRestorationTimeline = frenchMonarchyEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(frenchRestorationTimeline.find(({ period }) => period.startsWith('1814–1830: Restoration Charter'))?.citations.researchSourceIds.includes('senatRestorationChamber1814'));
assert.ok(frenchRestorationTimeline.find(({ period }) => period.startsWith('14 August 1830–1848: revised Charter'))?.citations.researchSourceIds.includes('assembleeCharterJuly1830'));
const frenchRestorationVariant = frenchMonarchyEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('French Restoration and July Monarchy'));
assert.ok(frenchRestorationVariant, 'the Restoration and July Monarchy must be separated as a dated constitutional variant');
const frenchRestorationExample = frenchMonarchyEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('French Restoration and July Monarchy'));
assert.ok(frenchRestorationExample, 'the Restoration and July Monarchy must appear as a bounded historical example');
assert.match(frenchRestorationExample.caveat, /not equal citizenship/);
assert.ok(frenchMonarchyEntry.researchGaps.some((gap) => gap.startsWith('Read and collate the complete 1814 and 1830 Charters')));
assert.ok(frenchMonarchyEntry.researchGaps.some((gap) => gap.startsWith('Read Lauba’s complete legal-history study')));
assert.ok(frenchMonarchyEntry.references.researchSourceIds.includes('japanMeijiConstitution1889'));
assert.ok(JSON.stringify(frenchMonarchyEntry.sections).includes('japanMeijiConstitution1889'));
for (const [sourceId, publicationDate] of [
  ['takiiMeijiConstitutionalRevolution2023', '2023-03-25'],
  ['kokazeMeijiPoliticalSpace2011', '2011-08-30'],
]) {
  assert.ok(frenchMonarchyEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Meiji monarchism reference trail`);
  assert.ok(JSON.stringify(frenchMonarchyEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve exactly once`);
  const [record] = records;
  assert.equal(record.evidenceRole, 'secondary');
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, ['English']);
  assert.equal(record.review.confidence, 'high');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:monarchist']);
}
const meijiHistory = frenchMonarchyEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(meijiHistory.some(({ period }) => period.startsWith('1881–1890: Meiji Japan')));
const meijiVariant = frenchMonarchyEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Meiji imperial constitutional monarchy'));
assert.ok(meijiVariant, 'Meiji imperial constitutional monarchy must be a separate variant');
const meijiExample = frenchMonarchyEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Meiji Japan'));
assert.ok(meijiExample, 'Meiji Japan must appear as a bounded historical example');
assert.match(meijiExample.caveat, /not a present-day country match/);
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['japanHouseElectionLaw1889', 'primary', '1889-02-11', ['Japanese', 'English catalogue'], 'high'],
  ['youngJapanDemocracyBreakdown2024', 'secondary', '2024-03-21', ['English'], 'high'],
]) {
  assert.ok(frenchMonarchyEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Meiji monarchism reference trail`);
  assert.ok(JSON.stringify(frenchMonarchyEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve exactly once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:monarchist']);
}
assert.ok(meijiHistory.find(({ period }) => period.startsWith('1881–1890:'))?.citations.researchSourceIds.includes('japanHouseElectionLaw1889'));
assert.ok(meijiVariant.citations.researchSourceIds.includes('youngJapanDemocracyBreakdown2024'));
assert.ok(frenchMonarchyEntry.researchGaps.some((gap) => gap.startsWith('Inspect the JACAR scan and Japanese text')));
assert.deepEqual(Object.values(frenchMonarchyEntry.dimensionInterpretations).map(({ score }) => score), [-12, -48, 52, -42, -18, -52]);

for (const [sourceId, role, date, languages, confidence] of [
  ['ghdiGermanEmpireConstitution1871', 'primary', '1871-04-16', ['German', 'English translation'], 'high'],
  ['bundestagKaiserreichGerman', 'secondary', null, ['German'], 'high'],
  ['sterkenburghWilhelmIMonarchicalFederalism2021', 'secondary', '2021-11-10', ['English'], 'high'],
]) {
  assert.ok(frenchMonarchyEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a German monarchism reference trail`);
  assert.ok(JSON.stringify(frenchMonarchyEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve exactly once`);
  const [record] = records;
  assert.equal(record.evidenceRole, role);
  assert.equal(record.publicationDate, date);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:monarchist']);
}
const germanMonarchistHistory = frenchMonarchyEntry.sections.find(({ id }) => id === 'history').timeline;
const germanMonarchistTimeline = germanMonarchistHistory.find(({ period }) => period.startsWith('1871–1918: German Empire'));
assert.ok(germanMonarchistTimeline, 'the German Empire timeline case must remain visible');
assert.ok(germanMonarchistTimeline.citations.researchSourceIds.includes('ghdiGermanEmpireConstitution1871'));
const germanMonarchistVariants = frenchMonarchyEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows);
assert.ok(germanMonarchistVariants.some(({ label }) => label.startsWith('German imperial constitutional monarchy')));
const germanMonarchistExample = frenchMonarchyEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('German Empire and the Hohenzollern'));
assert.ok(germanMonarchistExample, 'the German Empire must appear as a bounded historical example');
assert.match(germanMonarchistExample.caveat, /do not establish equal citizenship/);
const germanMonarchistCriticisms = frenchMonarchyEntry.sections.find(({ id }) => id === 'criticisms').blocks.map(({ text }) => text ?? '').join(' ');
assert.match(germanMonarchistCriticisms, /The German Empire adds a safeguard/);
assert.ok(frenchMonarchyEntry.researchGaps.some((gap) => gap.startsWith('Read the complete German and English editions')));

for (const [sourceId, evidenceRole, publicationDate, languages, confidence, accessDate] of [
  ['ottomanConstitutionTurkishCourt1876', 'primary', '1876-12-23', ['Ottoman Turkish'], 'high', '2026-09-18'],
  ['toprakOttomanElections2013', 'secondary', '2013-07-26', ['Turkish', 'English abstract'], 'medium', '2026-09-18'],
  ['ahmedOttomanUlemaIslamicConstitution2026', 'secondary', '2026', ['English'], 'medium', '2026-09-18'],
  ['moreauOttomanStateConstitutionalReforms2013', 'secondary', '2013', ['French'], 'high', '2026-09-17'],
]) {
  assert.ok(frenchMonarchyEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a late Ottoman monarchism reference trail`);
  assert.ok(JSON.stringify(frenchMonarchyEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve exactly once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.deepEqual(record.languages, languages);
  assert.equal(record.accessDate, accessDate);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:monarchist'));
}
const ottomanMonarchistDescription = frenchMonarchyEntry.sections.find(({ id }) => id === 'description').blocks;
assert.ok(ottomanMonarchistDescription.some(({ text }) => text?.startsWith('The late Ottoman constitutional experiment')));
assert.ok(ottomanMonarchistDescription.some(({ text }) => text?.startsWith('The source roles in this Ottoman case are deliberately bounded')));
const ottomanMonarchistHistory = frenchMonarchyEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(ottomanMonarchistHistory.find(({ period }) => period.startsWith('1876–1909: late Ottoman constitutional monarchy'))?.citations.researchSourceIds.includes('moreauOttomanStateConstitutionalReforms2013'));
const ottomanMonarchistVariant = frenchMonarchyEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Ottoman constitutional monarchy'));
assert.ok(ottomanMonarchistVariant?.citations.researchSourceIds.includes('ottomanConstitutionTurkishCourt1876'));
const ottomanMonarchistExample = frenchMonarchyEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Late Ottoman constitutional monarchy'));
assert.ok(ottomanMonarchistExample?.citations.researchSourceIds.includes('toprakOttomanElections2013'));
const ottomanMonarchistCriticisms = frenchMonarchyEntry.sections.find(({ id }) => id === 'criticisms').blocks.map(({ text }) => text ?? '').join(' ');
assert.match(ottomanMonarchistCriticisms, /Moreau’s French synthesis/);
assert.ok(frenchMonarchyEntry.researchGaps.some((gap) => gap.startsWith('This pass adds the official Ottoman Turkish witness')));

const goldmanEntry = ENCYCLOPEDIA_ENTRIES['anarcho-communist'];
for (const [sourceId, evidenceRole, publicationDate] of [
  ['goldmanFurtherRussia1924', 'primary', '1924'],
  ['hemmingsGoldman2018', 'secondary', '2018-01'],
  ['hemmingsGoldmanInterview2018', 'secondary', '2018-04-15'],
]) {
  assert.ok(goldmanEntry.references.researchSourceIds.includes(sourceId));
  assert.ok(JSON.stringify(goldmanEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.deepEqual(record.languages, ['English']);
  assert.equal(record.accessDate, '2026-09-16');
  assert.equal(record.review.confidence, 'medium');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:anarcho-communist']);
}
const goldmanPrimary = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-goldmanFurtherRussia1924');
const hemmingsBook = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-hemmingsGoldman2018');
const hemmingsInterview = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-hemmingsGoldmanInterview2018');
assert.deepEqual(goldmanPrimary.creators, ['Emma Goldman']);
assert.match(goldmanPrimary.description, /not the transcription release date/);
assert.match(goldmanPrimary.note, /no full-volume or facsimile collation/);
assert.equal(hemmingsBook.identifiers.doi, '10.1215/9780822372257');
assert.match(hemmingsBook.note, /pp\. 4, 7–8, 35–36 and note 11 visually checked/);
assert.match(hemmingsBook.description, /speculative letters are not newly recovered primary documents/);
assert.deepEqual(hemmingsInterview.creators, ['Clare Hemmings', 'Rosemary Deller']);
assert.match(hemmingsInterview.description, /USAPP republication/);
assert.match(hemmingsInterview.note, /not two independent corroborations/);
const goldmanDescription = goldmanEntry.sections.find(({ id }) => id === 'description').blocks.find(({ text }) => text?.startsWith('Goldman’s 1924 Afterword'));
assert.match(goldmanDescription.text, /acknowledges anarchists’ organizational weaknesses/);
assert.match(goldmanDescription.text, /not a conclusive test/);
assert.match(goldmanDescription.text, /not .*a declaration of absolute nonviolence/);
const goldmanHistory = goldmanEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(goldmanHistory.findIndex(({ period }) => period.startsWith('1923–1924')) < goldmanHistory.findIndex(({ period }) => period.startsWith('1927–1930')));
const goldmanCriticisms = goldmanEntry.sections.find(({ id }) => id === 'criticisms').blocks;
assert.ok(goldmanCriticisms.some(({ text }) => text?.includes('speculative correspondence is not recovered primary testimony')));
assert.ok(goldmanCriticisms.some(({ text }) => text?.includes('unresolved or racist elements')));
assert.ok(goldmanEntry.researchGaps.some((gap) => gap.startsWith('Collate Goldman’s selected 1924 Afterword')));
assert.ok(goldmanEntry.researchGaps.some((gap) => gap.startsWith('Read Goldman’s primary writings on women')));
assert.deepEqual(Object.fromEntries(Object.entries(goldmanEntry.dimensionInterpretations).map(([id, value]) => [id, value.score])), { economic: 94, social: 58, authority: -100, identity: 70, foreign: 68, religion: 45 });

const onondagaEntry = ENCYCLOPEDIA_ENTRIES['indigenous-relational-governance'];
for (const [sourceId, evidenceRole, publicationDate] of [
  ['onondagaClanMothers', 'primary', null],
  ['onondagaChiefs', 'primary', null],
  ['onondagaSovereignty', 'primary', null],
  ['hollandLulewiczKeystone2022', 'secondary', '2022-03-11'],
]) {
  assert.ok(onondagaEntry.references.researchSourceIds.includes(sourceId));
  assert.ok(JSON.stringify(onondagaEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.deepEqual(record.languages, ['English']);
  assert.equal(record.accessDate, '2026-09-16');
  assert.equal(record.review.confidence, 'medium');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:indigenous-relational-governance']);
  if (evidenceRole === 'primary') {
    assert.deepEqual(record.creators, ['Onondaga Nation']);
    assert.match(record.rightsStatus, /community-controlled/);
  }
}
const onondagaMothersRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-onondagaClanMothers');
assert.match(onondagaMothersRecord.description, /footer year is not a publication date/);
assert.match(onondagaMothersRecord.description, /does not establish community approval/);
const keystoneRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-hollandLulewiczKeystone2022');
assert.equal(keystoneRecord.identifiers.doi, '10.3389/fpos.2022.840049');
assert.equal(keystoneRecord.creators.length, 4);
assert.match(keystoneRecord.license, /CC BY/);
assert.match(keystoneRecord.note, /extends beyond the Haudenosaunee/);
assert.match(keystoneRecord.description, /Conceptual Analysis/);
const onondagaDescription = JSON.stringify(onondagaEntry.sections.find(({ id }) => id === 'description'));
assert.match(onondagaDescription, /fourteen-chief council from the Confederacy’s fifty titles/);
assert.match(onondagaDescription, /lifetime tenure alongside removal/);
assert.match(onondagaDescription, /not the same as a direct vote of every resident/);
assert.match(onondagaDescription, /not a finding that every external government accepts/);
const onondagaCriticisms = JSON.stringify(onondagaEntry.sections.find(({ id }) => id === 'criticisms'));
assert.match(onondagaCriticisms, /not a present-day audit/);
assert.match(onondagaCriticisms, /makes no claim about influence on the United States Constitution/);
assert.match(onondagaCriticisms, /reading date must not be used as a founding date/);
assert.deepEqual(Object.fromEntries(Object.entries(onondagaEntry.dimensionInterpretations).map(([id, { score }]) => [id, score])), { economic: 38, social: 8, authority: -38, identity: 4, foreign: 34, religion: -18 });
assert.ok(onondagaEntry.researchGaps.some((gap) => gap.startsWith('Collate original treaty sheets')));
assert.ok(onondagaEntry.researchGaps.some((gap) => gap.startsWith('Review the full Te Paparahi')));
assert.ok(onondagaEntry.researchGaps.some((gap) => gap.startsWith('Seek Onondaga')));
assert.ok(onondagaEntry.researchGaps.some((gap) => gap.startsWith('Read the historical works')));

const burkeConservativeEntry = ENCYCLOPEDIA_ENTRIES.conservative;
for (const [sourceId, evidenceRole, publicationDate] of [
  ['burkeFoxIndia1783', 'primary', '1783-12-01'],
  ['collinsMercantile2019', 'secondary', '2019-07-24'],
  ['maresGlobalBurke2025', 'secondary', '2025-03-26'],
]) {
  assert.ok(burkeConservativeEntry.references.researchSourceIds.includes(sourceId));
  assert.ok(JSON.stringify(burkeConservativeEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.deepEqual(record.languages, ['English']);
  assert.equal(record.accessDate, '2026-09-16');
  assert.equal(record.review.confidence, 'medium');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:conservative']);
}
const burkeSpeechRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-burkeFoxIndia1783');
assert.match(burkeSpeechRecord.note, /Not collated with facsimiles/);
assert.match(burkeSpeechRecord.description, /speech occasion, not publication/);
assert.match(burkeSpeechRecord.description, /1887/);
const burkeCollinsRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-collinsMercantile2019');
assert.match(burkeCollinsRecord.sourceType, /abstract only/);
assert.equal(burkeCollinsRecord.identifiers.doi, '10.1017/S1053837218000354');
const burkeMaresRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-maresGlobalBurke2025');
assert.equal(burkeMaresRecord.identifiers.doi, '10.1017/S1479244325000046');
assert.match(burkeMaresRecord.license, /CC BY 4\.0/);
assert.match(burkeMaresRecord.description, /not an exhaustive literature survey/);
const burkeDescription = JSON.stringify(burkeConservativeEntry.sections.find(({ id }) => id === 'description'));
assert.match(burkeDescription, /habitual pattern/);
assert.match(burkeDescription, /abstract-level interpretation/);
const burkeCriticism = JSON.stringify(burkeConservativeEntry.sections.find(({ id }) => id === 'criticisms'));
assert.match(burkeCriticism, /not the encyclopedia’s descriptions/);
assert.match(burkeCriticism, /not from independent readings/);
assert.match(burkeCriticism, /Richard Bourke/);
assert.match(JSON.stringify(burkeConservativeEntry.sections.find(({ id }) => id === 'history')), /not evidence that its promised protections were implemented/);
assert.deepEqual(Object.fromEntries(Object.entries(burkeConservativeEntry.dimensionInterpretations).map(([id, { score }]) => [id, score])), { economic: -18, social: -72, authority: 48, identity: -62, foreign: 10, religion: -40 });
assert.ok(burkeConservativeEntry.researchGaps.some((gap) => gap.startsWith('Add French-language scholarship')));
assert.ok(burkeConservativeEntry.researchGaps.some((gap) => gap.startsWith('Review the full Englert chapter')));
assert.ok(burkeConservativeEntry.researchGaps.some((gap) => gap.startsWith('Collate the 1783 speech')));
assert.ok(burkeConservativeEntry.researchGaps.some((gap) => gap.startsWith('Read Collins in full')));
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['maistreConsiderationsFrance1796', 'primary', '1796', ['French'], 'high'],
  ['chateaubriandMonarchieCharte1816', 'primary', '1816', ['French'], 'high'],
  ['clementConservateur1996', 'secondary', '1996-12', ['French'], 'medium'],
]) {
  assert.ok(burkeConservativeEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a conservative reference trail`);
  assert.ok(JSON.stringify(burkeConservativeEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.accessDate, '2026-09-19');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:conservative']);
}
const conservativeHistory = burkeConservativeEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(conservativeHistory.some(({ period }) => period.startsWith('1796–1797:')));
assert.ok(conservativeHistory.some(({ period }) => period.startsWith('1816–1820:')));
const conservativeVariants = burkeConservativeEntry.sections.find(({ id }) => id === 'variants').blocks[0].rows;
assert.ok(conservativeVariants.find(({ label }) => label.startsWith('Counter-revolutionary'))?.citations.researchSourceIds.includes('maistreConsiderationsFrance1796'));
assert.ok(conservativeVariants.find(({ label }) => label.startsWith('Restoration charter'))?.citations.researchSourceIds.includes('chateaubriandMonarchieCharte1816'));
const conservativePeople = burkeConservativeEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries;
assert.ok(conservativePeople.find(({ name }) => name === 'Joseph de Maistre'));
assert.ok(conservativePeople.find(({ name }) => name === 'François-René de Chateaubriand'));
assert.ok(burkeConservativeEntry.researchGaps.some((gap) => gap.startsWith('Read de Maistre’s complete French text')));
assert.ok(burkeConservativeEntry.researchGaps.some((gap) => gap.startsWith('Collate Chateaubriand’s 1816 work')));

const nozickMarketEntry = ENCYCLOPEDIA_ENTRIES['libertarian-market'];
for (const [sourceId, evidenceRole, publicationDate, languages] of [
  ['nozickRectification1974UT', 'primary', '1974', ['English']],
  ['sepNozickPolitical2022', 'secondary', '2022-04-21', ['English']],
  ['coutoEntitlement2017', 'secondary', '2017-11', ['Portuguese', 'English']],
]) {
  assert.ok(nozickMarketEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a market-libertarian reference trail`);
  assert.ok(JSON.stringify(nozickMarketEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve exactly once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, 'medium');
  assert.equal(record.accessDate, '2026-09-16');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:libertarian-market']);
}
const nozickExcerpt = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-nozickRectification1974UT');
assert.match(nozickExcerpt.note, /not collated with a print edition/);
assert.match(nozickExcerpt.description, /Separate from the existing whole-work bibliography record/);
const nozickMack = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-sepNozickPolitical2022');
assert.match(nozickMack.description, /not a new 2025 revision/);
assert.match(nozickMack.canonicalUrl, /archives\/spr2025/);
const nozickCouto = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-coutoEntitlement2017');
assert.equal(nozickCouto.identifiers.doi, '10.5007/1677-2954.2017v16n2p289');
assert.match(nozickCouto.note, /pp\. 296–300, notes and references visually checked/);
assert.match(nozickCouto.description, /Vitor Guerreiro/);
assert.match(nozickCouto.description, /edition was not separately inspected/);
const nozickDescription = JSON.stringify(nozickMarketEntry.sections.find(({ id }) => id === 'description'));
assert.match(nozickDescription, /temporarily broader state action/);
assert.match(nozickDescription, /not an unconditional endorsement of Rawls/);
assert.match(nozickDescription, /incompletely specified/);
const nozickCriticism = JSON.stringify(nozickMarketEntry.sections.find(({ id }) => id === 'criticisms'));
assert.match(nozickCriticism, /Aluízio Couto/);
assert.match(nozickCriticism, /philosophical objection, not an empirical prediction/);
assert.match(nozickCriticism, /distinct from Nozick’s own conditional passage/);
assert.deepEqual(Object.fromEntries(Object.entries(nozickMarketEntry.dimensionInterpretations).map(([id, value]) => [id, value.score])), { economic: -86, social: 34, authority: -88, identity: 34, foreign: 72, religion: 55 });
assert.ok(nozickMarketEntry.researchGaps.some((gap) => gap.includes('Extend the selected Friedman reading')));
assert.ok(nozickMarketEntry.researchGaps.some((gap) => gap.includes('Collate the university-hosted Nozick excerpt')));
assert.ok(nozickMarketEntry.researchGaps.some((gap) => gap.includes('Litan, Schmidtz, Epstein and Cohen')));

const rojavaLibertarianEntry = ENCYCLOPEDIA_ENTRIES['libertarian-socialist'];
for (const [sourceId, evidenceRole, publicationDate] of [
  ['rojavaCharter2014Institute', 'primary', '2014'],
  ['hrwKurdishRule2014', 'secondary', '2014-06-19'],
  ['hammyMileyRojava2022', 'secondary', '2022-01-10'],
]) {
  assert.ok(rojavaLibertarianEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an entry reference trail`);
  assert.ok(JSON.stringify(rojavaLibertarianEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve exactly once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.review.confidence, 'medium');
  assert.equal(record.accessDate, '2026-09-16');
  assert.deepEqual(record.languages, ['English']);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:libertarian-socialist']);
}
const rojavaCharterRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-rojavaCharter2014Institute');
assert.match(rojavaCharterRecord.note, /Translator unidentified/);
assert.match(rojavaCharterRecord.note, /not silently corrected/);
assert.match(rojavaCharterRecord.description, /undated host page/);
const rojavaInvestigation = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-hrwKurdishRule2014');
assert.match(rojavaInvestigation.note, /PYD-provided primary text/);
assert.match(rojavaInvestigation.description, /November 2013.*February 2014/);
const rojavaScholarship = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-hammyMileyRojava2022');
assert.equal(rojavaScholarship.identifiers.doi, '10.3389/fpos.2021.815338');
assert.match(rojavaScholarship.description, /2018 and 2021; not a population survey/);
assert.match(rojavaScholarship.license, /CC BY/);
assert.match(rojavaScholarship.commercialUse, /third-party extracts are not separately cleared/);
const rojavaDescription = JSON.stringify(rojavaLibertarianEntry.sections.find(({ id }) => id === 'description'));
assert.match(rojavaDescription, /public wealth while protecting private property/);
assert.match(rojavaDescription, /minimum 40%.*not 50–50 parity/);
assert.match(rojavaDescription, /formal commitments, not verified outcomes/);
const rojavaExample = JSON.stringify(rojavaLibertarianEntry.sections.find(({ id }) => id === 'examples'));
assert.match(rojavaExample, /not six measured answers/);
assert.match(rojavaExample, /No new coordinates are assigned/);
assert.match(rojavaExample, /No Kurdish\/Arabic collation, later-charter comparison or claim of current applicability/);
const rojavaCriticism = JSON.stringify(rojavaLibertarianEntry.sections.find(({ id }) => id === 'criticisms'));
assert.match(rojavaCriticism, /official denials and cooperation/);
assert.match(rojavaCriticism, /excluded alleged restrictions on speech\/association and abuses against non-Kurdish communities/);
assert.match(rojavaCriticism, /critically supportive interpretation/);
assert.deepEqual(Object.fromEntries(Object.entries(rojavaLibertarianEntry.dimensionInterpretations).map(([id, value]) => [id, value.score])), { economic: 78, social: 50, authority: -75, identity: 60, foreign: 50, religion: 42 });
assert.ok(rojavaLibertarianEntry.researchGaps.some((gap) => gap.includes('religion discrepancy of +42') && gap.includes('Luxemburg')));
assert.ok(rojavaLibertarianEntry.researchGaps.some((gap) => gap.includes('Collate the 2014 Social Contract')));
assert.ok(rojavaLibertarianEntry.researchGaps.some((gap) => gap.includes('minority and opposition accounts')));

const moroccoMonarchistEntry = ENCYCLOPEDIA_ENTRIES.monarchist;
for (const [sourceId, evidenceRole, publicationDate, languages] of [
  ['moroccoConstitutionFrench2011', 'primary', '2011-07-30', ['French']],
  ['constituteMorocco2011', 'primary', '2011', ['English']],
  ['ruizMoroccoParliamentary2014', 'secondary', '2014', ['Spanish', 'English']],
  ['elMessaoudiGovernment2015', 'secondary', '2015-07-13', ['Spanish']],
]) {
  assert.ok(moroccoMonarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a monarchist reference trail`);
  assert.ok(JSON.stringify(moroccoMonarchistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve exactly once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.review.confidence, 'medium');
  assert.equal(record.accessDate, '2026-09-16');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:monarchist']);
}
const moroccoFrench = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-moroccoConstitutionFrench2011');
const moroccoEnglish = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-constituteMorocco2011');
const ruizMorocco = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-ruizMoroccoParliamentary2014');
const elMessaoudiMorocco = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-elMessaoudiGovernment2015');
assert.match(moroccoFrench.description, /29 July.*1 July 2011.*not interchangeable/);
assert.match(moroccoFrench.note, /age twenty.*eighteen.*unresolved/);
assert.match(moroccoEnglish.description, /not publication of this translation.*2012/);
assert.match(moroccoEnglish.publisher, /Jefri J\. Ruchti/);
assert.match(moroccoEnglish.license, /all rights reserved/);
assert.match(ruizMorocco.note, /Full article.*were not reviewed/);
assert.match(elMessaoudiMorocco.note, /Full displayed Spanish HTML.*sections 1–5 and notes/);
assert.equal(elMessaoudiMorocco.identifiers.doi, '10.18543/ed-63(1)-2015pp389-401');
assert.match(elMessaoudiMorocco.license, /CC BY-NC 4\.0.*commercial republication is not cleared/);
const moroccoDescription = moroccoMonarchistEntry.sections.find(({ id }) => id === 'description').blocks.map(({ text }) => text ?? '').join(' ');
const moroccoCriticisms = moroccoMonarchistEntry.sections.find(({ id }) => id === 'criticisms').blocks.map(({ text }) => text ?? '').join(' ');
assert.match(moroccoDescription, /party finishing first.*absolute majority/);
assert.match(moroccoDescription, /Council of Ministers.*distinct.*Council of Government/);
assert.match(moroccoDescription, /does not establish secular separation/);
assert.match(moroccoCriticisms, /article 19.*article 43.*Article 175/);
assert.match(moroccoCriticisms, /age twenty.*eighteen.*not collated/);
const moroccoVariant = moroccoMonarchistEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Morocco 2011:'));
assert.ok(moroccoVariant.citations.researchSourceIds.includes('ruizMoroccoParliamentary2014'));
assert.ok(moroccoVariant.citations.researchSourceIds.includes('elMessaoudiGovernment2015'));
assert.match(moroccoVariant.relation, /Arabic\/Gazette record/);
const moroccoExample = moroccoMonarchistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Morocco’s constitutional'));
assert.equal(moroccoExample.period, '2011 text; interpretations published in 2014–2015');
assert.match(moroccoExample.caveat, /does not classify present-day Morocco or its citizens/);
assert.ok(moroccoMonarchistEntry.researchGaps.some((gap) => /article 44’s conflicting.*full Ruiz Ruiz/.test(gap)));
assert.ok(moroccoMonarchistEntry.researchGaps.some((gap) => /article\/card differences/.test(gap)), 'the prior coordinate discrepancy must remain visible');

const saudiMonarchistEntry = ENCYCLOPEDIA_ENTRIES.monarchist;
for (const [sourceId, evidenceRole, publicationDate, languages] of [
  ['nasibSaudiStatePowers2013Arabic', 'secondary', '2013', ['Arabic']],
  ['alHarbiSaudiShuraReform2014', 'secondary', '2014-11', ['English']],
]) {
  assert.ok(saudiMonarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a monarchist reference trail`);
  assert.ok(JSON.stringify(saudiMonarchistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve exactly once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.review.confidence, 'medium');
  assert.equal(record.accessDate, '2026-09-19');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:monarchist']);
}
assert.ok(saudiMonarchistEntry.researchGaps.some((gap) => gap.startsWith('This pass adds Nasib’s Arabic constitutional-law analysis')));
const saudiAuthority = saudiMonarchistEntry.dimensionInterpretations.authority.citations.researchSourceIds;
assert.ok(saudiAuthority.includes('nasibSaudiStatePowers2013Arabic'));
assert.ok(saudiAuthority.includes('alHarbiSaudiShuraReform2014'));

const suezLiberationEntry = ENCYCLOPEDIA_ENTRIES['anti-colonial-liberation'];
for (const [sourceId, evidenceRole, publicationDate] of [
  ['suezNationalizationDecree1956', 'primary', '1956-07-26'],
  ['frusNasserAnnouncement1956', 'primary', '1956-07-26'],
  ['nasserCanalUsers1956', 'primary', '1956-09-15'],
  ['salemNasserHegemony2020', 'secondary', '2020-04-10'],
]) {
  assert.ok(suezLiberationEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an anti-colonial reference trail`);
  assert.ok(JSON.stringify(suezLiberationEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve exactly once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.review.confidence, 'medium');
  assert.equal(record.accessDate, '2026-09-16');
  assert.deepEqual(record.languages, ['English']);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:anti-colonial-liberation']);
}
const suezDecree = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-suezNationalizationDecree1956');
const suezTelegram = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-frusNasserAnnouncement1956');
const suezSpeech = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-nasserCanalUsers1956');
const salemSummary = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-salemNasserHegemony2020');
assert.match(suezDecree.description, /signature date, not a verified web publication or gazette date/);
assert.match(suezDecree.note, /articles I–VI.*Translator.*unidentified.*no Arabic original/);
assert.match(suezTelegram.note, /not a verbatim speech transcript or independent audit/);
assert.match(suezTelegram.description, /receipt on 27 July.*not publication of the edited volume/);
assert.match(suezSpeech.note, /pp\. 345–351.*translator is unidentified/);
assert.match(suezSpeech.description, /15 September speech is separate from the 26 July/);
assert.match(JSON.stringify(suezSpeech), /no commercial-use permission/);
assert.equal(salemSummary.identifiers.doi, '10.1017/9781108868969.003');
assert.match(salemSummary.note, /summary and metadata only.*were not reviewed/);
const suezDescription = suezLiberationEntry.sections.find(({ id }) => id === 'description').blocks.map(({ text }) => text ?? '').join(' ');
const suezCriticisms = suezLiberationEntry.sections.find(({ id }) => id === 'criticisms').blocks.map(({ text }) => text ?? '').join(' ');
assert.match(suezDescription, /not a text establishing worker ownership/);
assert.match(suezDescription, /does not make anti-imperialism synonymous with pacifism/);
assert.match(suezCriticisms, /coercive legal provision, not proof of how often it was enforced/);
assert.match(suezCriticisms, /No present-day Egyptian position or new coordinate is inferred/);
const suezTimeline = suezLiberationEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(suezTimeline.findIndex(({ period }) => period.startsWith('26 July and 15 September 1956')) < suezTimeline.findIndex(({ period }) => period.startsWith('November 1965')));
const suezExampleItems = suezLiberationEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries);
assert.match(suezExampleItems.find(({ name }) => name === 'Gamal Abdel Nasser').caveat, /not a personal six-axis score/);
assert.match(suezExampleItems.find(({ name }) => name === 'Suez Canal Company nationalization').caveat, /not proof of an entirely collectivist economy/);
assert.ok(suezLiberationEntry.researchGaps.some((gap) => /Arabic gazette.*independent records/.test(gap)));
assert.ok(suezLiberationEntry.researchGaps.some((gap) => /Salem’s full chapter.*Arabic-language scholarship/.test(gap)));

const religiousSocialistEntry = ENCYCLOPEDIA_ENTRIES['religious-socialist'];
for (const [sourceId, evidenceRole, publicationDate, confidence] of [
  ['buberPathsEnglish', 'primary', '1949', 'medium'],
  ['sepBuber2026', 'secondary', '2026-05-12', 'high'],
  ['leschBuberTheopolitics2019', 'secondary', '2018-12-11', 'medium'],
  ['syracuseBuberPaths1996', 'contextual', '1996-11', 'high'],
]) {
  assert.ok(religiousSocialistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a religious-socialist reference trail`);
  assert.ok(JSON.stringify(religiousSocialistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve exactly once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.accessDate, '2026-09-16');
  assert.deepEqual(record.languages, ['English']);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, sourceId === 'sepBuber2026'
    ? ['encyclopedia:religious-socialist', 'geography:buber-jerusalem']
    : ['encyclopedia:religious-socialist']);
}
const buberPrimary = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-buberPathsEnglish');
const buberScholarship = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-sepBuber2026');
const leschAbstract = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-leschBuberTheopolitics2019');
assert.match(buberPrimary.description, /R\. F\. C\. Hull.*separately authored 1958 introduction/);
assert.match(buberPrimary.note, /visible errors.*not collated/);
assert.match(buberScholarship.description, /substantive revision.*first published 20 April 2004/);
assert.match(leschAbstract.description, /2018 online date precedes the February 2019 issue/);
assert.match(leschAbstract.note, /Full article.*were not reviewed/);
const buberDescription = religiousSocialistEntry.sections.find(({ id }) => id === 'description').blocks.map(({ text }) => text ?? '').join(' ');
const buberCriticisms = religiousSocialistEntry.sections.find(({ id }) => id === 'criticisms').blocks.map(({ text }) => text ?? '').join(' ');
assert.match(buberDescription, /not a rule abolishing every coordinating institution/);
assert.match(buberDescription, /not proof that ancient Israel practised egalitarian socialism/);
assert.match(buberCriticisms, /advocacy, not an independent outcome study/);
assert.match(buberCriticisms, /not interchangeable with this website’s institutional label/);
assert.match(buberCriticisms, /not a collated print text or the complete 1996 book/);
assert.match(religiousSocialistEntry.scopeNote, /bounded Jewish and Shi’a Iranian comparisons, not coverage of all Jewish, Muslim/);
for (const [sourceId, evidenceRole, publicationDate, confidence, languages] of [
  ['iranicaIslamicPoliticalMovements', 'secondary', '2007-12-15', 'high', ['English']],
  ['kanaanehShariatiIslamizingSocialism2021', 'secondary', '2021', 'medium', ['English']],
  ['shariatiWorksEnglish', 'primary', null, 'low', ['English']],
  ['cambridgeShariatiGlobalMarxism2026', 'secondary', '2026-01-10', 'medium', ['English']],
]) {
  assert.ok(religiousSocialistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a religious-socialist reference trail`);
  assert.ok(JSON.stringify(religiousSocialistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve exactly once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:religious-socialist']);
}
const religiousDescription = religiousSocialistEntry.sections.find(({ id }) => id === 'description').blocks.map(({ text }) => text ?? '').join(' ');
const religiousHistory = religiousSocialistEntry.sections.find(({ id }) => id === 'history').timeline.map(({ text }) => text ?? '').join(' ');
const religiousVariants = religiousSocialistEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows);
assert.match(religiousDescription, /not interchangeable with Shariati’s pre-1979 anti-clerical revolutionary intellectual project/);
assert.match(religiousDescription, /bounded Brazilian case/);
assert.match(religiousDescription, /Baixada Fluminense/);
assert.match(religiousHistory, /pre-revolutionary Iran, Islamic-left currents/);
assert.match(religiousHistory, /Brazilian Comunidades Eclesiais de Base became/);
assert.match(religiousHistory, /CNBB’s institutional message and retrospective/);
assert.match(religiousHistory, /Emaús, CESEEP, and the National Faith and Politics Movement/);
assert.ok(religiousVariants.some(({ label }) => /Iranian Islamic revolutionary socialism/.test(label)));
assert.ok(religiousVariants.some(({ label }) => /Brazilian base-community and agrarian practice/.test(label)));
assert.ok(religiousVariants.some(({ label }) => /Brazilian liberation-theology civic network/.test(label)));
assert.match(JSON.stringify(religiousSocialistEntry), /Primary-text limit: the online Shariati collection/);
for (const [sourceId, evidenceRole, publicationDate, confidence, languages] of [
  ['celamMedellinFinalCommissions1968', 'primary', '1968', 'high', ['Spanish']],
  ['krischkeBrazilCEBDemocracy1991', 'secondary', '1991-07', 'medium', ['English']],
  ['mauesCebsAmazon2010', 'secondary', '2010', 'high', ['Portuguese']],
  ['menezesNetoMstLiberation2007', 'secondary', '2007-08', 'high', ['Portuguese', 'English abstract', 'French abstract']],
  ['meirellesCebsBaixadaFluminense2024', 'secondary', '2024-06-21', 'high', ['Portuguese', 'English abstract']],
  ['cnbbCEBsMessage2010', 'primary', '2010-05-15', 'high', ['Portuguese']],
  ['cnbbCEBsIntereclesialMemory2018', 'primary', '2018-01-24', 'medium', ['Portuguese']],
  ['freireBrazilLiberationNetwork2022', 'secondary', '2022-07-20', 'high', ['Portuguese', 'English abstract']],
  ['kairosDocument1985', 'primary', '1985', 'high', ['English']],
  ['gobaKairosLiberation1987', 'secondary', '1987', 'medium', ['English']],
  ['mahlanguKairosPropheticWitness2025', 'secondary', '2025', 'high', ['English']],
]) {
  assert.ok(religiousSocialistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a religious-socialist reference trail`);
  assert.ok(JSON.stringify(religiousSocialistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve exactly once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.accessDate, sourceId === 'freireBrazilLiberationNetwork2022' ? '2026-09-18' : '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:religious-socialist']);
}
for (const [dimensionId, score] of Object.entries({ economic: 62, social: 35, authority: 10, identity: 25, foreign: 25, religion: -75 })) {
  assert.equal(religiousSocialistEntry.dimensionInterpretations[dimensionId].score, score, `${dimensionId} score changed during the bounded Iranian research pass`);
}
const buberPerson = religiousSocialistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name === 'Martin Buber');
assert.ok(buberPerson?.citations.researchSourceIds.includes('buberPathsEnglish'));
assert.match(buberPerson.caveat, /not a six-axis score assigned to him/);
assert.ok(religiousSocialistEntry.researchGaps.some((gap) => gap.startsWith('Resolve existing article/card differences')));
assert.ok(religiousSocialistEntry.researchGaps.some((gap) => gap.startsWith('Collate the Buber transcription')));
assert.ok(religiousSocialistEntry.researchGaps.some((gap) => gap.startsWith('Compare Buber with other Jewish religious and secular socialist traditions')));
const kairosTimeline = religiousSocialistEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1985: South African Kairos Document'));
assert.ok(kairosTimeline);
assert.match(kairosTimeline.text, /contextual liberation-theology struggle/);
assert.ok(religiousVariants.some(({ label }) => /South African Kairos/.test(label)));
const kairosExample = religiousSocialistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name === 'South African Kairos Document');
assert.ok(kairosExample);
assert.match(kairosExample.caveat, /not a party manifesto/);
const religiousBrazilExample = religiousSocialistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name === 'CEBs in Baixada Fluminense during the Brazilian dictatorship');
assert.ok(religiousBrazilExample);
assert.ok(religiousBrazilExample.citations.researchSourceIds.includes('meirellesCebsBaixadaFluminense2024'));
assert.match(religiousBrazilExample.caveat, /bounded historical analysis/);
const religiousCriticisms = religiousSocialistEntry.sections.find(({ id }) => id === 'criticisms').blocks.map(({ text }) => text ?? '').join(' ');
assert.match(religiousCriticisms, /The South African Kairos case adds a different safeguard/);
assert.match(religiousCriticisms, /A second Brazilian safeguard concerns institutional memory/);
assert.ok(religiousSocialistEntry.researchGaps.some((gap) => gap.startsWith('Read the complete 1985 and 1986 Kairos editions')));
assert.ok(religiousSocialistEntry.researchGaps.some((gap) => gap.startsWith('This pass expands the bounded Brazilian CEB evidence cluster')));
assert.ok(religiousSocialistEntry.researchGaps.some((gap) => gap.startsWith('This pass adds Américo Freire’s Portuguese network history')));

for (const [sourceId, evidenceRole, publicationDate, confidence] of [
  ['katzReligiousKibbutzCredo1995', 'secondary', '1995-04', 'high'],
  ['kayeReligiousSocialistsIsrael2022', 'secondary', '2022-05', 'medium'],
  ['religiousKibbutzMovementValues', 'primary', null, 'medium'],
]) {
  assert.ok(religiousSocialistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a religious-socialist reference trail`);
  assert.ok(JSON.stringify(religiousSocialistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve exactly once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, ['English']);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:religious-socialist']);
}
const religiousKibbutzHistory = religiousSocialistEntry.sections.find(({ id }) => id === 'history').timeline;
const religiousKibbutzTimeline = religiousKibbutzHistory.find(({ period }) => period.startsWith('1935–1948: Religious Kibbutz'));
assert.ok(religiousKibbutzTimeline, 'the religious-kibbutz timeline case must remain visible');
assert.ok(religiousKibbutzTimeline.citations.researchSourceIds.includes('katzReligiousKibbutzCredo1995'));
assert.ok(religiousVariants.some(({ label }) => label.startsWith('Religious kibbutz socialism')));
const religiousKibbutzExample = religiousSocialistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Religious Kibbutz Movement'));
assert.ok(religiousKibbutzExample, 'the religious-kibbutz case must appear as a bounded example');
assert.match(religiousKibbutzExample.caveat, /does not establish equal practice/);
assert.ok(religiousCriticisms.includes('The religious-kibbutz case adds a safeguard'));
assert.ok(religiousSocialistEntry.researchGaps.some((gap) => gap.startsWith('Read Katz and Kaye in full')));

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
for (const [sourceId, evidenceRole, publicationDate, confidence] of [
  ['locSelassieSpeech1936', 'primary', '1936-06-30', 'high'],
  ['braukamperIndigenousViews2011', 'secondary', '2011', 'high'],
  ['abebeNorthShewaResistance2016', 'secondary', '2016', 'medium'],
  ['seyoumEthiopianResistance2020', 'secondary', '2020', 'medium'],
]) {
  assert.ok(ethiopiaEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an Ethiopian research trail`);
  assert.ok(JSON.stringify(ethiopiaEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve to one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, ['English']);
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
assert.ok(ethiopiaEntry.sections.find(({ id }) => id === 'history').timeline.some(({ period, citations }) => period.startsWith('1936–1941 — Ethiopian resistance') && citations.researchSourceIds.includes('seyoumEthiopianResistance2020')));
assert.ok(ethiopiaEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).some(({ label, citations }) => label.startsWith('Ethiopian resistance and locally differentiated') && citations.researchSourceIds.includes('braukamperIndigenousViews2011')));
assert.ok(ethiopiaEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text, citations }) => text?.startsWith('Consultation limits: the appeal') && citations.researchSourceIds.includes('locSelassieSpeech1936')));
assert.ok(ethiopiaEntry.researchGaps.some((gap) => gap.startsWith('Collate the Library of Congress item')));
assert.ok(ethiopiaEntry.researchGaps.some((gap) => gap.startsWith('Extend Ethiopian evidence')));
assert.ok(ethiopiaEntry.researchGaps.some((gap) => gap.startsWith('Read Baer’s full article and Italian')));

const ottomanMilitarismEntry = ENCYCLOPEDIA_ENTRIES['militarist-imperialist'];
for (const [sourceId, evidenceRole, publicationDate, confidence, accessDate] of [
  ['ottomanConstitution1876', 'primary', '1876-12-26', 'high', '2026-09-17'],
  ['tbmmOttomanConstitutionHistory', 'secondary', null, 'high', '2026-09-17'],
  ['kayaliOttomanElections1919', 'secondary', '1995-08-01', 'high', '2026-09-17'],
  ['isikselAuthoritarianConstitutionalism2013', 'secondary', '2013-07-01', 'high', '2026-09-17'],
  ['endelmanOttoman2018', 'secondary', '2018-03-28', 'medium', '2026-09-16'],
]) {
  assert.ok(ottomanMilitarismEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an Ottoman militarism reference trail`);
  assert.ok(JSON.stringify(ottomanMilitarismEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve to one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, accessDate);
  assert.deepEqual(record.languages, ['English']);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:militarist-imperialist'), `${sourceId} needs a militarist-imperialist backlink`);
}
const ottomanMilitarismHistory = ottomanMilitarismEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(ottomanMilitarismHistory.some(({ period }) => period.startsWith('1826–1909 — Ottoman military reform')));
const ottomanMilitarismVariant = ottomanMilitarismEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Late Ottoman constitutional-imperial militarism'));
assert.ok(ottomanMilitarismVariant, 'the Ottoman case must be separated as a constitutional-imperial variant');
const ottomanMilitarismExample = ottomanMilitarismEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('The late Ottoman Empire is a bounded example'));
assert.ok(ottomanMilitarismExample, 'the late Ottoman case must appear as a bounded historical example');
const ottomanPeople = ottomanMilitarismEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries;
assert.ok(ottomanPeople.some(({ name }) => name.startsWith('Midhat Pasha')));
assert.ok(ottomanPeople.some(({ name }) => name.startsWith('Young Ottoman reformers')));
const ottomanMilitarismSafeguard = ottomanMilitarismEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('The late Ottoman case adds a safeguard'));
assert.ok(ottomanMilitarismSafeguard, 'the Ottoman case must add a constitutionalism-versus-militarism safeguard');
assert.ok(ottomanMilitarismEntry.researchGaps.some((gap) => gap.startsWith('Collate the Ottoman Turkish')));

const imperialJapanEntry = ENCYCLOPEDIA_ENTRIES['militarist-imperialist'];
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['japanMeijiConstitution1889', 'primary', '1889-02-11', ['English', 'Japanese'], 'high'],
  ['jacarTaiwanGovernorGeneral1895', 'primary', '1895', ['Japanese'], 'high'],
  ['jacarKoreaAnnexation1910', 'primary', '1910-08-22', ['English', 'Japanese'], 'medium'],
  ['pidaReeseImperialJapan2026', 'secondary', '2026-06-02', ['English'], 'medium'],
  ['shiraneImperialGateway2022', 'secondary', '2022', ['English'], 'medium'],
]) {
  assert.ok(imperialJapanEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an Imperial Japan reference trail`);
  assert.ok(JSON.stringify(imperialJapanEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve to one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  const expectedProfileEntries = ['japanMeijiConstitution1889', 'pidaReeseImperialJapan2026'].includes(sourceId)
    ? ['encyclopedia:monarchist', 'encyclopedia:militarist-imperialist']
    : ['encyclopedia:militarist-imperialist'];
  assert.deepEqual(record.relationships.profileEntries, expectedProfileEntries);
}
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['koreaAnnexationKoreanManuscript1910', 'primary', '1910-08-22', ['Korean'], 'high'],
  ['koreaAnnexationJapaneseArchive1910', 'primary', '1910-08-29', ['Japanese'], 'high'],
  ['kimAnnexationTreatyNonexistence2011', 'secondary', '2011', ['Korean', 'English'], 'medium'],
]) {
  assert.ok(imperialJapanEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Korean annexation reference trail`);
  assert.ok(JSON.stringify(imperialJapanEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve to one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:militarist-imperialist']);
}
const japanTimeline = imperialJapanEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(japanTimeline.find(({ period }) => period.startsWith('1889–1910 — Imperial Japan')));
assert.ok(japanTimeline.find(({ period }) => period.startsWith('1895–1945 — Colonial Taiwan')));
assert.ok(japanTimeline.find(({ period }) => period.startsWith('1905–1910 — Korean sovereignty')));
const japanVariant = imperialJapanEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Imperial Japanese constitutional militarism'));
assert.ok(japanVariant, 'Imperial Japan must be separated as a dated constitutional-military variant');
const koreaVariant = imperialJapanEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Japanese annexation of Korea'));
assert.ok(koreaVariant, 'the Korean annexation must be separated as a contested legal-imperial variant');
const japanExample = imperialJapanEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('Imperial Japan is a bounded example'));
assert.ok(japanExample, 'Imperial Japan must appear as a bounded historical example');
assert.match(japanExample.text, /not an exact six-axis match/);
const koreaExample = imperialJapanEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('The Korea annexation case should be read'));
assert.ok(koreaExample, 'the Korean annexation must appear as a bounded evidence example');
const koreaPeople = imperialJapanEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries;
assert.ok(koreaPeople.some(({ name }) => name.startsWith('Yi Wan-yong and Terauchi Masatake')));
assert.ok(koreaPeople.some(({ name }) => name.startsWith('Kim Myung-Ki')));
const japanSafeguard = imperialJapanEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('The Imperial Japanese case adds a safeguard question'));
assert.ok(japanSafeguard, 'Imperial Japan must add a civil–military accountability caution');
assert.match(japanSafeguard.text, /not a monocausal explanation/);
assert.ok(imperialJapanEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The Korea annexation case adds a legal-form')));
assert.deepEqual(Object.fromEntries(Object.entries(imperialJapanEntry.dimensionInterpretations).map(([id, value]) => [id, value.score])), { economic: -12, social: -45, authority: 75, identity: -88, foreign: -92, religion: -18 });
assert.ok(imperialJapanEntry.researchGaps.some((gap) => gap.startsWith('Collate the Japanese original')));
assert.ok(imperialJapanEntry.researchGaps.some((gap) => gap.startsWith('Read the complete Korea annexation treaty')));
assert.ok(imperialJapanEntry.researchGaps.some((gap) => gap.startsWith('Extend the Taiwan case')));
for (const [sourceId, evidenceRole, publicationDate, language, confidence] of [
  ['treatyParisPhilippines1898', 'primary', '1898-12-10', 'English', 'high'],
  ['usStatePhilippineWar1899', 'secondary', '2013-02-26', 'English', 'medium'],
  ['malolosConstitution1899', 'primary', '1899-01-20', 'English', 'medium'],
  ['dioknoPeacePhilippineWar1997', 'secondary', '1997-03', 'English', 'medium'],
  ['charbonneauColonizingWorkers2021', 'secondary', '2021-03-29', 'English', 'high'],
  ['laffertyPhilippineBases2023', 'secondary', '2023', 'English', 'medium'],
]) {
  assert.ok(imperialJapanEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Philippines reference trail`);
  assert.ok(JSON.stringify(imperialJapanEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, [language]);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:militarist-imperialist']);
}
const philippinesTimeline = imperialJapanEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(philippinesTimeline.some(({ period }) => period.startsWith('1898–1914 — U.S. conquest')));
assert.ok(philippinesTimeline.some(({ period }) => period.startsWith('1898–1902 — Malolos constitutionalism')));
const philippinesVariant = imperialJapanEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('U.S. Philippine colonial militarism'));
assert.ok(philippinesVariant, 'Philippine colonial militarism must be a separate bounded variant');
const malolosVariant = imperialJapanEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Filipino anti-colonial constitutional defense'));
assert.ok(malolosVariant, 'the Malolos constitutional project must remain a distinct counter-position');
const philippinesExample = imperialJapanEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('The U.S. Philippines case'));
assert.ok(philippinesExample, 'Philippine case must appear as a bounded example');
assert.match(philippinesExample.text, /not an exact six-axis match/);
const malolosExample = imperialJapanEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('The Malolos constitutional project is a bounded'));
assert.ok(malolosExample, 'the Malolos constitutional project must appear as a bounded example');
assert.ok(imperialJapanEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The Philippine case adds a safeguard')));
assert.ok(imperialJapanEntry.researchGaps.some((gap) => gap.startsWith('Collate Philippine, Spanish, and U.S. primary records')));
assert.ok(imperialJapanEntry.researchGaps.some((gap) => gap.startsWith('Read the Malolos Constitution in its original Spanish')));

for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['actoColonial1930Portugal', 'primary', '1930-07-08', ['Portuguese'], 'high'],
  ['portugalConstitution1933', 'primary', '1933-02-22', ['Portuguese'], 'high'],
  ['casteloLusoTropicalistMessage2017', 'secondary', '2017', ['English'], 'high'],
  ['fonsecaMarcosPortugueseWar2008', 'secondary', '2008', ['English'], 'high'],
  ['marquesEstadoNovoONU2011', 'secondary', '2011', ['Portuguese'], 'medium'],
]) {
  assert.ok(imperialJapanEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Portuguese-case reference trail`);
  assert.ok(JSON.stringify(imperialJapanEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:militarist-imperialist']);
}
const estadoNovoTimeline = imperialJapanEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(estadoNovoTimeline.some(({ period }) => period.startsWith('1930–1974 — Portuguese Estado Novo')));
const estadoNovoVariant = imperialJapanEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Portuguese Estado Novo colonial militarism'));
assert.ok(estadoNovoVariant, 'Portuguese Estado Novo colonial militarism must be a separate bounded variant');
const estadoNovoExample = imperialJapanEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('The Portuguese Estado Novo is a bounded'));
assert.ok(estadoNovoExample, 'Portuguese Estado Novo must appear as a bounded example');
assert.match(estadoNovoExample.text, /not an exact six-axis match/);
const estadoNovoPerson = imperialJapanEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries.find(({ name }) => name.startsWith('António de Oliveira Salazar'));
assert.ok(estadoNovoPerson, 'Salazar must appear with a bounded evidence caveat');
const estadoNovoSafeguard = imperialJapanEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('The Portuguese case adds a safeguard'));
assert.ok(estadoNovoSafeguard, 'Portuguese case must add an imperial self-description safeguard');
assert.ok(imperialJapanEntry.researchGaps.some((gap) => gap.startsWith('Collate the Portuguese, Angolan, Guinean, and Mozambican')));

const germanSouthWestAfricaEntry = ENCYCLOPEDIA_ENTRIES['militarist-imperialist'];
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['ghdiVonTrothaExterminationOrder1904', 'primary', '1904-10-02', ['German'], 'high'],
  ['dhmHereroWar1904', 'secondary', '2016', ['German'], 'high'],
  ['zimmererColonialGenocide2008', 'secondary', '2008', ['English'], 'medium'],
]) {
  assert.ok(germanSouthWestAfricaEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a German colonial reference trail`);
  assert.ok(JSON.stringify(germanSouthWestAfricaEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:militarist-imperialist']);
}
const germanSouthWestAfricaHistory = germanSouthWestAfricaEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(germanSouthWestAfricaHistory.some(({ period, citations }) => period.startsWith('1884–1915 — German South West Africa') && citations.researchSourceIds.includes('ghdiVonTrothaExterminationOrder1904')));
const germanSouthWestAfricaVariant = germanSouthWestAfricaEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('German settler-colonial militarism'));
assert.ok(germanSouthWestAfricaVariant, 'German South West Africa must be a separate bounded colonial variant');
const germanSouthWestAfricaExample = germanSouthWestAfricaEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('German South West Africa shows why'));
assert.ok(germanSouthWestAfricaExample, 'German South West Africa must appear as a bounded historical example');
assert.match(germanSouthWestAfricaExample.text, /not an exact six-axis match/);
const vonTrothaPerson = germanSouthWestAfricaEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries.find(({ name }) => name.startsWith('Lothar von Trotha'));
assert.ok(vonTrothaPerson, 'von Trotha must appear with a bounded commander-order caveat');
assert.match(vonTrothaPerson.caveat, /not every implementation decision/);
const germanSouthWestAfricaSafeguard = germanSouthWestAfricaEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('The German South West Africa case adds a safeguard'));
assert.ok(germanSouthWestAfricaSafeguard, 'German South West Africa must add an archival-order safeguard');
assert.match(germanSouthWestAfricaSafeguard.text, /No causal continuity with Nazism/);
assert.ok(germanSouthWestAfricaEntry.researchGaps.some((gap) => gap.startsWith('Extend the German South West Africa case')));

for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['indiaGovernmentAct1858', 'primary', '1858-08-02', ['English'], 'high'],
  ['bender1857Uprising2016', 'secondary', '2016', ['English'], 'high'],
  ['downsBengalMartialLaw2022', 'secondary', '2022', ['English'], 'high'],
  ['welschCompanySword2022', 'secondary', '2022', ['English'], 'high'],
  ['buckleyNativeTroops2010', 'secondary', '2010', ['English'], 'medium'],
]) {
  assert.ok(germanSouthWestAfricaEntry.references.researchSourceIds.includes(sourceId), sourceId + ' needs an Indian colonial reference trail');
  assert.ok(JSON.stringify(germanSouthWestAfricaEntry.sections).includes(sourceId), sourceId + ' needs claim-level use');
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, sourceId + ' must resolve once');
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-18');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:militarist-imperialist']);
}
const indianColonialHistory = germanSouthWestAfricaEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(indianColonialHistory.some(({ period, citations }) => period.startsWith('1857–1858 — Indian uprising') && citations.researchSourceIds.includes('indiaGovernmentAct1858')));
const indianColonialVariant = germanSouthWestAfricaEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('British Indian Company–Crown militarism'));
assert.ok(indianColonialVariant, 'British Indian Company–Crown militarism must be a separate bounded variant');
const indianColonialExample = germanSouthWestAfricaEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('British India from the 1857 uprising'));
assert.ok(indianColonialExample, 'British India must appear as a bounded historical example');
assert.match(indianColonialExample.text, /one uniform ideology or score/);
const indianColonialPerson = germanSouthWestAfricaEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries.find(({ name }) => name.startsWith('Indian sepoys'));
assert.ok(indianColonialPerson, 'Indian sepoys must appear with a bounded agency caveat');
const indianColonialSafeguard = germanSouthWestAfricaEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('The British India case adds a safeguard'));
assert.ok(indianColonialSafeguard, 'British India must add a colonial-transfer safeguard');
assert.match(indianColonialSafeguard.text, /as decolonization/);

for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['usHistorianLibyaSovereignty1912', 'primary', '1912-12-05', ['English'], 'high'],
  ['frusLibyaPeaceTreaty1912', 'primary', '1912-10-18', ['English', 'Italian document translated or summarized'], 'high'],
  ['locTreatyLausanneLibya1912', 'primary', '1912-10-18', ['English translation'], 'high'],
  ['benmaizaOuchyLibya2025Arabic', 'secondary', '2025', ['Arabic', 'English abstract'], 'medium'],
  ['ryanLibyaPrestige2015', 'secondary', '2015-05', ['English'], 'medium'],
  ['ahmidaLibyanGenocide2020', 'secondary', '2020', ['English'], 'medium'],
  ['treccaniGrazianiLibya2001', 'secondary', '2001', ['Italian'], 'high'],
]) {
  assert.ok(germanSouthWestAfricaEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an Italian Libya reference trail`);
  assert.ok(JSON.stringify(germanSouthWestAfricaEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-18');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:militarist-imperialist']);
}
for (const [sourceId, evidenceRole, publicationDate, languages, confidence, publicationStatus] of [
  ['diPasqualeLibyansItaly2018', 'secondary', '2018-06-11', ['English', 'Italian sources discussed'], 'high', 'link-only'],
  ['vandewalleLibyaFourthShore2012', 'secondary', '2012', ['English'], 'medium', 'link-only'],
  ['tarchiMabruchismo2021', 'secondary', '2021-06-04', ['English', 'Italian sources discussed'], 'high', 'allowed-with-attribution'],
  ['raineroOmarMukhtar1988French', 'secondary', '1988', ['French'], 'medium', 'link-only'],
  ['ghuaitaKufraOccupation1931Arabic', 'secondary', '2017', ['Arabic'], 'medium', 'link-only'],
]) {
  assert.ok(germanSouthWestAfricaEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a multilingual Italian Libya reference trail`);
  assert.ok(JSON.stringify(germanSouthWestAfricaEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-18');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, publicationStatus);
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:militarist-imperialist']);
}
const libyaHistory = germanSouthWestAfricaEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(libyaHistory.some(({ period, citations }) => period.startsWith('1911–1934 — Italian conquest') && citations.researchSourceIds.includes('usHistorianLibyaSovereignty1912')));
const libyaVariant = germanSouthWestAfricaEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Italian Fascist settler-colonial militarism'));
assert.ok(libyaVariant, 'Italian Libya must be a separate bounded colonial variant');
const libyaExample = germanSouthWestAfricaEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('Italian Libya is a bounded'));
assert.ok(libyaExample, 'Italian Libya must appear as a bounded historical example');
assert.match(libyaExample.text, /not an exact six-axis match/);
const libyaPeople = germanSouthWestAfricaEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries;
assert.ok(libyaPeople.some(({ name }) => name.startsWith('ʿUmar al-Mukhtār')));
assert.ok(libyaPeople.some(({ name }) => name.startsWith('Rodolfo Graziani')));
const libyaSafeguard = germanSouthWestAfricaEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('The Italian Libya case adds a periodization'));
assert.ok(libyaSafeguard, 'Italian Libya must add a source-balance safeguard');
assert.match(libyaSafeguard.text, /single casualty count/);
assert.ok(germanSouthWestAfricaEntry.researchGaps.some((gap) => gap.startsWith('The Italian Libya case now includes')));

for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['haitiAmericanConvention1915', 'primary', '1915-09-16', ['English', 'French'], 'high'],
  ['haitiOccupationStateHistorian1915', 'secondary', null, ['English'], 'high'],
  ['rendaTakingHaiti2001', 'secondary', '2001', ['English'], 'medium'],
  ['reichardtHaitiPublicHealth2019', 'secondary', '2019-12-19', ['English'], 'high'],
  ['castorHaitiOccupation1974', 'secondary', '1974', ['English translation', 'French publication context'], 'medium'],
  ['blancpainHaitiOccupation1999', 'secondary', '1999', ['French'], 'medium'],
]) {
  assert.ok(germanSouthWestAfricaEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Haiti occupation reference trail`);
  assert.ok(JSON.stringify(germanSouthWestAfricaEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-18');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:militarist-imperialist']);
}
const haitiHistory = germanSouthWestAfricaEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(haitiHistory.some(({ period, citations }) => period.startsWith('1915–1934 — U.S. occupation of Haiti') && citations.researchSourceIds.includes('haitiAmericanConvention1915')));
const haitiVariant = germanSouthWestAfricaEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('U.S. occupation of Haiti'));
assert.ok(haitiVariant, 'Haiti must be a separate bounded colonial variant');
const haitiExample = germanSouthWestAfricaEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('The U.S. occupation of Haiti'));
assert.ok(haitiExample, 'Haiti must appear as a bounded historical example');
assert.match(haitiExample.text, /not an exact six-axis match/);
const haitiPeople = germanSouthWestAfricaEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries;
assert.ok(haitiPeople.some(({ name }) => name.startsWith('Charlemagne Péralte')));
const haitiSafeguard = germanSouthWestAfricaEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('The Haitian occupation adds a safeguard'));
assert.ok(haitiSafeguard, 'Haiti must add a treaty-and-development safeguard');
assert.match(haitiSafeguard.text, /equal partnership/);
assert.ok(germanSouthWestAfricaEntry.researchGaps.some((gap) => gap.startsWith('The Haiti case remains bounded')));

for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['tocquevilleAlgeria1841French', 'primary', '1841', ['French'], 'medium'],
  ['tocquevilleAfricaReport1847French', 'primary', '1847-05-28', ['French'], 'medium'],
  ['algeriaSenatusConsulte1865', 'primary', '1865-07-14', ['French'], 'high'],
  ['algeriaCremieuxDecrees1870', 'primary', '1870-10-24', ['French'], 'high'],
  ['immigrationMuseumColonialStatus', 'secondary', null, ['French'], 'high'],
  ['duongTocquevilleAlgeria2018', 'secondary', '2018-01-31', ['English'], 'medium'],
  ['pittsAlgerianMirror2009', 'secondary', '2009-08-01', ['English'], 'medium'],
]) {
  assert.ok(imperialJapanEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a French Algeria reference trail`);
  assert.ok(JSON.stringify(imperialJapanEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-16');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:militarist-imperialist'));
}
{
  const sourceId = 'surkisPropertyPolygamyAlgeria2010French';
  assert.ok(imperialJapanEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a French Algeria reference trail`);
  assert.ok(JSON.stringify(imperialJapanEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, 'secondary');
  assert.equal(record.publicationDate, '2010-12-15');
  assert.equal(record.accessDate, '2026-09-19');
  assert.deepEqual(record.languages, ['French']);
  assert.equal(record.review.confidence, 'medium');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:militarist-imperialist'));
}
const algeriaTimeline = imperialJapanEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(algeriaTimeline.some(({ period, citations }) => period.startsWith('1830–1870 — French conquest') && citations.researchSourceIds.includes('tocquevilleAlgeria1841French')));
assert.ok(algeriaTimeline.some(({ period, citations }) => period.startsWith('1830–1873 — personal status') && citations.researchSourceIds.includes('surkisPropertyPolygamyAlgeria2010French')));
const algeriaVariant = imperialJapanEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('French settler-colonial imperialism'));
assert.ok(algeriaVariant, 'French Algeria must be separated as a bounded colonial variant');
const algeriaStatusVariant = imperialJapanEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Algerian colonial personal-status law'));
assert.ok(algeriaStatusVariant?.citations.researchSourceIds.includes('surkisPropertyPolygamyAlgeria2010French'), 'Algerian personal-status variant needs Surkis');
const algeriaExample = imperialJapanEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('French Algeria is a bounded example'));
assert.ok(algeriaExample, 'French Algeria must appear as a bounded historical example');
assert.match(algeriaExample.text, /not an exact six-axis match/);
const algeriaStatusExample = imperialJapanEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('The Algerian personal-status subcase'));
assert.ok(algeriaStatusExample?.citations.researchSourceIds.includes('surkisPropertyPolygamyAlgeria2010French'), 'Algerian personal-status example needs Surkis');
const tocquevillePerson = imperialJapanEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries.find(({ name }) => name.startsWith('Alexis de Tocqueville'));
assert.ok(tocquevillePerson, 'Tocqueville must appear with a bounded colonial evidence caveat');
assert.match(tocquevillePerson.caveat, /not Tocqueville’s complete political thought/);
const algeriaSafeguard = imperialJapanEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('French Algeria adds a safeguard'));
assert.ok(algeriaSafeguard, 'French Algeria must add a liberal-universalism safeguard');
assert.match(algeriaSafeguard.text, /rather than a single equal civic order/);
const algeriaStatusSafeguard = imperialJapanEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('Surkis adds a gendered legal safeguard'));
assert.ok(algeriaStatusSafeguard?.citations.researchSourceIds.includes('surkisPropertyPolygamyAlgeria2010French'), 'Algerian status safeguard needs Surkis');
assert.ok(imperialJapanEntry.researchGaps.some((gap) => gap.startsWith('This pass adds Judith Surkis')));

const liberalEntry = ENCYCLOPEDIA_ENTRIES['liberal-constitutionalist'];
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['assembleeThirdRepublicLaws1875', 'primary', '1875', ['French'], 'high'],
  ['assembleeThirdRepublicCrisis1877', 'secondary', '1877-05-16', ['French'], 'high'],
  ['rousseillierLiberalismInstitutions2002', 'secondary', '2002', ['French'], 'high'],
  ['dobuzinskisFrenchThirdRepublic2008', 'secondary', '2008-07-01', ['English'], 'high'],
  ['bochkarevFrenchThirdRepublicRights2015', 'secondary', '2015-06-30', ['English'], 'medium'],
]) {
  assert.ok(liberalEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a French Third Republic reference trail`);
  assert.ok(JSON.stringify(liberalEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:liberal-constitutionalist']);
}
const thirdRepublicTimeline = liberalEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(thirdRepublicTimeline.some(({ period }) => period.startsWith('1875–1940 — French Third Republic')));
const thirdRepublicVariant = liberalEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('French Third Republic parliamentary liberalism'));
assert.ok(thirdRepublicVariant, 'French Third Republic parliamentary liberalism must be a separate bounded variant');
const thirdRepublicExample = liberalEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('The French Third Republic is a bounded'));
assert.ok(thirdRepublicExample, 'French Third Republic must appear as a bounded example');
assert.match(thirdRepublicExample.text, /not an exact six-axis match/);
const thirdRepublicSafeguard = liberalEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('The French Third Republic makes that contradiction'));
assert.ok(thirdRepublicSafeguard, 'French Third Republic must add an equal-citizenship safeguard');
assert.ok(liberalEntry.researchGaps.some((gap) => gap.startsWith('Read the full French constitutional laws of 1875')));

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
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['congresoCadizConstitution1812', 'primary', '1812-03-19', ['Spanish'], 'high'],
  ['ucaCadizOaths2024', 'contextual', '2024-12-19', ['Spanish'], 'medium'],
  ['amoresCadizCuba2014', 'secondary', '2014', ['Spanish'], 'medium'],
  ['varelaCadizLiberalism1987', 'secondary', '1987-04-01', ['Spanish'], 'medium'],
  ['perezLunoCadizRights2015', 'secondary', '2015-01-08', ['Spanish'], 'medium'],
]) {
  assert.ok(weimarEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Cádiz constitutionalist reference trail`);
  assert.ok(JSON.stringify(weimarEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:monarchist', 'encyclopedia:liberal-constitutionalist']);
}
for (const [sourceId, publicationDate, languages, confidence] of [
  ['chustFrasquetSovereignty1812', '2003-01-01', ['Spanish'], 'high'],
  ['aguilarRiveraCadizAtlantic2014', '2014', ['Spanish', 'English abstract'], 'medium'],
]) {
  assert.ok(weimarEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Cádiz constitutionalist reference trail`);
  assert.ok(JSON.stringify(weimarEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, 'secondary');
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-18');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:monarchist', 'encyclopedia:liberal-constitutionalist']);
}
const cadizTimeline = weimarEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1812–1823'));
assert.ok(cadizTimeline, 'the Cádiz constitutional timeline case must remain visible');
assert.ok(cadizTimeline.citations.researchSourceIds.includes('congresoCadizConstitution1812'));
const cadizSovereigntyTimeline = weimarEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1810–1812: Cádiz'));
assert.ok(cadizSovereigntyTimeline, 'the Cádiz sovereignty timeline case must remain visible');
assert.ok(cadizSovereigntyTimeline.citations.researchSourceIds.includes('chustFrasquetSovereignty1812'));
const cadizAtlanticTimeline = weimarEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1812: Cádiz within'));
assert.ok(cadizAtlanticTimeline, 'the Cádiz Atlantic-cycle timeline case must remain visible');
assert.ok(cadizAtlanticTimeline.citations.researchSourceIds.includes('aguilarRiveraCadizAtlantic2014'));
const cadizImplementationTimeline = weimarEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1812–1814: local promulgation'));
assert.ok(cadizImplementationTimeline, 'the local Cádiz implementation timeline case must remain visible');
assert.ok(cadizImplementationTimeline.citations.researchSourceIds.includes('ucaCadizOaths2024'));
assert.ok(cadizImplementationTimeline.citations.researchSourceIds.includes('amoresCadizCuba2014'));
const cadizVariant = weimarEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Cádiz-style transatlantic'));
assert.ok(cadizVariant, 'the Cádiz case must be separated as a dated constitutional variant');
const cadizImplementationVariant = weimarEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Cádiz local and transatlantic implementation'));
assert.ok(cadizImplementationVariant, 'the local Cádiz implementation must be separated as a bounded variant');
const cadizExample = weimarEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('The Cádiz Constitution is a bounded'));
assert.ok(cadizExample, 'Cádiz must appear as a bounded historical example');
assert.match(cadizExample.text, /treated as synonymous with socially progressive/);
const cadizLocalExample = weimarEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('The local and Cuban record supplies'));
assert.ok(cadizLocalExample, 'the local Cádiz implementation must appear as a bounded example');
assert.match(cadizLocalExample.text, /not an exact six-axis match/);
assert.ok(weimarEntry.researchGaps.some((gap) => gap.startsWith('Read and collate the complete Spanish Cádiz Constitution')));
assert.ok(weimarEntry.researchGaps.some((gap) => gap.startsWith('Read Varela Suanzes-Carpegna')));
assert.ok(weimarEntry.researchGaps.some((gap) => gap.startsWith('Read the Márquez Fernández thesis')));
assert.deepEqual(Object.fromEntries(Object.entries(weimarEntry.dimensionInterpretations).map(([id, { score }]) => [id, score])), { economic: -30, social: 25, authority: -65, identity: 25, foreign: 35, religion: 55 });
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['brazilConstitution1988', 'primary', '1988-10-05', ['Portuguese'], 'high'],
  ['dallariBrazilFundamentalRights1993', 'secondary', '1993', ['Portuguese', 'English'], 'medium'],
  ['delgadoBrazilSocialRights2000', 'secondary', '2000', ['Portuguese'], 'medium'],
  ['ramosBrazilJudicialReview2007', 'secondary', '2007', ['Portuguese', 'English'], 'medium'],
  ['brittoBrazilCapabilities2021', 'secondary', '2021', ['Portuguese', 'English'], 'medium'],
]) {
  assert.ok(weimarEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Brazilian constitutionalist reference trail`);
  assert.ok(JSON.stringify(weimarEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  const expectedBrazilianProfiles = sourceId === 'brazilConstitution1988'
    ? ['encyclopedia:indigenous-relational-governance', 'encyclopedia:liberal-constitutionalist']
    : ['encyclopedia:liberal-constitutionalist'];
  assert.deepEqual([...record.relationships.profileEntries].sort(), expectedBrazilianProfiles.sort());
}
const brazilTimeline = weimarEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1980s–1988:'));
assert.ok(brazilTimeline, 'the Brazilian constitutional timeline case must remain visible');
assert.ok(brazilTimeline.citations.researchSourceIds.includes('brazilConstitution1988'));
const brazilVariant = weimarEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Brazilian post-authoritarian'));
assert.ok(brazilVariant, 'the Brazilian case must be separated as a constitutional variant');
const brazilExample = weimarEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('Brazil’s 1988 Constitution is a bounded'));
assert.ok(brazilExample, 'Brazil must appear as a bounded historical example');
assert.match(brazilExample.text, /not an exact six-axis match/);
assert.ok(weimarEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('Brazil’s 1988 settlement makes the implementation problem')));
assert.ok(weimarEntry.researchGaps.some((gap) => gap.startsWith('Read and collate the complete Portuguese 1988 Constitution')));

for (const [sourceId, evidenceRole, publicationDate, confidence] of [
  ['belgiumFirstConstitutionOfficialDutch', 'secondary', null, 'high'],
  ['belgianChamberConstitution1831Dutch', 'contextual', '1831', 'high'],
  ['kuleuvenBelgianSovereigntyProject2020Dutch', 'secondary', '2020-09-18', 'high'],
]) {
  assert.ok(weimarEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Belgian constitutionalist reference trail`);
  assert.ok(JSON.stringify(weimarEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-19');
  assert.deepEqual(record.languages, ['Dutch']);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:liberal-constitutionalist']);
}
const liberalBelgianHistory = weimarEntry.sections.find(({ id }) => id === 'history').timeline;
const liberalBelgianTimeline = liberalBelgianHistory.find(({ period }) => period.startsWith('1830–1831 — Belgian revolutionary'));
assert.ok(liberalBelgianTimeline, 'the Belgian constitutional timeline case must remain visible');
assert.ok(liberalBelgianTimeline.citations.researchSourceIds.includes('belgianChamberConstitution1831Dutch'));
assert.ok(liberalBelgianHistory.some(({ period }) => period.startsWith('1830–1831 — Belgian constitutional text')));
const liberalBelgianVariant = weimarEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Belgian constitutional monarchy'));
assert.ok(liberalBelgianVariant, 'the Belgian constitutional monarchy must remain a separate variant');
assert.ok(liberalBelgianVariant.citations.researchSourceIds.includes('kuleuvenBelgianSovereigntyProject2020Dutch'));
const liberalBelgianExample = weimarEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('Belgium’s 1830–1831 founding'));
assert.ok(liberalBelgianExample, 'Belgium must appear as a bounded historical example');
assert.match(liberalBelgianExample.text, /Dutch administrative translation/);
const liberalBelgianSafeguard = weimarEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('The Belgian case adds a franchise'));
assert.ok(liberalBelgianSafeguard, 'Belgium must add a franchise and language safeguard');
assert.ok(liberalBelgianSafeguard.citations.researchSourceIds.includes('kuleuvenBelgianSovereigntyProject2020Dutch'));
for (const dimensionId of ['economic', 'social', 'authority', 'identity', 'religion']) {
  assert.ok(weimarEntry.dimensionInterpretations[dimensionId].citations.researchSourceIds.some((sourceId) => sourceId.includes('Belgian') || sourceId.startsWith('belgium') || sourceId.startsWith('kuleuven')), `${dimensionId} needs a Belgian claim trail where the case is relevant`);
}
assert.ok(weimarEntry.researchGaps.some((gap) => gap.startsWith('Read the complete Belgian Constitution of 1831')));

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
for (const [sourceId, publicationDate, languages, confidence] of [
  ['jensenRepurposingMises2022', '2022', ['English'], 'high'],
  ['laymanSpoonerLibertarianJanus2020', '2020-07-23', ['English'], 'high'],
  ['goglozaSpoonerConstitution2016', '2016-10-13', ['English abstract; full article language not independently reviewed'], 'medium'],
]) {
  assert.ok(molinariEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an anarcho-capitalist reference trail`);
  assert.ok(JSON.stringify(molinariEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, 'secondary');
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-19');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:anarcho-capitalist'], `${sourceId} must stay within this entry’s research pass`);
}
const spoonerHistory = molinariEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(spoonerHistory.find(({ period }) => period.startsWith('1850s–1887: Spooner'))?.citations.researchSourceIds.includes('laymanSpoonerLibertarianJanus2020'), 'Spooner’s dated precursor history must remain visible');
const spoonerVariant = molinariEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Spoonerian abolitionist-individualist'));
assert.ok(spoonerVariant, 'Spooner must remain distinct from the modern anarcho-capitalist label');
const spoonerPerson = molinariEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries.find(({ name }) => name === 'Lysander Spooner');
assert.match(spoonerPerson.caveat, /did not simply use the modern anarcho-capitalist label/);
assert.ok(molinariEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The intellectual genealogy also requires a historical safeguard')));
assert.ok(molinariEntry.researchGaps.some((gap) => gap.startsWith('Read Spooner’s original abolitionist')));
assert.ok(molinariEntry.researchGaps.some((gap) => gap.startsWith('Read Jensen’s complete article')));
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
for (const [sourceId, evidenceRole, publicationDate, languages] of [
  ['unDecolonizationNo1Frelimo1974', 'primary', '1974-06', ['English translation']],
  ['frusMozambiqueLusaka1974', 'primary', null, ['English']],
  ['bavoCoelhoMozambiqueEducation2022', 'secondary', '2022', ['Portuguese', 'English abstract', 'Spanish abstract']],
  ['brandaoFrelimoViolence2023', 'secondary', '2023-04-04', ['Portuguese']],
  ['vinesFrelimoDemocracy2023', 'secondary', '2023', ['English']],
]) {
  assert.ok(antiColonialEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an anti-colonial reference trail`);
  assert.ok(JSON.stringify(antiColonialEntry).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
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
const antiColonialHistory = antiColonialEntry.sections.find(({ id }) => id === 'history').timeline;
const mozambiqueMovementTimeline = antiColonialHistory.find(({ period }) => period.startsWith('1962–1975:'));
const mozambiqueStateTimeline = antiColonialHistory.find(({ period }) => period.startsWith('1975–1990:'));
assert.ok(mozambiqueMovementTimeline?.citations.researchSourceIds.includes('frusMozambiqueLusaka1974'), 'Mozambique independence transition needs diplomatic evidence');
assert.match(mozambiqueMovementTimeline.text, /movement statement.*diplomatic record of transition/, 'Mozambique movement and diplomatic evidence must stay distinct');
assert.ok(mozambiqueStateTimeline?.citations.researchSourceIds.includes('vinesFrelimoDemocracy2023'), 'Mozambique state-building timeline needs institutional evidence');
assert.match(mozambiqueStateTimeline.text, /1977 Marxist–Leninist vanguard-party turn/, 'Mozambique institutional history must preserve the dated party-state turn');
const mozambiqueExample = antiColonialEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'examples').entries.find(({ name }) => name.startsWith('FRELIMO: Mozambique'));
assert.ok(mozambiqueExample?.citations.researchSourceIds.includes('bavoCoelhoMozambiqueEducation2022'), 'Mozambique example needs Portuguese educational history');
assert.match(mozambiqueExample.caveat, /not a current-country classification/, 'Mozambique example must not become a current-country claim');
assert.match(antiColonialEntry.references.editorialNote, /bounded Mozambique\/FRELIMO case/, 'research boundary must remain visible in editorial metadata');
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
for (const [sourceId, evidenceRole, publicationDate, language] of [
  ['vietnamConstitution1980', 'primary', '1980-12-18', 'Vietnamese'],
  ['vietnamConstitution2013', 'primary', '2013-11-28', 'English'],
  ['cambridgeVietnamPartyLeadership2016', 'secondary', '2016', 'English'],
  ['cambridgeVietnamMarxMarket2016', 'secondary', '2016', 'English'],
  ['vnuVietnamDoiMoi1986', 'contextual', '2016', 'English'],
]) {
  assert.ok(authoritarianCollectivistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an authoritarian-collectivist reference trail`);
  assert.ok(JSON.stringify(authoritarianCollectivistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-18');
  assert.deepEqual(record.languages, [language]);
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
assert.match(authoritarianHistory, /Vietnam’s official constitutional record/, 'the Vietnam constitutional case needs a dated historical row');
assert.match(authoritarianHistory, /The Sixth National Congress formally redirected Vietnam’s economic policy/, 'the Vietnam reform case needs a dated historical row');
const authoritarianCriticisms = authoritarianCollectivistEntry.sections.find(({ id }) => id === 'criticisms').blocks.map(({ text }) => text).join(' ');
assert.match(authoritarianCriticisms, /not this entry’s explanation/, 'official conspiracy allegations must not become editorial findings');
assert.match(authoritarianCriticisms, /foreign-policy preferences must remain separate/, 'an ally’s intervention must not determine the subject’s foreign-policy score');
assert.match(authoritarianCriticisms, /economic liberalization as political pluralism/, 'Vietnam economic reform must not be equated with pluralism');
assert.ok(authoritarianCollectivistEntry.researchGaps.some((gap) => gap.includes('pay records, union practices')), 'workplace implementation research must remain open');
assert.ok(authoritarianCollectivistEntry.researchGaps.some((gap) => gap.includes('beyond Berlin')), 'regional diversity must remain an explicit gap');
assert.ok(authoritarianCollectivistEntry.researchGaps.some((gap) => gap.includes('For Vietnam, read the complete Vietnamese')), 'Vietnam implementation and lived-experience gaps must remain explicit');

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
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['jauresRepubliqueSocialisme1893', 'primary', '1893-11-21', ['French'], 'high'],
  ['kermoalJauresRepublic2014', 'secondary', '2014-03-31', ['French'], 'high'],
  ['billardRepublicanSocialistParty1996', 'secondary', '1996', ['French'], 'high'],
  ['viardRepublicanSocialismOrigins1986', 'secondary', '1986', ['French'], 'medium'],
]) {
  assert.ok(democraticSocialistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a democratic-socialist reference trail`);
  assert.ok(JSON.stringify(democraticSocialistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-18');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null, `${sourceId} must not add an uncleared quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:democratic-socialist'), `${sourceId} needs an encyclopedia backlink`);
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
assert.match(democraticSocialistHistory, /republican-socialist/, 'French republican-socialist history must remain visible');
const democraticSocialistVariants = democraticSocialistEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).map(({ label }) => label);
assert.ok(democraticSocialistVariants.includes('Jaurésian republican socialism'), 'the French variant must be separately named');
const democraticSocialistCriticisms = democraticSocialistEntry.sections.find(({ id }) => id === 'criticisms').blocks.map(({ text }) => text).join(' ');
assert.match(democraticSocialistCriticisms, /French case adds a label and coalition warning/, 'French sources must retain their coalition and label boundary');
assert.ok(democraticSocialistEntry.researchGaps.some((gap) => gap.startsWith('This pass adds French primary and secondary sources')), 'the French follow-up boundary must remain visible');
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
for (const [sourceId, evidenceRole, publicationDate] of [
  ['portugalConstitutionalBases1822', 'primary', '1821-03'],
  ['lealPortugueseLiberalism1820', 'secondary', '2020-12'],
  ['sousaPortugueseLiberalCourts2022', 'secondary', '2022-12'],
]) {
  assert.ok(classicalLiberalEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a classical-liberal reference trail`);
  assert.ok(JSON.stringify(classicalLiberalEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must preserve evidence role`);
  assert.equal(record.publicationDate, publicationDate, `${sourceId} needs its historical date`);
  assert.equal(record.accessDate, '2026-09-17', `${sourceId} needs its consultation date`);
  assert.deepEqual(record.languages, ['Portuguese'], `${sourceId} needs its source language`);
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} must retain its rights boundary`);
  assert.equal(record.directQuote, null, `${sourceId} must not add an uncleared quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:classical-liberal'), `${sourceId} needs an encyclopedia backlink`);
}
const portugueseLiberalExample = classicalLiberalEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'examples').entries.find(({ name }) => name === 'Portuguese Liberal Revolution and Vintismo');
assert.ok(portugueseLiberalExample, 'classical-liberal must retain the bounded Portuguese Vintist case');
assert.match(portugueseLiberalExample.caveat, /does not establish equal citizenship/);
assert.ok(classicalLiberalEntry.researchGaps.some((gap) => gap.includes('complete Portuguese constitutional texts')), 'Portuguese constitutional follow-up must remain open');
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
for (const [sourceId, evidenceRole, publicationDate, languages] of [
  ['bismarckCompensationSpeech1884', 'primary', '1884-03-15', ['English translation; German original not collated']],
  ['bpbSocialPolicyHistoryGerman', 'secondary', null, ['German']],
  ['dhmBismarckSocialLegislationGerman', 'secondary', null, ['German']],
]) {
  assert.ok(nationalConservativeEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Bismarck social-policy reference trail`);
  assert.ok(JSON.stringify(nationalConservativeEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-19');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, 'high');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:national-conservative'));
}
const bismarckSocialDescription = nationalConservativeEntry.sections.find(({ id }) => id === 'description').blocks.map(({ text }) => text).join(' ');
assert.match(bismarckSocialDescription, /initially covered workers and low-paid employees/);
assert.match(bismarckSocialDescription, /not proof of workers’ loyalty/);
const bismarckSocialHistory = nationalConservativeEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1883–1889: separate insurance legislation'));
assert.ok(bismarckSocialHistory, 'the Bismarck insurance sequence must remain a separate historical period');
assert.match(bismarckSocialHistory.text, /15 June 1883/);
const bismarckSocialVariant = nationalConservativeEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Paternalist social provision'));
assert.ok(bismarckSocialVariant.citations.researchSourceIds.includes('dhmBismarckSocialLegislationGerman'));
assert.ok(bismarckSocialVariant.citations.researchSourceIds.includes('bismarckCompensationSpeech1884'));
assert.ok(nationalConservativeEntry.researchGaps.some((gap) => gap.startsWith('This Bismarck welfare update adds')));
for (const [sourceId, evidenceRole, publicationDate, languages] of [
  ['academieFrancaiseMaurras', 'secondary', null, ['French']],
  ['sorbonneMaurrasNationalismeIntegral', 'secondary', '2023-04-22', ['French']],
  ['perseeActionFrancaiseNationalism1973', 'secondary', '1973', ['French']],
  ['bnfMaurrasEnqueteMonarchie1916', 'primary', '1916', ['French']],
]) {
  assert.ok(nationalConservativeEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Maurrassian reference trail`);
  assert.ok(JSON.stringify(nationalConservativeEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.deepEqual(record.languages, languages);
  assert.equal(record.accessDate, '2026-09-17');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:national-conservative'));
}
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['fondationDeGaulleBayeux1946French', 'primary', '1946-06-16', ['French'], 'high'],
  ['perseeDreyfusGaullisme1982French', 'secondary', '1982', ['French'], 'medium'],
  ['pervilleDeGaulleAlgerie1958French', 'secondary', '2008', ['French'], 'high'],
]) {
  assert.ok(nationalConservativeEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Gaullist reference trail`);
  assert.ok(JSON.stringify(nationalConservativeEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.accessDate, '2026-09-19');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:national-conservative'));
}
const nationalConservativeDescription = nationalConservativeEntry.sections.find(({ id }) => id === 'description').blocks.map(({ text }) => text).join(' ');
const nationalConservativeIntroduction = nationalConservativeEntry.sections.find(({ id }) => id === 'introduction').blocks.map(({ text }) => text).join(' ');
assert.match(nationalConservativeDescription, /not proof of workers’ loyalty/, 'announced intentions must not become measured outcomes');
assert.match(nationalConservativeDescription, /GHDI’s editorial introduction/, 'modern commentary must not become a statutory provision');
assert.match(nationalConservativeDescription, /surviving elections did not make these restrictions compatible with equal political liberty/, 'electoral channels must not erase repression');
assert.match(nationalConservativeDescription, /Maurrassian integral nationalism sharpens the exclusionary boundary/);
assert.match(nationalConservativeDescription, /Illustrative six-axis reading of the Maurrassian case/);
assert.match(nationalConservativeIntroduction, /Bayeux speech is a useful primary boundary witness/);
const nationalConservativeCriticisms = nationalConservativeEntry.sections.find(({ id }) => id === 'criticisms').blocks.map(({ text }) => text).join(' ');
assert.match(nationalConservativeCriticisms, /contrary to Bismarck’s aims/, 'institutional effects must remain distinct from government intentions');
assert.match(nationalConservativeCriticisms, /nor convert it into evidence of universal inclusion/, 'benefit provision must not imply universal coverage');
assert.match(nationalConservativeCriticisms, /The Maurrassian case makes the boundary concrete/);
assert.match(nationalConservativeCriticisms, /Decolonization adds a second safeguard/);
assert.ok(nationalConservativeEntry.sections.find(({ id }) => id === 'history').timeline.some(({ period }) => period.startsWith('1946–1962:')));
const gaullistVariant = nationalConservativeEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Gaullist republican sovereignty'));
assert.ok(gaullistVariant?.citations.researchSourceIds.includes('fondationDeGaulleBayeux1946French'));
const bismarckExample = nationalConservativeEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries.find(({ name }) => name === 'Otto von Bismarck');
assert.match(bismarckExample.caveat, /not an exact six-axis match/);
const maurrasExample = nationalConservativeEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name === 'Action française and Maurrassian integral nationalism');
assert.ok(maurrasExample, 'Action française must appear as a bounded historical example');
assert.match(maurrasExample.caveat, /not a generic conservative movement/);
const maurrasVariant = nationalConservativeEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Maurrassian integral nationalism'));
assert.ok(maurrasVariant, 'Maurrassian integral nationalism must be separated as a boundary variant');
const maurrasPerson = nationalConservativeEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries.find(({ name }) => name === 'Charles Maurras');
assert.match(maurrasPerson.caveat, /anti-democratic/);
assert.ok(nationalConservativeEntry.researchGaps.some((gap) => gap.startsWith('This pass adds the 1946 Bayeux speech')));
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
for (const [sourceId, evidenceRole] of [
  ['cazettaIntegralismoLusitano2012', 'secondary'],
  ['goncalvesIntegralismoEducacao2017', 'secondary'],
  ['politicaIntegralismo1931', 'primary'],
  ['xavierAlmaPortugueza2022Portuguese', 'secondary'],
  ['integralismoLusitanoManifesto1916Portuguese', 'primary'],
  ['mesquitaAquiDelReiHistory2014Portuguese', 'secondary'],
]) {
  assert.ok(religiousTraditionalistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Portuguese religious-traditionalist reference trail`);
  assert.ok(JSON.stringify(religiousTraditionalistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must preserve primary/secondary evidence role`);
  assert.equal(record.accessDate, sourceId === 'politicaIntegralismo1931' || sourceId === 'cazettaIntegralismoLusitano2012' || sourceId === 'goncalvesIntegralismoEducacao2017' ? '2026-09-17' : '2026-09-19', `${sourceId} needs its consultation date`);
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} must retain its rights boundary`);
  assert.equal(record.directQuote, null, `${sourceId} must not add an uncleared quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:religious-traditionalist'), `${sourceId} needs an encyclopedia backlink`);
}
const lusitanianExample = religiousTraditionalistEntry.sections.find(({ id }) => id === 'examples').blocks
  .flatMap(({ entries = [] }) => entries)
  .find(({ name }) => name.startsWith('Integralismo Lusitano'));
assert.ok(lusitanianExample, 'religious-traditionalist must retain the bounded Portuguese Integralismo Lusitano case');
assert.match(lusitanianExample.caveat, /not a country-wide religious regime/);
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
assert.match(religiousTraditionalistDescription, /two-issue periodical/, 'the Alma Portugueza evidence must remain bounded');
assert.match(religiousTraditionalistDescription, /movement-level case/, 'the Portuguese material must not become a country-wide religious claim');
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
assert.ok(religiousTraditionalistEntry.researchGaps.some((gap) => gap.startsWith('Collate the original Portuguese issues of Alma Portugueza')), 'the Portuguese primary-text follow-up must remain open');

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
for (const [sourceId, evidenceRole, publicationDate, languages] of [
  ['frenchSeparationChurches1905', 'primary', '1905-12-09', ['French']],
  ['scotLaicite1905', 'secondary', '2007', ['French']],
  ['conseilEtatLaicite2004', 'secondary', '2004', ['French']],
]) {
  assert.ok(progressiveEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a progressive-liberal reference trail`);
  assert.ok(JSON.stringify(progressiveEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish primary evidence and interpretation`);
  assert.equal(record.publicationDate, publicationDate, `${sourceId} needs its historical publication date`);
  assert.equal(record.accessDate, '2026-09-17', `${sourceId} needs its consultation date`);
  assert.deepEqual(record.languages, languages, `${sourceId} needs its source language`);
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} must retain its publication boundary`);
  assert.equal(record.directQuote, null, `${sourceId} must not add an uncleared quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:progressive-liberal'), `${sourceId} needs an encyclopedia backlink`);
}
for (const [sourceId, evidenceRole, publicationDate] of [
  ['conseilConstitutionnelPreamble1946French', 'primary', '1946-10-27'],
  ['cottiasOldColoniesRepublicanism2003French', 'secondary', '2003'],
  ['urbanColonialCitizenship1798French', 'secondary', '2012'],
]) {
  assert.ok(progressiveEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a progressive-liberal reference trail`);
  assert.ok(JSON.stringify(progressiveEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish primary evidence and interpretation`);
  assert.equal(record.publicationDate, publicationDate, `${sourceId} needs its historical publication date`);
  assert.equal(record.accessDate, '2026-09-19', `${sourceId} needs its consultation date`);
  assert.deepEqual(record.languages, ['French'], `${sourceId} needs its source language`);
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} must retain its publication boundary`);
  assert.equal(record.directQuote, null, `${sourceId} must not add an uncleared quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:progressive-liberal'), `${sourceId} needs an encyclopedia backlink`);
}
for (const [sourceId, evidenceRole, publicationDate] of [
  ['spdGodesbergProgram1959', 'primary', '1959-11-15'],
  ['bpbSocialLiberalCoalition2002', 'secondary', '2002-04-05'],
  ['bundestagSocialLiberalEra1982', 'secondary', '2017-07-31'],
]) {
  assert.ok(progressiveEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a progressive-liberal reference trail`);
  assert.ok(JSON.stringify(progressiveEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must preserve primary/secondary evidence role`);
  assert.equal(record.publicationDate, publicationDate, `${sourceId} needs its historical publication date`);
  assert.equal(record.accessDate, '2026-09-17', `${sourceId} needs its consultation date`);
  assert.deepEqual(record.languages, ['German'], `${sourceId} needs its source language`);
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} must retain its publication boundary`);
  assert.equal(record.directQuote, null, `${sourceId} must not add an uncleared quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:progressive-liberal'), `${sourceId} needs an encyclopedia backlink`);
}
for (const [sourceId, evidenceRole, publicationDate] of [
  ['fdpFreiburgTheses1971', 'primary', '1971-10-27'],
  ['kieseritzkyFreiburgTheses2021', 'secondary', '2021-07-06'],
  ['ghdiLambsdorffPaper1982', 'primary', '1982-09-09'],
  ['bmweLambsdorff1982', 'contextual', null],
]) {
  assert.ok(progressiveEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a progressive-liberal reference trail`);
  assert.ok(JSON.stringify(progressiveEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must preserve its evidence role`);
  assert.equal(record.publicationDate, publicationDate, `${sourceId} needs its historical publication date or explicit undated status`);
  assert.equal(record.accessDate, '2026-09-18', `${sourceId} needs its consultation date`);
  assert.deepEqual(record.languages, ['German'], `${sourceId} needs its source language`);
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
assert.match(progressiveDescription, /1971 Freiburg Theses/, 'German Freiburg evidence must remain visible in the progressive-liberal description');
const progressiveCriticism = progressiveEntry.sections.find(({ id }) => id === 'criticisms').blocks.map(({ text }) => text).join(' ');
assert.match(progressiveCriticism, /1930 occupational data, not observed benefit payments/, 'occupational exposure must not be reported as observed outcomes');
assert.match(progressiveCriticism, /Only that publisher description, not the full book/, 'limited access must remain visible in the prose');
assert.match(progressiveCriticism, /one economic position/, 'German intra-tradition economic variation must remain visible');
const originalActExample = progressiveEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'examples').entries.find(({ name }) => name === 'United States Social Security Act of 1935');
assert.ok(originalActExample.citations.researchSourceIds.includes('ssaOldAgeBenefits1935'), 'the narrowed historical example needs the specific law');
const frenchLaiciteTimeline = progressiveEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1905–1924:'));
assert.ok(frenchLaiciteTimeline?.citations.researchSourceIds.includes('frenchSeparationChurches1905'), 'French laïcité timeline needs the primary law');
assert.match(frenchLaiciteTimeline.text, /freedom of conscience and worship/, 'French primary law must remain tied to conscience and worship');
const frenchColonialTimeline = progressiveEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1848–1905:'));
assert.ok(frenchColonialTimeline?.citations.researchSourceIds.includes('cottiasOldColoniesRepublicanism2003French'), 'French colonial genealogy timeline needs Cottias');
const frenchPostwarTimeline = progressiveEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1946:'));
assert.ok(frenchPostwarTimeline?.citations.researchSourceIds.includes('conseilConstitutionnelPreamble1946French'), '1946 French constitutional timeline needs the primary preamble');
assert.ok(frenchPostwarTimeline?.citations.researchSourceIds.includes('urbanColonialCitizenship1798French'), '1946 French constitutional timeline needs the colonial citizenship caution');
const frenchLaiciteVariant = progressiveEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Liberal-separationist laïcité'));
assert.ok(frenchLaiciteVariant, 'the 1905 settlement must be a distinct bounded variant');
const frenchPostwarVariant = progressiveEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Postwar constitutional universalism'));
assert.ok(frenchPostwarVariant?.citations.researchSourceIds.includes('cottiasOldColoniesRepublicanism2003French'), 'postwar French variant needs the colonial genealogy caution');
const frenchLaiciteExample = progressiveEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'examples').entries.find(({ name }) => name === 'French law of separation of Churches and State');
assert.ok(frenchLaiciteExample?.citations.researchSourceIds.includes('scotLaicite1905'), 'French law example needs the specialist historical interpretation');
const frenchPostwarExample = progressiveEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'examples').entries.find(({ name }) => name === 'French postwar constitutional universalism and colonial Union');
assert.ok(frenchPostwarExample?.citations.researchSourceIds.includes('conseilConstitutionnelPreamble1946French'), '1946 French example needs the primary preamble');
assert.match(frenchPostwarExample.caveat, /not be treated as proof of uniform citizenship/, '1946 French example needs an implementation boundary');
assert.match(progressiveDescription, /not as a synonym for atheism/, 'secular public law must not be equated with hostility to religion');
const frenchLaiciteSafeguard = progressiveEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ type, text }) => type === 'evidence-note' && /1905 case requires/.test(text ?? ''));
assert.ok(frenchLaiciteSafeguard, 'the bounded 1905 case needs an evidence safeguard');
assert.match(frenchLaiciteSafeguard.text, /not equal treatment in every locality/, 'formal legal principle must not become an outcome claim');
const frenchColonialCriticism = progressiveEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ type, text }) => type === 'paragraph' && /colonial record sharpens/.test(text ?? ''));
assert.ok(frenchColonialCriticism?.citations.researchSourceIds.includes('urbanColonialCitizenship1798French'), 'colonial universalism criticism needs Urban');
const GermanSocialLiberalExample = progressiveEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'examples').entries.find(({ name }) => name === 'West German social-liberal coalition');
assert.ok(GermanSocialLiberalExample, 'the progressive-liberal entry must retain the bounded German social-liberal case');
assert.match(GermanSocialLiberalExample.caveat, /not a complete outcome evaluation/);
assert.ok(GermanSocialLiberalExample.citations.researchSourceIds.includes('fdpFreiburgTheses1971'), 'the German coalition example needs the Freiburg primary programme');
assert.ok(GermanSocialLiberalExample.citations.researchSourceIds.includes('ghdiLambsdorffPaper1982'), 'the German coalition example needs the 1982 primary policy paper');
assert.ok(progressiveEntry.researchGaps.some((gap) => gap.includes('complete Godesberg') && gap.includes('Freiburg texts')), 'German social-liberal follow-up must remain open');
assert.ok(progressiveEntry.researchGaps.some((gap) => gap.startsWith('This pass adds the 1946 French constitutional preamble')), 'the French research lead must preserve its follow-up gap');
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
const papalStateSource = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-partnerLandsStPeter1972');
assert.ok(theocraticEntry.references.researchSourceIds.includes('partnerLandsStPeter1972'), 'the Papal State needs a theocracy reference trail');
assert.ok(JSON.stringify(theocraticEntry.sections).includes('partnerLandsStPeter1972'), 'the Papal State source needs claim-level use');
assert.equal(papalStateSource.evidenceRole, 'secondary');
assert.equal(papalStateSource.publicationDate, '1972');
assert.deepEqual(papalStateSource.languages, ['English']);
assert.equal(papalStateSource.accessDate, '2026-09-17');
assert.equal(papalStateSource.publicationStatus, 'link-only');
assert.equal(papalStateSource.directQuote, null);
assert.ok(papalStateSource.relationships.profileEntries.includes('encyclopedia:theocratic'));
const papalTimeline = theocraticEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(papalTimeline.some(({ period, text }) => period.startsWith('Eighth century–1870: the Papal States') && text.includes('diverse Italian regions')));
const papalVariant = theocraticEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label === 'Territorial papal state');
assert.ok(papalVariant, 'territorial papal government must be separated as a bounded variant');
const papalExample = theocraticEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name === 'Papal States and Vatican City');
assert.match(papalExample.caveat, /distinct formations/);
const theocraticDescription = theocraticEntry.sections.find(({ id }) => id === 'description').blocks.map(({ text }) => text).join(' ');
assert.match(theocraticDescription, /six religious jurists selected by the Leader and six Muslim legal jurists chosen by parliament/, 'Council composition must not become twelve directly appointed clerics');
assert.match(theocraticDescription, /Assembly of Experts is a different institution/, 'the two councils must not be merged');
assert.match(theocraticDescription, /Formal removal powers do not prove effective accountability/, 'constitutional design must stay separate from effectiveness');
const theocraticCriticisms = theocraticEntry.sections.find(({ id }) => id === 'criticisms').blocks.map(({ text }) => text).join(' ');
assert.match(theocraticCriticisms, /article 110\(9\) expressly requires confirmation of presidential candidates/, 'specific candidate-qualification text must not be attributed to article 99 alone');
assert.match(theocraticCriticisms, /not be mistaken for the wording of article 99 itself/, 'dated scholarly interpretation must stay distinct from primary wording');
for (const [sourceId, evidenceRole, publicationDate, confidence, languages] of [
  ['frenchBuddhismLawTibet2014', 'secondary', '2014', 'high', ['English']],
  ['deleplanqueTibetanTheocracy2025', 'secondary', '2025-12-08', 'medium', ['English']],
  ['lyulinaGandenPhodrang2020', 'secondary', '2020', 'medium', ['English', 'Russian']],
  ['tsangLegalCode1631', 'primary', '1631', 'medium', ['Tibetan', 'English']],
  ['gandenPodrangCode13', 'primary', '1617-1682', 'medium', ['Tibetan']],
]) {
  assert.ok(theocraticEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Tibetan theocracy reference trail`);
  assert.ok(JSON.stringify(theocraticEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:theocratic'));
}
const TibetanHistory = theocraticEntry.sections.find(({ id }) => id === 'history').timeline.map(({ text }) => text ?? '').join(' ');
const TibetanExamples = theocraticEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries);
assert.match(TibetanHistory, /Tsang legal code to 1631/);
assert.match(TibetanHistory, /Ganden Phodrang government’s formation in 1642/);
assert.ok(TibetanExamples.some(({ name }) => name === 'Ganden Phodrang government of Tibet'));
assert.match(theocraticDescription, /A Buddhist state can therefore be religiously legitimized without every rule or office being directly administered by monks/);
assert.match(theocraticCriticisms, /working translation based on ten manuscripts/);
assert.ok(theocraticEntry.researchGaps.some((gap) => gap.startsWith('Collate the Ganden Podrang Code')));
assert.ok(theocraticEntry.researchGaps.some((gap) => gap.startsWith('Read the full Tibetan-law scholarship')));
for (const [sourceId, evidenceRole, publicationDate, confidence, languages] of [
  ['genevaEcclesiasticalOrdinances1541French', 'primary', '1541-11-20', 'high', ['French']],
  ['rangelGenevaConfessionalization2024', 'secondary', '2024-02-19', 'medium', ['Portuguese']],
  ['hopflChristianPolityGeneva2009', 'secondary', '2009-10-24', 'medium', ['English']],
]) {
  assert.ok(theocraticEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Genevan theocracy reference trail`);
  assert.ok(JSON.stringify(theocraticEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:theocratic'));
}
const genevaTheocracyDebateRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-genevaArchiveTheocracyDebateFrench');
assert.ok(theocraticEntry.references.researchSourceIds.includes('genevaArchiveTheocracyDebateFrench'));
assert.ok(JSON.stringify(theocraticEntry.sections).includes('genevaArchiveTheocracyDebateFrench'));
assert.equal(genevaTheocracyDebateRecord.evidenceRole, 'contextual');
assert.equal(genevaTheocracyDebateRecord.publicationDate, null);
assert.equal(genevaTheocracyDebateRecord.accessDate, '2026-09-19');
assert.equal(genevaTheocracyDebateRecord.review.confidence, 'high');
assert.deepEqual(genevaTheocracyDebateRecord.languages, ['French']);
assert.equal(genevaTheocracyDebateRecord.publicationStatus, 'link-only');
assert.equal(genevaTheocracyDebateRecord.directQuote, null);
assert.deepEqual(genevaTheocracyDebateRecord.relationships.profileEntries, ['encyclopedia:theocratic']);
for (const [sourceId, evidenceRole, publicationDate, confidence, languages] of [
  ['genevaConsistoryRegisters1542French', 'primary', '1542-02-16', 'high', ['French']],
  ['genevaCouncilRegistersRCnum1545French', 'primary', '1545', 'high', ['French']],
  ['wattWomenConsistoryGeneva1993', 'secondary', '1993-06-01', 'medium', ['English']],
]) {
  assert.ok(theocraticEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Genevan practice reference trail`);
  assert.ok(JSON.stringify(theocraticEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:theocratic'));
}
const genevaHistory = theocraticEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(genevaHistory.some(({ period, citations }) => period.startsWith('1541–1564: Calvinist Geneva') && citations.researchSourceIds.includes('genevaEcclesiasticalOrdinances1541French')));
assert.ok(genevaHistory.some(({ period, citations }) => period.startsWith('1541–1564: Calvinist Geneva') && citations.researchSourceIds.includes('genevaArchiveTheocracyDebateFrench')));
assert.ok(genevaHistory.some(({ period, citations }) => period.startsWith('1542–1564: Consistory and Council records') && citations.researchSourceIds.includes('genevaConsistoryRegisters1542French')));
const genevaVariant = theocraticEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Calvinist Geneva'));
assert.ok(genevaVariant, 'Calvinist Geneva must be separated as a bounded confessional variant');
const genevaPracticeVariant = theocraticEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Genevan Consistory and Council discipline'));
assert.ok(genevaPracticeVariant, 'Genevan practice must be separated from the formal ordinance');
const genevaExample = theocraticEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Geneva’s Ecclesiastical Ordinances'));
assert.ok(genevaExample, 'Geneva must appear as a bounded historical example');
assert.match(genevaExample.caveat, /not an exact six-axis match/);
const genevaPracticeExample = theocraticEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Genevan Consistory and Council registers'));
assert.ok(genevaPracticeExample, 'Genevan practice records must appear as a bounded historical example');
const calvinPerson = theocraticEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries.find(({ name }) => name.startsWith('John Calvin'));
assert.ok(calvinPerson, 'Calvin must be identified with a bounded civic and ecclesiastical caveat');
assert.match(calvinPerson.caveat, /not generalize Geneva’s order/);
const wattPerson = theocraticEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries.find(({ name }) => name.startsWith('Jeffrey R. Watt'));
assert.ok(wattPerson, 'Watt must be identified as a bounded interpreter of the Geneva record');
const genevaSafeguard = theocraticEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('Geneva adds a safeguard'));
assert.ok(genevaSafeguard, 'Geneva must add a church–civil jurisdiction safeguard');
assert.match(genevaSafeguard.text, /not a claim that Calvin personally ruled Geneva/);
assert.match(genevaSafeguard.text, /established church from a strict theocracy/);
assert.ok(theocraticEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The gendered Consistory record adds a second safeguard')));
assert.ok(theocraticEntry.researchGaps.some((gap) => gap.startsWith('Read the complete French Ecclesiastical Ordinances')));
assert.ok(theocraticEntry.researchGaps.some((gap) => gap.startsWith('Read the French edited Consistory volumes')));
assert.ok(theocraticEntry.researchGaps.some((gap) => gap.startsWith('This pass adds the Geneva State Archives’ French historiographical synthesis')));

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

for (const [sourceId, publicationDate] of [
  ['nepalForestAct1993', '1993'],
  ['oldekopNepalForests2019', '2019-05-06'],
  ['cookNepalInequality2026', '2026-01-05'],
  ['cookNepalCorrection2026', '2026-06-17'],
]) {
  assert.ok(greenCommonsEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an entry reference trail`);
  assert.ok(JSON.stringify(greenCommonsEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve exactly once`);
  const [record] = records;
  assert.equal(record.evidenceRole, 'primary', 'legal evidence, original empirical research and an author correction must retain their source types');
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-16');
  assert.equal(record.review.confidence, 'medium', 'partial consultation and translation limits must remain visible');
  assert.deepEqual(record.languages, ['English']);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:green-commons']);
}
const nepalLaw = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-nepalForestAct1993');
const nepalAverageStudy = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-oldekopNepalForests2019');
const nepalDistributionStudy = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-cookNepalInequality2026');
const nepalCorrection = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-cookNepalCorrection2026');
assert.match(nepalLaw.note, /pp\. 1, 13–14 and 20, visually inspected/);
assert.match(nepalLaw.description, /1999 First Amendment.*separate commencement footnote/);
assert.match(nepalAverageStudy.note, /abstract and bibliographic metadata only/);
assert.match(nepalDistributionStudy.note, /search-indexed.*full Methods, supplements and data were not inspected/);
assert.match(nepalCorrection.license, /CC BY-NC-ND 4\.0/);
assert.match(commonsDescription, /historical text is not current-law advice/);
assert.match(commonsDescription, /weaker estimated forest benefits where initial poverty was higher/);
assert.match(commonsCriticisms, /Absence of statistical evidence is not proof of zero effect/);
assert.match(commonsCriticisms, /unequal gains, not demonstrated worsening of minority poverty/);
assert.match(commonsCriticisms, /17 June 2026 author correction.*Newar grouping/);
assert.match(commonsCriticisms, /observational estimates, not randomized experiments/);
const nepalExample = greenCommonsEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Nepal community forestry'));
assert.match(nepalExample.match, /not a country-level ideological match/);
assert.ok(nepalExample.citations.researchSourceIds.includes('cookNepalCorrection2026'));
assert.ok(greenCommonsEntry.researchGaps.some((gap) => gap.startsWith('Retrieve and review the complete Oldekop study')));
assert.ok(greenCommonsEntry.researchGaps.some((gap) => gap.startsWith('Collate the FAOLEX English Forest Act')));

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
for (const [sourceId, evidenceRole] of [
  ['fesSdpDdrFounding1989', 'primary'],
  ['fischerSpdGermanUnity1989', 'secondary'],
  ['starkeGermanWelfareState2022', 'secondary'],
]) {
  assert.ok(socialDemocraticEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a social-democratic reference trail`);
  assert.ok(JSON.stringify(socialDemocraticEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish documents from interpretation`);
  assert.equal(record.accessDate, '2026-09-17', `${sourceId} needs its consultation date`);
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} must retain its publication boundary`);
  assert.equal(record.directQuote, null, `${sourceId} must not add an unreviewed quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:social-democratic'), `${sourceId} needs an encyclopedia backlink`);
}
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['psDeclarationPrinciples1974Portuguese', 'primary', '1974-12', ['Portuguese'], 'high'],
  ['portugalConstitution1976Portuguese', 'primary', '1976-04-02', ['Portuguese'], 'high'],
  ['portugalDemocracyConstruction1974', 'contextual', null, ['Portuguese'], 'high'],
  ['castanoSoaresTransition2012Portuguese', 'secondary', '2012', ['Portuguese'], 'high'],
  ['granadinoPortuguesePSInternationalNetworks2018', 'secondary', '2018-04-01', ['English'], 'high'],
]) {
  assert.ok(socialDemocraticEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Portuguese social-democratic reference trail`);
  assert.ok(JSON.stringify(socialDemocraticEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.deepEqual(record.languages, languages);
  assert.equal(record.accessDate, '2026-09-18');
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:social-democratic'), `${sourceId} needs an encyclopedia backlink`);
}
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['sndSwedishSapManifesto1944', 'primary', '1944-09-17', ['Swedish'], 'high'],
  ['arbarkSapPrograms1897to1990', 'secondary', '2001', ['Swedish'], 'high'],
  ['berghUniversalWelfareSweden2004', 'secondary', '2004', ['English'], 'high'],
  ['blomqvistPalmeUniversalism2020', 'secondary', '2020-03-18', ['English'], 'high'],
  ['oecdSwedenPublicGovernance2023', 'contextual', '2023', ['English'], 'high'],
]) {
  assert.ok(socialDemocraticEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Swedish social-democratic reference trail`);
  assert.ok(JSON.stringify(socialDemocraticEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must resolve once`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.deepEqual(record.languages, languages);
  assert.equal(record.accessDate, '2026-09-18');
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:social-democratic'), `${sourceId} needs an encyclopedia backlink`);
}
assert.ok(socialDemocraticHistory.some(({ period }) => period.startsWith('1989–1990:')), 'the East German SDP trajectory needs a dated history row');
assert.ok(socialDemocraticHistory.some(({ period }) => period.startsWith('1973–1976: Portuguese')), 'the Portuguese transition needs a dated history row');
assert.ok(socialDemocraticHistory.some(({ period }) => period.startsWith('1944–1990s: Swedish')), 'the Swedish welfare trajectory needs a dated history row');
assert.ok(socialDemocraticHistory.some(({ period }) => period.startsWith('1990–present:')), 'the post-reunification welfare transformation needs a dated history row');
const socialDemocraticExamples = socialDemocraticEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries);
assert.ok(socialDemocraticExamples.find(({ name }) => name.startsWith('Social Democratic Party in the GDR')), 'the East German SDP needs a bounded documented example');
assert.ok(socialDemocraticExamples.find(({ name }) => name.startsWith('Portuguese Socialist Party')), 'the Portuguese transition needs a bounded documented example');
assert.ok(socialDemocraticExamples.find(({ name }) => name.startsWith('Swedish Social Democratic welfare project')), 'the Swedish welfare project needs a bounded documented example');
assert.ok(socialDemocraticExamples.find(({ name }) => name.startsWith('German welfare-state transformation')), 'post-reunification welfare transformation needs a bounded example');
assert.ok(socialDemocraticEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).some(({ label }) => label.startsWith('Nordic universalist')), 'the Nordic universalist variant must stay distinct');
assert.ok(socialDemocraticEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).some(({ label }) => label.startsWith('Portuguese constitutional social democracy')), 'the Portuguese variant must stay distinct from later welfare-state social democracy');
assert.ok(socialDemocraticEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).some(({ name }) => name === 'Mário Soares'), 'Mário Soares must be a bounded person example');
assert.ok(socialDemocraticEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The Portuguese case adds a safeguard')), 'the Portuguese case needs a criticism safeguard');
assert.ok(socialDemocraticEntry.researchGaps.some((gap) => gap.includes('complete programme')), 'excerpt limits must remain visible');
assert.ok(socialDemocraticEntry.researchGaps.some((gap) => gap.startsWith('Read the complete Portuguese Socialist Party programme')), 'the Portuguese primary-source gap must remain open');

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
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['basicLawGermany1949', 'primary', '1949-05-23', ['German', 'English translation'], 'high'],
  ['kronenbergConstitutionalPatriotism2009', 'secondary', '2009-06-29', ['German'], 'high'],
  ['mullerScheppeleConstitutionalPatriotism2008', 'secondary', '2008-01-01', ['English'], 'high'],
]) {
  assert.ok(civicEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a civic-nationalist reference trail`);
  assert.ok(JSON.stringify(civicEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-19');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:civic-nationalist'), `${sourceId} needs an encyclopedia backlink`);
}
assert.ok(civicEntry.references.researchSourceIds.includes('assembleeDeclarationRights1789French'), 'the civic entry needs the French Declaration source');
assert.ok(JSON.stringify(civicEntry.sections).includes('assembleeDeclarationRights1789French'), 'the French Declaration needs claim-level use');
const declarationRecord = BIBLIOGRAPHY_RECORDS.filter(({ id }) => id === 'research-assembleeDeclarationRights1789French');
assert.equal(declarationRecord.length, 1, 'the French Declaration needs one bibliography record');
assert.equal(declarationRecord[0].evidenceRole, 'primary');
assert.equal(declarationRecord[0].publicationDate, '1789-08-26');
assert.deepEqual(declarationRecord[0].languages, ['French']);
assert.equal(declarationRecord[0].accessDate, '2026-09-19');
assert.equal(declarationRecord[0].publicationStatus, 'link-only');
assert.equal(declarationRecord[0].directQuote, null);
assert.ok(declarationRecord[0].relationships.profileEntries.includes('encyclopedia:civic-nationalist'));
const germanConstitutionHistory = civicEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(germanConstitutionHistory.find(({ period }) => period.startsWith('After 1945:'))?.citations.researchSourceIds.includes('basicLawGermany1949'), 'the postwar German timeline needs primary constitutional evidence');
const germanVariant = civicEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Postwar German constitutional patriotism'));
assert.ok(germanVariant, 'the postwar German constitutional-patriotism variant must remain distinct');
const germanExample = civicEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Federal Republic of Germany:'));
assert.match(germanExample.caveat, /not itself proof of a civic-national consensus/);
assert.ok(civicEntry.researchGaps.some((gap) => gap.startsWith('Read the complete German Basic Law')));
assert.ok(civicEntry.researchGaps.some((gap) => gap.startsWith('Collate the original Sternberger')));
const civicTimeline = civicEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(civicTimeline.some(({ period }) => period.startsWith('26 August 1789: French declaration')), 'the civic history needs a dated French declaration phase');
assert.ok(civicTimeline.find(({ period }) => period.startsWith('1865:'))?.citations.researchSourceIds.includes('algeriaSenatusConsulte1865'), 'the 1865 rules need contemporaneous legal evidence');
assert.ok(civicTimeline.find(({ period }) => period.startsWith('1870:'))?.citations.researchSourceIds.includes('algeriaCremieuxDecrees1870'), 'the 1870 routes need distinct legal evidence');
const colonialCounterexample = civicEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('French Algeria:'));
assert.match(colonialCounterexample.match, /Counterexample, not an ideological match/, 'colonial exclusion must not become a scored civic ideal');
const civicExamples = civicEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'examples').entries;
assert.ok(civicExamples.some(({ name }) => name.startsWith('French Declaration of the Rights')), 'the French declaration example must be bounded');
assert.ok(civicEntry.researchGaps.some((gap) => gap.includes('social-axis magnitude mismatch')), 'the unresolved magnitude mismatch must stay visible');

const monarchistEntry = ENCYCLOPEDIA_ENTRIES.monarchist;
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['cambodiaConstitution1993Official', 'primary', '1993-09-21', ['Khmer', 'English', 'French'], 'high'],
  ['cambodiaParisAgreement1991UN', 'primary', '1991-10-23', ['Khmer', 'English', 'French', 'Chinese', 'Russian'], 'high'],
  ['cambodiaParisAgreementFrench1991', 'primary', '1991-12-18', ['French'], 'high'],
  ['lawrenceCambodiaConstitutionalSangha2022', 'secondary', '2022-11-18', ['English'], 'high'],
  ['lawrenceCambodiaSaffronSuffrage2022', 'secondary', '2022-06-10', ['English'], 'high'],
  ['lawrenceCambodiaRoyalAbsence2022', 'secondary', '2022', ['English'], 'medium'],
]) {
  assert.ok(monarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Cambodian monarchist reference trail`);
  assert.ok(JSON.stringify(monarchistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-18');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:monarchist'), `${sourceId} needs a monarchist backlink`);
}
const cambodianHistory = monarchistEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1991–1993: Cambodia'));
assert.ok(cambodianHistory, 'the Cambodian post-conflict constitutional-monarchy timeline case must remain visible');
assert.match(cambodianHistory.text, /non-governing and inviolable head of state/);
assert.ok(cambodianHistory.citations.researchSourceIds.includes('lawrenceCambodiaRoyalAbsence2022'));
const cambodianVariant = monarchistEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Cambodian elected constitutional monarchy'));
assert.ok(cambodianVariant, 'the Cambodian case must be separated as a dated constitutional variant');
const cambodianExample = monarchistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Cambodia’s post-conflict'));
assert.ok(cambodianExample, 'Cambodia must appear as a bounded historical example');
assert.ok(monarchistEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('Cambodia’s post-conflict restoration')));
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('The Cambodia addition remains bounded')));
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['kuwaitGovernmentConstitution1962', 'contextual', null, ['English'], 'medium'],
  ['kuwaitConstitution1962Ilo', 'primary', '1962', ['English witness; Arabic original not collated'], 'high'],
  ['allarakiaKuwaitParalysis2025', 'secondary', '2025', ['English'], 'high'],
  ['carnegieKuwaitParliament2025', 'secondary', '2025-03', ['English'], 'medium'],
  ['kuwaitConstitutionalCourtRuling2023Arabic', 'primary', '2023-03-19', ['Arabic'], 'high'],
  ['alHuwailahKuwaitCourt2024', 'secondary', '2024-09', ['English abstract; Arabic judgment and full legal record not independently collated'], 'medium'],
  ['kfasInterpellationKuwait2001', 'secondary', '2001-01', ['Arabic; English abstract'], 'medium'],
  ['chicagoGulfHereditaryMonarchies', 'secondary', null, ['English'], 'medium'],
]) {
  assert.ok(monarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Kuwait monarchist reference trail`);
  assert.ok(JSON.stringify(monarchistEntry.sections).includes(sourceId), `${sourceId} needs a Kuwait claim-level citation`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-19');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:monarchist'), `${sourceId} needs a monarchist backlink`);
}
const kuwaitHistory = monarchistEntry.sections.find(({ id }) => id === 'history').timeline;
const kuwaitSettlement = kuwaitHistory.find(({ period }) => period.startsWith('1961–1962: Kuwaiti'));
assert.ok(kuwaitSettlement, 'the Kuwait constitutional-emirate timeline case must remain visible');
assert.ok(kuwaitSettlement.citations.researchSourceIds.includes('kuwaitConstitution1962Ilo'));
const kuwaitVariant = monarchistEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Kuwaiti participatory emirate'));
assert.ok(kuwaitVariant, 'the Kuwait case must be separated as a dated constitutional variant');
const kuwaitExample = monarchistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Kuwait’s constitutional emirate'));
assert.ok(kuwaitExample, 'Kuwait must appear as a bounded historical example');
assert.ok(monarchistEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The Kuwait case adds a Gulf safeguard')));
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('Read the complete Arabic Constitution of Kuwait')));
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('The Kuwait constitutional-court update remains bounded')));
assert.ok(monarchistEntry.sections.find(({ id }) => id === 'history').timeline.some(({ period }) => period.startsWith('2022–2023: constitutional adjudication')));
for (const dimensionId of ['economic', 'social', 'authority', 'identity', 'foreign', 'religion']) {
  assert.ok(monarchistEntry.dimensionInterpretations[dimensionId], `${dimensionId} must retain the monarchist six-axis interpretation`);
}
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
for (const [sourceId, evidenceRole, publicationDate] of [
  ['portugalConstitution1822', 'primary', '1822-09-23'],
  ['portugalCharter1826', 'primary', '1826-04-29'],
  ['portugalConstitutionalMonarchyJustice', 'secondary', null],
  ['monicaElectoralReforms1996', 'secondary', '1996-12-31'],
]) {
  assert.ok(monarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Portuguese monarchist reference trail`);
  assert.ok(JSON.stringify(monarchistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish constitutional text from historical interpretation`);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, ['Portuguese']);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:monarchist'), `${sourceId} needs an encyclopedia backlink`);
}
const portugueseHistory = monarchistEntry.sections.find(({ id }) => id === 'history').timeline;
const portugueseTimeline = portugueseHistory.find(({ period }) => period.startsWith('1820–1910:'));
assert.ok(portugueseTimeline, 'the Portuguese constitutional-monarchy timeline case must remain visible');
assert.ok(portugueseTimeline.citations.researchSourceIds.includes('portugalConstitution1822'));
assert.ok(portugueseTimeline.citations.researchSourceIds.includes('monicaElectoralReforms1996'));
const portugueseVariant = monarchistEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Portuguese liberal constitutional monarchy'));
assert.ok(portugueseVariant, 'the Portuguese case must be separated as a dated constitutional variant');
const portugueseExample = monarchistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Portugal’s liberal constitutional monarchy'));
assert.ok(portugueseExample, 'Portugal must appear as a bounded historical example');
assert.match(portugueseExample.caveat, /not a classification of present-day Portugal/);
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('Read and collate the complete Portuguese 1822 Constitution')));
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('Research Portuguese electoral law')));
for (const [sourceId, publicationDate, languages] of [
  ['hespanhaPortugueseMonarchicalConstitutionalism2012', '2012', ['Portuguese', 'English abstract']],
  ['cardosoLealPortugueseElections2020', '2020-01-12', ['Portuguese', 'English abstract', 'French abstract', 'Spanish abstract']],
  ['sardicaPortugueseCharter1826', '2012', ['Portuguese']],
  ['fernandesTavaresParliament1826', '2023', ['Portuguese']],
]) {
  assert.ok(monarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Portuguese scholarly monarchist reference trail`);
  assert.ok(JSON.stringify(monarchistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, 'secondary');
  assert.equal(record.publicationDate, publicationDate);
  assert.deepEqual(record.languages, languages);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:monarchist'), `${sourceId} needs an encyclopedia backlink`);
}
const portugueseAgendaTimeline = portugueseHistory.find(({ period }) => period.startsWith('1826–1910:'));
assert.ok(portugueseAgendaTimeline?.citations.researchSourceIds.includes('hespanhaPortugueseMonarchicalConstitutionalism2012'));
const portugueseReceptionTimeline = portugueseHistory.find(({ period }) => period.startsWith('1826–1852:'));
assert.ok(portugueseReceptionTimeline, 'the Portuguese Charter reception timeline must remain visible');
assert.ok(portugueseReceptionTimeline.citations.researchSourceIds.includes('sardicaPortugueseCharter1826'));
assert.ok(portugueseReceptionTimeline.citations.researchSourceIds.includes('fernandesTavaresParliament1826'));
const portugueseElectionTimeline = portugueseHistory.find(({ period }) => period.startsWith('1852–1910:'));
assert.ok(portugueseElectionTimeline?.citations.researchSourceIds.includes('cardosoLealPortugueseElections2020'));
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('This Portuguese update adds Hespanha')));
for (const sourceId of [
  'congresoCadizConstitution1812',
  'ucaCadizOaths2024',
  'amoresCadizCuba2014',
  'chustFrasquetSovereignty1812',
  'aguilarRiveraCadizAtlantic2014',
  'varelaCadizLiberalism1987',
  'perezLunoCadizRights2015',
]) {
  assert.ok(monarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Spanish monarchist reference trail`);
  assert.ok(JSON.stringify(monarchistEntry.sections).includes(sourceId), `${sourceId} needs Spanish claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:monarchist'), `${sourceId} needs a monarchist backlink`);
}
const spanishMonarchistHistory = monarchistEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1812–1874: Spanish'));
assert.ok(spanishMonarchistHistory, 'the Spanish liberal constitutional-monarchy cycle must remain visible');
assert.ok(spanishMonarchistHistory.citations.researchSourceIds.includes('congresoCadizConstitution1812'));
assert.ok(spanishMonarchistHistory.citations.researchSourceIds.includes('varelaCadizLiberalism1987'));
const spanishMonarchistVariant = monarchistEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Spanish liberal constitutional monarchy'));
assert.ok(spanishMonarchistVariant, 'the Spanish case must be separated as a dated constitutional variant');
const spanishMonarchistExample = monarchistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Spain’s Cádiz-to-Restoration'));
assert.ok(spanishMonarchistExample, 'Spain must appear as a bounded historical example');
assert.match(spanishMonarchistExample.caveat, /not a current classification of Spain/);
assert.ok(monarchistEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The Spanish Cádiz cycle adds a Spanish-language safeguard')));
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('This Spanish update adds the official Cádiz text')));
for (const [sourceId, evidenceRole, publicationDate] of [
  ['ottomanConstitution1876', 'primary', '1876-12-26'],
  ['tbmmOttomanConstitutionHistory', 'secondary', null],
  ['kayaliOttomanElections1919', 'secondary', '1995-08-01'],
  ['isikselAuthoritarianConstitutionalism2013', 'secondary', '2013-07-01'],
]) {
  assert.ok(monarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an Ottoman monarchist reference trail`);
  assert.ok(JSON.stringify(monarchistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish the documentary record from historical interpretation`);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, ['English']);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:monarchist'), `${sourceId} needs an encyclopedia backlink`);
}
assert.deepEqual(
  Object.fromEntries(Object.entries(monarchistEntry.dimensionInterpretations).map(([id, dimension]) => [id, dimension.score])),
  { economic: -12, social: -48, authority: 52, identity: -42, foreign: -18, religion: -52 },
  'the Ottoman case must not silently recalibrate the didactic monarchist six-axis profile',
);
const ottomanHistory = monarchistEntry.sections.find(({ id }) => id === 'history').timeline;
const ottomanTimeline = ottomanHistory.find(({ period }) => period.startsWith('1876–1909:'));
assert.ok(ottomanTimeline, 'the late Ottoman constitutional-monarchy timeline case must remain visible');
assert.ok(ottomanTimeline.citations.researchSourceIds.includes('tbmmOttomanConstitutionHistory'));
assert.ok(ottomanTimeline.citations.researchSourceIds.includes('kayaliOttomanElections1919'));
const ottomanVariant = monarchistEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Ottoman constitutional monarchy'));
assert.ok(ottomanVariant, 'the Ottoman case must be separated as a dated constitutional variant');
const ottomanExample = monarchistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Late Ottoman constitutional monarchy'));
assert.ok(ottomanExample, 'the late Ottoman case must appear as a bounded historical example');
assert.match(ottomanExample.caveat, /imperial, multilingual/);
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('Collate the Ottoman Kanûn-i Esâsî')));
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('Compare the late Ottoman parliament')));
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('Distinguish Ottoman constitutional monarchy')));
const frenchMonarchySource = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'research-bodineauVerpeauxFranceConstitutionalHistory2024');
assert.ok(monarchistEntry.references.researchSourceIds.includes('bodineauVerpeauxFranceConstitutionalHistory2024'));
assert.ok(JSON.stringify(monarchistEntry.sections).includes('bodineauVerpeauxFranceConstitutionalHistory2024'));
assert.equal(frenchMonarchySource.evidenceRole, 'secondary');
assert.equal(frenchMonarchySource.publicationDate, '2024');
assert.equal(frenchMonarchySource.accessDate, '2026-09-17');
assert.deepEqual(frenchMonarchySource.languages, ['French']);
assert.equal(frenchMonarchySource.review.confidence, 'medium');
assert.equal(frenchMonarchySource.publicationStatus, 'link-only');
assert.equal(frenchMonarchySource.directQuote, null);
assert.ok(frenchMonarchySource.relationships.profileEntries.includes('encyclopedia:monarchist'));
const frenchMonarchyHistory = monarchistEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1791–1848: revolution and constitutional monarchy'));
assert.ok(frenchMonarchyHistory.citations.researchSourceIds.includes('bodineauVerpeauxFranceConstitutionalHistory2024'));
const frenchMonarchyVariant = monarchistEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('French Restoration and July Monarchy'));
assert.ok(frenchMonarchyVariant.citations.researchSourceIds.includes('bodineauVerpeauxFranceConstitutionalHistory2024'));
const frenchMonarchyExample = monarchistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name === 'French Restoration and July Monarchy');
assert.ok(frenchMonarchyExample.citations.researchSourceIds.includes('bodineauVerpeauxFranceConstitutionalHistory2024'));
assert.ok(monarchistEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The French scholarly preview adds a practice safeguard')));
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('Read Bodineau and Verpeaux’s complete French chapter')));
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['elyseeConstitution1852', 'primary', '1852-01-14', ['French'], 'high'],
  ['assembleeSecondEmpire1852', 'secondary', '2026', ['French'], 'high'],
  ['prelotSecondEmpire1953', 'secondary', '1953-01-01', ['French'], 'medium'],
]) {
  assert.ok(monarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Second Empire monarchist reference trail`);
  assert.ok(JSON.stringify(monarchistEntry.sections).includes(sourceId), `${sourceId} needs Second Empire claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:monarchist'), `${sourceId} needs a monarchist backlink`);
}
const secondEmpireHistory = monarchistEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1852–1870: Bonapartist Second Empire'));
assert.ok(secondEmpireHistory, 'the Second Empire timeline case must remain visible');
assert.ok(secondEmpireHistory.citations.researchSourceIds.includes('elyseeConstitution1852'));
const secondEmpireVariant = monarchistEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Bonapartist imperial constitutionalism'));
assert.ok(secondEmpireVariant, 'the Second Empire must be separated as an imperial constitutional variant');
assert.ok(secondEmpireVariant.citations.researchSourceIds.includes('prelotSecondEmpire1953'));
const secondEmpireExample = monarchistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('France’s Second Empire'));
assert.ok(secondEmpireExample, 'the Second Empire must appear as a bounded historical example');
assert.match(secondEmpireExample.caveat, /initially belonged to a Republic/);
assert.ok(monarchistEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The Second Empire adds a formal-versus-practice safeguard')));
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('Read Prélot’s complete article')));
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['siamConstitution1932French', 'primary', '1932-12-10', ['French'], 'medium'],
  ['sugiyamaSiamRevolution1997', 'secondary', '1997-06-01', ['English'], 'medium'],
  ['fuwongcharoenConstitutionWorship2018', 'secondary', '2018-01-15', ['English'], 'medium'],
]) {
  assert.ok(monarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Siamese monarchist reference trail`);
  assert.ok(JSON.stringify(monarchistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:monarchist'), `${sourceId} needs a monarchist backlink`);
}
const siamHistory = monarchistEntry.sections.find(({ id }) => id === 'history').timeline;
const siamTimeline = siamHistory.find(({ period }) => period.startsWith('24 June–10 December 1932'));
assert.ok(siamTimeline, 'the Siamese constitutional-revolution timeline case must remain visible');
assert.ok(siamTimeline.citations.researchSourceIds.includes('siamConstitution1932French'));
const siamVariant = monarchistEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Siamese limited monarchy'));
assert.ok(siamVariant, 'the Siamese case must be separated as a dated constitutional variant');
const siamExample = monarchistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name === 'Siam’s 1932 constitutional monarchy');
assert.ok(siamExample, 'Siam must appear as a bounded historical example');
assert.match(siamExample.caveat, /not an exact six-axis match/);
const siamCriticism = monarchistEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('Siam’s 1932 transition adds a second non-European safeguard'));
assert.ok(siamCriticism, 'the Siamese case needs a criticism and evidence boundary');
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('Collate the 1932 Siamese constitutions')));
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['hawaiiConstitution1840', 'primary', '1840-10-08', ['English', 'Hawaiian'], 'high'],
  ['hawaiiLegislatureArchive1887', 'primary', '2019', ['English'], 'high'],
  ['hawaiiArchivesLiliuokalani1893', 'primary', '1893', ['English', 'Hawaiian'], 'medium'],
  ['clevelandHawaii1893', 'primary', '1893-12-18', ['English'], 'high'],
  ['osorioDismemberingLahui2002', 'secondary', '2002-06', ['English'], 'medium'],
  ['newburyPatronageHawaii2001', 'secondary', '2001', ['English'], 'medium'],
  ['lacroixGrandyHawaii1997', 'secondary', '1997-03', ['English'], 'medium'],
]) {
  assert.ok(monarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Hawaiian monarchist reference trail`);
  assert.ok(JSON.stringify(monarchistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:monarchist'), `${sourceId} needs an encyclopedia backlink`);
}
const hawaiiHistory = monarchistEntry.sections.find(({ id }) => id === 'history').timeline;
const hawaiiTimeline = hawaiiHistory.find(({ period }) => period.startsWith('1840–1893: Hawaiian constitutional monarchy'));
assert.ok(hawaiiTimeline, 'the Hawaiian constitutional-monarchy timeline case must remain visible');
assert.ok(hawaiiTimeline.citations.researchSourceIds.includes('hawaiiConstitution1840'));
assert.ok(hawaiiTimeline.citations.researchSourceIds.includes('clevelandHawaii1893'));
const hawaiiVariant = monarchistEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Hawaiian constitutional monarchy'));
assert.ok(hawaiiVariant, 'the Hawaiian case must be separated as a dated constitutional variant');
const hawaiiExample = monarchistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Hawaiian Kingdom'));
assert.ok(hawaiiExample, 'the Hawaiian Kingdom must appear as a bounded historical example');
assert.match(hawaiiExample.caveat, /must not be used as a simple present-day country match/);
assert.ok(monarchistEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The Hawaiian case adds a colonial')));
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('Collate the Hawaiian-language and English editions')));
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['mjpEthiopiaConstitution1931French', 'primary', '1931-07-16', ['French'], 'high'],
  ['zemelakEthiopiaConstitutionalism2020', 'secondary', '2021', ['English'], 'high'],
  ['haileEthiopianConstitutions2005', 'secondary', '2005', ['English'], 'medium'],
  ['ethiopiaMonarchyImperialDomination2024', 'secondary', '2024', ['English'], 'medium'],
]) {
  assert.ok(monarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an Ethiopian monarchist reference trail`);
  assert.ok(JSON.stringify(monarchistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish constitutional witness from interpretation`);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:monarchist'), `${sourceId} needs a monarchist backlink`);
}
const ethiopianMonarchyTimeline = monarchistEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1931–1974: Ethiopian imperial monarchy'));
assert.ok(ethiopianMonarchyTimeline, 'the Ethiopian imperial constitutional-monarchy timeline case must remain visible');
assert.ok(ethiopianMonarchyTimeline.citations.researchSourceIds.includes('mjpEthiopiaConstitution1931French'));
const ethiopianMonarchyVariant = monarchistEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Ethiopian imperial constitutional monarchy'));
assert.ok(ethiopianMonarchyVariant, 'the Ethiopian case must be separated as a dated constitutional variant');
const ethiopianMonarchyExample = monarchistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Ethiopian imperial monarchy'));
assert.ok(ethiopianMonarchyExample, 'Ethiopia must appear as a bounded historical example');
assert.match(ethiopianMonarchyExample.caveat, /bounded African historical example/);
const ethiopianMonarchyPerson = monarchistEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries.find(({ name }) => name === 'Haile Selassie I');
assert.ok(ethiopianMonarchyPerson, 'Haile Selassie must be identified as a person associated with the case');
const ethiopianMonarchySafeguard = monarchistEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('The Ethiopian case warns against'));
assert.ok(ethiopianMonarchySafeguard, 'the Ethiopian case needs a constitutional-form and implementation safeguard');
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('Collate the Amharic, French, and English editions')));

for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['iranConstitutionalLaw1906English', 'primary', '1906–1907', ['English'], 'medium'],
  ['iranDataPortalConstitutions1906', 'contextual', null, ['Persian', 'English'], 'high'],
  ['iranicaConstitutionalRevolutionIntellectual1992', 'secondary', '1992-12-15', ['English'], 'high'],
  ['iranicaConstitutionalRevolutionConstitution1992', 'secondary', '1992-12-15', ['English'], 'high'],
  ['iranicaElections1998', 'secondary', '1998-12-15', ['English'], 'high'],
  ['afaryIranianConstitutionalRevolution1996', 'secondary', '1996', ['English'], 'medium'],
]) {
  assert.ok(monarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Qajar monarchist reference trail`);
  assert.ok(JSON.stringify(monarchistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:monarchist'), `${sourceId} needs a monarchist backlink`);
}
const qajarHistory = monarchistEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(qajarHistory.some(({ period, citations }) => period.startsWith('1905–1911: Qajar Constitutional Revolution') && citations.researchSourceIds.includes('iranicaElections1998')));
const qajarDescription = monarchistEntry.sections.find(({ id }) => id === 'description').blocks;
assert.ok(qajarDescription.some(({ text }) => text?.startsWith('The electoral record makes the Qajar constitutional settlement more precise')));
const qajarVariant = monarchistEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Qajar constitutional monarchy'));
assert.ok(qajarVariant, 'Qajar Iran must be separated as a dated constitutional variant');
const qajarExample = monarchistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Qajar Iran’s Constitutional Revolution'));
assert.ok(qajarExample, 'Qajar Iran must appear as a bounded historical example');
assert.match(qajarExample.caveat, /rather than a completed liberal democracy/);
const qajarPerson = monarchistEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries.find(({ name }) => name.startsWith('Moẓaffar-al-Dīn Shah'));
assert.ok(qajarPerson, 'the Qajar constitutional coalition must be identified with a bounded caveat');
assert.match(qajarPerson.caveat, /complete Persian-language account/);
const qajarSafeguard = monarchistEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('The Qajar case adds a safeguard'));
assert.ok(qajarSafeguard, 'Qajar Iran must add a formalism and implementation safeguard');
assert.match(qajarSafeguard.text, /formal rights and practical power/);
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('Collate the Persian originals and early printings')));
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('Open and compare the Persian and English constitutional links')));

for (const [sourceId, evidenceRole, publicationDate, confidence] of [
  ['nepalConstitution1990', 'primary', '1990-11-09', 'medium'],
  ['manandharNepalMonarchy2014', 'secondary', '2014-12-16', 'medium'],
  ['malagodiNepalMonarchy2011', 'secondary', '2011-10-13', 'medium'],
  ['parajuleeNepalHybrid2010', 'secondary', '2010-01-21', 'medium'],
]) {
  assert.ok(monarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Nepal monarchist reference trail`);
  assert.ok(JSON.stringify(monarchistEntry.sections).includes(sourceId), `${sourceId} needs Nepal claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, ['English']);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:monarchist']);
}
const nepalHistory = monarchistEntry.sections.find(({ id }) => id === 'history').timeline;
const nepalTimeline = nepalHistory.find(({ period }) => period.startsWith('1990–2008: Nepal’s constitutional monarchy'));
assert.ok(nepalTimeline, 'the Nepal constitutional-monarchy transition must remain visible');
assert.ok(nepalTimeline.citations.researchSourceIds.includes('nepalConstitution1990'));
assert.ok(nepalTimeline.citations.researchSourceIds.includes('parajuleeNepalHybrid2010'));
const nepalVariant = monarchistEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Nepali constitutional monarchy'));
assert.ok(nepalVariant, 'the Nepal case must be separated as a dated constitutional variant');
const nepalMonarchistExample = monarchistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Nepal’s constitutional-monarchy transition'));
assert.ok(nepalMonarchistExample, 'Nepal must appear as a bounded historical example');
assert.match(nepalMonarchistExample.caveat, /not a single causal account/);
const nepalPerson = monarchistEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries.find(({ name }) => name.startsWith('King Birendra'));
assert.ok(nepalPerson, 'the Nepal transition must identify its monarchs with a bounded caveat');
const nepalSafeguard = monarchistEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('Nepal’s sequence adds a safeguard'));
assert.ok(nepalSafeguard, 'Nepal must add a constitutional-form and implementation safeguard');
assert.match(nepalSafeguard.text, /monarchy alone caused Nepal’s crisis/);
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('Collate the Nepali original and official English witness')));

for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['bhutanConstitution2008', 'primary', '2008-07-18', ['English', 'Dzongkha'], 'high'],
  ['dorjiProgressiveMonarchy2023', 'secondary', '2023-01-30', ['English'], 'medium'],
  ['whitecrossBhutanBuddhism2013', 'secondary', '2013-02-01', ['English'], 'medium'],
  ['iyerBhutanConstitution2019', 'secondary', '2019-11-14', ['English'], 'medium'],
]) {
  assert.ok(monarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Bhutanese monarchist reference trail`);
  assert.ok(JSON.stringify(monarchistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-17');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:monarchist'), `${sourceId} needs a monarchist backlink`);
}
const bhutanHistory = monarchistEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1907–2008: Bhutanese monarchy'));
assert.ok(bhutanHistory, 'the Bhutanese constitutional-transition timeline case must remain visible');
assert.ok(bhutanHistory.citations.researchSourceIds.includes('bhutanConstitution2008'));
const bhutanVariant = monarchistEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Bhutanese Buddhist constitutional monarchy'));
assert.ok(bhutanVariant, 'the Bhutanese case must be separated as a religious constitutional variant');
const bhutanExample = monarchistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name === 'Bhutan’s democratic constitutional monarchy');
assert.ok(bhutanExample, 'Bhutan must appear as a bounded historical example');
assert.match(bhutanExample.caveat, /Dzongkha record/);
assert.ok(monarchistEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The Bhutanese case adds a safeguard')));
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('Collate the Dzongkha and English versions')));
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['botheBhutanGift2012', 'secondary', '2012', ['English'], 'high'],
  ['botheBhutanPopularControl2015', 'secondary', '2015', ['English'], 'high'],
  ['whitecrossZhabdrungLegacy2022', 'secondary', '2022-11-18', ['English'], 'high'],
  ['bhutanElectionCommissionRoyalDecrees2008', 'primary', '2008', ['English', 'Dzongkha'], 'high'],
]) {
  assert.ok(monarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Bhutanese monarchist reference trail`);
  assert.ok(JSON.stringify(monarchistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-18');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:monarchist'), `${sourceId} needs a monarchist backlink`);
}
const bhutanProcessHistory = monarchistEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('2001–2008: monarch-led'));
assert.ok(bhutanProcessHistory, 'the Bhutanese constitution-making process must remain visible');
assert.ok(bhutanProcessHistory.citations.researchSourceIds.includes('botheBhutanGift2012'));
assert.ok(bhutanProcessHistory.citations.researchSourceIds.includes('botheBhutanPopularControl2015'));
const bhutanCriticalNote = monarchistEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('The Bhutanese case adds a safeguard'));
assert.ok(bhutanCriticalNote.citations.researchSourceIds.includes('whitecrossZhabdrungLegacy2022'));
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('This Bhutan update adds Bothe')));
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['malaysiaFederalConstitution1957', 'primary', '1957', ['English', 'Malay'], 'high'],
  ['tewMalaysiaMonarchyDemocracy2024', 'secondary', '2024-12-16', ['English'], 'high'],
  ['wanHussainMalayRulers2017', 'secondary', '2017', ['Malay', 'English'], 'medium'],
]) {
  assert.ok(monarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Malaysian monarchist reference trail`);
  assert.ok(JSON.stringify(monarchistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-18');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:monarchist'), `${sourceId} needs a monarchist backlink`);
}
const malaysiaHistory = monarchistEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1957–present constitutional framework'));
assert.ok(malaysiaHistory, 'the Malaysian rotating monarchy timeline case must remain visible');
assert.ok(malaysiaHistory.citations.researchSourceIds.includes('malaysiaFederalConstitution1957'));
assert.ok(malaysiaHistory.citations.researchSourceIds.includes('tewMalaysiaMonarchyDemocracy2024'));
const malaysiaVariant = monarchistEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Malaysian rotating elective'));
assert.ok(malaysiaVariant, 'the Malaysian case must be separated as an elective constitutional variant');
const malaysiaExample = monarchistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Malaysia’s rotating elective'));
assert.ok(malaysiaExample, 'Malaysia must appear as a bounded historical example');
assert.match(malaysiaExample.caveat, /not a present-day ideological classification/);
const malaysiaSafeguard = monarchistEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('Malaysia adds a safeguard'));
assert.ok(malaysiaSafeguard, 'Malaysia must add a royal-discretion safeguard');
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('This Malaysia update adds the official Federal Constitution')));

for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['austriaDecemberConstitution1867German', 'primary', '1867-12-21', ['German', 'English translation'], 'high'],
  ['austriaParliamentAusgleich1867German', 'secondary', null, ['German'], 'high'],
  ['boyerAustria1867Constitution2022', 'secondary', '2022-10-13', ['English'], 'medium'],
  ['gyaniAustroHungaryCompromise2021', 'secondary', '2021', ['English; Hungarian perspectives'], 'medium'],
]) {
  assert.ok(monarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an Austro-Hungarian monarchist reference trail`);
  assert.ok(JSON.stringify(monarchistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-18');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:monarchist'), `${sourceId} needs a monarchist backlink`);
}
const habsburgHistory = monarchistEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1867–1918: Austro-Hungarian'));
assert.ok(habsburgHistory, 'the Austro-Hungarian constitutional-dual timeline case must remain visible');
assert.ok(habsburgHistory.citations.researchSourceIds.includes('austriaDecemberConstitution1867German'));
const habsburgVariant = monarchistEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Austro-Hungarian constitutional dual'));
assert.ok(habsburgVariant, 'the Austro-Hungarian case must be separated as a dual constitutional variant');
const habsburgExample = monarchistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Austria-Hungary’s constitutional dual'));
assert.ok(habsburgExample, 'Austria-Hungary must appear as a bounded historical example');
assert.match(habsburgExample.caveat, /not an exact six-axis match/);
const habsburgSafeguard = monarchistEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('The Austro-Hungarian case adds a dual-state'));
assert.ok(habsburgSafeguard, 'Austria-Hungary must add a dual-state rights-boundary safeguard');
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('The Austro-Hungarian addition remains bounded')));

const fascistEntry = ENCYCLOPEDIA_ENTRIES['historical-fascist'];
for (const [sourceId, evidenceRole] of [
  ['cdecAntisemiticDecrees1938', 'primary'],
  ['cameraSpeech3Jan1925', 'primary'],
  ['legge2263Fascistissime', 'primary'],
  ['anselmiPropertyReport2001', 'secondary'],
  ['ushmmItalyPersecution', 'secondary'],
]) {
  assert.ok(fascistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an Italian Fascism reference trail`);
  assert.ok(JSON.stringify(fascistEntry.sections).includes(sourceId), `${sourceId} needs a claim-level citation`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs exactly one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole, `${sourceId} must distinguish contemporary legislation from later historical research`);
  assert.ok(['2026-09-16', '2026-09-19'].includes(record.accessDate), `${sourceId} needs its consultation date`);
  assert.equal(record.publicationStatus, 'link-only', `${sourceId} must retain the summary-and-link boundary`);
  assert.equal(record.directQuote, null, `${sourceId} must not introduce an unreviewed quotation`);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:historical-fascist'), `${sourceId} needs an encyclopedia backlink`);
}
const fascistHistory = fascistEntry.sections.find(({ id }) => id === 'history').timeline;
const italyRecord = BIBLIOGRAPHY_RECORDS.find(({ id }) => id === 'link-fascistItaly');
assert.ok(italyRecord.relationships.archetypeIds.includes('historical-fascist'), 'the shared museum source must retain its historical-card backlink');
assert.equal(italyRecord.rightsStatus, 'permission-sensitive', 'source sharing must not weaken the existing rights boundary');
const italianLaws = fascistHistory.find(({ period }) => period.startsWith('1938:'));
const legalConsolidation = fascistHistory.find(({ period }) => period.startsWith('3 January 1925–1926:'));
const rsiDispossession = fascistHistory.find(({ period }) => period.startsWith('1943–1944:'));
assert.ok(italianLaws && legalConsolidation && rsiDispossession, 'Italian persecution and legal consolidation must retain distinct phases');
assert.ok(legalConsolidation.citations.researchSourceIds.includes('cameraSpeech3Jan1925'), 'the dictatorship transition needs the official parliamentary record');
assert.ok(legalConsolidation.citations.researchSourceIds.includes('legge2263Fascistissime'), 'the dictatorship transition needs the official statute');
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
for (const [sourceId, publicationDate] of [
  ['gailusChurchStateNazism2018', '2018-11-01'],
  ['silomonProtestantResistance2009', '2009-03-21'],
]) {
  assert.ok(naziEntry.references.researchSourceIds.includes(sourceId), `${sourceId} must remain in the Nazi church research trail`);
  assert.ok(JSON.stringify(naziEntry.sections).includes(sourceId), `${sourceId} needs claim-level use in the Nazi entry`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, 'secondary');
  assert.equal(record.publicationDate, publicationDate);
  assert.deepEqual(record.languages, ['German']);
  assert.equal(record.accessDate, '2026-09-16');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:national-socialist'), `${sourceId} needs a Nazi encyclopedia backlink`);
}
assert.ok(naziEntry.dimensionInterpretations.religion.citations.researchSourceIds.includes('gailusChurchStateNazism2018'), 'the Nazi religion coordinate needs church-state scholarship');
assert.ok(naziEntry.sections.find(({ id }) => id === 'history').timeline.some(({ period }) => period.startsWith('July–September 1933 — German Christian')), 'the Nazi entry needs a dated church-coordination phase');
const naziPeople = naziEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries;
assert.ok(naziPeople.some(({ name }) => name === 'Ludwig Müller'), 'the German Christian leadership example must be named');
assert.ok(naziPeople.some(({ name }) => name.startsWith('Karl Barth')), 'the Barmen theological opposition must be named');
const naziChurchExamples = naziEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'examples').entries;
assert.ok(naziChurchExamples.some(({ name }) => name.startsWith('German Christians and the Reich Church')), 'the Reich Church case must be bounded');
assert.ok(naziChurchExamples.some(({ name }) => name.startsWith('German Catholic institutions')), 'the Catholic institutional case must be bounded');
assert.ok(naziEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The religious history adds a further warning')), 'the Nazi entry needs a religious-scoring safeguard');
assert.ok(naziEntry.references.researchSourceIds.includes('ghdiEnablingAct1933German'), 'the Nazi entry needs the German Enabling Act source');
assert.ok(JSON.stringify(naziEntry.sections).includes('ghdiEnablingAct1933German'), 'the Enabling Act needs claim-level use in the Nazi entry');
const enablingRecord = BIBLIOGRAPHY_RECORDS.filter(({ id }) => id === 'research-ghdiEnablingAct1933German');
assert.equal(enablingRecord.length, 1, 'the Enabling Act needs one bibliography record');
assert.equal(enablingRecord[0].evidenceRole, 'primary');
assert.equal(enablingRecord[0].publicationDate, '1933-03-24');
assert.deepEqual(enablingRecord[0].languages, ['German', 'English']);
assert.equal(enablingRecord[0].accessDate, '2026-09-19');
assert.equal(enablingRecord[0].publicationStatus, 'link-only');
assert.equal(enablingRecord[0].directQuote, null);
assert.ok(enablingRecord[0].relationships.profileEntries.includes('encyclopedia:national-socialist'));
const naziHistory = naziEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(naziHistory.some(({ period }) => period.startsWith('23–24 March 1933 — Enabling Act')), 'the Nazi history needs a dated Enabling Act phase');
const naziExamples = naziEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'examples').entries;
assert.ok(naziExamples.some(({ name }) => name.startsWith('Enabling Act and the Kroll Opera')), 'the Enabling Act example must be bounded');

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
for (const [sourceId, evidenceRole, publicationDate, confidence] of [
  ['uluruStatement2017', 'primary', '2017-05-26', 'high'],
  ['aiatsisConstitutionalConsultations2017', 'contextual', '2017', 'high'],
  ['dziedzicMcMillanIndigenousConstitutions2016', 'secondary', '2016-09-01', 'high'],
  ['goverCubilloIndigenousPolities2022', 'secondary', '2022-08-04', 'high'],
  ['reillyIndigenousGovernance2006', 'secondary', '2006', 'high'],
  ['anderssenIndigenousLaw2021', 'secondary', '2021', 'medium'],
  ['nativeTitleAct1993', 'primary', '1993-12-24', 'high'],
  ['aecVoiceReferendum2023', 'primary', '2023-11-06', 'high'],
]) {
  assert.ok(indigenousEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an Australian Indigenous-governance reference trail`);
  assert.ok(JSON.stringify(indigenousEntry.sections).includes(sourceId), `${sourceId} needs claim-level use in the Indigenous entry`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs exactly one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-18');
  assert.equal(record.review.confidence, confidence);
  assert.deepEqual(record.languages, ['English']);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:indigenous-relational-governance'), `${sourceId} needs an Indigenous encyclopedia backlink`);
}
const australianIndigenousHistory = indigenousEntry.sections.find(({ id }) => id === 'history').timeline;
assert.ok(australianIndigenousHistory.some(({ period }) => period.startsWith('1992–present — Australian recognition')));
assert.ok(australianIndigenousHistory.some(({ period }) => period.startsWith('2016–2023 — Australian First Nations')));
const australianIndigenousVariant = indigenousEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Australian Indigenous constitutional renewal'));
assert.ok(australianIndigenousVariant, 'the Australian case must be separated as a constitutional-renewal variant');
const australianIndigenousExample = indigenousEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Australian First Nations constitutional renewal'));
assert.ok(australianIndigenousExample, 'the Australian case must appear as a bounded historical example');
assert.match(australianIndigenousExample.caveat, /not a single Indigenous ideology/);
assert.ok(indigenousEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The Australian case adds a design-versus-outcome safeguard')));
assert.ok(indigenousEntry.researchGaps.some((gap) => gap.startsWith('Expand the Australian case through nation-specific')));

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
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['fritzGoldschmidtStoerringOrdoliberalism2021', 'secondary', '2021-02-06', ['English'], 'high'],
  ['goldsmithEntitlementTheory1979', 'secondary', '1979-12-01', ['English'], 'medium'],
  ['bnfConstantLibertyModerns1819French', 'primary', '1819', ['French'], 'high'],
  ['viffryKeslassyTocqueville2001French', 'secondary', '2001', ['French'], 'medium'],
]) {
  assert.ok(marketLibertarianEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a market-libertarian reference trail`);
  assert.ok(JSON.stringify(marketLibertarianEntry.sections).includes(sourceId), `${sourceId} needs a claim-level citation`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} must reuse one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.accessDate, '2026-09-19');
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:libertarian-market']);
}
assert.ok(marketLibertarianEntry.sections.find(({ id }) => id === 'history').timeline.some(({ period }) => period.startsWith('1930s–postwar:')));
assert.ok(marketLibertarianEntry.sections.find(({ id }) => id === 'history').timeline.some(({ period }) => period.startsWith('1979:')));
const marketVariants = marketLibertarianEntry.sections.find(({ id }) => id === 'variants').blocks[0].rows;
assert.ok(marketVariants.find(({ label }) => label.startsWith('Ordoliberalism'))?.citations.researchSourceIds.includes('fritzGoldschmidtStoerringOrdoliberalism2021'));
assert.ok(marketVariants.find(({ label }) => label.startsWith('Constantian modern liberty'))?.citations.researchSourceIds.includes('bnfConstantLibertyModerns1819French'));
assert.ok(marketLibertarianEntry.sections.find(({ id }) => id === 'history').timeline.some(({ period }) => period.startsWith('1819–2001:')));
const marketPeople = marketLibertarianEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ type }) => type === 'people').entries;
assert.ok(marketPeople.find(({ name }) => name.startsWith('Walter Eucken')));
assert.ok(marketPeople.find(({ name }) => name.startsWith('Benjamin Constant')));
assert.ok(marketLibertarianEntry.researchGaps.some((gap) => gap.startsWith('Read Goldsmith’s complete 1979 article')));
assert.ok(marketLibertarianEntry.researchGaps.some((gap) => gap.startsWith('Read the complete Fritz')));

const omanMonarchistEntry = ENCYCLOPEDIA_ENTRIES.monarchist;
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['omanBasicStatute1996Wipo', 'primary', '1996-11-06', ['Arabic', 'English unofficial translation'], 'high'],
  ['omanRoyalDecreeBasicStatute2021', 'primary', '2021-01-11', ['English witness; Arabic original and Gazette not collated'], 'high'],
  ['omanBasicStatuteArabic2021', 'primary', '2021-01-11', ['Arabic', 'English witness'], 'high'],
  ['omanMajlisLaw2021Arabic', 'primary', '2021-01-11', ['Arabic'], 'high'],
  ['omanForeignMinistryBasicStatute2026', 'contextual', '2026-01-16', ['English'], 'medium'],
  ['alTaleiOmanCouncilPowers2021', 'secondary', '2021-04-12', ['English'], 'medium'],
  ['alKiyumiOmanConstitution2012', 'secondary', '2012-06-12', ['English'], 'medium'],
  ['siegfriedOmanBasicLaw1998', 'secondary', '1998', ['English abstract; original work details not independently reviewed'], 'medium'],
]) {
  assert.ok(omanMonarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs an Oman monarchist reference trail`);
  assert.ok(JSON.stringify(omanMonarchistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-18');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.ok(record.relationships.profileEntries.includes('encyclopedia:monarchist'), `${sourceId} needs an encyclopedia backlink`);
}
const omanHistory = omanMonarchistEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1996–2021: Oman'));
assert.ok(omanHistory, 'the Oman constitutional-monarchical timeline case must remain visible');
assert.match(omanHistory.text, /post-2011/);
assert.match(omanHistory.text, /Council law/);
const omanExample = omanMonarchistEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name.startsWith('Oman’s hereditary'));
assert.ok(omanExample, 'Oman must appear as a bounded historical example');
assert.match(omanExample.caveat, /does not establish current political practice/);
assert.ok(omanMonarchistEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('The Omani case adds a consultation-versus-accountability safeguard')));
assert.ok(omanMonarchistEntry.researchGaps.some((gap) => gap.startsWith('Read the Arabic 1996 and 2021 Basic Statutes')));

const russianCentralAsiaEntry = ENCYCLOPEDIA_ENTRIES['militarist-imperialist'];
for (const sourceId of [
  'russianTurkestanZarafshan1874',
  'iranicaCentralAsiaRussianConquest2000',
  'morrisonRussianConquestCentralAsia2020',
  'pierceRussianCentralAsiaColonialRule1960',
  'morrisonRussianRuleSamarkand2008',
]) {
  assert.ok(russianCentralAsiaEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Russian Central Asia reference trail`);
  assert.ok(JSON.stringify(russianCentralAsiaEntry.sections).includes(sourceId), `${sourceId} needs claim-level use in the Russian Central Asia case`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs exactly one bibliography record`);
  assert.ok(records[0].relationships.profileEntries.includes('encyclopedia:militarist-imperialist'), `${sourceId} needs a militarist-imperialist backlink`);
}
const russianCentralAsiaIntroduction = russianCentralAsiaEntry.sections.find(({ id }) => id === 'introduction').blocks.find(({ text }) => text?.startsWith('A closer reading of the 1874 Zarafshan witness'));
assert.ok(russianCentralAsiaIntroduction, 'the Russian Central Asia entry must preserve mixed evidence from the 1874 witness');
const russianCentralAsiaDescription = russianCentralAsiaEntry.sections.find(({ id }) => id === 'description').blocks.find(({ text }) => text?.startsWith('The Central Asian evidence also cautions'));
assert.ok(russianCentralAsiaDescription, 'the Russian Central Asia evidence must inform the six-axis boundary');
const russianCentralAsiaHistory = russianCentralAsiaEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('1865–1874 — Turkestan governorate'));
assert.ok(russianCentralAsiaHistory, 'the Samarkand/Zarafshan sequence must have its own historical period');
assert.ok(russianCentralAsiaHistory.citations.researchSourceIds.includes('russianTurkestanZarafshan1874'));
const russianCentralAsiaVariant = russianCentralAsiaEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Russian conquest and Turkestan'));
assert.match(russianCentralAsiaVariant.relation, /mixed observations/);
const russianCentralAsiaExample = russianCentralAsiaEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('The Samarkand/Zarafshan subcase'));
assert.ok(russianCentralAsiaExample, 'the Samarkand/Zarafshan case must appear as a bounded example');
assert.match(russianCentralAsiaExample.text, /not an exact six-axis match/);
const russianCentralAsiaSafeguard = russianCentralAsiaEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('The Russian case also requires a source-balance warning'));
assert.ok(russianCentralAsiaSafeguard, 'the Russian case must distinguish mixed official observation from local evidence');
assert.ok(russianCentralAsiaEntry.researchGaps.some((gap) => gap.startsWith('The Russian Central Asia addition now separates')));
const russianCentralAsiaSourceIds = new Set([
  'russianTurkestanZarafshan1874',
  'iranicaCentralAsiaRussianConquest2000',
  'morrisonRussianConquestCentralAsia2020',
  'pierceRussianCentralAsiaColonialRule1960',
  'morrisonRussianRuleSamarkand2008',
]);
for (const dimension of DIMENSIONS) {
  assert.ok(
    russianCentralAsiaEntry.dimensionInterpretations[dimension.id].citations.researchSourceIds.some((sourceId) => russianCentralAsiaSourceIds.has(sourceId)),
    `${dimension.id} needs a Russian Central Asia citation trail`,
  );
}

const congoLaborEntry = ENCYCLOPEDIA_ENTRIES['militarist-imperialist'];
const congoLaborSourceIds = new Set(['seibertBelgianCongoForcedLabor2024', 'vaessenBelgianCongoLabor2001French']);
for (const [sourceId, evidenceRole, publicationDate, languages, confidence] of [
  ['seibertBelgianCongoForcedLabor2024', 'secondary', '2024-08-21', ['English'], 'high'],
  ['vaessenBelgianCongoLabor2001French', 'secondary', '2001', ['French'], 'high'],
]) {
  assert.ok(congoLaborEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Belgian Congo labor reference trail`);
  assert.ok(JSON.stringify(congoLaborEntry.sections).includes(sourceId), `${sourceId} needs claim-level use in the Belgian Congo labor case`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs exactly one bibliography record`);
  const [record] = records;
  assert.equal(record.evidenceRole, evidenceRole);
  assert.equal(record.publicationDate, publicationDate);
  assert.equal(record.accessDate, '2026-09-19');
  assert.deepEqual(record.languages, languages);
  assert.equal(record.review.confidence, confidence);
  assert.equal(record.publicationStatus, 'link-only');
  assert.equal(record.directQuote, null);
  assert.deepEqual(record.relationships.profileEntries, ['encyclopedia:militarist-imperialist']);
}
const congoIntroduction = congoLaborEntry.sections.find(({ id }) => id === 'introduction').blocks;
assert.ok(congoIntroduction.some(({ text }) => text?.startsWith('The Belgian takeover did not make coercive labor disappear')), 'the Belgian Congo labor introduction must preserve its evidence note');
const congoSixAxisEvidence = congoLaborEntry.sections.flatMap(({ blocks = [] }) => blocks).find(({ text }) => text?.startsWith('The labor scholarship qualifies the economic reading'));
assert.ok(congoSixAxisEvidence, 'the Belgian Congo labor evidence must inform the six-axis boundary');
assert.match(congoSixAxisEvidence.text, /Seibert’s 2024 synthesis connects/);
for (const dimensionId of ['economic', 'social', 'authority']) {
  assert.ok(
    congoLaborEntry.dimensionInterpretations[dimensionId].citations.researchSourceIds.some((sourceId) => congoLaborSourceIds.has(sourceId)),
    `${dimensionId} needs a Belgian Congo labor citation trail`,
  );
}
const congoLaborVariant = congoLaborEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Belgian Congo labor coercion'));
assert.ok(congoLaborVariant, 'Belgian Congo labor coercion must remain a separate bounded variant');
assert.ok(congoLaborVariant.citations.researchSourceIds.includes('vaessenBelgianCongoLabor2001French'));
const congoLaborExample = congoLaborEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period?.startsWith('1908–1930 — Belgian colonial labor mobilization'));
assert.ok(congoLaborExample, 'Belgian Congo labor must appear as a bounded historical example');
assert.match(congoLaborExample.text, /bounded labor-political-economy interpretation/);
assert.ok(congoLaborEntry.sections.find(({ id }) => id === 'criticisms').blocks.some(({ text }) => text?.startsWith('Seibert’s 2009 article record and 2024 Oxford synthesis')));
assert.ok(congoLaborEntry.researchGaps.some((gap) => gap.startsWith('The Congo labor update adds Seibert’s 2024 Oxford synthesis')));

for (const sourceId of ['moroccoConstitutionFrench2011', 'constituteMorocco2011', 'ruizMoroccoParliamentary2014', 'elMessaoudiGovernment2015']) {
  assert.ok(monarchistEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Moroccan monarchist reference trail`);
  assert.ok(JSON.stringify(monarchistEntry.sections).includes(sourceId), `${sourceId} needs claim-level use in the Moroccan case`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs exactly one bibliography record`);
  assert.ok(records[0].relationships.profileEntries.includes('encyclopedia:monarchist'), `${sourceId} needs a monarchist backlink`);
}
const moroccoResearchIntroduction = monarchistEntry.sections.find(({ id }) => id === 'introduction').blocks.find(({ text }) => text?.startsWith('A closer reading of the 2011 Moroccan design'));
assert.ok(moroccoResearchIntroduction, 'the Moroccan entry must preserve the executive-boundary evidence note');
const moroccoResearchDescription = monarchistEntry.sections.find(({ id }) => id === 'description').blocks.find(({ text }) => text?.startsWith('The 2011 text separates'));
assert.ok(moroccoResearchDescription, 'the Moroccan description must distinguish royal and governmental functions');
const moroccoResearchHistory = monarchistEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('2011–2016 — Morocco’s parliamentary-monarchy experiment'));
assert.ok(moroccoResearchHistory, 'the Moroccan constitutional experiment must have its own historical period');
const moroccoResearchVariant = monarchistEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Morocco 2011'));
assert.match(moroccoResearchVariant.relation, /Arabic\/Gazette record/);
const moroccoResearchExample = monarchistEntry.sections.find(({ id }) => id === 'examples').blocks.find(({ text }) => text?.startsWith('Morocco’s 2011 constitutional settlement'));
assert.ok(moroccoResearchExample, 'Morocco must appear as a bounded historical example');
assert.match(moroccoResearchExample.text, /not an exact six-axis match/);
const moroccoResearchSafeguard = monarchistEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('The Morocco case also requires'));
assert.ok(moroccoResearchSafeguard, 'the Moroccan case must retain a translation-and-implementation safeguard');
assert.ok(monarchistEntry.researchGaps.some((gap) => gap.startsWith('The Morocco comparison now separates')));
const moroccoSourceIds = new Set(['moroccoConstitutionFrench2011', 'constituteMorocco2011', 'ruizMoroccoParliamentary2014', 'elMessaoudiGovernment2015']);
for (const dimension of DIMENSIONS) {
  assert.ok(
    monarchistEntry.dimensionInterpretations[dimension.id].citations.researchSourceIds.some((sourceId) => moroccoSourceIds.has(sourceId)),
    `${dimension.id} needs a Moroccan citation trail`,
  );
}

const vietnamAuthoritarianEntry = ENCYCLOPEDIA_ENTRIES['authoritarian-collectivist'];
const vietnamSourceIds = new Set([
  'vietnamConstitution1980',
  'vietnamConstitution2013',
  'cambridgeVietnamPartyLeadership2016',
  'cambridgeVietnamMarxMarket2016',
  'vnuVietnamDoiMoi1986',
]);
for (const sourceId of vietnamSourceIds) {
  assert.ok(vietnamAuthoritarianEntry.references.researchSourceIds.includes(sourceId), `${sourceId} needs a Vietnamese authoritarian-collectivist reference trail`);
  assert.ok(JSON.stringify(vietnamAuthoritarianEntry.sections).includes(sourceId), `${sourceId} needs claim-level use in the Vietnamese case`);
  const records = BIBLIOGRAPHY_RECORDS.filter((record) => record.citationIds.researchSourceIds?.includes(sourceId));
  assert.equal(records.length, 1, `${sourceId} needs exactly one bibliography record`);
  assert.ok(records[0].relationships.profileEntries.includes('encyclopedia:authoritarian-collectivist'), `${sourceId} needs an authoritarian-collectivist backlink`);
}
const vietnamDescription = vietnamAuthoritarianEntry.sections.find(({ id }) => id === 'description').blocks.find(({ text }) => text?.startsWith('Vietnam’s constitutional sequence makes the profile’s internal tension'));
assert.ok(vietnamDescription, 'the Vietnam constitutional sequence must be explicit in the entry');
const vietnamHistory = vietnamAuthoritarianEntry.sections.find(({ id }) => id === 'history').timeline.find(({ period }) => period.startsWith('2010–2013: Vietnam’s constitutional reform debate'));
assert.ok(vietnamHistory, 'the Vietnamese constitutional reform debate must have its own historical period');
const vietnamVariant = vietnamAuthoritarianEntry.sections.find(({ id }) => id === 'variants').blocks.flatMap(({ rows = [] }) => rows).find(({ label }) => label.startsWith('Vietnamese constitutional reform'));
assert.ok(vietnamVariant, 'the Vietnamese reform debate must be a distinct variant');
const vietnamExample = vietnamAuthoritarianEntry.sections.find(({ id }) => id === 'examples').blocks.flatMap(({ entries = [] }) => entries).find(({ name }) => name === 'Vietnam after Đổi Mới');
assert.match(vietnamExample.match, /contested socialist-market reform path/);
assert.match(vietnamExample.caveat, /land, labor and market histories/);
const vietnamSafeguard = vietnamAuthoritarianEntry.sections.find(({ id }) => id === 'criticisms').blocks.find(({ text }) => text?.startsWith('The Vietnam case also requires a translation-and-implementation boundary'));
assert.ok(vietnamSafeguard, 'the Vietnam case must retain a translation-and-implementation safeguard');
assert.ok(vietnamAuthoritarianEntry.researchGaps.some((gap) => gap.startsWith('Deepen country-specific scholarship') && gap.includes('2010–2013 constitutional-reform subcase')));
for (const dimension of DIMENSIONS) {
  assert.ok(
    vietnamAuthoritarianEntry.dimensionInterpretations[dimension.id].citations.researchSourceIds.some((sourceId) => vietnamSourceIds.has(sourceId)),
    `${dimension.id} needs a Vietnamese citation trail`,
  );
}

console.log(`Encyclopedia tests passed: ${Object.keys(ENCYCLOPEDIA_ENTRIES).length} entry with claim-level citation validation across ${DIMENSIONS.length} dimensions.`);
