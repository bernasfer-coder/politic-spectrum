import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('country paths filter, persist and handle newly researched countries', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/#geography');
  const map = page.getByRole('group', { name: 'Interactive world map' });
  await page.getByRole('button', { name: 'Zoom to Middle East', exact: true }).click();
  await map.getByRole('button', { name: 'Iran: 2 matching cases', exact: true }).click();
  await expect(page.locator('.geo-card')).toHaveCount(2);
  await expect(page.getByRole('combobox', { name: /Country/ })).toHaveValue('iran');
  await page.reload();
  await expect(map.getByRole('button', { name: /Iran:/ })).toHaveAttribute('aria-pressed', 'true');
  await page.getByRole('button', { name: 'World view', exact: true }).click();
  await map.getByRole('button', { name: 'Brazil: 5 matching cases', exact: true }).click();
  await expect(page.locator('.geo-card')).toHaveCount(5);
  await expect(page.locator('.geo-card').first()).toContainText(/Brazilian democratic constitutionalism|1985–1988/);
  await page.reload();
  await expect(page.getByRole('combobox', { name: /Country/ })).toHaveValue('brazil');
  await page.goBack();
  await expect(map.getByRole('button', { name: /Iran:/ })).toHaveAttribute('aria-pressed', 'true');
  expect(errors).toEqual([]);
});

test('DRC country polygon selects its single bounded conflict case', async ({ page }) => {
  await page.goto('/#geography');
  const map = page.getByRole('group', { name: 'Interactive world map' });
  const drc = map.getByRole('button', { name: 'Democratic Republic of the Congo: 1 matching case', exact: true });
  await expect(drc).toBeVisible();
  await drc.click();
  await expect(page.getByRole('combobox', { name: /Country/ })).toHaveValue('map-180');
  await expect(page.locator('.geo-card')).toHaveCount(1);
  await expect(page.locator('.geo-card')).toContainText('parallel Washington and Doha political tracks');
  await expect(drc).toHaveAttribute('aria-pressed', 'true');
});

test('markers and cross-border controls select places, not invented countries', async ({ page }, testInfo) => {
  await page.goto('/#geography');
  await page.getByRole('button', { name: 'City & region markers', exact: true }).click();
  const map = page.getByRole('group', { name: 'Interactive world map' });
  const jerusalem = map.getByRole('button', { name: /Jerusalem.*matching/ });
  await jerusalem.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.geo-card')).toHaveCount(1);
  await expect(page.locator('.geo-card')).toContainText('Martin Buber');
  await expect(page.getByRole('combobox', { name: /Country/ })).toHaveValue('all');
  await page.locator('.geo-map').screenshot({ path: testInfo.outputPath('interactive-map-markers.png') });
  await page.getByRole('group', { name: 'Regional and cross-border connections' }).getByRole('button', { name: /Ottoman networks/ }).click();
  await expect(page.locator('.geo-card')).toHaveCount(1);
  await expect(page.locator('.geo-card')).toContainText('Young Ottoman');
  await expect(page).toHaveURL(/place=ottoman-network/);
});

test('map is keyboard accessible, responsive and self-hosted', async ({ page }, testInfo) => {
  // Establish the existing site's font requests before measuring map loading/interaction.
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  const externalData = [];
  const recordRequest = (request) => { if (['fetch', 'xhr', 'image'].includes(request.resourceType()) && !request.url().startsWith('http://127.0.0.1:4174/')) externalData.push(request.url()); };
  page.on('request', recordRequest);
  await page.getByRole('tab', { name: /Geographic Atlas/ }).click();
  const map = page.getByRole('group', { name: 'Interactive world map' });
  await map.getByRole('button', { name: /Egypt:/ }).focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('combobox', { name: /Country/ })).toHaveValue('egypt');
  await page.keyboard.press('ArrowRight');
  await expect(map.getByRole('button', { name: /El Salvador:/ })).toBeFocused();
  await page.keyboard.press('Space');
  await expect(page.getByRole('combobox', { name: /Country/ })).toHaveValue('map-222');
  await page.getByRole('button', { name: 'Clear geographic selection' }).click();
  await page.getByRole('button', { name: 'Zoom to Middle East' }).click();
  await page.getByRole('button', { name: 'Zoom in', exact: true }).click();
  await page.getByRole('button', { name: 'Pan east' }).click();
  await page.getByRole('button', { name: 'World view' }).click();
  // End application monitoring before axe's injected audit fetches cross-origin CSS.
  expect(externalData).toEqual([]);
  page.off('request', recordRequest);
  const results = await new AxeBuilder({ page }).include('.geo-map').analyze();
  expect(results.violations.filter(({ impact }) => ['serious', 'critical'].includes(impact))).toEqual([]);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.locator('.geo-map').screenshot({ path: testInfo.outputPath('interactive-map.png') });
  const notice = await page.request.get('/map-data-notices.txt');
  expect(notice.ok()).toBe(true);
  expect(await notice.text()).toContain('Copyright 2013-2019 Michael Bostock');
});

test('dragging pans without selecting a country, and reduced motion disables animation', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/#geography');
  await page.getByRole('button', { name: 'Zoom to Middle East' }).click();
  const map = page.getByRole('group', { name: 'Interactive world map' });
  const bounds = await map.boundingBox();
  const before = await page.locator('.geo-map-transform').getAttribute('transform');
  await page.mouse.move(bounds.x + bounds.width * .65, bounds.y + bounds.height * .6);
  await page.mouse.down();
  await page.mouse.move(bounds.x + bounds.width * .5, bounds.y + bounds.height * .65, { steps: 8 });
  await page.mouse.up();
  expect(await page.locator('.geo-map-transform').getAttribute('transform')).not.toBe(before);
  await expect(page).toHaveURL(/#geography$/);
  expect(await page.locator('.geo-map-transform').evaluate((node) => getComputedStyle(node).transitionDuration)).toBe('0s');
  await page.getByRole('group', { name: 'Regional and cross-border connections' }).getByRole('button', { name: /^Middle East/ }).click();
  await expect(page.getByRole('combobox', { name: 'Region', exact: true })).toHaveValue('Middle East');
});
