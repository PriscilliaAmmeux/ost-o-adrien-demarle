import { Metadata } from "next";
import Prestations from "../components/prestations/prestations";
import Layout from "../ui/layout/layout";
import Title from "../ui/title/title";

export const metadata: Metadata = {
  title:
    "Adrien Demarle - Motifs de consultations - Ostéopathe D.O - Comines et alentours",
};

export default function Page() {
  return (
    <Layout>
      <head className="flex justify-center items-center mt-4 md:mt-0">
        <Title
          title="Motifs de consultations"
          style={{ color: "var(--blue-color)" }}
        />
      </head>
      <section>
        <Prestations />
      </section>
    </Layout>
  );
}
