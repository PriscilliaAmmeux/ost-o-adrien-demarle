import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.adrien-demarle-osteopathe.fr/");
  await page.getByRole("link", { name: "Tarifs" }).click();
  await page.locator("h2").filter({ hasText: "Tarifs" }).click();
  await page.getByRole("heading", { name: "Remboursements" }).click();
  await page
    .getByRole("heading", { name: "Moyens de paiement acceptés" })
    .click();
  await page.getByText("€").click();
  await page.getByText("Chèques, espèces et carte").click();
  await page.getByLabel("Cliquez sur ce bouton pour").click();
  await page.getByRole("heading", { name: "Le cabinet" }).click();
  await page.getByRole("heading", { name: "Contact & Informations" }).click();
  await page.getByText("Adresse: 47 Rue Marceau,").click();
  await page.getByRole("link", { name: "demarle.adrien.osteopathe@" }).click();
  await page
    .getByRole("button", { name: "Politiques de confidentialité" })
    .click();
  await page.getByLabel("Cliquez sur le bouton pour").click();
  const page4Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "www.priscillia-ammeux-" }).click();
  const page4 = await page4Promise;
  const page5Promise = page.waitForEvent("popup");
  await page.getByLabel("Link to LinkedIn profile").click();
  const page5 = await page5Promise;
  await page.getByLabel("Cliquez sur ce bouton pour").click();
});
