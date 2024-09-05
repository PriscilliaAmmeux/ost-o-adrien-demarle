import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.adrien-demarle-osteopathe.fr/");
  await page.getByRole("link", { name: "Motifs de consultations" }).click();
  await page
    .getByRole("heading", {
      name: "L'ostéopathie pour les nourrissons et enfants",
    })
    .click();
  await page
    .getByRole("heading", { name: "L'ostéopathie pour les femmes" })
    .click();
  await page
    .getByRole("heading", { name: "L'ostéopathie pour les sportifs" })
    .click();
  await page
    .getByRole("heading", { name: "L'ostéopathie pour les adultes" })
    .click();
  await page
    .getByRole("heading", { name: "L'ostéopathie pour les seniors" })
    .click();
  await page
    .getByRole("heading", { name: "Qualité de Vie au Travail (" })
    .click();
  await page
    .locator("#prestation-1")
    .getByLabel("Cliquez sur le bouton pour")
    .click();
  await page.getByText("X", { exact: true }).click();
  await page.getByRole("heading", { name: "Le cabinet" }).click();
  await page.getByRole("heading", { name: "Contact & Informations" }).click();
  await page.getByText("Adresse: 47 Rue Marceau,").click();
  await page.getByRole("link", { name: "demarle.adrien.osteopathe@" }).click();
  await page.getByLabel("Cliquez sur le bouton pour fermer la modal").click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByLabel("Link to LinkedIn profile").click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "www.priscillia-ammeux-" }).click();
  const page2 = await page2Promise;
});
