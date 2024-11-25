import Presentation from "./ui/presentation/presentation";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Layout from "./ui/layout/layout";
import Header from "./ui/header/header";
import Cookies from "./components/cookies/cookies";
import WhyToConsult from "./ui/whyToConsult/whyToConsult";
import WhoIAm from "./ui/whoIAm/whoIAm";

export const metadata: Metadata = {
  title: "Adrien Demarle - Ostéopathe D.O. à Comines | Soins pour tous",
  description:
    "Adrien Demarle, ostéopathe D.O. diplômé de l’Institut Supérieur d’Ostéopathie de Lille, propose des soins adaptés pour bébés, enfants, adultes, séniors et sportifs à Comines et ses alentours. Rendez-vous au cabinet ou en entreprise.",
  keywords:
    "ostéopathe Comines, ostéopathie Comines, soins ostéopathiques Comines, ostéopathe Lille, ostéopathe Warneton, ostéopathe Quesnoy-sur-Deûle, ostéopathe Halluin, ostéopathe Deûlémont, ostéopathie sportifs Comines, ostéopathie bébés Comines, Adrien Demarle ostéopathe",
};

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-between">
        <Header />
        <section className="w-full flex flex-col items-center justify-center">
          <Presentation />
          <WhyToConsult />
        </section>
        <Analytics />
        <Cookies />
      </section>
    </Layout>
  );
}
