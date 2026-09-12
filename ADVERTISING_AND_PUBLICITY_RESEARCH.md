# Advertising, publicity, privacy, and secure hosting research

Research snapshot: 2026-09-12. This is a product and engineering decision document, not legal advice. The target assumption is a worldwide public launch from a Swiss/European operating context, with no user accounts and a static-first React application.

## Executive recommendation

1. Keep questionnaire answers and the calculated profile on the user’s device by default. Do not collect “all cookies”, attempt to read unrelated third-party cookies, build a political audience list, or sell cookie IDs, answers, inferred ideology, or score-based segments.
2. Launch with privacy-preserving direct sponsorships/house banners or contextual advertising that does not depend on a person’s political result. Do not load an ad or analytics vendor until its data flows, contract, policy, and consent requirements are reviewed.
3. Treat the questionnaire result as potentially sensitive political-opinion data. Never pass the score, selected answers, spectrum label, or a result-bearing URL to an ad or analytics vendor. Do not use the result to select, exclude, or personalize ads.
4. Build publicity around indexable educational content, citations, transparent methodology, privacy-preserving share links, and partnerships with educators/civic organizations. Avoid political microtargeting.
5. Before public launch, move the origin behind HTTPS and a reverse proxy/CDN, close unnecessary ports, add security headers, establish dependency and backup procedures, and complete a threat model.

## Why indiscriminate cookie collection is rejected

The questionnaire can reveal a user’s political opinions. Under GDPR, data revealing political opinions is a special category of personal data, and the European Commission describes explicit consent as one of the possible exceptions to the general prohibition. Swiss FDPIC guidance likewise classifies data from which political or ideological views can be inferred as sensitive and warns that automated analysis can create sensitive personality profiles.

Cookies are not a free, general-purpose dataset. They may identify or distinguish a browser, and advertising cookies may be linked by the ad provider to other information. Reading or storing a cookie, local-storage value, fingerprint, IP address, or event history for advertising is a separate processing purpose that needs a documented legal basis, notice, minimization, retention, security, and user controls. Selling or sharing a political profile would create a much higher-risk processing and governance problem than merely remembering an unfinished questionnaire locally.

The default privacy boundary for this project should therefore be:

- first-party local storage only for resuming the questionnaire and preserving a completed result;
- no login, email, name, raw answer submission, cross-site identifier, fingerprinting, or server-side political profile;
- no result, label, answer vector, or political-interest inference in query strings, referrers, ad requests, analytics events, or crash reports;
- only essential consent/preferences storage before opt-in; optional measurement and advertising remain disabled until consent is valid for the relevant jurisdiction;
- if aggregate research is ever added, collect only an explicitly documented, coarse, non-identifying aggregate with a short retention period and a suppression threshold, and never expose small groups.

Google’s publisher policy explicitly prohibits using Google products or ad code to select or target personalized ads, or to collect audience data such as cookie lists, based on political affiliation or political ideology. This would independently rule out a score-based Google advertising audience even if a user had consented to ordinary advertising cookies.

## Monetization options to compare

### Option A — direct sponsorships and house banners (recommended first)

Serve a small, reviewed set of sponsor creatives from our own static assets or a privacy-reviewed sponsor endpoint. Use a signed/validated manifest containing the creative, destination URL, campaign dates, and an accessibility label. Do not add a tracking pixel by default. Report only sponsor-provided clicks or coarse server totals if needed.

Advantages: lowest data exposure, no ad auction, predictable creative review, easy kill switch, and no dependency on a CMP for a tracker-free banner. Risks: sales effort, lower fill rate, and the need to vet sponsors and political adjacency.

### Option B — contextual, privacy-oriented ad network

Evaluate networks such as EthicalAds and Carbon Ads as candidates, not as pre-approved choices. EthicalAds documents content and country-level contextual targeting without personal-data tracking, but its publisher guide says it actively seeks developer-focused sites with roughly 50k+ monthly page views and requires specific placement/exclusivity conditions. Carbon Ads is invitation-only and exclusive. Confirm current eligibility, political-content rules, data-processing terms, geography, revenue, and whether the network can accept this site before implementation.

