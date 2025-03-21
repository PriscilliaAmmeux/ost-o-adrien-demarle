import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <GoogleTagManager gtmId="GTM-5FMD5G9K" />
      <body className={inter.className}>
        {" "}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FMD5G9K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
