# Rights and Provenance Audit

## Executive decision

The safest publication model for Politic Spectrum is:

1. Write the site’s explanations, summaries, comparisons, labels, and warnings in original language.
2. Cite and link to the source used for each material claim.
3. Do not copy source pages, book chapters, tables, charts, screenshots, images, datasets, or database extracts into the website unless a licence or written permission clearly allows it.
4. Hold direct quotations until the exact edition or translation, locator, attribution, jurisdiction, and commercial-use position are recorded.
5. Use open or public-domain replacements when they provide equivalent evidence with less rights uncertainty.
6. Treat political answers and inferred political profiles as sensitive data for privacy design, even though this audit is primarily about copyright and publication rights.

This is a risk-control and editorial policy, not legal advice. Fair use, quotation exceptions, public-domain status, privacy, defamation, trademark, publicity, database rights, and licence interpretation remain fact-specific. Before a monetized public launch, a qualified lawyer in the relevant publication and hosting jurisdictions should review the final source ledger and terms.

## Current status

The current app publishes original interface and explanatory text with links to external sources. It does not bundle external datasets, photographs, maps, logos, screenshots, or copied chapters. The content layer now includes a rights/provenance record for every research source, source link, and author reference in `src/content/rights.js`.

Direct quotations are currently treated as **review-required** and are no longer displayed in the public UI. The author/work link remains available with a notice that the quotation is held. This is intentionally conservative while the exact edition, translation, and commercial publication position are verified.

The existing 25-word automated quote limit is an editorial guardrail only. It is not a legal safe harbour or a universal quotation limit.

## Rights vocabulary

| Status | Meaning | Default website action |
| --- | --- | --- |
| `original-analysis` | Text written by this project from independently checked facts and interpretations | Publish with claim-level provenance and editorial review |
| `link-only` | External source is useful to consult or cite, but no reproduction right has been recorded | Link and paraphrase independently; do not copy expressive text or media |
| `public-domain-candidate` | The underlying historical work may be public domain, but the edition, transcription, translation, or jurisdiction still needs checking | Link and paraphrase; quote only after edition/translation review |
| `open-license` | A licence gives reuse permission under stated conditions | Follow attribution, licence, ShareAlike, and change-notice requirements exactly |
| `restricted-data` | Provider terms restrict redistribution, commercial use, or both | Do not mirror or bundle the data; use permitted derived results and citations only |
| `permission-sensitive` | Copyright or other rights make reproduction uncertain or permission-dependent | Link only until permission or qualified legal review is recorded |
| `unknown-escalate` | Rights holder, licence, or terms cannot be identified confidently | Do not publish the material; replace, obtain permission, or escalate |

`publicationStatus` is separate from `rightsStatus`. A source can be publicly readable but still be `link-only`; a work can be historically old but still be `review-required` because the online translation or edition may be protected.

## Source inventory

### Research and data sources

| Source | Current use | Rights finding | Publication decision |
| --- | --- | --- | --- |
| Pan & Xu, *China’s Ideological Spectrum* | Evidence that political preferences can be multidimensional | Scholarly publication; no reuse licence recorded | Link and cite; do not reproduce article text, figures, or tables |
| Stanford Encyclopedia of Philosophy entries | Conceptual background for socialism, liberalism, libertarianism, conservatism, nationalism, anarchism, fascism, feminism, populism, Confucianism, Legalism, and medieval thought | SEP states that entries are copyrighted and gives limited user rights; commercial electronic distribution is not generally cleared[^1] | Link and independently summarize; no copied entry text or screenshots |
| V-Dem | Democracy and institutional context | V-Dem states that its dataset is CC BY-SA 4.0, including commercial use with attribution and ShareAlike[^2] | Reuse only the data covered by the licence, retain version/attribution, and do not assume every linked page or graphic has identical terms |
| World Values Survey | Cross-national values context | WVS documentation states that access is subject to non-redistribution terms; some files also specify non-commercial use[^3] | Do not place WVS files or extracts in the repository; cite and link permitted findings only |
| Chapel Hill Expert Survey | Party-position and policy-position context | Public downloads and codebooks are available, but this audit records no blanket commercial redistribution licence | Link/cite and use independently authored summaries; obtain permission before bundling files or large extracts |
| Manifesto Project | Party-programme categories and historical party context | Terms prohibit redistribution except with written authorization and require provenance and citation[^4] | Do not redistribute manifestos, corpus files, or dataset mirrors; use permitted derived analysis and cite the required version |
| Oxford foreign-policy article | Comparative foreign-policy scholarship | Scholarly publication; no reuse licence recorded | Link and cite; do not copy article text, figures, or tables |
| *Political Ideologies and Worldviews* open textbook | Introductory comparative background | Open Textbook Library lists CC BY-NC 4.0[^5] | Non-commercial reuse may be possible with attribution; this ad-supported project should link and independently summarize unless commercial permission is obtained |
| United States Holocaust Memorial Museum | Historical fascism and Nazi context | Institutional content and media are not cleared for commercial reproduction by this project | Link only; do not copy text, images, graphics, or museum branding |
| Pan-Africanism journal article | Scholarly background | Scholarly publication; no reuse licence recorded | Link and cite; do not reproduce article text, figures, or tables |

