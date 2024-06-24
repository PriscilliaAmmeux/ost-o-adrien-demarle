import Image from "next/image";

export default function Presentation() {
  return (
    <section className="max-w-7xl mx-auto p-5 flex flex-col md:flex-row items-center font-sans text-gray-800 mt-10 mb-10">
      <div className="md:w-1/2 md:pr-10">
        <h1
          className="text-2xl md:text-4xl font-bold mb-5"
          style={{ color: "var(--blue-color)", fontFamily: "cursive" }}>
          Adrien Demarle
        </h1>
        <h2
          className="text-xl md:text-3xl font-bold mb-5"
          style={{ color: "var(--blue-color)" }}>
          Votre ostéopathe sur Comines
        </h2>
        <p className="text-base md:text-lg leading-relaxed mb-5">
          J&apos;ai le plaisir de vous accueillir à Comines depuis ...
        </p>
        <p className="italic text-base md:text-lg mb-5">Qui suis je ?</p>
        <p className="text-lg leading-relaxed mb-5">
          Je suis diplômé de l&apos;École de Lille après une formation de 5 ans
          et spécialisé :
        </p>
        <ul className="list-disc list-inside mb-5">
          <li>en ostéopathie pour bébés,</li>
          <li>
            en troubles musculo-squelettiques (TMS) dans le milieu de
            l&apos;entreprise,
          </li>
          <li>en ostéopathie du sport,</li>
          <li>en ostéopathie pour femmes enceintes.</li>
          <li>en ostéopathie pour adulte et seniors.</li>
        </ul>

        <p className="italic text-base md:text-lg mb-5">
          Diplômes et formations :
        </p>
        <ul className="list-disc list-inside mb-5">
          <li>
            <strong>années ? </strong>Perfectionnement et inclusion de notre
            traitement ostéopathique dans la démarche de prévention des
            entreprises (TMS) - Reflex Ostéo.
          </li>
          <li>
            <strong>années ? </strong> Ostéopathie pédiatrique : approche
            ostéopathique des bébés niveau 1, 2 et 3 (Dany Heintz, Eric Simon)
            avec DSTH (homéopathie) - Ostéo-bébé.
          </li>
          <li>
            <strong>années ? </strong> Expériences ostéopathiques - Marc Van
            Belleghem et Denis Averland.
          </li>
          <li>
            {" "}
            <strong>Année ?</strong>Diplôme d&apos;ostéopathe (D.O.) - ISO
            Lille.
          </li>
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
