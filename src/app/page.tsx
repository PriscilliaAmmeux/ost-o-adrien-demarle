import Presentation from "./ui/presentation/presentation";
import type { Metadata } from "next";
import Layout from "./ui/layout/layout";
import Header from "./ui/header/header";
import WhyToConsult from "./ui/whyToConsult/whyToConsult";
import Appointment from "./ui/appointment/appointment";
import Session from "./ui/session/session";
import Formation from "./ui/formations/formations";
import Vision from "./ui/vision/vision";
import Help from "./ui/help/help";
import Consultation from "./ui/consultation/consultation";
import Solution from "./ui/solution/solution";
import CookieConsent from "./components/cookieConsent/cookieConsent";

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
      <section className="">
        <Header />
        <section className="w-full flex flex-col mb-5">
          <p className="italic mt-10 flex text-center flex justify-center ">
            Agréé mutuelle France et Belgique
          </p>
          <Solution />
          <WhyToConsult />
          <Vision />
          <Help />
          <Presentation />
          <Session />
          <Formation />
          <Consultation />
          <Appointment />
        </section>
      </section>
    </Layout>
  );
}