The V-Dem, WVS, and Manifesto Project rows are especially important: “free to access” does not mean “free to redistribute.” Open data, source links, derived statistics, and copied source material are different publication objects.

### Current source links used beside profiles

These links are displayed as provenance for original profile descriptions. They are not a licence to copy the linked page.

| Source link group | Current pages | Default status |
| --- | --- | --- |
| Stanford Encyclopedia, Encyclopaedia Britannica, Internet Encyclopedia of Philosophy, Nobel Prize, publisher pages, Econlib, Marxists.org, Project Gutenberg, Fordham sourcebooks, German History in Documents, Columbia University Press, University of Chicago, Basic Books | Biography, political thought, and book landing pages | `link-only`; use original summaries and bibliographic links |
| United States Holocaust Memorial Museum | Hitler, fascism, and Nazi-racism pages | `permission-sensitive`; no institutional text, image, or logo reproduction |
| Freedom House | Country pages for China, North Korea, Vietnam, Netherlands, Denmark, Switzerland, Hungary, India, Norway, and Sweden | `permission-sensitive`; Freedom House says commercial use of its content requires prior approval[^6] |

The source-link labels in the application are short attribution labels and hyperlinks. They should not be expanded into copied source descriptions without a separate rights decision.

## Direct-quotation audit

The current author-reference file contains six short quotations. Their word count is below the project’s editorial limit, but none should be treated as automatically cleared for a commercial, ad-supported website.

| Reference | Current role | Rights posture | Action |
| --- | --- | --- | --- |
| Marx & Engels, *Manifesto of the Communist Party* | Direct historical primary-text anchor | Underlying work is old, but the linked English edition/translation must be verified | Hold quote; record edition and translation before release |
| Hayek, “The Use of Knowledge in Society” | Direct scholarly quotation | Copyright-sensitive modern work | Hold quote; use an independent paraphrase and link unless permission or a documented exception is approved |
| Mill, *On Liberty* | Direct primary-text anchor | Underlying work is old, but the exact Project Gutenberg edition/transcription needs review | Hold quote pending edition review |
| Locke, *Second Treatise of Government* | Direct primary-text anchor | Underlying work is old, but the exact Project Gutenberg edition/transcription needs review | Hold quote pending edition review |
| Mussolini/Gentile, “The Doctrine of Fascism” | Direct historical primary-text anchor | Translation and sourcebook rights are not cleared | Hold quote; link and summarize critically |
| Renan, “What Is a Nation?” | Direct historical primary-text anchor | Underlying work may be old, but the linked English translation/sourcebook needs review | Hold quote pending translation review |

For a quote to become `allowed`, the ledger must contain: exact work and edition, author, translator if applicable, source URL or stable identifier, page/paragraph/timestamp locator, original language where relevant, the reason the quotation is necessary, the jurisdictional rationale, attribution text, and a reviewer decision. The quote should remain short, contextual, and subordinate to the project’s own analysis.

## Copyright and quotation rules by jurisdiction

### United States

U.S. fair use is a case-specific analysis involving purpose and character, nature of the work, amount and substantiality, and market effect. The U.S. Copyright Office expressly states that there is no fixed number of words or percentage that automatically qualifies as fair use; commercial purpose is relevant but not automatically decisive.[^7]

