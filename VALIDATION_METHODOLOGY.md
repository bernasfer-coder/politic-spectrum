# Validation Methodology for the Didactic 6D Core

## Amendment: Religion promoted to the current core

On 13 September 2026, Religion in public life was promoted from a candidate facet to the sixth public dimension because religious authority, secular neutrality, and the relationship between religious reasons and coercive law cannot always be recovered precisely from the existing social or authority axes. The former `5d-v1` model remains registered as a legacy comparator; the current product baseline is `6d-v1`. This is a didactic design decision and remains empirically unvalidated.

## Decision summary

Politic Spectrum v1 now exposes six public dimensions as a stable, educational model:

1. Economic model
2. Social values
3. Authority
4. National identity
5. Foreign policy
6. Religion in public life

This is a product decision, not a claim that politics has exactly five natural dimensions. Political concepts are latent, context-sensitive, and measured with error. Established projects use different dimensional structures for different purposes: the World Values Survey measures a broad set of attitudes and values, the Chapel Hill Expert Survey separates general ideology from policy positions, the Manifesto Project codes party statements by policy categories, and V-Dem disaggregates democracy into many concepts and indicators.[^1][^2][^3][^4]

The didactic model should therefore be validated as a useful explanatory map, not marketed as a diagnostic test or a complete representation of a person. The current questionnaire, score schema, and six-dimensional cache are versioned while evidence is collected. Any change to item wording, weights, dimensions, or score semantics must receive a new questionnaire/model version.

The current decision is:

- **Keep the 6D core for the current didactic release.** It is still small enough to explain while making religious-public-law disagreements visible.
- **Retain `5d-v1` as a legacy comparator.** The Religion addition must be evaluated against the prior public model rather than treated as automatically superior.
- **Do not collapse the result into one left/right score.** A six-axis profile is the primary result.
- **Treat remaining optional concepts as facets or modules first.** Democracy/institutions, ecology/growth, immigration/integration, decentralization, populism, equality/hierarchy, and technology/expertise should not silently become new axes.
- **Run legacy-5D versus current-6D, 7D, 8D, and core-plus-facets comparisons.** A model wins only when it adds information without creating unacceptable confusion, instability, bias, or maintenance cost.
- **Report uncertainty and limitations.** A score is an estimate from a short questionnaire, not a discovered essence of a person, country, party, city, or historical case.

## Implementation status (13 September 2026)

The validation plan is now represented in `src/content/validation.js` and checked by `scripts/test-validation.mjs` and the build validator. The registry contains:

- operational construct boundaries for all six core dimensions;
- a single-construct, polarity, cultural-portability, and cross-loading audit for all 30 current items;
- seven remaining candidate facets with their provisional treatment;
- the legacy `5d-v1` comparator, current `6d-v1` baseline, seven M7 single-facet additions, 21 preregistered M8 facet pairs, and the core-plus-facets module model;
- an explicit `not-run` evidence status.

This registry is a readiness and version-control safeguard, not empirical evidence. Random or synthetic answers can exercise scoring code and fixtures, but they cannot establish reliability, validity, comprehension, measurement invariance, or incremental value. Participant results must come from the consented, privacy-safe study described below, and no seventh or later public axis should be added before the 5D-versus-6D evidence is reviewed.

## What is being validated

Validity concerns the interpretation and use of scores, not whether a questionnaire has a magical label of “valid.” The evidence should cover content, response processes, internal structure, relations with external variables, reliability, measurement error, usability, and comparability. The AERA/APA/NCME testing standards frame validity as evidence supporting proposed score interpretations, while COSMIN provides a useful checklist of content validity, structural validity, reliability, measurement error, and cross-cultural validity.[^5][^6]

### Operational construct map

