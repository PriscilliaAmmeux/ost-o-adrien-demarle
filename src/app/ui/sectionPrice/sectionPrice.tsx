interface SectionPriceProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionPrice({ title, children }: SectionPriceProps) {
  return (
    <section
      className="flex-1 p-6 rounded shadow-md mb-4 md:mb-0"
      style={{ backgroundColor: "var(--blue-color-light)" }}>
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      {children}
    </section>
  );
}
