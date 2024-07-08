import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.adrien-demarle-osteopathe.fr/");
  await page
    .getByRole("heading", { name: "Adrien Demarle", exact: true })
    .click();
  await page.getByRole("heading", { name: "Ostéopathe sur Comines" }).click();
  await page
    .getByRole("heading", { name: "Diplômé de l’Institut Supé" })
    .click();
  await page.getByRole("heading", { name: "Le cabinet" }).click();
  await page.getByRole("heading", { name: "Contact & Informations" }).click();
  await page
    .locator("li")
    .filter({ hasText: "Adresse: 47 Rue Marceau," })
    .click();
  await page.getByRole("main").getByLabel("Cliquez sur ce bouton pour").click();
});
