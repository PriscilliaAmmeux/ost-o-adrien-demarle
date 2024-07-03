interface SectionPriceProps {
  bgColor: string;
  title: string;
  children: React.ReactNode;
}

export default function SectionPrice({
  bgColor,
  title,
  children,
}: SectionPriceProps) {
  return (
    <section
      className={`${bgColor} flex-1 p-6 rounded shadow-md text-white mb-4 md:mb-0`}>
      <h2 className="font-bold text-lg mb-2" style={{ fontFamily: "cursive" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}
