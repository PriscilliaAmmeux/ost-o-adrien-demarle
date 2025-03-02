"use client";

import Head from "next/head";
import Footer from "../footer/footer";
import Navigation from "../navigation/navigation";


interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <section>
      <Head>
        <link
          rel="canonical"
          href="https://www.adrien-demarle-osteopathe.fr/"
        />
      </Head>
      <Navigation />
      {children}
      <Footer />
     
    </section>
  );
}