| Dimension | Construct to measure | Include | Deliberately exclude | Main risks to test |
| --- | --- | --- | --- | --- |
| **Economic model** | Preferred role of private ownership, markets, public ownership, redistribution, taxation, and regulation | Ownership, planning, competition, public provision, labor power, redistribution | A person’s income, economic knowledge, party label, or the amount of authority used to implement policy | Taxation, spending, regulation, and ownership may be bundled; equality concerns may cross-load |
| **Social values** | Preferred pace and direction of cultural change, personal autonomy, inherited norms, and social equality | Family, gender, sexuality, moral pluralism, anti-discrimination, inherited institutions | Economic redistribution, state coercion as such, national sovereignty, or religiosity as a complete construct | “Progressive” items may also measure authority, minority rights, immigration, or religion |
| **Authority** | Acceptable scope of coercion, executive power, surveillance, dissent restrictions, and institutional limits | Speech, protest, police powers, emergency powers, due process, dissent | Whether a state is economically left/right, nationalist, religious, or democratic in every procedural sense | Threat perception and trust in officials can be mistaken for general support for authority |
| **National identity** | Whether political membership and obligation should be organized primarily around the nation, sovereignty, shared civic culture, or universal cooperation | Sovereignty, national preference, civic belonging, international institutions, universal obligations | Immigration policy by itself, ethnicity, military intervention, or cultural traditionalism by itself | Migration, minority rights, international law, and foreign policy can cross-load |
| **Foreign policy** | Willingness to use force, alliances, sanctions, and coercive influence beyond the state’s borders | Intervention, restraint, deterrence, alliances, diplomacy, humanitarian force, nation-building | Domestic authoritarianism, national pride, defense spending alone, or a single conflict preference | Alliances and military action are not identical; humanitarian motives may be confused with force preference |

The axes are intentionally related but non-identical. For example, a person may support public ownership and civil liberties, or national sovereignty and social pluralism. Correlation is expected; redundancy is what must be tested.

### Candidate facets and provisional treatment

| Candidate | What it would add | Likely overlap | v1 treatment | Priority for validation |
| --- | --- | --- | --- | --- |
| **Religion / secularism** | Role of religious belief, institutions, and religious law in public life | Social values, identity, authority | Separate facet/module | High |
| **Democracy / institutions** | Elections, representation, rule of law, checks and balances, minority protections | Authority, social equality | Separate facet/module; do not equate authority with democracy | High |
| **Ecology / growth** | Ecological limits, environmental protection, growth, technology, and transition costs | Economic model, social values, foreign policy | Issue facet or module | Medium-high |
| **Immigration / integration** | Border policy, migration, citizenship, assimilation, multicultural inclusion | Identity, social values, foreign policy | Facet; do not use migration as a proxy for nationalism | High |
| **Decentralization** | Local autonomy, federalism, subsidiarity, regional power | Authority, identity, democracy | Facet | Medium |
| **Populism** | People-versus-elite rhetoric, anti-pluralism, direct representation claims | Authority, identity, economic and social positions | Tag/discourse lens, not a default axis; populism can occur on multiple economic positions | High |
| **Equality / hierarchy** | Preferred status distribution and tolerance for social hierarchy | Economic model, social values, authority, identity | Cross-cutting facet | Medium-high |
| **Technology / expertise** | Trust in experts, technological change, technocracy, and traditional knowledge | Authority, ecology, economic model | Contextual module or tags | Medium |

The candidate list is not a claim that these concepts are unimportant. It separates importance from dimensional distinctness. A concept can deserve a prominent explanation page or filter without deserving a new coordinate in every result.

## Audit of the current 25 items

The audit uses four questions: Does each item express one main construct? Is its polarity unambiguous? Could a person in another culture interpret it differently? Could it plausibly load on another dimension? The current item wording remains unchanged during the validation study so that the existing `5d-v1` results are reproducible.

The actions below are recommendations for a future item-bank revision, not silent edits to v1.

### Economic model

