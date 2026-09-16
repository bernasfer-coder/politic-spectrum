import { ARCHETYPE_CITATIONS, AUTHOR_REFERENCES, BAND_CITATIONS } from './references.js';
import { RIGHTS_RECORDS } from './rights.js';
import { TAXONOMY_LABELS as RAW_TAXONOMY_LABELS } from './taxonomy.js';
import { BIBLIOGRAPHY_ACCESS_DATE, BIBLIOGRAPHY_METADATA } from './bibliography.js';
import { ENCYCLOPEDIA_ENTRIES } from './encyclopedia.js';
import {
  RESEARCH_BACKLOG,
  RESEARCH_COVERAGE_MATRIX,
  RESEARCH_PEOPLE,
  RESEARCH_POLITICAL_FORMS,
  RESEARCH_RELATIONSHIPS,
  RESEARCH_REVIEW_DATE,
  RESEARCH_SECTIONS,
  RESEARCH_WORKS,
} from './research.js';

const DIMENSIONS = [
  {
    id: 'economic',
    index: '01',
    label: 'Economic model',
    low: 'Free-market',
    high: 'Collectivist',
    questionLabel: 'Economic',
    description: 'Who should own and direct resources: private individuals and markets, or the public?',
  },
  {
    id: 'social',
    index: '02',
    label: 'Social values',
    low: 'Traditionalist',
    high: 'Progressive',
    questionLabel: 'Social values',
    description: 'How much should society preserve inherited norms versus change them as people’s lives change?',
  },
  {
    id: 'authority',
    index: '03',
    label: 'Authority',
    low: 'Libertarian',
    high: 'Authoritarian',
    questionLabel: 'Authority',
    description: 'How much coercive power should the state have over citizens and institutions?',
  },
  {
    id: 'identity',
    index: '04',
    label: 'National identity',
    low: 'Nationalist',
    high: 'Internationalist',
    questionLabel: 'Identity',
    description: 'Should political loyalty center on the nation and its sovereignty or global cooperation?',
  },
  {
    id: 'foreign',
    index: '05',
    label: 'Foreign policy',
    low: 'Interventionist',
    high: 'Pacifist / restraint',
    questionLabel: 'Foreign policy',
    description: 'When should a state use diplomacy and restraint versus alliances, sanctions, or military force abroad?',
  },
  {
    id: 'religion',
    index: '06',
    label: 'Religion in public life',
    low: 'Religiously grounded law',
    high: 'Secular public law',
    questionLabel: 'Religion',
    description: 'How much should religious authorities, revelation, or religious moral traditions shape public law and institutions?',
  },
];

const FLIPPED_DIMENSION_IDS = ['economic', 'social', 'identity', 'foreign', 'religion'];
const FLIPPED_DIMENSION_SET = new Set(FLIPPED_DIMENSION_IDS);
const DEFAULT_SCORES = Object.fromEntries(DIMENSIONS.map(({ id }) => [id, 0]));
const OPTION_VALUES = [-100, -50, 0, 50, 100];
const OPTION_LABELS = ['Strongly disagree', 'Disagree', 'Unsure / mixed', 'Agree', 'Strongly agree'];

