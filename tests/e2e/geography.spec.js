import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('geographic filters, timeline, refresh and history preserve the selected view', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('tab', { name: /Geographic Atlas/ }).click();
  await expect(page.getByRole('heading', { name: /Ideas have histories/ })).toBeVisible();
  await expect(page.locator('.geo-card')).toHaveCount(173);
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
test('South African GNU case preserves its bounded retrospective research gap', async ({ page }) => {
  await page.goto('/#geography?case=south-african-2024-government-national-unity-coalition-transition');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('2024–2026');
  await expect(card).toContainText('No six-axis scores are assigned');
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('no book-length study of the complete period through 22 September 2026 was located');
  await expect(card).toContainText('Susan Booysen');
});

test('Lebanon 2025–2026 case distinguishes the extension vote from the Constitutional Council ruling', async ({ page }) => {
  await page.goto('/#geography?case=lebanese-2025-2026-presidential-transition-and-parliamentary-extension');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('76 MPs');
  await expect(card).toContainText('unanimously rejected three petitions');
  await expect(card).toContainText('not independently verify the security situation');
  await expect(card).toContainText('No six-axis scores are assigned');
  await card.locator('.geo-evidence summary').click();
  await card.locator('a[href*="lebanonConstitutionalCouncilExtension2026"]').click();
  await expect(page).toHaveURL(/#bibliography\/research-lebanonConstitutionalCouncilExtension2026$/);
  await expect(page.locator('#source-research-lebanonConstitutionalCouncilExtension2026')).toBeInViewport();
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

test('Cameroon 2025 case distinguishes certified results, observer findings and limits', async ({ page }) => {
  await page.goto('/#geography?case=cameroon-2025-presidential-election-and-constitutional-aftermath');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('53.66%');
  await expect(card).toContainText('not an independent audit');
  await expect(card).toContainText('No score is assigned to Cameroon');
  await card.locator('.geo-evidence summary').click();
  await card.locator('a[href*="cameroonConstitutionalCouncilElectionResults2025"]').click();
  await expect(page).toHaveURL(/#bibliography\/research-cameroonConstitutionalCouncilElectionResults2025$/);
  const source = page.locator('#source-research-cameroonConstitutionalCouncilElectionResults2025');
  await expect(source).toBeInViewport();
  await expect(source).toContainText('No reuse licence identified');
});

test('Canada 2025 election case bounds the Terrebonne ruling and Nunavik access inquiry', async ({ page }) => {
  await page.goto('/#geography?case=canada-2025-federal-election-and-parliamentary-transition');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('169 Liberal, 144 Conservative');
  await expect(card).toContainText('does not invalidate the national election');
  await expect(card).toContainText('Nunavik');
  await expect(card).toContainText('not yet available');
  await expect(card).toContainText('No six-axis scores are assigned');
  await card.locator('.geo-evidence summary').click();
  await card.locator('a[href*="canadaNunavikElectionInquiry2025"]').click();
  await expect(page).toHaveURL(/#bibliography\/research-canadaNunavikElectionInquiry2025$/);
  const source = page.locator('#source-research-canadaNunavikElectionInquiry2025');
  await expect(source).toBeInViewport();
  await expect(source).toContainText('no blanket commercial-reuse licence');
});

test('Bangladesh transition case attributes observers and preserves the referendum evidence gap', async ({ page }) => {
  await page.goto('/#geography?case=bangladesh-2024-uprising-interim-government-and-2026-election');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('women were four per cent of contestants');
  await expect(card).toContainText('70-constituency sample');
  await expect(card).toContainText('makes no claim about referendum totals');
  await expect(card).toContainText('No scores or whole-country ideological labels are assigned');
  await card.locator('.geo-evidence summary').click();
  await card.locator('a[href*="bangladeshEeom2026FinalReport"]').click();
  await expect(page).toHaveURL(/#bibliography\/research-bangladeshEeom2026FinalReport$/);
  const source = page.locator('#source-research-bangladeshEeom2026FinalReport');
  await expect(source).toBeInViewport();
  await expect(source).toContainText('No direct quotation is published');
});

test('Nepal 2025–2026 transition separates official returns from attributed observation and unresolved legality', async ({ page }) => {
  await page.goto('/#geography?case=nepal-2025-uprising-interim-order-and-2026-election');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('165 first-past-the-post and 110 proportional-representation seats');
  await expect(card).toContainText('182 of 275');
  await expect(card).toContainText('179 men and 96 women');
  await expect(card).toContainText('no final merits judgment');
  await expect(card).toContainText('No numerical scores or national ideological classification are assigned');
  await card.locator('.geo-evidence summary').click();
  await card.locator('a[href*="nepalElectionCommission2026FinalResults"]').click();
  await expect(page).toHaveURL(/#bibliography\/research-nepalElectionCommission2026FinalResults$/);
  const source = page.locator('#source-research-nepalElectionCommission2026FinalResults');
  await expect(source).toBeInViewport();
  await expect(source).toContainText('No direct quotation is published');
});

test('Colombia 2026 election case distinguishes certified transition from pending litigation', async ({ page }) => {
  await page.goto('/#geography?case=colombia-2026-electoral-transition-and-contested-results');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('preconteo, which has no legal value');
  await expect(card).toContainText('Resolution E-3181');
  await expect(card).toContainText('7 August');
  await expect(card).toContainText('did not resolve whether the alleged conduct occurred');
  await expect(card).toContainText('No numerical scores or related ideological labels are assigned');
  await card.locator('.geo-evidence summary').click();
  await card.locator('a[href*="colombiaCouncilStateElectionChallengeAug2026"]').click();
  await expect(page).toHaveURL(/#bibliography\/research-colombiaCouncilStateElectionChallengeAug2026$/);
  const source = page.locator('#source-research-colombiaCouncilStateElectionChallengeAug2026');
  await expect(source).toBeInViewport();
  await expect(source).toContainText('not a final decision on the merits');
});

test('Tunisia 2024 election separates official results, legal amendment and attributed observer assessments', async ({ page }) => {
  await page.goto('/#geography?case=tunisia-2024-presidential-election-and-electoral-contestation');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('28.79%');
  await expect(card).toContainText('Decision No. 552');
  await expect(card).toContainText('Organic Law No. 45');
  await expect(card).toContainText('preliminary rather than an overall or final process assessment');
  await expect(card).toContainText('No ideological archetype, six-axis profile or numerical score is assigned');
  await card.locator('.geo-evidence summary').click();
  await card.locator('a[href*="tunisiaIsieFinalDecision5522024"]').click();
  await expect(page).toHaveURL(/#bibliography\/research-tunisiaIsieFinalDecision5522024$/);
  const source = page.locator('#source-research-tunisiaIsieFinalDecision5522024');
  await expect(source).toBeInViewport();
  await expect(source).toContainText('The official text is publicly accessible');
});

test('Sudan war case bounds OHCHR evidence and distinguishes formal ceasefire commitments', async ({ page }) => {
  await page.goto('/#geography?case=sudan-2023-25-war-fragmented-authority-and-civilian-protection');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('2023–2025');
  await expect(card).toContainText('at least 3,384 civilian deaths');
  await expect(card).toContainText('not proof of compliance');
  await expect(card).toContainText('not a present-day control map');
  await card.locator('.geo-evidence summary').click();
  await expect(card.locator('a[href*="sudanJeddahShortCeasefire2023"]')).toBeVisible();
});

test('Côte d’Ivoire 2025 case distinguishes official results, limited observation and attributed rights reporting', async ({ page }) => {
  await page.goto('/#geography?case=cote-divoire-2025-presidential-election-candidacy-and-civic-space');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('3,759,030 votes (89.77%)');
  await expect(card).toContainText('50.10%');
  await expect(card).toContainText('88 polling stations');
  await expect(card).toContainText('not a project audit of every polling station');
  await expect(card).toContainText('not a score for Côte d’Ivoire');
  await card.locator('.geo-evidence summary').click();
  await expect(card.locator('a[href*="coteDivConstitutionalCouncilFinalResults2025"]')).toBeVisible();
  await expect(card.locator('a[href*="coteDivAmnestyPreElectionProtests2025"]')).toBeVisible();
});

test('Burkina Faso 2026 case distinguishes the party-law vote, Revolution Charter and rights concerns', async ({ page }) => {
  await page.goto('/#geography?case=burkina-faso-2026-party-dissolution-and-revolution-charter');
  await expect(page.locator('.geo-card')).toHaveCount(1);
  await expect(page.locator('.geo-card')).toContainText('9 February 2026');
  await expect(page.locator('.geo-card')).toContainText('African Commission');
  await expect(page.locator('.geo-card')).toContainText('No six-axis scores');
  await expect(page.locator('.geo-card')).toContainText('pre-event contexts');
});

test('Mali 2025 case distinguishes the Gazette law, dissolution decree, protest response and attributed legal analysis', async ({ page }) => {
  await page.goto('/#geography?case=mali-2025-party-dissolution-and-political-exclusion');
  await expect(page.locator('.geo-card')).toHaveCount(1);
  await expect(page.locator('.geo-card')).toContainText('Law No. 2025-005');
  await expect(page.locator('.geo-card')).toContainText('2025-0339/PT-RM');
  await expect(page.locator('.geo-card')).toContainText('at least 80 parties');
  await expect(page.locator('.geo-card')).toContainText('not court judgments');
  await expect(page.locator('.geo-card')).toContainText('no six-axis scores');
});

test('Haiti 2026 case distinguishes the post-Council transfer, disputed transition and revised conditional election calendar', async ({ page }) => {
  await page.goto('/#geography?case=haitian-2026-post-council-electoral-transition');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('7 February 2026');
  await expect(card).toContainText('13 December 2026');
  await expect(card).toContainText('628,755 registered voters');
  await expect(card).toContainText('not an independent audit');
  await expect(card).toContainText('no ideology or six-axis score');
  await card.locator('.geo-evidence summary').click();
  await expect(card.locator('a[href*="haitiCepRevisedCalendarDec2026"]')).toBeVisible();
  await expect(card.locator('a[href*="haitiUnReportElectoralTransitionJuly2026"]')).toBeVisible();
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
  await expect(page.locator('.geo-card')).toHaveCount(173);
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

