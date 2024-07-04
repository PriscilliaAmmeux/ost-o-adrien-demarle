import Presentation from "./ui/presentation/presentation";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Layout from "./ui/layout/layout";
import Header from "./ui/header/header";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Adrien Demarle - Ostéopathe D.O. à Comines",
  description:
    "ADRIEN DEMARLE, ostéopathe DO à Comines, diplômé de l’Institut Supérieur d’ostéopathie de Lille. Ostéopathie pédiatrique et formations avancées en biodynamie, charnières et diaphragme. Expériences et perfectionnements multiples. Ostéopathie pour bébés, enfants, adultes, séniors et sportifs à Comines et environs : Deûlémont, Wervicq-Sud, Wervicq, Quesnoy-sur-Deule, Warneton, Bousbecque, Linselles, Frelinghien, Armentières, Verlinghem. Consultations pour diverses conditions telles que douleurs musculo-squelettiques, troubles du sommeil, traumatismes, RGO, Asymétrie de la tête, Accouchement difficile, Coliques, constipation, mauvaise digestion, Scoliose, attitude scoliotique, cyphose ou hyperlordose, Après tout traumatisme (chute, entorse, déchirure ligamentaire, …), Douleurs abdominales, constipation, ballonnements, Douleurs de dos, dorsales, costales, bassin, coccyx, épaules, cervicales, lombalgie, cervicalgies. Douleurs articulaires et ligamentaires (syndrome de Lacomme), Douleurs ligamentaires utérines (Sensation de tiraillement dans le bas ventre ou sur les côtés), Troubles circulatoires (jambes lourdes, hémorroïdes), Douleurs articulaires et/ou musculaires (élongation, périostite, syndrome de l'essuie glace, syndrome des loges, rachialgie, pubalgie, ...), Lumbago, Pubalgie, Névralgies: sciatique, cruralgie, névralgie cervico-brachiale (ncb), névralgie intercostale. Douleurs pelviennes (sacrum, coccyx). Stress, nervosité, anxiété, fatigue, baisse d'énergie. Troubles musculo-squelettiques liés aux mouvements répétitifs, Suivi post-opératoire, Qualité de Vie au Travail (QVT)",
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Adrien Demarle - Ostéopathe D.O. à Comines</title>
        <link rel="icon" type="image/webp" href="/logo.webp" />
      </Head>
      <main className="flex flex-col items-center justify-between">
        <Header />
        <section className="w-full flex flex-col items-center justify-center">
          <Presentation />
        </section>
        <Analytics />
      </main>
    </Layout>
  );
}
