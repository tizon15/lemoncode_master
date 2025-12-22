import { test, expect } from '@playwright/test';

test('should fetch the employees list first page with headers', async ({
  page,
}) => {
  //Arrange
  //Act
  await page.goto('#/employees');
  await page.waitForLoadState('networkidle');
  //Assert

  expect(page.getByRole('row')).toHaveCount(6);
});

test('should fetch the employees list second page', async ({ page }) => {
  //Arrange
  //Act
  await page.goto('#/employees');
  await page.click('button[aria-label="Go to next page"]');
  await page.waitForLoadState('networkidle');
  //Assert
  const rows = page.locator('tbody tr');
  await expect(rows).toHaveCount(3);
});
test('should search employeess by the input', async ({ page }) => {
  //Arrange
  //Act
  await page.goto('#/employees');
  await page.waitForLoadState('networkidle');
  await page.fill('input[placeholder="Buscar empleado"]', 'Manuel');
  await page.waitForLoadState('networkidle');
  //Assert
  const rows = page.locator('tbody tr');
  await expect(rows).toHaveCount(2);
});
test('should delete an employee', async ({ page }) => {
  //Arrange
  //Act
  await page.goto('#/employees');
  await page.waitForSelector('tbody tr');
  await page.click('button:has(svg[data-testid="DeleteIcon"])');
  await page.waitForLoadState('networkidle');
  await page
    .getByRole('dialog')
    .getByRole('button', { name: 'Aceptar' })
    .click();
  await page.waitForLoadState('networkidle');
  await page.click('button[aria-label="Go to next page"]');
  await page.waitForLoadState('networkidle');
  //Assert
  const rows = page.locator('tbody tr');

  await expect(rows).toHaveCount(2);
});
test('should cancel the deletion', async ({ page }) => {
  //Arrange
  //Act
  await page.goto('#/employees');
  await page.waitForSelector('tbody tr');
  await page.click('button:has(svg[data-testid="DeleteIcon"])');
  await page.waitForLoadState('networkidle');
  await page
    .getByRole('dialog')
    .getByRole('button', { name: 'Cancelar' })
    .click();
  await page.waitForLoadState('networkidle');
  //Assert
  const rows = page.locator('tbody tr');

  await expect(rows).toHaveCount(5);
});
test('should create an employee', async ({ page }) => {
  //Arrange
  //Act
  await page.goto('#/employees');
  await page.getByRole('button', { name: 'Nuevo empleado' }).click();
  await page.waitForLoadState('networkidle');

  //Assert
  expect(page.url()).toContain('#/employees/0');
});

test('should edit an employee', async ({ page }) => {
  //Arrange
  //Act
  await page.goto('#/employees');
  await page.waitForSelector('tbody tr');
  const secondRow = page.locator('tbody tr').nth(1);
  const employeeId = await secondRow.locator('td').nth(1).textContent();
  console.log(employeeId);
  await secondRow.locator('button:has(svg[data-testid="EditIcon"])').click();
  await page.waitForLoadState('networkidle');
  //Assert
  expect(page.url()).toContain(`#/employees/${employeeId}`);
});
