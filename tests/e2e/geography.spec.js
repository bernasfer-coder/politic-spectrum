import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('geographic filters, timeline, refresh and history preserve the selected view', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('tab', { name: /Geographic Atlas/ }).click();
  await expect(page.getByRole('heading', { name: /Ideas have histories/ })).toBeVisible();
  await expect(page.locator('.geo-card')).toHaveCount(162);
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

test('Tunisia’s 2023–2026 prosecution remains a bounded, source-linked case', async ({ page }) => {
  await page.goto('/#geography?case=tunisian-conspiracy-case-and-opposition-trial-2023-2026');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('2023–2026');
  await expect(card).toContainText('not a comprehensive history of Tunisia after 2022');
  await expect(card).toContainText('the full first-instance judgment and docket were not located');
  await card.locator('.geo-evidence summary').click();
  await expect(card.getByRole('link', { name: /Opinion No\. 35\/2024/ })).toBeVisible();
  await card.getByRole('link', { name: 'Bibliography & rights record →' }).first().click();
  await expect(page).toHaveURL(/#bibliography\/research-tunisiaWGADOpinion352024$/);
  const source = page.locator('#source-research-tunisiaWGADOpinion352024');
  await expect(source).toBeInViewport();
  await source.getByText('Where this record is used', { exact: true }).click();
  await source.getByRole('link', { name: 'geography:tunisian-conspiracy-case-and-opposition-trial-2023-2026', exact: true }).click();
  await expect(card).toHaveCount(1);
});

test('Vanuatu’s 2023–2025 reform record keeps institutional evidence and outcomes bounded', async ({ page }) => {
  await page.goto('/#geography?case=vanuatuan-party-reform-and-parliamentary-accountability-2023-2025');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('2023–2025');
  await expect(card).toContainText('does not assert the motion’s eventual outcome');
  await expect(card).toContainText('No 2026 status is asserted');
  await card.locator('.geo-evidence summary').click();
  await expect(card.getByRole('link', { name: 'Bibliography & rights record →' }).first()).toBeVisible();
  await card.locator('a[href="#bibliography/research-vanuatu2023PartyReformGazette"]').click();
  await expect(page).toHaveURL(/#bibliography\/research-vanuatu2023PartyReformGazette$/);
  const source = page.locator('#source-research-vanuatu2023PartyReformGazette');
  await expect(source).toBeInViewport();
  await source.getByText('Where this record is used', { exact: true }).click();
  await source.getByRole('link', { name: 'geography:vanuatuan-party-reform-and-parliamentary-accountability-2023-2025', exact: true }).click();
  await expect(card).toHaveCount(1);
});

test('Tonga’s 2025 election and 2026 petition sequence keeps legal reporting attributed and bounded', async ({ page }) => {
  await page.goto('/#geography?case=tongan-election-and-post-election-accountability-2025-2026');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('17 directly elected People’s Representatives and nine Noble Representatives');
  await expect(card).toContainText('not a direct popular election of the Prime Minister');
  await expect(card).toContainText('neither the judgments nor appellate reasons were available for independent reading');
  await expect(card).toContainText('no result is asserted');
  await card.locator('.geo-evidence summary').click();
  await card.locator('a[href="#bibliography/research-tongaMatangiTangimanaAppeal2026"]').click();
  await expect(page).toHaveURL(/#bibliography\/research-tongaMatangiTangimanaAppeal2026$/);
  const source = page.locator('#source-research-tongaMatangiTangimanaAppeal2026');
  await expect(source).toBeInViewport();
  await source.getByText('Where this record is used', { exact: true }).click();
  await source.getByRole('link', { name: 'geography:tongan-election-and-post-election-accountability-2025-2026', exact: true }).click();
  await expect(card).toHaveCount(1);
});

test('Syria’s post-Assad transition keeps constitutional design, dated institutional evidence and attribution distinct', async ({ page }) => {
  await page.goto('/#geography?case=syrian-post-assad-transition-and-state-reconstruction-2024-2026');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('automated translation');
  await expect(card).toContainText('six women among 119 elected members');
  await expect(card).toContainText('no evidence of a governmental policy or plan');
  await expect(card).toContainText('not counted as a second scholarly perspective');
  await card.locator('.geo-evidence summary').click();
  await card.locator('a[href="#bibliography/research-syriaPomepsStudies57"]').click();
  await expect(page).toHaveURL(/#bibliography\/research-syriaPomepsStudies57$/);
  const source = page.locator('#source-research-syriaPomepsStudies57');
  await expect(source).toBeInViewport();
  await source.getByText('Where this record is used', { exact: true }).click();
  await source.getByRole('link', { name: 'geography:syrian-post-assad-transition-and-state-reconstruction-2024-2026', exact: true }).click();
  await expect(card).toHaveCount(1);
});

test('Côte d’Ivoire’s 2025–2026 election case separates court determinations, rights reporting and book context', async ({ page }) => {
  await page.goto('/#geography?case=cote-divoire-2025-election-and-post-election-institutions');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('54,977 valid sponsorships against 75,003 required');
  await expect(card).toContainText('50.10%');
  await expect(card).toContainText('different attributions and are not reconciled');
  await expect(card).toContainText('publisher metadata, not full-text consultation');
  await card.locator('.geo-evidence summary').click();
  await card.locator('a[href="#bibliography/research-coteDivConstitutionalCouncilCandidates2025"]').click();
  await expect(page).toHaveURL(/#bibliography\/research-coteDivConstitutionalCouncilCandidates2025$/);
  const source = page.locator('#source-research-coteDivConstitutionalCouncilCandidates2025');
  await expect(source).toBeInViewport();
  await source.getByText('Where this record is used', { exact: true }).click();
  await source.getByRole('link', { name: 'geography:cote-divoire-2025-election-and-post-election-institutions', exact: true }).click();
  await expect(card).toHaveCount(1);
  await card.locator('.geo-evidence summary').click();
  await card.locator('a[href="#bibliography/research-coteDivBanegasCutoloWarPapers2025"]').click();
  const bookRecord = page.locator('#source-research-coteDivBanegasCutoloWarPapers2025');
  await expect(bookRecord).toBeInViewport();
  await expect(bookRecord).toContainText('full book was not consulted');
});

test('Bangladesh’s 2025–2026 election and Charter case distinguishes the Order, result and pending reform record', async ({ page }) => {
  await page.goto('/#geography?case=bangladeshi-2026-election-july-charter-and-reform-transition');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('13 Nov 2025–20 Sep 2026');
  await expect(card).toContainText('Aggregate referendum counts reported publicly differ and are not reproduced or reconciled');
  await expect(card).toContainText('not proof of enacted reforms or a settled constitutional order');
  await expect(card).toContainText('No book-length scholarship focused on this 2025–2026 episode was identified');
  await card.locator('.geo-evidence summary').click();
  await card.locator('a[href="#bibliography/research-bangladeshJulyCharterImplementationOrder2025"]').click();
  await expect(page).toHaveURL(/#bibliography\/research-bangladeshJulyCharterImplementationOrder2025$/);
  const source = page.locator('#source-research-bangladeshJulyCharterImplementationOrder2025');
  await expect(source).toBeInViewport();
  await source.getByText('Where this record is used', { exact: true }).click();
  await source.getByRole('link', { name: 'geography:bangladeshi-2026-election-july-charter-and-reform-transition', exact: true }).click();
  await expect(card).toHaveCount(1);
});

test('Philippine impeachment trial stays distinct from countrywide ideology and from a conviction', async ({ page }) => {
  await page.goto('/#geography?case=philippine-vice-presidential-impeachment-and-senate-trial-2026');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('28 Jan–23 Sep 2026');
  await expect(card).toContainText('not a score or ideological profile of the Philippines');
  await expect(card).toContainText('the eventual verdict');
  await card.locator('.geo-evidence summary').click();
  await card.locator('a[href="#bibliography/research-philippineImpeachmentThresholdVote2026"]').click();
  const source = page.locator('#source-research-philippineImpeachmentThresholdVote2026');
  await expect(source).toBeInViewport();
  await source.getByText('Where this record is used', { exact: true }).click();
  await source.getByRole('link', { name: 'geography:philippine-vice-presidential-impeachment-and-senate-trial-2026', exact: true }).click();
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
  await expect(page.locator('.geo-card')).toHaveCount(162);
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
