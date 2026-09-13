# AI-assisted development and public-content disclosure research

Research snapshot: 2026-09-12. This is a product, editorial, and compliance planning document, not legal advice. The current app calculates the six-dimensional profile locally with deterministic code; it does not expose a conversational AI or send questionnaire answers to an AI service.

## Preliminary recommendation

Add a concise, permanent disclosure in the About/Methodology area rather than a frightening first-visit warning or a banner on every screen. The disclosure should say exactly where AI assistance was used, what humans verified, and what the application does not do.

Add prominent labels to particular public-interest text, images, audio, or video only when the applicable rules require it or when the material has not received substantive human review. Do not label the questionnaire result as “AI-generated”: the result is produced by the documented scoring algorithm from the user’s answers.

### Proposed disclosure, pending factual review

> **AI-assisted development and editorial review**
>
> AI-assisted tools helped with parts of this website’s software development, drafting, and research workflow. Human reviewers selected the dimensions, checked sources, made editorial decisions, reviewed the political content, and tested the application. The questionnaire result is calculated by deterministic code in your browser; no AI evaluates your answers, and your answers are not sent to an AI service. AI assistance does not make the historical or political descriptions authoritative—please consult the linked sources and corrections process.

This wording must be edited if any statement is not true. If AI-generated text or media remains substantively unreviewed, label that material specifically instead of relying only on the general About-page disclosure.

## What must be distinguished

### AI-assisted software construction

Using an AI coding assistant for scaffolding, debugging, tests, styling, or refactoring is different from operating an AI system for the public. The European Commission’s Article 50 guidance says source code is outside the AI-generated-content marking obligation, and the AI Act’s public-facing transparency rules are aimed at specific interactions and types of generated/manipulated content. This supports a conclusion that a universal “AI was used somewhere in development” warning is not the same as a mandatory content label.

The project should still maintain a private development record of AI-assisted contributions, human review, dependency/license checks, and test evidence. This protects provenance and makes the About-page statement auditable.

### AI-assisted research or drafting of political content

The EU AI Act requires deployers to clearly label AI-generated or manipulated text published to inform the public on matters of public interest when it has not undergone human review or editorial control. The Commission says human review must examine the substance by people with relevant knowledge and professional judgment; a superficial spelling or grammar check is not enough. Editorial control means that a responsible editorial entity has authority to fact-check, alter, or reject the substance.

For this project, political-history descriptions, author claims, country examples, and explanations of spectrum labels are public-interest material. Every claim should therefore have a source, a review status, and a human approver. “AI-assisted” should not be used to imply that the AI itself researched or verified a source.

### AI at runtime

If a future feature introduces a chatbot, AI-generated explanations, adaptive recommendations, or an AI classifier, it requires a separate product and risk review. Users would need to know when they are interacting with AI, the system’s purpose and limitations would need to be documented, and user answers must not be sent to a model without a separate privacy/security decision.

The current deterministic questionnaire should be described accurately as an algorithmic scoring system, not as an AI assessment. Avoid suggesting that the site can discover a person’s “true” ideology or make a scientifically validated psychological diagnosis.

## Legal and standards findings to validate

### European Union / EEA

The European Commission states that Article 50 transparency obligations apply from 2 August 2026. They cover, among other cases, AI systems that directly interact with people, machine-readable marking of certain synthetic outputs, deepfakes, and AI-generated or manipulated text about matters of public interest that lacks substantive human review/editorial control. The Commission’s guidance also identifies source code and certain assistive standard-editing uses as outside some marking obligations.

Because this site covers politics and democratic processes, the content workflow must be assessed under the current Article 50 guidance before launch or material content refreshes. This is a scope assessment, not a conclusion that the site is automatically subject to every AI Act obligation.

### Switzerland

Research whether the Swiss legal framework, sector-specific rules, advertising rules, data-protection obligations, and any adopted international commitments create a disclosure duty for this project. Regardless of a legal minimum, the Swiss operating context makes transparent sourcing, accountability, and a visible operator identity important for a site that discusses political views.

### Brazil

Brazilian government transparency guidance for public services recommends clearly communicating when an interface uses AI, adapting disclosure to the type and impact of the interaction, and reviewing externally published AI-assisted content. That guidance is aimed at public-sector services and should not be treated as a complete private-sector legal answer. Research current Brazilian rules and regulator guidance before relying on it.

### United States and copyright

The US Copyright Office states that people can claim copyright for their human contributions to a work containing AI-generated material, but AI-generated material may need to be identified and excluded from a copyright claim. This is not a general website-warning requirement. It does support keeping a provenance record for text, images, code, and other assets, and avoiding a claim that all content was exclusively human-authored if that is not accurate.

### Voluntary trust and governance

NIST’s voluntary AI Risk Management Framework treats accountability, transparency, explainability, privacy, fairness, and human judgment as trustworthiness characteristics, and recommends documentation and clear responsibility. This is a useful governance baseline even where the law does not require a public disclosure.

