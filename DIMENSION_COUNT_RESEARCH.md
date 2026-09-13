# How many political dimensions should the project use?

Research snapshot: 2026-09-12; implementation amendment: 2026-09-13. This is a research and product-design plan, not a claim that either the former five-dimensional model or the current six-dimensional model is a validated psychological instrument. The decision should optimize explanatory value, interpretability, measurement quality, international usefulness, and user experience together.

## Implementation amendment

The earlier 5D product decision is now superseded for the public experience. Religion in public life has been added as `dimension 06`, with five questionnaire items and ten descriptive bands. The app now uses `6d-v1`; `5d-v1` remains in the validation registry as a legacy comparator so the addition can be tested rather than assumed to improve the model.

## Preliminary conclusion

There is no universally correct number of political dimensions. Established projects use different structures for different purposes: the World Values Survey presents two broad cross-cultural value dimensions; comparative party-position projects commonly use several recurring dimensions plus issue-specific positions; Pew’s political typology uses many survey items to classify people into groups in multidimensional political space; and academic research finds that one-dimensional left/right models often fail to describe political attitudes adequately.[^1][^2][^3][^4]

The original five axes were a reasonable educational starting point because they separated economic policy, social values, authority, national identity, and foreign policy. Religion adds a distinct public-law question: how religious authority, revelation, secular neutrality, and religious moral traditions should shape institutions. That distinction is also a design hypothesis, not proof that six is optimal.

## Final product decision

**Current decision: ship a six-dimensional core for the didactic release, keep the former 5D model as a legacy comparator, and move remaining concepts into optional facets, tags, and context-specific profiles.** This resolves the immediate need for a religion dimension while establishing a higher evidence threshold for any seventh or later core dimension.

### 4D: rejected for v1

The project will not reduce the core to four dimensions. The current five axes answer different questions: economic organization, social values, domestic authority, national belonging, and the use of power abroad. Removing one would force at least two of those disagreements into a composite score, making mixed profiles harder to interpret and making the “why did my score move?” explanation less honest. This is a product-design judgment based on the current construct map, not a claim that a four-factor model is impossible in every research setting.

### 5D: retained as a legacy comparator

The former public product was:

1. Economic model.
2. Social values.
3. Authority.
4. National identity.
5. Foreign policy.

The five-axis model remains useful as a direct comparison baseline. Every questionnaire item, slider, result card, library profile, cache payload, and piece of branding now derives its count from the canonical `DIMENSIONS` list, so the live product and its cache use six dimensions.

The evidence does not establish “five” as a universal natural structure. The World Values Survey presents two broad cross-cultural value dimensions derived from factor analysis and explicitly describes its indicators as a small representation of wider underlying values.^9 CHES uses recurring measures such as economic left-right, GAL-TAN, and European integration, then adds issue-specific positions; its structure is designed for party comparison in a defined regional context rather than as a universal human political map.^10 These are reasons to treat five as a scoped product model, not as a law of politics.

### Many dimensions: not a single public slider wall

The project will not add seven, eight, or ten mandatory core sliders at this stage. Additional concepts remain valuable, but they should first enter as optional modules or library filters:

- religion / secularism;
- democracy and institutionalism;
- ecology and growth;
- immigration and integration;
- decentralization and territorial autonomy;
- populism and anti-elite politics;
- equality / hierarchy;
- technology, expertise, and knowledge governance.

This layered approach follows a distinction already visible in comparative research. The Manifesto Project uses many coded categories across policy domains to analyze party texts; that does not mean all categories should become person-level axes.^11 Pew’s 2026 political typology uses 30 questions and cluster analysis to classify U.S. adults into groups, not to claim that a fixed number of sliders is the one true dimensionality.^12 A recent comparative study also reports that mass opinion can be weakly structured, sometimes two-dimensional or multidimensional and sometimes effectively non-dimensional, while elite positions are more constrained.^13

### Product architecture after the decision

1. **Core profile:** the five public axes remain the stable v1 result.
2. **Optional issue modules:** users may explore religion, ecology, immigration, democracy, populism, decentralization, or other candidates without changing the core score.
3. **Taxonomy and context:** political labels, countries, movements, parties, cities, and historical cases remain searchable by time, geography, family, label type, and evidence.
4. **Future model versions:** a genuinely different six-dimensional or larger model must be introduced as a named, versioned alternative, such as `core-6d-v2`, with its own items, sources, validation, UI, migration rules, and comparison explanation.

### Gate for adding a new core dimension

No candidate becomes a mandatory core axis until it demonstrates: a distinct construct beyond the existing five; theoretical and comparative support for the intended scope; balanced and understandable items; reliability and test-retest stability; measurement invariance across the intended languages or populations; incremental explanatory value; and acceptable completion burden and accessibility. A candidate that is important but fails one of those tests belongs in a facet or filter instead.