| Item | Assessment | Main concern | Future action |
| --- | --- | --- | --- |
| `economic-1` | Review | “Own” and “tightly control” are different instruments; “essential” varies by country | Split ownership from regulation/control, or define the target policy explicitly |
| `economic-2` | Review | Combines higher taxes, public spending, and reducing inequality; also invokes an outcome | Split taxation, public provision, and redistribution into separate items |
| `economic-3` | Keep provisionally | Mostly one market-versus-planning belief, but “usually” and “better” invite economic knowledge and confidence judgments | Retain as an anchor; test whether respondents interpret “better” as efficiency, fairness, or both |
| `economic-4` | Review | “Ownership or governance” combines property and workplace participation; governance can cross-load with democracy | Separate worker ownership from worker voice in management |
| `economic-5` | Review | Combines taxes, regulation, and narrower services; the implied trade-off may be interpreted differently | Ask about low taxation/regulation and public-service scope separately |

### Social values

| Item | Assessment | Main concern | Future action |
| --- | --- | --- | --- |
| `social-1` | Review | Relationships and gender roles are two domains; “actively remove restrictions” can sound legalistic | Split personal relationships from gender-role policy and test translations |
| `social-2` | Review | Family, religion, culture, and social stability are bundled; “stable” is a leading positive cue | Use separate items and avoid assuming stability is desirable |
| `social-3` | Keep provisionally | Clear pluralism/autonomy item, though it also touches authority | Keep as an anchor and compare with a less state-focused autonomy item |
| `social-4` | Review | Combines anti-discrimination enforcement, identity, and conflict with local tradition | Separate equal protection from the specific question of overriding local norms |
| `social-5` | Review | Schools, religion, inherited culture, and self-expression are bundled | Split education policy from religious/cultural transmission |

### Authority

| Item | Assessment | Main concern | Future action |
| --- | --- | --- | --- |
| `authority-1` | Review | Speech restriction, official judgment, and social-order threat are all present | Use a clear speech-restriction item and test whether threat perception is a separate moderator |
| `authority-2` | Keep provisionally | A strong civil-liberties anchor, but personal autonomy overlaps with social values | Retain; add a parallel institutional-limits item in the next bank |
| `authority-3` | Review | Police powers, intelligence powers, dissent, and disorder are bundled | Separate surveillance, policing, and dissent restrictions |
| `authority-4` | Keep provisionally | Focuses on protest and limits of disruption; wording is understandable but context-sensitive | Retain; cognitive-test “disrupts normal life” across languages |
| `authority-5` | Keep provisionally | A single executive-power scenario, but emergency judgments may depend on crisis experience | Retain as a scenario anchor and record whether respondents imagine a specific crisis |

### National identity

| Item | Assessment | Main concern | Future action |
| --- | --- | --- | --- |
| `identity-1` | Keep provisionally | Direct sovereignty/international-law trade-off; may also measure legal institutionalism | Clarify whether the target is national sovereignty or a preference about courts |
| `identity-2` | Review | Migration and cultural exchange are separate policies and are also a candidate facet | Split migration from general cultural exchange |
| `identity-3` | Review | Common culture, group identity, and national cohesion are bundled; minority-rights attitudes may dominate | Separate civic commonality from cultural assimilation and group pluralism |
| `identity-4` | Keep provisionally | Clear willingness to share authority across borders, but overlaps foreign policy | Pair with identity-1 and test whether respondents see it as international cooperation or foreign policy |
| `identity-5` | Keep provisionally | A useful national-partiality trade-off, but explicitly invokes equal need and can load on equality | Keep as an anchor; add a non-resource-based national-obligation item |

### Foreign policy

| Item | Assessment | Main concern | Future action |
| --- | --- | --- | --- |
| `foreign-1` | Review | Interests, allies, and influence are three different reasons for action | Split defense of allies from coercive influence and proactive intervention |
| `foreign-2` | Review | Alliances and interventions are distinct; “whenever possible” is vague | Ask about alliances and interventions separately with a defined response frame |
| `foreign-3` | Review | Diplomacy and trade are not the same alternative to force | Separate diplomatic settlement from trade and sanctions |
| `foreign-4` | Keep provisionally | Tests humanitarian intervention as a scenario; moral salience may overpower the force preference | Retain as a scenario anchor and add a neutral non-humanitarian force item |
| `foreign-5` | Review | Deterrence, territorial defense, nation-building, and regime change are multiple policies | Split defensive deterrence from external political transformation |

