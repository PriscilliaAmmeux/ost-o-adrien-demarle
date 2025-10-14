import { Metadata } from "next";
import { GiInjustice } from "react-icons/gi";
import Layout from "../ui/layout/layout";
import legalNotices from "../../../api/legalNotices.json";
import LegalBlock from "../components/legalBlock/legalBlock";

export const metadata: Metadata = {
  title:
    "Mentions légales - Adrien Demarle - Ostéopathe D.O - Comines et alentours",
};

export default function LegalNotices() {
  return (
    <Layout>
      <LegalBlock
        icon={GiInjustice}
        title="Mentions légales"
        data={legalNotices}
        iconColor="text-blue-400"
      />
    </Layout>
  );
}
