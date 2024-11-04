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
      <GoogleTagManager gtmId="GTM-N8LT7KXK" />
      <body className={inter.className}>
        {" "}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N8LT7KXK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
