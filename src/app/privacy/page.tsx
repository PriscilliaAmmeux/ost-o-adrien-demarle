import Layout from "../ui/layout/layout";
import confidentialite from "../../../api/confidentialite.json";
import { GiPadlock } from "react-icons/gi";
import LegalBlock from "../components/legalBlock/legalBlock";

export default function Privacy() {
  return (
    <Layout>
      <LegalBlock
        icon={GiPadlock}
        title="Politique de confidentialité"
        data={confidentialite}
        iconColor="text-blue-400"
      />
    </Layout>
  );
}