The U.S. Copyright Office also explains that, as of 2026, works published in the United States before 1 January 1931 are in the public domain. That rule does not resolve every foreign, unpublished, anonymous, restored, translated, or separately edited work.[^8]

### Brazil

Brazil’s Copyright Law 9.610/1998 includes a quotation limitation for passages used for study, criticism, or controversy, to the extent justified by the purpose, with the author and origin identified. It also contains a separate small-excerpt limitation with its own conditions.[^9] These provisions are not a general permission to reproduce modern books, academic articles, website content, or datasets in a commercial product.

The current policy is therefore: use original summaries and claim-level citations; quote only when the passage is necessary, short, accurately attributed, and approved for the exact use. Do not rely on the Portuguese quotation exception as a blanket commercial clearance.

### Switzerland

Swiss Copyright Act Article 25 permits quotations from published works when the quotation serves explanation, reference, or illustration and its extent is justified by that purpose. The quotation must be designated and the source and author identified.[^10] The English Fedlex version is informational; the applicable official-language text and the facts of the use control.

Swiss public-domain status and moral-rights issues must be checked for the work and edition. A historic author’s death date alone does not clear a modern translation, edited transcription, cover, illustration, or database compilation.

### Cross-border publication

Copyright protection is territorial even though international treaties coordinate national treatment and minimum protections. A website can be accessible in several countries, so the conservative workflow is to comply with the law and licence terms relevant to the operator, host, publication activity, and audience rather than assuming that the most permissive country controls.[^11]

## Public domain, licences, and databases

Creative Commons distinguishes licences that permit reuse under conditions from public-domain tools. CC BY permits commercial reuse with attribution; CC BY-SA adds a ShareAlike obligation; NC licences do not clear commercial use; ND licences do not clear adapted versions. CC also warns that the Public Domain Mark should not be used where public-domain status is only jurisdiction-specific or otherwise uncertain.[^12]

The practical rules for this project are:

- **Public domain:** verify jurisdiction, first publication, author/co-author death dates, edition, translation, restoration, and any separate illustrations or compilation.
- **CC BY:** preserve creator, title, source URL, licence link, version, and changes.
- **CC BY-SA:** preserve the same information and check whether the distributed adaptation must carry ShareAlike.
- **CC BY-NC / NC-SA / NC-ND:** do not use in an ad-supported or otherwise commercial product without permission or a separate legal basis.
- **No licence shown:** treat as copyrighted and link-only.
- **Dataset access:** read the dataset terms, API terms, rate limits, database rights, attribution requirements, redistribution rules, and version notes. Do not infer a data licence from a webpage being downloadable.

## Content-type handling rules

| Material | Default treatment |
| --- | --- |
| Facts, dates, names, historical events, and ideas | Research independently and express in original language; facts are not a licence to copy the source’s selection, structure, wording, or database |
| Project-authored summaries | Allowed as original analysis after source verification; cite material claims and identify interpretation/inference |
| Direct quotations | Short, necessary, exact, contextual, attributed, locator-backed, and rights-reviewed; otherwise suppress and link |
| Translations | Treat as a derivative expression; do not translate a protected source for publication without permission or a documented exception; preserve the original locator |
| Tables and charts | Rebuild from permitted data or create original tables; do not copy arrangement, styling, or screenshots from a source without clearance |
| Datasets and database extracts | Follow the data provider’s licence and terms; no WVS or Manifesto Project redistribution in this repository; V-Dem requires CC BY-SA compliance |
| Screenshots and webpage captures | Do not use by default; they reproduce layout, text, images, and branding; link to the page instead |
| Logos, party symbols, flags, and seals | Review trademark, official-emblem, copyright, and misleading-affiliation concerns separately; do not add them by default |
| Portraits, photographs, maps, and artwork | Obtain a clear licence or use a verified public-domain/open-licensed replacement with attribution; review privacy and publicity rights for people |
| Living people | Use precise, sourced, non-defamatory descriptions; distinguish documented conduct, allegation, interpretation, and uncertainty; provide correction/takedown path |
| Extremist movements and historical perpetrators | Use critical historical context, avoid endorsement signals, do not reproduce propaganda graphics by default, and distinguish analysis from advocacy |
| User-contributed material | Obtain a clear submission licence and moderation/takedown terms; do not publish user political profiles or comments with identity data by default |

## Privacy and political-profile risk