### What is resolved and what remains open

- **Resolved:** the v1 product is 5D, not 4D or an unbounded many-dimensional questionnaire.
- **Resolved:** the existing 5D logo and visible five-axis UI are conceptually consistent; Issue #6 can close after the browser check already completed.
- **Resolved:** Issue #10 has a decision and can close as a research decision record.
- **Still open:** empirical validation of the item battery, cross-cultural measurement, and optional-facet usefulness. Those are follow-up research, not reasons to delay the 5D v1 scope.

## Current five-axis hypothesis

1. **Economic:** market/private ownership ↔ public/collectivist intervention.
2. **Social:** traditionalist/inherited norms ↔ progressive/autonomy-oriented change.
3. **Authority:** libertarian/civil-liberties constraints ↔ coercive/centralized authority.
4. **Identity:** national sovereignty/shared national culture ↔ internationalist/pluralist orientation.
5. **Foreign policy:** intervention/coercive influence abroad ↔ restraint/diplomacy.

These axes are intended to be independent enough to show mixed profiles. They must not be treated as natural laws, psychological traits, or a replacement for the full complexity of a person’s political views.

## Why five may be useful

- It is broad enough to show that economic, cultural, authority, identity, and foreign-policy views can diverge.
- It is still explainable on one result screen using five bars, sliders, or a compact profile.
- It gives the library a manageable structure for claim-level sources, examples, comparisons, and filters.
- It allows recognizable mixed profiles without forcing everyone onto a single left/right line.
- It gives the user a comprehensible first result while leaving room for deeper library pages and optional facets.

## Why five may be insufficient

Possible omitted or under-specified concepts include:

- religion/secularism or traditional/secular values;
- equality/hierarchy, social dominance, or egalitarianism as a distinct value conflict;
- democracy/pluralism versus majoritarianism, technocracy, or anti-institutionalism;
- populism/anti-elite politics versus pluralist/technocratic politics;
- ecology, environmentalism, and post-materialism;
- immigration and integration as a distinct policy domain rather than a component of identity;
- decentralization/centralization and territorial autonomy;
- technology, expertise, and knowledge governance;
- gender/family policy as a distinct issue family where social values do not capture the relevant variation;
- civic versus ethnic conceptions of nationhood, which may be lost on one identity axis;
- security, policing, and punishment as a more specific part of authority;
- international integration versus sovereignty, which may not be identical to willingness to use force abroad.

These candidates should not automatically become new axes. Some may be correlated with an existing axis, may be context-specific, may be better treated as policy modules, or may represent political style rather than a policy/value dimension.

## Why adding dimensions can make the product worse

More axes can increase explanatory detail, but they also increase questionnaire length, explanation burden, visual complexity, and the number of possible mixed profiles. Existing survey research treats response burden and perceived burden as important design variables, and higher perceived burden is associated with lower response quality.[^5][^6]

Additional dimensions also create more opportunities for weakly written questions, cultural translation problems, arbitrary endpoints, unstable labels, and false precision. A user should understand what a dimension means and why their score moved; a seventh or tenth slider that cannot be explained or validated is not an improvement.

The product should therefore prefer:

- **core axes** for broad, cross-cutting structures with strong evidence and clear independence;
- **facets/modules** for important issue areas that do not justify a universal axis;
- **tags and filters** for traditions, identities, policy areas, and political styles;
- **contextual profiles** for country, period, party, movement, or constitutional system;
- **versioned models** when a genuinely different theoretical framework should coexist rather than overwrite the current one.

## Research questions

### Conceptual validity

- Do the five axes correspond to distinct concepts in political theory and comparative political research?
- Are any axes composites that hide two different disagreements, especially identity, social values, and authority?
- Are the endpoints symmetrical, intelligible, and non-normative?
- Can each axis be explained without relying on a particular country’s party system?
- Does each axis remain meaningful for individuals, movements, parties, governments, and historical cases, or should some entities use different measurement layers?
- Which candidates are dimensions, which are policy domains, and which are political styles or contextual tags?

### Empirical dimensionality

- Do responses to the current items produce five distinguishable latent structures, or do some items load on multiple factors?
- Are the current 25 questions enough to measure five constructs, or do some axes need better-balanced items?
- Are scores stable across repeated responses, translations, countries, education levels, and political engagement levels?
- Which candidate models—4D, 5D, 6D, 7D, or a core-plus-facets model—have the best balance of fit, reliability, interpretability, and cross-context stability?
- Do proposed dimensions add information after controlling for the existing five axes, or merely restate them?
- Does a model classify known political traditions or self-described positions better without circularly defining the answer from the same labels?

### User experience and comprehension

