"use client";

import Head from "next/head";
import Footer from "../footer/footer";
import Navigation from "../navigation/navigation";
import { FaPhoneFlip } from "react-icons/fa6";

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
      <a
        href="tel:+33637059679"
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg md:hidden"
        style={{ zIndex: 1000 }}>
        {" "}
        <div className="flex flex-row gap-2">
          <FaPhoneFlip size={20} />
          Appeler
        </div>
      </a>
    </section>
  );
}
