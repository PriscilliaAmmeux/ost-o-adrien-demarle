import Appointment from "@/app/ui/appointment/appointment";

interface CardProps {
  id: number;
  title: string;
  list: { text: string }[];
}

export default function Card({ id, title, list }: CardProps) {
  return (
    <section
      id={`prestation-${id}`}
      className="relative bg-sky-800 rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
      <div className="px-6 py-4 mb-20">
        <h1
          className="font-bold text-white text-lg underline mb-2"
          style={{ fontFamily: "cursive" }}>
          {title}
        </h1>
        <ul className="list-disc pl-5">
          {list.map((item, index) => (
            <li className="text-white text-base mt-2" key={index}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-end items-center h-full mb-5">
        <Appointment />
      </div>
    </section>
  );
}
