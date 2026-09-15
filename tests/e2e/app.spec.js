import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('landing page switches through the three analysis modes', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Answer honestly, not strategically/i })).toBeVisible();

  await page.getByRole('tab', { name: /FreeMode/i }).click();
  await expect(page.getByRole('heading', { name: /Build a profile by feel/i })).toBeVisible();

  await page.getByRole('tab', { name: /Spectrum Library/i }).click();
  await expect(page.getByRole('tab', { name: /Reference profiles/i })).toHaveAttribute('aria-selected', 'true');
  await page.getByRole('tab', { name: /Label catalogue/i }).click();
  await expect(page.getByText('NORMALIZED LABEL CATALOGUE')).toBeVisible();
  await page.getByRole('tab', { name: /Encyclopedia/i }).click();
  await expect(page.getByText(/29 of 29 entries/i)).toBeVisible();
  await page.getByRole('link', { name: /Indigenous self-determination \/ relational governance/i }).click();
  await expect(page.getByRole('heading', { name: /Indigenous self-determination \/ relational governance/i })).toBeVisible();
  await expect(page).toHaveURL(/#encyclopedia\/indigenous-relational-governance$/);
  await page.getByRole('link', { name: /All encyclopedia entries/i }).click();
  await page.getByRole('tab', { name: /Research atlas/i }).click();
  await expect(page.getByText('RESEARCH ATLAS', { exact: true })).toBeVisible();
  await page.getByText(/Recurring political forms · 12 patterns/i).click();
  await expect(page.getByText(/Sacral or dynastic kingship/i)).toBeVisible();
});

test('questionnaire resumes after a refresh', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /Strongly agree/i }).click();
  await page.getByRole('button', { name: /Next question/i }).click();
  await page.reload();

  await expect(page.getByText(/QUESTION 02/)).toBeVisible();
  await expect(page.getByText(/1 of 30 answered/)).toBeVisible();
});

test('fascism and Nazism have separate cards, examples, and working article links', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('tab', { name: /Spectrum Library/i }).click();
  const profiles = [
    { id: 'historical-fascist', name: 'Italian and interwar fascism', person: 'Benito Mussolini', excludedPerson: 'Adolf Hitler' },
    { id: 'national-socialist', name: 'National Socialist / Nazi (historical)', person: 'Adolf Hitler', excludedPerson: 'Benito Mussolini' },
  ];

  for (const profile of profiles) {
    await page.getByRole('tab', { name: /Reference profiles/i }).click();
    const card = page.getByRole('button', { name: `${profile.name} Historical context`, exact: true });
    await card.click();
    await expect(card).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('link', { name: `Read full entry: ${profile.name} ↗`, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`#encyclopedia/${profile.id}$`));
    await page.reload();
    await expect(page.getByRole('heading', { name: profile.name, exact: true })).toBeVisible();
    await expect(page.getByText('SIX-AXIS READING', { exact: true })).toBeVisible();

    await page.getByRole('tab', { name: /Reference profiles/i }).click();
    await card.click();
    await page.getByRole('button', { name: /Load this profile/i }).click();
    await expect(page.getByRole('heading', { name: profile.name, exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: profile.person, exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: profile.excludedPerson, exact: true })).toHaveCount(0);
    await expect(page.getByRole('heading', { name: 'Hannah Arendt', exact: true })).toHaveCount(0);
    await expect(page.getByText('No current state should be described as a direct equivalent of this historical ideology.', { exact: true })).toBeVisible();
    await page.getByRole('tab', { name: /Spectrum Library/i }).click();
  }
});

test('the six FreeMode controls work on a mobile viewport', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('tab', { name: /FreeMode/i }).click();
  await expect(page.getByRole('slider')).toHaveCount(6);
  await page.getByRole('slider', { name: /Economic model score/i }).fill('100');
  await expect(page.getByRole('slider', { name: /Economic model score/i })).toHaveValue('100');
});

test('primary screens have no serious accessibility violations', async ({ page }) => {
  await page.goto('/');
  const landingResults = await new AxeBuilder({ page }).analyze();
  expect(landingResults.violations.filter(({ impact }) => ['critical', 'serious'].includes(impact))).toEqual([]);

  await page.getByRole('tab', { name: /Spectrum Library/i }).click();
  const libraryResults = await new AxeBuilder({ page }).analyze();
  expect(libraryResults.violations.filter(({ impact }) => ['critical', 'serious'].includes(impact))).toEqual([]);
});
