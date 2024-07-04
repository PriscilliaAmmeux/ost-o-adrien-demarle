interface LogoProps {
  width: number;
}

export default function Logo({ width }: LogoProps = { width: 100 }) {
  return (
    <section>
      <img
        src="/logo.webp"
        loading="lazy"
        alt="logo d'entreprise (une colonne vertébrale stylisée en forme de S)"
        width={width}
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </section>
  );
}
