import { Metadata } from "next";
import Layout from "../ui/layout/layout";
import SectionPrice from "../ui/sectionPrice/sectionPrice";
import Title from "../ui/title/title";
import GoogleTagManager from "../components/googleTagManager/googleTagManager";
import GoogleTagManagerNoScript from "../components/googleTagManagerNoScript/googleTagManagerNoScript";

export const metadata: Metadata = {
  title: "Adrien Demarle - Tarifs - Ostéopathe D.O - Comines et alentours",
};

export default function Page() {
  return (
    <Layout>
      <head className="flex justify-center items-center my-10">
        <GoogleTagManager />
        <Title title="Tarifs" style={{ color: "var(--blue-color)" }} />
      </head>
      <section className="flex flex-col md:flex-row justify-center items-stretch md:space-x-6 px-5 pb-5">
        <GoogleTagManagerNoScript />
        <SectionPrice title="Tarifs">
          <ul className="flex justify-center items-center h-full pb-10">
            <li className="text-4xl">60 €</li>
          </ul>
        </SectionPrice>
        <SectionPrice title="Remboursements">
          <ul className="list-disc list-inside">
            <li>
              Savez-vous que plus de 85% des mutuelles prennent en charge les
              soins d&lsquo;ostéopathie et souvent à hauteur de plusieurs
              séances par an.
            </li>
            <li>Contactez la vôtre afin de connaître vos droits !</li>
            <li>
              En fin de consultation, je vous remettrai une note
              d&lsquo;honoraire à leur envoyer.
            </li>
          </ul>
        </SectionPrice>
        <SectionPrice title="Moyens de paiement acceptés">
          <li>Chèques, espèces et carte bancaire.</li>
        </SectionPrice>
      </section>
    </Layout>
  );
}