Advantages: less behavioral profiling and less engineering than a self-built ad marketplace. Risks: third-party script/iframe supply-chain exposure, limited inventory, brand-safety mismatch, exclusivity, and vendor policy changes.

### Option C — Google AdSense, starting with non-personalized ads

Evaluate only after the site has a privacy policy, cookie inventory, consent flow, content/brand-safety review, and a secure production origin. Google documents contextual targeting as based on page content, while personalized targeting uses user interests/demographics and other criteria. The initial configuration should be non-personalized and must not use the user’s result page or score as a targeting signal.

For EEA, UK, and Switzerland traffic, Google requires publishers serving personalized ads to use a Google-certified CMP integrated with the IAB Transparency and Consent Framework. Google also says the publisher remains responsible for the tools used to gather consent and that CMP certification is not a determination that the implementation complies with every privacy law. TCF requirements and vendor lists change, so this must be rechecked immediately before launch.

### Option D — subscriptions, donations, or institutional sponsorship

Compare donations, grants, educational licensing, and institution-sponsored research as alternatives to behavioral advertising. These can reduce the incentive to build a sensitive user-data business and may fit the project’s civic/educational purpose better, although payment providers introduce their own personal-data and compliance obligations.

### Explicitly out of scope unless a future legal review approves it

- selling or brokering cookie lists, device IDs, email lists, or political segments;
- retargeting people based on visiting a spectrum label or completing the questionnaire;
- ad creative or placement selected from a person’s score;
- fingerprinting, “evercookies”, hidden pixels, session replay, or third-party tracking before consent;
- uploading raw answers or result vectors to an ad, analytics, social, or AI provider.

## Publicity and growth path

### 1. Search-first educational content

Create durable, citation-backed pages for the methodology, each dimension, each spectrum label, historical context, and limitations. Clearly distinguish descriptive history from the project’s own illustrative archetypes. Use people-first writing, crawlable links, canonical URLs, accurate titles/headings, accessible text, and structured data only when it accurately represents visible content.

Generate a sitemap and submit it through Search Console. A sitemap is a discovery hint, not a ranking guarantee. Do not generate thousands of thin pages for every score combination; those pages would be difficult to maintain and could reduce trust. Prefer a curated set of high-quality spectrum and methodology pages.

### 2. Privacy-preserving sharing

Add native share buttons using simple outbound links or the Web Share API. Do not load social-network JavaScript merely to render a share button. Share only an optional, user-approved summary such as the five coarse dimension values or a named archetype; never include raw answers or a personal identifier.

Prefer a versioned URL fragment for a shareable result, for example `/#/shared/<version>/<encoded-profile>`, so the result is not sent to the server in the normal HTTP request. Add an explicit warning that anyone receiving the link can see the shared profile. Provide “copy link”, “download profile”, and “clear local data” controls.

### 3. Organic distribution

Prioritize short explainers, neutral methodology threads, classroom material, citations, and demonstrations of how two profiles differ. Contact political-science educators, libraries, civic-literacy groups, journalists, and open-source communities. Publish the limitations and source quality prominently; credibility is part of the growth loop for a politically sensitive tool.

### 4. Paid promotion

Treat paid promotion as a separate policy/legal workstream. Google’s political-content policy varies by region and can require verification, disclosures, and compliance with election laws. EU Regulation 2024/900 is fully applicable from 10 October 2025 and imposes transparency and targeting rules for political advertising; it allows online targeting only under strict conditions and prohibits profiling using special categories such as political opinions. TikTok says paid political advertising is not allowed, and LinkedIn prohibits political ads, including ads exploiting a sensitive political issue.

The default launch recommendation is no political microtargeting. If paid promotion is tested, use broad contextual/search placements or non-political educational framing only after a jurisdiction-by-jurisdiction policy check, with no audience built from questionnaire activity and no targeting by ideology, political interest, or inferred score.

## Consent, privacy, and governance workstream

Before any non-essential vendor is enabled, produce:

