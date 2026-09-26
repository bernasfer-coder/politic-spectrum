import assert from 'node:assert/strict';
import { BIBLIOGRAPHY_RECORDS, ENCYCLOPEDIA_ENTRIES, RESEARCH_SOURCES, RESEARCH_WORKS, RIGHTS_RECORDS } from '../src/content/index.js';
import { GEOGRAPHY_CASES, GEOGRAPHY_LABELS, GEOGRAPHY_RELATIONSHIPS } from '../src/content/geography.js';
import { validateGeography } from '../src/content/validate-geography.js';
import { filterGeographyCases, geographyHash, readGeographyState, GEOGRAPHY_DEFAULTS } from '../src/geography-model.js';

const context = { sourceIds: new Set(RESEARCH_SOURCES.map(({ id }) => id)), entryIds: new Set(Object.keys(ENCYCLOPEDIA_ENTRIES)), workIds: new Set(RESEARCH_WORKS.map(({ id }) => id)), bibliography: BIBLIOGRAPHY_RECORDS };
assert.deepEqual(validateGeography(context), []);
assert.equal(GEOGRAPHY_CASES.length, 158);
assert.equal(GEOGRAPHY_LABELS.length, 156);
const argentinaMileiCase = GEOGRAPHY_CASES.find(({ id }) => id === 'argentine-milei-libertarian-presidential-refoundation-and-contestation');
assert.equal(argentinaMileiCase.endYear, 2026);
assert.equal(argentinaMileiCase.reviewedAt, '2026-09-26');
assert.ok(argentinaMileiCase.claim.includes('1 November 2026'));
assert.ok(argentinaMileiCase.claim.includes('not why individuals voted'));
assert.ok(argentinaMileiCase.claim.includes('Buenos Aires Province'));
assert.ok(argentinaMileiCase.limitation.includes('full book;'));
assert.ok(argentinaMileiCase.sourceIds.includes('argentinaLaborModernizationLaw278022026Official'));
assert.ok(argentinaMileiCase.sourceIds.includes('argentinaSaguierWorldAccordingToMilei2026'));
assert.ok(GEOGRAPHY_CASES.some(({ id, endYear }) => id === 'argentine-postauthoritarian-democratic-and-crisis-order' && endYear === 2023), 'the distinct Argentina 1983–2023 case remains bounded and unchanged');
const haitiCase = GEOGRAPHY_CASES.find(({ id }) => id === 'haitian-post-duvalier-constitutional-and-crisis-order');
assert.equal(haitiCase.endYear, 2026);
assert.equal(haitiCase.reviewedAt, '2026-09-26');
assert.ok(haitiCase.claim.includes('conditional on security and financing'));
assert.ok(haitiCase.claim.includes('not audited final totals'));
assert.ok(haitiCase.limitation.includes('no election, referendum'));
assert.ok(haitiCase.limitation.includes('remain research gaps'));
assert.ok(GEOGRAPHY_LABELS.find(({ id }) => id === haitiCase.labelId)?.aliases.includes('Haiti political history 1986–2026'));
for (const sourceId of ['haitiCepCalendar2026', 'haitiCepStatusSeptember2026', 'haitiUnSgReportTransitionApril2026', 'haitiBinuhOhchrQ22026', 'haitiTremariaPeaceOperations2026', 'haitiJohnstonAidState2024']) {
  assert.ok(haitiCase.sourceIds.includes(sourceId), `Haiti source missing: ${sourceId}`);
  assert.equal(RIGHTS_RECORDS.researchSources[sourceId]?.reviewedAt, '2026-09-26', `Haiti rights/provenance review missing: ${sourceId}`);
}
const guyanaCase = GEOGRAPHY_CASES.find(({ id }) => id === 'guyanese-postcolonial-cooperative-socialist-and-ethnic-coalitional-order');
assert.equal(guyanaCase.endYear, 2026);
assert.equal(guyanaCase.reviewedAt, '2026-09-26');
assert.ok(guyanaCase.claim.includes('PPP/C 36, We Invest in Nationhood (WIN) 16, APNU 12 and Forward Guyana Movement 1 of 65 seats'));
assert.ok(guyanaCase.claim.includes('These are attributed, method-bounded observer judgments'));
assert.ok(guyanaCase.claim.includes('not a study of the 2025 election'));
assert.ok(guyanaCase.claim.includes('not an independently established adjudication'));
assert.ok(guyanaCase.claim.includes('These are dated institutional records and source-attributed interpretations, not numerical scores'));
assert.ok(guyanaCase.limitation.includes('No event-specific book-length study of the 2025 election or 2026 commission impasse'));
assert.ok(guyanaCase.limitation.includes('Post-August 2026 developments'));
for (const sourceId of ['guyanaCaricomElectionObservation2025', 'guyanaEuEomFinalReport2025', 'guyanaCarterFinalReport2025', 'guyanaCarterGECOMImpasseAugust2026', 'guyanaLaBennettGlobalGuyana2024']) {
  assert.ok(guyanaCase.sourceIds.includes(sourceId), `Guyana source missing: ${sourceId}`);
  assert.ok(RESEARCH_SOURCES.some(({ id }) => id === sourceId), `Guyana bibliography source missing: ${sourceId}`);
  assert.equal(RIGHTS_RECORDS.researchSources[sourceId]?.reviewedAt, '2026-09-26', `Guyana rights/provenance review missing: ${sourceId}`);
}
assert.ok(GEOGRAPHY_LABELS.find(({ id }) => id === guyanaCase.labelId)?.aliases.includes('Guyana political history 1966–2026'));
const tunisiaCase = GEOGRAPHY_CASES.find(({ id }) => id === 'tunisian-revolutionary-constitutional-transition');
assert.equal(tunisiaCase.endYear, 2024);
assert.equal(tunisiaCase.reviewedAt, '2026-09-26');
assert.ok(tunisiaCase.claim.includes('90.69%'));
assert.ok(tunisiaCase.claim.includes('28.79% turnout'));
assert.ok(tunisiaCase.claim.includes('preliminary statement'));
assert.ok(tunisiaCase.claim.includes('six axes'));
assert.ok(tunisiaCase.limitation.includes('no event-specific book-level account of the 2024 election'));
for (const sourceId of ['tunisiaIsiePresidentialElection2024', 'tunisiaAfricanUnionPreliminaryObservation2024', 'tunisiaInternationalIdeaElection2024']) {
  assert.ok(tunisiaCase.sourceIds.includes(sourceId), `Tunisia source missing: ${sourceId}`);
  assert.ok(RESEARCH_SOURCES.some(({ id }) => id === sourceId), `Tunisia bibliography source missing: ${sourceId}`);
  assert.equal(RIGHTS_RECORDS.researchSources[sourceId]?.reviewedAt, '2026-09-26', `Tunisia rights/provenance review missing: ${sourceId}`);
}
assert.ok(GEOGRAPHY_LABELS.find(({ id }) => id === tunisiaCase.labelId)?.aliases.includes('Tunisia presidential election 2024'));
const mozambiqueCase = GEOGRAPHY_CASES.find(({ id }) => id === 'mozambican-post-2019-peace-insurgency-and-electoral-contestation');
assert.equal(mozambiqueCase.endYear, 2026);
assert.equal(mozambiqueCase.reviewedAt, '2026-09-26');
assert.ok(mozambiqueCase.claim.includes('742 criminal cases'));
assert.ok(mozambiqueCase.claim.includes('two had resulted in indictments by April 2025'));
assert.ok(mozambiqueCase.claim.includes('not a universally settled total'));
assert.ok(mozambiqueCase.claim.includes('not evidence that dialogue achieved consensus'));
assert.ok(mozambiqueCase.limitation.includes('No event-specific book-length account'));
assert.ok(mozambiqueCase.limitation.includes('changing status field'));
for (const sourceId of ['mozambiqueUnExpertsPostElection2024', 'mozambiquePresidencyInclusiveDialogueMarch2025', 'mozambiqueNationalDialogueLaw2025', 'mozambiquePresidencyDialogueImplementationApril2025', 'mozambiqueUprCompilation2026', 'mozambiqueCitizenParticipaDialogue2026', 'mozambiqueHrWPostElectionKillings2025']) {
  assert.ok(mozambiqueCase.sourceIds.includes(sourceId), `Mozambique source missing: ${sourceId}`);
  assert.ok(RESEARCH_SOURCES.some(({ id }) => id === sourceId), `Mozambique bibliography source missing: ${sourceId}`);
  assert.equal(RIGHTS_RECORDS.researchSources[sourceId]?.reviewedAt, '2026-09-26', `Mozambique rights/provenance review missing: ${sourceId}`);
}
assert.ok(GEOGRAPHY_LABELS.find(({ id }) => id === mozambiqueCase.labelId)?.aliases.includes('Mozambique political history 2019–2026'));
const ghanaCurrent = GEOGRAPHY_CASES.find(({ id }) => id === 'ghanaian-fourth-republic-democratic-consolidation-and-economic-strain');
assert.equal(ghanaCurrent.endYear, 2026);
assert.equal(ghanaCurrent.reviewedAt, '2026-09-26');
assert.ok(ghanaCurrent.claim.includes('not constitutional amendments already enacted'));
assert.ok(ghanaCurrent.claim.includes('organized counter-position, not its prevalence or public consensus'));
assert.ok(ghanaCurrent.claim.includes('These distinct assessments do not establish uniform household outcomes'));
assert.ok(ghanaCurrent.limitation.includes('no event-specific book-length study of the 2025–26 Mahama administration'));
for (const sourceId of ['ghanaConstitutionReviewReports2025to26', 'ghanaGovernmentResponseConstitutionReview2026', 'ghanaConstitutionReviewImplementationCommittee2026', 'ghanaWomenGroupsConstitutionReform2026', 'ghanaBudget2026', 'ghanaImfSixthReview2026']) {
  assert.ok(ghanaCurrent.sourceIds.includes(sourceId), `Ghana source missing: ${sourceId}`);
  assert.ok(RESEARCH_SOURCES.some(({ id }) => id === sourceId), `Ghana bibliography source missing: ${sourceId}`);
  assert.equal(RIGHTS_RECORDS.researchSources[sourceId]?.reviewedAt, '2026-09-26', `Ghana rights/provenance review missing: ${sourceId}`);
}
assert.ok(GEOGRAPHY_LABELS.find(({ id }) => id === ghanaCurrent.labelId)?.aliases.includes('Ghana constitutional review 2025–2026'));
for (const { id } of GEOGRAPHY_RELATIONSHIPS) assert.ok(GEOGRAPHY_CASES.some((item) => item.relationship === id));
assert.ok(validateGeography({ ...context, cases: [{ ...GEOGRAPHY_CASES[0], startYear: 9999, sourceIds: ['missing'] }] }).length >= 3);
assert.ok(validateGeography({ ...context, cases: [{ ...GEOGRAPHY_CASES[0], limitation: '', relationship: 'current-country-score' }] }).length >= 2);
assert.equal(filterGeographyCases({ q: 'Ocalan' })[0].id, 'rojava-study-2020');
assert.equal(filterGeographyCases({ country: 'iran' })[0].id, 'iranian-postrevolutionary-constitutional-and-electoral-order');
assert.equal(filterGeographyCases({ country: 'map-100' })[0].id, 'bulgarian-2025-26-protest-and-parliamentary-realignment');
assert.equal(filterGeographyCases({ country: 'map-132' })[0].id, 'cabo-verde-postcolonial-constitutional-order-and-2026-electoral-cycle');
assert.equal(filterGeographyCases({ place: 'cabo-verde' })[0].reviewedAt, '2026-09-26');
assert.equal(filterGeographyCases({ country: 'india' })[0].id, 'india-independence-constitutional-founding');
assert.equal(filterGeographyCases({ country: 'india' }).find(({ id }) => id === 'indian-postcolonial-democratic-and-majoritarian-politics')?.id, 'indian-postcolonial-democratic-and-majoritarian-politics');
assert.equal(filterGeographyCases({ country: 'egypt' }).find(({ id }) => id === 'egyptian-postnasser-authoritarianism-revolution-and-recentralization')?.id, 'egyptian-postnasser-authoritarianism-revolution-and-recentralization');
assert.equal(filterGeographyCases({ country: 'south-africa' }).find(({ id }) => id === 'south-african-postapartheid-democratic-dominance-and-coalition-transition')?.id, 'south-african-postapartheid-democratic-dominance-and-coalition-transition');
assert.equal(filterGeographyCases({ country: 'brazil' })[0].id, 'brazil-democratic-constitutional-founding');
assert.equal(filterGeographyCases({ country: 'brazil' }).find(({ id }) => id === 'brazil-democratic-consolidation-and-polarization')?.id, 'brazil-democratic-consolidation-and-polarization');
assert.equal(filterGeographyCases({ country: 'brazil' }).find(({ id }) => id === 'brazil-post-2022-democratic-reconstruction-and-municipal-contestation')?.id, 'brazil-post-2022-democratic-reconstruction-and-municipal-contestation');
assert.equal(filterGeographyCases({ country: 'portugal' })[0].id, 'portugal-democratic-transition-constitutional-founding');
assert.equal(filterGeographyCases({ country: 'south-africa' })[0].id, 'south-africa-constitutional-transition');
assert.equal(filterGeographyCases({ country: 'spain' })[0].id, 'spain-democratic-transition-constitutional-founding');
assert.equal(filterGeographyCases({ country: 'spain' }).find(({ id }) => id === 'spanish-democratic-consolidation-and-regional-pluralism')?.id, 'spanish-democratic-consolidation-and-regional-pluralism');
const spainPluralism2026 = filterGeographyCases({ country: 'spain' }).find(({ id }) => id === 'spanish-democratic-consolidation-and-regional-pluralism');
assert.equal(spainPluralism2026.endYear, 2026);
assert.equal(spainPluralism2026.reviewedAt, '2026-09-26');
assert.equal(filterGeographyCases({ country: 'spain' }).find(({ id }) => id === 'spain-democratic-transition-constitutional-founding').endYear, 1982);
assert.ok(spainPluralism2026.claim.includes('partially granted a challenge'));
assert.ok(spainPluralism2026.claim.includes('not evidence that the government fell'));
assert.ok(spainPluralism2026.limitation.includes('No event-specific book-length scholarly study'));
for (const sourceId of ['spainConstitutionalCourtAmnesty2025', 'spainCjeuSociedadCivilCatalana2026', 'spainCjeuAcvot2026', 'spainCongressInterestGroupsDecreeVote2026', 'spainBohiguesSendraPoliticalData2025']) {
  assert.ok(spainPluralism2026.sourceIds.includes(sourceId), `Spain 2026 source missing: ${sourceId}`);
}
assert.equal(filterGeographyCases({ country: 'germany' })[0].id, 'west-german-constitutional-reconstruction');
assert.equal(filterGeographyCases({ country: 'germany' }).find(({ id }) => id === 'german-reunified-constitutional-democratic-order')?.id, 'german-reunified-constitutional-democratic-order');
assert.ok(filterGeographyCases({ country: 'germany' }).some(({ id }) => id === 'german-post-2021-coalition-crisis-and-2025-electoral-contestation'));
assert.equal(filterGeographyCases({ country: 'mexico' })[0].id, 'mexican-revolutionary-constitutional-founding');
assert.equal(filterGeographyCases({ country: 'mexico' })[1].id, 'mexican-democratic-transition-and-electoral-competition');
assert.equal(filterGeographyCases({ country: 'italy' })[0].id, 'italian-republican-constitutional-founding');
assert.equal(filterGeographyCases({ country: 'japan' })[0].id, 'japanese-meiji-constitutional-founding');
assert.equal(filterGeographyCases({ country: 'japan' }).find(({ id }) => id === 'japanese-postwar-constitutional-democratic-order')?.id, 'japanese-postwar-constitutional-democratic-order');
assert.ok(filterGeographyCases({ country: 'japan' }).some(({ id }) => id === 'japanese-post-2021-party-finance-and-2024-electoral-contestation'));
assert.equal(filterGeographyCases({ country: 'bhutan' })[0].id, 'bhutanese-democratic-constitutional-transition');
assert.equal(filterGeographyCases({ country: 'ghana' })[0].id, 'ghanaian-fourth-republic-constitutional-transition');
assert.equal(filterGeographyCases({ country: 'ghana' }).find(({ id }) => id === 'ghanaian-fourth-republic-democratic-consolidation-and-economic-strain')?.id, 'ghanaian-fourth-republic-democratic-consolidation-and-economic-strain');
assert.equal(filterGeographyCases({ country: 'nigeria' }).find(({ id }) => id === 'nigerian-fourth-republic-post-2015-militarized-federal-contestation')?.id, 'nigerian-fourth-republic-post-2015-militarized-federal-contestation');
assert.equal(filterGeographyCases({ country: 'nigeria' }).find(({ id }) => id === 'nigerian-renewed-hope-reform-and-endbadgovernance-contestation')?.id, 'nigerian-renewed-hope-reform-and-endbadgovernance-contestation');
assert.equal(filterGeographyCases({ country: 'ethiopia' })[0].id, 'ethiopian-imperial-constitutionalization');
assert.equal(filterGeographyCases({ country: 'tonga' })[0].id, 'tongan-constitutional-reform-1875-2010');
assert.equal(filterGeographyCases({ country: 'saudi-arabia' })[0].id, 'saudi-basic-law-shura-order');
assert.equal(filterGeographyCases({ country: 'oman' })[0].id, 'oman-sultani-constitutional-order');
assert.equal(filterGeographyCases({ country: 'kuwait' })[0].id, 'kuwait-constitutional-parliamentary-order');
assert.equal(filterGeographyCases({ country: 'jordan' })[0].id, 'jordanian-constitutional-monarchy');
assert.equal(filterGeographyCases({ country: 'philippines' })[0].id, 'philippine-postauthoritarian-constitutionalism');
assert.equal(filterGeographyCases({ country: 'indonesia' })[0].id, 'indonesian-reformasi-constitutionalism');
assert.equal(filterGeographyCases({ country: 'indonesia' }).find(({ id }) => id === 'indonesian-democratic-consolidation-and-regression')?.id, 'indonesian-democratic-consolidation-and-regression');
assert.equal(filterGeographyCases({ country: 'nigeria' })[0].id, 'nigerian-fourth-republic');
assert.equal(filterGeographyCases({ country: 'pakistan' })[0].id, 'pakistani-constitutional-civilian-transition');
assert.equal(filterGeographyCases({ country: 'bangladesh' })[0].id, 'bangladeshi-constitutional-parliamentary-order');
const bangladesh2026 = filterGeographyCases({ country: 'bangladesh' }).find(({ id }) => id === 'bangladeshi-post-2014-dominant-party-and-july-uprising');
assert.equal(bangladesh2026.endYear, 2026);
assert.equal(bangladesh2026.reviewedAt, '2026-09-26');
assert.ok(bangladesh2026.claim.includes('A rule initiated review; it was not a final merits judgment'));
assert.ok(bangladesh2026.claim.includes('corrected its published totals'));
assert.ok(bangladesh2026.limitation.includes('do not cover these current events'));
for (const sourceId of ['bangladeshEcpElection2026', 'bangladeshReferendumGazette2026', 'bangladeshReferendumCorrection2026', 'bangladeshJulyCharterImplementationOrder2025', 'bangladeshIpUParliamentElection2026', 'bangladeshNewGovernmentGazette2026', 'bangladeshHighCourtCharterReview2026', 'bangladeshTibPreElectionObservations2026']) {
  assert.ok(bangladesh2026.sourceIds.includes(sourceId), `Bangladesh 2026 source missing: ${sourceId}`);
}
assert.equal(filterGeographyCases({ country: 'sri-lanka' })[0].id, 'sri-lankan-constitutional-presidential-order');
assert.equal(filterGeographyCases({ country: 'nepal' })[0].id, 'nepali-constitutional-republican-transition');
const nepalFederal2026 = filterGeographyCases({ country: 'nepal' }).find(({ id }) => id === 'nepal-federal-constitutional-and-electoral-transition');
assert.ok(nepalFederal2026);
assert.equal(nepalFederal2026.endYear, 2026);
assert.equal(nepalFederal2026.reviewedAt, '2026-09-26');
assert.ok(nepalFederal2026.claim.includes('without implying a single youth platform'));
assert.ok(nepalFederal2026.claim.includes('no final judgment is inferred'));
assert.ok(nepalFederal2026.claim.includes('None of this is a numerical ideological score'));
assert.ok(nepalFederal2026.limitation.includes('No 2025–26 event-specific book-length history was located'));
assert.ok(nepalFederal2026.limitation.includes('exact underlying result tables and denominator conventions require Nepali-language reconciliation'));
for (const sourceId of ['nepalElectionCommission2026Results', 'nepalPrimeMinisterOfficeBalendraShah2026', 'nepalElectionCommission2026ObservationDRCN', 'nepalElectionObservationANFREL2026', 'nepalUNDPOnlineElectionMonitoring2026', 'nepalNationalHumanRightsCommissionYouthMovement2026', 'nepalISASYouthProtestCommissionAnalysis2026', 'nepalSupremeCourtHouseRulesInterimOrder2026', 'nepalPresidentConstitutionDayStatement2026', 'nepalDevelopmentUpdateWorldBankApril2026']) {
  assert.ok(nepalFederal2026.sourceIds.includes(sourceId), `Nepal 2026 source missing: ${sourceId}`);
  assert.ok(RESEARCH_SOURCES.some(({ id }) => id === sourceId), `Nepal bibliography source missing: ${sourceId}`);
  assert.equal(RIGHTS_RECORDS.researchSources[sourceId]?.reviewedAt, '2026-09-26', `Nepal rights/provenance review missing: ${sourceId}`);
}
assert.equal(filterGeographyCases({ country: 'afghanistan' })[0].id, 'afghan-posttaliban-republican-order');
const afghanEmirate2026 = filterGeographyCases({ country: 'afghanistan' }).find(({ id }) => id === 'afghan-taliban-de-facto-emirate-and-international-transition');
assert.ok(afghanEmirate2026);
assert.equal(afghanEmirate2026.endYear, 2026);
assert.equal(afghanEmirate2026.reviewedAt, '2026-09-26');
assert.ok(afghanEmirate2026.claim.includes('warrants and allegations are not convictions'));
assert.ok(afghanEmirate2026.claim.includes('not independent verification or legal/factual determinations'));
assert.ok(afghanEmirate2026.claim.includes('not a current-country ideological score'));
assert.ok(afghanEmirate2026.limitation.includes('Two 2025 books now provide book-length interpretive perspectives'));
assert.ok(afghanEmirate2026.limitation.includes('full PVPV and Decree No. 18 gazette texts in authoritative Dari/Pashto'));
assert.equal(filterGeographyCases({ country: 'afghanistan' }).find(({ id }) => id === 'afghan-posttaliban-republican-order')?.endYear, 2021);
for (const sourceId of ['asatryanTalibanland2025', 'larsonMukhopadhyaySharifiPowerAuthorityAfghanistan2025', 'unamaAfghanistanPvpvImplementation2025', 'unAfghanistanSecretaryGeneralReportDecember2025', 'iccAfghanistanWarrantsAkhundzadaHaqqani2025', 'unamaAfghanistanWomenJusticeConsultation2026', 'unamaAfghanistanDecree18JudicialSeparation2026', 'worldBankAfghanistanEconomicMonitorAugust2026']) {
  assert.ok(afghanEmirate2026.sourceIds.includes(sourceId), `Afghanistan 2026 source missing: ${sourceId}`);
  assert.ok(RESEARCH_SOURCES.some(({ id }) => id === sourceId), `Afghanistan bibliography source missing: ${sourceId}`);
  assert.equal(RIGHTS_RECORDS.researchSources[sourceId]?.reviewedAt, '2026-09-26', `Afghanistan rights/provenance review missing: ${sourceId}`);
}
assert.equal(filterGeographyCases({ country: 'burkina-faso' })[0].id, 'burkinabe-postcolonial-revolutionary-and-transition-history');
assert.equal(filterGeographyCases({ country: 'sudan' })[0].id, 'sudanese-islamist-military-and-revolutionary-transition');
assert.equal(filterGeographyCases({ country: 'algeria' })[0].id, 'algerian-postwar-constitutional-hirak-transition');
assert.equal(filterGeographyCases({ country: 'tunisia' })[0].id, 'tunisian-revolutionary-constitutional-transition');
assert.equal(filterGeographyCases({ country: 'libya' })[0].id, 'libyan-postcolonial-fragmented-constitutional-transition');
assert.equal(filterGeographyCases({ country: 'morocco' })[0].id, 'moroccan-constitutional-monarchical-reform-transition');
assert.ok(filterGeographyCases({ country: 'morocco' }).some(({ id }) => id === 'moroccan-post-2021-coalition-and-social-protection-horizon'));
assert.equal(filterGeographyCases({ country: 'vietnam' })[0].id, 'vietnamese-socialist-constitutional-doi-moi-transition');
assert.equal(filterGeographyCases({ country: 'map-418' })[0].id, 'lao-revolutionary-socialist-and-postsocialist-order');
const laos2026 = filterGeographyCases({ country: 'map-418' }).find(({ id }) => id === 'lao-post-2021-debt-stability-and-asean-chairmanship');
assert.equal(laos2026.endYear, 2026);
assert.equal(laos2026.reviewedAt, '2026-09-26');
assert.ok(laos2026.claim.includes('4,670,050 among 4,764,384 registered voters (98.0%)'));
assert.ok(laos2026.claim.includes('not an election-observation mission'));
assert.ok(laos2026.claim.includes('pending formal Assembly resolution'));
assert.ok(laos2026.claim.includes('these remain drafts, not enacted law'));
assert.ok(laos2026.limitation.includes('BTI 2026 covers 1 February 2023–31 January 2025'));
assert.ok(laos2026.limitation.includes('no event-specific book-length study of the 2026 election was located'));
for (const sourceId of ['laosKplCandidates2026', 'laosBtiCountryReport2026', 'laosIpuParlineElection2026', 'laosKplResults2026', 'laosKplTenthAssembly2026', 'laosKplXaysomphoneDeath2026', 'laosKplActingSpeaker2026', 'laosIpuParlineAssemblySeptember2026', 'laosKplStandingCommitteeSeptember2026']) {
  assert.ok(laos2026.sourceIds.includes(sourceId), `Laos 2026 source missing: ${sourceId}`);
  assert.ok(RESEARCH_SOURCES.some(({ id }) => id === sourceId), `Laos bibliography source missing: ${sourceId}`);
  assert.equal(RIGHTS_RECORDS.researchSources[sourceId]?.reviewedAt, '2026-09-26', `Laos rights/provenance review missing: ${sourceId}`);
}
assert.equal(filterGeographyCases({ country: 'map-104' })[0].id, 'myanmar-constitutional-military-and-transition-order');
const myanmarSpring2026 = filterGeographyCases({ country: 'map-104' }).find(({ id }) => id === 'myanmar-post-2021-spring-revolution-and-competing-governance');
assert.ok(myanmarSpring2026);
assert.equal(myanmarSpring2026.startYear, 2021);
assert.equal(myanmarSpring2026.endYear, 2026);
assert.equal(myanmarSpring2026.reviewedAt, '2026-09-26');
assert.ok(myanmarSpring2026.claim.includes('phase-III township totals differed across official announcements (61 versus 63)'));
assert.ok(myanmarSpring2026.claim.includes('not independent verification'));
assert.ok(myanmarSpring2026.claim.includes('not ASEAN endorsement'));
assert.ok(myanmarSpring2026.claim.includes('investigative reporting is not a criminal judgment'));
assert.ok(myanmarSpring2026.limitation.includes('none is an event-specific history'));
assert.ok(myanmarSpring2026.limitation.includes('not a current-country ideological score'));
for (const sourceId of ['myanmarElectionPhases2026Moi', 'myanmarElectionResults2026Uec', 'myanmarElectionHumanRightsOHCHR2026', 'myanmarIimmAnnualReport2026', 'myanmarElectionResultAP2026', 'myanmarPresidentElectionAP2026', 'myanmarPresidentElectionOfficial2026', 'myanmarAseanRetreatStatement2026']) {
  assert.ok(myanmarSpring2026.sourceIds.includes(sourceId), `Myanmar 2026 source missing: ${sourceId}`);
  assert.ok(RESEARCH_SOURCES.some(({ id }) => id === sourceId), `Myanmar bibliography source missing: ${sourceId}`);
  assert.equal(RIGHTS_RECORDS.researchSources[sourceId]?.reviewedAt, '2026-09-26', `Myanmar rights/provenance review missing: ${sourceId}`);
}
assert.equal(filterGeographyCases({ country: 'map-104' }).find(({ id }) => id === 'myanmar-constitutional-military-and-transition-order')?.endYear, 2021);
assert.equal(filterGeographyCases({ country: 'map-410' })[0].id, 'south-korean-constitutional-democratic-and-developmental-order');
assert.equal(filterGeographyCases({ country: 'map-422' })[0].id, 'lebanese-posttaif-consociational-and-protest-order');
const lebanon2026 = filterGeographyCases({ country: 'map-422' })[0];
assert.equal(lebanon2026.endYear, 2026);
assert.equal(lebanon2026.reviewedAt, '2026-09-26');
assert.ok(lebanon2026.claim.includes('Decision 7/2026'));
assert.ok(lebanon2026.claim.includes('not evidence that those goals were achieved'));
assert.ok(lebanon2026.claim.includes('not support treating a ceasefire announcement as full cessation'));
assert.ok(lebanon2026.limitation.includes('book-length scholarship specifically analyzing the 2023–2026 sequence was not located'));
for (const sourceId of ['lebanonPresidencyGovernmentAims2025', 'lebanonWorldBankReconstructionNeeds2025', 'lebanonGazetteLaw412026', 'lebanonConstitutionalCouncilDecision72026', 'lebanonUNIFILUpdateAugust2026', 'lebanonCommonsLibraryUNIFIL2026']) {
  assert.ok(lebanon2026.sourceIds.includes(sourceId), `Lebanon source missing: ${sourceId}`);
  assert.ok(RESEARCH_SOURCES.some(({ id }) => id === sourceId), `Lebanon bibliography source missing: ${sourceId}`);
  assert.ok(RIGHTS_RECORDS.researchSources[sourceId]?.reviewedAt === '2026-09-26', `Lebanon rights/provenance review missing: ${sourceId}`);
}
const syria2026 = filterGeographyCases({ country: 'syria' }).find(({ id }) => id === 'syrian-uprising-civil-war-and-fragmented-transition');
assert.equal(syria2026.endYear, 2026);
assert.equal(syria2026.reviewedAt, '2026-09-26');
assert.ok(syria2026.claim.includes('automated translation'));
assert.ok(syria2026.claim.includes('no total is inferred'));
assert.ok(syria2026.limitation.includes('event-specific book-length scholarly analysis of that period was not located'));
for (const sourceId of ['syriaConstitutionalDeclaration2025Sana', 'syriaConstitutionalDeclaration2025EnglishTranslation', 'syriaTransitionalGovernmentFormation2025Sana', 'syriaPeoplesAssemblyElectionResults2025Sana', 'syriaCoastalViolenceCommissionReport2025', 'syriaSDFAgreementImplementationJanuary2026UN', 'syriaPeoplesAssemblyInauguralSession2026Sana', 'syriaSecurityCouncilBriefingJuly2026', 'syriaSecurityCouncilTransitionSeptember2026DPPA', 'syriaUNCommonCountryAnalysis2026']) {
  assert.ok(syria2026.sourceIds.includes(sourceId), `Syria 2026 source missing: ${sourceId}`);
  assert.ok(RESEARCH_SOURCES.some(({ id }) => id === sourceId), `Syria bibliography source missing: ${sourceId}`);
  assert.equal(RIGHTS_RECORDS.researchSources[sourceId]?.reviewedAt, '2026-09-26', `Syria rights/provenance review missing: ${sourceId}`);
}
assert.equal(filterGeographyCases({ country: 'map-170' })[0].id, 'colombian-constitutional-peace-and-contestation-order');
const sudanWar = filterGeographyCases({ country: 'sudan' }).find(({ id }) => id === 'sudanese-war-fragmented-authority-and-civilian-politics-2023-2026');
assert.ok(sudanWar, 'Sudan’s post-2023 war must be independently represented');
assert.equal(sudanWar.startYear, 2023);
assert.equal(sudanWar.endYear, 2026);
assert.notEqual(sudanWar.id, filterGeographyCases({ country: 'sudan' })[0].id);
assert.ok(sudanWar.claim.includes('explicitly states its access and remote-monitoring limits'));
assert.ok(sudanWar.limitation.includes('No complete event-specific monograph on the 2023–2026 war was located'));
for (const sourceId of ['sudanJeddahDeclaration2023', 'sudanUnHumanRightsReport2026', 'sudanOchaHumanitarianPlan2026', 'sudanOchaSecurityCouncilBriefing2026', 'sudanRevolutionContinues2026', 'sudanBerridgeTransitionsChapter2026', 'sudanSrinivasanWhenPeaceKillsPolitics2021']) {
  assert.ok(sudanWar.sourceIds.includes(sourceId), `Sudan war source missing: ${sourceId}`);
}
const colombia2026 = filterGeographyCases({ country: 'map-170' }).find(({ id }) => id === 'colombian-constitutional-peace-and-contestation-order');
assert.equal(colombia2026.endYear, 2026);
assert.equal(colombia2026.reviewedAt, '2026-09-26');
assert.ok(colombia2026.claim.includes('later docket and disposition of that case were not verified'));
assert.ok(colombia2026.limitation.includes('No 2026 event-specific book-length scholarly analysis was located'));
for (const sourceId of ['colombiaRegistraduriaElectionCalendar2026', 'colombiaCneFinalPresidentialElection2026', 'colombiaCanalCapitalPresidentialScrutiny2026', 'colombiaElPaisPresidentialScrutiny2026', 'colombiaEuEomFirstRound2026', 'colombiaOasFirstRound2026', 'colombiaCouncilStatePresidentialAnnulment2026']) {
  assert.ok(colombia2026.sourceIds.includes(sourceId), `Colombia 2026 source missing: ${sourceId}`);
}
assert.equal(filterGeographyCases({ country: 'map-032' })[0].id, 'argentine-postauthoritarian-democratic-and-crisis-order');
assert.ok(filterGeographyCases({ country: 'map-032' }).some(({ id }) => id === 'argentine-milei-libertarian-presidential-refoundation-and-contestation'));
assert.equal(filterGeographyCases({ country: 'map-152' })[0].id, 'chilean-postauthoritarian-constitutional-and-constituent-order');
const chileTransition2026 = filterGeographyCases({ country: 'map-152' }).find(({ id }) => id === 'chilean-post-2022-constitutional-process-and-2025-electoral-transition');
assert.ok(chileTransition2026);
assert.equal(chileTransition2026.startYear, 2022);
assert.equal(chileTransition2026.endYear, 2026);
assert.equal(chileTransition2026.reviewedAt, '2026-09-26');
assert.ok(chileTransition2026.claim.includes('58.17% of valid votes'));
assert.ok(chileTransition2026.claim.includes('constitutional term would begin on 11 March 2026'));
assert.ok(chileTransition2026.claim.includes('not voter motivations, a singular public will'));
assert.ok(chileTransition2026.claim.includes('too recent and insufficiently book-studied'));
assert.ok(chileTransition2026.limitation.includes('No event-specific book-length scholarly study of the 2025–26 electoral transition was located'));
const chileTransitionAtlasLabel = GEOGRAPHY_LABELS.find(({ id }) => id === chileTransition2026.labelId);
assert.ok(chileTransitionAtlasLabel.aliases.includes('Chile presidential transition and new legislature 2026'));
assert.ok(chileTransitionAtlasLabel.sourceIds.includes('chileServelProclamation2026'));
assert.ok(chileTransitionAtlasLabel.sourceIds.includes('chileSenateTransfer2026'));
assert.equal(filterGeographyCases({ country: 'map-152' }).find(({ id }) => id === 'chilean-postauthoritarian-constitutional-and-constituent-order')?.endYear, 2022);
for (const sourceId of ['chileServelProclamation2026', 'chileTricelProclamation2026', 'chileSenateInstallation2026', 'chileSenateTransfer2026', 'chilePresidencyInauguralAddress2026', 'chileIpuChamberElection2025']) {
  assert.ok(chileTransition2026.sourceIds.includes(sourceId), `Chile transition source missing: ${sourceId}`);
  assert.ok(RESEARCH_SOURCES.some(({ id }) => id === sourceId), `Chile bibliography source missing: ${sourceId}`);
  assert.equal(RIGHTS_RECORDS.researchSources[sourceId]?.reviewedAt, '2026-09-26', `Chile rights/provenance review missing: ${sourceId}`);
}
assert.equal(filterGeographyCases({ country: 'map-858' })[0].id, 'uruguayan-postauthoritarian-democratic-and-party-system-order');
assert.ok(filterGeographyCases({ country: 'map-858' }).some(({ id }) => id === 'uruguayan-lacalle-pou-coalition-and-orsi-electoral-transition'));
assert.equal(filterGeographyCases({ country: 'map-068' })[0].id, 'bolivian-plurinational-constitutional-and-contested-democratic-order');
const bolivia = filterGeographyCases({ country: 'map-068' })[0];
assert.equal(bolivia.startYear, 2000);
assert.equal(bolivia.endYear, 2025);
assert.equal(bolivia.reviewedAt, '2026-09-26');
assert.ok(bolivia.claim.includes('3,579,534 valid votes (54.96%)'));
assert.ok(bolivia.evidenceKind.includes('two election-specific journal analyses (abstracts consulted)'));
assert.ok(bolivia.limitation.includes('Book-length coverage specifically analyzing 2020–2025 was not located'));
for (const sourceId of ['boliviaIachrAnnualReport2024', 'boliviaOepElection2025OfficialResults', 'boliviaOepRunoff2025OfficialResults', 'boliviaOepMandateTransmission2025', 'boliviaIpuParlineElection2025', 'boliviaEueomFinalReport2025', 'boliviaOasRunoffObservation2025', 'boliviaAscarrunzAguilarElection2026', 'boliviaAnriaMasCollapsed2025', 'boliviaIdeaElectionTracker2025', 'boliviaApRunoffElection2025']) {
  assert.ok(bolivia.sourceIds.includes(sourceId), `Bolivia 2020–2025 source missing: ${sourceId}`);
}
assert.equal(filterGeographyCases({ country: 'map-600' })[0].id, 'paraguayan-postauthoritarian-party-dominant-and-fragile-democratic-order');
const paraguay2026 = filterGeographyCases({ country: 'map-600' }).find(({ id }) => id === 'paraguayan-postauthoritarian-party-dominant-and-fragile-democratic-order');
assert.equal(paraguay2026.endYear, 2026);
assert.equal(paraguay2026.reviewedAt, '2026-09-26');
assert.ok(paraguay2026.claim.includes('no 2026 results, election-day conditions or post-election judgments are asserted'));
assert.ok(paraguay2026.claim.includes('I did not verify a court docket, admissibility ruling, interim order or merits judgment'));
assert.ok(paraguay2026.limitation.includes('No event-specific book-length scholarly study of the 2024–2026 law/election sequence was located'));
for (const sourceId of ['paraguayTsjeMunicipalCalendar2026', 'paraguayTsjeMunicipalPrepSep222026', 'paraguayTsjeTrepResolution1942026', 'paraguayTsjeObserverPlan2026', 'paraguayDecree4806Osfl2025', 'paraguayMefLaw7363Faq2026', 'paraguayDecidamosPoliticalRights2025', 'paraguayCodehupyCivicSpace2025', 'paraguayAmnestyHumanRights2025', 'paraguaySobrevivenciaLawChallenge2026']) {
  assert.ok(paraguay2026.sourceIds.includes(sourceId), `Paraguay 2026 source missing: ${sourceId}`);
}
assert.equal(filterGeographyCases({ country: 'map-604' })[0].id, 'peruvian-fujimori-to-fragmented-democratic-order');
assert.equal(filterGeographyCases({ country: 'map-218' })[0].id, 'ecuadorian-constitutional-dollarized-and-crisis-democratic-order');
assert.ok(filterGeographyCases({ country: 'map-218' }).some(({ id }) => id === 'ecuadorian-noboa-security-referendum-and-reelection-order'));
assert.equal(filterGeographyCases({ country: 'map-862' })[0].id, 'venezuelan-bolivarian-constitutional-and-authoritarian-transition');
assert.equal(filterGeographyCases({ country: 'map-328' })[0].id, 'guyanese-postcolonial-cooperative-socialist-and-ethnic-coalitional-order');
assert.equal(filterGeographyCases({ country: 'map-780' })[0].id, 'trinidadian-postcolonial-party-and-multiracial-constitutional-order');
assert.equal(filterGeographyCases({ country: 'map-052' })[0].id, 'barbadian-postcolonial-labour-and-republican-constitutional-order');
assert.equal(filterGeographyCases({ country: 'map-388' })[0].id, 'jamaican-postcolonial-labour-and-constitutional-reform-order');
assert.equal(filterGeographyCases({ country: 'map-332' })[0].id, 'haitian-post-duvalier-constitutional-and-crisis-order');
assert.equal(filterGeographyCases({ country: 'map-214' })[0].id, 'dominican-post-trujillo-constitutional-and-democratic-transition');
assert.equal(filterGeographyCases({ country: 'map-192' })[0].id, 'cuban-revolutionary-socialist-constitutional-and-political-order');
assert.equal(filterGeographyCases({ country: 'map-840' })[0].id, 'united-states-constitutional-federal-and-contested-democratic-order');
assert.equal(filterGeographyCases({ country: 'map-124' })[0].id, 'canadian-federal-bilingual-constitutional-and-contested-democratic-order');
assert.equal(filterGeographyCases({ country: 'map-036' })[0].id, 'australian-federal-settler-colonial-and-multicultural-constitutional-order');
assert.equal(filterGeographyCases({ country: 'map-156' })[0].id, 'chinese-revolutionary-party-state-reform-and-developmental-order');
assert.equal(filterGeographyCases({ country: 'map-643' })[0].id, 'russian-post-soviet-constitutional-federal-and-authoritarian-order');
assert.equal(filterGeographyCases({ country: 'mozambique' })[0].id, 'mozambican-liberation-socialist-and-peace-transition');
assert.ok(filterGeographyCases({ country: 'mozambique' }).some(({ id }) => id === 'mozambican-post-2019-peace-insurgency-and-electoral-contestation'));
assert.equal(filterGeographyCases({ country: 'tanzania' })[0].id, 'tanzanian-ujamaa-union-and-multiparty-transition');
assert.ok(filterGeographyCases({ country: 'tanzania' }).some(({ id }) => id === 'tanzanian-samia-opening-and-2025-electoral-contestation'));
assert.equal(filterGeographyCases({ country: 'kenya' })[0].id, 'kenyan-postcolonial-constitutional-and-devolution-transition');
assert.ok(filterGeographyCases({ country: 'kenya' }).some(({ id }) => id === 'kenyan-ruto-era-succession-and-finance-bill-protest-order'));
assert.equal(filterGeographyCases({ country: 'uganda' })[0].id, 'ugandan-postcolonial-constitutional-and-movement-transition');
assert.ok(filterGeographyCases({ country: 'uganda' }).some(({ id }) => id === 'ugandan-late-museveni-order-and-2026-electoral-contestation'));
const uganda2026 = filterGeographyCases({ country: 'uganda' }).find(({ id }) => id === 'ugandan-late-museveni-order-and-2026-electoral-contestation');
assert.equal(uganda2026.reviewedAt, '2026-09-26');
assert.ok(uganda2026.claim.includes('[2026] UGSC 7 (26 February)'));
assert.ok(uganda2026.claim.includes('not a merits ruling on the petition’s allegations'));
assert.ok(uganda2026.limitation.includes('allegations were not decided on their merits'));
for (const sourceId of ['ugandaJudiciaryKasibanteDiscoveryHearing2026', 'ugandaSupremeCourtKasibanteWithdrawal2026']) {
  assert.ok(uganda2026.sourceIds.includes(sourceId), `Uganda post-election source missing: ${sourceId}`);
}
assert.ok(filterGeographyCases({ country: 'map-862' }).some(({ id }) => id === 'venezuelan-post-2024-election-repression-and-2025-electoral-contestation'));
assert.equal(filterGeographyCases({ country: 'rwanda' })[0].id, 'rwandan-postgenocide-constitutional-developmental-order');
assert.equal(filterGeographyCases({ country: 'senegal' })[0].id, 'senegalese-postcolonial-constitutional-and-democratic-transition');
assert.equal(filterGeographyCases({ country: 'gambia' })[0].id, 'gambian-postcolonial-constitutional-and-authoritarian-transition');
assert.equal(filterGeographyCases({ country: 'sierra-leone' })[0].id, 'sierra-leone-postcolonial-constitutional-and-postconflict-transition');
assert.equal(filterGeographyCases({ country: 'liberia' })[0].id, 'liberian-postcolonial-constitutional-and-postwar-transition');
assert.equal(filterGeographyCases({ country: 'cote-divoire' })[0].id, 'cote-divoire-postcolonial-constitutional-and-postconflict-transition');
assert.equal(filterGeographyCases({ country: 'chad' })[0].id, 'chadian-postcolonial-civil-war-and-constitutional-transition');
assert.equal(filterGeographyCases({ country: 'cameroon' })[0].id, 'cameroonian-postcolonial-bilingual-and-anglophone-crisis-history');
assert.ok(filterGeographyCases({ country: 'iraq' }).some(({ id }) => id === 'iraqi-postinvasion-constitutional-and-protest-transition'));
assert.equal(filterGeographyCases({ country: 'france' }).find(({ id }) => id === 'french-fifth-republic-constitutional-and-political-history')?.id, 'french-fifth-republic-constitutional-and-political-history');
const franceFifthRepublic = filterGeographyCases({ country: 'france' }).find(({ id }) => id === 'french-fifth-republic-constitutional-and-political-history');
assert.equal(franceFifthRepublic.endYear, 2026);
assert.equal(franceFifthRepublic.reviewedAt, '2026-09-26');
assert.ok(franceFifthRepublic.claim.includes('not an ordinary affirmative vote on the bill'));
assert.ok(franceFifthRepublic.claim.includes('not described as introduced, adopted or implemented'));
assert.ok(franceFifthRepublic.limitation.includes('not an official parliamentary filing'));
for (const sourceId of ['franceAssemblyBudget2026Adoption', 'franceOfficialJournalBudgetLaw2026', 'franceBarangerBeaudDissolution2025', 'franceSnegaroffBezzinaAnatomie2025', 'franceBendjaballahSaugerPoliticalData2024', 'franceParisienDraftBudget2027September2026']) {
  assert.ok(franceFifthRepublic.sourceIds.includes(sourceId), `France 2026 source missing: ${sourceId}`);
}
assert.equal(filterGeographyCases({ country: 'zimbabwe' })[0].id, 'zimbabwean-liberation-land-and-constitutional-transition');
assert.ok(filterGeographyCases({ country: 'zimbabwe' }).some(({ id }) => id === 'zimbabwean-second-republic-and-2023-electoral-contestation'));
assert.equal(filterGeographyCases({ label: 'nasserism' }).length, 2);
assert.equal(filterGeographyCases({ continent: 'Oceania' }).length, 13);
assert.equal(filterGeographyCases({ continent: 'Oceania' })[0].id, 'new-zealand-bicultural-constitutional-and-welfare-democratic-order');
const newZealand2026 = filterGeographyCases({ country: 'map-554' }).find(({ id }) => id === 'new-zealand-post-2023-coalition-and-treaty-principles-contestation');
assert.equal(newZealand2026.endYear, 2026);
assert.equal(newZealand2026.reviewedAt, '2026-09-26');
assert.ok(newZealand2026.claim.includes('no candidate, polling, result, turnout, observation or post-election conclusion is asserted'));
assert.ok(newZealand2026.claim.includes('not yet in effect'));
assert.ok(newZealand2026.limitation.includes('no event-specific book-length scholarly account was located'));
for (const sourceId of ['newZealandElectoralAmendmentAct2025', 'newZealandJusticeCommitteeElectionInquiry2024', 'newZealandElectoralCommission2026KeyDates', 'newZealandElectoralCommissionMaoriRollAugust2026', 'newZealandLocalGovernmentSystemImprovementsAct2026', 'newZealandLocalGovernmentSystemImprovementsMinistry2026', 'newZealandLocalGovernmentActGovernmentRationale2026', 'newZealandIwiResponseCommitteeVoting2026']) {
  assert.ok(newZealand2026.sourceIds.includes(sourceId), `New Zealand 2026 source missing: ${sourceId}`);
}
assert.equal(filterGeographyCases({ continent: 'Antarctica' })[0].id, 'antarctic-treaty-system');
assert.equal(filterGeographyCases({ place: 'antarctica' })[0].labelId, 'antarctic-treaty-governance');
assert.equal(filterGeographyCases({ period: '2000-onward', relationship: 'implemented' }).length, 134, 'the atlas should expose all dated post-2000 implemented cases');
assert.deepEqual(filterGeographyCases({ period: '2000-onward', relationship: 'implemented' }).map(({ id }) => id).sort().filter((id) => id !== 'cabo-verde-postcolonial-constitutional-order-and-2026-electoral-cycle'), ['afghan-posttaliban-republican-order', 'afghan-taliban-de-facto-emirate-and-international-transition', 'algerian-hirak-constitutional-and-electoral-transition', 'algerian-postwar-constitutional-hirak-transition', 'antarctic-treaty-system', 'argentine-milei-libertarian-presidential-refoundation-and-contestation', 'argentine-postauthoritarian-democratic-and-crisis-order', 'australian-federal-settler-colonial-and-multicultural-constitutional-order', 'bangladeshi-constitutional-parliamentary-order', 'bangladeshi-post-2014-dominant-party-and-july-uprising', 'barbadian-postcolonial-labour-and-republican-constitutional-order', 'bhutanese-democratic-consolidation-and-constitutional-monarchy', 'bhutanese-democratic-constitutional-transition', 'bolivian-plurinational-constitutional-and-contested-democratic-order', 'brazil-democratic-consolidation-and-polarization', 'brazil-post-2022-democratic-reconstruction-and-municipal-contestation', 'brazil-post-2024-judicial-accountability-and-democratic-horizon', 'burkinabe-postcolonial-revolutionary-and-transition-history', 'cambodian-conflict-reconstruction-and-constitutional-order', 'cambodian-post-2023-dynastic-succession-and-reform-horizon', 'cameroonian-postcolonial-bilingual-and-anglophone-crisis-history', 'canadian-federal-bilingual-constitutional-and-contested-democratic-order', 'chadian-postcolonial-civil-war-and-constitutional-transition', 'chilean-post-2022-constitutional-process-and-2025-electoral-transition', 'chilean-postauthoritarian-constitutional-and-constituent-order', 'chinese-revolutionary-party-state-reform-and-developmental-order', 'colombian-constitutional-peace-and-contestation-order', 'cote-divoire-postcolonial-constitutional-and-postconflict-transition', 'cuban-revolutionary-socialist-constitutional-and-political-order', 'dominican-post-trujillo-constitutional-and-democratic-transition', 'ecuadorian-constitutional-dollarized-and-crisis-democratic-order', 'ecuadorian-noboa-security-referendum-and-reelection-order', 'egyptian-postnasser-authoritarianism-revolution-and-recentralization', 'ethiopian-post-2021-peace-and-federal-conflict-transition', 'ethiopian-revolutionary-federal-and-conflict-transition', 'fijian-constitutional-coups-and-post-coup-reconstruction', 'fijian-post-2022-coalition-and-constitutional-review', 'french-fifth-republic-constitutional-and-political-history', 'gambian-postcolonial-constitutional-and-authoritarian-transition', 'german-post-2021-coalition-crisis-and-2025-electoral-contestation', 'german-reunified-constitutional-democratic-order', 'ghanaian-fourth-republic-constitutional-transition', 'ghanaian-fourth-republic-democratic-consolidation-and-economic-strain', 'guyanese-postcolonial-cooperative-socialist-and-ethnic-coalitional-order', 'haitian-post-duvalier-constitutional-and-crisis-order', 'indian-postcolonial-democratic-and-majoritarian-politics', 'indonesian-democratic-consolidation-and-regression', 'indonesian-reformasi-constitutionalism', 'iranian-postrevolutionary-constitutional-and-electoral-order', 'iraqi-postinvasion-constitutional-and-protest-transition', 'italian-post-2022-meloni-government-and-institutional-contestation', 'italian-republican-party-system-transformation', 'jamaican-postcolonial-labour-and-constitutional-reform-order', 'japanese-post-2021-party-finance-and-2024-electoral-contestation', 'japanese-postwar-constitutional-democratic-order', 'jordanian-constitutional-monarchy', 'kenyan-postcolonial-constitutional-and-devolution-transition', 'kenyan-ruto-era-succession-and-finance-bill-protest-order', 'kuwait-constitutional-parliamentary-order', 'lao-post-2021-debt-stability-and-asean-chairmanship', 'lao-revolutionary-socialist-and-postsocialist-order', 'lebanese-posttaif-consociational-and-protest-order', 'liberian-postcolonial-constitutional-and-postwar-transition', 'libyan-postcolonial-fragmented-constitutional-transition', 'malaysian-post-2018-coalition-transition', 'malian-postcolonial-constitutional-and-military-transition', 'mexican-democratic-transition-and-electoral-competition', 'moroccan-constitutional-monarchical-reform-transition', 'moroccan-post-2021-coalition-and-social-protection-horizon', 'mozambican-liberation-socialist-and-peace-transition', 'mozambican-post-2019-peace-insurgency-and-electoral-contestation', 'myanmar-constitutional-military-and-transition-order', 'myanmar-post-2021-spring-revolution-and-competing-governance', 'nepal-federal-constitutional-and-electoral-transition', 'nepali-constitutional-republican-transition', 'new-zealand-bicultural-constitutional-and-welfare-democratic-order', 'new-zealand-post-2023-coalition-and-treaty-principles-contestation', 'nigerian-fourth-republic', 'nigerian-fourth-republic-post-2015-militarized-federal-contestation', 'nigerian-renewed-hope-reform-and-endbadgovernance-contestation', 'nigerien-postcolonial-constitutional-and-military-refoundation', 'oman-sultani-constitutional-order', 'pakistani-constitutional-civilian-transition', 'pakistani-post-2013-civil-military-and-electoral-contestation', 'papua-new-guinean-home-grown-constitutional-and-postcolonial-transition', 'papua-new-guinean-post-2022-coalition-and-reform', 'paraguayan-postauthoritarian-party-dominant-and-fragile-democratic-order', 'peruvian-fujimori-to-fragmented-democratic-order', 'peruvian-post-2021-crisis-and-boluarte-transition', 'philippine-postauthoritarian-constitutionalism', 'portuguese-democratic-consolidation-and-europeanization', 'russian-post-soviet-constitutional-federal-and-authoritarian-order', 'rwandan-post-2017-constitutional-developmental-and-electoral-contestation', 'rwandan-postgenocide-constitutional-developmental-order', 'samoan-constitutional-customary-and-electoral-transition', 'samoan-post-2021-transition-and-2025-election', 'saudi-basic-law-shura-order', 'senegalese-post-2012-democratic-contestation-and-2024-transition', 'senegalese-postcolonial-constitutional-and-democratic-transition', 'sierra-leone-postcolonial-constitutional-and-postconflict-transition', 'solomon-islands-constitutional-customary-and-postcolonial-transition', 'south-african-postapartheid-democratic-dominance-and-coalition-transition', 'south-korean-constitutional-democratic-and-developmental-order', 'spanish-democratic-consolidation-and-regional-pluralism', 'sri-lankan-constitutional-presidential-order', 'sri-lankan-post-2015-crisis-and-aragalaya', 'sudanese-islamist-military-and-revolutionary-transition', 'surinamese-postcolonial-military-and-plural-electoral-order', 'syrian-uprising-civil-war-and-fragmented-transition', 'tanzanian-post-2015-developmental-security-and-reform-transition', 'tanzanian-samia-opening-and-2025-electoral-contestation', 'tanzanian-ujamaa-union-and-multiparty-transition', 'thai-post-2014-constitutional-and-electoral-contestation', 'thai-post-2023-realignment-and-constitutional-court-governance', 'timor-leste-decolonization-occupation-and-restored-constitutional-order', 'timor-leste-post-2023-government-and-asean-accession', 'tongan-constitutional-reform-1875-2010', 'tongan-post-2010-constitutional-and-electoral-transition', 'trinidadian-postcolonial-party-and-multiracial-constitutional-order', 'tunisian-revolutionary-constitutional-transition', 'turkish-akp-presidential-system-and-electoral-contestation', 'ugandan-late-museveni-order-and-2026-electoral-contestation', 'ugandan-postcolonial-constitutional-and-movement-transition', 'united-states-constitutional-federal-and-contested-democratic-order', 'uruguayan-lacalle-pou-coalition-and-orsi-electoral-transition', 'uruguayan-postauthoritarian-democratic-and-party-system-order', 'vanuatuan-decolonization-customary-and-constitutional-transition', 'venezuelan-bolivarian-constitutional-and-authoritarian-transition', 'venezuelan-post-2024-election-repression-and-2025-electoral-contestation', 'vietnam-post-2021-party-state-reform-and-institutional-restructuring', 'vietnamese-socialist-constitutional-doi-moi-transition', 'zimbabwean-liberation-land-and-constitutional-transition', 'zimbabwean-second-republic-and-2023-electoral-contestation']);
assert.deepEqual(filterGeographyCases({ period: '2000-onward', relationship: 'implemented' }).map(({ id }) => id).sort().filter((id) => id !== 'cabo-verde-postcolonial-constitutional-order-and-2026-electoral-cycle'), ['afghan-posttaliban-republican-order', 'afghan-taliban-de-facto-emirate-and-international-transition', 'algerian-hirak-constitutional-and-electoral-transition', 'algerian-postwar-constitutional-hirak-transition', 'antarctic-treaty-system', 'argentine-milei-libertarian-presidential-refoundation-and-contestation', 'argentine-postauthoritarian-democratic-and-crisis-order', 'australian-federal-settler-colonial-and-multicultural-constitutional-order', 'bangladeshi-constitutional-parliamentary-order', 'bangladeshi-post-2014-dominant-party-and-july-uprising', 'barbadian-postcolonial-labour-and-republican-constitutional-order', 'bhutanese-democratic-consolidation-and-constitutional-monarchy', 'bhutanese-democratic-constitutional-transition', 'bolivian-plurinational-constitutional-and-contested-democratic-order', 'brazil-democratic-consolidation-and-polarization', 'brazil-post-2022-democratic-reconstruction-and-municipal-contestation', 'brazil-post-2024-judicial-accountability-and-democratic-horizon', 'burkinabe-postcolonial-revolutionary-and-transition-history', 'cambodian-conflict-reconstruction-and-constitutional-order', 'cambodian-post-2023-dynastic-succession-and-reform-horizon', 'cameroonian-postcolonial-bilingual-and-anglophone-crisis-history', 'canadian-federal-bilingual-constitutional-and-contested-democratic-order', 'chadian-postcolonial-civil-war-and-constitutional-transition', 'chilean-post-2022-constitutional-process-and-2025-electoral-transition', 'chilean-postauthoritarian-constitutional-and-constituent-order', 'chinese-revolutionary-party-state-reform-and-developmental-order', 'colombian-constitutional-peace-and-contestation-order', 'cote-divoire-postcolonial-constitutional-and-postconflict-transition', 'cuban-revolutionary-socialist-constitutional-and-political-order', 'dominican-post-trujillo-constitutional-and-democratic-transition', 'ecuadorian-constitutional-dollarized-and-crisis-democratic-order', 'ecuadorian-noboa-security-referendum-and-reelection-order', 'egyptian-postnasser-authoritarianism-revolution-and-recentralization', 'ethiopian-post-2021-peace-and-federal-conflict-transition', 'ethiopian-revolutionary-federal-and-conflict-transition', 'fijian-constitutional-coups-and-post-coup-reconstruction', 'fijian-post-2022-coalition-and-constitutional-review', 'french-fifth-republic-constitutional-and-political-history', 'gambian-postcolonial-constitutional-and-authoritarian-transition', 'german-post-2021-coalition-crisis-and-2025-electoral-contestation', 'german-reunified-constitutional-democratic-order', 'ghanaian-fourth-republic-constitutional-transition', 'ghanaian-fourth-republic-democratic-consolidation-and-economic-strain', 'guyanese-postcolonial-cooperative-socialist-and-ethnic-coalitional-order', 'haitian-post-duvalier-constitutional-and-crisis-order', 'indian-postcolonial-democratic-and-majoritarian-politics', 'indonesian-democratic-consolidation-and-regression', 'indonesian-reformasi-constitutionalism', 'iranian-postrevolutionary-constitutional-and-electoral-order', 'iraqi-postinvasion-constitutional-and-protest-transition', 'italian-post-2022-meloni-government-and-institutional-contestation', 'italian-republican-party-system-transformation', 'jamaican-postcolonial-labour-and-constitutional-reform-order', 'japanese-post-2021-party-finance-and-2024-electoral-contestation', 'japanese-postwar-constitutional-democratic-order', 'jordanian-constitutional-monarchy', 'kenyan-postcolonial-constitutional-and-devolution-transition', 'kenyan-ruto-era-succession-and-finance-bill-protest-order', 'kuwait-constitutional-parliamentary-order', 'lao-post-2021-debt-stability-and-asean-chairmanship', 'lao-revolutionary-socialist-and-postsocialist-order', 'lebanese-posttaif-consociational-and-protest-order', 'liberian-postcolonial-constitutional-and-postwar-transition', 'libyan-postcolonial-fragmented-constitutional-transition', 'malaysian-post-2018-coalition-transition', 'malian-postcolonial-constitutional-and-military-transition', 'mexican-democratic-transition-and-electoral-competition', 'moroccan-constitutional-monarchical-reform-transition', 'moroccan-post-2021-coalition-and-social-protection-horizon', 'mozambican-liberation-socialist-and-peace-transition', 'mozambican-post-2019-peace-insurgency-and-electoral-contestation', 'myanmar-constitutional-military-and-transition-order', 'myanmar-post-2021-spring-revolution-and-competing-governance', 'nepal-federal-constitutional-and-electoral-transition', 'nepali-constitutional-republican-transition', 'new-zealand-bicultural-constitutional-and-welfare-democratic-order', 'new-zealand-post-2023-coalition-and-treaty-principles-contestation', 'nigerian-fourth-republic', 'nigerian-fourth-republic-post-2015-militarized-federal-contestation', 'nigerian-renewed-hope-reform-and-endbadgovernance-contestation', 'nigerien-postcolonial-constitutional-and-military-refoundation', 'oman-sultani-constitutional-order', 'pakistani-constitutional-civilian-transition', 'pakistani-post-2013-civil-military-and-electoral-contestation', 'papua-new-guinean-home-grown-constitutional-and-postcolonial-transition', 'papua-new-guinean-post-2022-coalition-and-reform', 'paraguayan-postauthoritarian-party-dominant-and-fragile-democratic-order', 'peruvian-fujimori-to-fragmented-democratic-order', 'peruvian-post-2021-crisis-and-boluarte-transition', 'philippine-postauthoritarian-constitutionalism', 'portuguese-democratic-consolidation-and-europeanization', 'russian-post-soviet-constitutional-federal-and-authoritarian-order', 'rwandan-post-2017-constitutional-developmental-and-electoral-contestation', 'rwandan-postgenocide-constitutional-developmental-order', 'samoan-constitutional-customary-and-electoral-transition', 'samoan-post-2021-transition-and-2025-election', 'saudi-basic-law-shura-order', 'senegalese-post-2012-democratic-contestation-and-2024-transition', 'senegalese-postcolonial-constitutional-and-democratic-transition', 'sierra-leone-postcolonial-constitutional-and-postconflict-transition', 'solomon-islands-constitutional-customary-and-postcolonial-transition', 'south-african-postapartheid-democratic-dominance-and-coalition-transition', 'south-korean-constitutional-democratic-and-developmental-order', 'spanish-democratic-consolidation-and-regional-pluralism', 'sri-lankan-constitutional-presidential-order', 'sri-lankan-post-2015-crisis-and-aragalaya', 'sudanese-islamist-military-and-revolutionary-transition', 'surinamese-postcolonial-military-and-plural-electoral-order', 'syrian-uprising-civil-war-and-fragmented-transition', 'tanzanian-post-2015-developmental-security-and-reform-transition', 'tanzanian-samia-opening-and-2025-electoral-contestation', 'tanzanian-ujamaa-union-and-multiparty-transition', 'thai-post-2014-constitutional-and-electoral-contestation', 'thai-post-2023-realignment-and-constitutional-court-governance', 'timor-leste-decolonization-occupation-and-restored-constitutional-order', 'timor-leste-post-2023-government-and-asean-accession', 'tongan-constitutional-reform-1875-2010', 'tongan-post-2010-constitutional-and-electoral-transition', 'trinidadian-postcolonial-party-and-multiracial-constitutional-order', 'tunisian-revolutionary-constitutional-transition', 'turkish-akp-presidential-system-and-electoral-contestation', 'ugandan-late-museveni-order-and-2026-electoral-contestation', 'ugandan-postcolonial-constitutional-and-movement-transition', 'united-states-constitutional-federal-and-contested-democratic-order', 'uruguayan-lacalle-pou-coalition-and-orsi-electoral-transition', 'uruguayan-postauthoritarian-democratic-and-party-system-order', 'vanuatuan-decolonization-customary-and-constitutional-transition', 'venezuelan-bolivarian-constitutional-and-authoritarian-transition', 'venezuelan-post-2024-election-repression-and-2025-electoral-contestation', 'vietnam-post-2021-party-state-reform-and-institutional-restructuring', 'vietnamese-socialist-constitutional-doi-moi-transition', 'zimbabwean-liberation-land-and-constitutional-transition', 'zimbabwean-second-republic-and-2023-electoral-contestation']);
assert.deepEqual(filterGeographyCases({ period: '2000-onward', relationship: 'implemented' }).map(({ id }) => id).sort().filter((id) => id !== 'cabo-verde-postcolonial-constitutional-order-and-2026-electoral-cycle'), ['afghan-posttaliban-republican-order', 'afghan-taliban-de-facto-emirate-and-international-transition', 'algerian-hirak-constitutional-and-electoral-transition', 'algerian-postwar-constitutional-hirak-transition', 'antarctic-treaty-system', 'argentine-milei-libertarian-presidential-refoundation-and-contestation', 'argentine-postauthoritarian-democratic-and-crisis-order', 'australian-federal-settler-colonial-and-multicultural-constitutional-order', 'bangladeshi-constitutional-parliamentary-order', 'bangladeshi-post-2014-dominant-party-and-july-uprising', 'barbadian-postcolonial-labour-and-republican-constitutional-order', 'bhutanese-democratic-consolidation-and-constitutional-monarchy', 'bhutanese-democratic-constitutional-transition', 'bolivian-plurinational-constitutional-and-contested-democratic-order', 'brazil-democratic-consolidation-and-polarization', 'brazil-post-2022-democratic-reconstruction-and-municipal-contestation', 'brazil-post-2024-judicial-accountability-and-democratic-horizon', 'burkinabe-postcolonial-revolutionary-and-transition-history', 'cambodian-conflict-reconstruction-and-constitutional-order', 'cambodian-post-2023-dynastic-succession-and-reform-horizon', 'cameroonian-postcolonial-bilingual-and-anglophone-crisis-history', 'canadian-federal-bilingual-constitutional-and-contested-democratic-order', 'chadian-postcolonial-civil-war-and-constitutional-transition', 'chilean-post-2022-constitutional-process-and-2025-electoral-transition', 'chilean-postauthoritarian-constitutional-and-constituent-order', 'chinese-revolutionary-party-state-reform-and-developmental-order', 'colombian-constitutional-peace-and-contestation-order', 'cote-divoire-postcolonial-constitutional-and-postconflict-transition', 'cuban-revolutionary-socialist-constitutional-and-political-order', 'dominican-post-trujillo-constitutional-and-democratic-transition', 'ecuadorian-constitutional-dollarized-and-crisis-democratic-order', 'ecuadorian-noboa-security-referendum-and-reelection-order', 'egyptian-postnasser-authoritarianism-revolution-and-recentralization', 'ethiopian-post-2021-peace-and-federal-conflict-transition', 'ethiopian-revolutionary-federal-and-conflict-transition', 'fijian-constitutional-coups-and-post-coup-reconstruction', 'fijian-post-2022-coalition-and-constitutional-review', 'french-fifth-republic-constitutional-and-political-history', 'gambian-postcolonial-constitutional-and-authoritarian-transition', 'german-post-2021-coalition-crisis-and-2025-electoral-contestation', 'german-reunified-constitutional-democratic-order', 'ghanaian-fourth-republic-constitutional-transition', 'ghanaian-fourth-republic-democratic-consolidation-and-economic-strain', 'guyanese-postcolonial-cooperative-socialist-and-ethnic-coalitional-order', 'haitian-post-duvalier-constitutional-and-crisis-order', 'indian-postcolonial-democratic-and-majoritarian-politics', 'indonesian-democratic-consolidation-and-regression', 'indonesian-reformasi-constitutionalism', 'iranian-postrevolutionary-constitutional-and-electoral-order', 'iraqi-postinvasion-constitutional-and-protest-transition', 'italian-post-2022-meloni-government-and-institutional-contestation', 'italian-republican-party-system-transformation', 'jamaican-postcolonial-labour-and-constitutional-reform-order', 'japanese-post-2021-party-finance-and-2024-electoral-contestation', 'japanese-postwar-constitutional-democratic-order', 'jordanian-constitutional-monarchy', 'kenyan-postcolonial-constitutional-and-devolution-transition', 'kenyan-ruto-era-succession-and-finance-bill-protest-order', 'kuwait-constitutional-parliamentary-order', 'lao-post-2021-debt-stability-and-asean-chairmanship', 'lao-revolutionary-socialist-and-postsocialist-order', 'lebanese-posttaif-consociational-and-protest-order', 'liberian-postcolonial-constitutional-and-postwar-transition', 'libyan-postcolonial-fragmented-constitutional-transition', 'malaysian-post-2018-coalition-transition', 'malian-postcolonial-constitutional-and-military-transition', 'mexican-democratic-transition-and-electoral-competition', 'moroccan-constitutional-monarchical-reform-transition', 'moroccan-post-2021-coalition-and-social-protection-horizon', 'mozambican-liberation-socialist-and-peace-transition', 'mozambican-post-2019-peace-insurgency-and-electoral-contestation', 'myanmar-constitutional-military-and-transition-order', 'myanmar-post-2021-spring-revolution-and-competing-governance', 'nepal-federal-constitutional-and-electoral-transition', 'nepali-constitutional-republican-transition', 'new-zealand-bicultural-constitutional-and-welfare-democratic-order', 'new-zealand-post-2023-coalition-and-treaty-principles-contestation', 'nigerian-fourth-republic', 'nigerian-fourth-republic-post-2015-militarized-federal-contestation', 'nigerian-renewed-hope-reform-and-endbadgovernance-contestation', 'nigerien-postcolonial-constitutional-and-military-refoundation', 'oman-sultani-constitutional-order', 'pakistani-constitutional-civilian-transition', 'pakistani-post-2013-civil-military-and-electoral-contestation', 'papua-new-guinean-home-grown-constitutional-and-postcolonial-transition', 'papua-new-guinean-post-2022-coalition-and-reform', 'paraguayan-postauthoritarian-party-dominant-and-fragile-democratic-order', 'peruvian-fujimori-to-fragmented-democratic-order', 'peruvian-post-2021-crisis-and-boluarte-transition', 'philippine-postauthoritarian-constitutionalism', 'portuguese-democratic-consolidation-and-europeanization', 'russian-post-soviet-constitutional-federal-and-authoritarian-order', 'rwandan-post-2017-constitutional-developmental-and-electoral-contestation', 'rwandan-postgenocide-constitutional-developmental-order', 'samoan-constitutional-customary-and-electoral-transition', 'samoan-post-2021-transition-and-2025-election', 'saudi-basic-law-shura-order', 'senegalese-post-2012-democratic-contestation-and-2024-transition', 'senegalese-postcolonial-constitutional-and-democratic-transition', 'sierra-leone-postcolonial-constitutional-and-postconflict-transition', 'solomon-islands-constitutional-customary-and-postcolonial-transition', 'south-african-postapartheid-democratic-dominance-and-coalition-transition', 'south-korean-constitutional-democratic-and-developmental-order', 'spanish-democratic-consolidation-and-regional-pluralism', 'sri-lankan-constitutional-presidential-order', 'sri-lankan-post-2015-crisis-and-aragalaya', 'sudanese-islamist-military-and-revolutionary-transition', 'surinamese-postcolonial-military-and-plural-electoral-order', 'syrian-uprising-civil-war-and-fragmented-transition', 'tanzanian-post-2015-developmental-security-and-reform-transition', 'tanzanian-samia-opening-and-2025-electoral-contestation', 'tanzanian-ujamaa-union-and-multiparty-transition', 'thai-post-2014-constitutional-and-electoral-contestation', 'thai-post-2023-realignment-and-constitutional-court-governance', 'timor-leste-decolonization-occupation-and-restored-constitutional-order', 'timor-leste-post-2023-government-and-asean-accession', 'tongan-constitutional-reform-1875-2010', 'tongan-post-2010-constitutional-and-electoral-transition', 'trinidadian-postcolonial-party-and-multiracial-constitutional-order', 'tunisian-revolutionary-constitutional-transition', 'turkish-akp-presidential-system-and-electoral-contestation', 'ugandan-late-museveni-order-and-2026-electoral-contestation', 'ugandan-postcolonial-constitutional-and-movement-transition', 'united-states-constitutional-federal-and-contested-democratic-order', 'uruguayan-lacalle-pou-coalition-and-orsi-electoral-transition', 'uruguayan-postauthoritarian-democratic-and-party-system-order', 'vanuatuan-decolonization-customary-and-constitutional-transition', 'venezuelan-bolivarian-constitutional-and-authoritarian-transition', 'venezuelan-post-2024-election-repression-and-2025-electoral-contestation', 'vietnam-post-2021-party-state-reform-and-institutional-restructuring', 'vietnamese-socialist-constitutional-doi-moi-transition', 'zimbabwean-liberation-land-and-constitutional-transition', 'zimbabwean-second-republic-and-2023-electoral-contestation']);
assert.ok(!filterGeographyCases({ country: 'egypt' }).some(({ id }) => id === 'nasser-regional-legacy'), 'regional influence is not automatically a country claim');
const all = filterGeographyCases({});
assert.deepEqual(all.map(({ startYear }) => startYear), all.map(({ startYear }) => startYear).sort((a, b) => a - b));
const state = { ...GEOGRAPHY_DEFAULTS, q: 'Öcalan & communes', view: 'timeline', country: 'syria' };
assert.deepEqual(readGeographyState(geographyHash(state)), state);
assert.equal(readGeographyState('#geography?label=missing&case=missing&view=map').label, 'all');
assert.doesNotThrow(() => readGeographyState('#geography?q=%E0%A4%A&country=%'));
assert.equal(readGeographyState(`#geography?q=${'x'.repeat(500)}`).q.length, 200);
assert.equal(filterGeographyCases(readGeographyState('#geography?case=chp-statement-2025')).length, 1);
console.log('Geography tests passed: 158 dated cases, 156 unscored labels, citations, boundaries, filters and share URLs.');
