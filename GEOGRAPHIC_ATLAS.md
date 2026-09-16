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
- Rights handling is original synthesis and links only. No source text, translated passage, map, image or dataset is republished. Abstract-only and selected-section consultations remain visible.

Six added sources in `geography-sources.js` flow into the existing research registry, bibliography and rights records. Three already registered sources are reused with their original metadata and rights boundaries. The bibliography links back to individual cases. No questionnaire, archetype, axis score or encyclopedia research gap is changed.

## Performance and privacy

The versioned index is a small static module; filtering and sorting happen locally. The atlas interface and CSS load on demand. There are no per-filter server calls, new database/cache services, tracking, location requests, or new package dependencies. Fragment URLs store only user-chosen browsing filters, not questionnaire answers.

The pre-existing application still eagerly includes its large encyclopedia/bibliography bundle. This change does not claim to have split all articles into individual downloads; that remains a separate performance task. The first atlas deliberately omits map tiles, GIS dependencies and speculative historic polygons.

## Validation

`validate-geography.js` runs in the build validator and `test-geography.mjs` runs in the content suite. Checks cover stable/unique IDs, resolved sources and encyclopedia links, bibliography backlinks, chronology, explicit uncertainty and the absence of invented scored profiles. Unit/browser tests cover filters, accent-insensitive search, empty gaps, chronology, malformed URLs, refresh, history, deep links, clipboard fallback, mobile layout and serious/critical accessibility violations.

## Next research and product phases

1. Deepen the starter cases with primary texts and independent implementation studies. In particular, the Nasserist example needs policy-specific evidence beyond its current abstract-level frame.
2. Add separate Iraqi and Syrian Ba’athist regime cases; historical Kemalism; distinct Islamic modernist and Islamist traditions; and Labor, Revisionist and Religious Zionist traditions. None should be silently merged into a generic religious or nationalist score.
3. Extend coverage beyond the pilot with the same actor/date/source requirements. Zero cases is a research gap, not evidence of historical absence.
4. For any present-day implementation claim, define the precise institution and scope, check current primary evidence and independent scholarship/reporting, and record an explicit as-of date and follow-up review policy.
5. Add a keyboard-accessible interactive map after selecting a licensed geographic dataset and documenting disputed/historical boundary conventions. Keep the catalogue available without a map.

This feature does not change the existing one-entry encyclopedia research automation or close issue #14. Deployment and worldwide coverage are separate from completion of this first implementation.
