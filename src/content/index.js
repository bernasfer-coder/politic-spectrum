import { ARCHETYPE_CITATIONS, AUTHOR_REFERENCES, BAND_CITATIONS } from './references.js';
import { RIGHTS_RECORDS } from './rights.js';
import { TAXONOMY_LABELS as RAW_TAXONOMY_LABELS } from './taxonomy.js';
import { BIBLIOGRAPHY_ACCESS_DATE, BIBLIOGRAPHY_METADATA } from './bibliography.js';
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
];

const FLIPPED_DIMENSION_IDS = ['economic', 'social', 'identity', 'foreign'];
const FLIPPED_DIMENSION_SET = new Set(FLIPPED_DIMENSION_IDS);
const DEFAULT_SCORES = Object.fromEntries(DIMENSIONS.map(({ id }) => [id, 0]));
const OPTION_VALUES = [-100, -50, 0, 50, 100];
const OPTION_LABELS = ['Strongly disagree', 'Disagree', 'Unsure / mixed', 'Agree', 'Strongly agree'];

const RESEARCH_SOURCES = [
  { id: 'panXu', label: 'Pan & Xu — China’s Ideological Spectrum', url: 'https://www.journals.uchicago.edu/doi/abs/10.1086/694255', note: 'Evidence that political preferences can be multidimensional rather than a single left–right line.' },
  { id: 'sepSocialism', label: 'Stanford Encyclopedia — Socialism', url: 'https://plato.stanford.edu/entries/socialism/', note: 'Definitions and internal diversity of socialist traditions.' },
  { id: 'sepLiberalism', label: 'Stanford Encyclopedia — Liberalism', url: 'https://plato.stanford.edu/entries/liberalism/', note: 'Liberal approaches to liberty, property, authority, and the state.' },
  { id: 'sepLibertarianism', label: 'Stanford Encyclopedia — Libertarianism', url: 'https://plato.stanford.edu/entries/libertarianism/', note: 'Individual liberty, coercion, property, and market arguments.' },
  { id: 'sepConservatism', label: 'Stanford Encyclopedia — Conservatism', url: 'https://plato.stanford.edu/entries/conservatism/', note: 'Tradition, authority, gradual change, and paternalism.' },
  { id: 'sepNationalism', label: 'Stanford Encyclopedia — Nationalism', url: 'https://plato.stanford.edu/entries/nationalism/', note: 'Distinction between civic, liberal, conservative, and ethnic forms of nationalism.' },
  { id: 'vdem', label: 'V-Dem Democracy Indices Codebook', url: 'https://www.v-dem.net/documents/55/codebook.pdf', note: 'Operationalization of liberal democracy, civil liberties, rule of law, and limits on executive power.' },
  { id: 'wvs', label: 'World Values Survey — Findings & Insights', url: 'https://www.worldvaluessurvey.org/WVSContents.jsp?CMSID=Findings', note: 'Empirical traditional/secular-rational and survival/self-expression value dimensions.' },
  { id: 'ches', label: 'Chapel Hill Expert Survey Codebook', url: 'https://www.chesdata.eu/s/2014_CHES_codebook.pdf', note: 'Comparable issue scales for economic, lifestyle, religion, immigration, multiculturalism, and decentralization positions.' },
  { id: 'manifesto', label: 'Manifesto Project Coding Handbook', url: 'https://manifesto-project.wzb.eu/down/papers/handbook_v4.pdf', note: 'Cross-national coding of controlled economy, social justice, political system, and internationalism.' },
  { id: 'foreignPolicy', label: 'Oxford — Party Politics of Foreign and Security Policy', url: 'https://academic.oup.com/fpa/article/16/4/515/5911933', note: 'Comparative evidence on dovish/hawkish, multilateralist, alliance, and interventionist party positions.' },
  { id: 'openTextbook', label: 'Political Ideologies and Worldviews — Open Textbook', url: 'https://open.umn.edu/opentextbooks/textbooks/political-ideologies-and-worldviews-an-introduction', note: 'Comparative introduction to ideology, including liberalism, conservatism, socialism, anarchism, nationalism, populism, fascism, Islamism, Confucianism, environmentalism, and feminism.' },
  { id: 'sepAnarchism', label: 'Stanford Encyclopedia — Anarchism', url: 'https://plato.stanford.edu/entries/anarchism/', note: 'Philosophical distinctions among anarchist arguments and traditions.' },
  { id: 'sepFascism', label: 'Stanford Encyclopedia — Fascism', url: 'https://plato.stanford.edu/entries/fascism/', note: 'Conceptual and historical analysis of fascist ideology and its variants.' },
  { id: 'sepFeminism', label: 'Stanford Encyclopedia — Feminist Philosophy', url: 'https://plato.stanford.edu/entries/feminism/', note: 'Overview of feminist philosophical traditions and disagreements.' },
  { id: 'sepPopulism', label: 'Stanford Encyclopedia — Populism', url: 'https://plato.stanford.edu/entries/populism/', note: 'Conceptual debates about populism as a thin ideology, discourse, or political style.' },
  { id: 'sepConfucianism', label: 'Stanford Encyclopedia — Chinese Social and Political Thought', url: 'https://seop.illc.uva.nl/entries/chinese-social-political/', note: 'Chinese political traditions including Confucian accounts of order and governance.' },
  { id: 'sepLegalism', label: 'Stanford Encyclopedia — Legalism', url: 'https://plato.stanford.edu/entries/chinese-legalism/', note: 'Historical scholarship on the fa tradition and classical Chinese statecraft.' },
  { id: 'sepMedieval', label: 'Stanford Encyclopedia — Medieval Political Philosophy', url: 'https://plato.stanford.edu/entries/medieval-political/', note: 'Historical political concepts including kingship, republicanism, law, and authority.' },
  { id: 'ushmmFascism', label: 'United States Holocaust Memorial Museum — Fascism', url: 'https://encyclopedia.ushmm.org/content/en/article/fascism-1', note: 'Historical context for fascism and the Nazi regime; used for warning and contextualization.' },
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
    return [id, FLIPPED_DIMENSION_SET.has(id) && Number.isFinite(value) ? -value : value];
  }));
}

const ARCHETYPES = ARCHETYPES_RAW.map((archetype) => ({
  ...archetype,
  profile: orientProfile(archetype.profile),
  summaryCitationIds: ARCHETYPE_CITATIONS[archetype.id]?.summary ?? [],
  dimensionCitationIds: ARCHETYPE_CITATIONS[archetype.id]?.dimensions ?? {},
}));

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
  addRelationship(researchUsage.panXu, 'claims', '5D model / multidimensionality');

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
