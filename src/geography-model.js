import { GEOGRAPHY_CASES, GEOGRAPHY_CONTINENTS, GEOGRAPHY_LABELS, GEOGRAPHY_PLACES, GEOGRAPHY_RELATIONSHIPS } from './content/geography.js';
import { COUNTRY_OPTIONS } from './geography-map-model.js';

export const GEOGRAPHY_PERIODS = [
  { id: 'before-1500', label: 'Before 1500', start: -10000, end: 1499 },
  { id: '1500-1799', label: '1500–1799', start: 1500, end: 1799 },
  { id: '1800-1899', label: '1800–1899', start: 1800, end: 1899 },
  { id: '1900-1999', label: '1900–1999', start: 1900, end: 1999 },
  { id: '2000-onward', label: '2000 onward · dated snapshots', start: 2000, end: 9999 },
];
export const GEOGRAPHY_DEFAULTS = Object.freeze({ q: '', continent: 'all', region: 'all', country: 'all', place: 'all', label: 'all', relationship: 'all', period: 'all', view: 'cards', case: '' });
export const PLACES_BY_ID = Object.fromEntries(GEOGRAPHY_PLACES.map((place) => [place.id, place]));
export const LABELS_BY_ID = Object.fromEntries(GEOGRAPHY_LABELS.map((label) => [label.id, label]));
const allowed = {
  continent: GEOGRAPHY_CONTINENTS,
  region: [...new Set(GEOGRAPHY_PLACES.flatMap(({ regions }) => regions))],
  country: COUNTRY_OPTIONS.map(({ id }) => id), place: GEOGRAPHY_PLACES.map(({ id }) => id),
  label: GEOGRAPHY_LABELS.map(({ id }) => id), relationship: GEOGRAPHY_RELATIONSHIPS.map(({ id }) => id),
  period: GEOGRAPHY_PERIODS.map(({ id }) => id), view: ['cards', 'timeline'], case: GEOGRAPHY_CASES.map(({ id }) => id),
};

// URLSearchParams tolerates malformed percent escapes; unknown IDs never become content or markup.
export function readGeographyState(hash = '') {
  const state = { ...GEOGRAPHY_DEFAULTS };
  if (!/^#geography(?:\?|$)/.test(hash)) return state;
  const params = new URLSearchParams(hash.split('?')[1] ?? '');
  state.q = (params.get('q') ?? '').slice(0, 200);
  for (const [key, values] of Object.entries(allowed)) {
    if (values.includes(params.get(key))) state[key] = params.get(key);
  }
  return state;
}

export function geographyHash(state) {
  const params = new URLSearchParams();
  for (const [key, initial] of Object.entries(GEOGRAPHY_DEFAULTS)) {
    if (state[key] && state[key] !== initial) params.set(key, String(state[key]));
  }
  const query = params.toString();
  return `#geography${query ? `?${query}` : ''}`;
}

const normalize = (text) => text.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/[’'ʿ]/g, '');
export function filterGeographyCases(filters, cases = GEOGRAPHY_CASES) {
  const state = { ...GEOGRAPHY_DEFAULTS, ...filters };
  const query = normalize(state.q.trim());
  const period = GEOGRAPHY_PERIODS.find(({ id }) => id === state.period);
  return cases.filter((item) => {
    const place = PLACES_BY_ID[item.placeId];
    const label = LABELS_BY_ID[item.labelId];
    const search = normalize([label.name, ...label.aliases, label.family, place.name, place.modernLocation, item.actor, item.historicalSetting, item.claim].join(' '));
    return (!query || search.includes(query))
      && (state.continent === 'all' || place.continents.includes(state.continent))
      && (state.region === 'all' || place.regions.includes(state.region))
      && (state.country === 'all' || place.countryIds.includes(state.country))
      && (state.place === 'all' || item.placeId === state.place)
      && (state.label === 'all' || item.labelId === state.label)
      && (state.relationship === 'all' || item.relationship === state.relationship)
      && (!period || (item.startYear <= period.end && item.endYear >= period.start))
      && (!state.case || item.id === state.case);
  }).sort((a, b) => a.startYear - b.startYear || a.endYear - b.endYear || a.id.localeCompare(b.id));
}
