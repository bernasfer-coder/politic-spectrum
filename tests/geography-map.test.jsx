import { act, cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import GeographyAtlas from '../src/GeographyAtlas.jsx';
import { BIBLIOGRAPHY_RECORDS, ENCYCLOPEDIA_ENTRIES } from '../src/content/index.js';
import { GEOGRAPHY_CASES } from '../src/content/geography.js';
import { GEOGRAPHY_DEFAULTS, readGeographyState } from '../src/geography-model.js';
import { constrainMapView, COUNTRY_OPTIONS, geographicSelection, MAP_COUNTRIES, MAP_COUNTRIES_BY_ID, MAP_PLACE_MARKERS, selectionMapView, WORLD_VIEW, zoomMapView } from '../src/geography-map-model.js';

const entryTitles = Object.fromEntries(Object.values(ENCYCLOPEDIA_ENTRIES).map(({ id, title }) => [id, title]));
const renderAtlas = () => render(<GeographyAtlas bibliography={BIBLIOGRAPHY_RECORDS} entryTitles={entryTitles} />);
const map = () => within(screen.getByRole('group', { name: 'Interactive world map' }));
const cards = () => screen.queryAllByRole('article');
beforeEach(() => window.history.replaceState(null, '', '/#geography'));
afterEach(cleanup);

describe('map geometry and filter contracts', () => {
  it('keeps all map IDs unique, finite and compatible with share URLs', () => {
    expect(MAP_COUNTRIES).toHaveLength(179);
    expect(new Set(COUNTRY_OPTIONS.map(({ id }) => id)).size).toBe(179);
    for (const item of MAP_COUNTRIES) {
      expect(item.path).toMatch(/^M/);
      expect(item.path).not.toMatch(/NaN|Infinity/);
      expect(item.bounds.flat().every(Number.isFinite)).toBe(true);
      expect(readGeographyState(`#geography?country=${item.id}`).country).toBe(item.id);
    }
    expect(MAP_COUNTRIES_BY_ID['map-kosovo']).toBeDefined();
    expect(MAP_COUNTRIES_BY_ID.egypt.name).toBe('Egypt');
    expect(MAP_COUNTRIES_BY_ID.portugal.name).toBe('Portugal');
    expect(MAP_COUNTRIES_BY_ID.spain.name).toBe('Spain');
    expect(MAP_COUNTRIES_BY_ID.germany.name).toBe('Germany');
    expect(MAP_COUNTRIES_BY_ID.italy.name).toBe('Italy');
    expect(MAP_COUNTRIES_BY_ID.japan.name).toBe('Japan');
    expect(MAP_COUNTRIES_BY_ID.thailand.name).toBe('Thailand');
    expect(MAP_COUNTRIES_BY_ID.malaysia.name).toBe('Malaysia');
    expect(MAP_COUNTRIES_BY_ID.bhutan.name).toBe('Bhutan');
    expect(MAP_COUNTRIES_BY_ID.ghana.name).toBe('Ghana');
    expect(MAP_COUNTRIES_BY_ID.ethiopia.name).toBe('Ethiopia');
    expect(MAP_COUNTRIES_BY_ID.tonga.name).toBe('Tonga');
    expect(MAP_COUNTRIES_BY_ID['saudi-arabia'].name).toBe('Saudi Arabia');
    expect(MAP_COUNTRIES_BY_ID.oman.name).toBe('Oman');
    expect(MAP_COUNTRIES_BY_ID.kuwait.name).toBe('Kuwait');
    expect(MAP_COUNTRIES_BY_ID.jordan.name).toBe('Jordan');
    expect(MAP_COUNTRIES_BY_ID.philippines.name).toBe('Philippines');
    expect(MAP_COUNTRIES_BY_ID.indonesia.name).toBe('Indonesia');
    expect(MAP_COUNTRIES_BY_ID.nigeria.name).toBe('Nigeria');
    expect(MAP_COUNTRIES_BY_ID.pakistan.name).toBe('Pakistan');
    expect(MAP_COUNTRIES_BY_ID.bangladesh.name).toBe('Bangladesh');
    expect(MAP_COUNTRIES_BY_ID['sri-lanka'].name).toBe('Sri Lanka');
    expect(MAP_COUNTRIES_BY_ID.nepal.name).toBe('Nepal');
    expect(MAP_COUNTRIES_BY_ID.afghanistan.name).toBe('Afghanistan');
    expect(MAP_COUNTRIES_BY_ID.algeria.name).toBe('Algeria');
    expect(MAP_COUNTRIES_BY_ID.tunisia.name).toBe('Tunisia');
    expect(MAP_COUNTRIES_BY_ID.libya.name).toBe('Libya');
    expect(MAP_COUNTRIES_BY_ID.morocco.name).toBe('Morocco');
    expect(MAP_COUNTRIES_BY_ID.mozambique.name).toBe('Mozambique');
    expect(MAP_COUNTRIES_BY_ID.tanzania.name).toBe('Tanzania');
    expect(MAP_COUNTRIES_BY_ID.kenya.name).toBe('Kenya');
    expect(MAP_COUNTRIES_BY_ID.uganda.name).toBe('Uganda');
    expect(MAP_COUNTRIES_BY_ID.senegal.name).toBe('Senegal');
    expect(MAP_COUNTRIES_BY_ID.gambia.name).toBe('The Gambia');
    expect(MAP_COUNTRIES_BY_ID['sierra-leone'].name).toBe('Sierra Leone');
    expect(MAP_COUNTRIES_BY_ID.liberia.name).toBe('Liberia');
    expect(MAP_COUNTRIES_BY_ID['cote-divoire'].name).toBe('Côte d’Ivoire');
    expect(MAP_COUNTRIES_BY_ID.mali.name).toBe('Mali');
    expect(MAP_COUNTRIES_BY_ID.niger.name).toBe('Niger');
    expect(MAP_COUNTRIES_BY_ID.chad.name).toBe('Chad');
    expect(MAP_COUNTRIES_BY_ID['burkina-faso'].name).toBe('Burkina Faso');
    expect(MAP_COUNTRIES_BY_ID.cameroon.name).toBe('Cameroon');
    expect(MAP_COUNTRIES_BY_ID.iraq.name).toBe('Iraq');
    expect(MAP_COUNTRIES_BY_ID.france.name).toBe('France');
    expect(MAP_COUNTRIES_BY_ID.zimbabwe.name).toBe('Zimbabwe');
    expect(MAP_COUNTRIES_BY_ID.rwanda.name).toBe('Rwanda');
    expect(MAP_COUNTRIES_BY_ID.vietnam.name).toBe('Vietnam');
    expect(MAP_COUNTRIES_BY_ID.sudan.name).toBe('Sudan');
    expect(MAP_COUNTRIES_BY_ID.mexico.name).toBe('Mexico');
    expect(readGeographyState('#geography?country=map-000').country).toBe('all');
  });

  it('bounds zoom and panning, handles invalid values, and focuses shared cases', () => {
    expect(constrainMapView({ x: Infinity, y: NaN, k: -5 })).toEqual(WORLD_VIEW);
    expect(zoomMapView(WORLD_VIEW, 100).k).toBe(10);
    expect(zoomMapView({ x: -300, y: -300, k: 4 }, 0)).toEqual(WORLD_VIEW);
    expect(selectionMapView({ ...GEOGRAPHY_DEFAULTS, case: 'buber-jerusalem' }, GEOGRAPHY_CASES).k).toBeGreaterThan(3);
    expect(geographicSelection({ place: 'jerusalem' })).toEqual({ continent: 'all', region: 'all', country: 'all', place: 'jerusalem', case: '' });
    expect(MAP_PLACE_MARKERS.every(({ point }) => point.every(Number.isFinite))).toBe(true);
  });
});

describe('interactive atlas map', () => {
  it('selects countries, replaces conflicting geography, and retains research filters', async () => {
    const user = userEvent.setup();
    window.history.replaceState(null, '', '/#geography?continent=Europe&label=nasserism');
    renderAtlas();
    await user.click(map().getByRole('button', { name: 'Egypt: 1 matching case' }));
    expect(cards()).toHaveLength(1);
    expect(screen.getByRole('combobox', { name: /Country/ })).toHaveValue('egypt');
    expect(screen.getByRole('combobox', { name: 'Political label' })).toHaveValue('nasserism');
    expect(readGeographyState(window.location.hash).continent).toBe('all');
    expect(map().getByRole('button', { name: /Egypt:/ })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('complementary', { name: 'Map selection' })).toHaveTextContent('Egypt');
  });

  it('opens the researched Brazil case and restores it after refresh', async () => {
    const user = userEvent.setup();
    renderAtlas();
    await user.click(map().getByRole('button', { name: 'Brazil: 2 matching cases' }));
    expect(cards()).toHaveLength(2);
    expect(cards()[0]).toHaveTextContent(/Brazilian democratic constitutionalism|1985–1988/);
    expect(window.location.hash).toContain('country=brazil');
    expect(screen.getByRole('combobox', { name: /Country/ })).toHaveValue('brazil');
    cleanup(); renderAtlas();
    expect(map().getByRole('button', { name: /Brazil:/ })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('complementary', { name: 'Map selection' })).toHaveTextContent('Brazil');
  });

  it('supports roving keyboard focus, Enter and Space without 178 tab stops', async () => {
    const user = userEvent.setup();
    renderAtlas();
    const egypt = map().getByRole('button', { name: /Egypt:/ });
    act(() => egypt.focus());
    await user.keyboard('{Enter}');
    expect(cards()).toHaveLength(3); // Nasser, the post-Nasser case and an Egyptian node of the Ottoman network.
    await user.keyboard('{ArrowRight}');
    expect(document.activeElement).toHaveAttribute('data-country', 'map-222');
    await user.keyboard(' ');
    expect(cards()).toHaveLength(0);
    expect(window.location.hash).toContain('country=map-222');
    expect(map().getAllByRole('button').filter((item) => item.tabIndex === 0)).toHaveLength(1);
  });

  it('keeps Jerusalem and regional networks accessible without a forced country', async () => {
    const user = userEvent.setup();
    renderAtlas();
    await user.click(screen.getByRole('button', { name: 'City & region markers' }));
    await user.click(map().getByRole('button', { name: /Jerusalem.*matching/ }));
    expect(cards()).toHaveLength(1);
    expect(cards()[0]).toHaveTextContent('Martin Buber');
    expect(screen.getByRole('combobox', { name: /Country/ })).toHaveValue('all');
    expect(window.location.hash).toContain('place=jerusalem');
    await user.click(within(screen.getByRole('group', { name: 'Regional and cross-border connections' })).getByRole('button', { name: /Arab-world reception/ }));
    expect(cards()).toHaveLength(1);
    expect(cards()[0]).toHaveTextContent('2016');
    expect(readGeographyState(window.location.hash).place).toBe('arab-world');
  });

  it('updates map counts with research filters and supports camera controls without changing filters', async () => {
    const user = userEvent.setup();
    renderAtlas();
    await user.selectOptions(screen.getByRole('combobox', { name: 'Political label' }), 'nasserism');
    expect(map().getByRole('button', { name: 'Syria: 0 matching cases' })).not.toHaveClass('has-cases');
    expect(map().getByRole('button', { name: 'Egypt: 1 matching case' })).toHaveClass('has-cases');
    const hash = window.location.hash;
    await user.click(screen.getByRole('button', { name: 'Zoom in', exact: true }));
    expect(document.querySelector('.geo-map-transform')).toHaveAttribute('transform', 'translate(-288 -150) scale(1.6)');
    await user.click(screen.getByRole('button', { name: 'Pan east' }));
    expect(document.querySelector('.geo-map-transform').getAttribute('transform')).toContain('-408');
    expect(window.location.hash).toBe(hash);
    await user.click(screen.getByRole('button', { name: 'World view' }));
    expect(screen.getByRole('button', { name: 'Zoom out' })).toBeDisabled();
  });

  it('synchronizes map selections with browser history and reset', async () => {
    const user = userEvent.setup();
    renderAtlas();
    await act(async () => { window.history.replaceState(null, '', '/#geography?country=iran'); window.dispatchEvent(new PopStateEvent('popstate')); });
    expect(map().getByRole('button', { name: /Iran:/ })).toHaveAttribute('aria-pressed', 'true');
    expect(cards()).toHaveLength(2);
    await user.click(screen.getByRole('button', { name: 'Clear geographic selection' }));
    expect(cards()).toHaveLength(94);
    expect(map().getByRole('button', { name: /Iran:/ })).toHaveAttribute('aria-pressed', 'false');
  });
});
