# Political Spectrum Explorer — Content and Data Architecture

Status: proposed and adopted for the next development phase  
Date: 2026-09-12

## Decision summary

Use a hybrid architecture:

1. Git-managed structured content is the canonical source for the political taxonomy, explanations, historical labels, entities, relationships, and citations.
2. The public explorer ships a generated, versioned content bundle and performs questionnaire scoring, six-axis matching, and filtering in the browser.
3. PostgreSQL is introduced as a published read model when editorial volume, search, localization, or analytics needs justify it. It is not the first destination for every public interaction.
4. CDN/browser HTTP caching comes before Redis. Redis is an optimization to add only after measurements show that the API or search layer needs it.
5. Raw questionnaire answers and personal data are not collected by default. Optional analytics, if added, stores consented, coarse aggregates only.

This keeps the high-volume path static and fast while preserving a serious data model for research and editorial growth.

## Why we should not cache every questionnaire answer

The current questionnaire has 30 questions and five answer choices per question. The raw answer space is:

```text
5^30 = 931,322,574,615,478,515,625 combinations
```

The scoring model reduces those answers to at most 21 possible integer scores on each of six dimensions:

```text
21^6 = 85,766,121 score vectors
```

That reduced space is still unnecessary to materialize. Scoring is a small deterministic calculation in the browser; the application should calculate it on demand and cache only the content documents that explain the result.

## Canonical content layout

The first implementation phase uses versioned source files in the repository. The data can later be imported into PostgreSQL without changing the public concepts.

```text
content/
  dimensions/          # dimension definitions, endpoints, scoring notes
  bands/               # 20-point bands and label assignments
  labels/              # historical and contemporary political labels
  entities/            # people, parties, countries, states, cities, movements
  relations/           # synonym, subtype, influence, contrast, succession, etc.
  claims/              # evidence-backed statements about labels and entities
  sources/             # bibliographic records and stable URLs
  translations/        # locale-specific names and descriptions
  releases/            # taxonomy version and changelog metadata
```

The current React data will be moved into `src/content/` as the first step, then expanded toward this layout as the catalog grows. Content objects should have stable IDs, explicit provenance, a taxonomy version, and a review status.

## Recommended future PostgreSQL read model

PostgreSQL should be an editorial/publishing and discovery layer, not a per-click scoring dependency. The core tables are:

```text
taxonomy_releases
dimensions
bands
labels
label_aliases
label_positions
label_relations
entities
label_entity_links
sources
claims
claim_sources
translations
tags
label_tags
```

Useful relation types include `synonym_of`, `alias_of`, `subtype_of`, `parent_of`, `influenced_by`, `contrasted_with`, `overlaps_with`, `not_same_as`, `historically_renamed`, `used_by`, `associated_with`, `reaction_against`, and `successor_to`.

Positions must carry context rather than pretending that a label has one timeless coordinate: `taxonomy_release_id`, dimension, score/range, period, geography, confidence, and source-backed notes. This allows the same label to be distinguished across countries and historical periods.

Use JSONB for flexible evidence metadata only where it is genuinely useful; keep dimensions, relationships, IDs, dates, and searchable fields relational. PostgreSQL's GIN indexes support JSONB and full-text workloads, while materialized views can provide precomputed public read models when needed.

## Request and caching strategy

### Phase 1: static-first

- Bundle taxonomy content at build time.
- Version the bundle using a release ID or content hash.
- Serve immutable assets with long-lived cache headers.
- Let the browser compute questionnaire results and FreeMode profiles locally.
- Support an optional share URL containing only five scores and the taxonomy version.

### Phase 2: published content API

Add a read-only API only for content that should not be bundled into every client or that needs server-side search:

```text
/api/taxonomy/manifest
/api/dimensions
/api/labels
/api/labels/:id
/api/search?q=...
/api/filters
/api/relations/:id
```

Responses should include an ETag, release/version metadata, and cache-friendly headers. The frontend should use stale-while-revalidate behavior where appropriate and fall back to the last known static bundle when the API is unavailable.

### Phase 3: measured optimization

Add Redis only for demonstrated hot keys such as search results or assembled label pages. Do not use it as the source of truth. Use database indexes, bounded queries, pagination, and connection pooling first.

## Privacy and analytics

The default flow is anonymous and local:

- no account required;
- no raw answers sent to the server;
- no names, email addresses, or precise location needed;
- no political profile stored unless the user explicitly chooses to share it.

If opt-in analytics is later useful, store only broad band-level aggregates with the taxonomy version, locale, consent-version, and coarse date bucket. Keep analytics separate from editorial tables, apply retention limits, and document the consent and deletion policy.

## Editorial and research workflow

```text
research/edit content in Git
        -> validate IDs, ranges, links, relations, and citations
        -> review through pull request / issue
        -> build a versioned release bundle
        -> publish static assets and, later, import a read model
```

Git remains the place where changes are reviewed and reproducible. If PostgreSQL is added, use a one-way importer from the approved Git release into the published read model. Avoid independent editing in both Git and the database unless a synchronization policy is explicitly introduced.

## Deployment plan for the CT

- Keep the public web server serving the built `dist` directory.
- Put any API behind the web server and bind the application process to localhost.
- Keep PostgreSQL private; never expose port 5432 publicly.
- Use a small connection pool, request limits, and backups before opening write endpoints.
- Deploy immutable frontend releases and retain the previous release for quick rollback.

## Development milestones

### Phase 1 — content boundaries and correctness

- Move taxonomy/content constants out of `src/main.jsx`.
- Add a content validator to the build pipeline.
- Validate the five dimensions, 25 questions, unique IDs, complete bands, score ranges, archetype profiles, and source references.
- Keep all current UI modes and behavior unchanged.

### Phase 2 — richer catalog

- Normalize labels into stable records.
- Add people, current countries, historical states, cities, parties, and movements as separate entity types.
- Add claim-level citations and explicit “same / close / distinct” relationships.
- Add filters for period, geography, entity type, confidence, and evidence status.

### Phase 3 — database-backed publishing

- Add migrations and an importer from a versioned content release.
- Publish read-only endpoints for search and detail pages.
- Add ETag/version negotiation and server-side full-text search.

### Phase 4 — quality and scale

- Add editorial review states and automated link checks.
- Add localization and historical period filters.
- Add privacy-reviewed, opt-in aggregate analytics.
- Introduce Redis only if production metrics justify it.

## Acceptance criteria for this plan

- A normal visitor can use all three modes without a database round trip.
- A content change is reviewable in Git and fails the build if references or ranges are invalid.
- Every public label can eventually point to sources and related labels without flattening important historical differences.
- A future PostgreSQL migration can add search, filters, and editorial tooling without moving scoring logic to the server.
- The system remains usable if the API or database is temporarily unavailable.