Copyright compliance does not make it safe to collect or sell questionnaire answers. The GDPR treats data revealing political opinions as a special category, and EU guidance recognizes that profiling or inferred categorization can reveal such information even when the original inputs appear less sensitive.[^13] Brazil’s LGPD treats political opinion and religious conviction as sensitive personal data, including information inferred from other data.[^14] Swiss data-protection authorities likewise describe political and ideological views and automated political profiling as particularly sensitive.[^15]

For the current no-login product, the safest default is:

- keep questionnaire answers and scores in local browser storage only;
- do not send answers, scores, or political-profile labels to advertising networks;
- do not combine them with cookies, device identifiers, IP-based profiles, or social accounts;
- do not sell or share political results with third parties;
- if a voluntary research pilot is later added, use explicit consent, a separate research mode, data minimization, retention limits, and a separate privacy review;
- publish only aggregated, non-identifying results after disclosure-control review.

This privacy rule is stricter than the minimum needed for the current static app, because political profiling has a high misuse and reputational risk.

## Provenance record for every material claim

The future bibliography and content model should require these fields:

```text
claimId
contentId
sourceId
sourceType                 primary | scholarly | journalism | tertiary | dataset | archive | user
author
title
publisher
publicationDate
editionOrVersion
urlOrDoi
isbnOrIdentifier
accessedAt
locator                    page | section | paragraph | timestamp | archive URL
quote                      optional; never required for a paraphrase
originalLanguage           optional
translationNote            optional
rightsStatus
license
commercialUse
publicationStatus
verifiedBy
verifiedAt
archiveUrl                 optional
changeNote                 optional
conflictNote               optional
correctionOrTakedownNote   optional
```

The distinction between `quote`, `close paraphrase`, `original analysis`, and `inference` must be explicit. A bibliography entry alone is not sufficient provenance for a specific claim. The internal research ledger should preserve the exact passage consulted and the editorial decision without publishing a copyrighted passage unnecessarily.

## Implementation safeguards added

- `src/content/rights.js` records a rights status, licence note, commercial-use decision, publication status, editorial action, and review date for every current source and author reference.
- `scripts/validate-content.mjs` fails when any current research source, source link, or author reference lacks a rights record or required provenance fields.
- Direct quotations that are not marked `allowed` are held from public display; the app shows a rights-review notice instead.
- The current app bundles no external dataset, source-page copy, photograph, map, logo, or screenshot.
- The 25-word quote guard remains a content-quality check, not a legal test.
- The full source inventory and legal-risk rationale are documented here; the future Bibliography page should surface the relevant public citation and licence information without exposing internal notes that contain copyrighted extracts.

## Risk register and escalation

| Risk | Level | Default response |
| --- | --- | --- |
| Modern text copied too closely into a summary | High | Rewrite independently, compare against the source, preserve a claim citation, and obtain review if the expression remains close |
| Translation or online edition assumed to be public domain | High | Verify the edition/translator and jurisdiction; replace with a clearly cleared edition or suppress the quote |
| WVS or Manifesto Project data redistributed | High | Remove the files/extracts; retain only permitted derived results and citations; contact the provider if uncertain |
| Freedom House or USHMM content used commercially | High | Link only or request written permission before publication |
| CC BY-SA data reused without notices or ShareAlike | High | Add full attribution/licence/change notices and check the licence for distributed adaptations |
| Database/API terms or rate limits ignored | High | Review terms before downloading or automating; use official API access and cache only what is permitted |
| Screenshot, logo, flag, portrait, or map reused without clearance | Medium-high | Replace with original or clearly licensed media; review trademark, publicity, privacy, and official-emblem issues |
| Living person described inaccurately or as endorsing a label | Medium-high | Use precise sources, partial-match language, dates, uncertainty, correction path, and editorial review |
| Political answers linked to advertising or identity data | High | Keep processing local; do not share with ad systems; create a separate consented research pipeline if needed |

Escalation path: (1) rewrite as original analysis, (2) link to the source instead of reproducing it, (3) replace with an open/public-domain source, (4) request written permission, (5) suppress the material, or (6) obtain qualified legal review. “Educational,” “open on the internet,” “AI-generated,” or “only a few words” is not itself a sufficient override.

## Pre-publication checklist

