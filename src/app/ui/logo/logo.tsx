import Image from "next/image";

interface LogoProps {
  width: number;
}

export default function Logo({ width }: LogoProps) {
  const height = (width / 16) * 9;
  return (
    <Image
      src="/logo.webp"
      loading="lazy"
      alt="logo d'entreprise (une colonne vertébrale stylisée en forme de S)"
      width={width}
      height={height}
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
}
