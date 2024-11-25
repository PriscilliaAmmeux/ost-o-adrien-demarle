interface SubtitleProps {
  subtitle: string;
}

export default function Subtitle(subtitle: SubtitleProps) {
  return (
    <h3 className="font-bold text-black text-lg mb-2">{subtitle.subtitle}</h3>
  );
}