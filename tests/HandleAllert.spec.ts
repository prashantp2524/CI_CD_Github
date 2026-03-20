import { test, expect } from "@playwright/test";

test.describe("Handle alert", () => {
  test("Simple alert", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      console.log(dialog.message());
      await dialog.accept();
    });

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole("button", { name: "Simple Alert" }).click();
  });

  test("Confirm alert", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      console.log(dialog.message());
      await dialog.dismiss();
    });
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole("button", { name: "Confirmation Alert" }).click();
  });
});