The main finding of the audit is not that the current five dimensions are unusable. It is that five items per dimension is a compact teaching instrument, and several items currently carry more than one policy idea. The safest revision path is a larger item bank with more candidate items per construct, followed by predeclared item reduction. That preserves the app’s simple presentation while reducing dependence on any single double-barreled statement.

## Study design

### Phase 0: preregistration and version lock

Before collecting validation data:

1. Publish the hypotheses, candidate facets, model definitions, exclusions, sample quotas, outcomes, missing-data rules, and decision thresholds in an OSF preregistration or equivalent public registry.[^7]
2. Freeze the `5d-v1` item text, polarity, scoring, and cache schema. Store the validation branch separately from production scoring.
3. Label all analyses as **confirmatory** or **exploratory** before seeing results. Exploratory findings can improve the next item bank but cannot silently change the v1 model.
4. Publish a data dictionary and analysis code. Do not publish raw political answers if they could make participants identifiable.

### Phase 1: cognitive interviews

Use approximately 30–45 interviews as a practical first round, distributed across the intended languages and cultural contexts rather than treating an English-speaking convenience sample as universal. Include participants with different education levels and at least one accessibility pathway, such as keyboard-only use or a screen reader.

Use concurrent think-aloud plus neutral probes after each item:

- What did the question mean to you?
- Which words were unclear or unusually loaded?
- What situation did you imagine?
- What did you consider before choosing an answer?
- Did you feel the question asked one thing or several things?
- Would the same answer make sense in your country or community?

This follows the purpose of cognitive interviewing: examining comprehension, recall, judgment, and response processes before fielding a questionnaire.[^8] Code each problem by construct, wording, translation, response scale, sensitivity, and accessibility. An item requires revision if multiple participants independently interpret it as a different construct, regularly ask for a definition, or cannot explain why their answer fits the response scale.

For international release, use a translation workflow modeled on the European Social Survey’s translation, review, adjudication, pretesting, and documentation approach. Translation is not complete when the words are grammatically correct; the intended construct and response task must also survive.[^9]

### Phase 2: privacy-safe quantitative pilot

The pilot should be a research mode, not an advertising or personalization pipeline.

Recommended minimum design:

- **600 participants minimum; 1,000 target** for initial item and model diagnostics, recruited with explicit quotas for language/region. Treat an open web sample as non-probability data and report selection bias.
- **150–200 participants for test–retest**, returning after approximately 7–14 days. Exclude participants who report a major political-position change or who clearly remembered the answers.
- **At least three language/cultural groups** before making cross-national claims. If the app launches only in one language, label the evidence accordingly rather than implying global portability.
- **A small accessibility usability sample** separate from psychometric sample quotas, with keyboard, zoom, reduced motion, and screen-reader paths tested.

Collect only what is necessary to evaluate the hypotheses: a random study code, language, broad region, age band, and optional broad demographic variables needed for a preregistered invariance analysis. Do not collect name, email, precise location, advertising identifiers, browsing history, political party membership, or IP address for the validation dataset. Keep consent, contact, and answer data in separate stores; use short retention and delete raw data after the documented analysis window. AAPOR’s ethics guidance emphasizes transparency, informed participation, data stewardship, and reporting limitations in public-opinion research.[^10]

### Phase 3: reliability and structure

Analyze the five current items per dimension as an ordinal item set. The simple equal-weight average remains the product score, but validation should also test polychoric correlations, ordinal omega, exploratory factor analysis, confirmatory factor analysis, and an ordinal item-response model where sample size allows. Factor analysis or IRT can reveal whether items are unidimensional, locally dependent, weakly discriminating, or functioning differently across groups.[^6][^11]

