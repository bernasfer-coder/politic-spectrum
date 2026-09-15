import { RESEARCH_WORKS } from './research.js';

const REVIEWED_AT = '2026-09-12';
const RESEARCH_WORKS_REVIEWED_AT = '2026-09-13';

function record(rightsStatus, license, commercialUse, publicationStatus, action, notes) {
  return {
    reviewedAt: REVIEWED_AT,
    rightsStatus,
    license,
    commercialUse,
    publicationStatus,
    action,
    notes,
  };
}

const LINK_ONLY = record(
  'copyrighted / link-only',
  'No reuse licence identified for the referenced page or publication.',
  'Original summaries and links only; no copied text, tables, screenshots, or media cleared.',
  'link-only',
  'Use as a source for independent analysis and link to the original. Do not reproduce the source content.',
  'Citation is not a licence to republish the work.',
);

const PUBLIC_DOMAIN_CANDIDATE = record(
  'public-domain candidate',
  'Underlying historical work may be public domain; the specific edition or translation is not automatically cleared.',
  'Verify the exact edition, translation, jurisdiction, and moral-rights position before commercial quotation or redistribution.',
  'review-required',
  'Use a stable bibliographic link and an original paraphrase. Quote only after the edition/translation review is recorded.',
  'Public-domain status belongs to a work and edition in a jurisdiction, not automatically to every online transcription or translation.',
);

const PERMISSION_SENSITIVE = record(
  'permission-sensitive',
  'Copyrighted or rights status not cleared for reproduction.',
  'No commercial reproduction, translation, adaptation, or redistribution cleared.',
  'link-only',
  'Link and paraphrase independently. Obtain permission or qualified legal review before reproducing expressive text or media.',
  'A short quote may still require a case-specific exception analysis.',
);

const RESTRICTED_DATA = record(
  'restricted-data',
  'Terms of use restrict redistribution and/or commercial use.',
  'Do not publish the original dataset, bulk extracts, or a mirror from this repository without written permission.',
  'link-only',
  'Use only permitted citations and derived summaries. Preserve the provider’s terms, provenance, and version information.',
  'Derived facts and independently authored descriptions require their own provenance record.',
);

const OPEN_LICENSE = record(
  'open-license',
  'Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0).',
  'Commercial use is allowed when attribution and ShareAlike obligations are followed.',
  'allowed-with-attribution',
  'If data or adapted data is distributed, include the required attribution, licence link, version, and indication of changes.',
  'This status applies to the V-Dem dataset terms, not automatically to every page, graphic, or third-party source linked from V-Dem.',
);

const OFFICIAL_TEXT = record(
  'official or institutional text / jurisdiction-dependent',
  'The official text is publicly accessible, but no blanket commercial-reuse licence is recorded for this project.',
  'Publish an independent summary and link to the official text. Do not assume that public access clears reproduction, translation, or derivative publication.',
  'link-only',
  'Link to the official repository and paraphrase independently. Verify the issuing institution’s terms before reproducing text, translations, or facsimiles.',
  'Legal and international instruments may have special publication rules, but the exact repository and jurisdiction still control reuse.',
);

const COMMUNITY_CONTROLLED = record(
  'community-controlled / permission-sensitive',
  'No blanket commercial-reuse licence identified for the oral tradition, community-held knowledge, or modern transcription/translation.',
  'Do not commercially reproduce, adapt, or package the tradition, performance, translation, or transcription without source-owner or community review.',
  'link-only',
  'Use contextual description and a stable link only. Preserve community attribution and distinguish living oral transmission from a later written edition.',
  'A public archive or UNESCO listing documents access or recognition; it does not automatically grant commercial rights to every version or translation.',
);

