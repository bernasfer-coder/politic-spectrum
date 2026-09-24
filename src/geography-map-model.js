import { geoEqualEarth, geoGraticule10, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import world from 'world-atlas/countries-110m.json' with { type: 'json' };
import { GEOGRAPHY_COUNTRIES, GEOGRAPHY_PLACES } from './content/geography.js';

export const MAP_WIDTH = 960;
export const MAP_HEIGHT = 500;
export const MAP_MAX_ZOOM = 10;
export const WORLD_VIEW = Object.freeze({ x: 0, y: 0, k: 1 });
const projection = geoEqualEarth().fitExtent([[16, 16], [944, 484]], { type: 'Sphere' });
const path = geoPath(projection);
const atlasIds = { '004': 'afghanistan', '076': 'brazil', '050': 'bangladesh', '144': 'sri-lanka', '524': 'nepal', '148': 'chad', '250': 'france', '276': 'germany', '288': 'ghana', '356': 'india', '360': 'indonesia', '380': 'italy', '392': 'japan', '404': 'kenya', '466': 'mali', '562': 'niger', '566': 'nigeria', '586': 'pakistan', '608': 'philippines', '764': 'thailand', '458': 'malaysia', '064': 'bhutan', '231': 'ethiopia', '484': 'mexico', '620': 'portugal', '400': 'jordan', '414': 'kuwait', '512': 'oman', '682': 'saudi-arabia', '704': 'vietnam', '508': 'mozambique', '710': 'south-africa', '724': 'spain', '776': 'tonga', '646': 'rwanda', '686': 'senegal', '270': 'gambia', '694': 'sierra-leone', '430': 'liberia', '384': 'cote-divoire', '818': 'egypt', '012': 'algeria', '788': 'tunisia', '434': 'libya', '504': 'morocco', '729': 'sudan', '834': 'tanzania', '800': 'uganda', '716': 'zimbabwe', '368': 'iraq', '364': 'iran', '760': 'syria', '792': 'turkey' };
atlasIds['120'] = 'cameroon';
atlasIds['854'] = 'burkina-faso';
atlasIds['702'] = 'singapore';
const atlasPlaceIds = { '010': ['antarctica'] };
const atlasNames = Object.fromEntries(GEOGRAPHY_COUNTRIES.map(({ id, name }) => [id, name]));

// Dataset IDs are geographic locators, not recognition of sovereignty or ideology.
// Named fallback IDs keep the non-ISO areas independently selectable. Tiny
// catalogued countries omitted by the 1:110m geometry receive an explicit
// point locator rather than being silently dropped from the map.
const mappedWorldCountries = feature(world, world.objects.countries).features.map((item) => {
  const id = atlasIds[item.id] ?? (item.id ? `map-${item.id}` : `map-${item.properties.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}`);
  return { id, name: atlasNames[id] ?? item.properties.name, path: path(item), bounds: path.bounds(item), placeIds: atlasPlaceIds[item.id] ?? [] };
});
const MAP_FALLBACK_COORDINATES = { tonga: [-175.2, -21.1], 'map-882': [-172.1, -13.8], singapore: [103.8198, 1.3521] };
const fallbackCountries = GEOGRAPHY_COUNTRIES.filter(({ id }) => !mappedWorldCountries.some((country) => country.id === id) && MAP_FALLBACK_COORDINATES[id]).map(({ id, name }) => {
  const geometry = { type: 'Point', coordinates: MAP_FALLBACK_COORDINATES[id] };
  return { id, name, path: path(geometry), bounds: path.bounds(geometry), placeIds: [], isLocator: true };
});
export const MAP_COUNTRIES = [...mappedWorldCountries, ...fallbackCountries].sort((a, b) => a.name.localeCompare(b.name, 'en'));
export const MAP_COUNTRIES_BY_ID = Object.fromEntries(MAP_COUNTRIES.map((country) => [country.id, country]));
export const MAP_OUTLINE = path({ type: 'Sphere' });
export const MAP_GRATICULE = path(geoGraticule10());
export const COUNTRY_OPTIONS = MAP_COUNTRIES.map(({ id, name }) => ({ id, name }));

// Rounded editorial navigation anchors, not surveyed points or territorial extents.
export const MAP_PLACE_MARKERS = [
  { id: 'singapore', coordinates: [103.8198, 1.3521], shortName: 'Singapore' },
  { id: 'baghdad', coordinates: [44.4, 33.3], shortName: 'Baghdad' },
  { id: 'damascus', coordinates: [36.3, 33.5], shortName: 'Damascus' },
  { id: 'jerusalem', coordinates: [35.2, 31.8], shortName: 'Jerusalem', dx: -15, dy: 18 },
  { id: 'northern-syria', coordinates: [40, 36.6], shortName: 'Northern Syria', dx: 15, dy: -14 },
  { id: 'antarctica', coordinates: [0, -80], shortName: 'Antarctica', dx: 15, dy: -14 },
].map((marker) => ({ ...marker, point: projection(marker.coordinates), name: GEOGRAPHY_PLACES.find(({ id }) => id === marker.id).name }));

export function constrainMapView({ x, y, k }) {
  const scale = Math.max(1, Math.min(MAP_MAX_ZOOM, Number.isFinite(k) ? k : 1));
  return {
    k: scale,
    x: Math.max(MAP_WIDTH * (1 - scale), Math.min(0, Number.isFinite(x) ? x : 0)),
    y: Math.max(MAP_HEIGHT * (1 - scale), Math.min(0, Number.isFinite(y) ? y : 0)),
  };
}

export function fitMapBounds([[left, top], [right, bottom]]) {
  const k = Math.max(1, Math.min(MAP_MAX_ZOOM, Math.min((MAP_WIDTH - 100) / Math.max(1, right - left), (MAP_HEIGHT - 100) / Math.max(1, bottom - top))));
  return constrainMapView({ k, x: MAP_WIDTH / 2 - k * (left + right) / 2, y: MAP_HEIGHT / 2 - k * (top + bottom) / 2 });
}

export function zoomMapView(view, factor) {
  const k = Math.max(1, Math.min(MAP_MAX_ZOOM, view.k * factor));
  return constrainMapView({ k, x: MAP_WIDTH / 2 - (MAP_WIDTH / 2 - view.x) * k / view.k, y: MAP_HEIGHT / 2 - (MAP_HEIGHT / 2 - view.y) * k / view.k });
}

// Camera windows are navigation presets only. They are never rendered as borders.
const WINDOWS = {
  'Middle East': [24, 12, 65, 44], 'North Africa': [-18, 18, 37, 37],
  Africa: [-20, -36, 55, 37], Europe: [-25, 33, 48, 72], Asia: [25, -10, 150, 75],
  'North America': [-170, 5, -50, 75], 'South America': [-84, -57, -30, 14],
  Oceania: [110, -50, 178, 4], Antarctica: [-180, -90, 180, -60],
};
export function regionMapView(name) {
  const box = WINDOWS[name];
  if (!box) return WORLD_VIEW;
  const [west, south, east, north] = box;
  const points = [[west, south], [west, north], [east, south], [east, north], [west, (south + north) / 2], [east, (south + north) / 2]].map(projection);
  return fitMapBounds([[Math.min(...points.map(([x]) => x)), Math.min(...points.map(([, y]) => y))], [Math.max(...points.map(([x]) => x)), Math.max(...points.map(([, y]) => y))]]);
}

export function selectionMapView(state, cases = []) {
  const placeId = state.place !== 'all' ? state.place : cases.find(({ id }) => id === state.case)?.placeId;
  const marker = MAP_PLACE_MARKERS.find(({ id }) => id === placeId);
  if (marker) return fitMapBounds([[marker.point[0] - 32, marker.point[1] - 22], [marker.point[0] + 32, marker.point[1] + 22]]);
  const place = GEOGRAPHY_PLACES.find(({ id }) => id === placeId);
  const country = MAP_COUNTRIES_BY_ID[state.country] ?? MAP_COUNTRIES_BY_ID[place?.countryIds.length === 1 ? place.countryIds[0] : ''];
  if (country) return fitMapBounds(country.bounds);
  if (place) return regionMapView(place.regions[0]);
  return regionMapView(state.region !== 'all' ? state.region : state.continent);
}

export function geographicSelection(patch) {
  return { continent: 'all', region: 'all', country: 'all', place: 'all', case: '', ...patch };
}