Predeclare these as screening rules, not universal laws:

| Evidence | Provisional screen | Interpretation |
| --- | --- | --- |
| Item comprehension | No repeated critical misunderstanding in cognitive interviews | A statistical fit cannot rescue an item that people do not understand consistently |
| Missingness / abandonment | Item missingness ≤5% where skipping is possible; report abandonment by item and group | High abandonment may indicate sensitivity, confusion, or overload |
| Item discrimination | Corrected item-total association ≥0.20 as a warning threshold; inspect weak items rather than delete automatically | A low association can indicate a bad item, a real subconstruct, or restricted variation |
| Internal consistency | Ordinal omega ≥0.70 provisional; report uncertainty and item content | High consistency is not proof of validity and can reflect redundant wording |
| Structural validity | Intended factor should be interpretable; use fit indices and cross-loadings as evidence, not a single pass/fail number | A five-factor solution is useful only if the factors have substantive meaning |
| Test–retest | ICC or an equivalent ordinal agreement estimate ≥0.70 provisional, with SEM and confidence interval | Instability can come from the item, the respondent, or genuine political change |
| Measurement error | Report SEM and the proportion of respondents whose score moves bands on retest | A 20-point label must not be presented as precise when the error is similar in size |
| Cross-group comparability | Test configural, metric, and scalar invariance; allow theoretically justified partial invariance and report it | If the construct changes meaning across groups, compare profiles cautiously or locally |

Measurement invariance is required before comparing means or treating country/language differences as substantive. Configural invariance asks whether the structure is similar; metric invariance asks whether item relations are comparable; scalar invariance is needed for meaningful mean comparisons. Non-invariance is a measurement warning, not proof that a group is inconsistent or less rational.[^12]

### Phase 4: usability and accessibility

Measure both performance and comprehension:

- median and 90th-percentile completion time;
- abandonment and backtracking by item;
- percentage completing on mobile and desktop;
- self-reported neutrality, clarity, and result usefulness;
- ability to explain each axis in the user’s own words;
- number of users who confuse a band label with a moral judgment;
- keyboard-only completion, visible focus, target size, contrast, labels, error recovery, zoom, reduced motion, and screen-reader announcements.

Use WCAG 2.2 as the accessibility baseline. WCAG success criteria are testable and cover accessibility across devices and disability types, but passing WCAG does not replace testing with actual users.[^13]

Set product targets before the pilot. A reasonable initial target for this deliberately short teaching questionnaire is a median completion time of no more than eight minutes, abandonment below 20%, and no group showing a materially worse comprehension or completion rate without an explanation. These are product thresholds proposed for this app, not claims about universal survey quality.

## Comparing 4D, 5D, 6D, 7D, and facets

The comparison must be nested and preregistered. Otherwise, a researcher can add or remove dimensions until a preferred result appears.

### Candidate models

| Model | Definition | Purpose |
| --- | --- | --- |
| **M4** | The five current axes with one axis removed; test all five leave-one-out variants, not only one hand-picked 4D model | Measures whether each current dimension adds distinct information |
| **M5** | Current Economic + Social + Authority + National identity + Foreign policy | Stable product baseline, `5d-v1` |
| **M6** | M5 plus one candidate facet at a time; report Democracy/institutions, Religion/secularism, Immigration/integration, and Ecology/growth separately | Finds whether any candidate adds information beyond the core |
| **M7** | M5 plus every preregistered pair of candidate facets, with multiplicity control; the headline pair should be chosen before data, not after | Tests whether two additions provide incremental value without overload |
| **M5 + facets** | Keep the five coordinates and show one or more candidate facets as labeled modules/tags | Tests whether education and filtering gain most of the value without changing the main result |

The primary 4D comparison should be leave-one-out. The primary 6D and 7D comparisons should not assume that democracy or religion is automatically more important than immigration or ecology; each candidate must face the same criteria.

### Preregistered comparison criteria

A model is preferable only when it satisfies all mandatory gates below in a held-out or cross-validated analysis:

1. **Content:** experts and target users agree that each dimension is relevant, understandable, and sufficiently covered; missing domains are documented.
2. **Response process:** cognitive interviews show that participants answer the intended construct rather than a proxy.
3. **Structure:** the proposed dimensions are interpretable, not merely statistical clusters, and do not show avoidable cross-loading or local dependence.
4. **Reliability:** scores have acceptable internal consistency and test–retest stability for the intended educational use.
5. **Measurement error:** uncertainty is small enough that the app can explain when a 20-point band is unstable.
6. **Cross-context behavior:** the structure and item meanings are sufficiently comparable for the intended language and country claims; otherwise claims are scoped.
7. **Incremental value:** an added dimension explains a preregistered outcome or improves held-out prediction beyond M5 by a meaningful, predefined amount, not merely by producing a more detailed chart.
8. **Comprehension and accessibility:** users can explain the added concept and complete the model without a material, unexplained increase in abandonment or overload.
9. **Maintenance and ethics:** the extra content can be sourced, updated, versioned, and moderated without making the result look more precise than the evidence allows.

For incremental value, predeclare at least two external or behavioral criteria, such as issue-specific attitudes and self-described political labels. There is no universal gold standard for ideology. Use multiple convergent hypotheses, report effect sizes and intervals, and avoid judging a model by agreement with a single party label.

## Unit-of-analysis rules

The app currently mixes explanatory examples for individuals, parties, governments, countries, cities, and historical cases. Those are not interchangeable observations and should never be silently placed in one statistical sample.

| Unit | What a profile means | Minimum metadata |
| --- | --- | --- |
| **Individual** | Self-reported current preferences from a person answering the questionnaire | Date, language, country context if voluntarily supplied, uncertainty, instrument version |
| **Party** | Expert or text-based estimate of a party’s program/leadership at a specific election or wave | Party, country, election/date, source method, coder/expert uncertainty |
| **Government** | Institutional or policy configuration during a defined governing period | Country, government/coalition, dates, policy sources, level of implementation |
| **Country** | Aggregated public attitudes or institutions at a time, not the average personality of citizens | Survey wave or country-year, sample/design, weighting, measurement uncertainty |
| **City/state** | A subnational case or historical setting, only where evidence supports that level | Territory definition, date range, governing authority, source coverage |
| **Historical case** | An interpretive profile of a bounded regime, movement, or period | Name, dates, scope, evidence, disagreement, anachronism warning |

CHES provides party-position estimates and trend files, the Manifesto Project codes statements in party programs, WVS provides cross-national individual attitudes, and V-Dem estimates institutional concepts with country-year and historical coverage. These sources can triangulate a label, but they do not turn one unit into another.[^1][^2][^3][^4]

The product should display “illustrative match,” “partial match,” or “source-based estimate” instead of implying that a country or historical leader literally answered the current questionnaire. Historical labels require period context; modern endpoint names should not be projected backward without an explicit interpretive note.

## Decision gates for a future core expansion

A candidate facet may become a mandatory core axis only when all of the following are documented:

- a clear construct definition and boundary against the existing five;
- evidence from content review and cognitive interviews in the intended language contexts;
- acceptable reliability and measurement-error estimates;
- interpretable structure and no unaddressed cross-loading that makes the score ambiguous;
- adequate measurement invariance for each comparison the product intends to make;
- incremental value beyond the 5D core on preregistered outcomes or user tasks;
- no unacceptable comprehension, accessibility, completion-time, or result-overload cost;
- a versioned migration plan that leaves existing `5d-v1` results unchanged;
- a source and update plan that can support references, historical notes, and uncertainty;
- an explicit limitations statement and an independent review before release.

If a candidate fails only the incremental-value or overload gate, keep it as a facet/module. If it fails comprehension or cross-context comparability, do not expose it as a numerical score until the wording and evidence are repaired. If evidence remains mixed, publish the uncertainty rather than forcing a 6D or 7D conclusion.

