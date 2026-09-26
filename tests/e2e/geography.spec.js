import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('geographic filters, timeline, refresh and history preserve the selected view', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('tab', { name: /Geographic Atlas/ }).click();
  await expect(page.getByRole('heading', { name: /Ideas have histories/ })).toBeVisible();
  await expect(page.locator('.geo-card')).toHaveCount(158);
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

test('New Zealand 2026 update distinguishes scheduled election and future local-government rules', async ({ page }) => {
  await page.goto('/#geography?case=new-zealand-post-2023-coalition-and-treaty-principles-contestation');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('17,033 roll changes');
  await expect(card).toContainText('565,092 enrolled voters of Māori descent');
  await expect(card).toContainText('mid-March 2027');
  await expect(card).toContainText('no candidate, polling, result, turnout, observation or post-election conclusion is asserted');
});

test('Chile 2026 update separates the 2025 result, formal handover and limits on current interpretation', async ({ page }) => {
  await page.goto('/#geography?case=chilean-post-2022-constitutional-process-and-2025-electoral-transition');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('58.17% of valid votes');
  await expect(card).toContainText('proclaimed him president-elect on 5 January');
  await expect(card).toContainText('11 March 2026 transfer of presidential and legislative office');
  await expect(card).toContainText('not voter motivations, a singular public will');
  await expect(card).toContainText('No event-specific book-length scholarly study of the 2025–26 electoral transition was located');
  await expect(card).toContainText('too recent and insufficiently book-studied here to support an updated six-axis characterization');
});

test('Uganda 2026 Supreme Court election-petition withdrawal is not presented as a merits ruling', async ({ page }) => {
  await page.goto('/#geography?case=ugandan-late-museveni-order-and-2026-electoral-contestation');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('[2026] UGSC 7 (26 February)');
  await expect(card).toContainText('petition and the connected discovery application');
  await expect(card).toContainText('not a merits ruling on the petition’s allegations');
  await expect(card).toContainText('no final AU–COMESA–IGAD report was located in this review');
});

test('Bangladesh 2026 referendum correction and Charter litigation remain distinct from completed constitutional reform', async ({ page }) => {
  await page.goto('/#geography?case=bangladeshi-post-2014-dominant-party-and-july-uprising');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('subsequently corrected its published totals');
  await expect(card).toContainText('A rule initiated review; it was not a final merits judgment');
  await expect(card).toContainText('these are proposals and contested processes, not established outcomes');
  await expect(card).toContainText('do not cover these current events');
});

test('Laos 2026 election and parliamentary succession distinguish official data, interim office and draft laws', async ({ page }) => {
  await page.goto('/#geography?case=lao-post-2021-debt-stability-and-asean-chairmanship');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('4,670,050 among 4,764,384 registered voters (98.0%)');
  await expect(card).toContainText('not an election-observation mission');
  await expect(card).toContainText('pending formal Assembly resolution');
  await expect(card).toContainText('BTI 2026 covers 1 February 2023–31 January 2025');
  await expect(card).toContainText('five draft laws');
  await expect(card).toContainText('Draft laws and adopted planning resolutions are not treated as implemented outcomes');
});

test('Myanmar 2026 case distinguishes official election claims, UN reporting and the earlier transition record', async ({ page }) => {
  await page.goto('/#geography?case=myanmar-post-2021-spring-revolution-and-competing-governance');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('28 December 2025, 11 and 25 January 2026');
  await expect(card).toContainText('not independent verification');
  await expect(card).toContainText('339 of 586 national parliamentary seats');
  await expect(card).toContainText('not ASEAN endorsement');
  await expect(card).toContainText('not a criminal judgment');
  await expect(card).toContainText('No event-specific book-length scholarly history');
  await expect(card).toContainText('not a current-country ideological score');
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
  await expect(page.locator('.geo-card')).toHaveCount(158);
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
