interface SubtitleProps {
  text: string;
}

export default function Subtitle({ text }: SubtitleProps) {
  return <h3 className="italic text-base md:text-lg mb-5 font-bold">{text}</h3>;
}