## Privacy, governance, and publication

Political answers should be treated as sensitive preference data in the validation workflow even when the public site does not require accounts. The validation dataset must not be combined with advertising identifiers, social graphs, browsing histories, or identity data. A user who only wants to learn their profile should be able to use the product without entering research mode.

The public methodology report should include:

- item wording and score direction for each version;
- sampling and recruitment limitations;
- language and accessibility coverage;
- missingness, abandonment, and exclusions;
- reliability, measurement error, and invariance results;
- exploratory analyses clearly separated from preregistered analyses;
- examples of profiles that remain uncertain or mixed;
- the exact rule used to retain, revise, demote, or promote an axis.

## Current conclusion

The evidence and design logic support a **stable didactic 5D core with optional facets**, not a claim that five dimensions are the final scientific model of politics. The next empirical milestone is the item and comprehension study. Until that study and a privacy-safe quantitative pilot are completed, the app should describe scores as approximate educational profiles, keep the existing schema stable, and avoid presenting candidate facets as validated axes.

## Sources

[^1]: World Values Survey Association, [WVS documentation and questionnaire archive](https://www.worldvaluessurvey.org/WVSContents.jsp?CMSID=Documentation), accessed September 2026.
[^2]: Rovny, Jan, Jonathan Polk, Ryan Bakker, Liesbet Hooghe, Seth Jolly, Gary Marks, Marco Steenbergen, and Milada Anna Vachudova, [Chapel Hill Expert Survey — Europe](https://www.chesdata.eu/ches-europe/), 2024 survey and trend-file documentation.
[^3]: Manifesto Project Team, [A short primer on the Manifesto Project and its methodology](https://manifestoproject.wzb.eu/down/tutorials/primer.html), 2 September 2025.
[^4]: Varieties of Democracy Project, [Methodology](https://www.v-dem.net/about/v-dem-project/methodology/) and [Historical V-Dem](https://v-dem.net/about/historical-v-dem/), accessed September 2026.
[^5]: American Educational Research Association, American Psychological Association, and National Council on Measurement in Education, [Standards for Educational and Psychological Testing](https://www.apa.org/science/programs/testing/standards), open-access standards page.
[^6]: COSMIN, [COSMIN Manual, version 2.0](https://www.cosmin.nl/wp-content/uploads/COSMIN-manual-V2_final.pdf), 2024, especially the taxonomy of content validity, structural validity, reliability, measurement error, and cross-cultural validity.
[^7]: OSF, [Registrations and preregistrations](https://help.osf.io/article/330-welcome-to-registrations), guidance for documenting hypotheses, methods, and analysis plans before data collection.
[^8]: U.S. National Center for Health Statistics, [Cognitive interviewing](https://www.cdc.gov/nchs/ccqder/question-evaluation/cognitive-interviewing.html), Collaborating Center for Questionnaire Design and Evaluation Research.
[^9]: European Social Survey, [Methodology overview](https://www.europeansocialsurvey.org/methodology/methodology-overview) and [Survey specification](https://www.europeansocialsurvey.org/methodology/methodology/ess-specification), including translation, pretesting, sampling, and data-quality procedures.
[^10]: American Association for Public Opinion Research, [Standards and ethics](https://aapor.org/standards-and-ethics/), revised June 2026.
[^11]: Reise, Steven P., Keith F. Widaman, and Robin H. Pugh, [“Confirmatory factor analysis and item response theory: Two approaches for exploring measurement invariance”](https://pubmed.ncbi.nlm.nih.gov/8272470/), *Psychological Bulletin* 114(3), 1993.
[^12]: Putnick, Diane L., and Marc H. Bornstein, [“Measurement invariance conventions and reporting: The state of the art and future directions for psychological research”](https://pmc.ncbi.nlm.nih.gov/articles/PMC5145197/), *Developmental Review* 41, 2016.
[^13]: World Wide Web Consortium, [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/wcag/), W3C Recommendation, 12 December 2024.
