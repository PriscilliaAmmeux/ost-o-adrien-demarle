import Image from "next/image";
import Subtitle from "../subtitle/subtitle";
import dataFormations from "../../../../api/formations.json";

const specialities = [
  "Ostéopathie pour bébés",
  "Troubles musculo-squelettiques (TMS) dans le milieu de l'entreprise",
  "Ostéopathie du sport",
  "Ostéopathie pour femmes enceintes",
  "Ostéopathie pour adulte et seniors",
];

export default function Presentation() {
  return (
    <section className="max-w-7xl mx-auto p-5 flex flex-col md:flex-row items-center font-sans text-gray-800 mt-10 mb-10">
      <div className="md:w-1/2">
        <h1
          className="text-2xl md:text-4xl font-bold mb-5"
          style={{ color: "var(--blue-color-light)", fontFamily: "cursive" }}>
          Adrien Demarle
        </h1>

        <h2
          className="text-xl md:text-3xl font-bold mb-5"
          style={{ color: "var(--blue-color-light)" }}>
          Votre ostéopathe sur Comines
        </h2>

        <Subtitle text="Qui suis je ?" />

        <p className="text-lg leading-relaxed mb-5">
          Diplômé de l’Institut Supérieur d’ostéopathie de Lille. Et spécialisé:
        </p>

        <ul className="list-disc list-inside mb-5">
          {specialities.map((speciality) => (
            <li key={speciality}>{speciality}</li>
          ))}
        </ul>

        <Subtitle text="Formations effectuées:" />

        <ul className="list-disc list-inside mb-5">
          {dataFormations.map((formation) => (
            <li key={formation.id}>{formation.name}</li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <Image
          src={"/portrait.png"}
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
