import { Metadata } from "next";
import Prestations from "../components/prestations/prestations";
import Layout from "../ui/layout/layout";
import Title from "../ui/title/title";

export const metadata: Metadata = {
  title:
    "Adrien Demarle - Motifs de consultations - Osteopathe D.O - Comines et alentours | Soins pour tous",
  description:
    "Adrien Demarle, osteopathe D.O diplome de l'Institut Superieur d'Osteopathie de Lille, propose des soins adaptes pour bebes, enfants, adultes, seniors et sportifs a Comines et ses alentours. Rendez-vous au cabinet ou en entreprise.",
  keywords: [
    "osteopathe-comines",
    "osteopathie-comines",
    "soins-osteopathiques-comines",
    "osteopathe-lille",
    "osteopathe-warneton",
    "osteopathe-quesnoy-sur-deule",
    "osteopathe-halluin",
    "osteopathe-deulemont",
    "osteopathie-sportifs-comines",
    "osteopathie-bebes-comines",
    "adrien-demarle-osteopathe",
    "motifs-consultations",
    "torticolis",
    "asymetrie",
    "sommeil",
    "rgo",
    "regurgitations",
    "accouchement-difficile",
    "coliques",
    "constipation",
    "mauvaise-digestion",
    "canal-lacrymal",
    "strabisme",
    "maux-de-tete",
    "otites",
    "suites-operation",
    "appareil-dentaire",
    "scoliose",
    "attitude-scoliotiques",
    "cyphose",
    "hyperlordose",
    "traumatisme",
    "chute",
    "entorse",
    "dechirure-ligamentaire",
    "douleurs-dos",
    "douleurs-dorsales",
    "douleurs-articulaires",
    "douleurs-musculaires",
    "douleurs-cervicales",
    "douleurs-lombaires",
    "douleurs-thoraciques",
    "douleurs-coccyx",
    "douleurs-epaules",
    "douleurs-coudes",
    "douleurs-poignets",
    "douleurs-hanches",
    "douleurs-genoux",
    "douleurs-chevilles",
    "douleurs-pieds",
    "douleurs-machoire",
    "douleurs-crane",
    "douleurs-visage",
    "douleurs-cou",
    "douleurs-bras",
    "douleurs-mains",
    "douleurs-jambes",
    "douleurs-ventre",
    "douleurs-abdominales",
    "douleurs-pelviennes",
    "douleurs-perineales",
    "douleurs-pubiennes",
    "douleurs-sciatiques",
    "douleurs-crurales",
    "cesarienne",
    "bebe-ne-se-retourne-pas",
    "troubles-circulatoires",
    "jambes-lourdes",
    "varices",
    "hemorroides",
    "troubles-digestifs",
    "troubles-intestinaux",
    "troubles-gynecologiques",
    "troubles-urinaires",
    "troubles-orl",
    "troubles-respiratoires",
    "pubalgie",
    "lumbago",
    "sportifs",
    "tendinites",
    "elongation",
    "periostite",
    "syndrome-essuie-glace",
    "syndrome-des-loges",
    "rachialgie",
    "choc-emotionnel",
    "stress",
    "nervosite",
    "anxiete",
    "fatigue",
    "baisse-energie",
    "sacrum",
    "coccyx",
    "cervicalgie",
    "troubles-musculo-squelettiques",
    "arthrose",
    "troubles-retour-veineux",
    "prothese-hanche",
    "prothese-genou",
    "qvt",
  ],
};

export default function Page() {
  return (
    <Layout>
      <section className="flex justify-center items-center">
        <Title
          title="Motifs de consultations"
          style={{ color: "var(--blue-color)" }}
        />
      </section>
      <section>
        <Prestations />
      </section>
    </Layout>
  );
}
