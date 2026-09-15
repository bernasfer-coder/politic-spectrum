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
  { id: 'panXu', label: 'Pan & Xu — China’s Ideological Spectrum', url: 'https://www.journals.uchicago.edu/doi/abs/10.1086/694255', note: 'Evidence that political preferences can be multidimensional rather than a single left–right line.' },
  { id: 'sepSocialism', label: 'Stanford Encyclopedia — Socialism', url: 'https://plato.stanford.edu/entries/socialism/', note: 'Definitions and internal diversity of socialist traditions.' },
  { id: 'sepLuxemburg', label: 'Stanford Encyclopedia — Rosa Luxemburg', url: 'https://plato.stanford.edu/entries/luxemburg/', note: 'Luxemburg’s relationship between socialism, democracy, mass participation, and criticism of authoritarian revolutionary models.' },
  { id: 'sepLiberalism', label: 'Stanford Encyclopedia — Liberalism', url: 'https://plato.stanford.edu/entries/liberalism/', note: 'Liberal approaches to liberty, property, authority, and the state.' },
  { id: 'sepLibertarianism', label: 'Stanford Encyclopedia — Libertarianism', url: 'https://plato.stanford.edu/entries/libertarianism/', note: 'Individual liberty, coercion, property, and market arguments.' },
  { id: 'sepMill', label: 'Stanford Encyclopedia — Mill’s Moral and Political Philosophy', url: 'https://plato.stanford.edu/entries/mill-moral-political/', note: 'Mill’s liberty principle, individuality, free discussion, and limits on coercion.' },
  { id: 'sepLibertyPositiveNegative', label: 'Stanford Encyclopedia — Positive and Negative Liberty', url: 'https://plato.stanford.edu/entries/liberty-positive-negative/', note: 'The distinction between freedom as non-interference and freedom as self-direction, including its classical-liberal history.' },
  { id: 'sepConservatism', label: 'Stanford Encyclopedia — Conservatism', url: 'https://plato.stanford.edu/entries/conservatism/', note: 'Tradition, authority, gradual change, and paternalism.' },
  { id: 'sepReligionPolitics', label: 'Stanford Encyclopedia — Religion and Political Theory', url: 'https://plato.stanford.edu/entries/religion-politics/', note: 'The relationship between religious reasons, political authority, coercive law, secularism, and religious pluralism.' },
  { id: 'sepNationalism', label: 'Stanford Encyclopedia — Nationalism', url: 'https://plato.stanford.edu/entries/nationalism/', note: 'Distinction between civic, liberal, conservative, and ethnic forms of nationalism.' },
  { id: 'vdem', label: 'V-Dem Democracy Indices Codebook', url: 'https://www.v-dem.net/documents/55/codebook.pdf', note: 'Operationalization of liberal democracy, civil liberties, rule of law, and limits on executive power.' },
  { id: 'wvs', label: 'World Values Survey — Findings & Insights', url: 'https://www.worldvaluessurvey.org/WVSContents.jsp?CMSID=Findings', note: 'Empirical traditional/secular-rational and survival/self-expression value dimensions.' },
  { id: 'ches', label: 'Chapel Hill Expert Survey Codebook', url: 'https://www.chesdata.eu/s/2014_CHES_codebook.pdf', note: 'Comparable issue scales for economic, lifestyle, religion, immigration, multiculturalism, and decentralization positions.' },
  { id: 'manifesto', label: 'Manifesto Project Coding Handbook', url: 'https://manifesto-project.wzb.eu/down/papers/handbook_v4.pdf', note: 'Cross-national coding of controlled economy, social justice, political system, and internationalism.' },
  { id: 'foreignPolicy', label: 'Oxford — Party Politics of Foreign and Security Policy', url: 'https://academic.oup.com/fpa/article/16/4/515/5911933', note: 'Comparative evidence on dovish/hawkish, multilateralist, alliance, and interventionist party positions.' },
  { id: 'oecdWelfareModels', label: 'OECD — Welfare-state models and social protection', url: 'https://www.oecd.org/en/publications/delivering-quality-education-and-health-care-to-all_83025c02-en/full-report/setting-the-scene_52c47f8b.html', note: 'Comparative institutional context for universalism, decommodification, public services, and social-democratic welfare regimes.' },
  { id: 'ghdiGodesberg', label: 'German History in Documents and Images — Godesberg Program', url: 'https://germanhistorydocs.org/en/occupation-and-the-emergence-of-two-states-1945-1961/godesberg-program-of-the-spd-november-1959', note: 'German-language historical programme record documenting the SPD’s post-war democratic-socialist reorientation and its relationship to pluralism, freedom, and social justice.' },
  { id: 'jauresArchive', label: 'Jean Jaurès Archive — Socialist History of the French Revolution', url: 'https://www.marxists.org/archive/jaures/index.htm', note: 'French socialist primary-source archive used for the relationship among republican democracy, social transformation, and socialist unity.' },
  { id: 'openTextbook', label: 'Political Ideologies and Worldviews — Open Textbook', url: 'https://open.umn.edu/opentextbooks/textbooks/political-ideologies-and-worldviews-an-introduction', note: 'Comparative introduction to ideology, including liberalism, conservatism, socialism, anarchism, nationalism, populism, fascism, Islamism, Confucianism, environmentalism, and feminism.' },
  { id: 'sepAnarchism', label: 'Stanford Encyclopedia — Anarchism', url: 'https://plato.stanford.edu/entries/anarchism/', note: 'Philosophical distinctions among anarchist arguments and traditions.' },
  { id: 'socialEcologyMunicipalism', label: 'Institute for Social Ecology — Bookchin interview on Libertarian Municipalism', url: 'https://social-ecology.org/wp/2001/10/harbinger-vol-2-no-1-%E2%80%94-murray-bookchin-interview/', note: 'Bookchin’s explanation of communalism and libertarian municipalism, used as a later variant rather than a synonym for all anarchism.' },
  { id: 'makhnoRuralAnarchism', label: 'Colin Darch — Nestor Makhno and Rural Anarchism in Ukraine', url: 'https://www.jstor.org/stable/j.ctv16zjhb1', note: 'Scholarly historical study of the Makhnovist movement, its rural social base, military context, and contested interpretation.' },
  { id: 'sepFascism', label: 'Stanford Encyclopedia — Fascism', url: 'https://plato.stanford.edu/entries/fascism/', note: 'Conceptual and historical analysis of fascist ideology and its variants.' },
  { id: 'sepFeminism', label: 'Stanford Encyclopedia — Feminist Philosophy', url: 'https://plato.stanford.edu/entries/feminism/', note: 'Overview of feminist philosophical traditions and disagreements.' },
  { id: 'sepPopulism', label: 'Stanford Encyclopedia — Populism', url: 'https://plato.stanford.edu/entries/populism/', note: 'Conceptual debates about populism as a thin ideology, discourse, or political style.' },
  { id: 'sepConfucianism', label: 'Stanford Encyclopedia — Chinese Social and Political Thought', url: 'https://seop.illc.uva.nl/entries/chinese-social-political/', note: 'Chinese political traditions including Confucian accounts of order and governance.' },
  { id: 'sepLegalism', label: 'Stanford Encyclopedia — Legalism', url: 'https://plato.stanford.edu/entries/chinese-legalism/', note: 'Historical scholarship on the fa tradition and classical Chinese statecraft.' },
  { id: 'sepMedieval', label: 'Stanford Encyclopedia — Medieval Political Philosophy', url: 'https://plato.stanford.edu/entries/medieval-political/', note: 'Historical political concepts including kingship, republicanism, law, and authority.' },
  { id: 'ushmmFascism', label: 'United States Holocaust Memorial Museum — Fascism', url: 'https://encyclopedia.ushmm.org/content/en/article/fascism-1', note: 'Historical context for fascism and the Nazi regime; used for warning and contextualization.' },
  { id: 'ushmmCommunism', label: 'United States Holocaust Memorial Museum — Communism', url: 'https://encyclopedia.ushmm.org/content/en/article/communism-1', note: 'Bounded historical context on the Russian Revolution, the Soviet Union, Stalinist collectivization, industrial quotas, and the distinction between communist theory and later regimes.' },
  { id: 'bpbFascism', label: 'Bundeszentrale für politische Bildung — Faschismus', url: 'https://www.bpb.de/themen/rechtsextremismus/dossier-rechtsextremismus/500776/faschismus/', note: 'German-language institutional history distinguishing Italian Fascism, National Socialism, and broader uses of the fascism label.' },
  { id: 'bpbNationalSocialism', label: 'Bundeszentrale für politische Bildung — National Socialism', url: 'https://www.bpb.de/kurz-knapp/lexika/politiklexikon/17892/nationalsozialismus/', note: 'German-language reference on Nazi ideology, dictatorship, racial hierarchy, antisemitism, war, and the relationship between party and state.' },
  { id: 'panAfricanism', label: 'African Affairs — Pan-Africanism', url: 'https://academic.oup.com/afraf/article/125/498/1/8512174', note: 'Scholarly treatment of Pan-African political thought and transnational solidarity.' },
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
    name: 'Historical fascist / Nazi-like',
    accent: '#ff9f43',
    profile: { economic: -18, social: 92, authority: 98, identity: 96, foreign: 90 },
    summary: 'A historical warning profile: extreme hierarchy, authoritarian rule, aggressive nationalism, and militarized foreign policy.',
    dimensionNotes: {
      economic: 'Private property can remain, but production and labor are subordinated to state-defined national goals and corporatist control.',
      social: 'Rigid hierarchy, traditional gender roles, racial ordering, and enforced conformity define the social vision.',
      authority: 'The state claims total political authority, suppresses independent organizations, and demands personal loyalty to the regime.',
      identity: 'The nation is defined as an organic, hierarchical, and often racial community whose interests override individual equality.',
      foreign: 'Military power, territorial expansion, and the remaking of neighboring states are treated as central instruments of politics.',
    },
    warning: 'This is a historical-analytical category, not a legitimate contemporary political recommendation.',
    people: [
      { name: 'Adolf Hitler', detail: 'Leader of Nazi Germany; the regime combined racial dictatorship, totalitarian control, and expansionist war.', source: SOURCES.hitler },
      { name: 'Benito Mussolini', detail: 'Founder of Italian Fascism and dictator of Italy from 1925 to 1943.', source: SOURCES.mussolini },
      { name: 'Joseph Goebbels', detail: 'Nazi propaganda minister and a central figure in the regime’s totalitarian apparatus.', source: SOURCES.holocaust },
    ],
    current: [],
    historical: [
      { name: 'Nazi Germany — Berlin', detail: 'Racial dictatorship, one-party rule, mass persecution, and expansionist war.', source: SOURCES.hitler },
      { name: 'Fascist Italy — Rome', detail: 'The first fascist regime, with corporatist institutions and authoritarian nationalism.', source: SOURCES.mussolini },
      { name: 'Occupied Europe — state systems under Nazi rule', detail: 'Different territories experienced the ideology and coercion unevenly; the label is not a claim of identical conditions.', source: SOURCES.holocaust },
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
      { name: 'Hannah Arendt', detail: 'A major analyst of totalitarianism; included as a critic and historical interpreter, not a Nazi representative.', source: SOURCES.holocaust },
    ],
    current: [
      { name: 'No legitimate contemporary country match', detail: 'The profile is historical and should not be used to casually label contemporary states or opponents.', source: SOURCES.hitler },
      { name: 'Neo-Nazi organizations', detail: 'Contemporary extremist groups vary in organization but retain the warning signs of racial supremacy and authoritarian violence.', source: SOURCES.holocaust },
      { name: 'Historical comparison only', detail: 'Similar rhetoric does not establish identity; evidence of institutions, violence, and explicit doctrine is required.', source: SOURCES.hitler },
    ],
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
    const rights = rightsFor('researchSources', source.id);
    return {
      id: `research-${source.id}`,
      citationKey: source.id,
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
      accessDate: BIBLIOGRAPHY_ACCESS_DATE,
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
      relationships: toArrays(researchUsage[source.id]),
      citationIds: { researchSourceIds: [source.id], authorReferenceIds: [], sourceLinkIds: [], researchWorkIds: [], researchPersonIds: [] },
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

  const sourceLinkRecords = Object.entries(SOURCES).map(([id, source]) => {
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
      accessDate: BIBLIOGRAPHY_ACCESS_DATE,
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