## Disclosure design options

| Option | Use | Recommendation |
| --- | --- | --- |
| About/Methodology note | Explains AI-assisted coding, research, review, and limitations | Required for trust; preferred default |
| Inline content label | Marks a specific AI-generated public-interest paragraph or media item | Required when applicable; use when review is absent or material is synthetic |
| First-visit modal | Announces AI assistance before anyone can use the app | Avoid unless users directly interact with AI or law requires immediate notice |
| Footer micro-label | Persistent short link such as “AI-assisted development disclosure” | Optional companion to the About page |
| Machine-readable provenance | Metadata or content marks for applicable generated media | Research and implement where Article 50 or a vendor standard requires it |
| Changelog/audit record | Records when AI tools influenced content/code and what human review occurred | Required internally; publish a summary when useful |

The disclosure should be easy to find, written in plain language, accessible by keyboard and screen reader, translated with the rest of the site, and dated/versioned. It should not be buried in a legal document or worded so broadly that it makes users think the questionnaire is AI-powered.

## Editorial and technical controls

- [ ] Record which content and code were AI-assisted, generated, translated, or edited.
- [ ] Require a human reviewer with relevant subject knowledge for political-history claims and source summaries.
- [ ] Keep claim-level source links and distinguish primary sources, scholarly interpretations, journalism, and illustrative examples.
- [ ] Never publish AI output as a source or as proof that a person, country, movement, or city held a position.
- [ ] Run the content validator, automated tests, link checks, and a human fact-check before each content release.
- [ ] Preserve a review date, reviewer, source version/date, and correction history for material claims.
- [ ] Add a visible correction/contact route and a process for retracting unsupported AI-assisted text.
- [ ] Keep the deterministic scoring algorithm and its dimension definitions explainable without AI jargon.
- [ ] Do not send user answers, profile scores, local-storage contents, or political labels to AI vendors.
- [ ] Do not use AI to infer additional political opinions, persuasion susceptibility, or ad-targeting segments.
- [ ] If generated images or media are added, keep origin metadata and label synthetic or materially altered content where required.
- [ ] Review third-party coding-model terms, confidentiality settings, training/data-use settings, and code-license risks before using them on private material.

## Proposed implementation scope after approval

1. Add an About/Methodology section containing the approved disclosure, human-review policy, scoring explanation, sources, limitations, and corrections link.
2. Add a short footer link to that section.
3. Add a content field such as `aiDisclosure`, `humanReviewedAt`, and `reviewer` only if the content model needs to distinguish generated, assisted, and human-authored material.
4. Add validation preventing a public-interest content item from being released without a source and review status.
5. Add tests ensuring that the disclosure is reachable from every mode and that the questionnaire result is not described as an AI judgment.
6. Revisit the copy whenever runtime AI, generated media, user-submitted content, or automated content generation is introduced.

## Research deliverables / acceptance criteria

- [ ] Inventory all AI use in the repository, research workflow, assets, translations, and deployment process.
- [ ] Classify each use as development assistance, content drafting, content transformation, media generation, runtime interaction, or automated decision support.
- [ ] Produce a jurisdiction matrix for EU/EEA, Switzerland, Brazil, the US, and other launch markets.
- [ ] Determine whether any current public content requires a specific AI-generated label under applicable rules.
- [ ] Define substantive human-review, editorial-control, source-verification, and correction requirements.
- [ ] Decide whether to disclose model/provider names, or only the type and purpose of AI assistance.
- [ ] Approve final About-page wording and any inline labels before implementation.
- [ ] Add repository provenance and content-review records without exposing confidential prompts, user data, or secrets.
- [ ] Add automated tests and release gates for source links, review metadata, disclosure visibility, and “not an AI assessment” wording.
- [ ] Document the trigger for re-review if runtime AI, political persuasion, ad targeting, or user-generated content is added.

## Sources

[^1]: European Commission, [Guidelines on transparency obligations for providers and deployers of AI systems](https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems), 20 July 2026.
[^2]: European Commission, [Transparency obligations under Article 50 of the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act), updated 2026.
[^3]: European Union, [Regulation (EU) 2024/1689, Artificial Intelligence Act](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A32024R1689), 13 June 2024.
[^4]: NIST, [Artificial Intelligence Risk Management Framework 1.0](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10), 26 January 2023.
[^5]: US Copyright Office, [Copyright and Artificial Intelligence](https://www.copyright.gov/ai/), including guidance on works containing AI-generated materials.
[^6]: Governo Digital Brasil, [Guia de Design de Transparência](https://www.gov.br/governodigital/pt-br/infraestrutura-nacional-de-dados/inteligencia-artificial-1/publicacoes/guia-de-design-de-transparencia), public-sector guidance.