- a data-flow diagram showing browser, origin, CDN, CMP, ad vendor, analytics, social share endpoints, logs, backups, and administrators;
- a cookie/local-storage inventory with name, owner, purpose, data, duration, domain, access mode, and whether it is essential;
- a privacy notice and a plain-language result disclaimer;
- a consent design with equal accept/reject prominence, granular purposes, vendor list, withdrawal/edit controls, versioning, and proof of consent;
- a data-retention and deletion policy for logs, consent records, support requests, and any future aggregate dataset;
- a vendor register and data-processing/transfer review for every ad, analytics, hosting, error-reporting, and social provider;
- a process for access, deletion, correction, objection, and privacy/security incident handling where applicable;
- an age/safety review: the site should not knowingly profile children, and advertising should be disabled or limited if the audience or jurisdiction requires it.

EDPB cookie-banner guidance rejects pre-ticked boxes, inactivity, and interfaces that push users toward consent. Swiss FDPIC guidance published in 2025 also discusses the risks of detailed profiles based on political opinions and the use of cookies/similar technologies. The consent UX must therefore be designed as a real choice, not a revenue gate.

## Secure hosting and operations

The current direct CT address is suitable for testing, not the final public perimeter. Research and implement a production boundary with:

- a real domain and HTTPS with automatic certificate renewal;
- a reverse proxy/CDN or equivalent edge protection in front of the origin;
- firewall rules exposing only required web ports; SSH restricted to administration keys, allowlisted networks, or a private management path;
- the origin hidden from public DNS where feasible, with a tested recovery path if the edge provider fails;
- immutable or reproducible builds from Git, a locked dependency graph, automated dependency/security updates, and a rollback procedure;
- CSP, HSTS after HTTPS is confirmed, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and frame protections appropriate to the share/ad design;
- no inline third-party scripts by default; use allowlisted origins, SRI where practical, sandboxed ad iframes, and an explicit review for every new script;
- no database or API until a real requirement exists; if one is added, apply authentication, authorization, validation, rate limiting, backups, secret management, and monitoring;
- privacy-aware logs with short retention and no questionnaire answers, result vectors, consent strings, or full referrers unless expressly justified;
- uptime, error-rate, origin-health, certificate-expiry, dependency, and suspicious-traffic alerts without tracking individual political behavior.

Use the OWASP Top 10:2025 as the awareness baseline and OWASP ASVS 5.0.0 as the verifiable security checklist. CSP limits the origins and resource types a page may load, while Subresource Integrity lets browsers verify that a CDN-delivered resource was not unexpectedly modified. These controls reduce—but do not eliminate—the risk introduced by ad and analytics code.

## Proposed staged rollout

### Phase 0 — privacy and security foundation

- document the data-flow and threat model;
- keep the current local-only questionnaire cache;
- add privacy, methodology, disclaimer, share-link, and clear-data documentation;
- harden the public hosting boundary and headers;
- add a feature flag that keeps all monetization vendors disabled.

### Phase 1 — reach without behavioral advertising

- publish curated SEO pages, sitemap, metadata, and accessible share controls;
- run organic outreach and measure only consent-free operational metrics that are genuinely necessary;
- test direct sponsorships or house banners with a manual creative and destination review.

### Phase 2 — contextual monetization experiment

- compare direct sponsorship, EthicalAds/Carbon Ads, and Google non-personalized AdSense;
- verify vendor policies, political-content acceptance, contracts, data transfers, revenue, and performance;
- run a small A/B test using aggregate revenue and performance metrics, not user-level political profiles;
- keep a one-switch rollback and verify that the app works with ad blockers and with all optional cookies rejected.

### Phase 3 — only if justified

- choose a CMP and implement consent-gated vendor loading;
- consider personalized advertising only after an independent legal review, and never use political results/labels as targeting data;
- recheck Google/IAB/platform rules, EU/Swiss/UK requirements, and vendor policies before each material change.

## Research deliverables / acceptance criteria

