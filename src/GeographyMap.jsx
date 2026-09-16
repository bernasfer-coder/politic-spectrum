import { useEffect, useMemo, useRef, useState } from 'react';
import { GEOGRAPHY_CASES } from './content/geography.js';
import { filterGeographyCases, PLACES_BY_ID } from './geography-model.js';
import { constrainMapView, geographicSelection, MAP_COUNTRIES, MAP_COUNTRIES_BY_ID, MAP_GRATICULE, MAP_HEIGHT, MAP_MAX_ZOOM, MAP_OUTLINE, MAP_PLACE_MARKERS, MAP_WIDTH, regionMapView, selectionMapView, WORLD_VIEW, zoomMapView } from './geography-map-model.js';

const countCases = (cases, predicate) => cases.filter((item) => predicate(PLACES_BY_ID[item.placeId], item)).length;
const countLabel = (count) => `${count} matching ${count === 1 ? 'case' : 'cases'}`;

export default function GeographyMap({ state, onSelect, resultCount }) {
  const [view, setView] = useState(() => selectionMapView(state, GEOGRAPHY_CASES));
  const [placesVisible, setPlacesVisible] = useState(state.place !== 'all' || Boolean(state.case));
  const [focusedCountry, setFocusedCountry] = useState(MAP_COUNTRIES_BY_ID[state.country] ? state.country : 'egypt');
  const [hover, setHover] = useState(null);
  const [dragging, setDragging] = useState(false);
  const svgRef = useRef(null);
  const dragRef = useRef(null);
  const suppressClick = useRef(false);
  const countryRefs = useRef({});
  const eligibleCases = useMemo(() => filterGeographyCases({ ...state, ...geographicSelection({}) }), [state]);
  const countries = useMemo(() => MAP_COUNTRIES.map((country) => ({ ...country,
    count: countCases(eligibleCases, (place) => place.countryIds.includes(country.id)),
    total: countCases(GEOGRAPHY_CASES, (place) => place.countryIds.includes(country.id)),
  })), [eligibleCases]);
  const selectedPlace = PLACES_BY_ID[state.place] ?? PLACES_BY_ID[GEOGRAPHY_CASES.find(({ id }) => id === state.case)?.placeId];
  const selectedName = selectedPlace?.name ?? MAP_COUNTRIES_BY_ID[state.country]?.name ?? (state.region !== 'all' ? state.region : state.continent !== 'all' ? state.continent : 'All places');

  useEffect(() => {
    setView(selectionMapView(state, GEOGRAPHY_CASES));
    setHover(null);
    if (MAP_COUNTRIES_BY_ID[state.country]) setFocusedCountry(state.country);
    if (state.place !== 'all' || state.case) setPlacesVisible(true);
  }, [state.country, state.place, state.region, state.continent, state.case]);

  function choose(patch) {
    onSelect(geographicSelection(patch));
  }

  function countryKey(event, index) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      choose({ country: countries[index].id });
    } else if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? countries.length - 1 : (index + (['ArrowLeft', 'ArrowUp'].includes(event.key) ? -1 : 1) + countries.length) % countries.length;
      setFocusedCountry(countries[next].id);
      setView(WORLD_VIEW);
      countryRefs.current[countries[next].id]?.focus();
    }
  }

  function startDrag(event) {
    // Touch retains ordinary page scrolling. Zoom and pan buttons work on touch too.
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    suppressClick.current = false;
    dragRef.current = { x: event.clientX, y: event.clientY, view, id: event.pointerId, moved: false };
  }

  function moveDrag(event) {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (!drag.moved && Math.hypot(dx, dy) < 6) return;
    if (!drag.moved) svgRef.current.setPointerCapture?.(event.pointerId);
    drag.moved = true;
    setDragging(true);
    setHover(null);
    const rect = svgRef.current.getBoundingClientRect();
    const scale = Math.min(rect.width / MAP_WIDTH, rect.height / MAP_HEIGHT);
    if (scale > 0) setView(constrainMapView({ ...drag.view, x: drag.view.x + dx / scale, y: drag.view.y + dy / scale }));
  }

  function endDrag(event) {
    if (dragRef.current?.id !== event.pointerId) return;
    suppressClick.current = Boolean(dragRef.current.moved);
    dragRef.current = null;
    setDragging(false);
    if (svgRef.current.hasPointerCapture?.(event.pointerId)) svgRef.current.releasePointerCapture(event.pointerId);
  }

  function pan(dx, dy) { setView((current) => constrainMapView({ ...current, x: current.x + dx, y: current.y + dy })); }

  return <section className="geo-map" aria-labelledby="geo-map-heading">
    <div className="geo-map-header"><div><p className="eyebrow">EXPLORE BY PLACE</p><h3 id="geo-map-heading">Pick a place. Follow an idea.</h3></div><span className="geo-map-local">Local map · no tracking</span></div>
    <div className="geo-map-layout">
      <div className="geo-map-canvas">
        <div className="geo-map-presets" role="group" aria-label="Map camera and layers">
          <button onClick={() => setView(WORLD_VIEW)}>World view</button>
          <button onClick={() => setView(regionMapView('Middle East'))}>Zoom to Middle East</button>
          <button aria-pressed={placesVisible} onClick={() => { setPlacesVisible((value) => !value); if (!placesVisible) setView(regionMapView('Middle East')); }}>City & region markers</button>
        </div>
        <div className={`geo-map-viewport${dragging ? ' is-dragging' : ''}`}>
          <svg ref={svgRef} viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} role="group" aria-label="Interactive world map" aria-describedby="geo-map-help" onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={endDrag} onPointerLeave={() => { if (!dragRef.current?.moved) { dragRef.current = null; setHover(null); } }} onClickCapture={(event) => { if (suppressClick.current) { suppressClick.current = false; event.stopPropagation(); event.preventDefault(); } }}>
            <g className="geo-map-transform" transform={`translate(${view.x} ${view.y}) scale(${view.k})`}>
              <path d={MAP_OUTLINE} className="geo-map-ocean" aria-hidden="true" />
              <path d={MAP_GRATICULE} className="geo-map-grid" aria-hidden="true" />
              {countries.map((country, index) => <path key={country.id} ref={(node) => { countryRefs.current[country.id] = node; }} d={country.path} className={`geo-map-country${country.count ? ' has-cases' : ''}${country.total ? ' is-catalogued' : ''}`} data-country={country.id} role="button" tabIndex={focusedCountry === country.id ? 0 : -1} aria-label={`${country.name}: ${countLabel(country.count)}`} aria-pressed={state.country === country.id}
                onClick={() => choose({ country: country.id })} onKeyDown={(event) => countryKey(event, index)} onFocus={() => { setFocusedCountry(country.id); setHover(country); }} onBlur={() => setHover(null)} onPointerEnter={() => { if (!dragRef.current) setHover(country); }}>
                <title>{country.name} · {countLabel(country.count)} · {country.total} documented in this collection</title>
              </path>)}
            </g>
            {placesVisible && MAP_PLACE_MARKERS.map((marker) => {
              const [px, py] = marker.point;
              const x = view.x + px * view.k;
              const y = view.y + py * view.k;
              if (x < 12 || x > MAP_WIDTH - 12 || y < 12 || y > MAP_HEIGHT - 12) return null;
              const count = countCases(eligibleCases, (_, item) => item.placeId === marker.id);
              return <g key={marker.id} transform={`translate(${x} ${y})`} className="geo-map-marker" role="button" tabIndex={0} aria-label={`${marker.name}: ${countLabel(count)}`} aria-pressed={selectedPlace?.id === marker.id}
                onClick={(event) => { event.stopPropagation(); choose({ place: marker.id }); }} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); choose({ place: marker.id }); } }}>
                <circle className="geo-map-marker-hit" r="15" /><circle className="geo-map-marker-dot" r="5" />
                {view.k >= 3 && <text x={marker.dx ?? 15} y={marker.dy ?? 5} textAnchor={marker.dx < 0 ? 'end' : 'start'}>{marker.shortName}</text>}
                <title>{marker.name} · approximate navigation marker, not a boundary</title>
              </g>;
            })}
          </svg>
          <div className="geo-map-hover" aria-hidden="true">{hover ? <><strong>{hover.name}</strong><span>{countLabel(hover.count)} · {hover.total} documented</span></> : <><strong>Ideas cross borders.</strong><span>Click a country to explore its documented connections.</span></>}</div>
          <div className="geo-map-navigation" role="group" aria-label="Map navigation">
            <button aria-label="Zoom in" disabled={view.k >= MAP_MAX_ZOOM} onClick={() => setView((value) => zoomMapView(value, 1.6))}>+</button>
            <button aria-label="Zoom out" disabled={view.k <= 1} onClick={() => setView((value) => zoomMapView(value, 1 / 1.6))}>−</button>
            <span aria-label={`Map zoom ${view.k.toFixed(1)} times`}>{view.k.toFixed(1)}×</span>
            <button aria-label="Pan west" disabled={view.k <= 1} onClick={() => pan(120, 0)}>←</button>
            <button aria-label="Pan east" disabled={view.k <= 1} onClick={() => pan(-120, 0)}>→</button>
            <button aria-label="Pan north" disabled={view.k <= 1} onClick={() => pan(0, 90)}>↑</button>
            <button aria-label="Pan south" disabled={view.k <= 1} onClick={() => pan(0, -90)}>↓</button>
          </div>
        </div>
        <div className="geo-map-legend"><span><i className="geo-map-key-matches" />Matches idea / time filters</span><span><i className="geo-map-key-selected" />Selected</span><span><i className="geo-map-key-gap" />No matching cases</span></div>
      </div>
      <aside className="geo-map-selection" aria-label="Map selection">
        <p className="eyebrow">YOUR SELECTION</p><h4>{selectedName}</h4><p className="geo-map-count"><strong>{resultCount}</strong> matching {resultCount === 1 ? 'case' : 'cases'}</p>
        <p>{resultCount ? 'Read the case cards below for the people, period, sources and limits of each connection.' : 'An empty selection is a research gap or a filter mismatch—not evidence that no political ideas existed here.'}</p>
        <button className="text-button" onClick={() => { choose({}); setView(WORLD_VIEW); }}>Clear geographic selection</button>
        <div className="geo-map-regions" role="group" aria-label="Regional and cross-border connections"><span>BEYOND COUNTRY BORDERS</span>
          {['Middle East', 'North Africa', 'Europe'].map((region) => <button key={region} aria-pressed={state.region === region} onClick={() => choose({ region })}>{region}<small>{countCases(eligibleCases, (place) => place.regions.includes(region))}</small></button>)}
          {['ottoman-network', 'arab-world'].map((id) => <button key={id} aria-pressed={state.place === id} onClick={() => choose({ place: id })}>{id === 'ottoman-network' ? 'Ottoman networks' : 'Arab-world reception'}<small>{countCases(eligibleCases, (_, item) => item.placeId === id)}</small></button>)}
        </div>
        {placesVisible && <div className="geo-map-regions" role="group" aria-label="City and regional place shortcuts"><span>CITY & REGION MARKERS</span>{MAP_PLACE_MARKERS.map((marker) => <button key={marker.id} aria-pressed={state.place === marker.id} onClick={() => choose({ place: marker.id })}>{marker.shortName}<small>{countCases(eligibleCases, (_, item) => item.placeId === marker.id)}</small></button>)}</div>}
      </aside>
    </div>
    <p className="geo-map-help" id="geo-map-help">Click countries; use zoom buttons or drag with a mouse. On the map, arrow keys browse countries and Enter or Space selects. Country and place filters below offer the same access. Touch scrolling stays enabled.</p>
    <details className="geo-map-attribution"><summary>Map sources & boundary limits</summary><p>Made with <a href="https://www.naturalearthdata.com/about/terms-of-use/" target="_blank" rel="noreferrer">Natural Earth</a> (public-domain geometry), via <a href="https://github.com/topojson/world-atlas" target="_blank" rel="noreferrer">world-atlas 2.0.2</a>, Natural Earth 4.1.0 at 1:110m. This is a fixed, simplified reference dataset, not a current control or historical-border map. Small countries and territories may be omitted; names and disputed boundaries reflect the dataset, not an endorsement of a sovereignty claim. <a href="https://www.naturalearthdata.com/about/disputed-boundaries-policy/" target="_blank" rel="noreferrer">Boundary policy</a> · <a href={`${import.meta.env.BASE_URL}map-data-notices.txt`}>Data & software notices</a>.</p><p>Highlighting indicates documented connections, never a whole population’s ideology. Markers are approximate editorial navigation aids, not territorial extents. Region buttons are catalogue groupings, not drawn borders. No location permission, external map tiles or tracking requests are used.</p></details>
  </section>;
}