const PUBLIC_DOMAIN_CANDIDATE_WORK_IDS = new Set([
  'plato-republic',
  'aristotle-politics',
  'confucius-analects',
  'kautilya-arthashastra',
  'ptahhotep-instruction',
  'hammurabi-code',
  'thucydides-peloponnesian-war',
  'polybius-histories',
  'cicero-de-republica',
  'augustine-city-of-god',
  'justinian-corpus-juris-civilis',
  'aquinas-de-regno',
  'magna-carta-1215',
  'constitution-medina',
  'laozi-dao-de-jing',
  'sunzi-art-of-war',
  'mencius',
  'xunzi',
  'mozi',
  'han-feizi',
  'book-lord-shang',
  'ashoka-edicts',
  'manusmriti',
  'tirukkural',
  'agganna-sutta',
  'al-farabi-virtuous-city',
  'al-mawardi-ordinances',
  'nizam-siyasatnama',
  'ibn-khaldun-muqaddimah',
  'machiavelli-prince',
  'machiavelli-discourses',
  'grotius-rights-war-peace',
  'hobbes-leviathan',
  'locke-second-treatise',
  'rousseau-social-contract',
  'montesquieu-spirit-laws',
  'wollstonecraft-vindication',
  'federalist-papers',
  'tocqueville-democracy-america',
  'mill-on-liberty',
  'marx-engels-communist-manifesto',
  'maimonides-mishneh-torah',
  'rizal-philippines-century',
]);

const OFFICIAL_TEXT_WORK_IDS = new Set([
  'constitution-united-states',
  'constitution-india',
  'constitution-south-africa',
  'universal-declaration-human-rights',
  'treaty-waitangi',
]);

const COMMUNITY_CONTROLLED_WORK_IDS = new Set([
  'great-law-peace',
  'manden-charter',
  'sunjata-epic',
  'florentine-codex',
]);

function researchWorkRights(work) {
  const base = OFFICIAL_TEXT_WORK_IDS.has(work.id)
    ? OFFICIAL_TEXT
    : COMMUNITY_CONTROLLED_WORK_IDS.has(work.id)
      ? COMMUNITY_CONTROLLED
      : PUBLIC_DOMAIN_CANDIDATE_WORK_IDS.has(work.id)
        ? PUBLIC_DOMAIN_CANDIDATE
        : PERMISSION_SENSITIVE;

  const focus = work.originalLanguage.includes('translated') || work.originalLanguage.includes('translations')
    ? 'Translation and edition review is mandatory because the inventory includes later translations.'
    : work.sourceType.includes('manuscript')
      ? 'Archive, manuscript-image, and transcription rights must be checked separately.'
      : work.sourceType.includes('inscription') || work.sourceType.includes('legal')
        ? 'Check the exact inscription, official repository, transcription, and jurisdiction before quoting.'
        : 'Check the exact edition, transcription, translation, and repository terms before quoting.';

  return {
    ...base,
    reviewedAt: RESEARCH_WORKS_REVIEWED_AT,
    notes: `${base.notes} ${focus} Inventory record: ${work.title} (${work.originalLanguage}).`,
  };
}

const RESEARCH_WORK_RIGHTS = Object.fromEntries(
  RESEARCH_WORKS.map((work) => [work.id, researchWorkRights(work)]),
);

