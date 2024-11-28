import Image from "next/image";
import dataFormations from "../../../../api/formations.json";
import Subtitle from "../subtitle/subtitle";
import WhoIAm from "../whoIAm/whoIAm";

export default function Presentation() {
  return (
    <>
      <section className="max-w-7xl mx-auto pl-5 pr-5 flex flex-col md:flex-row items-center justify-around font-sans text-gray-800 mt-10 mb-10">
        <div className="md:w-1/2">
          <Image
            src={"/consult.webp"}
            alt="photo de consultation avec une patiente enceinte"
            className="rounded-xl flex-shrink-0 shadow-lg"
            security="restricted"
            width={400}
            height={400}
          />
        </div>

        <div className="md:w-1/2">
          <h1
            className="text-2xl md:text-4xl font-bold mb-5 flex flex-col "
            style={{ color: "var(--blue-color)" }}>
            Adrien Demarle{" "}
            <span className="text-xl md:text-3xl mt-2">
              Ostéopathe sur Comines
            </span>
          </h1>
          <Subtitle subtitle="Diplômé de l’Institut Supérieur d’ostéopathie de Lille" />
          <WhoIAm />
          <span className="block mt-4">
            <Subtitle subtitle="Mes formations :" />
          </span>
          <ul className="mb-5 list-disc ml-10 text-justify">
            {dataFormations.map((formation) => (
              <li className="mb-2" key={formation.id}>
                {formation.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
