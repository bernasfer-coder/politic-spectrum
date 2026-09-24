import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('geographic filters, timeline, refresh and history preserve the selected view', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('tab', { name: /Geographic Atlas/ }).click();
  await expect(page.getByRole('heading', { name: /Ideas have histories/ })).toBeVisible();
  await expect(page.locator('.geo-card')).toHaveCount(159);
  await page.getByRole('combobox', { name: /Country/ }).selectOption('syria');
  await expect(page.locator('.geo-card')).toHaveCount(4);
  await page.getByRole('button', { name: 'Timeline', exact: true }).click();
  await expect(page.getByRole('list', { name: 'Chronological geographic cases' })).toBeVisible();
  await page.reload();
  await expect(page.getByRole('combobox', { name: /Country/ })).toHaveValue('syria');
  await page.getByRole('combobox', { name: 'Connection' }).selectOption('experimented');
  await expect(page.locator('.geo-card')).toHaveCount(1);
  await page.goBack();
  await expect(page.getByRole('combobox', { name: 'Connection' })).toHaveValue('all');
  await expect(page.locator('.geo-card')).toHaveCount(4);
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

test('Bolivia 2025 case presents the official count discrepancy and limits', async ({ page }) => {
  await page.goto('/#geography?case=bolivia-2025-elections-and-executive-transition');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('60,000-vote conflict');
  await expect(card).toContainText('No event-specific book-length scholarship was located');
  await expect(card.getByRole('link', { name: /Link to case:/ })).toHaveAttribute('href', /case=bolivia-2025-elections-and-executive-transition/);
});

test('Argentina 2025 case preserves the attributed interpretation and article rights trail', async ({ page }) => {
  await page.goto('/#geography?case=argentine-2025-midterm-legislative-election');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('Orr interprets this as a rightward party-system realignment');
  await expect(card).toContainText('did not collate all 24 actas');
  await card.locator('.geo-evidence summary').click();
  await card.locator('a[href*="argentinaOrrLegislativeElection2025"]').click();
  await expect(page).toHaveURL(/#bibliography\/research-argentinaOrrLegislativeElection2025$/);
  const record = page.locator('#source-research-argentinaOrrLegislativeElection2025');
  await expect(record).toBeInViewport();
  await expect(record).toContainText('CC BY 4.0');
});

test('Kosovo 2025–2026 case keeps status and unresolved constitutional deadlines explicit', async ({ page }) => {
  await page.goto('/#geography?case=kosovo-2025-26-electoral-constitutional-crisis');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('without prejudice to status');
  await expect(card).toContainText('the presidential process remains unresolved');
  await card.locator('.geo-evidence summary').click();
  await card.locator('a[href*="kosovoConstitutionalCourtNoticeSeptember2026"]').click();
  await expect(page).toHaveURL(/#bibliography\/research-kosovoConstitutionalCourtNoticeSeptember2026$/);
  const courtRecord = page.locator('#source-research-kosovoConstitutionalCourtNoticeSeptember2026');
  await expect(courtRecord).toBeInViewport();
  await expect(courtRecord).toContainText('The Court’s published notice gives the operative outcomes and deadline dates');
});

test('DRC 2025–2026 case distinguishes parallel peace tracks and links evidence to its rights record', async ({ page }) => {
  await page.goto('/#geography?case=drc-2025-26-eastern-conflict-and-peace-process');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('two distinct negotiating tracks');
  await expect(card).toContainText('not a national political history');
  await expect(card).toContainText('six-axis profiling');
  await card.locator('.geo-evidence summary').click();
  await card.locator('a[href*="drcUnsgReportS2025590"]').last().click();
  await expect(page).toHaveURL(/#bibliography\/research-drcUnsgReportS2025590$/);
  const source = page.locator('#source-research-drcUnsgReportS2025590');
  await expect(source).toBeInViewport();
  await source.getByText('Where this record is used', { exact: true }).click();
  await source.getByRole('link', { name: 'geography:drc-2025-26-eastern-conflict-and-peace-process', exact: true }).click();
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
  await expect(page.locator('.geo-card')).toHaveCount(159);
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