const RIGHTS_RECORDS = {
  researchWorks: RESEARCH_WORK_RIGHTS,
  researchSources: {
    panXu: { ...LINK_ONLY, notes: 'Scholarly article used as a claim-level reference; the article text is not reproduced.' },
    sepSocialism: { ...LINK_ONLY, notes: 'SEP grants limited user rights and states that commercial distribution is not generally cleared.' },
    sepLuxemburg: { ...LINK_ONLY, notes: 'SEP grants limited user rights and states that commercial distribution is not generally cleared.' },
    sepLiberalism: { ...LINK_ONLY, notes: 'SEP grants limited user rights and states that commercial distribution is not generally cleared.' },
    sepLibertarianism: { ...LINK_ONLY, notes: 'SEP grants limited user rights and states that commercial distribution is not generally cleared.' },
    sepMill: { ...LINK_ONLY, notes: 'SEP grants limited user rights and states that commercial distribution is not generally cleared.' },
    sepLibertyPositiveNegative: { ...LINK_ONLY, notes: 'SEP grants limited user rights and states that commercial distribution is not generally cleared.' },
    sepConservatism: { ...LINK_ONLY, notes: 'SEP grants limited user rights and states that commercial distribution is not generally cleared.' },
    sepNationalism: { ...LINK_ONLY, notes: 'SEP grants limited user rights and states that commercial distribution is not generally cleared.' },
    vdem: { ...OPEN_LICENSE },
    wvs: { ...RESTRICTED_DATA, notes: 'WVS documentation states that data access/use is subject to non-redistribution terms and, for some files, non-commercial conditions.' },
    ches: { ...PERMISSION_SENSITIVE, notes: 'The public site provides datasets and codebooks, but this project does not rely on a cleared right to redistribute CHES files.' },
    manifesto: { ...RESTRICTED_DATA, notes: 'Manifesto Project terms prohibit redistribution except when authorized in writing and require provenance and citation.' },
    foreignPolicy: { ...LINK_ONLY, notes: 'Journal article used as a linked scholarly source; no article text, figures, or tables are reproduced.' },
    oecdWelfareModels: { ...LINK_ONLY, notes: 'OECD comparative policy source used for independent synthesis of welfare-regime distinctions; no OECD text, tables, or graphics are reproduced.' },
    ghdiGodesberg: { ...LINK_ONLY, notes: 'Historical document repository used for independent synthesis of the 1959 SPD programme; no GHDI text, scans, or translation are reproduced.' },
    jauresArchive: { ...LINK_ONLY, notes: 'Primary-source archive used as a linked historical source; no translated text or archive material is reproduced.' },
    openTextbook: { ...RESTRICTED_DATA, license: 'CC BY-NC 4.0 (as listed by Open Textbook Library).', commercialUse: 'Non-commercial reuse only under the licence; commercial reproduction or adaptation is not cleared.', notes: 'Use the textbook for research and link-level citation. Do not copy its chapters, tables, or wording into an ad-supported product without permission.' },
    sepAnarchism: { ...LINK_ONLY, notes: 'SEP grants limited user rights and states that commercial distribution is not generally cleared.' },
    sepFascism: { ...LINK_ONLY, notes: 'SEP grants limited user rights and states that commercial distribution is not generally cleared.' },
    sepFeminism: { ...LINK_ONLY, notes: 'SEP grants limited user rights and states that commercial distribution is not generally cleared.' },
    sepPopulism: { ...LINK_ONLY, notes: 'SEP grants limited user rights and states that commercial distribution is not generally cleared.' },
    sepConfucianism: { ...LINK_ONLY, notes: 'SEP grants limited user rights and states that commercial distribution is not generally cleared.' },
    sepLegalism: { ...LINK_ONLY, notes: 'SEP grants limited user rights and states that commercial distribution is not generally cleared.' },
    sepMedieval: { ...LINK_ONLY, notes: 'SEP grants limited user rights and states that commercial distribution is not generally cleared.' },
    ushmmFascism: { ...PERMISSION_SENSITIVE, notes: 'Institutional educational source used for historical context; reproduce no USHMM text, images, or graphics.' },
    ushmmCommunism: { ...PERMISSION_SENSITIVE, notes: 'Institutional educational source used for bounded historical context; reproduce no USHMM text, images, or graphics.' },
    bpbFascism: { ...LINK_ONLY, notes: 'German federal civic-education source used for independent historical synthesis; no bpb text, images, or graphics are reproduced.' },
    bpbNationalSocialism: { ...LINK_ONLY, notes: 'German federal civic-education source used for independent historical synthesis; no bpb text, images, or graphics are reproduced.' },
    panAfricanism: { ...LINK_ONLY, notes: 'Scholarly article used as a linked source; no article text, figures, or tables are reproduced.' },
    sepReligionPolitics: { ...LINK_ONLY, notes: 'SEP grants limited user rights and states that commercial distribution is not generally cleared.' },
  },
  sourceLinks: {
    smith: { ...LINK_ONLY },
    locke: { ...LINK_ONLY },
    bakunin: { ...LINK_ONLY },
    bernstein: { ...LINK_ONLY },
    ostrom: { ...PERMISSION_SENSITIVE, notes: 'Nobel Prize page used as a link to the lecture; no Nobel Foundation text, PDF, or media is reproduced.' },
    sen: { ...LINK_ONLY },
    fanon: { ...PERMISSION_SENSITIVE, notes: 'Publisher page used as a link; the copyrighted translation and book text are not reproduced.' },
    dubois: { ...LINK_ONLY },
    gandhi: { ...LINK_ONLY },
    marx: { ...LINK_ONLY },
    lenin: { ...LINK_ONLY },
    friedman: { ...LINK_ONLY },
    hayek: { ...LINK_ONLY },
    mill: { ...LINK_ONLY },
    nozik: { ...LINK_ONLY },
    hitler: { ...PERMISSION_SENSITIVE, notes: 'US Holocaust Memorial Museum page used as a link; no institutional text or media is copied.' },
    mussolini: { ...LINK_ONLY },
    burke: { ...LINK_ONLY },
    degaulle: { ...LINK_ONLY },
    palme: { ...LINK_ONLY },
    freedomChina: { ...PERMISSION_SENSITIVE, notes: 'Freedom House requires prior approval for commercial use of its content; the app currently links and writes independent summaries only.' },
    freedomNorthKorea: { ...PERMISSION_SENSITIVE, notes: 'Freedom House requires prior approval for commercial use of its content; the app currently links and writes independent summaries only.' },
    freedomVietnam: { ...PERMISSION_SENSITIVE, notes: 'Freedom House requires prior approval for commercial use of its content; the app currently links and writes independent summaries only.' },
    freedomNetherlands: { ...PERMISSION_SENSITIVE, notes: 'Freedom House requires prior approval for commercial use of its content; the app currently links and writes independent summaries only.' },
    freedomDenmark: { ...PERMISSION_SENSITIVE, notes: 'Freedom House requires prior approval for commercial use of its content; the app currently links and writes independent summaries only.' },
    freedomSwitzerland: { ...PERMISSION_SENSITIVE, notes: 'Freedom House requires prior approval for commercial use of its content; the app currently links and writes independent summaries only.' },
    freedomHungary: { ...PERMISSION_SENSITIVE, notes: 'Freedom House requires prior approval for commercial use of its content; the app currently links and writes independent summaries only.' },
    freedomIndia: { ...PERMISSION_SENSITIVE, notes: 'Freedom House requires prior approval for commercial use of its content; the app currently links and writes independent summaries only.' },
    freedomSouthAfrica: { ...PERMISSION_SENSITIVE, notes: 'Freedom House requires prior approval for commercial use of its content; the app currently links and writes independent summaries only.' },
    freedomNorway: { ...PERMISSION_SENSITIVE, notes: 'Freedom House requires prior approval for commercial use of its content; the app currently links and writes independent summaries only.' },
    freedomSweden: { ...PERMISSION_SENSITIVE, notes: 'Freedom House requires prior approval for commercial use of its content; the app currently links and writes independent summaries only.' },
    freedomItaly: { ...PERMISSION_SENSITIVE, notes: 'Freedom House requires prior approval for commercial use of its content; the app currently links and writes independent summaries only.' },
    renan: { ...LINK_ONLY, notes: 'Biographical reference used for an independent summary of Renan’s account of nationhood; no Britannica text is reproduced.' },
    kant: { ...LINK_ONLY, notes: 'Biographical reference used for an independent summary of Kant’s political thought; no Britannica text is reproduced.' },
    king: { ...LINK_ONLY, notes: 'University archive used as a link to primary and biographical materials; no archive text, images, or media are reproduced.' },
    morgenthau: { ...LINK_ONLY, notes: 'Biographical reference used for an independent summary of classical realism; no Britannica text is reproduced.' },
    holocaust: { ...PERMISSION_SENSITIVE, notes: 'US Holocaust Memorial Museum page used as a link; no institutional text or media is copied.' },
  },
  authorReferences: {
    marxEngelsManifesto: { ...PUBLIC_DOMAIN_CANDIDATE },
    leninStateRevolution: { ...PUBLIC_DOMAIN_CANDIDATE },
    bernsteinEvolutionarySocialism: { ...PUBLIC_DOMAIN_CANDIDATE },
    luxemburgReformRevolution: { ...PUBLIC_DOMAIN_CANDIDATE, publicationStatus: 'review-required', notes: 'The historical work may be public domain, but the specific English translation and online transcription must be verified before commercial quotation.' },
    jauresSocialistHistory: { ...PUBLIC_DOMAIN_CANDIDATE, publicationStatus: 'review-required', notes: 'The historical work may be public domain, but the specific English translation and online transcription must be verified before commercial quotation.' },
    adamSmithWealth: { ...PUBLIC_DOMAIN_CANDIDATE },
    constantLibertyModerns: { ...PUBLIC_DOMAIN_CANDIDATE },
    hayekKnowledge: { ...PERMISSION_SENSITIVE, publicationStatus: 'review-required', notes: 'The work is not treated as public domain; the current short quote is held for exact edition and commercial quotation review.' },
    keynesGeneralTheory: { ...PERMISSION_SENSITIVE },
    nozickASU: { ...PERMISSION_SENSITIVE },
    millOnLiberty: { ...PUBLIC_DOMAIN_CANDIDATE, publicationStatus: 'review-required', notes: 'The underlying work is old, but the exact Gutenberg edition and any transcription/translation status must still be recorded before commercial publication.' },
    wollstonecraftRights: { ...PUBLIC_DOMAIN_CANDIDATE },
    burkeReflections: { ...PUBLIC_DOMAIN_CANDIDATE },
    tocquevilleDemocracy: { ...PUBLIC_DOMAIN_CANDIDATE },
    hobbesLeviathan: { ...PUBLIC_DOMAIN_CANDIDATE },
    lockeSecondTreatise: { ...PUBLIC_DOMAIN_CANDIDATE, publicationStatus: 'review-required', notes: 'The underlying work is old, but the exact Gutenberg edition and any transcription/translation status must still be recorded before commercial publication.' },
    bakuninStatism: { ...PUBLIC_DOMAIN_CANDIDATE },
    arendtTotalitarianism: { ...PERMISSION_SENSITIVE },
    griffinNatureFascism: { ...PERMISSION_SENSITIVE },
    hitlerMeinKampf: { ...PERMISSION_SENSITIVE, notes: 'Historical work and modern translation/edition rights vary by jurisdiction; the project uses a link only and no quotation is published.' },
    mussoliniDoctrine: { ...PERMISSION_SENSITIVE, publicationStatus: 'review-required', notes: 'The current direct quote is held for translation, sourcebook, and commercial quotation review.' },
    renanNation: { ...PUBLIC_DOMAIN_CANDIDATE, publicationStatus: 'review-required', notes: 'The historical work may be public domain, but the current English translation/sourcebook page must be verified before commercial quotation.' },
    andersonImaginedCommunities: { ...PERMISSION_SENSITIVE },
    kantPerpetualPeace: { ...PUBLIC_DOMAIN_CANDIDATE },
    morgenthauRealism: { ...PERMISSION_SENSITIVE },
    mearsheimerTragedy: { ...PERMISSION_SENSITIVE },
    walzerJustWars: { ...PERMISSION_SENSITIVE },
    clausewitzOnWar: { ...PUBLIC_DOMAIN_CANDIDATE },
    gandhiHindSwaraj: { ...PUBLIC_DOMAIN_CANDIDATE, publicationStatus: 'review-required', notes: 'The historical work may be public domain, but the specific Gujarati edition, English translation, and digital transcription must be verified before commercial quotation.' },
    duboisBlackReconstruction: { ...PERMISSION_SENSITIVE, publicationStatus: 'review-required', notes: 'The 1935 work, later editions, and digital transcriptions may have different rights status by jurisdiction; the project uses a link and independent paraphrase only.' },
    fanonWretchedEarth: { ...PERMISSION_SENSITIVE },
    ostromGoverningCommons: { ...PERMISSION_SENSITIVE },
    lockeLetterToleration: { ...PERMISSION_SENSITIVE },
    aquinasMoralPolitical: { ...PERMISSION_SENSITIVE },
    spinozaPolitical: { ...PERMISSION_SENSITIVE },
  },
};

export { RIGHTS_RECORDS };
