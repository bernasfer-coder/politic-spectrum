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

test('Spain 2026 update distinguishes partial constitutional review, two EU references and a separate legislative defeat', async ({ page }) => {
  await page.goto('/#geography?case=spanish-democratic-consolidation-and-regional-pluralism');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('partially granted a challenge');
  await expect(card).toContainText('two distinct preliminary references');
  await expect(card).toContainText('not evidence that the government fell');
  await expect(card).toContainText('No event-specific book-length scholarly study');
});

test('Peru 2026 update balances observer assessments, narrow result and post-inauguration limits', async ({ page }) => {
  await page.goto('/#geography?case=peruvian-post-2021-crisis-and-boluarte-transition');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('overall credible and transparent');
  await expect(card).toContainText('49,641');
  await expect(card).toContainText('not voter motives, unanimity');
  await expect(card).toContainText('no event-specific book-length account of the 2026 election');
});

test('United States 2026 update distinguishes executive orders, enacted law, court holdings and bounded GAO findings', async ({ page }) => {
  await page.goto('/#geography?case=united-states-constitutional-federal-and-contested-democratic-order');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('did not authorize the challenged tariffs');
  await expect(card).toContainText('citizens at birth under the Fourteenth Amendment');
  await expect(card).toContainText('nearly 378,000 separations');
  await expect(card).toContainText('no event-specific book-length scholarly history');
  await expect(card).toContainText('not a complete history of the second Trump administration');
});

