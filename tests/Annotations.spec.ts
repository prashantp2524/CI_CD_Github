import { test } from "@playwright/test";

test.describe("Annotations", () => {
  test("Test example 1", async ({ page }) => {
    console.log("Test example 1");
  });
  test.only("Test example 2", async ({ page }) => {
    console.log("Test example 2");
  });
  test("Test example 3", async ({ page }) => {
    console.log("Test example 3 ");
  });
  test("Test example 4", async ({ page }) => {
    console.log("Test example 4");
  });
});
