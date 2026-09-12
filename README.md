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

The questionnaire contains three questions per axis. FreeMode exposes five sliders and updates the closest documented reference patterns live. Content is intentionally framed as approximate and educational: a person, country, state, or city cannot be reduced to five numbers, and the historical fascist/Nazi-like pattern is included only for analysis and historical context.
