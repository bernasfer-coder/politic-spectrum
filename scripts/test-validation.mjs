import assert from 'node:assert/strict';
import { DIMENSIONS, QUESTIONS } from '../src/content/index.js';
import {
  CANDIDATE_FACETS,
  CORE_CONSTRUCT_MAP,
  CORE_DIMENSION_IDS,
  QUESTION_AUDIT,
  VALIDATION_CRITERIA,
  VALIDATION_MODEL_DEFINITIONS,
  VALIDATION_STATUS,
} from '../src/content/validation.js';

const dimensionIds = DIMENSIONS.map(({ id }) => id);
const questionIds = QUESTIONS.map(({ id }) => id);
const facetIds = CANDIDATE_FACETS.map(({ id }) => id);
const modelIds = VALIDATION_MODEL_DEFINITIONS.map(({ id }) => id);

assert.deepEqual(dimensionIds, CORE_DIMENSION_IDS, 'the validation construct map must follow the public five-dimension order');
assert.equal(new Set(dimensionIds).size, dimensionIds.length, 'core dimension IDs must be unique');
assert.equal(Object.keys(CORE_CONSTRUCT_MAP).length, CORE_DIMENSION_IDS.length, 'every core dimension needs an operational construct');
for (const dimensionId of CORE_DIMENSION_IDS) {
  const construct = CORE_CONSTRUCT_MAP[dimensionId];
  assert.ok(construct.construct && construct.include.length && construct.exclude.length && construct.risks.length, `${dimensionId} construct map is incomplete`);
}

assert.equal(Object.keys(QUESTION_AUDIT).length, QUESTIONS.length, 'every questionnaire item needs an audit entry');
for (const questionId of questionIds) {
  assert.ok(QUESTION_AUDIT[questionId], `${questionId} is missing from the questionnaire audit`);
  assert.ok(['keep-provisionally', 'review'].includes(QUESTION_AUDIT[questionId].status), `${questionId} has an invalid audit status`);
  assert.ok(QUESTION_AUDIT[questionId].concern && QUESTION_AUDIT[questionId].futureAction, `${questionId} audit needs a concern and future action`);
}

assert.equal(CANDIDATE_FACETS.length, 8, 'the validation plan should preserve the eight documented candidate facets');
assert.equal(new Set(facetIds).size, facetIds.length, 'candidate facet IDs must be unique');
assert.equal(VALIDATION_CRITERIA.length, 9, 'the validation plan should keep all mandatory decision gates');
assert.ok(VALIDATION_CRITERIA.every(({ mandatory, label }) => mandatory && label), 'each validation criterion must be mandatory and named');

const m4Models = VALIDATION_MODEL_DEFINITIONS.filter(({ family }) => family === 'M4');
const m5Models = VALIDATION_MODEL_DEFINITIONS.filter(({ family }) => family === 'M5');
const m6Models = VALIDATION_MODEL_DEFINITIONS.filter(({ family }) => family === 'M6');
const m7Models = VALIDATION_MODEL_DEFINITIONS.filter(({ family }) => family === 'M7');
assert.equal(m4Models.length, CORE_DIMENSION_IDS.length, 'M4 must contain every leave-one-out variant');
assert.equal(m5Models.length, 1, 'M5 must contain one stable baseline');
assert.equal(m6Models.length, CANDIDATE_FACETS.length, 'M6 must test every candidate facet separately');
assert.equal(m7Models.length, (CANDIDATE_FACETS.length * (CANDIDATE_FACETS.length - 1)) / 2, 'M7 must contain every preregistered candidate-facet pair');
assert.equal(VALIDATION_MODEL_DEFINITIONS.filter(({ family }) => family === 'M5-plus-facets').length, 1, 'core-plus-facets must be represented once');
assert.equal(new Set(modelIds).size, modelIds.length, 'validation model IDs must be unique');
assert.equal(VALIDATION_STATUS.coreModel, '5d-v1', 'the public baseline must remain 5d-v1');
assert.equal(VALIDATION_STATUS.empiricalStatus, 'not-run', 'the repository must not imply that participant validation has occurred');
assert.match(VALIDATION_STATUS.evidenceBoundary, /cannot establish reliability/i);

console.log(`Validation tests passed: ${Object.keys(QUESTION_AUDIT).length} audited questions, ${VALIDATION_MODEL_DEFINITIONS.length} registered model variants, and ${CANDIDATE_FACETS.length} candidate facets.`);
