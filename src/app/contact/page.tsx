import Form from "../components/form/form";
import InfoContact from "../ui/infoContact/infoContact";

import Layout from "../ui/layout/layout";

export default function Page() {
  return (
    <Layout>
      <section className="pt-10 pb-10 w-full md:w-1/2 mx-auto">
        <Form />
      </section>
    </Layout>
  );
}
