import Layout from "../ui/layout/layout";
import SectionPrice from "../ui/sectionPrice/sectionPrice";
import Title from "../ui/title/title";

export default function Page() {
  return (
    <Layout>
      <div className="flex justify-center items-center my-10">
        <Title title="Tarifs" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-stretch md:space-x-6 px-5 pb-5">
        <SectionPrice bgColor="bg-sky-800" title="Tarifs">
          <ul className="flex justify-center items-center h-full">
            <li className="text-4xl">60 €</li>
          </ul>
        </SectionPrice>
        <SectionPrice bgColor="bg-sky-700" title="Remboursements">
          <ul className="list-disc list-inside">
            <li>
              Savez-vous que plus de 85% des mutuelles prennent en charge les
              soins d`&lsquo;ostéopathie et souvent à hauteur de plusieurs
              séances par an.
            </li>
            <li>Contactez la vôtre afin de connaître vos droits !</li>
            <li>
              En fin de consultation, je vous remettrai une note
              d`&lsquo;honoraire à leur envoyer.
            </li>
          </ul>
        </SectionPrice>
        <SectionPrice bgColor="bg-sky-600" title="Moyens de paiement acceptés">
          <li>chèques, espèces et carte bancaire.</li>
        </SectionPrice>
      </div>
    </Layout>
  );
}
