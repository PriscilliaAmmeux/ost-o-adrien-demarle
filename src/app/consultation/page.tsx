import { Metadata } from "next";
import Prestations from "../components/prestations/prestations";
import Layout from "../ui/layout/layout";
import Title from "../ui/title/title";

export const metadata: Metadata = {
  title:
    "Adrien Demarle - Motifs de consultations - Ostéopathe D.O - Comines et alentours | Soins pour tous",
  description:
    "Adrien Demarle, ostéopathe D.O. diplômé de l’Institut Supérieur d’Ostéopathie de Lille, propose des soins adaptés pour bébés, enfants, adultes, séniors et sportifs à Comines et ses alentours. Rendez-vous au cabinet ou en entreprise.",
  keywords:
    "ostéopathe Comines, ostéopathie Comines, soins ostéopathiques Comines, ostéopathe Lille, ostéopathe Warneton, ostéopathe Quesnoy-sur-Deûle, ostéopathe Halluin, ostéopathe Deûlémont, ostéopathie sportifs Comines, ostéopathie bébés Comines, Adrien Demarle ostéopathe, motifs consultations, torticolis, asymétrie, sommeil, RGO, régurgitations, accouchement difficile, coliques, constipations, mauvais digestion, lacrymal, stabisme, maux de tête, otites, suites d'opérations, appareil dentaire, scoliose, scholiotique, syphose, hyperlordose, traumatisme, chute, entorse, déchirure, ligamentaire, douleurs dos, douleur dorsale, articulaires, douleurs articulaires, douleurs musculaires, douleurs musculaires, douleurs cervicales, douleurs lombaires, douleurs thoraciques, douleurs coccyx, douleurs épaules, douleurs coudes, douleurs poignets, douleurs hanches, douleurs genoux, douleurs chevilles, douleurs pieds, douleurs mâchoire, douleurs crâne, douleurs visage, douleurs cou, douleurs bras, douleurs mains, douleurs jambes, douleurs pieds, douleurs ventre, douleurs abdominales, douleurs thoraciques, douleurs pelviennes, douleurs périnéales, douleurs pubiennes, douleurs sciatiques, douleurs crurales, césarienne, bébé ne se retourne pas, troubles circulatoires, jambes lourdes, varices, hémorroïdes, troubles digestifs, troubles intestinaux, troubles gynécologiques, troubles urinaires, troubles ORL, troubles respiratoires, pubalgie, lumbago, sportifs, tendinites, prévenir l'usure du corps, élongation, périostite, syndrome de l'essuie glace, syndrome des loges, rachialgie, choc émotionnel, stress, nervosité, anxiété, fatique, baisse d'énergie, sacrum, coccyx, cervicalgie, Troubles musculo-squelettiques, Arthrose, Varices, troubles du retour veineux, prothèse hanche, prothése genou, prothèse, QVT ",
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
