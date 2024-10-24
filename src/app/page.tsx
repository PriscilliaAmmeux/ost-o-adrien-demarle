import Presentation from "./ui/presentation/presentation";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Layout from "./ui/layout/layout";
import Header from "./ui/header/header";
import Head from "next/head";
import Cookies from "./components/cookies/cookies";
import GoogleTagManager from "./components/googleTagManager/googleTagManager";
import GoogleTagManagerNoScript from './components/googleTagManagerNoScript/googleTagManagerNoScript';

export const metadata: Metadata = {
  title: "Adrien Demarle - Ostéopathe D.O. à Comines",
  description:
    "ADRIEN DEMARLE ostéopathe DO à Comines diplômé de l’Institut Supérieur d’ostéopathie de Lille pour tous : bébés, enfants, adultes, séniors et sportifs",
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <link
          rel="canonical"
          href="https://www.adrien-demarle-osteopathe.fr/"
        />
        <GoogleTagManager />
      </Head>
      <body className="flex flex-col items-center justify-between">
        <GoogleTagManagerNoScript />
        <Header />
        <section className="w-full flex flex-col items-center justify-center">
          <Presentation />
        </section>
        <Analytics />
        <Cookies />
      </body>
    </Layout>
  );
}
