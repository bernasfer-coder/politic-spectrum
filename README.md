# Politic Spectrum

An npm/Vite/React prototype for exploring political positions across five independent dimensions:

1. Economic model: collectivist ↔ free-market
2. Social values: progressive ↔ traditionalist
3. Authority: libertarian ↔ authoritarian
4. National identity: internationalist ↔ nationalist
5. Foreign policy: restraint ↔ interventionist

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

The app has three modes: Questionnaire contains five questions per axis; FreeMode exposes five sliders and updates the closest documented reference patterns live; Spectrum Library lets users select a reference profile and read the reasoning behind its position on every axis. The selected library profile can also be loaded directly into FreeMode.

The Spectrum Library also includes a normalized starter catalogue of historical and contemporary political labels. It preserves aliases, label types, families, regions, periods, statuses, differences between nearby concepts, approximate axis coverage, and source links. The catalogue can be searched and filtered without treating broad labels such as populism or monarchism as fixed five-axis ideologies.

The researched taxonomy divides every axis into ten 20-point bands, from -100 to +100. Each band has its own descriptive tendency and related political families; the five band labels are kept independent so mixed positions remain visible.

The taxonomy draws on the Stanford Encyclopedia of Philosophy, the World Values Survey, V-Dem’s democracy indices, the Chapel Hill Expert Survey, the Manifesto Project, and comparative foreign-policy research. The app links to these references in its in-page “Researched taxonomy” guide.

Content is intentionally framed as approximate and educational: a person, country, state, or city cannot be reduced to five numbers, and the historical fascist/Nazi-like pattern is included only for analysis and historical context.

Each 20-point band and each reference-profile explanation also carries explicit author/work evidence. The UI distinguishes interpretive synthesis from short direct primary-text citations; the full reference map lives in `src/content/references.js` and is validated during every build.

Questionnaire answers are cached locally in the browser under a versioned key. Incomplete questionnaires resume at the first unanswered question; complete questionnaires restore the calculated result view after refresh. Reset removes the local cache.