- How long does each model take to complete on mobile and desktop?
- At what point do users stop understanding the axes or abandon the questionnaire?
- Can users explain, in their own words, what each axis measures?
- Can users predict how an answer will change a score?
- Do users interpret a high score as “better,” more extreme, or more authoritative?
- Can the result screen show the model without scrolling overload or misleading visual compression?
- Do optional modules increase learning without making the initial result feel like an exam?

### International and historical coverage

- Does each axis travel across regions, languages, historical periods, and regime types?
- Are some candidates meaningful mainly in contemporary Western democracies?
- Do translation and local political vocabulary change the apparent dimensionality?
- Can the model represent positions that combine economic intervention with social conservatism, libertarianism with nationalism, or foreign-policy restraint with authoritarian domestic politics?
- Does the model distinguish the position of a society or institution from the beliefs of individuals within it?

## Comparative research base

Use the following as comparison points, not as templates to copy:

- **World Values Survey / Inglehart–Welzel:** two broad dimensions—traditional versus secular-rational values and survival versus self-expression values—are used to describe cross-cultural variation. The WVS itself cautions that the specific items are indicators of broader underlying dimensions.[^1]
- **Pew political typologies:** groups are created from responses across many value questions and multi-dimensional political space; the latest public methodology uses 30 questions and cluster analysis to identify nine US groups. This is a typology of a surveyed population, not a universal global axis system.[^2]
- **Chapel Hill Expert Survey:** recurring party-position measures include general left/right, economic left/right, GAL–TAN, and European integration, with additional issue positions. This demonstrates that party-position measurement often needs more than one axis and that the useful set depends on the research question.[^3]
- **Comparative Manifesto Project:** party programs are coded across 56 categories grouped into seven policy domains. This is a content-analysis framework, not a claim that people should be placed on seven sliders.[^7]
- **Multidimensional ideology research:** Swedlow finds conceptual convergence around multiple value structures but does not establish one universally correct model; Warwick reports evidence for three common dimensions in certain West European party-policy data. These results support testing dimensionality by population, context, and purpose.[^4][^8]

## Proposed validation study

### Step 1 — construct map

- [ ] Write an operational definition, left/right endpoint, scope, exclusions, and examples for every current and candidate dimension.
- [ ] Map every questionnaire item to one intended construct and document possible cross-loadings.
- [ ] Review the map against political-theory literature, comparative surveys, party-position data, and non-Western scholarship.
- [ ] Convene reviewers with political-science, survey-methodology, history, law, and regional expertise.

### Step 2 — item and comprehension testing

- [ ] Conduct cognitive interviews to see how people understand each question and endpoint.
- [ ] Test neutral wording, balanced polarity, response order, “unsure/not enough information,” and culturally specific terms.
- [ ] Measure completion time, abandonment, item nonresponse, straight-lining, and perceived burden.
- [ ] Remove questions that are double-barreled, fact-dependent in a way users cannot answer, or primarily measure a different construct.

### Step 3 — pilot data

- [ ] Use public, appropriately licensed survey items and datasets where possible.
- [ ] If new responses are collected, obtain explicit consent, document the study purpose, minimize data, and do not combine political answers with identity or advertising data.
- [ ] Pre-register the candidate models and decision rules before inspecting results.
- [ ] Include multiple countries/languages or clearly limit the claim to the population sampled.

### Step 4 — statistical analysis

- [ ] Use exploratory factor analysis or related dimensionality methods to identify candidate structures.
- [ ] Use parallel analysis and model-comparison criteria rather than relying on a single eigenvalue rule.
- [ ] Use confirmatory factor analysis or item-response models on held-out data.
- [ ] Examine cross-loadings, residual correlations, item discrimination, internal consistency, and measurement error.
- [ ] Test measurement invariance across languages, countries, demographic groups, and time where sample size permits.
- [ ] Compare 4D, 5D, 6D, 7D, and core-plus-facets models using out-of-sample fit and interpretability.
- [ ] Report uncertainty and avoid publishing scores with more precision than the measurement supports.

### Step 5 — product experiment

- [ ] A/B test presentation of five axes versus five axes plus optional facets, not only raw axis counts.
- [ ] Compare comprehension, completion, confidence calibration, perceived neutrality, accessibility, and satisfaction.
- [ ] Test the same profile on bars, sliders, tables, and a compact radar view; do not use a visualization that hides uncertainty.
- [ ] Preserve the current five-axis result for comparability while experimental models are evaluated.

## Decision rules

Add a new core dimension only if it passes all of the following:

- [ ] It represents a clearly defined political disagreement not already captured by an existing axis.
- [ ] It has strong theoretical and comparative support across the intended scope.
- [ ] It has enough high-quality, balanced items to measure it reliably.
- [ ] It produces a distinct signal in pilot data and survives out-of-sample validation.
- [ ] It is understandable and culturally translatable.
- [ ] It adds meaningful explanatory or educational value for users.
- [ ] It has documented examples, sources, labels, and explanations in the library.
- [ ] It does not require collecting sensitive personal data beyond the current local-only design.
- [ ] It can be shown accessibly without overwhelming the result experience.

