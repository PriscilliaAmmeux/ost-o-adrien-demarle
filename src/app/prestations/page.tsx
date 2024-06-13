import Prestations from "../ui/prestations/prestations";
import Qvt from "../ui/qvt/qvt";
import Layout from "../ui/layout/layout";

export default function Page() {
  return (
    <Layout>
      <section className="flex min-h-screen flex-col items-center justify-between">
        <section className="w-full flex flex-col items-center justify-center">
          <div>
            <Prestations />
            <Qvt />
          </div>
        </section>
      </section>
    </Layout>
  );
}
