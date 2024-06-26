import Card from "../components/card/card";
import Prestations from "../components/prestations/prestations";
import Layout from "../ui/layout/layout";
import Title from "../ui/title/title";

export default function Page() {
  return (
    <Layout>
      <div className="flex justify-center items-center">
        <Title title="Motifs de consultations" />
      </div>
      <Prestations />
    </Layout>
  );
}