- [ ] Decision matrix comparing direct sponsorships, contextual networks, Google AdSense non-personalized/personalized modes, donations/grants, and other credible candidates.
- [ ] Recommendation with expected setup effort, revenue assumptions, traffic thresholds, vendor lock-in, political-content/brand-safety restrictions, data collected, consent burden, and exit strategy.
- [ ] Jurisdiction matrix covering Switzerland, EEA, UK, US states likely to receive traffic, and any additional launch markets.
- [ ] Cookie/local-storage/analytics/ad-vendor inventory and a browser-level data-flow diagram.
- [ ] Threat model and secure-hosting checklist for the current CT deployment and the final public perimeter.
- [ ] Publicity plan with SEO, share, organic outreach, partnerships, paid-promotion policy checks, and measurable success metrics that do not require political profiling.
- [ ] Share-link design reviewed for leakage through URLs, referrers, server logs, screenshots, and social previews.
- [ ] Consent UX specification with reject/withdraw behavior and vendor gating.
- [ ] Editorial/brand-safety policy for sponsor approval, political content, election periods, hate/extremism, misinformation, children, and conflicts of interest.
- [ ] Launch checklist, rollback plan, incident-response owner, and a rule that no monetization code is merged until this issue’s recommendation is approved.

## Primary sources

1. [European Commission: special categories of personal data](https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en)
2. [Swiss FDPIC: elections and votes data-protection guide](https://www.edoeb.admin.ch/dam/edoeb/en/dokumente/datenschutz/Leitfaden%20Wahlen%20und%20Abstimmungen_Version%202022_EN.pdf.download.pdf/Leitfaden%20Wahlen%20und%20Abstimmungen_Version%202022_EN.pdf)
3. [Swiss FDPIC: technical and organisational data-protection measures](https://www.edoeb.admin.ch/dam/en/sd-web/eVhrh8wY3QcR/TOM_EN.pdf)
4. [Swiss FDPIC: cookies and similar technologies guidance, version 1.1](https://www.edoeb.admin.ch/dam/en/sd-web/brLL9rM3ny9d/Leitfaden%20des%20ED%C3%96B%20betreffend%20Datenbearbeitungen%20mittels%20Cookies%20und%20%C3%A4hnlichen%20Technologien%20V.%201.1%20vom%2006.10.2025_EN.pdf)
5. [Google AdSense: publisher consent requirements for EEA, UK, and Switzerland](https://support.google.com/adsense/answer/13554116?hl=en)
6. [Google AdSense: how advertising cookies work](https://support.google.com/adsense/answer/7549925?hl=en)
7. [Google Publisher Policies: personalized advertising](https://support.google.com/publisherpolicies/answer/15101728?hl=en-GB)
8. [Google Ads: political content policy](https://support.google.com/adspolicy/answer/6014595?hl=en)
9. [European Commission: transparency and targeting of political advertising](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/democracy-eu-citizenship-anti-corruption/democracy-and-electoral-rights/transparency-and-targeting-political-advertising_en)
10. [EUR-Lex: Regulation (EU) 2024/900](https://eur-lex.europa.eu/eli/reg/2024/900/oj/eng)
11. [EDPB cookie-banner taskforce report](https://www.edpb.europa.eu/system/files/2023-01/edpb_20230118_report_cookie_banner_taskforce_en.pdf)
12. [EthicalAds publisher guide](https://www.ethicalads.io/publisher-guide/) and [publisher FAQ](https://www.ethicalads.io/publishers/faq/)
13. [Carbon Ads publisher FAQ](https://www.carbonads.net/faq)
14. [Google Search Essentials](https://developers.google.com/search/docs/essentials) and [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
15. [OWASP Top 10:2025](https://owasp.org/www-project-top-ten/) and [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/)
16. [MDN: Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) and [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Subresource_Integrity)
17. [TikTok: politics, governments, and elections advertising policy](https://ads.tiktok.com/help/article/tiktok-ads-policy-politics-religion-and-culture?trk=public_post_comment-text)
18. [LinkedIn Advertising Policies](https://www.linkedin.com/legal/ads-policy)
