interface LogoProps {
  width: number;
}

export default function Logo({ width }: LogoProps = { width: 100 }) {
  return (
    <section>
      <img
        src="/logo.webp"
        alt="logo d'entreprise (une colonne vertébrale stylisée en forme de S)"
        width={width}
      />
    </section>
  );
}
