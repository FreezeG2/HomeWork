import { test, expect } from '@playwright/test';

test('step1', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await expect(page.getByRole('heading', { name: 'Tech stack' }))
    .toBeVisible();
});

test('step2', async ({ page }) => {
  await page.goto('http://localhost:8080');
  const catalog = await page.locator('section');
  await expect(catalog)
    .toHaveClass('cards');
  await expect(catalog)
    .toHaveCSS('display', 'flex');
  await expect(catalog)
    .toHaveCSS('justify-content', 'space-between');
  await expect(catalog)
    .toHaveCSS('flex-wrap', 'wrap');
});

test('step3', async ({ page }) => {
  await page.goto('http://localhost:8080');

  const catalog = await page.locator('section.cards');
  await expect(catalog.locator('.card'))
    .toHaveCount(5);

  const cardTitles = ['HTML', 'CSS', 'JavaScript', 'React', 'Vue'];

  await Promise.all(cardTitles.map(async (title, index) => {
    const card = catalog.locator(`.card:nth-child(${index + 1})`);

    await expect(card.locator('img'))
      .toHaveAttribute('src', `assets/${title}.png`);
    await expect(card.locator('img'))
      .toHaveAttribute('alt');
    await expect(card.locator('h4'))
      .toHaveText(title);
    await expect(card)
      .toHaveCSS('display', 'flex');
    await expect(card)
      .toHaveCSS('flex-direction', 'column');
    await expect(card)
      .toHaveCSS('justify-content', 'center');
    await expect(card)
      .toHaveCSS('align-items', 'center');
  }));

  await expect(page)
    .toHaveScreenshot({ maxDiffPixels: 10 });
});

test('step4', async ({ page }) => {
  await page.goto('http://localhost:8080');

  const catalog = await page.locator('section.cards');
  await expect(catalog.locator('.card'))
    .toHaveCount(5);

  const HTML = catalog.locator('.card:nth-child(1)');
  await HTML.hover();
  const boxShadowHTML = await HTML.evaluate((el) => window.getComputedStyle(el).boxShadow);
  expect(boxShadowHTML)
    .toBe('rgba(0, 0, 0, 0.2) 4px 4px 8px 0px');

  const CSS = catalog.locator('.card:nth-child(1)');
  await CSS.hover();
  const boxShadowCSS = await CSS.evaluate((el) => window.getComputedStyle(el).boxShadow);
  expect(boxShadowCSS)
    .toBe('rgba(0, 0, 0, 0.2) 4px 4px 8px 0px');

  const JS = catalog.locator('.card:nth-child(1)');
  await JS.hover();
  const boxShadowJS = await JS.evaluate((el) => window.getComputedStyle(el).boxShadow);
  expect(boxShadowJS)
    .toBe('rgba(0, 0, 0, 0.2) 4px 4px 8px 0px');

  const React = catalog.locator('.card:nth-child(1)');
  await React.hover();
  const boxShadowReact = await React.evaluate((el) => window.getComputedStyle(el).boxShadow);
  expect(boxShadowReact)
    .toBe('rgba(0, 0, 0, 0.2) 4px 4px 8px 0px');

  const Vue = catalog.locator('.card:nth-child(1)');
  await Vue.hover();
  const boxShadowVue = await Vue.evaluate((el) => window.getComputedStyle(el).boxShadow);
  expect(boxShadowVue)
    .toBe('rgba(0, 0, 0, 0.2) 4px 4px 8px 0px');
});
