import Presentation from "./ui/presentation/presentation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Layout from "./ui/layout/layout";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-between">
        <section className="w-full flex flex-col items-center justify-center">
          <Presentation />
        </section>
        <Analytics />
        <SpeedInsights />
      </main>
    </Layout>
  );
}
