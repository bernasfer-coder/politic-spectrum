# Political Geography Atlas

Implemented first phase: 16 September 2026. Route: `#geography`.

## Purpose and scope

Browse documented connections between political labels, actors, places and periods. This is distinct from the existing Research Atlas, which catalogues works, people and evidence coverage. The first collection has 10 cases across eight Middle Eastern political traditions, including North African and European connections. It is not a world-complete catalogue, a live political-control map, or eight newly scored reference profiles.

The public interface provides continent, region, country-locator, specific-place, label, relationship, period and text filters; chronological and card views; label explanations before cases; source-reading boundaries; and bibliography/encyclopedia cross-links. Filters, views and individual cases have shareable fragment URLs and survive refresh and browser history. Clipboard failure on the HTTP LAN site falls back to a selectable link.

## Evidence model

`src/content/geography.js` holds independent place, label and case records. Each case has one primary relationship: developed, advocated, experimented, implemented, or influenced. Further meanings require another independently sourced case rather than a loose tag on a country.

- A label can connect to many places and a place to many labels. Country-locator and continental tags are many-to-many.
- Every case names an actor, historical setting, evidence statement, source IDs, reading locator, limitation, date precision, review date and confidence.
- Numeric dates support interval-overlap filtering. Approximate periods and century windows remain visibly approximate; document/study snapshots are single-year observations, not asserted start/end dates of an ideology.
- The CHP case records a 2025 primary statement. The Kurdish case records a 2020 scholarly account. Neither is relabelled as a verified present-day government or territorial-control claim just because it was consulted in 2026.
- Modern country tags do not transfer present borders backwards. Jerusalem has a dedicated historical-place locator rather than a forced sovereign assignment. Transnational regional evidence does not automatically populate every country in that region.
- No country, people or religion receives an ideological score. Related encyclopedia profiles are explicitly comparative, not aliases or exact matches.
- Political-source handling is original synthesis and links only. No source prose, translated passage or image is republished. Abstract-only and selected-section consultations remain visible. The separately licensed map geometry is documented below.

Geographic-case sources in `geography-sources.js` flow into the existing research registry, bibliography and rights records. Reused sources retain their original metadata and rights boundaries. The bibliography links back to individual cases. Recent additions include separate, bounded Colombia 2026 and Tunisia 2024 election cases, Sudan’s 2023–2025 war/civilian-protection snapshot, Côte d’Ivoire’s 2025 presidential election, Burkina Faso’s 2026 party-law dissolution and Revolution Charter transition, Mali’s 2025 party-law repeal and dissolution, Haiti’s 2026 post-Council executive transition and revised electoral timetable, Libya’s August–September 2026 Smaller Convening agreement and follow-up, Iraq’s 2025 federal election and incomplete 2026 cabinet formation, Syria’s staged 2025–2026 transitional People’s Assembly formation, Egypt’s 2025 House election and January 2026 parliamentary opening, Honduras’s 2025 general election and January 2026 transfer of office, and Costa Rica’s February 2026 national election and May constitutional transition. Official decisions, observer findings, rights reporting, political agreements and older or publisher-record-only book contexts remain distinguished. No questionnaire, archetype or axis score is changed.

## Interactive map

The atlas includes a self-hosted SVG map of 177 country/territory features, with Equal Earth projection, mouse dragging, zoom/pan buttons, a world camera reset and a Middle East camera preset. Clicking a country replaces conflicting geographic filters while preserving the selected idea, period, connection and search. Country paths and the country/territory select use the same stable IDs; existing six country IDs and all earlier links remain valid. Uncatalogued areas return explicit research gaps rather than invented labels. Changing filters updates highlighted countries and case counts locally. Camera changes do not change the research selection.

The city/region layer provides rounded editorial navigation anchors for Baghdad, Damascus, Jerusalem and northern Syria. They are not surveyed locations, territorial extents or historical sovereignty claims. Dedicated controls preserve Ottoman-network and Arab-world cases without assigning them wholesale to a country. Region controls filter existing catalogue groupings; camera windows are not drawn as regional borders.

Country paths have roving keyboard focus (arrow keys, Home/End, Enter/Space). Native country and place selects provide equivalent navigation, including tiny polygons. Touch retains page scrolling; zoom/pan buttons work without dragging. Reduced-motion settings disable map animations. Geographic URLs, refresh and back/forward navigation synchronize both map selection and results; camera position itself is transient.

Map data: `world-atlas` 2.0.2 `countries-110m.json`, derived from Natural Earth 4.1.0, 1:110m. This fixed, simplified dataset omits some small areas and is not a current control map. Names and disputed boundaries follow that dataset; neither constitutes a sovereignty endorsement. Its version, limitations, original public-domain data terms and software notices are linked in the public map. See `public/map-data-notices.txt`, [Natural Earth terms](https://www.naturalearthdata.com/about/terms-of-use/) and [boundary policy](https://www.naturalearthdata.com/about/disputed-boundaries-policy/). No political scores, cases or existing bibliography records were changed for this feature.

## Performance and privacy

The versioned index is a small static module; filtering and sorting happen locally. The atlas interface, map geometry, projection code and CSS load on demand. The map adds pinned `d3-geo`, `topojson-client` and `world-atlas` dependencies; Vite bundles the selected 110m dataset and required code. There are no per-filter server calls, new database/cache services, map-service tokens, external tiles, tracking or location requests. Fragment URLs store only user-chosen browsing filters, not questionnaire answers.

The pre-existing application still eagerly includes its large encyclopedia/bibliography bundle and requests Google Fonts. Those existing font requests are outside the map's self-hosting claim. This change does not claim to have split all articles into individual downloads; that remains a separate performance task. Map tiles, street-level detail and speculative historical polygons remain out of scope.

## Validation

`validate-geography.js` runs in the build validator and `test-geography.mjs` runs in the content suite. Checks cover stable/unique IDs, resolved sources and encyclopedia links, bibliography backlinks, chronology, explicit uncertainty and the absence of invented scored profiles. Unit/browser tests cover filters, accent-insensitive search, empty gaps, chronology, malformed URLs, refresh, history, deep links, clipboard fallback, mobile layout and serious/critical accessibility violations.

## Next research and product phases

1. Deepen the starter cases with primary texts and independent implementation studies. In particular, the Nasserist example needs policy-specific evidence beyond its current abstract-level frame.
2. Add separate Iraqi and Syrian Ba’athist regime cases; historical Kemalism; distinct Islamic modernist and Islamist traditions; and Labor, Revisionist and Religious Zionist traditions. None should be silently merged into a generic religious or nationalist score.
3. Extend coverage beyond the pilot with the same actor/date/source requirements. Zero cases is a research gap, not evidence of historical absence.
4. For any present-day implementation claim, define the precise institution and scope, check current primary evidence and independent scholarship/reporting, and record an explicit as-of date and follow-up review policy.
5. Extend the map only with reviewed geographic data and clear boundary conventions: consider newer datasets, tiny-country locators and independently sourced historical-region overlays. Retain non-map browsing and distinguish research coverage from political control.

This feature does not change the existing one-entry encyclopedia research automation or close issue #14. Deployment and worldwide coverage are separate from completion of this first implementation.
