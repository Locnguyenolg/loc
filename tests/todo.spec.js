import { test, expect } from '@playwright/test';

test('test to-do app @sanity', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    await page.getByTestId('text-input').click();
    await page.getByTestId('text-input').fill('Wake up');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('Have Tea');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('Walk');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('Ypie');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('Office');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('Rest');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('Sleep');
    await page.getByTestId('text-input').press('Enter');
    await page.getByRole('listitem').filter({ hasText: 'Walk' }).getByTestId('todo-item-toggle').check();
    await page.getByRole('listitem').filter({ hasText: 'Office' }).getByTestId('todo-item-toggle').check();
    await page.getByRole('link', { name: 'Active' }).click();
    await expect(page.getByText('Wake up')).toBeVisible();
    await expect(page.locator('.todo-list li')).toHaveCount(12);
});