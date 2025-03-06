import Image from "next/image";
import Subtitle from "../subtitle/subtitle";
import WhoIAm from "../whoIAm/whoIAm";
import Appointment from "../appointment/appointment";

export default function Presentation() {
  return (
    <section
      style={{ background: "var(--blue-color-light)" }}
      className="w-full flex flex-col md:flex-row items-center font-sans text-gray-800 mt-10 md:mb-10 pt-5 pb-5">
      <div className="w-full md:w-2/3 md:ml-10 px-5 md:px-0">
        <h1
          className="text-2xl md:text-4xl font-bold mb-5 mt-5 flex flex-col"
          style={{ color: "var(--blue-color)" }}>
          Adrien Demarle
          <span className="text-xl md:text-3xl mt-2">
            Ostéopathe sur Comines
          </span>
        </h1>
        <Subtitle subtitle="Diplômé de l’Institut Supérieur d’ostéopathie de Lille" />
        <WhoIAm />
        <div className="mt-5">
          <Appointment />
        </div>
      </div>
      <div className="w-full md:w-1/3 mt-5 mb-5">
        <Image
          src={"/consult.webp"}
          alt="photo de manipulation d'ostéopathie"
          className="rounded-xl flex-shrink-0 shadow-lg mx-auto md:ml-5 md:mr-5"
          security="restricted"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}
