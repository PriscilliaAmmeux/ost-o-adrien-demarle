import Prestations from "../components/prestations/prestations";
import Layout from "../ui/layout/layout";
import Title from "../ui/title/title";

export default function Page() {
  return (
    <Layout>
      <div className="flex justify-center items-center mt-4 md:mt-0">
        <Title
          title="Motifs de consultations"
          style={{ color: "var(--blue-color)" }}
        />
      </div>
      <Prestations />
    </Layout>
  );
}
