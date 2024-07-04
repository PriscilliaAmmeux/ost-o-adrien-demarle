interface LogoProps {
  width: number;
}

export default function Logo({ width }: LogoProps = { width: 100 }) {
  return (
    <section>
      <img
        src="/logo.webp"
        srcSet="/logo-small.webp 500w, /logo-medium.webp 1000w, /logo-large.webp 1500w"
        sizes="(max-width: 600px) 500px, (max-width: 1200px) 1000px, 1500px"
        alt="logo d'entreprise (une colonne vertébrale stylisée en forme de S)"
        width={width}
      />
    </section>
  );
}
