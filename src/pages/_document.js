import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Métadonnées Open Graph */}
        <meta
          property="og:title"
          content="Adrien Demarle - Ostéopathe D.O. à Comines | Soins pour tous"
        />
        <meta
          property="og:description"
          content="Adrien Demarle, ostéopathe D.O. diplômé de l’Institut Supérieur d’Ostéopathie de Lille, propose des soins adaptés pour bébés, enfants, adultes, séniors et sportifs à Comines et ses alentours. Rendez-vous au cabinet ou en entreprise."
        />
        <meta property="og:image" content="/public/logo.webp" />
        <meta
          property="og:url"
          content="https://www.adrien-demarle-osteopathe.fr/"
        />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