- [ ] Every material claim has a source record and a stable locator when needed.
- [ ] Every direct quotation is accurate, necessary, attributed, contextual, and rights-reviewed.
- [ ] Every translation is labeled and separately cleared or replaced.
- [ ] No restricted dataset, database extract, screenshot, source-page copy, or third-party media is bundled without permission.
- [ ] Every open licence has the required attribution, licence link, version, and change notice.
- [ ] Public-domain determinations identify the jurisdiction and exact edition.
- [ ] Commercial use has been checked for every non-original source and licence.
- [ ] Living-person, extremist-content, defamation, trademark, publicity, and correction risks have been reviewed.
- [ ] Political answers and scores are not sent to advertising or data-broker systems.
- [ ] A copyright/contact/takedown address and correction procedure are available.
- [ ] The audit is repeated whenever a source, quote, image, dataset, or content record is added or materially changed.

## Sources

[^1]: Stanford Encyclopedia of Philosophy, [Editorial Information, Copyright Information, and Terms of Use](https://plato.stanford.edu/info.html), accessed 12 September 2026.
[^2]: Varieties of Democracy Project, [FAQ — V-Dem Dataset licence and reuse](https://www.v-dem.net/about/faq/), accessed 12 September 2026.
[^3]: World Values Survey Association, [WVS documentation and data conditions](https://www.worldvaluessurvey.org/WVSContents.jsp?CMSID=Documentation) and [integrated data conditions of use](https://www.worldvaluessurvey.org/WVSContents.jsp?CMSID=intconduse), accessed 12 September 2026.
[^4]: Manifesto Project, [Terms of Use](https://manifestoproject.wzb.eu/information/documents/terms_of_use), accessed 12 September 2026.
[^5]: Open Textbook Library, [Political Ideologies and Worldviews: An Introduction — conditions of use](https://open.umn.edu/opentextbooks/textbooks/political-ideologies-and-worldviews-an-introduction), accessed 12 September 2026.
[^6]: Freedom House, [Content Permissions](https://freedomhouse.org/about-us/content-permissions), accessed 12 September 2026.
[^7]: U.S. Copyright Office, [Fair Use Index](https://copyright.gov/fair-use/) and [Fair Use FAQ](https://www.copyright.gov/help/faq/faq-fairuse.html), accessed 12 September 2026.
[^8]: U.S. Copyright Office, [What Is Copyright?](https://www.copyright.gov/what-is-copyright/) and [Duration of Copyright, Circular 15A](https://www.copyright.gov/circs/circ15a.pdf), accessed 12 September 2026.
[^9]: Brazil, Lei nº 9.610/1998, [updated official text, especially Articles 45–48](https://www2.camara.leg.br/legin/fed/lei/1998/lei-9610-19-fevereiro-1998-365399-normaatualizada-pl.html), accessed 12 September 2026.
[^10]: Swiss Confederation, [Federal Act on Copyright and Related Rights, Article 25](https://www.fedlex.admin.ch/eli/cc/1993/1798_1798_1798/en?version=20250701), status 1 July 2025, accessed 12 September 2026.
[^11]: World Intellectual Property Organization, [Guide to the Berne Convention](https://www.wipo.int/edocs/pubdocs/en/copyright/615/wipo_pub_615), accessed 12 September 2026.
[^12]: Creative Commons, [Licences](https://creativecommons.org/share-your-work/use-remix/cc-licenses/), [Public Domain tools](https://creativecommons.org/public-domain/), and [Public Domain Mark](https://creativecommons.org/public-domain/pdm/), accessed 12 September 2026.
[^13]: European Union, [General Data Protection Regulation, Article 9](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679), and [Regulation 2024/900 recital 79 on inferred political profiles](https://eur-lex.europa.eu/eli/reg/2024/900/oj/eng), accessed 12 September 2026.
[^14]: Brazil, [Lei Geral de Proteção de Dados and official guidance on sensitive data](https://www.gov.br/cade/pt-br/acesso-a-informacao/lgpd), accessed 12 September 2026.
[^15]: Federal Data Protection and Information Commissioner, Switzerland, [Guide on elections and votes](https://www.edoeb.admin.ch/dam/en/sd-web/BtrvC0iBh6aw/Leitfaden%2520Wahlen%20und%20Abstimmungen_Version%202022_EN.pdf), accessed 12 September 2026.
