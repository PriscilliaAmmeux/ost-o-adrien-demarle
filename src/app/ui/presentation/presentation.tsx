import Image from "next/image";
import dataFormations from "../../../../api/formations.json";

export default function Presentation() {
  return (
    <section className="max-w-7xl mx-auto p-5 flex flex-col md:flex-row items-center font-sans text-gray-800 mt-10 mb-10">
      <div className="md:w-1/2">
        <h1
          className="text-2xl md:text-4xl font-bold mb-5"
          style={{ color: "var(--blue-color)", fontFamily: "cursive" }}>
          Adrien Demarle
        </h1>
        <h2
          className="text-xl md:text-3xl font-bold mb-5"
          style={{ color: "var(--blue-color)" }}>
          Ostéopathe sur Comines
        </h2>
        <h3
          className="font-bold text-black text-lg mb-2"
          style={{ fontFamily: "cursive" }}>
          {"Diplômé de l’Institut Supérieur d’ostéopathie de Lille"}
        </h3>
        <ul className="mb-5 list-disc ml-10">
          {dataFormations.map((formation) => (
            <li className="mb-2" key={formation.id}>
              {formation.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <Image
          src={"/portrait.webp"}
          alt="photo profil"
          className="rounded-xl flex-shrink-0 shadow-lg"
          security="restricted"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
