import Subtitle from "../subtitle/subtitle";

interface SectionProps {
  subtitle: string;
  children?: React.ReactNode;
}

export default function SectionHomePage({ subtitle, children }: SectionProps) {
  return (
    <section className="max-w-7xl mx-auto p-2 items-center font-sans text-justify mt-10 mb-10">
      <Subtitle subtitle={subtitle} />
      {children}
    </section>
  );
}