const RESEARCH_SOURCES = [
  { id: 'moroccoConstitutionFrench2011', label: 'Morocco — 2011 Constitution and promulgating dahir, official French transcription', url: 'https://bdj.mmsp.gov.ma/Fr/Document/5601-Dahir.aspx', note: 'Selected HTML reading: promulgation and publication metadata, articles 1–3, 19, 41–44 and 47. Arabic text and Gazette facsimile not collated. The French article 44 describes an advisory regency council until age twenty; the consulted Constitute English version instead repeats eighteen. That discrepancy remains unresolved, not silently harmonized.' },
  { id: 'constituteMorocco2011', label: 'Morocco — Constitution of 2011, Jefri J. Ruchti English translation (Constitute)', url: 'https://www.constituteproject.org/constitution/Morocco_2011?lang=en', note: 'Selected articles 1–3, 19, 41–49, 88–92, 103–105 and 172–175, plus translator and copyright metadata, consulted. Not a complete constitutional or current-law audit. Article 44 differs from the consulted official French transcription on the advisory council’s endpoint; original Arabic and Gazette versions require collation.' },
  { id: 'ruizMoroccoParliamentary2014', label: 'Juan José Ruiz Ruiz — La Constitución marroquí de 2011 y el ensayo de parlamentarización de la monarquía (2014)', url: 'https://www.cepc.gob.es/publicaciones/revistas/revista-de-estudios-politicos/numero-164-abriljunio-2014/la-constitucion-marroqui-de-2011-y-el-ensayo-de-parlamentarizacion-de-la-monarquia-1', note: 'CEPC Spanish abstract and English counterpart consulted; issue year checked against the publisher’s number 164 listing. Full article and underlying constitutional practice were not reviewed. The argument about parliamentary government versus a parliamentary monarchy is attributed, not presented as an empirical assessment of present-day Morocco.' },
  { id: 'elMessaoudiGovernment2015', label: 'Amina El Messaoudi — El nuevo estatuto del Gobierno en la Constitución Marroquí de 2011 (2015)', url: 'https://revista-estudios.revistas.deusto.es/article/view/189', note: 'Full displayed Spanish HTML article, sections 1–5 and notes, read at the publisher’s linked HTML version; landing-page metadata and rights checked. Analysis below uses sections 2–4. Earlier constitutions, royal speeches, organic laws and works cited by the author were not independently collated. The article’s institutional interpretation is not a later implementation study.' },
  { id: 'suezNationalizationDecree1956', label: 'Suez Canal Authority — Nationalization Decree (26 July 1956), English text', url: 'https://www.suezcanal.gov.eg/English/About/CanalTreatiesAndDecrees/Pages/NationalizationDecree.aspx', note: 'Displayed English articles I–VI and signature/date consulted. Translator and exact gazette exemplar unidentified; no Arabic original or administrative implementation records collated. The decree’s date is distinguished from its publication-based commencement clause.' },
  { id: 'frusNasserAnnouncement1956', label: 'U.S. Embassy in Egypt — Telegram 146, 26 July 1956 (FRUS document 511)', url: 'https://history.state.gov/historicaldocuments/frus1955-57v15/d511', note: 'Full displayed telegram and editorial notes consulted. A contemporary diplomatic report signed Byroade, not a verbatim speech transcript or independent audit of canal receipts and dam financing. Referenced despatches and printed speech collection were not inspected.' },
  { id: 'nasserCanalUsers1956', label: 'Gamal Abdel Nasser — Speech opposing a Canal Users’ Association (15 September 1956)', url: 'https://sourcebooks.web.fordham.edu/mod/1956Nasser-suez1.asp', note: 'Displayed English excerpt, source locator and rights notice consulted. The host cites Department of State Publication 6392 (1956), pp. 345–351; translator is unidentified, omissions and transcription errors are visible. No Arabic recording or print collation performed; the host’s United Arab Republic heading is not adopted as the 1956 state name.' },
  { id: 'salemNasserHegemony2020', label: 'Sara Salem — Hegemony in Egypt: Revisiting Gamal Abdel Nasser (2020)', url: 'https://www.cambridge.org/core/books/abs/anticolonial-afterlives-in-egypt/hegemony-in-egypt/1A7B1186F6E670AC1A720B3F6DB5A1DB', note: 'Publisher chapter summary and metadata only. Full chapter, book, cited archives and underlying participant evidence were not reviewed. Salem’s argument about anti-colonial aspirations and elite-led state power is attributed rather than treated as an uncontested outcome finding.' },
  { id: 'buberPathsEnglish', label: 'Martin Buber — Paths in Utopia, English transcription attributed to R. F. C. Hull', url: 'https://theanarchistlibrary.org/library/martin-buber-paths-in-utopia-en', note: 'Selected HTML reading: Foreword; chapter X, the discussion of common management, autonomy, faith and work, and representation; opening Epilogue on federation and village communes. The host labels the text 1949 but includes Ephraim Fischoff’s 1958 introduction. The transcription has visible errors and was not collated with a printed edition or Hebrew/German text; repository provenance does not establish authorized republication.' },
  { id: 'sepBuber2026', label: 'Michael Zank and Zachary Braiterman — Martin Buber, Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/buber/', note: 'Selected political passages in sections 4 and 5, plus revision, author and bibliography metadata consulted. Scholarly interpretation is not independent verification of Buber’s reconstruction of ancient Israel or of communal outcomes. The 2026 revision is distinguished from the entry’s 2004 first publication.' },
  { id: 'leschBuberTheopolitics2019', label: 'Charles H. T. Lesch — Theopolitics Contra Political Theology: Martin Buber’s Biblical Critique of Carl Schmitt', url: 'https://www.cambridge.org/core/journals/american-political-science-review/article/abs/theopolitics-contra-political-theology-martin-bubers-biblical-critique-of-carl-schmitt/0AA96D00E5D71D3447E94372EEBAB565', note: 'Publisher abstract, author, online/issue dates, DOI and copyright notice only. Full article and the biblical commentaries underlying its argument were not reviewed. The interpretation is attributed to Lesch rather than presented as a settled historical finding.' },
  { id: 'syracuseBuberPaths1996', label: 'Syracuse University Press — Paths in Utopia, November 1996 edition', url: 'https://press.syr.edu/supressbooks/1526/paths-in-utopia/', note: 'Publisher catalogue metadata and description consulted: November 1996, 162 pages, ISBN 9780815604211. This is edition verification, not access to the full 1996 book. Marketing prose and unattributed review extracts are not treated as independent historical evidence.' },
  { id: 'nepalForestAct1993', label: 'Nepal — Forest Act, 2049 (1993), English text incorporating the 1999 amendment', url: 'https://faolex.fao.org/docs/pdf/nep4527.pdf', note: 'FAOLEX-hosted English PDF: title/commencement page and sections 25–27 and 41–42, printed/PDF pp. 1, 13–14 and 20, visually inspected. Translator and consolidation date unidentified; Nepali Gazette and later legislation not collated. Historical statutory design only.' },
  { id: 'oldekopNepalForests2019', label: 'Oldekop and colleagues — Reductions in deforestation and poverty from decentralized forest management in Nepal (2019)', url: 'https://research.manchester.ac.uk/en/publications/reductions-in-deforestation-and-poverty-from-decentralized-forest/', note: 'University of Manchester repository abstract and bibliographic metadata only. The linked accepted manuscript could not be retrieved; full methods, supplementary material and underlying data were not reviewed. No numerical effect size is adopted from publicity summaries.' },
  { id: 'cookNepalInequality2026', label: 'Cook and colleagues — Effects of forestry decentralization on rural inequality in Nepal (2026)', url: 'https://www.nature.com/articles/s41893-025-01729-z', note: 'Publisher search-indexed abstract, Empirical case, subgroup-results and limitation passages consulted. Direct page access returned a client challenge; full Methods, supplements and data were not inspected. Read with the 17 June 2026 author correction, recorded separately.' },
  { id: 'cookNepalCorrection2026', label: 'Cook and colleagues — Author Correction: Effects of forestry decentralization on rural inequality in Nepal (17 June 2026)', url: 'https://www.nature.com/articles/s41893-026-01893-w', note: 'Publisher search-indexed correction notice, date, author list and rights notice consulted. Direct full-page/PDF access was unavailable. The notice corrects a reference and clarifies the Newar grouping; it is not a separate outcome study.' },
  { id: 'reichNationality1913', label: 'Reichs- und Staatsangehörigkeitsgesetz (22 July 1913) — German transcription', url: 'https://de.wikisource.org/wiki/Reichs-_und_Staatsangeh%C3%B6rigkeitsgesetz', note: 'Selected German provisions: sections 1, 3–9 and 41, with issue metadata, consulted in Wikisource’s transcription. Source locator: Reichsgesetzblatt 1913, no. 46, pp. 583–593. The linked scan descriptions were checked, but the facsimile text was not visually collated. Historical version only.' },
  { id: 'gosewinkelCitizenship2008', label: 'Dieter Gosewinkel — Staatsangehörigkeit, Inklusion und Exklusion (2008)', url: 'https://bibliothek.wzb.eu/pdf/2008/iv08-401.pdf', note: 'Printed pp. 4 and 6–7 (PDF pages 8 and 10–11) visually checked; opening metadata and the preceding discussion on printed p. 3 also read. Selected-page consultation, not the full paper, cited statutes or archival records.' },
  { id: 'alexopoulouRacism2018', label: 'Maria Alexopoulou — Rassismus als Kontinuitätslinie in der Geschichte der Bundesrepublik Deutschland (2018)', url: 'https://www.bpb.de/shop/zeitschriften/apuz/275884/rassismus-als-kontinuitaetslinie-in-der-geschichte-der-bundesrepublik-deutschland/', note: 'German section Der Volksdeutsche als Kontrastfolie, associated notes 12–19, author/date and licence consulted. Used for the named interpretation of exclusion and administrative discretion, not as a current assessment or direct inspection of the cited local archives.' },
  { id: 'selassieLeagueAppeal1936', label: 'Haile Selassie — Appeal to the League of Nations (1936), selected English excerpts', url: 'https://www.oerproject.com/OER-Materials/OER-Media/HTML-Articles/1750/Unit7/Source-Collection-Internationalism', note: 'Document 7 only: speech excerpts and source metadata consulted, not the anthology’s other documents. The selection contains omissions and editorial brackets; translator unidentified. The cited Library of Congress Amharic–French scan and UN archive were inaccessible on review, so no original-language collation is claimed.' },
  { id: 'leagueCovenant1919', label: 'League of Nations Covenant (1919) — articles 10, 16 and 22', url: 'https://www.ungeneva.org/en/about/league-of-nations/covenant', note: 'UN Geneva English transcription: articles 10, 16 and 22 consulted with treaty metadata. Historical provisions, not present-day legal advice; the linked original facsimile and amendment history were not collated.' },
  { id: 'baerSanctionsSecurity1973', label: 'George W. Baer — Sanctions and Security: The League of Nations and the Italian–Ethiopian War, 1935–1936 (1973)', url: 'https://www.cambridge.org/core/journals/international-organization/article/abs/sanctions-and-security-the-league-of-nations-and-the-italianethiopian-war-19351936/D180D67FC6A59A66919130634F7FD392', note: 'Publisher’s openly displayed Extract and bibliographic metadata only. Full article and cited diplomatic files not consulted; the PDF link redirected to the access page. Spring 1973 print publication is distinct from 22 May 2009 online publication.' },
  { id: 'unLeagueAtWork', label: 'UN Geneva — The League at Work', url: 'https://www.ungeneva.org/en/about/league-of-nations/at-work', note: 'Institutional overview: opening periodization and Successful interventions consulted. A retrospective synthesis, not the League’s contemporaneous record; no publication date displayed.' },
  { id: 'ghdiReichstagFireDecreeGerman', label: 'GHDI — Reichstag fire decree (28 February 1933), German text', url: 'https://germanhistorydocs.org/de/deutschland-nationalsozialismus-1933-1945/verordnung-des-reichspraesidenten-zum-schutz-von-volk-und-staat-reichstagbrandverordnung-28-februar-1933', note: 'German preamble, sections 1–2 and 6, signatures and source credit consulted. GHDI cites Reichsgesetzblatt I, no. 17 (1933), p. 83. The linked Austrian National Library facsimile returned 403; no scan collation claimed.' },
  { id: 'raithelFireDecree2010', label: 'Thomas Raithel — Introduction to the Reichstag fire decree (2010)', url: 'https://www.1000dokumente.de/Dokumente/Verordnung_des_Reichspr%C3%A4sidenten_zum_Schutz_von_Volk_und_Staat', note: 'German introduction consulted, especially the paragraphs on earlier emergency instruments, persecution and long-term effects. Its accompanying document and bibliography remain distinct; the linked 2000 study was not independently read. The page’s document locator differs from GHDI’s and is not adopted here.' },
  { id: 'seefriedWeimarCrisis2016', label: 'Elke Seefried — Die Krise der Weimarer Demokratie – Analogien zur Gegenwart? (2016)', url: 'https://www.bpb.de/shop/zeitschriften/apuz/234699/die-krise-der-weimarer-demokratie-analogien-zur-gegenwart/', note: 'German sections Krise der Weimarer Demokratie and Krisensymptome consulted, with publication and licence metadata. Historical analysis only: the later contemporary-comparison section is not used to classify present-day countries.' },
  { id: 'kropotkinBread1892French', label: 'Pierre Kropotkine — La Conquête du pain (1892, second French edition)', url: 'https://fr.wikisource.org/wiki/La_Conqu%C3%AAte_du_pain/Texte_entier', note: 'French transcription: Les denrées, section IV, and Objections, sections I and III–IV, consulted. Selected sections only; the linked 1892 facsimile was not collated. Separate edition witness from the existing English author reference.' },
  { id: 'kinnaMutualAid1995', label: 'Ruth Kinna — Kropotkin’s Theory of Mutual Aid in Historical Context (1995)', url: 'https://www.cambridge.org/core/journals/international-review-of-social-history/article/kropotkins-theory-of-mutual-aid-in-historical-context/430D54DF385BC68B7A26843E854C7BE4', note: 'Printed pp. 274 and 282–283 (PDF pages 16 and 24–25) visually checked in the publisher PDF; opening and publisher metadata also consulted. Selected-page reading, not a full article or archival-source review.' },
  { id: 'molinariSecurity1849French', label: 'Gustave de Molinari — De la production de la sécurité (1849; 2025 edition)', url: 'https://editions.institutcoppet.org/EL/Molinari-Production.pdf', note: 'French title page and printed/PDF pp. 23, 26–29 and 47–51 visually checked. Selected passages, not the whole edition; the 1849 journal facsimile, introduction and appended 1855 study were not fully reviewed.' },
  { id: 'hartParisSchool2019', label: 'David M. Hart — The Paris School of Liberal Political Economy (2019)', url: 'https://doi.org/10.1017/9781316681572.036', note: 'Printed p. 309 (PDF page 16) visually checked in the author-hosted copy: http://davidmhart.com/liberty/Papers/ParisSchool/DMH-ParisSchool-2019.pdf. Publisher metadata cross-checked; selected-page consultation, not the whole chapter. HTTPS retrieval failed.' },
  { id: 'longMolinariLegacy2013', label: 'Roderick T. Long — Gustave de Molinari’s Legacy for Liberty (2013)', url: 'https://oll.libertyfund.org/publications/liberty-matters/roderick-long-gustave-de-molinari-s-legacy-for-liberty', note: 'Lead-essay body consulted, especially The Competitive Provision of Security and Molinari’s Hits and Misses. The forum responses and underlying cited books were not fully reviewed.' },
  { id: 'leninTaxInKind1921', label: 'Vladimir Lenin — The Tax in Kind (1921)', url: 'https://www.marxists.org/archive/lenin/works/1921/apr/21.htm', note: 'Selected passages in Tax In Kind, Freedom To Trade And Concessions read in English. Yuri Sdobnikov translation, Collected Works 32 (1965), pp. 329–365; print and Russian editions not collated.' },
  { id: 'leninPartyUnityDraft1921', label: 'Vladimir Lenin — Preliminary Draft Resolution On Party Unity (1921)', url: 'https://www.marxists.org/archive/lenin/works/1921/10thcong/ch04.htm', note: 'Part IV, section 8, points 1–7 read; draft, not a transcription of the adopted resolution. Index metadata identifies Yuri Sdobnikov, Collected Works 32 (1965). Russian manuscript and print edition not collated.' },
  { id: 'bukharinNewEconomicPolicy1921', label: 'Nikolai Bukharin — The New Economic Policy of Soviet Russia (1921)', url: 'https://www.marxists.org/archive/bukharin/works/1921/07/08.htm', note: 'English lecture text read, especially its concluding political/economic distinction. Host cites The new policies of soviet Russia, C.H. Kerr & Co., 1921, pp. 43–64; translator unidentified and print edition not collated.' },
  { id: 'schattenbergBolshevikVictory2014', label: 'Susanne Schattenberg, Maike Lehmann and Alexandra Oberländer — Der Sieg der Bolschewiki (2014)', url: 'https://www.bpb.de/shop/zeitschriften/izpb/sowjetunion-i-1917-1953-322/189545/der-sieg-der-bolschewiki/', note: 'German NEP and Die Ausschaltung der Opposition sections consulted, including the embedded party-resolution excerpt. Selected sections only; Chamberlin’s underlying 1958 edition and archival records not independently reviewed.' },
  { id: 'cabralPartyPrinciples1965', label: 'Amílcar Cabral — Palavras de ordem gerais (1965; 1969 party edition)', url: 'https://www.marxists.org/portugues/cabral/1965/11/40.pdf', note: 'Cover and section VIII, printed pp. 29–35 (PDF pages 43–49), visually read in Portuguese. Selected section, not the whole pamphlet; other editions not collated.' },
  { id: 'dalaquaDemocraticFreedom2020', label: 'Gustavo Hessmann Dalaqua — Liberdade democrática como desenvolvimento de si, resistência à opressão e à injustiça epistêmica (2020)', url: 'https://www.scielo.br/j/trans/a/Qbdrc7xS66dP98wVY87tLhr/?lang=pt', note: 'Portuguese introduction, section 2 on Cabral, and publication metadata consulted. Not a complete review of the Freire/Boal sections or independent consultation of the cited Cabral editions and fieldwork.' },
  { id: 'friedrichshainWorkers1953', label: 'Friedrichshain hospital construction workers — Resolution to Otto Grotewohl (15 June 1953)', url: 'https://17juni53.de/chronik/530615/53juni15_bettenh.pdf', note: 'Complete one-page German project transcription visually checked, including dateline, signature and archival locator SAPMO-BArch, NY 4090/437, Bl. 8. Original archival sheet not independently collated.' },
  { id: 'sedNormsDeclaration1953', label: 'SED Politburo — Erklärung zur Normenfrage (16 June 1953)', url: 'https://germanhistorydocs.org/de/die-besatzungszeit-und-die-entstehung-zweier-staaten-1945-1961/aus-der-erklaerung-des-politbueros-des-zentralkomitees-der-sed-16-juni-1953', note: 'German GHDI excerpt, numbered points 1–3 and source credit read. Declaration dated 16 June; Neues Deutschland publication dated 17 June. Editorial introduction is separate from the primary statement.' },
  { id: 'cieslaHertleWahlBerlin1953', label: 'Burghard Ciesla, Hans-Hermann Hertle and Stefanie Wahl — Der 17. Juni in Berlin (2013)', url: 'https://www.bpb.de/themen/deutsche-teilung/der-aufstand-des-17-juni-1953/152600/der-17-juni-in-berlin/', note: 'German narrative of 15–17 June read. Linked recordings, witness accounts and police reports not independently reviewed; provisional casualty figures and minute-by-minute estimates not imported.' },
  { id: 'lemkeJuneUprising2003', label: 'Michael Lemke — Der 17. Juni 1953 in der DDR-Geschichte: Folgen und Spätfolgen (2003)', url: 'https://www.bpb.de/shop/zeitschriften/apuz/27599/der-17-juni-1953-in-der-ddr-geschichte/', note: 'German article body consulted, especially Ursachenforschung und Neuer Kurs, Sicherungsmaßnahmen and Arbeiterprotest. Its archival citations and underlying books were not independently reviewed.' },
  { id: 'communeWomenAddress1871', label: 'Comité central des citoyennes — Adresse à la Commission exécutive (13 April 1871)', url: 'https://gabrielperi.fr/commune-de-paris/appel-aux-citoyennes-de-paris-10-avril-et-adresse-des-citoyennes-14-avril-1871/', note: 'French address read from its dateline through the six signatures. Published in the Journal officiel, non-official section, 14 April. Modern transcription; original issue not collated.' },
  { id: 'rougerieWomenCommune1997', label: 'Jacques Rougerie — Les femmes de 1871 (1997)', url: 'https://commune1871-rougerie.fr/les-femmes-de-1871,fr,8,58.html', note: 'Author-hosted reprint: opening, Union des femmes, L’émancipation des travailleuses, and club-participation passages consulted. Selected sections, not a complete chapter or archival review.' },
  { id: 'carnavaletParisiennes2022', label: 'Musée Carnavalet — Parisiennes citoyennes ! (2022 exhibition press dossier)', url: 'https://www.carnavalet.paris.fr/sites/default/files/2022-10/dp-parisiennescitoyennes.pdf', note: 'PDF pages 4 and 10 visually checked: curatorial credits and Les femmes de la Commune se mobilisent. Press dossier, not the exhibition catalogue; other periods not reviewed.' },
  { id: 'muldoonCommuneFeminism2023', label: 'James Muldoon, Mirjam Müller and Bruno Leipold — Aux Ouvrières!: socialist feminism in the Paris Commune (2023)', url: 'https://doi.org/10.1080/17496977.2021.2017702', note: 'Abstract consulted through the LSE-supplied record at https://ideas.repec.org/p/ehl/lserod/113763.html; publisher metadata cross-checked. Full text inaccessible; interpretation attributed to the authors, not independently verified.' },
  { id: 'allendeCongress1971Spanish', label: 'Salvador Allende — La vía chilena al socialismo, congressional address (21 May 1971)', url: 'https://www.marxists.org/espanol/allende/1971/21-5-71.htm', note: 'Spanish MIA transcription: opening and sections on the socialist route, legality, institutions, political freedoms, violence, and social freedoms consulted. The site dates its edition to 2001; no parliamentary facsimile collation or completeness claim.' },
  { id: 'chileCopperLaw17450', label: 'Chile — Ley 17.450: Reforma la Constitución Política del Estado (1971)', url: 'https://www.bcn.cl/leychile/navegar?idNorma=29026', note: 'BCN Spanish statutory transcription consulted, especially article 2, seventeenth transitional provision, opening and letters a–c, j–k. Historical law, not current legal advice; implementing decisions and judicial files were not reviewed.' },
  { id: 'memoriaCopperNationalization', label: 'Biblioteca Nacional de Chile — La nacionalización de la gran minería del cobre (1964–1971)', url: 'https://www.memoriachilena.gob.cl/602/w3-article-3622.html', note: 'Presentación consulted for the Frei–Allende sequence and congressional approval. The linked books, images, speeches, and document collection were not independently reviewed; no publication date established.' },
  { id: 'memoriaUnidadPopular', label: 'Biblioteca Nacional de Chile — El gobierno de la Unidad Popular (1970–1973)', url: 'https://www.memoriachilena.gob.cl/602/w3-article-31433.html', note: 'Presentación consulted for institutional strategy, internal disagreements, and the 1973 endpoint. Its quantitative estimates, priority claims, and compressed economic explanations are not adopted; no publication date established.' },
  { id: 'vergaraCopperModernization2004', label: 'Ángela Vergara Marshall — Conflicto y Modernización en la Gran Minería del Cobre (1950–1970), 2004', url: 'https://www.scielo.cl/scielo.php?script=sci_arttext&pid=S0717-71942004000200006', note: 'Spanish introduction and Reflexiones Finales read with metadata: Historia 37(2), pp. 419–436, DOI 10.4067/S0717-71942004000200006. Selected-section review; archival references and numerical estimates were not independently checked.' },
  { id: 'tocquevilleAlgeria1841French', label: 'Alexis de Tocqueville — Travail sur l’Algérie (1841), French digital edition', url: 'https://classiques.uqam.ca/classiques/De_tocqueville_alexis/de_la_colonie_algerie/travail_sur_algerie/travail_sur_algerie.pdf', note: 'PDF pp. 2 and 15–16 visually checked: edition credits and warfare section. Selected pages, not a complete-book review. The landing page names a different work; the underlying print edition remains unverified.' },
  { id: 'tocquevilleAfricaReport1847French', label: 'Alexis de Tocqueville — Rapport du 28 mai 1847 sur les affaires d’Afrique', url: 'https://fr.wikisource.org/wiki/%C5%92uvres_compl%C3%A8tes_d%E2%80%99Alexis_de_Tocqueville,_L%C3%A9vy/Rapport_sur_les_affaires_d%E2%80%99Afrique/Texte_entier', note: 'French transcription: title, contents, and selected Part I discussion of indigenous government, property, schooling, and unequal treatment consulted. The linked collection includes another report; no full-volume or facsimile review claimed.' },
  { id: 'duongTocquevilleAlgeria2018', label: 'Kevin Duong — The Demands of Glory: Tocqueville and Terror in Algeria (2018)', url: 'https://www.cambridge.org/core/journals/review-of-politics/article/abs/demands-of-glory-tocqueville-and-terror-in-algeria/31BA6DCBC6FA7537965AAA90FCE6E9D9', note: 'Publisher abstract and bibliographic metadata only; the full article was not accessible. DOI 10.1017/S0034670517000766. Its stated interpretation is attributed, not treated as a settled explanation or a review of its cited works.' },
  { id: 'pittsAlgerianMirror2009', label: 'Jennifer Pitts — Liberalism and Empire in a Nineteenth-Century Algerian Mirror (2009)', url: 'https://www.cambridge.org/core/journals/modern-intellectual-history/article/abs/liberalism-and-empire-in-a-nineteenthcentury-algerian-mirror/5274D41396947F4F86E25955710AB57A', note: 'Publisher abstract and metadata only. DOI 10.1017/S1479244309002108. Khodja’s Le Miroir is discussed through Pitts’s abstract, not catalogued here as an independently read primary text.' },
  { id: 'wilhelmSocialProclamation1881', label: 'Wilhelm I — Kaiserliche Botschaft zur Sozialpolitik (17 November 1881)', url: 'https://germanhistorydocs.org/de/reichsgruendung-bismarcks-deutschland-1866-1890/die-kaiserliche-botschaft-kaiser-wilhelms-i-zur-sozialpolitik-17-november-1881', note: 'Complete displayed German excerpt and GHDI’s linked English version consulted. Omissions are marked; the modern introduction is not part of the proclamation. Original parliamentary pages were not independently collated.' },
  { id: 'ghdiAntiSocialistLaw1878', label: 'German Empire — Anti-Socialist Law (21 October 1878)', url: 'https://germanhistorydocs.org/en/forging-an-empire-bismarckian-germany-1866-1890/anti-socialist-law-october-21-1878', note: 'GHDI English text, sections 1–30, introduction, and editorial notes consulted. Primary legal provisions are distinguished from modern commentary; the German gazette and complete Lidtke book were not independently reviewed.' },
  { id: 'ritterSocialInsurance1983', label: 'Gerhard A. Ritter — Die Sozialversicherung in Deutschland 1881–1914 (1983)', url: 'https://www.bpb.de/shop/zeitschriften/apuz/archiv/532765/die-sozialversicherung-in-deutschland-1881-1914-entstehung-charakter-wirkungen/', note: 'German summary and sections II–IV consulted for antecedents, motives, institutions, and worker organizations. Selected sections, not a complete article, source-book, or archival review.' },
  { id: 'ziemannIndustrialSociety2016', label: 'Benjamin Ziemann — Die moderne Industriegesellschaft (2016), social-insurance discussion', url: 'https://www.bpb.de/shop/zeitschriften/izpb/das-deutsche-kaiserreich-1871-1918-329/224739/die-moderne-industriegesellschaft/', note: 'German sidebar Die Anfänge des deutschen Sozialstaates consulted. Used for a bounded institutional comparison, not a review of the entire chapter, its statistical sources, or every insurance branch.' },
  { id: 'gailusChurchStateNazism2018', label: 'Manfred Gailus — Das Verhältnis zwischen Kirche und Staat im nationalsozialistischen Deutschland (2018)', url: 'https://www.bpb.de/themen/religion-ethik/504958/das-verhaeltnis-zwischen-kirche-und-staat-im-nationalsozialistischen-deutschland/', note: 'Complete German article consulted. Signed historical interpretation, especially the section on internal Protestant conflict; not a primary record of every congregation or individual.' },
  { id: 'silomonProtestantResistance2009', label: 'Anke Silomon — Widerstand von Protestanten im NS und in der DDR (2009)', url: 'https://www.bpb.de/shop/zeitschriften/apuz/32092/widerstand-von-protestanten-im-ns-und-in-der-ddr/', note: 'Introduction and National Socialism section consulted, including the Kreyssig case and related notes. The DDR comparison and cited books are not independently reviewed here.' },
  { id: 'ssaOldAgeAssistance1935', label: 'United States — Social Security Act of 1935, Title I: old-age assistance', url: 'https://www.ssa.gov/history/35acti.html', note: 'Complete SSA historical transcription of sections 1–6 consulted. Original federal grants and state-plan provisions, not current benefits guidance; no facsimile collation or independent implementation audit.' },
  { id: 'ssaOldAgeBenefits1935', label: 'United States — Social Security Act of 1935, Title II: federal old-age benefits', url: 'https://www.ssa.gov/history/35actii.html', note: 'Complete SSA historical transcription of sections 201–210 consulted, especially benefit eligibility and employment exclusions. The 1935 text is distinguished from later amendments and current law.' },
  { id: 'fdrSocialSecuritySigning1935', label: 'Franklin D. Roosevelt — Social Security signing statement excerpt, 14 August 1935', url: 'https://www.ssa.gov/history/fdrstate.html', note: 'SSA-hosted textual excerpt consulted as evidence of the president’s public justification. Linked audio was not reviewed; this is not a complete speech transcript or evidence that the programme achieved its aims.' },
  { id: 'dewittCoverageExclusions2010', label: 'Larry DeWitt — The Decision to Exclude Agricultural and Domestic Workers (2010)', url: 'https://www.ssa.gov/policy/docs/ssb/v70n4/v70n4p49.html', note: 'Main article, Table 1, and selected notes consulted. Interpretive claims are attributed; cited archives, memoirs, and census tables were not independently replicated. The publication disclaims automatic agency endorsement.' },
  { id: 'pooleSegregatedOrigins2006', label: 'Mary Poole — The Segregated Origins of Social Security (2006; publisher description)', url: 'https://uncpress.org/9780807856888/the-segregated-origins-of-social-security/', note: 'UNC Press description and bibliographic metadata only. Full book, archival documentation, preview, and review blurbs were not used as independently reviewed evidence.' },
  { id: 'guizotDemocracyFrance1849', label: 'François Guizot — Democracy in France, January 1849 (fourth English edition)', url: 'https://www.gutenberg.org/files/57601/57601-h/57601-h.htm', note: 'Title page, preface, and selected passages in chapters I–III, V–VII consulted, especially pp. 56–65 and 70–72. Historical political argument in an English translation; no collation against the French original and no translator identified in the consulted edition metadata.' },
  { id: 'rosanvallonDoctrinaires1993', label: 'Pierre Rosanvallon — Les Doctrinaires sont-ils des libéraux ? (1993 symposium)', url: 'https://www.guizot.com/wp-content/uploads/1970/03/colloque93-Rosanvallon.pdf', note: 'Seven-page scan, printed pp. 133–139, reviewed visually. Uncorrected conference transcript; event identified by the host’s symposium programme. The upload path is not a publication date.' },
  { id: 'englertGuizotCapacity2024', label: 'Gianna Englert — François Guizot and Democracy’s “Capable” Aristocracy (2024; abstract only)', url: 'https://academic.oup.com/book/56160/chapter-abstract/442913309', note: 'Indexed publisher abstract and metadata only; full chapter inaccessible. Its archival evidence and supporting notes were not independently reviewed.' },
  { id: 'assembleeFebruary1848', label: 'Assemblée nationale — Février 1848 : Révolution de février', url: 'https://www.assemblee-nationale.fr/dyn/histoire-et-patrimoine/monarchie-de-juillet/revolution-de-fevrier', note: 'French institutional historical narrative consulted for electoral reform, the banquet campaign, and the fall of the ministry and monarchy. A secondary synthesis, not the electoral statutes or a contemporary parliamentary transcript.' },
  { id: 'iranCouncilConstitution1989', label: 'Iran Constitutional Council — Constitution, English translation (1989 text; 2021 posting)', url: 'https://www.shora-gc.ir/en/news/87/constitution-of-the-islamic-republic-of-iran-full-text', note: 'Selected articles 4–6, 12–13, 20, 23, 91–99, 107–115, and 177 plus translation credits consulted. Official-hosted English edition, not an independent account of implementation or a collation of the Persian original.' },
  { id: 'buchtaIranInstitutions2020', label: 'Wilfried Buchta — Eine Theokratie hinter republikanischen Fassaden (2020)', url: 'https://www.bpb.de/shop/zeitschriften/apuz/309948/eine-theokratie-hinter-republikanischen-fassaden/', note: 'German APuZ analysis: institutional introduction, Parlament, Räte, Präsident, and Revolutionsführer sections used. Its interpretation is dated 15 May 2020; officeholders, economic estimates, military claims, and succession forecasts are not imported as current facts.' },
  { id: 'ostromPolycentricAER2010', label: 'Elinor Ostrom — Beyond Markets and States (AER, 2010)', url: 'https://web.pdx.edu/~nwallace/EHP/OstromPolyGov.pdf', note: 'University-hosted published article, DOI 10.1257/aer.100.3.641. Printed pp. 641, 645, 650–651, and 653 visually checked for edition, resource attributes, property rights, and institutional principles. Selected-page review; the appended citing-articles list is not part of the article.' },
  { id: 'coxCommonsDesign2010', label: 'Cox, Arnold, and Villamayor Tomás — A Review of Design Principles (2010)', url: 'https://dlc.dlib.indiana.edu/dlc/items/aabc541a-fdc4-4b75-af1f-588d0fee2a78', note: 'Indiana University repository copy of Ecology and Society 15(4):38. PDF pp. 1–4 and 14–16 visually checked, including methods, Table 4, conclusion, and version acknowledgment. The published review reports 91 studies and 77 coded cases; earlier working-paper counts are not substituted.' },
  { id: 'ghdiGodesbergGerman', label: 'SPD — Godesberger Programm (1959), German GHDI excerpt', url: 'https://germanhistorydocs.org/de/die-besatzungszeit-und-die-entstehung-zweier-staaten-1945-1961/godesberger-programm-der-spd-november-1959', note: 'Selected German programme sections checked against the separately catalogued English excerpt. The host cites Flechtheim’s 1973 collection; ellipses mean neither page is the complete programme.' },
  { id: 'lompeGodesberg1979', label: 'Klaus Lompe — Zwanzig Jahre Godesberger Programm der SPD (1979)', url: 'https://www.bpb.de/shop/zeitschriften/apuz/archiv/531413/zwanzig-jahre-godesberger-programm-der-spd/', note: 'APuZ 46/1979: sections II–III and source metadata consulted for programme formation and continuity arguments. Selected-section review, not independent examination of the archival material or every work cited.' },
  { id: 'algeriaSenatusConsulte1865', label: 'France — Sénatus-consulte du 14 juillet 1865 sur l’état des personnes et la naturalisation en Algérie', url: 'https://mjp.univ-perp.fr/france/sc1865-0714.htm', note: 'All five articles consulted in the French Digithèque MJP transcription. Evidence of formal categories and admission rules, not their implementation; no original-print collation.' },
  { id: 'algeriaCremieuxDecrees1870', label: 'France — Décrets Crémieux, 24 octobre 1870 (Digithèque MJP collection)', url: 'https://mjp.univ-perp.fr/france/d1870algerie.htm', note: 'Both 24 October 1870 decrees consulted. The collection also contains later texts; the entry does not project those rules backward or claim a complete history of citizenship.' },
  { id: 'immigrationMuseumColonialStatus', label: 'Musée national de l’histoire de l’immigration — 1830–1914 : ensemble mais différents dans la société coloniale', url: 'https://www.histoire-immigration.fr/juifs-et-musulmans-de-la-france-coloniale-a-nos-jours/1830-1914-ensemble-mais-differents-dans-la-societe-coloniale', note: 'Institutional exhibition synthesis consulted for unequal citizenship in Algeria and hostility toward Jewish inclusion. Other territories, population estimates, and schooling chronology are not used here.' },
  { id: 'direcheStoraExhibition2022', label: 'Karima Dirèche and Benjamin Stora — La genèse de l’exposition (2022 interview)', url: 'https://www.histoire-immigration.fr/juifs-et-musulmans-de-la-france-coloniale-a-nos-jours/la-genese-de-l-exposition', note: 'Museum-hosted interview, collected by Marie Poinsot, from the 2022 exhibition catalogue. Used for interpretation of colonial legal categories; not a review of the full catalogue or endorsement of every interview claim.' },
  { id: 'brazilCouncilDecree1847', label: 'Brazil — Decreto nº 523, de 20 de julho de 1847', url: 'https://legis.senado.leg.br/norma/388067/publicacao/15740926', note: 'Complete Portuguese Senate transcription consulted. Creates the presidency of the Council of Ministers; not evidence that every later constitutional convention was established by this short decree.' },
  { id: 'ferrazImperialCabinets2017', label: 'Sérgio Eduardo Ferraz — A dinâmica política do Império (1840–1889), 2017', url: 'https://revistas.ufpr.br/rsp/article/view/53760', note: 'Publisher metadata and PDF printed pages 63–64, 68–69, and 87–89 visually checked, including Figure 1, Table 7, and notes 37–38. Selected-page review, not independent replication of cabinet coding or archival research.' },
  { id: 'cdecAntisemiticDecrees1938', label: 'CDEC — Le leggi antiebraiche dell’Italia fascista: selected 1938 decrees', url: 'https://www.cdec.it/formazione/percorsi/per-la-storia-della-shoah/le-leggi-antiebraiche-dellitalia-fascista/', note: 'Italian transcriptions of RD-L 1390/1938 and 1728/1938 consulted with editorial introduction. Selected documents, not the entire collection; no original Gazette facsimile collation.' },
  { id: 'anselmiPropertyReport2001', label: 'Commissione Anselmi — La normativa antiebraica italiana sui beni e sul lavoro (2001 report)', url: 'https://www.cdec.it/formazione/percorsi/per-la-storia-della-shoah/la-normativa-antiebraica-italiana-sui-beni-e-sul-lavoro-1938-1945/', note: 'CDEC reprint: introduction and selected sections 2.a.1.3–2.a.3.1 consulted. Historical commission research, not a full-report review or independent inspection of its quoted archival documents.' },
  { id: 'ushmmItalyPersecution', sourceLinkId: 'fascistItaly', label: 'United States Holocaust Memorial Museum — Italy', url: 'https://encyclopedia.ushmm.org/content/en/article/italy', note: 'English sections on legislation, occupation zones, the 1943 regime change, and German occupation consulted. Historical synthesis; media, translations, and further-reading books were not independently reviewed.' },
  { id: 'friedmanEducation1955', label: 'Milton Friedman — The Role of Government in Education (1955)', url: 'https://la.utexas.edu/users/hcleaver/330T/350kPEEFriedmanRoleOfGovttable.pdf', note: 'University-hosted reprint linked by Hoover’s Collected Works catalogue, item 58044. PDF pages 1–8 visually checked, including publishing credit and footnote 2; later vocational-finance analysis was not reviewed.' },
  { id: 'cowenPublicGoods', label: 'Tyler Cowen — Public Goods, Concise Encyclopedia of Economics', url: 'https://www.econlib.org/library/Enc/PublicGoods.html', note: 'Complete article consulted for concepts and attributed institutional comparisons. A signed reference essay, not a systematic empirical review; its further-reading works were not independently consulted.' },
  { id: 'whakaputangaTexts1835', label: 'He Whakaputanga (1835) — Māori text, Mānuka Hēnare translation, and Busby English version', url: 'https://nzhistory.govt.nz/media/interactive/he-whakaputanga-declaration-independence-1835', note: 'NZHistory transcription, four articles and codicil, Hēnare translation, Busby version, and editorial credits consulted. The modern translation is not the English document sent by Busby; no manuscript or facsimile collation claimed.' },
  { id: 'dpmcTreatyTextsKawharu', label: 'DPMC — Treaty texts and Sir Hugh Kawharu’s back translation, Appendix A', url: 'https://www.dpmc.govt.nz/our-business-units/cabinet-office/supporting-work-cabinet/cabinet-manual/appendix-a', note: 'English and Māori treaty transcriptions and Kawharu back translation with notes 1–11 consulted. The host identifies the 1975 Act as the transcription source and the 2005 Waitangi Revisited volume for the translation; neither book nor original sheets independently reviewed.' },
  { id: 'teRakiStageOne2014Release', label: 'Waitangi Tribunal — Te Paparahi o Te Raki Stage 1 findings, release and Q&A (2014)', url: 'https://www.waitangitribunal.govt.nz/en/news/report-on-stage-1-of-the-te-paparahi-o-te-raki-inquiry-released', note: 'Complete institutional release and Q&A consulted. Primary evidence of the Tribunal’s stated conclusions, not a primary record of 1840 negotiations or a completed review of the full report.' },
  { id: 'keaneWhakaputanga2017', label: 'Basil Keane — He Whakaputanga: Declaration of Independence (2017)', url: 'https://teara.govt.nz/en/he-whakaputanga-declaration-of-independence/print', note: 'English Background, Contents, and Aftermath sections consulted. Signed institutional historical synthesis; cited books are further-reading leads, not independently reviewed sources.' },
  { id: 'proudhonFederative1863French', label: 'Pierre-Joseph Proudhon — Du Principe fédératif (1863)', url: 'https://fr.wikisource.org/wiki/Proudhon_-_Du_Principe_f%C3%A9d%C3%A9ratif/Texte_entier', note: 'French transcription of the E. Dentu edition: title and Part I, chapters VII and XI consulted. Selected chapters, not a full-book review or independent facsimile collation.' },
  { id: 'dejacqueLetter1857French', label: 'Joseph Déjacque — De l’Être-Humain mâle et femelle: Lettre à P. J. Proudhon (1857)', url: 'https://fr.wikisource.org/wiki/De_l%E2%80%99%C3%8Atre-Humain_m%C3%A2le_et_femelle_-_Lettre_%C3%A0_P._J._Proudhon', note: 'Complete French letter transcription consulted, including its New Orleans, May 1857 dateline. Host identifies a 2012 Apache reprint; quotations attributed to Proudhon were not independently collated.' },
  { id: 'cagiaoProudhonFederalism2011', label: 'Jorge Cagiao y Conde — Proudhon: Anarchisme ou Fédéralisme? (2011)', url: 'https://cpp.numerev.com/articles/revue-19/1457-proudhon-anarchisme-ou-federalisme', note: 'French introduction, section 1, and selected discussion in section 2 consulted. An attributed interpretation in a scholarly dispute, not a consensus statement or review of every cited work.' },
  { id: 'msheDejacqueVolume2019', label: 'MSHE Ledoux — Libertaire! (2019): scholarly-volume overview', url: 'https://mshe.univ-fcomte.fr/cahiers-de-la-mshe/les-series/archives-de-limaginaire-social/n-38-libertaire-essais-sur-l-ecriture-la-pensee-et-la-vie-de-joseph-dejacque-1821-1865', note: 'Institutional synopsis and bibliographic details consulted. Used for the French term’s historical context and a further-reading lead, not as evidence that the complete edited volume was read.' },
  { id: 'reichConcordat1933German', label: 'Holy See and German Reich — Reichskonkordat (20 July 1933)', url: 'https://press.vatican.va/roman_curia/secretariat_state/archivio/documents/rc_seg-st_19330720_santa-sede-germania_ge.html', note: 'German treaty transcription consulted, especially articles 1, 21–23, 31–34 and the final protocol to article 32. Signed provisions are distinguished from implementation; no facsimile or Italian comparison reviewed.' },
  { id: 'barmenDeclaration1934German', label: 'Confessing Synod at Barmen — Theological Declaration (31 May 1934)', url: 'https://www.ekd.de/Barmer-Theologische-Erklarung-Thesen-11296.htm', note: 'All six German theses read, with the linked preamble and EKD introduction for context and date. The declaration is primary evidence; the host’s account of later reception is not a 1934 statement.' },
  { id: 'piusXiMitBrennender1937', label: 'Pius XI — Mit brennender Sorge (14 March 1937)', url: 'https://www.vatican.va/content/pius-xi/de/encyclicals/documents/hf_p-xi_enc_14031937_mit-brennender-sorge.html', note: 'Official German HTML, paragraphs 1–20 consulted. Papal arguments and retrospective claims are attributed, not treated as a complete history of church conduct. Other language versions and the AAS facsimile were not compared.' },
  { id: 'ushmmGermanChurches', label: 'United States Holocaust Memorial Museum — The German Churches and the Nazi State', url: 'https://encyclopedia.ushmm.org/content/en/article/the-german-churches-and-the-nazi-state', note: 'English Background, Protestant Churches, Roman Catholic Church, and Summary sections consulted. Institutional historical synthesis; its further-reading list does not mean those books were independently reviewed.' },
  { id: 'ferryColonialSpeech1885', label: 'Jules Ferry — Les fondements de la politique coloniale (28 July 1885)', url: 'https://www2.assemblee-nationale.fr/decouvrir-l-assemblee/histoire/grands-discours-parlementaires/jules-ferry-28-juillet-1885', note: 'Complete available French excerpt read, including recorded objections; omissions are marked by the host. Modern introduction is distinguished from the speech.' },
  { id: 'clemenceauColonialReply1885', label: 'Georges Clemenceau — La colonisation est-elle un devoir de civilisation? (July 1885 excerpt)', url: 'https://www.assemblee-nationale.fr/histoire/7ec.asp', note: 'Complete available French excerpt and editorial context read. Legacy heading gives 31 July; the 2021 report distinguishes the 30 July sitting from the 31 July printed record.' },
  { id: 'assemblyRacismReport2021', label: 'Assemblée nationale — Rapport d’information no. 3969, tome I (2021): colonial-debate provenance', url: 'https://www.assemblee-nationale.fr/dyn/opendata/RINFANR5L15B3969-tI.html', note: 'Title page, discussion of the July 1885 debate, and notes 73–77 consulted. Used for historical context and date provenance, not as a review of the full report or current law.' },
  { id: 'osterhammelImperialism2012', label: 'Jürgen Osterhammel — 1880 bis 1914 (2012), selected colonial-history sections', url: 'https://www.bpb.de/shop/zeitschriften/izpb/das-19-jahrhundert-315/142137/1880-bis-1914/', note: 'German sections Die Aufteilung Afrikas and Imperialismus in Ost- und Südostasien consulted. Signed synthesis is distinguished from separately credited source boxes; maps and quoted books are not reproduced.' },
  { id: 'brazilConstitution1824', label: 'Constituição Política do Império do Brasil (1824) — Câmara dos Deputados transcription', url: 'https://www2.camara.leg.br/legin/fed/consti/1824-1899/constituicao-35041-25-marco-1824-532540-publicacaooriginal-14770-pl.html', note: 'Portuguese articles 3–12, 91–102, and 178–179 consulted. Official transcription, not a facsimile or an enforcement study.' },
  { id: 'lynchModeratingPower2005', label: 'Christian Edward Cyril Lynch — O discurso político monarquiano e a recepção do conceito de poder moderador no Brasil (1822–1824)', url: 'https://www.scielo.br/j/dados/a/Bxy5MfrvkytCrSgVcS46DvD/', note: 'Portuguese introduction and concluding section on constitutional ambiguity, with notes 22–28, consulted. Constant’s original editions were not independently reviewed.' },
  { id: 'galvesCostaProperty2022', label: 'Marcelo Cheche Galves and Yuri Costa — Constituição e propriedade no mundo luso-brasileiro e as guerras de Independência (1822–1825)', url: 'https://www.scielo.br/j/topoi/a/MJHQBSkPJpJ8jwDkDwCpTKP/?lang=pt', note: 'Portuguese abstract and selected discussion of property, the 1824 charter, and citizenship consulted; not a complete review of the wartime compensation study.' },
  { id: 'blairSchroeder1999Excerpt', label: 'Tony Blair and Gerhard Schröder — Der Weg nach vorn für Europas Sozialdemokraten (1999)', url: 'https://www.blaetter.de/ausgabe/1999/juli/der-weg-nach-vorn-fuer-europas-sozialdemokraten-ein-vorschlag-von-gerhard-schroeder-und-tony-blair', note: 'Complete available German HTML excerpt consulted, not the full declaration. The editorial introduction is distinguished from the primary text; print and PDF not reviewed.' },
  { id: 'wiesenthalThirdWay2010', label: 'Helmut Wiesenthal — Was ist schiefgelaufen auf dem Dritten Weg? (2010), GHDI excerpt', url: 'https://germanhistorydocs.org/de/ein-neues-deutschland-1990-2023/the-third-way-advocated-by-gerhard-schroeder-and-tony-blair-retrospective-account-2010', note: 'Complete German excerpt and source credit read; omissions remain marked in the host edition. The earlier Böll Foundation page could not be retrieved; no full-original review claimed.' },
  { id: 'swissCollegialConsensus', label: 'Swiss Federal Council — Gouverner: collégialité, consensus et entretiens de Watteville', url: 'https://www.admin.ch/fr/attributions-conseil-federal-gouverner', note: 'French sections Collégialité et consensus and Recherche de compromis consulted. An official institutional self-description and historical account, not an independent audit or a national ideology rating.' },
  { id: 'gallusJesseThirdWays2002', label: 'Alexander Gallus and Eckhard Jesse — Was sind Dritte Wege? (2002)', url: 'https://www.bpb.de/shop/zeitschriften/apuz/26315/was-sind-dritte-wege/?p=all', note: 'German introduction, sections II.1–II.2, associated notes 19–35, and author biographies consulted. Other sections and cited books were not systematically reviewed.' },
  { id: 'appOmahaPlatform1892', label: 'People’s Party — Omaha Platform (4 July 1892), APP transcription', url: 'https://www.presidency.ucsb.edu/documents/populist-party-platform-1892', note: 'Complete hosted preamble and platform read. Review does not cover original print, convention proceedings, or supplementary resolutions.' },
  { id: 'priesterPopulismus2012', label: 'Karin Priester — Wesensmerkmale des Populismus (2012)', url: 'https://www.bpb.de/shop/zeitschriften/apuz/75848/wesensmerkmale-des-populismus/', note: 'Complete German HTML article and notes consulted. Its relational interpretation is attributed; quoted politicians and works cited in its notes were not independently checked.' },
  { id: 'weylandPoliticalStrategy2021', label: 'Kurt Weyland — Populism as a Political Strategy (2021)', url: 'https://journals.sagepub.com/doi/10.1177/00323217211002669', note: 'Publisher abstract and bibliographic metadata only. Full article is access-restricted; the entry reports the author’s stated approach, not uninspected arguments, case evidence, or the complete exchange with Rueda.' },
  { id: 'moffittTormeyPoliticalStyle2014', label: 'Benjamin Moffitt and Simon Tormey — Rethinking Populism: Politics, Mediatisation and Political Style (2014)', url: 'https://onlinelibrary.wiley.com/doi/10.1111/1467-9248.12032', note: 'Publisher abstract and publication details consulted. Full text not reviewed; claims are limited to the authors’ announced focus on performance and mediated political style.' },
  { id: 'dayAimsPurposes1940', label: 'Dorothy Day — Aims and Purposes (1940)', url: 'https://catholicworker.org/182-html/', note: 'Complete hosted English article read, especially The Vision and Everybody, Everywhere. The editorial synopsis and later author biography are not treated as Day’s own text; original newspaper scan not compared.' },
  { id: 'catholicWorkerAims2019', label: 'The Catholic Worker — The Aims and Means (May 2019 version)', url: 'https://catholicworker.org/aims-and-means/', note: 'Complete hosted statement consulted, including economic critique, decentralization, nonviolence, and voluntary poverty. A dated movement self-description, not a survey of every community or a text authored by Day in 2019.' },
  { id: 'marquetteMaurinPapers', label: 'Marquette University Archives — Peter Maurin Papers: biography and finding aid', url: 'https://www.marquette.edu/library/archives/Mss/DDCW/DDCW-seriesW10.php', note: 'Biographical Note, Scope and Content, and relevant correspondence/manuscript listings consulted. Finding-aid descriptions identify research leads; no claim to have inspected the underlying letters or manuscripts.' },
  { id: 'lowyRadicalizedCatholicism1989', label: 'Michel Löwy — O catolicismo latino-americano radicalizado (1989)', url: 'https://revistas.usp.br/eav/article/view/8509', note: 'Publisher PDF: printed pp. 50 and 58–59 visually checked, including translation credit and notes. Selected-page review of a sociological interpretation; SciELO HTML retrieval failed and the earlier publication was not reviewed.' },
  { id: 'cduAhlen1947', label: 'CDU, British occupation zone — Ahlener Programm (3 February 1947)', url: 'https://www.kas.de/de/einzeltitel/-/content/das-ahlener-programm-der-cdu-der-britischen-zone-vom-3.-februar-1947', note: 'German primary transcription read in full, especially sections II–IV. Party proposals and retrospective diagnoses are distinguished from the host’s introductory commentary and from implemented policy.' },
  { id: 'cduDuesseldorf1949', label: 'CDU — Düsseldorfer Leitsätze (15 July 1949), short version', url: 'https://germanhistorydocs.org/de/die-besatzungszeit-und-die-entstehung-zweier-staaten-1945-1961/cdu-und-soziale-marktwirtschaft-duesseldorfer-leitsaetze-ueber-wirtschaftspolitik-landwirtschaftspolitik-sozialpolitik-wohnungsbau-15-juli-1949', note: 'Complete German short version consulted, including numbered principles 1–16. The editorial introduction is separate evidence; no review of the unabridged programme or implementation record is claimed.' },
  { id: 'zehenderDuesseldorfHistory', label: 'Kathrin Zehender — Düsseldorfer Leitsätze: historical commentary', url: 'https://www.kas.de/de/web/geschichte-der-cdu/dokumente-zur-geschichte-der-cdu/-/content/1949-duesseldorfer-leitsaetze-cdu', note: 'Complete German commentary read in the Konrad-Adenauer-Stiftung’s CDU-history portal. Its continuity-and-compromise interpretation is attributed, not substituted for the primary programme.' },
  { id: 'seidelChristianSocialCDU1979', label: 'Käthe Seidel — Arbeit und Eigentum in der katholischen Soziallehre und in der frühen Programmatik der CDU (1979)', url: 'https://www.bpb.de/shop/zeitschriften/apuz/archiv/531367/arbeit-und-eigentum-in-der-katholischen-soziallehre-und-in-der-fruehen-programmatik-der-cdu/', note: 'German summary, introduction, sections II.3–II.4, concluding assessment, and associated notes consulted in digitized HTML. A critical historical interpretation with visible transcription defects; no complete scan or underlying archive review.' },
  { id: 'malatestaCommunismIndividualism1926', label: 'Errico Malatesta — Communism and Individualism (1926)', url: 'https://theanarchistlibrary.org/library/errico-malatesta-communism-and-individualism', note: 'Complete English essay consulted, especially economic choice and the concluding disagreements about force and organization. Primary advocacy; original periodical and translator not verified.' },
  { id: 'malatestaOrganization1927', label: 'Errico Malatesta — A Project of Anarchist Organisation (1927)', url: 'https://www.marxists.org/archive/malatesta/1927/10/project.htm', note: 'Complete English transcription consulted: opening defense of organization, collective-responsibility objections, and concluding federation proposals. Polemical primary source, not an impartial assessment of the Platform.' },
  { id: 'makhnoMalatestaOrganizationExchange', label: 'Nestor Makhno and Errico Malatesta — Exchange on the Platform (1928–1930)', url: 'https://www.marxists.org/reference/archive/makhno-nestor/works/1928/malatesta.htm', note: 'Both letters read. Distinguish the internally dated 1928 Makhno letter, its 1930 publication, and Malatesta’s December 1929 reply; the page’s general date header does not date every item.' },
  { id: 'turcatoTransnationalAnarchism', label: 'Davide Turcato — Italian Anarchism as a Transnational Movement, 1885–1915 (2007; reprinted 2014)', url: 'https://zapruderworld.org/journal/past-volumes/volume-1/italian-anarchism-as-a-transnational-movement-1885-1915/', note: 'Introduction and opening Scope and Methodology paragraphs consulted in the authorized HTML reprint. Publisher metadata cross-checked; underlying newspapers and the complete article were not independently reviewed.' },
  { id: 'davidFriedmanMachinery2014', label: 'David D. Friedman — The Machinery of Freedom, third edition (2014)', url: 'http://www.daviddfriedman.com/Machinery%203rd%20Edn.pdf', note: 'Author-hosted PDF: copyright page and selected passages in chapters 29, 31, 42, and 44 visually checked at printed pp. 112, 123, 174, 176–177, and 204. Primary argument, not proof of institutional performance. HTTP retrieval worked; HTTPS access failed during review.' },
  { id: 'byockFeuding2003', label: 'Jesse L. Byock — Feuding in Viking-Age Iceland’s Great Village (2003)', url: 'https://www.viking.ucla.edu/publications/articles/feuding_viking_age_iceland_byock_vengeance.pdf', note: 'Author’s UCLA-hosted chapter: printed pp. 229–230, 235, and 241 visually reviewed, including footnotes. Selected-page historical interpretation; no complete chapter, saga-manuscript, or legal-code review is claimed.' },
  { id: 'thingvellirLawCouncil', label: 'Þingvellir National Park — Law Council', url: 'https://www.thingvellir.is/en/education/history/law-council/', note: 'English institutional overview read for the Lögrétta’s legislative role, participation, and changing status. An introductory historical account, not a measure of economic liberty or a comprehensive chronology.' },
  { id: 'ghdiGdrConstitution1974', label: 'GDR Constitution (1974) — German excerpts in GHDI', url: 'https://germanhistorydocs.org/de/zwei-deutsche-staaten-1961-1989/definition-der-ostdeutschen-identitaet-in-der-letzten-fassung-der-ddr-verfassung-7-oktober-1974', note: 'German preamble and Articles 1 and 8 read as primary constitutional claims, not implementation evidence. GHDI cites Dietrich Müller-Römer, ed., Die neue Verfassung der DDR (Cologne, 1974), pp. 78 ff.; that printed edition was not independently checked.' },
  { id: 'hugiGdrChurchPolicy', label: 'Sonja Hugi — Kirchenpolitik (2019)', url: 'https://www.bpb.de/themen/deutsche-teilung/ddr-kompakt/521885/kirchenpolitik/', note: 'German institutional historical overview read in full; constitutional religious freedom, the 1969 church federation, and the 1978 church–state relationship. Secondary synthesis, not an independent audit of constitutional enforcement or church records.' },
  { id: 'bundesarchivJugendweihe', label: 'Bundesarchiv — Staat gegen Kirche: Jugendweihe und MfS', url: 'https://www.bundesarchiv.de/themen-entdecken/online-entdecken/themenbeitraege/staat-gegen-kirche/', note: 'Historical narrative sections on church policy, the 1954 appeal, and interventions in church decision-making consulted. The linked archival facsimile and monograph were not independently reviewed; their contents are not presented as firsthand findings.' },
  { id: 'cabralCulturePortuguese', label: 'Amílcar Cabral — Libertação nacional e cultura (1970)', url: 'https://www.marxists.org/portugues/cabral/1970/02/20.htm', note: 'Portuguese transcription of the 20 February 1970 Syracuse address; passages on production, class, cultural plurality, and transformation consulted. MIA identifies a 1995 collected edition, pp. 221–233, and intermediary Buala/Esquerda versions; that edition chain was not independently verified.' },
  { id: 'gomesWomenLiberation', label: 'Patrícia Godinho Gomes — Mindjeris di Guiné (2021)', url: 'https://periodicos.ufabc.edu.br/index.php/abeafrica/article/view/1360', note: 'Portuguese oral-history study; publisher PDF visually checked at printed pp. 81–85, including methods and notes. Sixteen of 26 interviews from 2017–2018 inform this article; selected-section review, not a representative population survey.' },
  { id: 'degrassiCabralSocionatures', label: 'Aharon deGrassi — Socionatures, Space, and Decolonisation (2023)', url: 'https://scholarworks.sjsu.edu/faculty_rsca/4762/', note: 'San José State University’s bibliographic record and abstract of the Antipode article consulted. No full-article or independent review of Cabral’s agronomic archive is claimed.' },
  { id: 'leoImmortaleDeiFrench', label: 'Leo XIII — Immortale Dei (1885), French version', url: 'https://www.vatican.va/content/leo-xiii/fr/encyclicals/documents/hf_l-xiii_enc_01111885_immortale-dei.html', note: 'Selected unnumbered passages on government forms, public religion, distinct civil and ecclesiastical powers, and toleration. Vatican-hosted French version consulted; not a Latin-edition comparison.' },
  { id: 'vaticanReligiousFreedomFrench', label: 'Second Vatican Council — Dignitatis humanae (1965), French version', url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decl_19651207_dignitatis-humanae_fr.html', note: 'Sections 1–7 of the Vatican-hosted French version consulted. Primary doctrinal evidence; neither an implementation study nor a verified English translation.' },
  { id: 'portierEpiscopateFreedom', label: 'Philippe Portier — Laïcité et liberté religieuse dans le discours de l’épiscopat français (2023)', url: 'https://communio.fr/numero/resume/3143/laicite-et-liberte-religieuse-dans-le-discours-de-l-episcopat-francais-constantes-et-variations', note: 'Subtitle: Constantes et variations. Publisher PDF visually reviewed at printed pp. 48–51 and 57–58; selected-page review of the French episcopate, not a full-article or global Catholicism assessment.' },
  { id: 'allegrettiSeringueiros', label: 'Mary Allegretti — A construção social de políticas públicas (2008)', url: 'https://revistas.ufpr.br/made/article/view/13423', note: 'Portuguese scholarly history of Chico Mendes and the rubber-tappers’ movement. Abstract and selected publisher-PDF passages at printed pp. 46–49 and 51 consulted; not a current ecological-outcomes assessment.' },
  { id: 'chicoMendesCreationDecree', label: 'Brazil — Decreto nº 99.144, de 12 de março de 1990', url: 'https://legis.senado.leg.br/norma/521784/publicacao/15680553', note: 'Historical primary decree creating the Chico Mendes Extractive Reserve; Articles 1, 3, and 4 consulted for institutional placement, use concessions, and purpose. Not a review of current law or implementation.' },
  { id: 'agarwalParticipatoryExclusions', label: 'Bina Agarwal — Participatory Exclusions, Community Forestry, and Gender (2001)', url: 'https://binaagarwal.com/downloads/apapers/Participatory%20Exclusions,%20Community%20Forestry%20and%20Gender.pdf', note: 'Author-hosted paper; printed pp. 1623–1625, including Table 1 and the fieldwork description, visually checked because text extraction was garbled. Selected-page review, not a complete review of the paper.' },
  { id: 'communeDeclarationFrench', label: 'Commune de Paris — Déclaration au peuple français (19 April 1871)', url: 'https://gabrielperi.fr/commune-de-paris/declaration-au-peuple-francais-du-19-avril-1871/', note: 'French primary programme, read through Fondation Gabriel Péri’s transcription; Journal officiel no. 110, 20 April 1871. Programme, not an implementation report.' },
  { id: 'rougerieInternationalCommune', label: 'Jacques Rougerie — L’A.I.T. et le mouvement ouvrier à Paris (1972)', url: 'https://www.cambridge.org/core/journals/international-review-of-social-history/article/lait-et-le-mouvement-ouvrier-a-paris-pendant-les-evenements-de-18701871/8194867B80A408BAF748B5BD48E013BB', note: 'French scholarly article; publisher PDF consulted at printed pp. 67–71, on the International, the state, and the Committee of Public Safety vote. Not a full-article review.' },
  { id: 'cossartCommuneCommunalism', label: 'Paula Cossart — Le communalisme naît-il de la Commune ? (2021)', url: 'https://journals.openedition.org/rh19/7847', note: 'French abstract and opening paragraphs 1–9 consulted for Bookchin’s critical reception and the distinction between council and neighborhood participation. The full article was not reviewed.' },
  { id: 'assembleeCommuneHistory', label: 'Assemblée nationale — La Commune de Paris', url: 'https://www.assemblee-nationale.fr/dyn/histoire-et-patrimoine/troisieme-republique/la-commune-de-paris', note: 'French institutional overview used for chronology, patriotic context, and church–state separation; its displayed document image was not transcribed.' },
  { id: 'panXu', label: 'Pan & Xu — China’s Ideological Spectrum', url: 'https://www.journals.uchicago.edu/doi/abs/10.1086/694255', note: 'Evidence that political preferences can be multidimensional rather than a single left–right line.' },
  { id: 'sepSocialism', label: 'Stanford Encyclopedia — Socialism', url: 'https://plato.stanford.edu/entries/socialism/', note: 'Definitions and internal diversity of socialist traditions.' },
  { id: 'sepMarx', label: 'Stanford Encyclopedia — Karl Marx (Spring 2025 archive)', url: 'https://plato.stanford.edu/archives/spr2025/entries/marx/', note: 'Scholarly account of Marx’s theory of history, capitalism, class, the state, ideology, and communist transformation.' },
  { id: 'sepLuxemburg', label: 'Stanford Encyclopedia — Rosa Luxemburg', url: 'https://plato.stanford.edu/entries/luxemburg/', note: 'Luxemburg’s relationship between socialism, democracy, mass participation, and criticism of authoritarian revolutionary models.' },
  { id: 'luxemburgSpartacusGerman', label: 'Rosa Luxemburg — Was will der Spartakusbund? (1918)', url: 'https://www.rosalux.de/stiftung/rosa-luxemburg-1/was-will-der-spartakusbund', note: 'German primary programme, published in Die Rote Fahne, 14 December 1918; foundation transcription cites Gesammelte Werke 4, pp. 440–449. Political demands II and concluding majority condition are read together; English explanations are original paraphrases.' },
  { id: 'ghdiWeimarGerman', label: 'GHDI — Die Weimarer Verfassung (1919)', url: 'https://germanhistorydocs.org/de/die-weimarer-republik-1918-1933/die-weimarer-verfassung-11-august-1919', note: 'German constitutional excerpts, especially Articles 153, 159, and 165, from the German Historical Institute’s collection. Ellipses mark omitted material; provisions document legal aspirations, not proof of implementation. Additional consultation on 16 September 2026: Articles 48 (displayed paragraphs 1–3), 50 and 54; the excerpt omits Article 25 and the final paragraphs of Article 48.' },
  { id: 'kruseGermanRevolution', label: 'Wolfgang Kruse — Das Ende des Kaiserreichs', url: 'https://www.bpb.de/themen/erster-weltkrieg-weimar/ersterweltkrieg/155331/das-ende-des-kaiserreichs-militaerischer-zusammenbruch-und-revolution/', note: 'German historical interpretation, especially the section Die Revolution, concerning councils, parliamentary government, and disputed opportunities for further democratization.' },
  { id: 'jesseKoehlerCouncilDebate', label: 'Eckhard Jesse and Henning Köhler — Die deutsche Revolution 1918/19 im Wandel der historischen Forschung', url: 'https://www.bpb.de/shop/zeitschriften/apuz/archiv/531038/die-deutsche-revolution-1918-19-im-wandel-der-historischen-forschung-forschungsueberblick-und-kritik-an-der-herrschenden-lehre/', note: 'APuZ 45/1978 historiographical intervention questioning councils’ democratic mandate and administrative capacity. Used as an attributed historical critique, not as a current scholarly consensus.' },
  { id: 'sepLiberalism', label: 'Stanford Encyclopedia — Liberalism', url: 'https://plato.stanford.edu/entries/liberalism/', note: 'Liberal approaches to liberty, property, authority, and the state.' },
  { id: 'humboldtLimitsGerman', label: 'Wilhelm von Humboldt — Grenzen der Wirksamkeit des Staats', url: 'https://wvh-schriften.de/105', note: 'German primary text, chapters II–III and editorial publication history; independent digital edition based on Albert Leitzmann’s edition, curated by Silvia Berigüete Pastor. English summaries are editorial paraphrases.' },
  { id: 'vallsHumboldtMill', label: 'Andrew Valls — Self–Development and the Liberal State', url: 'https://www.cambridge.org/core/journals/review-of-politics/article/abs/selfdevelopment-and-the-liberal-state-the-cases-of-john-stuart-mill-and-wilhelm-von-humboldt/36E3F060CA6A01379C3EEE3DA6CA5EBF', note: 'The Review of Politics 61(2), 1999, pp. 251–274. The accessible abstract contrasts Mill’s and Humboldt’s conclusions about state support for personal development; full article not reviewed.' },
  { id: 'euckenFreiburgHistory', label: 'Walter Eucken Institut — Walter Eucken und die Freiburger Schule', url: 'https://www.eucken.de/institut/walter-eucken-freiburger-schule/', note: 'German institutional account of Eucken, Böhm, Großmann-Doerth, competitive order, and private power. The institute represents this intellectual tradition; its historical interpretation needs independent comparison.' },
  { id: 'freiburgOrdoliberalDebates', label: 'Universität Freiburg — Welche Zukunft hat die Freiburger Schule?', url: 'https://www.pr.uni-freiburg.de/pm/online-magazin/forschen-und-entdecken/welche-zukunft-hat-die-freiburger-schule-und-was-kann-der-ordoliberalismus-zum-umgang-mit-aktuellen-krisen-beitragen', note: 'University report of 17 March 2023 presenting Tim Krieger’s interpretation of competition rules and contemporary ordoliberal debates; an attributed scholarly perspective, not a consensus finding.' },
  { id: 'sepLibertarianism', label: 'Stanford Encyclopedia — Libertarianism', url: 'https://plato.stanford.edu/entries/libertarianism/', note: 'Individual liberty, coercion, property, and market arguments.' },
  { id: 'sageWhatIsFrenchLiberalism', label: 'SAGE — What Is French Liberalism?', url: 'https://journals.sagepub.com/doi/abs/10.1177/00323217221126727', note: 'Scholarly study of French liberalism and the relationship among Constant, Tocqueville, and the category itself.' },
  { id: 'cambridgeConstitutionalLiberalismFrance', label: 'Cambridge — Constitutional liberalism in France', url: 'https://www.cambridge.org/core/books/abs/cambridge-history-of-nineteenth-century-political-thought/constitutional-liberalism-in-france/CCBAF62ECF387478E5B46CDF79E07474', note: 'Scholarly account of constitutional liberalism in France from Constant to Tocqueville.' },
  { id: 'economieBastiat', label: 'French Ministry of Economy — Frédéric Bastiat', url: 'https://www.economie.gouv.fr/facileco/culture-economique/grands-noms-et-courants-de-leconomie/frederic-bastiat', note: 'French-language institutional context on Bastiat as an economist, journalist, politician, and liberal thinker.' },
  { id: 'sepMill', label: 'Stanford Encyclopedia — Mill’s Moral and Political Philosophy', url: 'https://plato.stanford.edu/entries/mill-moral-political/', note: 'Mill’s liberty principle, individuality, free discussion, and limits on coercion.' },
  { id: 'sepLibertyPositiveNegative', label: 'Stanford Encyclopedia — Positive and Negative Liberty', url: 'https://plato.stanford.edu/entries/liberty-positive-negative/', note: 'The distinction between freedom as non-interference and freedom as self-direction, including its classical-liberal history.' },
  { id: 'sepConservatism', label: 'Stanford Encyclopedia — Conservatism', url: 'https://plato.stanford.edu/entries/conservatism/', note: 'Tradition, authority, gradual change, and paternalism.' },
  { id: 'bpbConservatism', label: 'Bundeszentrale für politische Bildung — Konservatismus', url: 'https://www.bpb.de/kurz-knapp/lexika/politiklexikon/17742/konservatismus/', note: 'German-language institutional history and definition of conservatism, including the German social-state and political traditions.' },
  { id: 'sepReligionPolitics', label: 'Stanford Encyclopedia — Religion and Political Theory', url: 'https://plato.stanford.edu/entries/religion-politics/', note: 'The relationship between religious reasons, political authority, coercive law, secularism, and religious pluralism.' },
  { id: 'oxfordChristianDemocracy', label: 'Oxford Handbook — Christian Democracy', url: 'https://academic.oup.com/edited-volume/34324/chapter-abstract/291333901', note: 'Academic treatment of Christian democracy, constitutionalism, church social doctrine, religion, and political pluralism.' },
  { id: 'oxfordChristianDemocracyEurope', label: 'Oxford Research Encyclopedia — Christian Democracy and Europe', url: 'https://academic.oup.com/edited-volume/37088/chapter-abstract/323188100', note: 'Comparative scholarship on Christian democracy’s religious values, political economy, welfare institutions, parties, and role in European integration.' },
  { id: 'cambridgeChristianDemocracy', label: 'Cambridge History — Christian democracy', url: 'https://www.cambridge.org/core/books/abs/cambridge-history-of-twentieth-century-political-thought/christian-democracy/0E40DBC230BD418CF8E8DCEB3D06AABF', note: 'Historical account of Christian democracy as a response to mass politics, secularism, socialism, and the challenge of reconciling Catholic political thought with pluralist democracy.' },
  { id: 'oxfordSocialCatholicismChristianDemocracy', label: 'Oxford — Social Catholicism and Christian Democracy', url: 'https://academic.oup.com/book/26872/chapter-abstract/195914841', note: 'Scholarly study of social Catholicism, personalism, organicism, laity, secularization, and the intellectual formation of Christian democracy.' },
  { id: 'oxfordChristianDemocratDecade', label: 'Oxford — The Christian Democrat Decade', url: 'https://academic.oup.com/book/46848/chapter/413591581', note: 'Historical research on postwar Christian-democratic parties, reconstruction, social security, and the European political order.' },
  { id: 'vaticanRerumNovarum', label: 'Vatican — Rerum Novarum', url: 'https://www.vatican.va/content/leo-xiii/en/encyclicals/documents/hf_l-xiii_enc_15051891_rerum-novarum.html', note: 'Primary social-encyclical source on labor, private property, worker associations, social duties, and the limits of state intervention.' },
  { id: 'vaticanQuadragesimoAnno', label: 'Vatican — Quadragesimo Anno', url: 'https://www.vatican.va/content/pius-xi/en/encyclicals/documents/hf_p-xi_enc_19310515_quadragesimo-anno.html', note: 'Primary social-encyclical source used for social order, occupational associations, economic power, and the principle later described as subsidiarity.' },
  { id: 'vaticanSocialDoctrineCompendium', label: 'Vatican — Compendium of the Social Doctrine of the Church', url: 'https://press.vatican.va/roman_curia/pontifical_councils/justpeace/documents/rc_pc_justpeace_doc_20060526_compendio-dott-soc_en.html', note: 'Institutional synthesis of Catholic social principles, including human dignity, solidarity, subsidiarity, the common good, rights, family, work, and political community.' },
  { id: 'oxfordLiberationTheologies', label: 'Oxford Research Encyclopedia — Liberation Theologies in America', url: 'https://academic.oup.com/edited-volume/62249/chapter-abstract/551408580', note: 'Scholarly account of liberation theologies as contextual projects joining social analysis, scripture, religious history, and responses to particular forms of oppression.' },
  { id: 'oxfordChristianSocialism', label: 'Oxford Handbook — Capitalism and Socialism in Christian Thought', url: 'https://academic.oup.com/edited-volume/28079/chapter-abstract/212105874', note: 'Historical scholarship on Christian thought, capitalism, socialism, Christian social teaching, and nineteenth-century debates.' },
  { id: 'cambridgeReligionOriginsSocialism', label: 'Cambridge — Religion and the Origins of Socialism', url: 'https://www.cambridge.org/core/services/aop-cambridge-core/content/view/7F5EABFED9D7A98ACE6478D2E3E2C035/9780511779510c8_p171-189_CBO.pdf/religion_and_the_origins_of_socialism.pdf', note: 'Comparative historical study challenging a simple opposition between religion and socialism and tracing religious dimensions in the origins of socialist politics.' },
  { id: 'jstorChristianSocialistRevival', label: 'JSTOR — Christian Socialist Revival, 1877–1914', url: 'https://www.jstor.org/stable/j.ctt183pj8c', note: 'Scholarly history of British Christian socialist thought, its religious grounds, institutions, and relationship to socialism and the churches.' },
  { id: 'vaticanLiberationInstruction', label: 'Vatican — Instruction on Certain Aspects of the Theology of Liberation', url: 'https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19840806_theology-liberation_en.html', note: 'Primary institutional critique of forms of liberation theology that adopt Marxist concepts insufficiently critically, while affirming social concern and Christian freedom.' },
  { id: 'vaticanChristianFreedomLiberation', label: 'Vatican — Instruction on Christian Freedom and Liberation', url: 'https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_19860322_freedom-liberation_en.html', note: 'Primary institutional account of Christian freedom, social justice, and liberation following the 1984 instruction.' },
  { id: 'celamMedellin', label: 'CELAM — General Conferences of the Latin American Episcopate', url: 'https://www.celam.org/conferencias-generales', note: 'Institutional historical record for the Medellín conference and Latin American episcopal engagement with social transformation after Vatican II.' },
  { id: 'catholicWorkerMovement', label: 'Catholic Worker Movement — About and history', url: 'https://catholicworker.org/about-the-catholic-worker-movement/', note: 'Movement-maintained historical account of Dorothy Day, hospitality houses, voluntary poverty, worker solidarity, and pacifism.' },
  { id: 'kingPoorPeoplesCampaign', label: 'Stanford King Institute — Poor People’s Campaign', url: 'https://kinginstitute.stanford.edu/poor-peoples-campaign', note: 'Institutional historical record of Martin Luther King Jr.’s multiracial campaign for jobs, income, and economic justice through nonviolent protest.' },
  { id: 'oxfordLiberationLegacy', label: 'Oxford Centre for Theology and Modern European Thought — Liberation Theology and its Legacy', url: 'https://www.theology.ox.ac.uk/sitefiles/oxtheo-23-web-1.pdf', note: 'Institutional research overview of liberation theology’s intellectual and political legacy, used for contextual synthesis rather than quotation.' },
  { id: 'oxfordPopulismShortIntroduction', label: 'Oxford — Populism: A Very Short Introduction', url: 'https://academic.oup.com/book/866', note: 'Conceptual and comparative introduction defining populism through the pure people versus corrupt elite distinction and its ambivalent relationship with democracy.' },
  { id: 'oxfordModernPopulism', label: 'Oxford Research Encyclopedia — Modern Populism', url: 'https://academic.oup.com/edited-volume/62239/chapter-abstract/550747415', note: 'Methodological and conceptual review of minimal definitions, ideological approaches, illiberalism, and the risks of stretching the populism label.' },
  { id: 'annualReviewPoliticalTheoryPopulism', label: 'Annual Review — Political Theory of Populism', url: 'https://www.annualreviews.org/content/journals/10.1146/annurev-polisci-050317-070753', note: 'Political-theory review locating populism within democracy, popular sovereignty, nation, representation, and the tensions between inclusion and exclusion.' },
  { id: 'oxfordMullerPopulism', label: 'Oxford — What Is Populism?', url: 'https://academic.oup.com/icon/article/15/4/1231/4872590', note: 'Scholarly discussion of populism’s claim to represent the real people and its risks for pluralism, accountability, media, and institutional checks.' },
  { id: 'cambridgeAnatomyPopulistIdeology', label: 'Cambridge — Anatomy of Populist Ideology', url: 'https://www.cambridge.org/core/journals/european-journal-of-political-research/article/anatomy-of-populist-ideology-how-political-parties-define-the-people-and-the-elite/530AC0E964E62C709929D155CE14CEBB', note: 'Comparative party research on how populist parties construct the people and the elite, rather than assuming these categories have one fixed content.' },
  { id: 'scieloLatinAmericanPopulism', label: 'SciELO — Latin American Populism in Perspective', url: 'https://www.scielo.org.mx/scielo.php?lng=es&nrm=iso&pid=S0188-25032023000600169&script=sci_arttext_plus&tlng=es', note: 'Spanish-language comparative scholarship on Latin American populism, including Peronism, Varguismo, Cardenismo, democratic variation, and changing research approaches.' },
  { id: 'oxfordLatinAmericaPopulism', label: 'Oxford — Populism and Latin America', url: 'https://academic.oup.com/manchester-scholarship-online/book/16713/chapter-abstract/173823465', note: 'Comparative analysis of populism, political legitimacy, democracy, political economy, and the Bolivarian and wider Latin American context.' },
  { id: 'americanYawpOmahaPlatform', label: 'American Yawp Reader — Omaha Platform of the People’s Party', url: 'https://www.americanyawp.com/reader/wp-content/uploads/The-American-Yawp-Reader-Vol-2-Fall-2020.pdf', note: 'Educational primary-source reader containing the 1892 Omaha Platform, used to document an agrarian and anti-monopoly populist programme without reproducing its text.' },
  { id: 'coePopulismDemocracy', label: 'Council of Europe — State of Democracy, Human Rights and the Rule of Law', url: 'https://edoc.coe.int/en/an-overview/7345-pdf-state-of-democracy-human-rights-and-the-rule-of-law.html', note: 'Institutional report on democratic resilience, pluralism, media, rights, and rule-of-law safeguards in the context of populist pressures.' },
  { id: 'oxfordPoliticalCentrism', label: 'Oxford Research Archive — Political Centrism in Western Democracies', url: 'https://ora.ox.ac.uk/objects/uuid%3A471a184f-2fd9-48f9-a8e2-a83c15669e7d', note: 'Comparative research arguing that the political centre has multiple meanings and should be studied through party competition, voter behaviour, ideology, and democratic theory.' },
  { id: 'oxfordNationalSocialism', label: 'Oxford Handbook of the Weimar Republic — National Socialism', url: 'https://academic.oup.com/edited-volume/40697/chapter-abstract/348423596', note: 'Scholarly history of National Socialism as a movement rooted in existing traditions, mass-party organization, propaganda, violence, social mobilization, and the Weimar context.' },
  { id: 'oxfordNaziGermany', label: 'Oxford — Nazi Germany', url: 'https://academic.oup.com/book/47835', note: 'Authoritative historical collection on National Socialism as movement and regime, including religion, economy, foreign policy, war, genocide, and postwar memory.' },
  { id: 'ushmmNaziRacism', label: 'United States Holocaust Memorial Museum — Nazi Racial Ideology', url: 'https://encyclopedia.ushmm.org/content/en/article/victims-of-the-nazi-era-nazi-racial-ideology', note: 'Institutional historical account of racial hierarchy, antisemitism, eugenics, persecution, expansion, and the relationship between Nazi ideology and genocide.' },
  { id: 'ushmmThirdReich', label: 'United States Holocaust Memorial Museum — The Third Reich', url: 'https://encyclopedia.ushmm.org/content/en/article/third-reich', note: 'Historical account of Nazi dictatorship, political repression, racial policy, preparation for war, the Holocaust, and resistance.' },
  { id: 'ushmmNaziPartyPlatform', label: 'United States Holocaust Memorial Museum — Nazi Party Platform', url: 'https://encyclopedia.ushmm.org/content/en/article/nazi-party-platform', note: 'Documentary source connecting the Nazi party programme to racial citizenship, antisemitic law, exclusion, propaganda, and later implementation.' },
  { id: 'unGenocideConvention', label: 'United Nations — Convention on the Prevention and Punishment of Genocide', url: 'https://legal.un.org/avl/ha/cppcg/cppcg.html', note: 'Official legal history and text for the postwar definition, prevention, and punishment of genocide, including the relationship to Nuremberg and international criminal law.' },
  { id: 'oxfordImperialism', label: 'Oxford Bibliographies — Imperialism', url: 'https://academic.oup.com/reference/62360/reference-article-abstract/554551848', note: 'Scholarly overview defining imperialism through the extension of dominion by military conquest, political or economic compulsion, and unequal relations between imperial and subject peoples.' },
  { id: 'oxfordMilitarism', label: 'Oxford Bibliographies — Militarism', url: 'https://academic.oup.com/reference/62399/reference-article-abstract/555380045', note: 'Historical overview of militarism as military predominance in policy and the use of military force, rhetoric, and symbols in domestic and international power.' },
  { id: 'oxfordPoliticalEconomyMilitarism', label: 'Oxford Handbook — The Political Economy of Militarism', url: 'https://academic.oup.com/edited-volume/38857/chapter-abstract/337902327', note: 'Research on military expenditure, militaristic values, capitalism, imperial interests, and the economic costs and political functions of militarization.' },
  { id: 'oxfordColonialismEmpireSociology', label: 'Oxford Research Encyclopedia — Colonialism, Empire, and Sociology', url: 'https://academic.oup.com/edited-volume/63014/chapter/565948036', note: 'Historical scholarship on colonialism, empire, militarism, liberal and socialist critiques, racialized hierarchy, and the social sciences of imperial rule.' },
  { id: 'cambridgeMilitarismImperialism', label: 'Cambridge — Militarism and Imperialism, 1871–1914', url: 'https://www.cambridge.org/core/books/abs/anticipating-total-war/different-path-to-war-a-comparative-study-of-militarism-and-imperialism-in-the-united-states-and-imperial-germany-18711914/91DA664276C6099DE7AF8A8CC262401C', note: 'Comparative historical study of how militarism and imperialism developed differently across the United States and Imperial Germany before the First World War.' },
  { id: 'unCharterForce', label: 'United Nations Security Council — UN Charter and the use of force', url: 'https://main.un.org/securitycouncil/en/content/working-methods-un-charter', note: 'Official source for sovereign equality, peaceful settlement, territorial integrity, political independence, and the Charter’s prohibition on threats or uses of force.' },
  { id: 'usStateMahan', label: 'U.S. Office of the Historian — Alfred Thayer Mahan', url: 'https://history.state.gov/milestones/1866-1898/mahan', note: 'Institutional history of Mahan’s 1890 sea-power analysis and its influence on naval strategy and imperial policy.' },
  { id: 'oxfordLiberalismResearch', label: 'Oxford Research Encyclopedia — Liberalism', url: 'https://academic.oup.com/edited-volume/62239/chapter-abstract/550776269', note: 'Scholarly overview connecting liberalism with non-authoritarian government, constitutionalism, rule of law, equal liberties, and the internal diversity of liberal institutions.' },
  { id: 'sepConstitutionalism', label: 'Stanford Encyclopedia — Constitutionalism', url: 'https://plato.stanford.edu/entries/constitutionalism/', note: 'Scholarly overview of constitutional limits, interpretation, democracy, equality, rights, rule of law, and the tensions among originalism, living constitutionalism, and common-good approaches.' },
  { id: 'oxfordConstitutionalJustice', label: 'Oxford — Constitutional Justice: A Liberal Theory of the Rule of Law', url: 'https://academic.oup.com/book/11972', note: 'Academic account of the rule of law, constitutional justice, judicial review, procedural fairness, equality, and protection against arbitrary power.' },
  { id: 'oxfordBritishConstitutionalism', label: 'Oxford — Law, Liberty, and Justice: The Legal Foundations of British Constitutionalism', url: 'https://academic.oup.com/book/9766', note: 'Historical and legal study of liberty, conscience, Parliament, sovereignty, constitutional rights, separation of powers, and judicial review in British constitutional thought.' },
  { id: 'locFederalistPapers', label: 'Library of Congress — Federalist Papers: Primary Documents in U.S. History', url: 'https://guides.loc.gov/federalist-papers', note: 'Primary-source guide for federalism, separated powers, checks and balances, representation, pluralism, and constitutional interpretation.' },
  { id: 'unRuleLawHumanRights', label: 'United Nations — Rule of Law and Human Rights', url: 'https://www.un.org/ruleoflaw/en/rule-of-law-and-human-rights', note: 'Institutional account linking rule of law to human rights, equality before law, accountability, fair process, and institutions that constrain arbitrary power.' },
  { id: 'echrConvention', label: 'European Court of Human Rights — European Convention on Human Rights', url: 'https://www.echr.coe.int/en/european-convention-on-human-rights', note: 'Official treaty text and institutional context for postwar rights protection, democratic freedoms, lawful restrictions, and international supervision.' },
  { id: 'colonialLiberalismExclusion', label: 'SAGE — Equality and Exclusion: The Racial Constitution of Colonial Liberalism', url: 'https://journals.sagepub.com/doi/abs/10.1177/0725513608095798', note: 'Historical scholarship used to document how liberal claims to equality and self-government coexisted with racialized colonial exclusion; the label must not be treated as internally uniform.' },
  { id: 'lijphartConsensusDemocracy', label: 'Lijphart — Consensus and Consensus Democracy', url: 'https://onlinelibrary.wiley.com/doi/10.1111/j.1467-9477.1998.tb00007.x', note: 'Comparative political-institutional analysis of consensus democracy, accommodation, consociation, power-sharing, and the conditions that produce them.' },
  { id: 'oxfordThirdWayConversion', label: 'Oxford — The Conversion of Social Democracy to the Third Way', url: 'https://academic.oup.com/policy-press-scholarship-online/book/55414/chapter/436024043', note: 'Critical historical analysis of how social-democratic parties responded to neoliberalism, markets, globalization, and the Third Way.' },
  { id: 'wileyThirdWayGiddens', label: 'Anthony Giddens — The Third Way', url: 'https://www.wiley-vch.de/en/areas-interest/humanities-social-sciences/the-third-way-978-0-7456-2267-5', note: 'Primary theoretical presentation of a centre-left Third Way project seeking to reconcile markets, social cohesion, welfare reform, and globalization.' },
  { id: 'sepPragmatism', label: 'Stanford Encyclopedia — Pragmatism', url: 'https://plato.stanford.edu/entries/pragmatism/', note: 'Philosophical background for fallibilism, inquiry, practical consequences, democratic experimentation, and pluralist problem-solving.' },
  { id: 'sepDemocracy', label: 'Stanford Encyclopedia — Democracy', url: 'https://plato.stanford.edu/entries/democracy/', note: 'Scholarly overview of democratic authority, representation, participation, pluralism, equality, and institutional design.' },
  { id: 'oxfordPluralismConsensus', label: 'Oxford — Pluralism: Against the Demand for Consensus', url: 'https://academic.oup.com/book/8770', note: 'Political theory of pragmatic arrangements among dissonant groups and a critique of treating consensus as the only legitimate democratic goal.' },
  { id: 'coeDemocraticGovernance', label: 'Council of Europe — Democratic Governance', url: 'https://www.coe.int/en/web/civil-society/democratic-governance', note: 'Institutional framework emphasizing transparency, integrity, accountability, participation, and trust in democratic institutions.' },
  { id: 'euRobertSchuman', label: 'European Union — Robert Schuman, EU pioneer', url: 'https://european-union.europa.eu/principles-countries-history/history-eu/eu-pioneers/robert-schuman_en', note: 'Official historical source on Schuman’s Christian-democratic statesmanship, reconciliation, and proposal for shared European coal and steel institutions.' },
  { id: 'adenauerHouse', label: 'Stiftung Bundeskanzler-Adenauer-Haus', url: 'https://adenauerhaus.de/en/about-us/foundation', note: 'Institutional archive and biography source for Konrad Adenauer’s democratic reconstruction and political work.' },
  { id: 'bpbChristianDemocraticCVP', label: 'Bundeszentrale für politische Bildung — Christian Democratic People’s Party', url: 'https://www.bpb.de/kurz-knapp/lexika/politiklexikon/17292/christlich-demokratische-volkspartei-cvp/', note: 'German institutional reference on confessional party origins, opening to non-Catholics, Christian social teaching, and the Swiss Christian-democratic tradition.' },
  { id: 'oxfordPortugalPoliticalCatholicism', label: 'Oxford — Portugal and Political Catholicism in Europe', url: 'https://academic.oup.com/book/6903/chapter/151141597', note: 'Historical research on Portuguese Catholic political activity and why a durable Christian-democratic alternative developed differently after authoritarian rule.' },
  { id: 'comparativeChristianDemocracy', label: 'Stanford — Social Democracy, Christian Democracy, and Constitutional Structure', url: 'https://cpi.stanford.edu/_media/pdf/Reference%20Media/Huber%2C%20Ragin%2C%20and%20Stephens_1993_Politics%20and%20Political%20Economy.pdf', note: 'Comparative political-economy study distinguishing Christian-democratic and social-democratic institutional patterns, including federalism, welfare, and subsidiarity.' },
  { id: 'sepNationalism', label: 'Stanford Encyclopedia — Nationalism', url: 'https://plato.stanford.edu/entries/nationalism/', note: 'Distinction between civic, liberal, conservative, and ethnic forms of nationalism.' },
  { id: 'oxfordConstitutionalPatriotism', label: 'Oxford Academic — Constitutional patriotism, citizenship, and belonging', url: 'https://academic.oup.com/icon/article/6/1/137/669057', note: 'Scholarly analysis of the relationship and difference between civic nationalism, constitutional patriotism, citizenship, cultural belonging, and exclusion.' },
  { id: 'coeDemocraticCitizenship', label: 'Council of Europe — Education for Democratic Citizenship and Human Rights', url: 'https://www.coe.int/en/web/compass/council-of-europe-charter-on-education-for-democratic-citizenship-and-human-rights-education', note: 'Institutional framework linking democratic citizenship to rights, responsibilities, diversity, participation, democracy, and the rule of law.' },
  { id: 'bpbNationalism', label: 'Bundeszentrale für politische Bildung — Nationalismus', url: 'https://www.bpb.de/kurz-knapp/lexika/politiklexikon/17889/nationalismus/', note: 'German-language institutional definition of nationalism and the political elevation of ethnic community, language, culture, history, people, and territory.' },
  { id: 'cambridgeKohnDichotomy', label: 'Cambridge — National identity and the “Kohn dichotomy”', url: 'https://www.cambridge.org/core/journals/nationalities-papers/article/national-identity-and-the-kohn-dichotomy/557687C490319715F5E25271E0DDB68B', note: 'Comparative scholarship showing that civic–ethnic nationalism is an illuminating ideal type, not a categorical geographic classification.' },
  { id: 'sepColonialism', label: 'Stanford Encyclopedia — Colonialism', url: 'https://plato.stanford.edu/entries/colonialism/', note: 'Philosophical and historical analysis of colonial domination, national liberation, postcolonial sovereignty, and continuing settler-colonial relations.' },
  { id: 'unIndigenousDeclaration', label: 'United Nations — Declaration on the Rights of Indigenous Peoples', url: 'https://digitallibrary.un.org/record/606782?v=pdf', note: 'Official multilingual instrument recognizing Indigenous peoples’ collective rights, self-determination, autonomy or self-government, participation, culture, lands, and resources.' },
  { id: 'oxfordTribalConstitutions', label: 'Oxford Handbook — Tribal Constitutions and Native Sovereignty', url: 'https://academic.oup.com/edited-volume/41327/chapter/496999456', note: 'Scholarly legal history of Indigenous governance, tribal constitutions, sovereignty, confederacy, councils, and the effects of colonial and federal policy.' },
  { id: 'waitangiTribunalTreaty', label: 'Waitangi Tribunal — About the Treaty', url: 'https://waitangitribunal.govt.nz/en/about/the-treaty/about-the-treaty', note: 'Official New Zealand account of the Māori and English treaty texts, kāwanatanga, tino rangatiratanga, land, authority, and continuing interpretive dispute.' },
  { id: 'pmcIndigenousDeliberative', label: 'PMC — Deliberative democracy and Indigenous decision-making', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8095723/', note: 'Peer-reviewed comparative study of deliberative practices and historical perspectives on American Indian and Alaska Native political decision-making.' },
  { id: 'vdem', label: 'V-Dem Democracy Indices Codebook', url: 'https://www.v-dem.net/documents/55/codebook.pdf', note: 'Operationalization of liberal democracy, civil liberties, rule of law, and limits on executive power.' },
  { id: 'wvs', label: 'World Values Survey — Findings & Insights', url: 'https://www.worldvaluessurvey.org/WVSContents.jsp?CMSID=Findings', note: 'Empirical traditional/secular-rational and survival/self-expression value dimensions.' },
  { id: 'ches', label: 'Chapel Hill Expert Survey Codebook', url: 'https://www.chesdata.eu/s/2014_CHES_codebook.pdf', note: 'Comparable issue scales for economic, lifestyle, religion, immigration, multiculturalism, and decentralization positions.' },
  { id: 'manifesto', label: 'Manifesto Project Coding Handbook', url: 'https://manifesto-project.wzb.eu/down/papers/handbook_v4.pdf', note: 'Cross-national coding of controlled economy, social justice, political system, and internationalism.' },
  { id: 'foreignPolicy', label: 'Oxford — Party Politics of Foreign and Security Policy', url: 'https://academic.oup.com/fpa/article/16/4/515/5911933', note: 'Comparative evidence on dovish/hawkish, multilateralist, alliance, and interventionist party positions.' },
  { id: 'oecdWelfareModels', label: 'OECD — Welfare-state models and social protection', url: 'https://www.oecd.org/en/publications/delivering-quality-education-and-health-care-to-all_83025c02-en/full-report/setting-the-scene_52c47f8b.html', note: 'Comparative institutional context for universalism, decommodification, public services, and social-democratic welfare regimes.' },
  { id: 'ghdiGodesberg', label: 'German History in Documents and Images — Godesberg Program', url: 'https://germanhistorydocs.org/en/occupation-and-the-emergence-of-two-states-1945-1961/godesberg-program-of-the-spd-november-1959', note: 'English primary-programme excerpt, distinct from GHDI’s modern interpretive introduction. The host traces it through the SPD’s 1959 English publication and a 1987 anthology; selected passages checked against the German record.' },
  { id: 'fesHistorySocialDemocracy', label: 'Friedrich-Ebert-Stiftung — Geschichte der Sozialen Demokratie', url: 'https://library.fes.de/pdf-files/akademie/10929-201303.pdf', note: 'German-language institutional history of social democracy, including Eduard Bernstein’s reformist and democratic-socialist position.' },
  { id: 'bpbSpdProgrammatics', label: 'bpb — Die Programmatik der SPD', url: 'https://www.bpb.de/themen/parteien/parteien-in-deutschland/spd/42085/die-programmatik-der-spd/', note: 'Frank Decker’s German-language political reference, dated 16 January 2026. This pass uses the historical Godesberg and Neue Ostpolitik section, not its current-policy discussion as a country rating.' },
  { id: 'bpbGermanSocialState', label: 'bpb — Der deutsche Sozialstaat', url: 'https://www.bpb.de/themen/politisches-system/24-deutschland/40475/der-deutsche-sozialstaat/', note: 'German-language institutional history of social insurance, the constitutional Sozialstaat, and the relationship between social policy and political conflict.' },
  { id: 'bpbWelfareModels', label: 'bpb — Wohlfahrtsstaatliche Grundmodelle', url: 'https://www.bpb.de/themen/arbeit/arbeitsmarktpolitik/305930/wohlfahrtsstaatliche-grundmodelle/', note: 'German-language comparative overview of welfare-state models, including liberal, conservative, and social-democratic variants.' },
  { id: 'bpbSocialMarketEconomy', label: 'bpb — Die Soziale Marktwirtschaft in der Bundesrepublik Deutschland', url: 'https://www.bpb.de/shop/zeitschriften/apuz/archiv/534440/die-soziale-marktwirtschaft-in-der-bundesrepublik-deutschland-ursprung-konzeption-entwicklung-und-probleme/', note: 'German-language historical and conceptual analysis of ordoliberal roots, social-market institutions, and their post-war development.' },
  { id: 'jauresArchive', label: 'Jean Jaurès Archive — Socialist History of the French Revolution', url: 'https://www.marxists.org/archive/jaures/index.htm', note: 'French socialist primary-source archive used for the relationship among republican democracy, social transformation, and socialist unity.' },
  { id: 'openTextbook', label: 'Political Ideologies and Worldviews — Open Textbook', url: 'https://open.umn.edu/opentextbooks/textbooks/political-ideologies-and-worldviews-an-introduction', note: 'Comparative introduction to ideology, including liberalism, conservatism, socialism, anarchism, nationalism, populism, fascism, Islamism, Confucianism, environmentalism, and feminism.' },
  { id: 'sepAnarchism', label: 'Stanford Encyclopedia — Anarchism', url: 'https://plato.stanford.edu/entries/anarchism/', note: 'Philosophical distinctions among anarchist arguments and traditions.' },
  { id: 'cambridgeAnarchismBolshevism', label: 'Cambridge — Spanish Anarchism and the Bolshevik Dictatorship', url: 'https://www.cambridge.org/core/journals/international-labor-and-working-class-history/article/abs/an-uncanny-honeymoon-spanish-anarchism-and-the-bolshevik-dictatorship-of-the-proletariat-191722/3F3300AD7151D1DBD596E91AA23EB418', note: 'Historical research on Spanish anarcho-syndicalists’ changing relationship to Bolshevism, workers’ dictatorship, and internal ideological conflict.' },
  { id: 'iloCooperatives', label: 'International Labour Organization — Cooperatives', url: 'https://www.ilo.org/topics-and-sectors/cooperatives', note: 'Institutional account of cooperative principles including voluntary membership, democratic member control, autonomy, equality, solidarity, and concern for community.' },
  { id: 'iloWorkerCooperatives', label: 'International Labour Organization — Worker cooperatives', url: 'https://www.ilo.org/resource/other/sse-worker-cooperatives', note: 'Institutional overview of worker-owned and worker-controlled cooperatives as alternatives to dependence on a conventional employer.' },
  { id: 'sepEnvironmentalEthics', label: 'Stanford Encyclopedia — Environmental Ethics', url: 'https://plato.stanford.edu/entries/ethics-environmental/', note: 'Ethical and political debates about sustainability, nonhuman nature, future generations, and environmental justice.' },
  { id: 'sepClimateJustice', label: 'Stanford Encyclopedia — Climate Justice', url: 'https://plato.stanford.edu/entries/justice-climate/', note: 'Intergenerational, international, and distributive justice questions in climate policy.' },
  { id: 'ipccAr6Synthesis', label: 'IPCC — AR6 Synthesis Report', url: 'https://www.ipcc.ch/report/ar6/syr/summary-for-policymakers/', note: 'Authoritative scientific assessment of climate risks, adaptation limits, mitigation, equity, and integrated responses.' },
  { id: 'socialEcologyMunicipalism', label: 'Institute for Social Ecology — Bookchin interview on Libertarian Municipalism', url: 'https://social-ecology.org/wp/2001/10/harbinger-vol-2-no-1-%E2%80%94-murray-bookchin-interview/', note: 'Bookchin’s explanation of communalism and libertarian municipalism, used as a later variant rather than a synonym for all anarchism.' },
  { id: 'makhnoRuralAnarchism', label: 'Colin Darch — Nestor Makhno and Rural Anarchism in Ukraine', url: 'https://www.jstor.org/stable/j.ctv16zjhb1', note: 'Scholarly historical study of the Makhnovist movement, its rural social base, military context, and contested interpretation.' },
  { id: 'cambridgeSpanishAnarchism', label: 'Cambridge History of Socialism — Spain in Revolt', url: 'https://www.cambridge.org/core/books/cambridge-history-of-socialism/spain-in-revolt-the-revolutionary-legacy-of-anarchism-and-anarchosyndicalism/5B83EF452AF51109472B3F511737F8B8', note: 'Academic history of Spanish anarcho-syndicalism, social revolution, wartime organization, and the strengths and limits of libertarian practice.' },
  { id: 'sepFascism', label: 'Stanford Encyclopedia — Fascism', url: 'https://plato.stanford.edu/entries/fascism/', note: 'Conceptual and historical analysis of fascist ideology and its variants.' },
  { id: 'oxfordRepublicanismTransatlantic', label: 'Oxford Handbook — Republicanism: A Transatlantic Misunderstanding', url: 'https://academic.oup.com/edited-volume/27998/chapter-abstract/211730223', note: 'Comparative scholarship on French and Anglo-American republicanism, equality, citizenship, liberty, groups, institutions, and laïcité.' },
  { id: 'perseeRepublicanismLiberalism', label: 'Persée — Républicanisme et libéralisme', url: 'https://www.persee.fr/doc/revss_1623-6572_2010_num_43_1_1289', note: 'French-language scholarship on tensions and possible complementarities between civic republican liberty and political liberalism.' },
  { id: 'viePubliqueLaiciteStasi', label: 'Vie publique — Rapport Stasi sur la laïcité', url: 'https://www.vie-publique.fr/files/rapport/pdf/034000725.pdf', note: 'French public institutional report explaining laïcité through freedom of conscience, equality, and neutrality of public power.' },
  { id: 'cambridgeIndivisibilityFrenchRepublic', label: 'Cambridge — The indivisibility of the French Republic', url: 'https://www.cambridge.org/core/journals/european-constitutional-law-review/article/indivisibility-of-the-french-republic-as-political-theory-and-constitutional-doctrine/08FCA15B8732A4CE20455913BFAD3BF1', note: 'Constitutional scholarship on French republican sovereignty, universalism, indivisibility, laïcité, and the legal treatment of group difference.' },
  { id: 'sageFrenchRepublicLiberalFounders', label: 'SAGE — Defenders of Liberal Individualism, Republican Virtues and Solidarity', url: 'https://journals.sagepub.com/doi/10.1177/1474885108089173', note: 'Scholarship on the French Third Republic’s synthesis of liberal individualism, republican virtue, civic education, and social solidarity.' },
  { id: 'cairnLesGaullistes', label: 'Cairn — Les gaullistes : de la France libre à aujourd’hui ?', url: 'https://droit.cairn.info/revue-pouvoirs-2020-3-page-97', note: 'French-language political-history scholarship on the diverse origins, institutional culture, and changing legacy of Gaullism.' },
  { id: 'fondationDeGaulleOppositionIVe', label: 'Fondation Charles de Gaulle — L’opposition à la IVe République', url: 'https://www.charles-de-gaulle.org/lhomme/dossiers-thematiques/lopposition-a-ive-republique-1946-1958/', note: 'Institutional historical account of de Gaulle’s constitutional critique of the Fourth Republic and his preference for a stronger executive tied to national legitimacy.' },
  { id: 'perseeDeGaulleConstitutionalThought', label: 'Persée — La pensée constitutionnelle du général de Gaulle', url: 'https://www.persee.fr/doc/rfsp_0035-2950_1990_num_40_5_394510', note: 'French-language scholarly analysis of de Gaulle’s constitutional thought and its development across changing political circumstances.' },
  { id: 'treccaniFascismo', label: 'Treccani — Fascismo', url: 'https://www.treccani.it/enciclopedia/fascismo_%28Enciclopedia-Italiana%29/', note: 'Italian-language historical reference on Fascism, its political movement, regime, corporatist claims, and institutional development.' },
  { id: 'treccaniCorporativismo', label: 'Treccani — Corporativismo', url: 'https://www.treccani.it/enciclopedia/corporativismo_%28Enciclopedia-Italiana%29/', note: 'Italian-language historical reference on corporatist doctrine and the legal organization of Fascist economic institutions.' },
  { id: 'treccaniLateranPacts', label: 'Treccani — Patti lateranensi', url: 'https://www.treccani.it/enciclopedia/patti-lateranensi_%28Dizionario-di-Storia%29/', note: 'Italian-language historical reference on the 1929 Lateran Pacts and the Fascist state’s reconciliation with the Catholic Church.' },
  { id: 'cambridgeMussolinisFollies', label: 'Cambridge — Mussolini’s Follies', url: 'https://www.cambridge.org/core/journals/contemporary-european-history/article/mussolinis-follies-fascism-in-its-imperial-and-racist-phase-19351940/B385EFFE31E9B62F76BF40886F1388AB', note: 'Scholarly analysis of Italian Fascism’s imperial and racist phase from the Ethiopian war through 1940.' },
  { id: 'sageColonialDominationItaly', label: 'SAGE — Accounting for colonial domination in Liberal and Fascist Italy', url: 'https://journals.sagepub.com/doi/10.1177/10323732241237792', note: 'Recent scholarship on colonial administration, settler projects, racialization, and the continuity and change between liberal and Fascist Italy.' },
  { id: 'sepFeminism', label: 'Stanford Encyclopedia — Feminist Philosophy', url: 'https://plato.stanford.edu/entries/feminism/', note: 'Overview of feminist philosophical traditions and disagreements.' },
  { id: 'sepPopulism', label: 'Stanford Encyclopedia — Populism', url: 'https://plato.stanford.edu/entries/populism/', note: 'Conceptual debates about populism as a thin ideology, discourse, or political style.' },
  { id: 'sepConfucianism', label: 'Stanford Encyclopedia — Chinese Social and Political Thought', url: 'https://seop.illc.uva.nl/entries/chinese-social-political/', note: 'Chinese political traditions including Confucian accounts of order and governance.' },
  { id: 'sepLegalism', label: 'Stanford Encyclopedia — Legalism', url: 'https://plato.stanford.edu/entries/chinese-legalism/', note: 'Historical scholarship on the fa tradition and classical Chinese statecraft.' },
  { id: 'sepMedieval', label: 'Stanford Encyclopedia — Medieval Political Philosophy', url: 'https://plato.stanford.edu/entries/medieval-political/', note: 'Historical political concepts including kingship, republicanism, law, and authority.' },
  { id: 'bpbMonarchy', label: 'Bundeszentrale für politische Bildung — Monarchie', url: 'https://www.bpb.de/kurz-knapp/lexika/das-junge-politik-lexikon/320809/monarchie/', note: 'German-language institutional definition distinguishing monarchic rule from parliamentary or constitutional monarchy.' },
  { id: 'perseeFrenchConstitutionalMonarchy', label: 'Persée — Histoire des monarchies constitutionnelles en France', url: 'https://www.persee.fr/doc/ephe_0000-0001_1994_num_10_1_7865', note: 'French-language academic history of constitutional-monarchical doctrines and practice in France from 1830 to 1900.' },
  { id: 'oxfordConstitutionalMonarchy', label: 'Oxford Academic — What’s the Point of Constitutional Monarchy?', url: 'https://academic.oup.com/ajj/article/69/3/189/7888997', note: 'Normative constitutional-law analysis of hereditary office, democratic legitimacy, political authority, and the arguments for and against constitutional monarchy.' },
  { id: 'oxfordMonarchyConstitution', label: 'Oxford Academic — The Monarchy and the Constitution', url: 'https://academic.oup.com/book/6972?searchresult=1', note: 'Scholarly history of monarchy, constitutional rules, succession, democracy, finance, and constitutional crisis in the United Kingdom.' },
  { id: 'ukParliamentCrown', label: 'UK Parliament — Parliament and Crown', url: 'https://www.parliament.uk/about/how/role/relations-with-other-institutions/parliament-crown/', note: 'Official description of the contemporary constitutional role of the Crown and Parliament in the United Kingdom.' },
  { id: 'journalDemocraticMonarchies', label: 'Journal of Democracy — Democratic Parliamentary Monarchies', url: 'https://www.journalofdemocracy.org/articles/democratic-parliamentary-monarchies/', note: 'Comparative political analysis of democratic parliamentary monarchies and the relationship between hereditary and elected legitimacy.' },
  { id: 'torontoConstitutionalTheocracy', label: 'University of Toronto — Constitutional Theocracy', url: 'https://www.politics.utoronto.ca/research-publications/faculty-publications/constitutional-theocracy', note: 'Comparative constitutional-law research on hybrid religious constitutions, courts, state religion, and the boundary between constitutionalism and theocracy.' },
  { id: 'oxfordStateReligionFreedom', label: 'Oxford Research Encyclopedia — State Religion and Religious Freedom', url: 'https://academic.oup.com/edited-volume/62239/chapter-abstract/550822306', note: 'Comparative research on state religion, religious freedom, identity regimes, constitutions, secularism, and intergroup conflict.' },
  { id: 'oxfordIranTheocraticCriminalLaw', label: 'Oxford — The Emergence of Constitutional Theocracy in Iran', url: 'https://doi.org/10.1093/9780191995088.003.0001', note: 'Scholarly analysis of the theological, constitutional, and legal framework of Iran’s constitutional theocracy.' },
  { id: 'iconStateReligionTheocracy', label: 'International Journal of Constitutional Law — State and Religion', url: 'https://academic.oup.com/icon/article/10/1/127/689883', note: 'Comparative constitutional analysis distinguishing political atheism, religious neutrality, multiculturalism, state churches, and theocracy.' },
  { id: 'cambridgeMaimonidesTheocracy', label: 'Cambridge — Maimonides and Jewish Theocracy', url: 'https://www.cambridge.org/core/elements/maimonides-and-jewish-theocracy/1A7AC0AD5F5048F1CA3690BC9FB97D99', note: 'Historical and philosophical study of the term theocracy, divine rule, Jewish political thought, and the relationship between religious law and political authority.' },
  { id: 'perseusJosephusTheocracy', label: 'Perseus — Josephus, Against Apion 2.165', url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0216%3Abook%3D2%3Awhiston+section%3D5', note: 'Primary-text anchor for Josephus’s use of the term theocracy and his description of law and divine authority in Jewish political thought.' },
  { id: 'waqfeyaMawardiOrdinances', label: 'Waqfeya — al-Mawardi, The Ordinance of Government', url: 'https://waqfeya.com/books/%D9%82%D9%88%D8%A7%D9%86%D9%8A%D9%86-%D8%A7%D9%84%D9%88%D8%B2%D8%A7%D8%B1%D8%A9-%D9%88%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9-%D8%A7%D9%84%D9%85%D9%84%D9%83-d636b616f8b146b6bb239f02f669654e', note: 'Arabic digital-library record for a classical work of Islamic public law on the imam, offices, administration, judges, and governance.' },
  { id: 'nsarchiveKhomeini1979', label: 'George Washington University National Security Archive — Khomeini, 1979 Address', url: 'https://nsarchive.gwu.edu/document/28043-document-03-ayatollah-ruhollah-khomeini-address-nation-april-1-1979', note: 'Archival primary-source record for Khomeini’s public claims about the Islamic Republic and religiously grounded political legitimacy.' },
  { id: 'constituteIran1989', label: 'Constitute Project — Constitution of Iran (1979, revised 1989)', url: 'https://www.constituteproject.org/constitution/Iran_1989', note: 'Selected English articles 4–6, 91–99, 107–111, and 177 checked alongside the Council-hosted version. Primary constitutional text with repository topic annotations; article 110(7) has a translation discrepancy requiring Persian-edition review, so no claim rests on that wording.' },
  { id: 'vaticanStateBodies', label: 'Vatican City State — Bodies of the State', url: 'https://www.vaticanstate.va/en/state-and-government/government-bodies/bodies-of-the-state.html', note: 'Official description of Vatican City’s governmental structure, including the sovereign pontiff, legislative commission, executive administration, and judicial bodies.' },
  { id: 'ushmmFascism', label: 'United States Holocaust Memorial Museum — Fascism', url: 'https://encyclopedia.ushmm.org/content/en/article/fascism-1', note: 'Historical context for fascism and the Nazi regime; used for warning and contextualization.' },
  { id: 'ushmmCommunism', label: 'United States Holocaust Memorial Museum — Communism', url: 'https://encyclopedia.ushmm.org/content/en/article/communism-1', note: 'Bounded historical context on the Russian Revolution, the Soviet Union, Stalinist collectivization, industrial quotas, and the distinction between communist theory and later regimes.' },
  { id: 'bpbFascism', label: 'Bundeszentrale für politische Bildung — Faschismus', url: 'https://www.bpb.de/themen/rechtsextremismus/dossier-rechtsextremismus/500776/faschismus/', note: 'German-language institutional history distinguishing Italian Fascism, National Socialism, and broader uses of the fascism label.' },
  { id: 'bpbNationalSocialism', label: 'Bundeszentrale für politische Bildung — National Socialism', url: 'https://www.bpb.de/kurz-knapp/lexika/politiklexikon/17892/nationalsozialismus/', note: 'German-language reference on Nazi ideology, dictatorship, racial hierarchy, antisemitism, war, and the relationship between party and state.' },
  { id: 'ushmmNurembergLaws', label: 'United States Holocaust Memorial Museum — Nuremberg Laws', url: 'https://encyclopedia.ushmm.org/content/en/article/nuremberg-laws?series=13', note: 'Primary-documentary historical account of racial citizenship, anti-Jewish legislation, and the legal transformation of German democracy into dictatorship.' },
  { id: 'ohchrMinorityRights', label: 'United Nations OHCHR — Minority Rights: International Standards and Guidance', url: 'https://www.ohchr.org/Documents/Publications/MinorityRights_en.pdf', note: 'Human-rights guidance on ethnic, national, linguistic, and religious minorities, citizenship, participation, equality, and non-discrimination.' },
  { id: 'panAfricanism', label: 'African Affairs — Pan-Africanism', url: 'https://academic.oup.com/afraf/article/125/498/1/8512174', note: 'Scholarly treatment of Pan-African political thought and transnational solidarity.' },
  { id: 'oxfordHistoryCommunism', label: 'Oxford Handbook — History of Communism', url: 'https://academic.oup.com/edited-volume/35402', note: 'Global historical scholarship on communist parties, states, bureaucracy, society, culture, and planned economies.' },
  { id: 'oxfordAuthoritarianConsolidation', label: 'Oxford — The Enduring Power of Communism', url: 'https://academic.oup.com/book/62326/chapter-abstract/553337573', note: 'Recent comparative research on the international origins of authoritarian consolidation, party and state building, Soviet aid, and the divergent trajectories of non-European communist regimes.' },
  { id: 'oxfordCommunismEasternEurope', label: 'Oxford Handbook — Communism and Its Legacies', url: 'https://academic.oup.com/edited-volume/55828/chapter/467480662', note: 'Comparative political-science scholarship on Communist regimes in the Soviet Union and Eastern Europe, authoritarian durability, collapse, and institutional legacies.' },
  { id: 'oxfordWorkersCommunism', label: 'Oxford Handbook — Workers under Communism', url: 'https://academic.oup.com/edited-volume/35402/chapter-abstract/302649685', note: 'Comparative research on state–labour relations, workplace politics, worker support and resistance, and the differences among the Soviet Union, Eastern Europe, China, and Vietnam.' },
  { id: 'oxfordContemporarySocialistLaw', label: 'Oxford — Legal Reform in the Contemporary Socialist World', url: 'https://academic.oup.com/book/58106', note: 'Comparative study of legal, administrative, judicial, and professional reform in China, Vietnam, Laos, North Korea, and Cuba.' },
  { id: 'cambridgeCommunistIdeologyAdaptation', label: 'Cambridge — Ideological Reactions of Communist Regimes', url: 'https://www.cambridge.org/core/journals/government-and-opposition/article/abs/adapting-or-freezing-ideological-reactions-of-communist-regimes-to-a-postcommunist-world/81B90CD674D0186E1978C9F1C1D9ED58', note: 'Comparative research distinguishing reformed and relatively unreformed communist regimes through adaptive or frozen ideological legitimation.' },
  { id: 'ghdiMarxLeninism', label: 'German History in Documents and Images — Marxism-Leninism in the GDR', url: 'https://germanhistorydocs.org/en/two-germanies-1961-1989/civics-lesson-in-east-berlin-1988.pdf', note: 'German-language primary documentation of Marxism-Leninism as civic ideology and state education in East Germany.' },
  { id: 'aeaChinaSocialism', label: 'American Economic Association — Is China Socialist?', url: 'https://www.aeaweb.org/articles?id=10.1257/jep.31.1.3', note: 'Economic analysis of China’s shift from command-economy socialism toward market coordination while retaining communist-party rule.' },
];

const PALETTES = {
  neutral: {
    label: 'Neutral / mixed',
    primary: '#55d6be',
    secondary: '#8c84ff',
    warm: '#ff9f43',
    background: '#07101d',
    glow: 'rgba(85, 214, 190, .18)',
    soft: '#c1ccda',
    muted: '#8393a9',
    line: 'rgba(165, 188, 214, .15)',
  },
  'authoritarian-collectivist': {
    label: 'Collectivist red · gold',
    primary: '#d62828',
    secondary: '#f4d35e',
    warm: '#fff4d6',
    background: '#160b0b',
    glow: 'rgba(214, 40, 40, .22)',
    soft: '#f0d7c2',
    muted: '#b89b91',
    line: 'rgba(244, 211, 94, .18)',
  },
  'historical-fascist': {
    label: 'Historical warning · rust',
    primary: '#d04a2f',
    secondary: '#d9b44a',
    warm: '#e9e1cd',
    background: '#11100f',
    glow: 'rgba(208, 74, 47, .2)',
    soft: '#ddd1bc',
    muted: '#9e9282',
    line: 'rgba(217, 180, 74, .18)',
  },
  'libertarian-market': {
    label: 'Libertarian teal · gold',
    primary: '#55d6be',
    secondary: '#d8c06a',
    warm: '#b7ecdf',
    background: '#071414',
    glow: 'rgba(85, 214, 190, .2)',
    soft: '#c2dfda',
    muted: '#819f9c',
    line: 'rgba(85, 214, 190, .16)',
  },
  'progressive-liberal': {
    label: 'Progressive violet · cyan',
    primary: '#9b8cff',
    secondary: '#65d6ff',
    warm: '#f28db2',
    background: '#0b0c1c',
    glow: 'rgba(155, 140, 255, .2)',
    soft: '#d4d4ed',
    muted: '#9295b9',
    line: 'rgba(155, 140, 255, .17)',
  },
  'national-conservative': {
    label: 'National conservative · red',
    primary: '#ef4d4d',
    secondary: '#e4bd51',
    warm: '#f0efe8',
    background: '#11111a',
    glow: 'rgba(239, 77, 77, .18)',
    soft: '#d8d9df',
    muted: '#9699aa',
    line: 'rgba(228, 189, 81, .18)',
  },
  'social-democratic': {
    label: 'Social democratic · blue',
    primary: '#5ea7ff',
    secondary: '#ef91b4',
    warm: '#f2cf76',
    background: '#081321',
    glow: 'rgba(94, 167, 255, .2)',
    soft: '#c9d7e8',
    muted: '#8498b2',
    line: 'rgba(94, 167, 255, .17)',
  },
};

const QUESTIONS = [
  { id: 'economic-1', dimension: 'economic', prompt: 'The state should own or tightly control essential industries.', polarity: 1 },
  { id: 'economic-2', dimension: 'economic', prompt: 'Higher taxes and public spending are worth it if they substantially reduce inequality.', polarity: 1 },
  { id: 'economic-3', dimension: 'economic', prompt: 'Private competition usually allocates resources better than public planning.', polarity: -1 },
  { id: 'economic-4', dimension: 'economic', prompt: 'Workers should have a meaningful say in the ownership or governance of the firms where they work.', polarity: 1 },
  { id: 'economic-5', dimension: 'economic', prompt: 'The state should keep taxes and regulation low even if public services are narrower.', polarity: -1 },
  { id: 'social-1', dimension: 'social', prompt: 'The law should actively remove traditional restrictions on personal relationships and gender roles.', polarity: 1 },
  { id: 'social-2', dimension: 'social', prompt: 'A stable society should preserve established family, religious, and cultural norms.', polarity: -1 },
  { id: 'social-3', dimension: 'social', prompt: 'Government should avoid imposing one moral tradition on everyone.', polarity: 1 },
  { id: 'social-4', dimension: 'social', prompt: 'Public institutions should protect people from discrimination based on identity, even when that challenges local traditions.', polarity: 1 },
  { id: 'social-5', dimension: 'social', prompt: 'Schools should reinforce inherited cultural and religious norms rather than emphasize individual self-expression.', polarity: -1 },
  { id: 'authority-1', dimension: 'authority', prompt: 'The state may restrict speech when officials believe it threatens social order.', polarity: 1 },
  { id: 'authority-2', dimension: 'authority', prompt: 'Adults should be free to make personal choices unless they directly harm others.', polarity: -1 },
  { id: 'authority-3', dimension: 'authority', prompt: 'Police and intelligence agencies should receive broad powers to prevent dissent and disorder.', polarity: 1 },
  { id: 'authority-4', dimension: 'authority', prompt: 'Peaceful protest should remain legal even when it disrupts normal life.', polarity: -1 },
  { id: 'authority-5', dimension: 'authority', prompt: 'A strong leader should be able to bypass slow institutions during emergencies.', polarity: 1 },
  { id: 'identity-1', dimension: 'identity', prompt: 'National laws should take precedence over international courts and institutions.', polarity: -1 },
  { id: 'identity-2', dimension: 'identity', prompt: 'Migration and cultural exchange generally strengthen a society.', polarity: 1 },
  { id: 'identity-3', dimension: 'identity', prompt: 'A common national culture is more important than preserving separate group identities.', polarity: -1 },
  { id: 'identity-4', dimension: 'identity', prompt: 'International institutions should share some authority when problems cross national borders.', polarity: 1 },
  { id: 'identity-5', dimension: 'identity', prompt: 'Citizens owe special political and economic duties to co-nationals even when outsiders are equally needy.', polarity: -1 },
  { id: 'foreign-1', dimension: 'foreign', prompt: 'Military force should be used abroad to defend interests, allies, and influence.', polarity: -1 },
  { id: 'foreign-2', dimension: 'foreign', prompt: 'A country should avoid military alliances and foreign interventions whenever possible.', polarity: 1 },
  { id: 'foreign-3', dimension: 'foreign', prompt: 'Diplomacy and trade are usually preferable to coercive force.', polarity: 1 },
  { id: 'foreign-4', dimension: 'foreign', prompt: 'Military force can be justified to stop mass atrocities even without a direct national interest.', polarity: -1 },
  { id: 'foreign-5', dimension: 'foreign', prompt: 'Defense policy should prioritize deterrence and territorial protection over attempts to remake other countries.', polarity: 1 },
  { id: 'religion-1', dimension: 'religion', prompt: 'Religious authorities should have a formal role in shaping public law.', polarity: -1 },
  { id: 'religion-2', dimension: 'religion', prompt: 'The state should remain neutral among religions and nonbeliefs.', polarity: 1 },
  { id: 'religion-3', dimension: 'religion', prompt: 'Civil law should take precedence over religious law when the two conflict.', polarity: 1 },
  { id: 'religion-4', dimension: 'religion', prompt: 'Public institutions should be allowed to reflect a society’s dominant religious tradition.', polarity: -1 },
  { id: 'religion-5', dimension: 'religion', prompt: 'Religious communities should be free to organize schools and social services around their beliefs, within equal-rights law.', polarity: -1 },
];

const SOURCES = {
  smith: { label: 'Encyclopaedia Britannica — Adam Smith', url: 'https://www.britannica.com/biography/Adam-Smith' },
  locke: { label: 'Encyclopaedia Britannica — John Locke', url: 'https://www.britannica.com/biography/John-Locke' },
  bakunin: { label: 'Encyclopaedia Britannica — Mikhail Bakunin', url: 'https://www.britannica.com/biography/Mikhail-Bakunin' },
  bernstein: { label: 'Encyclopaedia Britannica — Eduard Bernstein', url: 'https://www.britannica.com/biography/Eduard-Bernstein' },
  ostrom: { label: 'Nobel Prize — Elinor Ostrom profile', url: 'https://www.nobelprize.org/prizes/economic-sciences/2009/ostrom/' },
  sen: { label: 'Nobel Prize — Amartya Sen facts', url: 'https://www.nobelprize.org/prizes/economic-sciences/1998/sen/facts/' },
  fanon: { label: 'Marxists Internet Archive — Frantz Fanon', url: 'https://www.marxists.org/reference/subject/philosophy/works/fr/fanon.htm' },
  dubois: { label: 'W. E. B. Du Bois.org', url: 'https://www.webdubois.org/wdb-BlackReconst.html' },
  gandhi: { label: 'Gandhi Heritage Portal — Hind Swaraj context', url: 'https://www.gandhiheritageportal.org/mahatma-gandhi-books/hind-swaraj-indian-opinion-hindi?source=profile' },
  marx: { label: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/marx/' },
  lenin: { label: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Vladimir-Lenin' },
  friedman: { label: 'Nobel Prize', url: 'https://www.nobelprize.org/prizes/economic-sciences/1976/friedman/facts/' },
  hayek: { label: 'Nobel Prize', url: 'https://www.nobelprize.org/prizes/economic-sciences/1974/hayek/facts/' },
  mill: { label: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/John-Stuart-Mill' },
  nozik: { label: 'Internet Encyclopedia of Philosophy', url: 'https://iep.utm.edu/nozick/' },
  hitler: { label: 'United States Holocaust Memorial Museum', url: 'https://encyclopedia.ushmm.org/content/en/article/adolf-hitler' },
  mussolini: { label: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Benito-Mussolini' },
  fascistItaly: { label: 'United States Holocaust Memorial Museum — Italy', url: 'https://encyclopedia.ushmm.org/content/en/article/italy', accessDate: '2026-09-16' },
  burke: { label: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Edmund-Burke' },
  degaulle: { label: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Charles-de-Gaulle' },
  palme: { label: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Olof-Palme' },
  freedomChina: { label: 'Freedom House — China', url: 'https://freedomhouse.org/country/china/freedom-world/2026' },
  freedomNorthKorea: { label: 'Freedom House — North Korea', url: 'https://freedomhouse.org/country/north-korea/freedom-world/2026' },
  freedomVietnam: { label: 'Freedom House — Vietnam', url: 'https://freedomhouse.org/country/vietnam/freedom-world/2026' },
  freedomNetherlands: { label: 'Freedom House — Netherlands', url: 'https://freedomhouse.org/country/netherlands/freedom-world/2026' },
  freedomDenmark: { label: 'Freedom House — Denmark', url: 'https://freedomhouse.org/country/denmark/freedom-world/2026' },
  freedomSwitzerland: { label: 'Freedom House — Switzerland', url: 'https://freedomhouse.org/country/switzerland/freedom-world/2026' },
  freedomHungary: { label: 'Freedom House — Hungary', url: 'https://freedomhouse.org/country/hungary/freedom-world/2026' },
  freedomIndia: { label: 'Freedom House — India', url: 'https://freedomhouse.org/country/india/freedom-world/2026' },
  freedomSouthAfrica: { label: 'Freedom House — South Africa', url: 'https://freedomhouse.org/country/south-africa/freedom-world/2026' },
  freedomNorway: { label: 'Freedom House — Norway', url: 'https://freedomhouse.org/country/norway/freedom-world/2026' },
  freedomSweden: { label: 'Freedom House — Sweden', url: 'https://freedomhouse.org/country/sweden/freedom-world/2026' },
  freedomItaly: { label: 'Freedom House — Italy', url: 'https://freedomhouse.org/country/italy/freedom-world/2026' },
  renan: { label: 'Encyclopaedia Britannica — Ernest Renan', url: 'https://www.britannica.com/biography/Ernest-Renan' },
  kant: { label: 'Encyclopaedia Britannica — Immanuel Kant', url: 'https://www.britannica.com/biography/Immanuel-Kant' },
  king: { label: 'Stanford King Institute — Martin Luther King, Jr.', url: 'https://kinginstitute.stanford.edu/king-papers/' },
  morgenthau: { label: 'Encyclopaedia Britannica — Hans Morgenthau', url: 'https://www.britannica.com/biography/Hans-Morgenthau' },
  holocaust: { label: 'United States Holocaust Memorial Museum', url: 'https://encyclopedia.ushmm.org/content/en/article/nazi-racism-an-overview' },
};

const BAND_RANGES = [[-100, -81], [-80, -61], [-60, -41], [-40, -21], [-20, -1], [0, 19], [20, 39], [40, 59], [60, 79], [80, 100]];

function buildBands(entries) {
  return entries.map(([label, summary, families], index) => {
    const [min, max] = BAND_RANGES[index];
    return { min, max, label, summary, families };
  });
}

const SPECTRUM_BANDS_RAW = {
  economic: {
    basis: 'This axis tracks ownership, redistribution, taxation, regulation, and the role of markets. It is not a proxy for how democratic or authoritarian a system is.',
    sourceIds: ['sepSocialism', 'sepLiberalism', 'ches', 'manifesto'],
    bands: buildBands([
      ['Revolutionary state-socialist', 'Major productive assets are publicly or collectively owned; extensive planning and equalization are preferred over private accumulation.', ['communist', 'revolutionary socialism']],
      ['State-socialist', 'The state directs most strategic sectors and uses extensive planning or public ownership, while limited markets may remain.', ['state socialism', 'hard-left']],
      ['Democratic socialist', 'Substantial public ownership, worker power, and redistribution are pursued through democratic institutions rather than one-party rule.', ['democratic socialism', 'left socialism']],
      ['Social democratic', 'A regulated mixed economy combines private enterprise with strong welfare provision, labor rights, and redistribution.', ['social democracy', 'laborism']],
      ['Welfare liberal', 'Markets remain primary, with a meaningful safety net, targeted transfers, and regulation to protect opportunity and public goods.', ['social liberalism', 'welfare liberalism']],
      ['Centrist mixed economy', 'A pragmatic balance between market allocation and public provision; the answer depends strongly on the sector and policy.', ['centrism', 'mixed economy']],
      ['Market-oriented mixed economy', 'Private competition is preferred in most sectors, with selective welfare, public goods, and regulation retained.', ['market liberalism', 'liberal conservatism']],
      ['Classical liberal', 'Low taxes and regulation, secure property and contract rights, and broad reliance on voluntary exchange are emphasized.', ['classical liberalism', 'economic liberalism']],
      ['Free-market liberal', 'Broad privatization, light regulation, and strong skepticism toward redistribution define the preferred economic order.', ['free-market liberalism', 'laissez-faire']],
      ['Laissez-faire / minarchist', 'The state’s economic role is reduced close to rights, courts, and security; voluntary exchange is treated as the default.', ['minarchism', 'radical market liberalism']],
    ]),
  },
  social: {
    basis: 'This axis tracks the preferred pace of cultural change, the role of inherited norms, personal autonomy, and equality in social life. It is separate from economic policy.',
    sourceIds: ['sepLiberalism', 'sepConservatism', 'wvs', 'ches'],
    bands: buildBands([
      ['Revolutionary emancipatory', 'Inherited social roles are treated as structures to be dismantled; rapid expansion of personal autonomy and equality is favored.', ['radical progressivism', 'emancipatory politics']],
      ['Radical progressive', 'Strong support for rapid reform on gender, sexuality, family, identity, and anti-discrimination issues.', ['progressive left', 'social liberalism']],
      ['Progressive egalitarian', 'Social equality and protection from discrimination are prioritized, with openness to substantial cultural change.', ['progressivism', 'egalitarian liberalism']],
      ['Social liberal', 'Personal autonomy is broadly protected and social norms may evolve, while pluralism and voluntary association remain central.', ['social liberalism', 'liberalism']],
      ['Liberal pluralist', 'Individuals may follow traditional or new ways of life; the state should avoid imposing one moral tradition.', ['liberal pluralism', 'moderate liberalism']],
      ['Socially centrist', 'A mixed position: preserve some norms while accepting gradual change and individual differences.', ['social centrism', 'moderate conservatism']],
      ['Traditionalist pluralist', 'Inherited family, religious, or cultural norms deserve public respect, but peaceful pluralism remains acceptable.', ['traditional conservatism', 'communitarianism']],
      ['Social conservative', 'Established family, religious, and cultural norms should shape public institutions and social policy.', ['social conservatism', 'religious conservatism']],
      ['National-conservative social order', 'Cultural continuity and conformity are strongly preferred; social change is viewed as a risk to cohesion.', ['national conservatism', 'paternal conservatism']],
      ['Hard traditionalist', 'Very strong preference for inherited moral authority and social hierarchy; when paired with high authority, this can become reactionary or theocratic.', ['reactionary traditionalism', 'religious authoritarianism']],
    ]),
  },
  authority: {
    basis: 'This axis tracks tolerance for coercion, dissent, executive power, surveillance, and institutional limits. A high score does not automatically mean a person supports a particular regime.',
    sourceIds: ['sepLibertarianism', 'sepLiberalism', 'vdem', 'wvs'],
    bands: buildBands([
      ['Anarchist / anti-state', 'Coercive government is viewed as broadly illegitimate; voluntary association and self-government should replace most state power.', ['anarchism', 'anti-statism']],
      ['Hard libertarian', 'The state should be minimal and tightly limited to preventing direct rights violations, with strong protection for dissent.', ['radical libertarianism', 'minarchism']],
      ['Civil-libertarian', 'Individual rights, privacy, free speech, and limits on police power take priority over administrative convenience.', ['civil libertarianism', 'liberalism']],
      ['Limited-state liberal', 'Government is legitimate but should be constrained by rights, due process, independent courts, and accountable institutions.', ['classical liberalism', 'constitutionalism']],
      ['Liberal institutionalist', 'Democratic institutions and civil liberties are valued, while reasonable public authority is accepted for common goods.', ['liberal democracy', 'constitutional democracy']],
      ['Rule-of-law centrist', 'Neither maximum liberty nor maximum order dominates; authority is accepted when lawful, proportionate, and reviewable.', ['moderate constitutionalism', 'civic republicanism']],
      ['Order-oriented democratic', 'Public order, enforcement, and social discipline receive more weight, but elections and legal constraints remain important.', ['law-and-order democracy', 'communitarian conservatism']],
      ['Paternalist / law-and-order', 'A strong state may restrict conduct, speech, or protest to protect morality, security, or social cohesion.', ['paternalism', 'illiberal conservatism']],
      ['Illiberal majoritarian', 'A leader or majority is given broad discretion to override independent institutions and some minority or opposition rights.', ['illiberal democracy', 'majoritarian authoritarianism']],
      ['Authoritarian / totalizing', 'Centralized power, obedience, and extensive coercion dominate; dissent and independent social organizations are treated as threats.', ['authoritarianism', 'totalitarianism']],
    ]),
  },
  identity: {
    basis: 'This axis tracks how strongly political loyalty should be organized around the nation, sovereignty, and a shared national culture. National identity can be civic and inclusive or ethnic and exclusionary; the axis alone does not decide which.',
    sourceIds: ['sepNationalism', 'wvs', 'ches', 'manifesto'],
    bands: buildBands([
      ['Cosmopolitan / post-national', 'Political obligations are understood primarily in universal or global terms; national borders should have limited moral and political weight.', ['cosmopolitanism', 'post-nationalism']],
      ['Internationalist', 'Strong support for cross-border institutions, migration, and universal rights, with only a modest role for national preference.', ['internationalism', 'cosmopolitan liberalism']],
      ['Civic internationalist', 'National institutions matter, but international law, cooperation, and equal rights across borders are strongly valued.', ['liberal internationalism', 'civic universalism']],
      ['Pluralist civic patriot', 'Attachment to a constitutional community is compatible with multiple cultures, identities, and substantial international cooperation.', ['civic patriotism', 'liberal nationalism']],
      ['Civic pluralist', 'National belonging is accepted as important, but it is defined mainly through citizenship and shared political rules.', ['civic nationalism', 'constitutional patriotism']],
      ['Civic national', 'The nation is a primary democratic community; equal citizenship and a common civic culture are emphasized.', ['civic nationalism', 'moderate patriotism']],
      ['Patriotic', 'National solidarity and national preference receive clear priority, while pluralism and international cooperation remain possible.', ['patriotism', 'moderate nationalism']],
      ['National-conservative', 'Sovereignty, cultural continuity, national borders, and inherited national institutions are strongly prioritized.', ['national conservatism', 'sovereigntism']],
      ['Hard nationalist', 'National interest is treated as the overriding political standard; outsiders and international constraints are viewed with deep suspicion.', ['hard nationalism', 'sovereigntist nationalism']],
      ['Exclusionary ethnonationalist tendency', 'National identity is defined in narrow ethnic, religious, or cultural terms; this label applies only when the view explicitly excludes equal belonging.', ['ethnonationalism', 'chauvinism']],
    ]),
  },
  foreign: {
    basis: 'This axis tracks willingness to use force, alliances, sanctions, and coercive influence abroad. Interventionism can be humanitarian, defensive, or imperial; the reason for action matters.',
    sourceIds: ['foreignPolicy', 'ches', 'manifesto'],
    bands: buildBands([
      ['Pacifist / non-interventionist', 'Military force is rejected except in the most immediate defense; diplomacy and nonviolent settlement are the default.', ['pacifism', 'non-interventionism']],
      ['Strict restraint', 'Foreign commitments, alliances, and military deployments should be rare, limited, and directly tied to territorial defense.', ['restraint', 'isolationism']],
      ['Defensive realist', 'A state should maintain credible defense and deterrence but avoid nation-building, regime change, and open-ended wars.', ['defensive realism', 'restrained realism']],
      ['Restrained internationalist', 'International cooperation is valued, but force and coercion require clear legal and strategic limits.', ['restrained internationalism', 'limited multilateralism']],
      ['Cautious multilateralist', 'Diplomacy and international institutions lead; force may be acceptable with broad legitimacy and a defined objective.', ['multilateralism', 'liberal internationalism']],
      ['Pragmatic internationalist', 'The state actively engages abroad and balances diplomacy, alliances, trade, sanctions, and limited force.', ['pragmatic internationalism', 'moderate internationalism']],
      ['Alliance-oriented activist', 'Strong alliances, forward presence, and active diplomatic or economic pressure are considered necessary for security.', ['Atlanticism', 'activist internationalism']],
      ['Interventionist', 'Military force or coercive influence may be used proactively to defend interests, allies, or values beyond the homeland.', ['interventionism', 'hawkish internationalism']],
      ['Assertive interventionist', 'A state should actively shape the international order and accept significant risk or cost to impose outcomes.', ['assertive realism', 'power politics']],
      ['Militarist / expansionist tendency', 'Force, hierarchy, and territorial or political expansion are treated as central instruments of national power.', ['militarism', 'expansionism']],
    ]),
  },
  religion: {
    basis: 'This axis tracks the desired public role of religion: whether public law should be justified through secular reasons and remain neutral, or be formally shaped by religious authorities, revelation, or a confessional moral order. It does not measure private faith, religious sincerity, or the value of any religion.',
    sourceIds: ['sepReligionPolitics', 'wvs', 'ches', 'openTextbook'],
    bands: buildBands([
      ['Militant secularist', 'Public institutions should actively exclude religious authority from law and may treat organized religion as a political danger.', ['militant secularism', 'anti-clericalism']],
      ['Secular humanist', 'Public law should be grounded in human reasoning and equal citizenship, with religion treated primarily as a private or civil-society matter.', ['secular humanism', 'laïcité']],
      ['Secular constitutionalist', 'The state should separate religious authority from coercive law while protecting broad freedom of belief, worship, and nonbelief.', ['secular constitutionalism', 'separationism']],
      ['Neutral-state pluralist', 'Government should remain institutionally neutral among religions and nonbeliefs, while religious groups participate freely in civil society.', ['religious pluralism', 'state neutrality']],
      ['Secular-leaning pluralist', 'Secular public reasons lead, but religious arguments and communities remain legitimate participants in democratic debate.', ['liberal secularism', 'pluralist secularism']],
      ['Civic religious pluralist', 'Religious and nonreligious citizens may shape public values together, with no single tradition receiving exclusive legal authority.', ['civic pluralism', 'religious democracy']],
      ['Religiously informed pluralist', 'Religious moral traditions may influence public institutions and policy, provided equal citizenship and lawful pluralism remain protected.', ['religious democracy', 'faith-informed pluralism']],
      ['Confessional constitutionalist', 'The state formally identifies with or privileges a religious tradition, but constitutional law and institutional limits still constrain it.', ['confessional state', 'established religion']],
      ['Religious-national order', 'Religious identity and authority strongly shape citizenship, public morality, and law, often in partnership with national institutions.', ['religious nationalism', 'integralism']],
      ['Theocratic / clerical-authoritarian', 'Political legitimacy and coercive law are explicitly subordinated to revelation, clerical authority, or a religious sovereign order.', ['theocracy', 'clerical authoritarianism']],
    ]),
  },
};

const ARCHETYPES_RAW = [
  {
    id: 'authoritarian-collectivist',
    name: 'Authoritarian collectivist',
    accent: '#ff5c77',
    profile: { economic: -88, social: -18, authority: 86, identity: -38, foreign: 24 },
    summary: 'Strong public ownership and redistribution combined with a powerful state and limited tolerance for organized dissent.',
    dimensionNotes: {
      economic: 'Major industries and productive resources are treated as collective or public property, with redistribution prioritized over private accumulation.',
      social: 'Social norms can be reorganized in service of collective goals, while private moral pluralism is secondary to the political project.',
      authority: 'A disciplined party-state is considered necessary to coordinate transformation and suppress counter-revolution or organized opposition.',
      identity: 'Universalist class solidarity tempers nationalism, although the state may still cultivate its own official patriotism.',
      foreign: 'International conflict is read through class solidarity and geopolitical security; force may be defended as revolutionary or defensive.',
    },
    people: [
      { name: 'Karl Marx', detail: 'Foundational theorist of communism and common ownership of productive resources.', source: SOURCES.marx },
      { name: 'Vladimir Lenin', detail: 'Revolutionary communist leader who developed a centralized party-state model.', source: SOURCES.lenin },
      { name: 'Joseph Stalin', detail: 'Historical example of highly centralized, coercive communist rule.', source: SOURCES.lenin },
    ],
    current: [
      { name: 'China', detail: 'One-party state with extensive public direction and significant state-owned sectors alongside markets.', source: SOURCES.freedomChina },
      { name: 'Vietnam', detail: 'One-party socialist republic with a state-led political system and a mixed economy.', source: SOURCES.freedomVietnam },
      { name: 'North Korea', detail: 'Highly centralized hereditary one-party state; not a close economic match in every respect.', source: SOURCES.freedomNorthKorea },
    ],
    historical: [
      { name: 'Soviet Union — Moscow', detail: 'Centralized communist state, especially during the Stalin era.', source: SOURCES.lenin },
      { name: 'East Germany — East Berlin', detail: 'One-party socialist state within the Soviet sphere after 1949.', source: SOURCES.lenin },
      { name: 'Mao-era China — Beijing', detail: 'Revolutionary communist state with extensive political and economic control.', source: SOURCES.marx },
    ],
  },
  {
    id: 'historical-fascist',
    name: 'Italian and interwar fascism',
    accent: '#ff9f43',
    profile: { economic: -18, social: 92, authority: 98, identity: 96, foreign: 90 },
    summary: 'A historical profile centered on Mussolini’s Italy: ultranationalism, one-party dictatorship, political violence, corporatist control, and imperial expansion. Related to, but not interchangeable with, the separate National Socialist / Nazi profile. This distinction does not excuse Italian Fascism’s racism or persecution.',
    dimensionNotes: {
      economic: 'Private property can remain, but production and labor are subordinated to state-defined national goals and corporatist control.',
      social: 'The regime promoted hierarchy, prescribed gender roles, and national conformity. Its racial policies changed over time; antisemitic legislation was introduced in 1938.',
      authority: 'The party dictatorship suppressed opposition and independent organizations, but the monarchy survived. Totalizing ambition should not be confused with identical institutions in Fascist Italy and Nazi Germany.',
      identity: 'An organic national community and imperial ambition took priority over equal citizenship. Italian Fascism’s colonial racism and antisemitic persecution require their own historical account, not a copy of Nazi racial doctrine.',
      foreign: 'Military power, territorial expansion, and the remaking of neighboring states are treated as central instruments of politics.',
    },
    warning: 'This is a historical-analytical category, not a legitimate contemporary political recommendation.',
    people: [
      { name: 'Benito Mussolini', detail: 'Founder of Italian Fascism and dictator of Italy from 1925 to 1943.', source: SOURCES.mussolini },
    ],
    current: [],
    historical: [
      { name: 'Fascist Italy — Rome (1922–1943)', detail: 'Mussolini’s government developed into a one-party dictatorship while retaining the monarchy. Imperial warfare and the antisemitic laws of 1938 are part of its history.', source: SOURCES.fascistItaly },
    ],
  },
  {
    id: 'libertarian-market',
    name: 'Libertarian market liberal',
    accent: '#55d6be',
    profile: { economic: 86, social: -34, authority: -88, identity: -34, foreign: -72 },
    summary: 'Strong private-property and market preferences, broad civil liberties, and skepticism toward state coercion and military intervention.',
    dimensionNotes: {
      economic: 'Private property, free contract, competition, and voluntary exchange are preferred to planning, high taxation, and extensive regulation.',
      social: 'Adults should choose their relationships, beliefs, and lifestyles without government imposing a single moral code.',
      authority: 'Coercive power is tightly constrained by individual rights; privacy, speech, and peaceful dissent receive strong protection.',
      identity: 'Individual rights and voluntary cooperation matter more than enforced national unity or state-defined cultural identity.',
      foreign: 'Military alliances, intervention, and nation-building are viewed skeptically; trade and non-interference are preferred.',
    },
    people: [
      { name: 'Robert Nozick', detail: 'Philosopher associated with strong individual rights and a minimal-state argument.', source: SOURCES.nozik },
      { name: 'Friedrich Hayek', detail: 'Economist and political thinker who defended dispersed knowledge, markets, and limited planning.', source: SOURCES.hayek },
      { name: 'Milton Friedman', detail: 'Economist who argued for competitive markets and limits on government economic control.', source: SOURCES.friedman },
    ],
    current: [
      { name: 'Switzerland', detail: 'High civil liberties, federal decentralization, and a market-oriented economy; not purely libertarian.', source: SOURCES.freedomSwitzerland },
      { name: 'Ireland', detail: 'Open market economy and liberal democratic institutions; social and foreign-policy positions vary.', source: SOURCES.freedomNetherlands },
      { name: 'New Zealand', detail: 'Strong civil liberties and a market economy, with a more interventionist welfare state than this archetype.', source: SOURCES.freedomDenmark },
    ],
    historical: [
      { name: '19th-century Britain — London', detail: 'Classical-liberal period associated with free trade, parliamentary government, and limited suffrage by modern standards.', source: SOURCES.mill },
      { name: 'Hong Kong before 1997', detail: 'Frequently cited for low taxes and open markets, though not a fully libertarian political system.', source: SOURCES.hayek },
      { name: 'Classical liberal thought — Manchester', detail: 'A historic center of free-trade advocacy, especially in the Anti-Corn Law movement.', source: SOURCES.mill },
    ],
  },
  {
    id: 'progressive-liberal',
    name: 'Progressive liberal',
    accent: '#7c83fd',
    profile: { economic: -32, social: -78, authority: -36, identity: -54, foreign: 28 },
    summary: 'Socially progressive and institutionally liberal, with a mixed economy and support for international cooperation.',
    dimensionNotes: {
      economic: 'Markets remain important, but taxation, regulation, public services, and redistribution are used to expand practical opportunity.',
      social: 'The state should protect personal autonomy and actively reduce discrimination, even when that changes inherited norms.',
      authority: 'Rights, elections, courts, and civil liberties limit public power, while government remains active in providing common goods.',
      identity: 'Belonging is defined inclusively through equal citizenship, pluralism, and cooperation across national borders.',
      foreign: 'Diplomacy and alliances are preferred, but limited force or sanctions can be justified for collective security or human rights.',
    },
    people: [
      { name: 'John Stuart Mill', detail: 'Classical liberal thinker associated with individual liberty, free expression, and social reform.', source: SOURCES.mill },
      { name: 'Franklin D. Roosevelt', detail: 'U.S. liberal reformer associated with an expanded welfare state and regulatory government.', source: SOURCES.mill },
      { name: 'Barack Obama', detail: 'Modern U.S. liberal example; the profile is a broad approximation, not a full voting record.', source: SOURCES.mill },
    ],
    current: [
      { name: 'Netherlands', detail: 'Liberal parliamentary democracy with strong civil liberties and socially progressive institutions.', source: SOURCES.freedomNetherlands },
      { name: 'Canada', detail: 'Liberal democracy with broad civil liberties and a mixed-market welfare model.', source: SOURCES.freedomDenmark },
      { name: 'New Zealand', detail: 'Liberal democracy with strong rights protections and a mixed economy.', source: SOURCES.freedomDenmark },
    ],
    historical: [
      { name: 'New Deal United States — Washington, D.C.', detail: 'Expansion of social insurance and federal regulation during the Roosevelt era.', source: SOURCES.mill },
      { name: 'Progressive Era United States — Washington, D.C.', detail: 'Reform movement focused on regulation, public health, and democratic accountability.', source: SOURCES.mill },
      { name: 'Postwar Western Europe', detail: 'Liberal democracies that combined civil rights expansion with mixed economies and alliances.', source: SOURCES.freedomNetherlands },
    ],
  },
  {
    id: 'national-conservative',
    name: 'National conservative',
    accent: '#f2c14e',
    profile: { economic: 34, social: 68, authority: 46, identity: 82, foreign: 34 },
    summary: 'National sovereignty, cultural continuity, and stricter borders paired with a mixed or market-friendly economy.',
    dimensionNotes: {
      economic: 'A market-friendly mixed economy is accepted, but strategic industries, welfare, and trade may be shaped around national priorities.',
      social: 'Family, religion, language, and inherited cultural norms are viewed as stabilizing institutions that deserve public support.',
      authority: 'Law, order, and a capable executive receive extra weight, while elections and some legal limits remain important.',
      identity: 'The nation, its borders, sovereignty, and cultural continuity are central sources of political legitimacy.',
      foreign: 'The state should defend its interests and sovereignty actively, while avoiding unlimited ideological or nation-building wars.',
    },
    people: [
      { name: 'Edmund Burke', detail: 'Conservative thinker associated with tradition, gradual change, and inherited institutions.', source: SOURCES.burke },
      { name: 'Charles de Gaulle', detail: 'French leader associated with national independence, state authority, and strategic sovereignty.', source: SOURCES.degaulle },
      { name: 'Deng Xiaoping', detail: 'A state-national development model with market reforms; included as a partial, not exact, match.', source: SOURCES.freedomChina },
    ],
    current: [
      { name: 'Hungary', detail: 'Partly free parliamentary system whose government emphasizes sovereignty, national identity, and traditional social values.', source: SOURCES.freedomHungary },
      { name: 'India', detail: 'Large electoral democracy with strong national-identity politics and a mixed economy; internal variation is substantial.', source: SOURCES.freedomIndia },
      { name: 'Poland', detail: 'Democratic state with a strong national-conservative current; political direction changes across governments.', source: SOURCES.freedomHungary },
    ],
    historical: [
      { name: 'Gaullist France — Paris', detail: 'A sovereignist tradition emphasizing national independence and a strong state.', source: SOURCES.degaulle },
      { name: 'Meiji Japan — Tokyo', detail: 'Rapid state-led modernization combined with imperial nationalism; not a liberal-democratic match.', source: SOURCES.degaulle },
      { name: 'Victorian Britain — London', detail: 'Imperial nationalism and social traditionalism alongside expanding market institutions.', source: SOURCES.burke },
    ],
  },
  {
    id: 'social-democratic',
    name: 'Social democratic',
    accent: '#9b8afd',
    profile: { economic: -58, social: -62, authority: -26, identity: -34, foreign: -14 },
    summary: 'A regulated mixed economy, strong public services, civil liberties, and gradual reform through democratic institutions.',
    dimensionNotes: {
      economic: 'Private enterprise remains, but strong welfare provision, labor rights, collective bargaining, and redistribution reduce inequality.',
      social: 'Progressive reform is supported, usually through gradual democratic change rather than a rejection of every inherited institution.',
      authority: 'Democratic accountability, civil liberties, and rule-of-law constraints are combined with an active administrative state.',
      identity: 'Civic belonging and international solidarity can coexist; national identity is less important than equal citizenship and welfare.',
      foreign: 'Diplomacy, international law, and defensive cooperation are preferred over unilateral force or open-ended intervention.',
    },
    people: [
      { name: 'Olof Palme', detail: 'Swedish social-democratic leader associated with an expansive welfare state and international solidarity.', source: SOURCES.palme },
      { name: 'Clement Attlee', detail: 'British Labour prime minister whose government built major postwar public institutions.', source: SOURCES.palme },
      { name: 'Eduard Bernstein', detail: 'Early social democrat who argued for evolutionary reform rather than revolutionary dictatorship.', source: SOURCES.marx },
    ],
    current: [
      { name: 'Denmark', detail: 'Social-market democracy with extensive welfare provision, strong rights protections, and high taxation.', source: SOURCES.freedomDenmark },
      { name: 'Norway', detail: 'Social democratic welfare state with a mixed economy and strong democratic institutions.', source: SOURCES.freedomNorway },
      { name: 'Sweden', detail: 'Long-standing social democratic tradition within a liberal parliamentary democracy and mixed economy.', source: SOURCES.freedomSweden },
    ],
    historical: [
      { name: 'Postwar Sweden — Stockholm', detail: 'A leading example of democratic welfare-state development.', source: SOURCES.palme },
      { name: 'Attlee-era Britain — London', detail: 'Postwar Labour government that created the NHS and expanded social insurance.', source: SOURCES.palme },
      { name: 'Nordic model — Copenhagen', detail: 'Historical development of universal welfare, collective bargaining, and competitive markets.', source: SOURCES.freedomDenmark },
    ],
  },
  {
    id: 'classical-liberal',
    name: 'Classical liberal',
    accent: '#77c8ff',
    profile: { economic: 70, social: -20, authority: -58, identity: -12, foreign: -18 },
    summary: 'Private property, voluntary exchange, civil liberties, constitutional limits, and a restrained state are treated as the foundation of a free society.',
    dimensionNotes: {
      economic: 'Secure property and contract rights, open competition, and low barriers to exchange are preferred to extensive planning or state ownership.',
      social: 'Personal liberty is protected, but classical liberal traditions contain both reformist and more cautious views on inherited social norms.',
      authority: 'Government is legitimate when it protects rights through accountable institutions; arbitrary power and concentrated executive authority are rejected.',
      identity: 'Civic membership and individual rights matter more than ethnic uniformity, while attachment to a constitutional nation can remain meaningful.',
      foreign: 'Trade, diplomacy, and non-interference are preferred; military action is generally limited to defense or clear protection of rights.',
    },
    people: [
      { name: 'Adam Smith', detail: 'Political economist associated with commercial society, competition, and the division of labor, alongside a role for public goods and justice.', source: SOURCES.smith },
      { name: 'John Locke', detail: 'Theorist of natural rights, consent, limited government, and resistance to arbitrary rule.', source: SOURCES.locke },
      { name: 'John Stuart Mill', detail: 'Liberal philosopher who defended individuality, free discussion, and limits on coercion.', source: SOURCES.mill },
    ],
    current: [
      { name: 'Switzerland', detail: 'A partial comparator because of federal decentralization, strong civil liberties, and a market-oriented economy; it is not purely classical liberal.', source: SOURCES.freedomSwitzerland },
      { name: 'Netherlands', detail: 'A partial liberal-democratic comparator with open markets and broad civil liberties, alongside a substantial welfare state.', source: SOURCES.freedomNetherlands },
      { name: 'Denmark', detail: 'A partial comparator: competitive markets and rights protections coexist with high taxation and universal public services.', source: SOURCES.freedomDenmark },
    ],
    historical: [
      { name: 'Scottish Enlightenment — Edinburgh', detail: 'A major intellectual setting for arguments about commerce, moral judgment, and civil society.', source: SOURCES.smith },
      { name: '19th-century Britain — London', detail: 'A classical-liberal period associated with parliamentary reform, free trade, and limited suffrage by modern standards.', source: SOURCES.mill },
      { name: 'Early constitutional United States — Philadelphia', detail: 'A partial constitutional example of rights language, consent, and divided public power, with major exclusions and contradictions.', source: SOURCES.locke },
    ],
  },
  {
    id: 'democratic-socialist',
    name: 'Democratic socialist',
    accent: '#ef6c9b',
    profile: { economic: -78, social: -58, authority: -20, identity: -40, foreign: -15 },
    summary: 'Deep economic equality and worker power pursued through elections, pluralist institutions, and democratic control rather than one-party rule.',
    dimensionNotes: {
      economic: 'Social ownership, worker power, and strong redistribution are preferred, but the route may include public enterprises, cooperatives, and regulated markets.',
      social: 'Emancipatory reform and equal citizenship are treated as conditions of democracy, with disagreement over how quickly institutions should change.',
      authority: 'The state is used to democratize economic power, but independent unions, elections, civil liberties, and organized dissent remain essential safeguards.',
      identity: 'Class and international solidarity are important, while democratic-socialist movements may also work through national citizenship and public institutions.',
      foreign: 'International solidarity and law are preferred to power politics; defensive force may be accepted without turning foreign policy into permanent intervention.',
    },
    people: [
      { name: 'Karl Marx', detail: 'Critic of capitalist class relations and theorist of social transformation; this card does not equate Marx with every later regime.', source: SOURCES.marx },
      { name: 'Eduard Bernstein', detail: 'Early social democrat who argued for evolutionary, parliamentary reform rather than revolutionary dictatorship.', source: SOURCES.bernstein },
      { name: 'Olof Palme', detail: 'Social-democratic leader associated with welfare-state expansion, equality, and international solidarity.', source: SOURCES.palme },
    ],
    current: [
      { name: 'Denmark', detail: 'A partial social-democratic comparator: strong welfare provision and labor institutions operate within a market economy.', source: SOURCES.freedomDenmark },
      { name: 'Norway', detail: 'A partial comparator with a mixed economy, extensive public services, and democratic institutions; not a full social-ownership model.', source: SOURCES.freedomNorway },
      { name: 'Sweden', detail: 'A partial comparator with a long social-democratic tradition, mixed ownership, and liberal parliamentary government.', source: SOURCES.freedomSweden },
    ],
    historical: [
      { name: 'Attlee-era Britain — London', detail: 'Postwar Labour government that expanded social insurance, public ownership, and universal public services.', source: SOURCES.palme },
      { name: 'Swedish social democracy — Stockholm', detail: 'A major historical attempt to combine democratic politics, labor power, welfare, and competitive production.', source: SOURCES.palme },
      { name: 'European labor movements — Brussels', detail: 'Cross-border labor and socialist institutions show how the tradition connected national reform with international organization.', source: SOURCES.bernstein },
    ],
  },
  {
    id: 'anarchist-communalist',
    name: 'Anarchist communalist',
    accent: '#9be564',
    profile: { economic: -82, social: -55, authority: -92, identity: -45, foreign: -45 },
    summary: 'Collective ownership and mutual aid combined with a radical rejection of centralized state authority, hierarchy, and imposed national power.',
    dimensionNotes: {
      economic: 'Productive resources are imagined as held in common or managed by federated communities rather than by private capital or a centralized state.',
      social: 'Mutual aid, voluntary association, and emancipation from imposed hierarchy are emphasized, although historical anarchists disagreed about social organization.',
      authority: 'Centralized coercive authority is treated as the problem; self-government, federations, councils, and directly accountable associations are preferred.',
      identity: 'International solidarity is stronger than loyalty to a sovereign nation, while local community attachments remain politically important.',
      foreign: 'War-making states and imperial power are rejected; solidarity across borders and resistance to domination are preferred to state intervention.',
    },
    people: [
      { name: 'Mikhail Bakunin', detail: 'Anarchist revolutionary who criticized the state, inherited authority, and centralized revolutionary administration.', source: SOURCES.bakunin },
      { name: 'Nestor Makhno', detail: 'Revolutionary commander associated with the Makhnovist movement’s experiments in peasant self-organization during the Russian Civil War.', source: SOURCES.bakunin },
      { name: 'Buenaventura Durruti', detail: 'Spanish anarchist organizer and militia leader; included as a historical reference, not as a complete description of the movement.', source: SOURCES.bakunin },
    ],
    current: [
      { name: 'No sovereign-state match', detail: 'A country cannot be a direct equivalent when the profile is defined by replacing or radically decentralizing sovereign state authority.', source: SOURCES.bakunin },
      { name: 'Autonomous communes and federations', detail: 'Some contemporary communities borrow anarchist practices, but they exist inside states and should not be counted as country-level matches.', source: SOURCES.bakunin },
    ],
    historical: [
      { name: 'Spanish Revolution — Barcelona', detail: 'Anarchist unions and collectives reorganized workplaces and neighborhoods during the Civil War, under extreme military pressure.', source: SOURCES.bakunin },
      { name: 'Free Territory of Ukraine — Huliaipole', detail: 'The Makhnovist movement is often studied as an experiment in anti-state revolutionary organization; its record was contested and short-lived.', source: SOURCES.bakunin },
      { name: 'Paris Commune — Paris', detail: 'A short-lived experiment in radical municipal self-government that influenced later socialist and anarchist debates, though it was not uniformly anarchist.', source: SOURCES.bakunin },
    ],
  },
  {
    id: 'green-commons',
    name: 'Green commons / ecological pluralist',
    accent: '#45c486',
    profile: { economic: -45, social: -62, authority: -30, identity: -45, foreign: -35 },
    summary: 'Ecological limits, shared resources, local participation, and social equality are combined with plural institutions rather than one universal ownership model.',
    dimensionNotes: {
      economic: 'Markets may remain useful, but essential resources and ecological systems are governed through public, cooperative, or commons institutions when private incentives are insufficient.',
      social: 'Environmental justice, intergenerational responsibility, and expanded participation usually accompany openness to social reform and plural ways of living.',
      authority: 'Rules are legitimate when communities can shape, monitor, and revise them; nested and polycentric institutions are favored over a single command center.',
      identity: 'Ecological interdependence and global responsibility weaken narrow nationalism, while local stewardship and place-based belonging remain important.',
      foreign: 'Cross-border ecological cooperation and restraint are preferred; coercive action is judged by ecological and humanitarian consequences rather than national prestige.',
    },
    people: [
      { name: 'Elinor Ostrom', detail: 'Institutional analyst who documented how communities can govern common-pool resources through locally adapted rules.', source: SOURCES.ostrom },
      { name: 'Amartya Sen', detail: 'Economist and philosopher who connected development to substantive freedoms, public reasoning, health, and education.', source: SOURCES.sen },
      { name: 'John Stuart Mill', detail: 'Liberal thinker whose work is useful for the autonomy, deliberation, and limits-of-growth side of this synthesis.', source: SOURCES.mill },
    ],
    current: [
      { name: 'Netherlands', detail: 'A partial comparator because environmental institutions and social-liberal policy coexist with a market economy and national government.', source: SOURCES.freedomNetherlands },
      { name: 'Denmark', detail: 'A partial comparator with strong welfare institutions and environmental policy, but no single “green commons” political system.', source: SOURCES.freedomDenmark },
      { name: 'Sweden', detail: 'A partial comparator where social democracy, environmental policy, and public institutions interact without abolishing markets.', source: SOURCES.freedomSweden },
    ],
    historical: [
      { name: 'Community commons research — Bloomington', detail: 'Ostrom’s comparative work at Indiana University documented diverse local rules for governing shared resources.', source: SOURCES.ostrom },
      { name: 'Municipal commons traditions — European towns', detail: 'Historic shared forests, pastures, and water institutions illustrate governance that is neither pure privatization nor centralized state ownership.', source: SOURCES.ostrom },
      { name: 'Chipko movement — Uttarakhand', detail: 'A prominent community-centered environmental movement connecting local livelihoods, forests, and nonviolent political action.', source: SOURCES.ostrom },
    ],
  },
  {
    id: 'religious-traditionalist',
    name: 'Religious traditionalist',
    accent: '#d6a756',
    profile: { economic: -5, social: 78, authority: 70, identity: 10, foreign: 5 },
    summary: 'Inherited moral authority, family and religious institutions, social order, and a capable state are prioritized over rapid cultural change.',
    dimensionNotes: {
      economic: 'The tradition spans markets and social provision; economic policy is often judged by its effect on family stability, charity, work, and social order.',
      social: 'Religious, familial, and inherited norms are treated as public goods that should guide institutions, while the degree of tolerance for pluralism varies widely.',
      authority: 'Moral and political authority are given a substantial role in restraining conduct and preserving order, although constitutional limits may still be accepted.',
      identity: 'National, religious, and civilizational belonging may overlap; this profile is not automatically ethnic or exclusionary.',
      foreign: 'A stable international order and national defense are valued; intervention is usually justified through security, moral duty, or protection of a community.',
    },
    people: [
      { name: 'Edmund Burke', detail: 'Conservative thinker associated with inherited institutions, prudence, gradual change, and social continuity.', source: SOURCES.burke },
      { name: 'Thomas Hobbes', detail: 'Political theorist who emphasized order and sovereign authority as protection against violent disorder.', source: SOURCES.hobbes },
      { name: 'Alexis de Tocqueville', detail: 'Analyst of democracy who treated religion, associations, and inherited habits as important supports for free institutions.', source: SOURCES.burke },
    ],
    current: [
      { name: 'Hungary', detail: 'A partial comparator where the government emphasizes sovereignty, traditional social values, and executive authority; it is not a single religious model.', source: SOURCES.freedomHungary },
      { name: 'India', detail: 'A partial comparator because religious and civilizational identity politics coexist with electoral competition and substantial internal diversity.', source: SOURCES.freedomIndia },
      { name: 'Poland', detail: 'A partial comparator with strong religious-conservative currents and changing democratic coalitions; the country is internally plural.', source: SOURCES.freedomHungary },
    ],
    historical: [
      { name: 'Christian-democratic Europe — Rome and Brussels', detail: 'Postwar parties often combined religious social teaching, constitutional democracy, welfare provision, and European cooperation.', source: SOURCES.burke },
      { name: 'Victorian Britain — London', detail: 'A period where religious morality, social hierarchy, imperial identity, and parliamentary institutions coexisted uneasily.', source: SOURCES.burke },
      { name: 'Confessional European states — Central Europe', detail: 'Historical cases show why religious traditionalism ranges from constitutional pluralism to coercive establishment.', source: SOURCES.burke },
    ],
  },
  {
    id: 'anti-colonial-liberation',
    name: 'Anti-colonial liberation',
    accent: '#e88b4a',
    profile: { economic: -55, social: -50, authority: 10, identity: -65, foreign: -30 },
    summary: 'Political independence, racial or colonial emancipation, collective dignity, and economic transformation are prioritized, with major disagreement over means and the postcolonial state.',
    dimensionNotes: {
      economic: 'Colonial extraction and unequal ownership are criticized; proposed remedies range from decentralized self-sufficiency to socialist transformation and national development.',
      social: 'Equal citizenship and liberation from racial hierarchy are central, but revolutionary movements can contain internal conflicts over gender, class, and dissent.',
      authority: 'Organized authority may be necessary to defeat colonial rule, yet anti-colonial thinkers repeatedly warn against replacing foreign domination with a new domestic elite.',
      identity: 'National liberation and cultural self-determination are powerful sources of solidarity, often paired with wider Pan-African, Asian, or universal human commitments.',
      foreign: 'Anti-imperial sovereignty is central; diplomacy and nonviolence may be preferred, while some movements treat force as historically situated resistance to colonial domination.',
    },
    people: [
      { name: 'M. K. Gandhi', detail: 'Advocate of swaraj, satyagraha, nonviolence, and ethical self-rule; his economic and social views were complex and changed across contexts.', source: SOURCES.gandhi },
      { name: 'Frantz Fanon', detail: 'Anti-colonial theorist of colonial violence, national consciousness, psychological liberation, and postcolonial reconstruction.', source: SOURCES.fanon },
      { name: 'W. E. B. Du Bois', detail: 'Historian and Pan-African thinker who linked racial equality, labor, democracy, and anti-colonial internationalism.', source: SOURCES.dubois },
    ],
    current: [
      { name: 'India', detail: 'A partial comparator where postcolonial sovereignty, national development, democratic politics, and deep internal pluralism coexist.', source: SOURCES.freedomIndia },
      { name: 'South Africa', detail: 'A partial comparator because anti-apartheid liberation shaped the constitutional state, while present policy is not reducible to one liberation ideology.', source: SOURCES.freedomSouthAfrica },
      { name: 'No single contemporary national match', detail: 'Anti-colonial liberation is a historical family of movements whose goals and institutions vary across postcolonial states.', source: SOURCES.fanon },
    ],
    historical: [
      { name: 'Indian independence — New Delhi', detail: 'A mass anti-colonial movement that combined constitutional negotiation, civil disobedience, and competing visions of self-rule.', source: SOURCES.gandhi },
      { name: 'Algerian War of Independence — Algiers', detail: 'A case of armed national liberation and revolutionary state formation analyzed through the tensions in Fanon’s work.', source: SOURCES.fanon },
      { name: 'Reconstruction and Black freedom — Washington, D.C.', detail: 'Du Bois’s account centers emancipation, labor, equal citizenship, and the violent restoration of racial hierarchy.', source: SOURCES.dubois },
    ],
  },
  {
    id: 'communist',
    name: 'Communist / Marxist-Leninist',
    accent: '#e5484d',
    palette: 'authoritarian-collectivist',
    profile: { economic: -94, social: -28, authority: 78, identity: -48, foreign: -20 },
    summary: 'Revolutionary or party-led communism: collective ownership and class transformation combined with organized political power, with major variation between democratic and authoritarian currents.',
    dimensionNotes: {
      economic: 'The means of production should be placed under collective or public control and organized around ending class domination rather than private accumulation.',
      social: 'Social emancipation is often part of the project, but communist movements have differed sharply over family, religion, dissent, gender, and cultural policy.',
      authority: 'A disciplined party or revolutionary state is often treated as necessary to defend the transition; this is the main distinction from libertarian communist currents.',
      identity: 'Class solidarity and internationalism are emphasized, although communist states and parties have also developed strong official national identities.',
      foreign: 'Anti-imperial solidarity and international revolution can coexist with state security, strategic alliances, and coercive foreign policy.',
    },
    people: [
      { name: 'Karl Marx', detail: 'Critic of capitalist class relations and theorist of communist transformation; not a blueprint for every later regime.', source: SOURCES.marx },
      { name: 'Vladimir Lenin', detail: 'Revolutionary theorist associated with the vanguard party and a transitional workers’ state.', source: SOURCES.lenin },
      { name: 'Rosa Luxemburg', detail: 'Revolutionary socialist who defended mass democratic action and criticized bureaucratic domination.', source: SOURCES.bernstein },
    ],
    current: [
      { name: 'China', detail: 'A one-party state with extensive public direction and state-owned sectors alongside markets; not a complete theoretical match.', source: SOURCES.freedomChina },
      { name: 'Vietnam', detail: 'A one-party socialist republic with state-led political institutions and a mixed economy.', source: SOURCES.freedomVietnam },
      { name: 'Cuba', detail: 'A one-party socialist state with extensive public provision and state direction; policy and social conditions are historically specific.', source: SOURCES.freedomChina },
    ],
    historical: [
      { name: 'Soviet Union — Moscow', detail: 'The major twentieth-century party-state experiment, with different institutions across Lenin, Stalin, and later periods.', source: SOURCES.lenin },
      { name: 'Mao-era China — Beijing', detail: 'Revolutionary communist state with mass mobilization and extensive political and economic control.', source: SOURCES.marx },
      { name: 'Revolutionary Cuba — Havana', detail: 'A post-1959 communist state whose internationalism, centralization, and social programs changed over time.', source: SOURCES.lenin },
    ],
  },
  {
    id: 'anarcho-capitalist',
    name: 'Anarcho-capitalist',
    accent: '#63d8bd',
    palette: 'libertarian-market',
    profile: { economic: 96, social: -10, authority: -98, identity: -30, foreign: -76 },
    summary: 'A radical market-libertarian position that seeks to replace the state with voluntary, contractual, and privately provided institutions.',
    dimensionNotes: {
      economic: 'Private property, contract, competition, and market exchange are treated as the default mechanisms for coordination, including services conventionally supplied by the state.',
      social: 'Personal association is generally voluntary and culturally pluralist, although property rules can create difficult questions about access, exclusion, and power.',
      authority: 'The defining commitment is opposition to a territorial monopoly of coercion; governance is expected to emerge through voluntary institutions, contracts, and competing providers.',
      identity: 'Individual choice and voluntary association are prioritized over compulsory national unity, though communities may still form strong private or cultural identities.',
      foreign: 'Permanent alliances, intervention, and state militaries are rejected or minimized; defense is imagined through voluntary or privately organized arrangements.',
    },
    people: [
      { name: 'Murray Rothbard', detail: 'Major twentieth-century theorist of anarcho-capitalism and private-property-based legal order.', source: SOURCES.nozik },
      { name: 'Robert Nozick', detail: 'A minimal-state theorist often discussed alongside anarcho-capitalist arguments, though he did not endorse full anarcho-capitalism.', source: SOURCES.nozik },
      { name: 'Friedrich Hayek', detail: 'Defended dispersed knowledge and market coordination but retained a role for a limited state; included as a neighboring influence, not an exact match.', source: SOURCES.hayek },
    ],
    current: [
      { name: 'No sovereign-state match', detail: 'A country cannot be an exact example of a profile defined by replacing sovereign state authority with voluntary institutions.', source: SOURCES.nozik },
      { name: 'Market-oriented jurisdictions', detail: 'Some jurisdictions approximate low-tax or high-market policies, but all still retain public law and state coercion.', source: SOURCES.hayek },
      { name: 'Private governance experiments', detail: 'Special economic zones and private communities may borrow mechanisms from the tradition without becoming stateless.', source: SOURCES.nozik },
    ],
    historical: [
      { name: 'Nineteenth-century voluntaryist debates — United States', detail: 'Individualist and anti-state arguments supplied neighboring traditions, but not a complete anarcho-capitalist system.', source: SOURCES.nozik },
      { name: 'Free-market experiments — Hong Kong', detail: 'Often cited for market openness, but it remained under sovereign governments and is not anarcho-capitalist.', source: SOURCES.hayek },
      { name: 'Private-law thought — European liberal tradition', detail: 'Historical contract and property arguments are antecedents, not evidence that stateless capitalism existed.', source: SOURCES.locke },
    ],
  },
  {
    id: 'anarcho-communist',
    name: 'Anarcho-communist',
    accent: '#d27cff',
    palette: 'anarchist-communalist',
    profile: { economic: -94, social: -58, authority: -100, identity: -70, foreign: -68 },
    summary: 'A stateless communist tradition favoring common ownership, voluntary association, direct democracy, and decentralized self-management.',
    dimensionNotes: {
      economic: 'Common ownership and free access are preferred to both private accumulation and centralized state ownership.',
      social: 'Mutual aid, emancipation, and voluntary association support progressive social change, but the tradition is internally diverse.',
      authority: 'The state and hierarchical command are rejected in favor of federated communes, workplace self-management, and direct participation.',
      identity: 'International solidarity and local association matter more than compulsory national loyalty or a centralized national culture.',
      foreign: 'Militaries and imperial power are rejected, while self-defense and solidarity against domination may still be accepted.',
    },
    people: [
      { name: 'Peter Kropotkin', detail: 'Anarchist communist associated with mutual aid, decentralized federation, and common ownership.', source: SOURCES.bakunin },
      { name: 'Mikhail Bakunin', detail: 'Revolutionary anarchist critic of the state, centralized authority, and hierarchical revolution.', source: SOURCES.bakunin },
      { name: 'Emma Goldman', detail: 'Anarchist writer and organizer associated with freedom, anti-authoritarianism, and social emancipation.', source: SOURCES.bakunin },
    ],
    current: [
      { name: 'No sovereign-state match', detail: 'A state cannot be a direct equivalent when the profile rejects centralized sovereign authority.', source: SOURCES.bakunin },
      { name: 'Autonomous communes and federations', detail: 'Some communities borrow anarchist practices inside states; they are not country-level matches.', source: SOURCES.bakunin },
      { name: 'Zapatista autonomous communities', detail: 'A partial contemporary reference for autonomy and local self-government, not a complete anarcho-communist match.', source: SOURCES.bakunin },
    ],
    historical: [
      { name: 'Spanish Revolution — Barcelona', detail: 'Anarchist unions and collectives reorganized workplaces and neighborhoods during the Civil War.', source: SOURCES.bakunin },
      { name: 'Free Territory of Ukraine — Huliaipole', detail: 'A short-lived and contested experiment in anti-state revolutionary organization.', source: SOURCES.bakunin },
      { name: 'Paris Commune — Paris', detail: 'A radical municipal experiment that influenced anarchist and socialist debates but was not uniformly anarchist.', source: SOURCES.bakunin },
    ],
  },
  {
    id: 'conservative',
    name: 'Conservatism',
    accent: '#c9a86a',
    palette: 'national-conservative',
    profile: { economic: 18, social: 72, authority: 48, identity: 62, foreign: -10 },
    summary: 'A family of views valuing inherited institutions, social continuity, practical judgment, and gradual rather than abstractly engineered change.',
    dimensionNotes: {
      economic: 'Conservative traditions often accept markets and private property while supporting paternal regulation, social insurance, or protection for national institutions.',
      social: 'Family, religion, custom, and inherited practices are treated as sources of social knowledge that should not be discarded lightly.',
      authority: 'Order and institutional continuity receive significant weight, although constitutional conservatives distinguish legitimate authority from arbitrary rule.',
      identity: 'National history, inherited institutions, and cultural continuity are important sources of belonging and political judgment.',
      foreign: 'Foreign policy is usually pragmatic: preserve security and national interests, avoid utopian remaking of societies, and weigh force cautiously.',
    },
    people: [
      { name: 'Edmund Burke', detail: 'Classic conservative writer associated with inherited institutions, prudence, and gradual change.', source: SOURCES.burke },
      { name: 'Alexis de Tocqueville', detail: 'Analyst of democracy who emphasized habits, associations, religion, and institutional continuity.', source: SOURCES.burke },
      { name: 'Michael Oakeshott', detail: 'Twentieth-century conservative thinker associated with skepticism toward rationalist political engineering.', source: SOURCES.burke },
    ],
    current: [
      { name: 'United Kingdom', detail: 'A constitutional state with conservative parties and institutions that combine continuity with policy change.', source: SOURCES.freedomNetherlands },
      { name: 'Germany', detail: 'A federal liberal democracy with Christian-democratic and conservative traditions alongside pluralist competition.', source: SOURCES.freedomHungary },
      { name: 'Japan', detail: 'A constitutional democracy where national continuity, social order, and gradual reform remain influential.', source: SOURCES.freedomIndia },
    ],
    historical: [
      { name: 'Post-Revolutionary Britain — London', detail: 'A setting for arguments about preserving institutions while permitting reform.', source: SOURCES.burke },
      { name: 'Tocqueville’s France and United States', detail: 'Comparative cases for the relationship between democracy, religion, association, and social habits.', source: SOURCES.burke },
      { name: 'European Christian-democratic states', detail: 'Postwar arrangements combining constitutional government, social protection, and inherited religious traditions.', source: SOURCES.burke },
    ],
  },
  {
    id: 'civic-nationalist',
    name: 'Civic nationalism',
    accent: '#5ca9ff',
    palette: 'classical-liberal',
    profile: { economic: 5, social: 5, authority: 18, identity: 58, foreign: -10 },
    summary: 'A form of national belonging based primarily on shared citizenship, political principles, and institutions rather than ancestry alone.',
    dimensionNotes: {
      economic: 'Economic policy is not fixed by civic nationalism; the common national project can support market, welfare, or developmental arrangements.',
      social: 'Equal civic membership usually supports legal inclusion, while shared public norms may still be emphasized.',
      authority: 'A capable constitutional state is valued to protect citizenship and common institutions, but arbitrary exclusion undermines the civic claim.',
      identity: 'The nation is understood as a political community formed through citizenship, public principles, and shared institutions rather than ethnic descent alone.',
      foreign: 'International cooperation is compatible with civic nationalism, provided the democratic community retains meaningful self-government.',
    },
    people: [
      { name: 'Ernest Renan', detail: 'Associated with a voluntarist account of nationhood grounded in shared memory and present consent.', source: SOURCES.burke },
      { name: 'Benedict Anderson', detail: 'Analyzed nations as imagined political communities created through shared media, institutions, and historical narratives.', source: SOURCES.renan },
      { name: 'John Stuart Mill', detail: 'Connected representative government to shared political nationality while defending individual liberty.', source: SOURCES.mill },
    ],
    current: [
      { name: 'France', detail: 'A republican tradition often presents citizenship and equal public law as the basis of national membership.', source: SOURCES.freedomNetherlands },
      { name: 'United States', detail: 'A constitutional civic identity coexists with unresolved historical exclusions and competing ethnic or cultural definitions.', source: SOURCES.freedomDenmark },
      { name: 'Switzerland', detail: 'A federal civic state whose national identity is built across multiple languages and cantonal institutions.', source: SOURCES.freedomSwitzerland },
    ],
    historical: [
      { name: 'French republican tradition — Paris', detail: 'A major historical setting for citizenship-centered national identity, with conflicts over empire and exclusion.', source: SOURCES.burke },
      { name: 'Early constitutional United States — Philadelphia', detail: 'A partial civic-national example with rights language and major exclusions.', source: SOURCES.locke },
      { name: 'Postwar European citizenship projects', detail: 'National citizenship increasingly coexisted with cross-border institutions and rights commitments.', source: SOURCES.kant },
    ],
  },
  {
    id: 'ethnic-nationalist',
    name: 'Ethnic nationalism',
    accent: '#c64d61',
    palette: 'historical-fascist',
    profile: { economic: 18, social: 72, authority: 65, identity: 96, foreign: 55 },
    summary: 'A national identity defined substantially through ancestry, ethnicity, language, religion, or inherited culture; political membership becomes narrower than civic citizenship.',
    dimensionNotes: {
      economic: 'Economic policy varies widely; protection, welfare, or state direction may be justified as serving the favored national group.',
      social: 'Inherited culture, family norms, language, and conformity are often treated as conditions of collective survival.',
      authority: 'State power may be expanded to police borders, identity, speech, education, and loyalty to the dominant group.',
      identity: 'The nation is defined through descent or inherited cultural membership, which can conflict directly with equal civic belonging.',
      foreign: 'Security and territorial claims can become expansionist or coercive when national identity is understood as threatened beyond current borders.',
    },
    warning: 'This analytical card describes a historically consequential and often exclusionary family of politics. It is not a recommendation or a claim that all cultural nationalism becomes genocidal.',
    people: [
      { name: 'Johann Gottfried Herder', detail: 'A complex precursor of cultural-national thought whose account of language and Volk was later appropriated in divergent ways.', source: SOURCES.renan },
      { name: 'Ernest Renan', detail: 'Included as a contrast: his account emphasizes shared memory and consent rather than ancestry alone.', source: SOURCES.burke },
      { name: 'Adolf Hitler', detail: 'A genocidal historical example of racialized nationalism fused with dictatorship and expansionist war.', source: SOURCES.hitler },
    ],
    current: [
      { name: 'No single country match', detail: 'Many states contain ethnic-nationalist movements or policies without making the entire state an exact ideological match.', source: SOURCES.burke },
      { name: 'Nationally exclusionary movements', detail: 'Contemporary movements vary from cultural preference to explicit unequal citizenship; the distinction must be researched case by case.', source: SOURCES.hitler },
      { name: 'States with contested membership regimes', detail: 'Citizenship, language, migration, and minority-rights policy can reveal partial elements without proving one total ideology.', source: SOURCES.freedomHungary },
    ],
    historical: [
      { name: 'Nazi Germany — Berlin', detail: 'Racial dictatorship, mass persecution, and expansionist war; used as a warning case, not a generic synonym for nationalism.', source: SOURCES.hitler },
      { name: 'Central and Eastern European national movements', detail: 'Historical movements combined cultural revival, state-building, pluralism, and exclusion in different proportions.', source: SOURCES.burke },
      { name: 'Colonial and partition regimes', detail: 'Administrative classification could harden ethnic identities and create unequal political membership.', source: SOURCES.hitler },
    ],
  },
  {
    id: 'monarchist',
    name: 'Monarchism / royalism',
    accent: '#d6ae63',
    palette: 'national-conservative',
    profile: { economic: 12, social: 45, authority: 62, identity: 62, foreign: 18 },
    summary: 'Political arrangements that place a monarch at the head of the state, with authority ranging from absolute rule to a largely ceremonial constitutional office.',
    dimensionNotes: {
      economic: 'Monarchies have historically supported feudal, mercantilist, capitalist, welfare, and state-led economies; the institution itself does not determine ownership.',
      social: 'Dynastic continuity, inherited rank, ceremony, and established religion may receive public recognition, though constitutional monarchies can be socially pluralist.',
      authority: 'The defining question is whether royal authority is sovereign, legally limited, or primarily symbolic within a representative constitution.',
      identity: 'The crown can serve as a dynastic, religious, imperial, or civic symbol of national continuity, with very different membership consequences.',
      foreign: 'Royal states have historically ranged from defensive diplomacy to imperial expansion; dynastic ties can shape alliances without determining policy.',
    },
    people: [
      { name: 'Thomas Hobbes', detail: 'Defended strong sovereign authority and treated monarchy as one possible form of indivisible sovereignty.', source: SOURCES.hobbes },
      { name: 'Edmund Burke', detail: 'Defended inherited institutions and continuity while not reducing constitutional monarchy to unlimited royal power.', source: SOURCES.burke },
      { name: 'Thomas Aquinas', detail: 'Analyzed kingship, law, and the common good within medieval Christian political thought.', source: SOURCES.burke },
    ],
    current: [
      { name: 'United Kingdom', detail: 'Constitutional monarchy with a largely ceremonial crown and parliamentary government.', source: SOURCES.freedomNetherlands },
      { name: 'Sweden', detail: 'Constitutional monarchy where elected institutions exercise political power.', source: SOURCES.freedomSweden },
      { name: 'Saudi Arabia', detail: 'A much more authority-centered monarchy whose religious and legal structure differs sharply from constitutional monarchies.', source: SOURCES.freedomIndia },
    ],
    historical: [
      { name: 'Ancien Régime France — Versailles', detail: 'Dynastic monarchy with hierarchical estates and changing theories of divine right and administration.', source: SOURCES.burke },
      { name: 'Victorian Britain — London', detail: 'Monarchy combined with parliamentary government, empire, industrial capitalism, and gradual franchise expansion.', source: SOURCES.burke },
      { name: 'Medieval European kingdoms', detail: 'Royal power was negotiated among dynasties, religious authorities, nobles, towns, and customary law.', source: SOURCES.burke },
    ],
  },
  {
    id: 'theocratic',
    name: 'Theocratic / clerical rule',
    accent: '#a981ff',
    palette: 'national-conservative',
    profile: { economic: 5, social: 78, authority: 92, identity: 45, foreign: -5 },
    summary: 'A regime in which religious authority, sacred law, or religious office has a constitutive role in government and political legitimacy.',
    dimensionNotes: {
      economic: 'Economic arrangements vary; religious law may regulate property, charity, markets, taxation, and welfare without specifying one modern economic system.',
      social: 'Public morality, family law, education, and gender roles are often grounded in an authoritative religious interpretation.',
      authority: 'Political power is concentrated or constrained according to religious office, revelation, sacred law, or a clerical interpretation of legitimacy.',
      identity: 'Membership may be defined through a confessional community, with pluralism ranging from protected minorities to unequal or exclusionary status.',
      foreign: 'Foreign policy can be defensive, missionary, nationalist, or expansionist; theology alone does not determine the use of force abroad.',
    },
    warning: 'Theocratic systems differ substantially in doctrine, institutional design, and treatment of nonbelievers. This is a comparative category, not an endorsement.',
    people: [
      { name: 'Thomas Aquinas', detail: 'A religious political thinker who discussed law, kingship, and the common good; not a direct model of every theocracy.', source: SOURCES.burke },
      { name: 'Al-Mawardi', detail: 'A jurist of Islamic governance whose institutional account differs from modern clerical-rule categories.', source: SOURCES.burke },
      { name: 'John Calvin', detail: 'A theologian associated with religious reform and contested forms of church–civil authority in Geneva.', source: SOURCES.burke },
    ],
    current: [
      { name: 'Iran', detail: 'A constitutional-religious system with clerical institutions and elected offices; its structure is historically specific.', source: SOURCES.freedomIndia },
      { name: 'Vatican City', detail: 'A sovereign religious polity with a distinctive institutional purpose and scale, not a general model for all theocracies.', source: SOURCES.freedomItaly },
      { name: 'Afghanistan under the Taliban', detail: 'An authoritarian religious government whose legal and social order should be analyzed separately from pluralist religious politics.', source: SOURCES.freedomIndia },
    ],
    historical: [
      { name: 'Geneva under Calvinist reform — Geneva', detail: 'A historically significant experiment in the relationship between church discipline and civic government.', source: SOURCES.burke },
      { name: 'Papal States — Rome', detail: 'A former territorial state ruled by the papacy, with changing administrative and diplomatic arrangements.', source: SOURCES.burke },
      { name: 'Puritan New England — Boston and Massachusetts Bay', detail: 'A colonial setting where religious membership and civil authority were closely connected, with significant exclusions.', source: SOURCES.burke },
    ],
  },
  {
    id: 'christian-democratic',
    name: 'Christian democracy',
    accent: '#7aa7d9',
    palette: 'social-democratic',
    profile: { economic: 5, social: 30, authority: 20, identity: 40, foreign: -15 },
    summary: 'A political family combining Christian social ethics, constitutional democracy, family and community institutions, social protection, and a mixed economy.',
    dimensionNotes: {
      economic: 'Private property and markets are accepted but balanced by social duties, labor protections, welfare, and the principle of subsidiarity.',
      social: 'Family and religious traditions are valued, while democratic pluralism and social protection can support gradual reform.',
      authority: 'Constitutional democracy and intermediary institutions are preferred to both state absolutism and radical individual atomization.',
      identity: 'Christian cultural inheritance may inform national identity, but the tradition often supports civic membership and cross-border European cooperation.',
      foreign: 'International law, European cooperation, diplomacy, and collective defense are commonly combined with a cautious use of force.',
    },
    people: [
      { name: 'Jacques Maritain', detail: 'Catholic philosopher associated with personalism, human rights, and democratic constitutionalism.', source: SOURCES.burke },
      { name: 'Konrad Adenauer', detail: 'German Christian-democratic leader associated with constitutional reconstruction and European integration.', source: SOURCES.freedomHungary },
      { name: 'Robert Schuman', detail: 'Christian-democratic statesman associated with European cooperation and postwar reconciliation.', source: SOURCES.freedomNetherlands },
    ],
    current: [
      { name: 'Germany', detail: 'A major contemporary setting for Christian-democratic parties within a secular constitutional democracy.', source: SOURCES.freedomHungary },
      { name: 'Italy', detail: 'Christian-democratic traditions shaped postwar institutions, welfare, and party competition even after party-system change.', source: SOURCES.freedomNetherlands },
      { name: 'European Union member states', detail: 'Partial comparators where social-market policy, constitutionalism, and religious cultural inheritance coexist.', source: SOURCES.freedomNetherlands },
    ],
    historical: [
      { name: 'Postwar West Germany — Bonn', detail: 'Social-market constitutional reconstruction associated with Christian-democratic politics.', source: SOURCES.freedomHungary },
      { name: 'European Coal and Steel Community — Brussels', detail: 'A historical setting where Christian-democratic cooperation supported supranational institution-building.', source: SOURCES.freedomNetherlands },
      { name: 'Postwar Italy — Rome', detail: 'Christian-democratic government combined Catholic social influence, parliamentary politics, and welfare expansion.', source: SOURCES.freedomNetherlands },
    ],
  },
  {
    id: 'religious-socialist',
    name: 'Religious socialism / liberation theology',
    accent: '#ef8e68',
    palette: 'social-democratic',
    profile: { economic: -60, social: -35, authority: 10, identity: -35, foreign: -35 },
    summary: 'A family connecting religious ethics, solidarity with the poor, collective economic justice, and liberation from domination.',
    dimensionNotes: {
      economic: 'Capitalist exploitation and concentrated ownership are criticized in favor of social ownership, redistribution, cooperatives, or preferential concern for the poor.',
      social: 'Emancipation is emphasized, although specific religious communities can preserve traditional positions on family, gender, and authority.',
      authority: 'Religious institutions can mobilize collective action while liberationist currents criticize both state repression and clerical monopoly.',
      identity: 'Faith-based solidarity can be local, national, transnational, or explicitly aligned with oppressed racial and colonial groups.',
      foreign: 'Anti-imperial solidarity and nonviolence are common, but some movements accept resistance or revolutionary struggle under particular conditions.',
    },
    people: [
      { name: 'Gustavo Gutiérrez', detail: 'Peruvian theologian associated with liberation theology and a preferential option for the poor.', source: SOURCES.gandhi },
      { name: 'Dorothy Day', detail: 'Catholic social radical associated with voluntary poverty, worker solidarity, and pacifism.', source: SOURCES.gandhi },
      { name: 'Martin Luther King Jr.', detail: 'Christian social ethicist who connected racial equality, nonviolence, and economic justice.', source: SOURCES.king },
    ],
    current: [
      { name: 'Brazilian base communities', detail: 'Church-linked grassroots communities have supported social organizing without constituting a single national ideology.', source: SOURCES.gandhi },
      { name: 'Faith-based worker and justice movements', detail: 'Contemporary movements combine religious practice with labor, anti-poverty, and human-rights advocacy.', source: SOURCES.gandhi },
      { name: 'No single country match', detail: 'Religious socialism is a cross-cutting movement family rather than a standard form of state organization.', source: SOURCES.gandhi },
    ],
    historical: [
      { name: 'Civil-rights movement — Birmingham and Washington, D.C.', detail: 'Christian ethics, nonviolent direct action, and economic justice were linked in movement politics.', source: SOURCES.king },
      { name: 'Latin American liberation theology — Lima and São Paulo', detail: 'A twentieth-century theological and social movement focused on poverty, dependency, and popular organization.', source: SOURCES.gandhi },
      { name: 'Catholic Worker movement — New York', detail: 'A pacifist and communitarian experiment connecting religious practice to hospitality and labor solidarity.', source: SOURCES.gandhi },
    ],
  },
  {
    id: 'populist',
    name: 'Populism',
    accent: '#f28c52',
    palette: 'national-conservative',
    profile: { economic: -10, social: 15, authority: 35, identity: 55, foreign: 15 },
    summary: 'A flexible political style or thin ideology framing politics as a struggle between a morally unified people and a corrupt elite.',
    dimensionNotes: {
      economic: 'Populism has no fixed economic program: it can attack oligarchic wealth from the left, defend national producers, or combine redistribution with market policy.',
      social: 'The “people” can be framed inclusively or through a culturally conservative majority; social policy depends on the movement’s host ideology.',
      authority: 'Leaders may claim to embody the popular will against courts, parties, experts, or bureaucracies, creating tension with pluralist institutions.',
      identity: 'Populist rhetoric often constructs a bounded people and may link popular sovereignty to national identity, though the boundary can also be class-based.',
      foreign: 'Movements may oppose global elites and external institutions, or use international solidarity and anti-imperialism; no single foreign policy follows.',
    },
    people: [
      { name: 'Ernesto Laclau', detail: 'Theorist who analyzed populism as a way of constructing a political people through chains of demands.', source: SOURCES.renan },
      { name: 'Cas Mudde', detail: 'Scholar associated with the definition of populism as a thin ideology opposing the pure people to the corrupt elite.', source: SOURCES.renan },
      { name: 'Juan Perón', detail: 'A historical leader-centered movement combining mass incorporation, social policy, nationalism, and executive authority.', source: SOURCES.burke },
    ],
    current: [
      { name: 'Varied movements across Europe and the Americas', detail: 'Populist movements can be left, right, nationalist, anti-austerity, or leader-centered; country labels are not interchangeable.', source: SOURCES.freedomHungary },
      { name: 'No single country match', detail: 'Populism is a political style that can reshape an existing regime without replacing all of its institutions.', source: SOURCES.burke },
      { name: 'Electoral anti-elite campaigns', detail: 'A campaign’s use of “the people” and “the elite” should be distinguished from its concrete policy platform.', source: SOURCES.renan },
    ],
    historical: [
      { name: 'People’s Party — United States', detail: 'A late nineteenth-century agrarian and anti-monopoly movement often studied in the history of populism.', source: SOURCES.burke },
      { name: 'Peronist Argentina — Buenos Aires', detail: 'A leader-centered mass movement combining labor incorporation, social policy, and national political identity.', source: SOURCES.burke },
      { name: 'Latin American left populisms', detail: 'Historical cases show why redistribution, nationalism, democracy, and executive power must be measured separately.', source: SOURCES.burke },
    ],
  },
  {
    id: 'centrist-pragmatist',
    name: 'Centrist / pragmatic pluralist',
    accent: '#83b6a9',
    palette: 'neutral',
    profile: { economic: 0, social: 0, authority: 8, identity: 0, foreign: -15 },
    summary: 'A mixed position favoring incremental compromise, evidence-led administration, pluralist institutions, and policy trade-offs over ideological purity.',
    dimensionNotes: {
      economic: 'Markets and public provision are treated as tools whose scope depends on evidence, sector, and social consequences rather than one universal doctrine.',
      social: 'Gradual reform and tolerance for disagreement are preferred, with room for both inherited practices and changing individual rights.',
      authority: 'Public authority is accepted when lawful, competent, proportionate, and reviewable; neither state minimalism nor command politics dominates.',
      identity: 'National and international commitments are balanced pragmatically, with plural citizenship and practical cooperation valued.',
      foreign: 'Diplomacy and alliances lead, while force is treated as a bounded instrument requiring clear objectives and legitimacy.',
    },
    people: [
      { name: 'John Stuart Mill', detail: 'A liberal reference for pluralism, practical reasoning, and the value of open disagreement.', source: SOURCES.mill },
      { name: 'Alexis de Tocqueville', detail: 'A comparative analyst of institutional trade-offs, democratic habits, and social complexity.', source: SOURCES.burke },
      { name: 'John Maynard Keynes', detail: 'A policy thinker associated with adapting public intervention to economic conditions rather than applying laissez-faire mechanically.', source: SOURCES.hayek },
    ],
    current: [
      { name: 'Netherlands', detail: 'A partial comparator for coalition bargaining, mixed-economy policy, and institutional pluralism.', source: SOURCES.freedomNetherlands },
      { name: 'Switzerland', detail: 'A partial comparator for federal compromise, direct democracy, and negotiated pluralism.', source: SOURCES.freedomSwitzerland },
      { name: 'Denmark', detail: 'A partial comparator where welfare, markets, labor institutions, and pragmatic coalition politics coexist.', source: SOURCES.freedomDenmark },
    ],
    historical: [
      { name: 'Coalition parliamentary governments — The Hague', detail: 'Institutional settings where compromise is a governing method rather than a complete ideology.', source: SOURCES.freedomNetherlands },
      { name: 'Keynesian postwar mixed economies', detail: 'Historical policy regimes combining public management, markets, welfare, and international trade.', source: SOURCES.hayek },
      { name: 'Swiss federal settlement — Bern', detail: 'A long-running experiment in negotiated authority across linguistic, religious, and regional differences.', source: SOURCES.freedomSwitzerland },
    ],
  },
  {
    id: 'liberal-constitutionalist',
    name: 'Liberal constitutionalist',
    accent: '#73c7ff',
    palette: 'classical-liberal',
    profile: { economic: 30, social: -25, authority: -65, identity: -25, foreign: -35 },
    summary: 'A liberal tradition emphasizing individual rights, constitutional limits, private property, representative government, and protection against arbitrary power.',
    dimensionNotes: {
      economic: 'Markets and private property are favored, with a recognized role for public goods, lawful regulation, and the protection of equal civic standing.',
      social: 'Personal liberty and freedom of conscience are protected, though historical liberals differed over who counted as a full rights-bearing citizen.',
      authority: 'Government is legitimate only through consent, law, due process, institutional checks, and rights that officials cannot casually override.',
      identity: 'Constitutional citizenship and universal rights are prioritized over ethnic uniformity, while attachment to a political nation remains possible.',
      foreign: 'Lawful diplomacy, trade, and defensive cooperation are preferred to arbitrary conquest or permanent military intervention.',
    },
    people: [
      { name: 'John Locke', detail: 'Theorist of natural rights, consent, limited government, and resistance to arbitrary rule.', source: SOURCES.locke },
      { name: 'Montesquieu', detail: 'Analyst of separated powers, political moderation, and institutional checks against concentrated authority.', source: SOURCES.burke },
      { name: 'John Stuart Mill', detail: 'Defended individuality, free discussion, representative government, and limits on coercion.', source: SOURCES.mill },
    ],
    current: [
      { name: 'Canada', detail: 'A liberal constitutional democracy with rights protections and a mixed-market welfare system.', source: SOURCES.freedomDenmark },
      { name: 'Germany', detail: 'A rights-based constitutional state with federal checks and a social-market economy.', source: SOURCES.freedomHungary },
      { name: 'New Zealand', detail: 'A liberal parliamentary democracy with strong civil liberties and a mixed economy.', source: SOURCES.freedomDenmark },
    ],
    historical: [
      { name: 'Glorious Revolution settlement — London', detail: 'A historical setting for parliamentary constraint, rights arguments, and limits on executive power.', source: SOURCES.locke },
      { name: 'Early constitutional United States — Philadelphia', detail: 'A partial example of consent, rights language, and divided government alongside major exclusions.', source: SOURCES.locke },
      { name: 'Nineteenth-century liberal Britain — London', detail: 'A period of free trade, parliamentary reform, and expanding but incomplete citizenship.', source: SOURCES.mill },
    ],
  },
  {
    id: 'militarist-imperialist',
    name: 'Militarist / imperialist',
    accent: '#a96b59',
    palette: 'historical-fascist',
    profile: { economic: 12, social: 45, authority: 75, identity: 88, foreign: 92 },
    summary: 'A power-politics orientation treating military capacity, hierarchy, territorial control, and external expansion as central instruments of state power.',
    dimensionNotes: {
      economic: 'Economic organization is subordinated to strategic capacity, extraction, logistics, and the support of military or imperial power.',
      social: 'Discipline, hierarchy, sacrifice, and martial virtues are commonly elevated above pluralist or anti-militarist social norms.',
      authority: 'Security institutions and executive command receive broad discretion, especially in periods framed as existential conflict.',
      identity: 'National greatness, civilizational mission, or imperial membership is used to justify hierarchy and loyalty.',
      foreign: 'Force, conquest, coercive influence, and territorial expansion are treated as normal or desirable means of pursuing national power.',
    },
    warning: 'This is a historical-analytical profile of coercive statecraft, not a recommendation. Imperial and militarist systems produced radically different experiences for rulers, soldiers, subjects, and civilians.',
    people: [
      { name: 'Carl von Clausewitz', detail: 'Strategic theorist who analyzed war’s relation to politics; analysis of war is not the same as endorsement of conquest.', source: SOURCES.fanon },
      { name: 'Alfred Thayer Mahan', detail: 'Strategist associated with sea power, naval expansion, and imperial competition.', source: SOURCES.degaulle },
      { name: 'Benito Mussolini', detail: 'Historical dictator who fused authoritarian nationalism, militarization, and imperial ambition.', source: SOURCES.mussolini },
    ],
    current: [
      { name: 'No exact contemporary country match', detail: 'States may be militarized or interventionist without adopting a complete imperialist ideology.', source: SOURCES.morgenthau },
      { name: 'Major-power security states', detail: 'Defense spending and military reach should be distinguished from expansionist ideology and actual territorial aims.', source: SOURCES.morgenthau },
      { name: 'Authoritarian expansionist movements', detail: 'Contemporary movements vary in doctrine, capability, and relationship to existing international law.', source: SOURCES.hitler },
    ],
    historical: [
      { name: 'British Empire — London and overseas colonies', detail: 'A large imperial system combining trade, administration, military power, and unequal sovereignty.', source: SOURCES.burke },
      { name: 'Imperial Japan — Tokyo', detail: 'State-led modernization, militarism, colonial rule, and expansionist war in the twentieth century.', source: SOURCES.degaulle },
      { name: 'Fascist Italy — Rome', detail: 'A historical case where authoritarian nationalism and imperial ambition shaped state policy.', source: SOURCES.mussolini },
    ],
  },
  {
    id: 'national-socialist',
    name: 'National Socialist / Nazi (historical)',
    accent: '#8f4f4f',
    palette: 'historical-fascist',
    profile: { economic: -5, social: 95, authority: 100, identity: 100, foreign: 98 },
    summary: 'The racial-totalitarian ideology of the Nazi movement, combining dictatorship, mass mobilization, ethnic hierarchy, genocide, and expansionist war.',
    dimensionNotes: {
      economic: 'Private property could remain under the regime, but production, labor, and ownership were subordinated to racial-state objectives and rearmament.',
      social: 'The regime imposed racial hierarchy, rigid gender roles, antisemitism, eugenics, persecution, and enforced cultural conformity.',
      authority: 'The Führer-state claimed total political authority, abolished pluralist institutions, and used terror against opponents and targeted groups.',
      identity: 'Membership was defined through racialized ethnonationalism, explicitly rejecting equal civic belonging and treating minorities as enemies.',
      foreign: 'Territorial expansion, racial empire, occupation, and genocidal war were central to the regime’s political project.',
    },
    warning: 'Historical warning card: this ideology was genocidal and expansionist. It is included for critical education and must never be treated as an ordinary policy preference.',
    people: [
      { name: 'Adolf Hitler', detail: 'Leader of Nazi Germany and central author of its racial dictatorship and expansionist program.', source: SOURCES.hitler },
      { name: 'Joseph Goebbels', detail: 'Nazi propaganda minister and a central figure in the regime’s totalitarian apparatus.', source: SOURCES.holocaust },
    ],
    current: [],
    historical: [
      { name: 'Nazi Germany — Berlin', detail: 'Racial dictatorship, mass persecution, genocide, and expansionist war.', source: SOURCES.hitler },
      { name: 'Occupied Eastern Europe', detail: 'A region subjected to racial empire, occupation, mass murder, forced labor, and demographic engineering.', source: SOURCES.holocaust },
      { name: 'Nuremberg and the Nazi state', detail: 'The legal and administrative machinery of dictatorship, persecution, and crimes against humanity.', source: SOURCES.hitler },
    ],
  },
  {
    id: 'libertarian-socialist',
    name: 'Libertarian socialist',
    accent: '#d780c5',
    palette: 'anarchist-communalist',
    profile: { economic: -78, social: -50, authority: -75, identity: -60, foreign: -50 },
    summary: 'A socialist family seeking collective ownership and economic equality through decentralized, democratic, and anti-authoritarian institutions.',
    dimensionNotes: {
      economic: 'Workers’ control, cooperatives, common ownership, and social provision are preferred to both private capital and centralized state ownership.',
      social: 'Emancipation and participation generally support progressive social change, though different currents retain different cultural commitments.',
      authority: 'Political and economic hierarchy should be dispersed through councils, unions, communes, and direct democratic institutions.',
      identity: 'International worker solidarity and local self-government are preferred to compulsory national unity.',
      foreign: 'Anti-militarism and international solidarity are strong, while collective self-defense may be accepted against domination.',
    },
    people: [
      { name: 'Rosa Luxemburg', detail: 'Revolutionary socialist who combined mass democracy, internationalism, and criticism of bureaucratic domination.', source: SOURCES.bernstein },
      { name: 'Mikhail Bakunin', detail: 'Anarchist critic of state socialism and centralized revolutionary authority.', source: SOURCES.bakunin },
      { name: 'Buenaventura Durruti', detail: 'Historical organizer associated with Spanish anarchist labor and militia movements.', source: SOURCES.bakunin },
    ],
    current: [
      { name: 'No sovereign-state match', detail: 'The profile is defined by decentralized social ownership, not a standard centralized state.', source: SOURCES.bakunin },
      { name: 'Worker cooperatives and federations', detail: 'Cooperatives can enact parts of the economic vision while operating within states and markets.', source: SOURCES.bakunin },
      { name: 'Autonomous movements', detail: 'Some movements combine self-management and mutual aid with broader political programs that are not fully libertarian socialist.', source: SOURCES.bakunin },
    ],
    historical: [
      { name: 'Spanish anarchist collectives — Barcelona', detail: 'Workplaces and neighborhoods were reorganized through unions and collectives during the Civil War.', source: SOURCES.bakunin },
      { name: 'German council movement — Berlin', detail: 'Workers’ council traditions challenged both capitalist ownership and centralized party control.', source: SOURCES.bernstein },
      { name: 'Makhnovist Ukraine — Huliaipole', detail: 'A contested revolutionary experiment in peasant self-organization and anti-state politics.', source: SOURCES.bakunin },
    ],
  },
];

const SPECTRUM_BANDS = Object.fromEntries(Object.entries(SPECTRUM_BANDS_RAW).map(([dimensionId, taxonomy]) => [
  dimensionId,
  {
    ...taxonomy,
    basisCitationIds: [...new Set((BAND_CITATIONS[dimensionId] ?? []).flat())],
    bands: (FLIPPED_DIMENSION_SET.has(dimensionId) ? [...taxonomy.bands].reverse() : taxonomy.bands).map((band, index) => ({
      ...band,
      min: BAND_RANGES[index][0],
      max: BAND_RANGES[index][1],
      citationIds: (FLIPPED_DIMENSION_SET.has(dimensionId) ? [...(BAND_CITATIONS[dimensionId] ?? [])].reverse() : (BAND_CITATIONS[dimensionId] ?? []))[index] ?? [],
      evidenceType: 'synthesis',
    })),
  },
]));

function orientProfile(profile) {
  return Object.fromEntries(DIMENSIONS.map(({ id }) => {
    const value = profile?.[id];
    return [id, Number.isFinite(value) ? (FLIPPED_DIMENSION_SET.has(id) ? -value : value) : null];
  }));
}

// Religion scores stay in the pre-inversion orientation here; orientProfile
// applies the public convention so secular public law is positive.
const RELIGION_ARCHETYPE_DATA = {
  'authoritarian-collectivist': { score: -60, note: 'Public law is formally secular and religious institutions are subordinated to the party-state; this does not mean private belief disappears or that every communist regime treated religion identically.' },
  'historical-fascist': { score: 25, note: 'Historical fascist regimes sometimes allied with religious institutions, but they subordinated them to the state and did not share one theological program.' },
  'libertarian-market': { score: -55, note: 'Religious belief and organization are protected as private choices, while the state should not impose religious law or doctrine.' },
  'progressive-liberal': { score: -65, note: 'Public law is justified through equal citizenship and secular constitutional principles, while religious practice remains protected.' },
  'national-conservative': { score: 40, note: 'Religious tradition may inform national institutions and public morality, but the profile does not require clerical rule or a single established faith.' },
  'social-democratic': { score: -35, note: 'The state is generally secular and pluralist, while religious communities can participate in welfare, civil society, and democratic debate.' },
  'classical-liberal': { score: -50, note: 'Religious toleration is protected through limited government and civil rights; coercive law should not enforce a particular faith.' },
  'democratic-socialist': { score: -30, note: 'Public law is generally secular and egalitarian, although religious social movements can contribute to democratic and economic transformation.' },
  'anarchist-communalist': { score: -65, note: 'No centralized religious authority should rule, but voluntary religious association remains compatible with decentralized self-government.' },
  'green-commons': { score: -15, note: 'Religious and ecological ethics may shape local communities, but no faith should receive exclusive coercive authority over public law.' },
  'religious-traditionalist': { score: 78, note: 'Public institutions and law are expected to reflect an inherited religious moral order, with the degree of formal establishment varying by movement and country.' },
  'anti-colonial-liberation': { score: 25, note: 'Religious traditions can be sources of anti-colonial solidarity and ethical self-rule, but liberation movements differ sharply on whether religion should govern the state.' },
  communist: { score: -55, note: 'Communist traditions often ground public law in secular materialist or party-state reasoning, while the historical treatment of private religion varies widely.' },
  'anarcho-capitalist': { score: -55, note: 'Religious belief and organization are protected as voluntary choices, while no religious authority should monopolize coercive public law.' },
  'anarcho-communist': { score: -45, note: 'Centralized religious authority is rejected alongside the state, but voluntary faith communities remain compatible with decentralized association.' },
  conservative: { score: 40, note: 'Inherited religious and moral traditions may inform public culture and institutions, without requiring a formal theocracy or established faith.' },
  'civic-nationalist': { score: -15, note: 'Civic nationalism can protect religious pluralism while grounding public law primarily in shared citizenship and constitutional principles.' },
  'ethnic-nationalist': { score: 35, note: 'Religion can become part of inherited national membership and boundary-making, but ethnic nationalism is not necessarily confessional.' },
  monarchist: { score: 52, note: 'Many monarchies have historically joined dynastic legitimacy to established religion, although constitutional monarchies may be religiously neutral.' },
  theocratic: { score: 95, note: 'Religious authority, sacred law, or clerical office has a constitutive role in government and political legitimacy.' },
  'christian-democratic': { score: 62, note: 'Christian social ethics inform public institutions and social policy, while constitutional democracy and pluralist rights limit confessional authority.' },
  'religious-socialist': { score: 75, note: 'Religious ethics and communities are active sources of public justice and collective organization, without requiring clerical control of the state.' },
  populist: { score: 25, note: 'Populist movements may invoke religious majorities or secular popular sovereignty; the public role of religion is inherited from the host movement.' },
  'centrist-pragmatist': { score: -10, note: 'Religious and nonreligious citizens are treated pragmatically as participants in pluralist public life, without a fixed confessional settlement.' },
  'liberal-constitutionalist': { score: -55, note: 'Freedom of conscience and religious toleration are protected, while coercive public law is not grounded in one faith.' },
  'militarist-imperialist': { score: 18, note: 'Religion may be used as a source of civilizational legitimacy or national mobilization, but militarism does not itself determine theology.' },
  'national-socialist': { score: 30, note: 'The Nazi regime manipulated and subordinated religious institutions to racial-state authority rather than accepting an independent confessional law.' },
  'libertarian-socialist': { score: -45, note: 'The tradition is generally secular and anti-clerical in its politics, while voluntary religious association remains compatible with decentralized self-government.' },
};

const ARCHETYPES = ARCHETYPES_RAW.map((archetype) => {
  const religion = RELIGION_ARCHETYPE_DATA[archetype.id];
  return {
    ...archetype,
    profile: orientProfile({ ...archetype.profile, religion: religion.score }),
    dimensionNotes: { ...archetype.dimensionNotes, religion: religion.note },
    summaryCitationIds: ARCHETYPE_CITATIONS[archetype.id]?.summary ?? [],
    dimensionCitationIds: ARCHETYPE_CITATIONS[archetype.id]?.dimensions ?? {},
  };
});

const TAXONOMY_LABELS = RAW_TAXONOMY_LABELS.map((label) => ({
  ...label,
  axisPositions: orientProfile(label.axisPositions),
}));

const BIBLIOGRAPHY_REVIEWER = 'Politic Spectrum editorial review';

function createRelationshipSets() {
  return {
    dimensions: new Set(),
    bands: new Set(),
    taxonomyLabelIds: new Set(),
    archetypeIds: new Set(),
    profileEntries: new Set(),
    claims: new Set(),
    regions: new Set(),
    traditions: new Set(),
    periods: new Set(),
    entities: new Set(),
    works: new Set(),
    people: new Set(),
  };
}

function addRelationship(relationships, key, value) {
  if (relationships[key] && value) relationships[key].add(value);
}

function buildBibliographyRecords() {
  const researchUsage = Object.fromEntries(RESEARCH_SOURCES.map(({ id }) => [id, createRelationshipSets()]));
  const authorUsage = Object.fromEntries(Object.keys(AUTHOR_REFERENCES).map((id) => [id, createRelationshipSets()]));
  const sourceLinkUsage = Object.fromEntries(Object.keys(SOURCES).map((id) => [id, createRelationshipSets()]));
  const researchWorkUsage = Object.fromEntries(RESEARCH_WORKS.map(({ id }) => [id, createRelationshipSets()]));
  const researchPersonUsage = Object.fromEntries(RESEARCH_PEOPLE.map(({ id }) => [id, createRelationshipSets()]));
  addRelationship(researchUsage.panXu, 'claims', '6D model / multidimensionality');

  for (const dimension of DIMENSIONS) {
    const taxonomy = SPECTRUM_BANDS[dimension.id];
    for (const sourceId of taxonomy.sourceIds ?? []) {
      addRelationship(researchUsage[sourceId], 'dimensions', dimension.label);
    }
    for (const citationId of taxonomy.basisCitationIds ?? []) {
      addRelationship(authorUsage[citationId], 'dimensions', dimension.label);
    }
    taxonomy.bands.forEach((band, index) => {
      const bandId = `${dimension.id}-band-${String(index + 1).padStart(2, '0')}`;
      for (const citationId of band.citationIds ?? []) {
        addRelationship(authorUsage[citationId], 'bands', `${bandId} · ${band.label}`);
      }
    });
  }

  for (const label of TAXONOMY_LABELS) {
    for (const sourceId of label.sourceIds ?? []) {
      addRelationship(researchUsage[sourceId], 'taxonomyLabelIds', label.id);
      addRelationship(researchUsage[sourceId], 'regions', label.region);
      addRelationship(researchUsage[sourceId], 'traditions', label.family);
      addRelationship(researchUsage[sourceId], 'periods', label.period);
    }
  }

  for (const archetype of ARCHETYPES) {
    for (const citationId of archetype.summaryCitationIds ?? []) {
      addRelationship(authorUsage[citationId], 'archetypeIds', archetype.id);
    }
    for (const dimension of DIMENSIONS) {
      for (const citationId of archetype.dimensionCitationIds?.[dimension.id] ?? []) {
        addRelationship(authorUsage[citationId], 'archetypeIds', archetype.id);
        addRelationship(authorUsage[citationId], 'dimensions', dimension.label);
      }
    }
    for (const section of ['people', 'current', 'historical']) {
      for (const entry of archetype[section] ?? []) {
        const sourceLinkId = Object.entries(SOURCES).find(([, source]) => source.url === entry.source?.url)?.[0];
        if (!sourceLinkId) continue;
        addRelationship(sourceLinkUsage[sourceLinkId], 'archetypeIds', archetype.id);
        addRelationship(sourceLinkUsage[sourceLinkId], 'profileEntries', `${archetype.id} · ${section} · ${entry.name}`);
        addRelationship(sourceLinkUsage[sourceLinkId], 'entities', entry.name);
      }
    }
  }

  for (const entry of Object.values(ENCYCLOPEDIA_ENTRIES)) {
    const profileEntry = `encyclopedia:${entry.id}`;
    for (const citationId of entry.references?.authorReferenceIds ?? []) {
      addRelationship(authorUsage[citationId], 'profileEntries', profileEntry);
    }
    for (const sourceId of entry.references?.researchSourceIds ?? []) {
      addRelationship(researchUsage[sourceId], 'profileEntries', profileEntry);
    }
  }

  for (const work of RESEARCH_WORKS) {
    for (const dimensionId of work.dimensionIds ?? []) {
      const dimension = DIMENSIONS.find(({ id }) => id === dimensionId);
      addRelationship(researchWorkUsage[work.id], 'dimensions', dimension?.label);
    }
    for (const region of work.regions ?? []) addRelationship(researchWorkUsage[work.id], 'regions', region);
    for (const tradition of work.traditions ?? []) addRelationship(researchWorkUsage[work.id], 'traditions', tradition);
    for (const period of work.periods ?? []) addRelationship(researchWorkUsage[work.id], 'periods', period);
    for (const item of work.claims ?? []) {
      addRelationship(researchWorkUsage[work.id], 'claims', item.id);
      const dimension = DIMENSIONS.find(({ id }) => id === item.dimensionId);
      addRelationship(researchWorkUsage[work.id], 'dimensions', dimension?.label);
      for (let index = 0; index < BAND_RANGES.length; index += 1) {
        if (item.positionRange?.[0] <= BAND_RANGES[index][1] && item.positionRange?.[1] >= BAND_RANGES[index][0]) {
          addRelationship(researchWorkUsage[work.id], 'bands', `${item.dimensionId}-band-${String(index + 1).padStart(2, '0')}`);
        }
      }
    }
  }

  for (const person of RESEARCH_PEOPLE) {
    for (const dimension of DIMENSIONS) {
      if (person.profile?.[dimension.id]) addRelationship(researchPersonUsage[person.id], 'dimensions', dimension.label);
    }
    addRelationship(researchPersonUsage[person.id], 'regions', person.region);
    addRelationship(researchPersonUsage[person.id], 'periods', person.period);
    for (const tradition of person.traditions ?? []) addRelationship(researchPersonUsage[person.id], 'traditions', tradition);
    for (const workId of person.works ?? []) {
      addRelationship(researchPersonUsage[person.id], 'works', workId);
      addRelationship(researchWorkUsage[workId], 'people', person.fullName);
    }
    addRelationship(researchPersonUsage[person.id], 'entities', person.fullName);
  }

  const toArrays = (relationships) => Object.fromEntries(Object.entries(relationships).map(([key, values]) => [key, [...values]]));
  const rightsFor = (group, id) => RIGHTS_RECORDS[group]?.[id] ?? {};
  const reviewFor = (rights, confidence = 'medium') => ({
    status: rights.publicationStatus === 'review-required' ? 'needs-review' : 'reviewed',
    reviewer: BIBLIOGRAPHY_REVIEWER,
    reviewedAt: rights.reviewedAt ?? BIBLIOGRAPHY_ACCESS_DATE,
    confidence,
    limitations: rights.notes ?? null,
  });

  const researchRecords = RESEARCH_SOURCES.map((source) => {
    const metadata = BIBLIOGRAPHY_METADATA[source.id] ?? {};
    // An explicitly shared source retains its older public anchor and rights boundary.
    const rights = source.sourceLinkId ? rightsFor('sourceLinks', source.sourceLinkId) : rightsFor('researchSources', source.id);
    const relationships = toArrays(researchUsage[source.id]);
    if (source.sourceLinkId) {
      for (const [key, values] of Object.entries(sourceLinkUsage[source.sourceLinkId])) {
        relationships[key] = [...new Set([...relationships[key], ...values])];
      }
    }
    return {
      id: source.sourceLinkId ? `link-${source.sourceLinkId}` : `research-${source.id}`,
      citationKey: source.sourceLinkId ?? source.id,
      recordType: 'research-source',
      evidenceRole: metadata.evidenceRole ?? (metadata.sourceType?.includes('codebook') || metadata.sourceType?.includes('documentation') || metadata.sourceType?.includes('survey') ? 'methodology' : 'secondary'),
      title: metadata.title ?? source.label,
      creators: metadata.creators ?? [],
      institution: metadata.institution ?? null,
      contributors: [],
      sourceType: metadata.sourceType ?? 'research source',
      discipline: metadata.discipline ?? 'political studies',
      publicationDate: metadata.publicationDate ?? null,
      publisher: metadata.publisher ?? null,
      identifiers: metadata.identifiers ?? {},
      canonicalUrl: source.url,
      archiveUrl: metadata.archiveUrl ?? null,
      accessDate: metadata.accessDate ?? BIBLIOGRAPHY_ACCESS_DATE,
      languages: metadata.languages ?? null,
      quoteLocator: null,
      directQuote: null,
      rightsStatus: rights.rightsStatus ?? 'not recorded',
      license: rights.license ?? 'not recorded',
      commercialUse: rights.commercialUse ?? 'not recorded',
      publicationStatus: rights.publicationStatus ?? 'not recorded',
      accessStatus: rights.rightsStatus === 'open-license' ? 'open-license' : rights.publicationStatus === 'review-required' ? 'rights-review' : 'link-only',
      editorialAction: rights.action ?? 'not recorded',
      review: reviewFor(rights, metadata.confidence),
      description: metadata.description ?? source.note,
      note: source.note,
      relationships,
      citationIds: { researchSourceIds: [source.id], authorReferenceIds: [], sourceLinkIds: source.sourceLinkId ? [source.sourceLinkId] : [], researchWorkIds: [], researchPersonIds: [] },
    };
  });

  const authorRecords = Object.entries(AUTHOR_REFERENCES).map(([id, reference]) => {
    const rights = rightsFor('authorReferences', id);
    const confidence = reference.kind === 'direct' ? 'high' : 'medium';
    return {
      id: `author-${id}`,
      citationKey: id,
      recordType: 'author-reference',
      evidenceRole: reference.kind === 'scholarly' ? 'secondary' : 'primary',
      title: reference.work,
      creators: [reference.author],
      institution: null,
      contributors: [],
      sourceType: reference.kind === 'direct' ? 'primary text / quotation anchor' : reference.kind === 'scholarly' ? 'scholarly work' : 'primary text',
      discipline: 'political thought',
      publicationDate: reference.year ?? null,
      publisher: null,
      identifiers: {},
      canonicalUrl: reference.url,
      archiveUrl: null,
      accessDate: BIBLIOGRAPHY_ACCESS_DATE,
      languages: null,
      quoteLocator: reference.locator ?? null,
      directQuote: reference.quote ?? null,
      rightsStatus: rights.rightsStatus ?? 'not recorded',
      license: rights.license ?? 'not recorded',
      commercialUse: rights.commercialUse ?? 'not recorded',
      publicationStatus: rights.publicationStatus ?? 'not recorded',
      accessStatus: rights.rightsStatus === 'open-license' ? 'open-license' : rights.publicationStatus === 'review-required' ? 'rights-review' : 'link-only',
      editorialAction: rights.action ?? 'not recorded',
      review: reviewFor(rights, confidence),
      description: reference.context ?? `Author and work used as an evidence anchor for political-theory interpretation.`,
      note: reference.context ?? null,
      relationships: { ...toArrays(authorUsage[id]), periods: reference.year ? [reference.year] : [] },
      citationIds: { researchSourceIds: [], authorReferenceIds: [id], sourceLinkIds: [], researchWorkIds: [], researchPersonIds: [] },
    };
  });

  const sharedSourceLinkIds = new Set(RESEARCH_SOURCES.map(({ sourceLinkId }) => sourceLinkId).filter(Boolean));
  const sourceLinkRecords = Object.entries(SOURCES).filter(([id]) => !sharedSourceLinkIds.has(id)).map(([id, source]) => {
    const rights = rightsFor('sourceLinks', id);
    return {
      id: `link-${id}`,
      citationKey: id,
      recordType: 'source-link',
      evidenceRole: 'contextual',
      title: `Source link — ${source.label}`,
      creators: [],
      institution: source.label,
      contributors: [],
      sourceType: 'institutional or profile source link',
      discipline: 'contextual evidence',
      publicationDate: null,
      publisher: null,
      identifiers: {},
      canonicalUrl: source.url,
      archiveUrl: null,
      accessDate: source.accessDate ?? BIBLIOGRAPHY_ACCESS_DATE,
      languages: null,
      quoteLocator: null,
      directQuote: null,
      rightsStatus: rights.rightsStatus ?? 'not recorded',
      license: rights.license ?? 'not recorded',
      commercialUse: rights.commercialUse ?? 'not recorded',
      publicationStatus: rights.publicationStatus ?? 'not recorded',
      accessStatus: rights.rightsStatus === 'open-license' ? 'open-license' : rights.publicationStatus === 'review-required' ? 'rights-review' : 'link-only',
      editorialAction: rights.action ?? 'not recorded',
      review: reviewFor(rights, 'medium'),
      description: 'External source link used to contextualize a person, movement, country, city, or historical example. The app publishes an independent summary rather than reproducing the linked source.',
      note: null,
      relationships: toArrays(sourceLinkUsage[id]),
      citationIds: { researchSourceIds: [], authorReferenceIds: [], sourceLinkIds: [id], researchWorkIds: [], researchPersonIds: [] },
    };
  });

  const researchWorkRecords = RESEARCH_WORKS.map((work) => {
    const rights = rightsFor('researchWorks', work.id);
    return {
      id: `work-${work.id}`,
      citationKey: work.id,
      recordType: 'research-work',
      evidenceRole: work.evidenceRole,
      title: work.title,
      creators: work.creators,
      institution: null,
      contributors: [],
      sourceType: work.sourceType,
      discipline: work.discipline,
      publicationDate: work.publicationDate,
      publisher: work.publisher,
      identifiers: {},
      canonicalUrl: work.canonicalUrl,
      archiveUrl: null,
      accessDate: BIBLIOGRAPHY_ACCESS_DATE,
      languages: work.originalLanguage,
      quoteLocator: null,
      directQuote: null,
      rightsStatus: rights.rightsStatus ?? 'not recorded',
      license: rights.license ?? 'not recorded',
      commercialUse: rights.commercialUse ?? 'not recorded',
      publicationStatus: rights.publicationStatus ?? 'not recorded',
      accessStatus: rights.rightsStatus === 'open-license' ? 'open-license' : rights.publicationStatus === 'review-required' ? 'rights-review' : 'link-only',
      editorialAction: rights.action ?? 'not recorded',
      review: {
        status: work.review.status,
        reviewer: BIBLIOGRAPHY_REVIEWER,
        reviewedAt: rights.reviewedAt ?? RESEARCH_REVIEW_DATE,
        confidence: work.review.confidence,
        limitations: [work.translationNote, rights.notes].filter(Boolean).join(' '),
      },
      description: work.context,
      note: work.translationNote,
      researchMeta: {
        originalLanguage: work.originalLanguage,
        translationNote: work.translationNote,
        regions: work.regions,
        periods: work.periods,
        traditions: work.traditions,
        dimensionIds: work.dimensionIds,
        claims: work.claims,
      },
      relationships: toArrays(researchWorkUsage[work.id]),
      citationIds: { researchSourceIds: [], authorReferenceIds: [], sourceLinkIds: [], researchWorkIds: [work.id], researchPersonIds: [] },
    };
  });

  const researchPersonRecords = RESEARCH_PEOPLE.map((person) => ({
    id: `person-${person.id}`,
    citationKey: person.id,
    recordType: 'research-person',
    evidenceRole: 'contextual',
    title: person.fullName,
    creators: [person.fullName],
    institution: person.affiliations?.join(' · ') ?? null,
    contributors: person.roles,
    sourceType: person.sourceType,
    discipline: person.discipline,
    publicationDate: person.dates,
    publisher: null,
    identifiers: {},
    canonicalUrl: person.canonicalUrl,
    archiveUrl: null,
    accessDate: BIBLIOGRAPHY_ACCESS_DATE,
    languages: null,
    quoteLocator: null,
    directQuote: null,
    rightsStatus: 'copyrighted / link-only',
    license: 'No reuse licence identified for the referenced profile, archive, or institutional page.',
    commercialUse: 'Independent summaries and links only; no expressive text or media reproduced.',
    publicationStatus: 'link-only',
    accessStatus: 'link-only',
    editorialAction: 'Link to the record and explain the evidence boundary; do not imply an exact ideological match.',
    review: {
      status: 'reviewed',
      reviewer: BIBLIOGRAPHY_REVIEWER,
      reviewedAt: RESEARCH_REVIEW_DATE,
      confidence: person.confidence === 'documented' ? 'high' : 'medium',
      limitations: person.context,
    },
    description: person.context,
    note: person.selfDescription,
    researchMeta: {
      dates: person.dates,
      roles: person.roles,
      region: person.region,
      period: person.period,
      selfDescription: person.selfDescription,
      affiliations: person.affiliations,
      traditions: person.traditions,
      confidence: person.confidence,
      works: person.works,
      profile: person.profile,
      claimEvidence: person.claimEvidence,
      relatedPeople: person.relatedPeople,
    },
    relationships: toArrays(researchPersonUsage[person.id]),
    citationIds: { researchSourceIds: [], authorReferenceIds: [], sourceLinkIds: [], researchWorkIds: [], researchPersonIds: [person.id] },
  }));

  return [...researchRecords, ...authorRecords, ...sourceLinkRecords, ...researchWorkRecords, ...researchPersonRecords].map((record) => ({
    ...record,
    relationships: {
      ...record.relationships,
      dimensions: record.relationships.dimensions ?? [],
      bands: record.relationships.bands ?? [],
      taxonomyLabelIds: record.relationships.taxonomyLabelIds ?? [],
      archetypeIds: record.relationships.archetypeIds ?? [],
      profileEntries: record.relationships.profileEntries ?? [],
      claims: record.relationships.claims ?? [],
      regions: record.relationships.regions ?? [],
      traditions: record.relationships.traditions ?? [],
      periods: record.relationships.periods ?? [],
      entities: record.relationships.entities ?? [],
      works: record.relationships.works ?? [],
      people: record.relationships.people ?? [],
      dimensionIds: record.relationships.dimensions.map((label) => DIMENSIONS.find((dimension) => dimension.label === label)?.id ?? label),
    },
  }));
}

const BIBLIOGRAPHY_RECORDS = buildBibliographyRecords();
const BIBLIOGRAPHY_BY_ID = Object.fromEntries(BIBLIOGRAPHY_RECORDS.map((record) => [record.id, record]));

export {
  ARCHETYPES,
  BAND_RANGES,
  DEFAULT_SCORES,
  DIMENSIONS,
  FLIPPED_DIMENSION_IDS,
  OPTION_LABELS,
  OPTION_VALUES,
  PALETTES,
  QUESTIONS,
  RESEARCH_SOURCES,
  RIGHTS_RECORDS,
  SOURCES,
  SPECTRUM_BANDS,
  TAXONOMY_LABELS,
  AUTHOR_REFERENCES,
  ENCYCLOPEDIA_ENTRIES,
  BIBLIOGRAPHY_ACCESS_DATE,
  BIBLIOGRAPHY_BY_ID,
  BIBLIOGRAPHY_RECORDS,
  RESEARCH_BACKLOG,
  RESEARCH_COVERAGE_MATRIX,
  RESEARCH_PEOPLE,
  RESEARCH_POLITICAL_FORMS,
  RESEARCH_RELATIONSHIPS,
  RESEARCH_SECTIONS,
  RESEARCH_WORKS,
};
