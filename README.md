# Politic Spectrum

An npm/Vite/React prototype for exploring political positions across five independent dimensions:

1. Economic model: free-market ↔ collectivist
2. Social values: traditionalist ↔ progressive
3. Authority: libertarian ↔ authoritarian
4. National identity: nationalist ↔ internationalist
5. Foreign policy: interventionist ↔ pacifist / restraint

## Run locally

```bash
npm install
npm run dev -- --host 0.0.0.0
```

For a production build:

```bash
npm run build
npm run preview -- --host 0.0.0.0
```

The app has four modes: Questionnaire contains five questions per axis; FreeMode exposes five sliders and updates the closest documented reference patterns live; Spectrum Library lets users select a reference profile and read the reasoning behind its position on every axis; Bibliography exposes the complete source registry. The selected library profile can also be loaded directly into FreeMode.

The Spectrum Library also includes a normalized starter catalogue of historical and contemporary political labels. It preserves aliases, label types, families, regions, periods, statuses, differences between nearby concepts, approximate axis coverage, and source links. The catalogue can be searched and filtered without treating broad labels such as populism or monarchism as fixed five-axis ideologies.

The same library now contains a Research Atlas. It separates primary works and legal texts from documented people, represents positions as ranges with claim-level locations, records original language and translation limits, shows a dimension/band coverage matrix, preserves cautious relationships such as `close_to`, `distinct_from`, `influenced`, and `opposed`, and keeps a prioritized bibliography backlog visible. The expanded inventory contains 61 works and legal texts spanning ancient Egypt and Mesopotamia, Greek and Roman constitutional thought, Christian and medieval legal-political texts, classical Chinese schools, South Asian and Buddhist sources, Islamic and Persian political thought, West African and Indigenous constitutional memory, and the early-modern constitutional, liberal, feminist, realist, and socialist canon. The atlas also shows 12 recurring political forms with linked source anchors. The language filter identifies English translations rather than silently treating them as originals. Empty or thin cells are intentional research gaps, not fabricated coverage. The scope and source boundaries are documented in [`CLASSICAL_POLITICAL_CANON.md`](CLASSICAL_POLITICAL_CANON.md).

The researched taxonomy divides every axis into ten 20-point bands, from -100 to +100. Each band has its own descriptive tendency and related political families; the five band labels are kept independent so mixed positions remain visible.

The taxonomy draws on the Stanford Encyclopedia of Philosophy, the World Values Survey, V-Dem’s democracy indices, the Chapel Hill Expert Survey, the Manifesto Project, and comparative foreign-policy research. The app links to these references in its in-page “Researched taxonomy” guide. Score direction is intentionally standardized: −100 means free-market, traditionalist, nationalist, and interventionist on the four reoriented axes; +100 means collectivist, progressive, internationalist, and pacifist/restraint. Authority remains libertarian (−100) to authoritarian (+100).

Content is intentionally framed as approximate and educational: a person, country, state, or city cannot be reduced to five numbers, and the historical fascist/Nazi-like pattern is included only for analysis and historical context.

The validation plan for the 5D core, candidate facets, questionnaire audit, privacy-safe pilot, and future 4D/5D/6D/7D comparisons is documented in [`VALIDATION_METHODOLOGY.md`](VALIDATION_METHODOLOGY.md). It keeps the public v1 model stable until empirical evidence supports a versioned change.

The citation, licence, quotation, dataset, privacy, and commercial-publication audit is documented in [`RIGHTS_AND_PROVENANCE.md`](RIGHTS_AND_PROVENANCE.md). The application links to external sources and uses original summaries; restricted data and uncleared quotations are not bundled or displayed.

Each 20-point band and each reference-profile explanation also carries explicit author/work evidence. The UI distinguishes interpretive synthesis from quotation text held for rights review; the full reference map lives in `src/content/references.js` and is validated during every build.

The Bibliography mode is generated from `src/content/index.js`, `src/content/bibliography.js`, and `src/content/research.js`. It contains the original source registry plus structured research-work and person-profile records. Each record has a stable ID, canonical URL, access date, rights/provenance status, review confidence, and mapped downstream usage. Unverified bibliographic fields remain explicitly marked “Not recorded”; citation IDs must resolve to exactly one record, and duplicate canonical URLs or orphaned records fail validation.

Questionnaire answers are cached locally in the browser under a versioned key. Incomplete questionnaires resume at the first unanswered question; complete questionnaires restore the calculated result view after refresh. Reset removes the local cache.
