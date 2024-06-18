import Layout from "../ui/layout/layout";
import Title from "../ui/title/title";
import { FaBookMedical } from "react-icons/fa";

export default function Page() {
  return (
    <Layout>
      <Title title="Motifs de consultations" Icon={FaBookMedical} />
      <section className="flex flex-col items-center gap-4"></section>
    </Layout>
  );
}
