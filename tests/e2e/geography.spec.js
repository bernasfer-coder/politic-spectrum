import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('geographic filters, timeline, refresh and history preserve the selected view', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('tab', { name: /Geographic Atlas/ }).click();
  await expect(page.getByRole('heading', { name: /Ideas have histories/ })).toBeVisible();
  await expect(page.locator('.geo-card')).toHaveCount(200);
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

test('Iran case distinguishes official protest tolls, UN findings and evidence limits', async ({ page }) => {
  await page.goto('/#geography?case=iranian-postrevolutionary-constitutional-and-electoral-order');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('3,038 killed and 25,000 injured');
  await expect(card).toContainText('could not determine a total under its methodology');
  await expect(card).toContainText('not a judicial judgment');
  await expect(card).toContainText('no 2025–2026 score');
  await card.locator('.geo-evidence summary').click();
  const reportLink = card.locator('a[href="#bibliography/research-iranFactFindingMissionHRC6361-2026"]');
  await expect(reportLink).toBeVisible();
  await reportLink.click();
  await expect(page).toHaveURL(/#bibliography\/research-iranFactFindingMissionHRC6361-2026$/);
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

test('São Tomé and Príncipe election remains a pre-poll case and is reachable without a tiny-island map polygon', async ({ page }) => {
  await page.goto('/#geography?case=sao-tome-2026-national-assembly-election-pre-election');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('27 September 2026');
  await expect(card).toContainText('no findings about the 27 September vote');
  await expect(card).toContainText('No voting, counting, certified results');
  await page.getByRole('combobox', { name: /Place/ }).selectOption('sao-tome-legislative-election-2026');
  await expect(card).toHaveCount(1);
});

test('Ethiopia 2026 election preserves the seat-denominator discrepancy and limited observation scope', async ({ page }) => {
  await page.goto('/#geography?case=ethiopia-2026-seventh-general-election');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('won 438 HoPR seats');
  await expect(card).toContainText('AP reported 438 of 501 seats');
  await expect(card).toContainText('486 certified House results');
  await expect(card).toContainText('Tigray');
  await expect(card).toContainText('no percentage is inferred');
  await page.getByRole('combobox', { name: /Place/ }).selectOption('ethiopia-general-election-2026');
  await expect(card).toHaveCount(1);
});

test('Sabah 2025 case distinguishes the official election result from attributed interpretations', async ({ page }) => {
  await page.goto('/#geography?case=sabah-2025-state-election-and-chief-minister-appointment');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('29–30 November 2025');
  await expect(card).toContainText('GRS) 29, Warisan 25');
  await expect(card).toContainText('64.35%');
  await expect(card).toContainText('same-author');
  await expect(card).toContainText('No six-axis score is warranted');
  await card.locator('.geo-evidence summary').click();
  await expect(card.getByRole('link', { name: /Election Commission of Malaysia/ })).toBeVisible();
});

test('Malaysia 2026 term-limit proposal is distinguished from an enacted constitutional amendment', async ({ page }) => {
  await page.goto('/#geography?case=malaysian-2026-prime-minister-term-limit-amendment');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('23 February–3 September 2026');
  await expect(card).toContainText('146 in favour, 44 members not voting and 32 absent');
  await expect(card).toContainText('No ideological classification or six-axis score is warranted');
  await card.locator('.geo-evidence summary').click();
  await expect(card.getByRole('link', { name: /Parliament of Malaysia — Dewan Rakyat Hansard/ })).toBeVisible();
});

test('Sweden 2026 election case keeps official results, exploratory government formation and non-observation distinct', async ({ page }) => {
  await page.goto('/#geography?case=sweden-2026-riksdag-election-and-government-formation');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('13–25 September 2026');
  await expect(card).toContainText('84.9 per cent (6,834,413 voters)');
  await expect(card).toContainText('Social Democrats 99');
  await expect(card).toContainText('exploratory assignment, not her appointment as Prime Minister');
  await expect(card).toContainText('no full OSCE/ODIHR observation report exists for this election');
  await card.locator('.geo-evidence summary').click();
  await expect(card.getByRole('link', { name: /Swedish Election Authority — Riksdag election results established/ })).toBeVisible();
});

test('Gambia 2026 election remains a pre-election snapshot with the timetable conflict visible', async ({ page }) => {
  await page.goto('/#geography?case=gambia-2026-presidential-election-pre-election-snapshot');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('5 December 2026');
  await expect(card).toContainText('disagreement with the Commission’s published calendar');
  await expect(card).toContainText('had not taken place');
  await expect(card).toContainText('National Builders Party, Gambia Labour Party and National Democratic Party');
  await expect(card).toContainText('do not say those parties will field presidential candidates');
  await card.locator('.geo-evidence summary').click();
  await expect(card.locator('a[href*="gambiaIecElectoralCalendar2026-2027"]')).toBeVisible();
  await expect(card.locator('a[href*="gambiaIecNationalBuildersRegistration2026"]')).toBeVisible();
  await expect(card.locator('a[href*="gambiaIecLabourPartyRegistration2026"]')).toBeVisible();
  await expect(card.locator('a[href*="gambiaIecNationalDemocraticRegistration2026"]')).toBeVisible();
});

test('Peru 2026 election case keeps official returns distinct from observer assessments', async ({ page }) => {
  await page.goto('/#geography?case=peru-2026-general-election-and-runoff');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('9,223,396 votes to Sánchez’s 9,173,755');
  await expect(card).toContainText('13 centres remained unopened');
  await expect(card).toContainText('not judicial findings or an independent recount');
  await expect(card).toContainText('No event-specific book-length scholarship was located');
});

test('Guyana 2025 election case separates results from observer findings on campaign conditions', async ({ page }) => {
  await page.goto('/#geography?case=guyana-2025-general-regional-election-and-transition');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('36 seats to the PPP/C, 16 to the newly formed WIN movement');
  await expect(card).toContainText('state resources at 29 per cent');
  await expect(card).toContainText('not a judicial finding that the declared result was invalid');
  await expect(card).toContainText('Book-level scholarship on the 2025 event was unavailable');
});

test('France 2024–2026 case distinguishes censure, confidence and budget-law records', async ({ page }) => {
  await page.goto('/#geography?case=france-2024-2026-minority-government-and-budget-crisis');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('331 votes for a motion of censure');
  await expect(card).toContainText('364 votes against François Bayrou’s policy statement');
  await expect(card).toContainText('Law No. 2026-103');
  await expect(card).toContainText('The 2027 budget horizon has since advanced beyond the 1 September press account');
  await expect(card).toContainText('forecasts of 0.5% growth and 2.1% inflation for 2026');
  await expect(card).toContainText('first part of the Finance Bill on 12–19 October');
  await expect(card).toContainText('whole-bill vote planned for 17 November');
  await expect(card).toContainText('The new budget proposal, scrutiny, votes and any enacted law remained future');
  await expect(card).toContainText('No two independent book-length scholarly studies');
  await card.locator('.geo-evidence summary').click();
  await expect(card.locator('a[href*="franceAssembleeBudgetScheduleJuly2026"]')).toBeVisible();
  await expect(card.locator('a[href*="franceAssembleeSessionCalendarSeptember2026"]')).toBeVisible();
  await expect(card.locator('a[href*="franceGovernmentMacroForecasts2027September2026"]')).toBeVisible();
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

test('Japan 2026 case shows official results and attributed access debate without a country score', async ({ page }) => {
  await page.goto('/#geography?case=japanese-2026-snap-election-and-electoral-access');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('315 seats');
  await expect(card).toContainText('44,642 polling stations');
  await expect(card).toContainText('attributed legislative claims');
  await expect(card).toContainText('no six-axis score');
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

test('Iraq 2025–2026 case distinguishes the certified election and partial cabinet formation', async ({ page }) => {
  await page.goto('/#geography?case=iraqi-2025-election-and-2026-government-formation');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('56.11 per cent');
  await expect(card).toContainText('14 ministers');
  await expect(card).toContainText('continued calls to complete the cabinet');
  await expect(card).toContainText('not a measure of governing performance');
  await card.locator('.geo-evidence summary').click();
  await expect(card.locator('a[href*="iraqCabinetVoteMay2026Parliament"]')).toBeVisible();
  await expect(card.locator('a[href*="iraqCabinetCompletionAug2026Parliament"]')).toBeVisible();
});

test('Syria 2025–2026 case distinguishes indirect selection and presidential appointments', async ({ page }) => {
  await page.goto('/#geography?case=syrian-2025-2026-transitional-peoples-assembly');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('not a direct nationwide popular election');
  await expect(card).toContainText('15 women among those 70 appointees');
  await expect(card).toContainText('does not support an ideology label or six-axis score');
  await card.locator('.geo-evidence summary').click();
  await expect(card.locator('a[href*="syriaConstitutionalDeclaration2025Sana"]')).toBeVisible();
  await expect(card.locator('a[href*="syriaAtCrossroadsInternationalIDEA2026"]')).toBeVisible();
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
  await expect(page.locator('.geo-card')).toHaveCount(200);
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

test('Egypt 2025–2026 parliamentary case stays separate and displays attributed evidence limits', async ({ page }) => {
  await page.goto('/#geography?case=egyptian-2025-2026-house-election-and-parliamentary-formation');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('32.41%');
  await expect(card).toContainText('independent verification of turnout');
  await expect(card).toContainText('Kotb');
});

test('Honduras 2025 election case distinguishes official returns, observation findings and the book-level gap', async ({ page }) => {
  await page.goto('/#geography?case=honduran-2025-general-election-and-2026-transfer-of-office');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('98.18%');
  await expect(card).toContainText('40.26%');
  await expect(card).toContainText('no 2025–26 book-length scholarly treatment');
  await expect(card).toContainText('CESPAD');
});

test('Costa Rica 2026 case separates certified election results and institutional observations', async ({ page }) => {
  await page.goto('/#geography?case=costa-rican-2026-national-election-and-transfer-of-office');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('1,243,141');
  await expect(card).toContainText('31 seats');
  await expect(card).toContainText('does not measure campaign equality');
  await expect(card).toContainText('institutional tensions');
});

test('El Salvador 2025 case distinguishes enacted rule changes from future election outcomes', async ({ page }) => {
  await page.goto('/#geography?case=el-salvador-2025-presidential-reelection-and-constitutional-reform');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('Decree No. 371');
  await expect(card).toContainText('six years');
  await expect(card).toContainText('2027 election has not yet occurred');
  await expect(card).toContainText('no six-axis score is warranted');
});

test('Guatemala 2026 Constitutional Court case separates the official renewal from attributed process concerns', async ({ page }) => {
  await page.goto('/#geography?case=guatemala-2026-constitutional-court-renewal');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('Ninth Magistracy');
  await expect(card).toContainText('14 April 2026');
  await expect(card).toContainText('Myrna Mack');
  await expect(card).toContainText('none is event-specific scholarship on the 2026 appointments');
  await expect(card).toContainText('no six-axis score');
});

test('Yemen country locator opens only its dated conflict-escalation case', async ({ page }) => {
  await page.goto('/#geography');
  const map = page.getByRole('group', { name: 'Interactive world map' });
  const yemen = map.getByRole('button', { name: 'Yemen: 1 matching case', exact: true });
  await expect(yemen).toBeVisible();
  await yemen.click();
  await expect(page.getByRole('combobox', { name: /Country/ })).toHaveValue('map-887');
  await expect(page.locator('.geo-card')).toHaveCount(1);
  await expect(page.locator('.geo-card')).toContainText('122,000 people displaced');
  await expect(yemen).toHaveAttribute('aria-pressed', 'true');
});

test('Ukraine locator opens its bounded martial-law constitutional-continuity case', async ({ page }) => {
  await page.goto('/#geography');
  const map = page.getByRole('group', { name: 'Interactive world map' });
  const ukraine = map.getByRole('button', { name: 'Ukraine: 1 matching case', exact: true });
  await expect(ukraine).toBeVisible();
  await ukraine.click();
  await expect(page.getByRole('combobox', { name: /Country/ })).toHaveValue('map-804');
  await expect(page.locator('.geo-card')).toHaveCount(1);
  await expect(page.locator('.geo-card')).toContainText('Article 19');
  await expect(page.locator('.geo-card')).toContainText('4928-IX');
  await expect(page.locator('.geo-card')).toContainText('not a comprehensive account of Ukrainian wartime politics');
});

test('Somalia locator opens its bounded 2026 constitutional transition and exposes its translation limit', async ({ page }) => {
  await page.goto('/#geography');
  const map = page.getByRole('group', { name: 'Interactive world map' });
  const somalia = map.getByRole('button', { name: 'Somalia: 1 matching case', exact: true });
  await expect(somalia).toBeVisible();
  await somalia.click();
  await expect(page.getByRole('combobox', { name: /Country/ })).toHaveValue('map-706');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('Article 195');
  await expect(card).toContainText('requires independent Somali legal-language review');
  await expect(card).toContainText('No referendum result');
  await expect(somalia).toHaveAttribute('aria-pressed', 'true');
});

test('Zambia locator opens the 2026 election and keeps the result-verification and petition questions distinct', async ({ page }) => {
  await page.goto('/#geography');
  const map = page.getByRole('group', { name: 'Interactive world map' });
  const zambia = map.getByRole('button', { name: 'Zambia: 1 matching case', exact: true });
  await expect(zambia).toBeVisible();
  await zambia.click();
  await expect(page.getByRole('combobox', { name: /Country/ })).toHaveValue('map-894');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('56.0% ±1.7');
  await expect(card).toContainText('did not change the presidential winner');
  await expect(card).toContainText('reported no decision on that referral');
  await expect(card).toContainText('assigns no permanent ideology');
  await expect(zambia).toHaveAttribute('aria-pressed', 'true');
});

test('Uganda 2026 election distinguishes official parliamentary returns and a withdrawn presidential petition', async ({ page }) => {
  await page.goto('/#geography?case=ugandan-late-museveni-order-and-2026-electoral-contestation');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('529-seat elected Parliament: NRM 371');
  await expect(card).toContainText('closed procedurally, not tried to a merits judgment');
  await expect(card).toContainText('The EAC record is preliminary');
  await expect(card).toContainText('accessible here only through its abstract/extract');
  await expect(card).toContainText('numerical six-axis score is inferred');
});

test('Myanmar 2025–2026 election and government transition distinguish official acts from contested reach and assessment', async ({ page }) => {
  await page.goto('/#geography?case=myanmar-post-2021-spring-revolution-and-competing-governance');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('54.22 per cent');
  await expect(card).toContainText('263 of 330 townships');
  await expect(card).toContainText('102 townships');
  await expect(card).toContainText('not an independent audit');
  await expect(card).toContainText('event-specific book-length scholarship');
});

test('Venezuela 2026 transition keeps the UN findings attributed and the promised election unscheduled', async ({ page }) => {
  await page.goto('/#geography?case=venezuelan-post-2024-election-repression-and-2025-electoral-contestation');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('genuine, sustainable break');
  await expect(card).toContainText('800–1,000 releases');
  await expect(card).toContainText('no date had been set');
  await expect(card).toContainText('English and Spanish official meeting transcripts differ');
  await expect(card).toContainText('no new six-axis score');
});

test('Oman 2026 decrees document cabinet structure without inferring succession or implementation', async ({ page }) => {
  await page.goto('/#geography?case=oman-sultani-constitutional-order');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('Royal Decree 7/2026');
  await expect(card).toContainText('Theyazin bin Haitham bin Tarik Deputy Prime Minister for Economic Affairs');
  await expect(card).toContainText('not independently collated');
  await expect(card).toContainText('No inference about succession');
  await expect(card).toContainText('no score or coordinate has been added');
});

