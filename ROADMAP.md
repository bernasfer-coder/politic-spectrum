# Publication roadmap

## Goal

Publish a trustworthy, secure, accessible v1 of Politic Spectrum for public use, then grow it carefully. The launch version will keep questionnaire answers local, use deterministic scoring, expose the four current modes, provide cited content, and avoid behavioral advertising or political profiling.

This roadmap is sequential where a later step depends on an earlier quality or safety gate. It is intentionally release-focused: new features that are not required for a safe v1 should wait until after launch.

## Current state

- React/Vite application with Questionnaire, FreeMode, Spectrum Library, and Bibliography modes.
- Six dimensions and researched 20-point bands are represented in the content model; the former 5D model remains a validation comparator.
- Questionnaire progress and completed results persist locally in the browser.
- Content validation runs as part of the production build.
- The app is currently testable on the CT at `192.168.1.130:4173`; this is not yet the public production perimeter.
- GitHub repository: `bernasfer-coder/politic-spectrum`.

## Release principles

1. Accuracy and transparency before reach or revenue.
2. Local-first processing: no login, no server-side political profile, and no raw-answer collection by default.
3. Human-reviewed, cited political content with visible limitations and corrections contact.
4. Secure, reproducible, rollback-ready deployments.
5. No advertising or analytics vendor is enabled until the privacy, policy, and security gates are approved.
6. Every launch-critical decision is recorded in GitHub and represented by a test or a checklist.

## Roadmap sequence

### Milestone 0 — freeze the v1 scope

- [ ] Confirm the v1 feature list and stop unrelated feature expansion.
- [x] Confirm the canonical six-dimension model and release terminology; document the 4D/5D/6D/many-dimensional decision in `DIMENSION_COUNT_RESEARCH.md`.
- [ ] Define the release owner, reviewer, incident contact, and publication domain.
- [ ] Create a `v1` release checklist and keep all changes in Git.

**Exit gate:** the team agrees what will and will not ship in v1.

### Milestone 1 — product and content integrity

Resolve the current content/branding work before launch:

- [x] Close or complete [Issue #6](https://github.com/bernasfer-coder/politic-spectrum/issues/6): reconcile the “5D” logo with the actual dimensions shown.
- [ ] Continue [Issue #1](https://github.com/bernasfer-coder/politic-spectrum/issues/1): normalize labels, overlaps, distinctions, and filters.
- [ ] Review all author, movement, country, historical, and city claims with source links and confidence/qualification language.
- [ ] Complete [Issue #5](https://github.com/bernasfer-coder/politic-spectrum/issues/5): publish accurate AI-assistance and human-review disclosure where appropriate.
- [ ] Add the About/Methodology page with operator identity, mission, scoring explanation, limitations, sources, corrections route, privacy links, and sponsorship policy.
- [ ] Ensure the result is described as an illustrative political profile, not a diagnosis, scientific personality test, or voting recommendation.

**Exit gate:** every public claim has a source or is clearly marked as an illustrative interpretation, and the UI consistently describes the product.

### Milestone 2 — automated quality and accessibility

Complete [Issue #4](https://github.com/bernasfer-coder/politic-spectrum/issues/4):

- [ ] Unit tests for scoring, bands, boundaries, color themes, and content helpers.
- [ ] Interaction tests for all three modes and mode switching.
- [ ] Reload tests for partial and completed questionnaire persistence, reset, invalid storage, and unavailable localStorage.
- [ ] Browser tests against the production build at desktop and mobile sizes.
- [ ] Keyboard, focus, contrast, screen-reader, reduced-motion, and automated accessibility checks.
- [ ] CI runs validation, tests, build, and browser smoke tests on pull requests.

**Exit gate:** a clean checkout can run the documented test command, and the critical user journeys pass against the production build.

### Milestone 3 — privacy and security foundation

Use [Issue #2](https://github.com/bernasfer-coder/politic-spectrum/issues/2) as the decision record:

- [ ] Freeze the launch data policy: local answers/results only; no login; no political-profile database.
- [ ] Add privacy notice, cookie/local-storage inventory, retention statement, and clear-local-data control.
- [ ] Keep optional analytics, tracking, ad tags, and social scripts disabled by default.
- [ ] Document a browser-to-server data-flow and threat model.
- [ ] Move public traffic behind HTTPS, a reverse proxy/CDN or equivalent edge, and a restricted origin.
- [ ] Expose only required web ports; keep SSH on an administration path and never expose development services publicly.
- [ ] Add security headers, dependency update/audit workflow, secret handling, logs with short retention, backups, monitoring, and rollback.
- [ ] Review every third-party script or iframe before it can be added.

**Exit gate:** an external visitor can use the app without creating an account or sending questionnaire answers to the server, and the public perimeter has documented recovery and rollback procedures.

### Milestone 4 — ownership, business, and monetization decision

Complete [Issue #3](https://github.com/bernasfer-coder/politic-spectrum/issues/3) before accepting advertising or sponsorship money:

- [ ] Identify the current operator and tax residence.
- [ ] Decide whether to publish initially as an individual or through an entity.
- [ ] Compare Brazil, Switzerland, and the US using total net cash, compliance, payment, VAT/sales-tax, withholding, liability, and IP costs.
- [ ] Record the approved business owner of the domain, repository, content, trademarks, and contracts.
- [ ] Select an ethical monetization path, if any; do not sell cookies, political profiles, or score-based audiences.

**Exit gate:** the operator, ownership, payment destination, privacy controller, and advertising policy are documented. Monetization may remain disabled for v1.

### Milestone 5 — production deployment candidate

- [ ] Obtain and configure the publication domain.
- [ ] Build from a clean Git commit using the lockfile and CI.
- [ ] Deploy an immutable versioned release to the production host.
- [ ] Configure TLS, DNS, reverse proxy/CDN, origin firewalling, health checks, and certificate-expiry monitoring.
- [ ] Verify security headers, cache behavior, compression, asset integrity, redirects, canonical URLs, and error pages.
- [ ] Test a full backup/restore or redeployment from Git without relying on the development machine.
- [ ] Keep the previous release available for immediate rollback.

**Exit gate:** the production candidate is reachable on the real domain, reproducible, monitored, and recoverable.

### Milestone 6 — private beta and release candidate

- [ ] Invite a small group of trusted testers across desktop/mobile and different browsers.
- [ ] Collect structured feedback without collecting political answers or identifiable profiles.
- [ ] Check comprehension of the five dimensions, disclaimers, references, color changes, and persistence behavior.
- [ ] Verify share links, if enabled, do not leak raw answers through URLs, referrers, logs, or previews.
- [ ] Fix launch-blocking defects and re-run the full test/build/security checklist.
- [ ] Tag the release candidate in Git and record known limitations.

**Exit gate:** no open critical security, privacy, data-integrity, accessibility, or navigation defects.

### Milestone 7 — public v1 launch

- [ ] Publish the approved release tag and deployment commit.
- [ ] Publish About, Methodology, Sources, Privacy, Corrections, and Contact pages.
- [ ] Publish robots/sitemap/canonical metadata and verify the main pages in Search Console.
- [ ] Enable privacy-preserving share/copy controls if they passed review.
- [ ] Announce through organic educational channels, civic/academic outreach, and open-source communities.
- [ ] Do not enable behavioral ads, political microtargeting, or third-party tracking as part of launch.
- [ ] Publish a short changelog and an accessible feedback/correction path.

**Exit gate:** a first-time visitor can understand what the tool does, who operates it, how scoring works, what data stays local, and how to report an error.

### Milestone 8 — post-launch operations and measured growth

- [ ] Monitor uptime, errors, performance, certificate status, dependency alerts, and suspicious traffic without tracking political behavior.
- [ ] Review corrections and source changes on a scheduled cadence.
- [ ] Measure only approved aggregate product metrics.
- [ ] After stable usage, revisit [Issue #2](https://github.com/bernasfer-coder/politic-spectrum/issues/2) and [Issue #3](https://github.com/bernasfer-coder/politic-spectrum/issues/3) before adding contextual ads, sponsors, analytics, donations, or other revenue.
- [ ] Treat new runtime AI, user accounts, user-generated content, databases, or political advertising as separate roadmap decisions.

**Exit gate:** the project has an owner, an operating cadence, and a documented decision for every new data or vendor flow.

## Launch blockers

Do not publish v1 if any of these remain unresolved:

- inconsistent dimension count or misleading “5D” branding;
- unverified high-impact political claims or missing source/review status;
- no clear operator, privacy contact, correction route, or methodology explanation;
- questionnaire answers or political results sent to the server or third parties without an approved design;
- public origin exposing development/admin services;
- missing HTTPS, rollback, backup/redeployment, or dependency-update path;
- critical failing test, accessibility issue, data-loss issue, or mobile navigation defect;
- monetization code enabled without an approved privacy/vendor/policy review.

## Publication definition of done

- [ ] Product, branding, content, and references are internally consistent.
- [ ] All three modes work on supported browsers and mobile layouts.
- [ ] Questionnaire progress/results survive refresh locally and can be cleared.
- [ ] Test, content validation, build, accessibility, and production smoke checks pass.
- [ ] About, Methodology, Sources, Privacy, Corrections, Contact, and limitations are public.
- [ ] Production is served over HTTPS behind a hardened perimeter with monitoring and rollback.
- [ ] No unapproved analytics, ads, political targeting, or data sale is active.
- [ ] Release tag, deployment commit, changelog, and known limitations are recorded.
- [ ] The first public announcement and feedback channel are ready.

## Related issues

- [#1 — Research taxonomy and normalize historical political labels](https://github.com/bernasfer-coder/politic-spectrum/issues/1)
- [#2 — Privacy-safe advertising, publicity, sharing, and secure hosting](https://github.com/bernasfer-coder/politic-spectrum/issues/2)
- [#3 — Business entity, jurisdiction, monetization, and About Us](https://github.com/bernasfer-coder/politic-spectrum/issues/3)
- [#4 — Automated test suite](https://github.com/bernasfer-coder/politic-spectrum/issues/4)
- [#5 — AI-assistance disclosure](https://github.com/bernasfer-coder/politic-spectrum/issues/5)
- [#6 — Reconcile 5D branding and dimension count](https://github.com/bernasfer-coder/politic-spectrum/issues/6)
