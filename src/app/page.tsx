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
  title:
    "Adrien Demarle - Ostéopathe D.O. à Comines | Soins pour tous, bébés, adultes, sportifs",
  description:
    "Adrien Demarle, ostéopathe D.O. à Comines, diplômé de l’Institut Supérieur d’Ostéopathie de Lille, propose des soins personnalisés pour bébés, enfants, adultes, seniors et sportifs. Soulagement des douleurs, amélioration de la mobilité et accompagnement postnatal. Agréé mutuelles France et Belgique.",
  keywords: [
    "osteopathe-comines",
    "osteopathie-comines",
    "osteopathe-adrien-demarle",
    "osteopathe-lille",
    "osteopathe-warneton",
    "osteopathe-quesnoy-sur-deule",
    "osteopathe-halluin",
    "osteopathe-deulemont",
    "osteopathie-bebe-comines",
    "osteopathie-adulte-comines",
    "osteopathie-sportif-comines",
    "osteopathie-senior-comines",
    "osteopathie-femme-enceinte-comines",
    "soins-osteopathiques-comines",
    "consultation-osteopathie-comines",
  ],
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
