import Layout from "../ui/layout/layout";
import Title from "../ui/title/title";

export default function Page() {
  return (
    <Layout>
      <div className="flex items-center justify-center">
        <Title title="Motifs de consultations" />
      </div>

      <section className="flex flex-col items-center gap-4"></section>
    </Layout>
  );
}
