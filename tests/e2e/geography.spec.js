import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('geographic filters, timeline, refresh and history preserve the selected view', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('tab', { name: /Geographic Atlas/ }).click();
  await expect(page.getByRole('heading', { name: /Ideas have histories/ })).toBeVisible();
  await expect(page.locator('.geo-card')).toHaveCount(161);
  await page.getByRole('combobox', { name: /Country/ }).selectOption('syria');
  await expect(page.locator('.geo-card')).toHaveCount(5);
  await page.getByRole('button', { name: 'Timeline', exact: true }).click();
  await expect(page.getByRole('list', { name: 'Chronological geographic cases' })).toBeVisible();
  await page.reload();
  await expect(page.getByRole('combobox', { name: /Country/ })).toHaveValue('syria');
  await page.getByRole('combobox', { name: 'Connection' }).selectOption('experimented');
  await expect(page.locator('.geo-card')).toHaveCount(1);
  await page.goBack();
  await expect(page.getByRole('combobox', { name: 'Connection' })).toHaveValue('all');
  await expect(page.locator('.geo-card')).toHaveCount(5);
  await page.goForward();
  await expect(page.locator('.geo-card')).toHaveCount(1);
});

test('shared cases link to the encyclopedia and bibliography, and return to the atlas', async ({ page }) => {
  await page.goto('/#geography?case=iran-constitution-1989');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await card.getByRole('link', { name: /Related encyclopedia/ }).click();
  await expect(page).toHaveURL(/#encyclopedia\/theocratic$/);
  await expect(page.getByText('SIX-AXIS READING', { exact: true })).toBeVisible();
  await expect(page.locator('.encyclopedia-geography a[href="#geography?label=jurist-guardianship"]')).toHaveAttribute('href', '#geography?label=jurist-guardianship');
  await page.goBack();
  await expect(card).toHaveCount(1);
  await card.locator('.geo-evidence summary').click();
  await card.getByRole('link', { name: 'Bibliography & rights record →' }).first().click();
  await expect(page).toHaveURL(/#bibliography\/research-constituteIran1989$/);
  await expect(page.locator('#source-research-constituteIran1989')).toBeInViewport();
  const source = page.locator('#source-research-constituteIran1989');
  await source.getByText('Where this record is used', { exact: true }).click();
  await source.getByRole('link', { name: 'geography:iran-constitution-1989', exact: true }).click();
  await expect(card).toHaveCount(1);
});

test('regional gaps, labels and malformed URLs are safe and honest', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/#geography?label=missing&q=%E0%A4%A');
  await expect(page.getByRole('heading', { name: /No documented cases/ })).toBeVisible();
  await page.getByRole('button', { name: 'Reset atlas filters' }).click();
  await page.getByRole('combobox', { name: 'Political label' }).selectOption('nasserism');
  await expect(page.locator('.geo-card')).toHaveCount(2);
  await expect(page.getByRole('complementary', { name: 'Selected political label' })).toBeVisible();
  await page.getByRole('button', { name: /South America/ }).click();
  await expect(page.getByText(/research gap or an empty filter combination/)).toBeVisible();
  expect(errors).toEqual([]);
});

test('atlas cards and timeline are accessible and fit the viewport', async ({ page }, testInfo) => {
  await page.goto('/#geography');
  await expect(page.locator('.geo-card')).toHaveCount(161);
  await page.getByRole('combobox', { name: 'Political label' }).selectOption('nasserism');
  await page.locator('.geo-card .geo-evidence summary').first().click();
  const cardsResults = await new AxeBuilder({ page }).analyze();
  expect(cardsResults.violations.filter(({ impact }) => ['critical', 'serious'].includes(impact))).toEqual([]);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  const tabBounds = await page.getByRole('tab', { name: /Geographic Atlas/ }).boundingBox();
  expect(tabBounds.x + tabBounds.width).toBeLessThanOrEqual(page.viewportSize().width);
  await page.screenshot({ path: testInfo.outputPath('geography-cards.png'), fullPage: true });
  await page.getByRole('button', { name: 'Timeline', exact: true }).click();
  const timelineResults = await new AxeBuilder({ page }).analyze();
  expect(timelineResults.violations.filter(({ impact }) => ['critical', 'serious'].includes(impact))).toEqual([]);
});

test('United States 2025–2026 executive-power case is separately bounded and traceable to its bibliography', async ({ page }) => {
  const caseId = 'united-states-second-trump-executive-power-and-contestation-2025-2026';
  await page.goto(`/#geography?case=${caseId}`);
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('20 January 2025–30 June 2026');
  await expect(card).toContainText('not a continuous national history');
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('case remains incomplete at the book level');
  await card.getByRole('link', { name: 'Bibliography & rights record →' }).first().click();
  await expect(page).toHaveURL(/#bibliography\/research-us2025eo14215$/);
  const source = page.locator('#source-research-us2025eo14215');
  await expect(source).toBeInViewport();
  await source.getByText('Where this record is used', { exact: true }).click();
  await source.getByRole('link', { name: `geography:${caseId}`, exact: true }).click();
  await expect(card).toHaveCount(1);
});

test('Haiti’s post-assassination transition is distinct, gap-bounded and traceable to its official electoral snapshot', async ({ page }) => {
  const caseId = 'haitian-post-assassination-transition-and-electoral-reconstruction-2021-2026';
  await page.goto(`/#geography?case=${caseId}`);
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('7 July 2021–21 September 2026');
  await expect(card).toContainText('2017 through 6 July 2021 remains uncovered');
  await expect(card).toContainText('not a completed vote');
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('not the complete book');
  await expect(card).toContainText('no numeric axis score');
  await card.locator('a[href="#bibliography/research-haitiTransitionCepStatus2026"]').click();
  await expect(page).toHaveURL(/#bibliography\/research-haitiTransitionCepStatus2026$/);
  const source = page.locator('#source-research-haitiTransitionCepStatus2026');
  await expect(source).toBeInViewport();
  await source.getByText('Where this record is used', { exact: true }).click();
  await source.getByRole('link', { name: `geography:${caseId}`, exact: true }).click();
  await expect(card).toHaveCount(1);
});

test('Sudan’s post-coup transition and 2023 war stay separate and date-bounded in the atlas', async ({ page }) => {
  await page.goto('/#geography');
  await page.getByRole('combobox', { name: /Country/ }).selectOption('sudan');
  const cards = page.locator('.geo-card');
  await expect(cards).toHaveCount(3);
  await expect(cards.nth(0)).toContainText('1989–2021');
  await expect(cards.nth(1)).toContainText('25 October 2021–14 April 2023');
  await expect(cards.nth(1)).toContainText('not full-text reading');
  await expect(cards.nth(2)).toContainText('15 April 2023–7 September 2026');
  await expect(cards.nth(2)).toContainText('not a current-country classification');
  await expect(page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).resolves.toBe(true);
});

test('Bangladesh’s post-uprising interim administration and electoral transition remain date-bounded and unscored', async ({ page }) => {
  await page.goto('/#geography');
  await page.getByRole('combobox', { name: /Country/ }).selectOption('bangladesh');
  const cards = page.locator('.geo-card');
  await expect(cards).toHaveCount(3);
  await expect(cards.nth(0)).toContainText('1972–2014');
  await expect(cards.nth(1)).toContainText('2014–2024');
  await expect(cards.nth(2)).toContainText('5 August 2024–17 February 2026');
  await expect(cards.nth(2)).toContainText('No numeric six-axis placement is warranted');
  await expect(cards.nth(2)).toContainText('forthcoming');
  await expect(page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).resolves.toBe(true);
});

test('Syria’s post-Assad interim order stays separate, dated and unscored', async ({ page }) => {
  await page.goto('/#geography?case=syrian-post-assad-central-state-transition-2024-2026');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('8 December 2024–21 September 2026');
  await expect(card).toContainText('inaugural sitting took place on 12 July 2026, not in June');
  await expect(card).toContainText('no numeric six-axis placement');
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('full book not read');
  await expect(card).toContainText('House of Commons Library');
});
