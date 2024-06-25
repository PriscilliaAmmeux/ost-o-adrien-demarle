interface CardProps {
  title: string;
  img: string;
}

export default function Card({ title, img }: CardProps) {
  const containerStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="bg-white rounded-lg shadow-lg p-6" style={containerStyle}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
    </div>
  );
}