Keep a candidate as a facet/module when it is important but fails independence, cross-cultural stability, measurement quality, or user-comprehension requirements. Remove or merge a current axis if it is demonstrably redundant, incoherent, or misleading, but release that as a versioned model change with a migration and explanation.

## Likely product architecture

The most defensible design may be a layered model:

1. **Core profile:** five validated broad axes for the main result.
2. **Optional issue modules:** religion/secularism, ecology, immigration, democracy/institutions, populism, decentralization, and other candidates.
3. **Library filters:** geography, period, movement, party, legal tradition, economic system, and source quality.
4. **Model selector:** later, allow users to compare alternative scholarly frameworks rather than presenting one framework as the political truth.

This structure preserves a readable v1 while allowing deeper research and different scholarly traditions to coexist.

## Deliverables / acceptance criteria

- [ ] Literature review comparing major multidimensional political models and their purposes.
- [ ] Construct map for the current five axes and all candidate additions.
- [ ] Coverage matrix showing dimensions, item count, sources, regions, periods, and known blind spots.
- [ ] Cognitive-interview and pilot-testing plan with privacy safeguards.
- [ ] Pre-registered dimensionality and reliability analysis plan.
- [ ] Model comparison for 4D, 5D, 6D, 7D, and core-plus-facets alternatives.
- [ ] UX/accessibility comparison including completion burden and comprehension.
- [ ] Written decision to keep, add, merge, remove, or move concepts into facets/tags.
- [ ] Versioned schema and migration plan if the core model changes.
- [ ] Updated questions, labels, references, examples, tests, and bibliography for the approved model.
- [ ] Public methodology page explaining that the model is an educational framework with uncertainty and limitations.

## Sources

[^9]: World Values Survey, [Findings and Insights: Inglehart–Welzel cultural map](https://www.worldvaluessurvey.org/WVSContents.jsp?CMSID=Findings), especially the explanation of the two factor-derived dimensions and their limits.
[^10]: Chapel Hill Expert Survey, [CHES-Europe](https://www.chesdata.eu/ches-europe/), describing recurring economic left-right, GAL-TAN, European-integration, and issue-specific measures across party systems.
[^11]: Manifesto Project, [coding instructions and policy domains](https://manifestoproject.wzb.eu/information/documents/handbooks), describing its many category text-analysis framework for party programmes.
[^12]: Pew Research Center, [About the 2026 Political Typology: Methods & Quiz](https://www.pewresearch.org/about-the-political-typology/), describing its 30-question cluster-analysis approach to nine U.S. groups.
[^13]: [One-dimensional, multidimensional, or non-dimensional? Ideological structure in mass and elite opinion](https://www.cambridge.org/core/journals/european-journal-of-political-research/article/onedimensional-multidimensional-or-nondimensional-ideological-structure-in-mass-and-elite-opinion/78C953E1B5CC289B183AC549621DB14D), *European Journal of Political Research*, reporting cross-national variation in ideological constraint and structure.

[^1]: World Values Survey, [Findings and Insights: Inglehart–Welzel cultural map](https://www.worldvaluessurvey.org/WVSContents.jsp?CMSID=Findings).
[^2]: Pew Research Center, [About the 2026 Political Typology: Methods & Quiz](https://www.pewresearch.org/about-the-political-typology/).
[^3]: Chapel Hill Expert Survey, [CHES-Europe methodology and dimensions](https://www.chesdata.eu/ches-europe/).
[^4]: Brendon Swedlow, “[Beyond liberal and conservative: Two-dimensional conceptions of ideology and the structure of political attitudes and values](https://doi.org/10.1080/13569310802075969),” *Journal of Political Ideologies*, 2008.
[^5]: Sindre Rolstad, John Adler, and Anna Rydén, “[Response Burden and Questionnaire Length—Is Shorter Better? A Review and Meta-analysis](https://www.ispor.org/publications/journals/value-in-health/abstract/Volume-14--Issue-8/Response-Burden-and-Questionnaire-Length--Is-Shorter-Better--A-Review-and-Meta-analysis),” *Value in Health*, 2011.
[^6]: “[Effects of objective and perceived burden on response quality in web surveys](https://doi.org/10.1080/13645579.2024.2393795),” *International Journal of Social Research Methodology*, 2024.
[^7]: Manifesto Project, [coding handbook and seven policy domains](https://manifesto-project.wzb.eu/information/documents?name=handbook_v4).
[^8]: Paul V. Warwick, “[Toward a Common Dimensionality in West European Policy Spaces](https://doi.org/10.1177/1354068802008001005),” *European Union Politics*, 2002.