test('France 2026 case distinguishes Article 49(3) budget adoption from the still-proposed 2027 budget', async ({ page }) => {
  await page.goto('/#geography?case=french-fifth-republic-constitutional-and-political-history');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('two censure motions were rejected on 2 February');
  await expect(card).toContainText('not an ordinary affirmative vote on the bill');
  await expect(card).toContainText('not described as introduced, adopted or implemented');
  await expect(card).toContainText('not an official parliamentary filing');
  await expect(card).toContainText('none is a book-length scholarly account of the 2026 procedure');
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

test('Guyana case distinguishes 2025 declared results, observer assessments and the 2026 GECOM warning', async ({ page }) => {
  await page.goto('/#geography?case=guyanese-postcolonial-cooperative-socialist-and-ethnic-coalitional-order');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('PPP/C 36, We Invest in Nationhood (WIN) 16, APNU 12 and Forward Guyana Movement 1 of 65 seats');
  await expect(card).toContainText('CARICOM’s observer mission reports');
  await expect(card).toContainText('the EU mission described efficient polling and tabulation');
  await expect(card).toContainText('August 5 follow-up reports a continuing impasse');
  await expect(card).toContainText('not an independently established adjudication');
  await expect(card).toContainText('No event-specific book-length study of the 2025 election or 2026 commission impasse');
  await expect(card).toContainText('not a current-country score');
});

test('Tunisia case distinguishes 2024 official results, preliminary observation and reported electoral disputes', async ({ page }) => {
  await page.goto('/#geography?case=tunisian-revolutionary-constitutional-transition');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('90.69%');
  await expect(card).toContainText('28.79% turnout');
  await expect(card).toContainText('rather than an independently adjudicated finding here');
  await expect(card).toContainText('explicitly disclaimed an overall or final assessment');
  await expect(card).toContainText('no event-specific book-level account of the 2024 election');
  await expect(card).toContainText('no current status beyond this 2024 event endpoint');
});

test('Mozambique case distinguishes post-election reporting from 2025–26 dialogue steps and future plans', async ({ page }) => {
  await page.goto('/#geography?case=mozambican-post-2019-peace-insurgency-and-electoral-contestation');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('742 criminal cases');
  await expect(card).toContainText('two had resulted in indictments by April 2025');
  await expect(card).toContainText('not a universally settled total');
  await expect(card).toContainText('not evidence that dialogue achieved consensus');
  await expect(card).toContainText('The platform timetable extends beyond this review date');
  await expect(card).toContainText('No event-specific book-length account of the 2024 election crisis');
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

test('South Korea 2026 endpoint distinguishes the final obstruction judgment from the appealed insurrection case', async ({ page }) => {
  await page.goto('/#geography?case=south-korean-constitutional-democratic-and-developmental-order');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('Lee Jae-myung’s succession');
  await expect(card).toContainText('2026Do6500');
  await expect(card).toContainText('dismissing both appeals');
  await expect(card).toContainText('not the separate insurrection case');
  await expect(card).toContainText('books predate the 2024–2026 crisis');
});

test('Argentina 2026 update separates the midterm record, enacted law, delayed provision and limits of new scholarship', async ({ page }) => {
  await page.goto('/#geography?case=argentine-milei-libertarian-presidential-refoundation-and-contestation');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('definitive-scrutiny acts by district');
  await expect(card).toContainText('not why individuals voted');
  await expect(card).toContainText('1 November 2026');
  await expect(card).toContainText('CABA and Buenos Aires Province');
  await expect(card).toContainText('full text was not independently examined');
  await expect(card).toContainText('not a complete foreign-policy audit');
  await expect(card).toContainText('the separate 1983–2023 post-authoritarian case remains unchanged');
});

test('Haiti 2026 update distinguishes transition reporting, interim CEP figures and conditional future election dates', async ({ page }) => {
  await page.goto('/#geography?case=haitian-post-duvalier-constitutional-and-crisis-order');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('the TPC mandate ended on 7 February');
  await expect(card).toContainText('conditional on security and financing');
  await expect(card).toContainText('628,755 registered voters');
  await expect(card).toContainText('not audited final totals');
  await expect(card).toContainText('no election, referendum, completed voter roll');
  await expect(card).toContainText('remain research gaps');
});

test('Ghana 2026 update distinguishes constitutional proposals, civic disagreement and institutional economic assessments', async ({ page }) => {
  await page.goto('/#geography?case=ghanaian-fourth-republic-democratic-consolidation-and-economic-strain');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('not constitutional amendments already enacted');
  await expect(card).toContainText('An implementation committee was inaugurated on 31 August');
  await expect(card).toContainText('organized counter-position, not its prevalence or public consensus');
  await expect(card).toContainText('the IMF’s 27 July 2026 sixth-and-final ECF review');
  await expect(card).toContainText('no event-specific book-length study');
  await expect(card).toContainText('not a score for Ghanaians');
});

test('Italy 2026 referendum is presented as a bounded Article 138 case with explicit evidence limits', async ({ page }) => {
  await page.goto('/#geography?case=italian-post-2022-meloni-government-and-institutional-contestation');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('2022–2026');
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('Article 138 confirmatory referendum');
  await expect(card).toContainText('approximately 54% No and 46% Yes');
  await expect(card).toContainText('no event-specific book-length account');
  await expect(card).toContainText('a generalized public mandate');
});

test('Japan 2026 update distinguishes elected seat totals, later affiliation and live evidence limits', async ({ page }) => {
  await page.goto('/#geography?case=japanese-post-2021-party-finance-and-2024-electoral-contestation');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('2021–2026');
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('LDP won 315 of 465 seats');
  await expect(card).toContainText('one independent joining the LDP after the vote');
  await expect(card).toContainText('not voter motives');
  await expect(card).toContainText('do not constitute two book-length scholarly studies of the whole sequence');
});

test('Vanuatu update distinguishes 2025 official election records from the unresolved Torba schedule', async ({ page }) => {
  await page.goto('/#geography?case=vanuatuan-decolonization-customary-and-constitutional-transition');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('1975–2026');
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('69.1% turnout');
  await expect(card).toContainText('one woman among 52 elected members');
  await expect(card).toContainText('occurrence, cancellation and current status are therefore unresolved');
  await expect(card).toContainText('no event-specific scholarly monograph');
});

test('Zimbabwe 2026 update distinguishes the gazetted amendment from competing legal interpretations and a procedural hearing', async ({ page }) => {
  await page.goto('/#geography?case=zimbabwean-second-republic-and-2023-electoral-contestation');
  const card = page.locator('.geo-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('2017–2026');
  await card.locator('.geo-evidence summary').click();
  await expect(card).toContainText('Act 6 of 2026, gazetted 7 July');
  await expect(card).toContainText('These are attributed, competing legal positions—not a judgment');
  await expect(card).toContainText('the reported procedural question is not a merits ruling');
  await expect(card).toContainText('No merits judgment or authoritative resolution');
  await expect(card).toContainText('event-specific book-length scholarship');
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
