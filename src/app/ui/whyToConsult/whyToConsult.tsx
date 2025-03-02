import SectionHomePage from "../sectionHomePage/sectionHomePage";
import Image from "next/image";

export default function WhyToConsult() {
  return (
    <section className="max-w-7xl mx-auto pl-5 pr-5 flex flex-col md:flex-row items-center font-sans text-gray-800 md:mt-10 md:mb-10 ">
      <div className="md:w-1/2 ">
        <SectionHomePage subtitle="Vous cherchez une solution pour des douleurs comme un mal de dos, sciatique...? Des douleurs vous empêchent de profiter pleinement de votre quotidien ? Et si c'était le moment idéal pour retrouver votre équilibre?">
          <p className="text-justify">
            L&apos;ostéopathie peut apporter un soulagement, aussi bien pour le
            dos que pour le reste du corps! En effet en libérant des tensions et
            des blocages, il est possible d&apos;atténuer des douleurs comme une
            sciatique, mal de dos, cruralgie, tendinite, entorse, névralgie,
            lumbago, une épaule limitée en mouvement etc
          </p>
        </SectionHomePage>
        <SectionHomePage subtitle="Il est temps que votre situation s'améliore !">
          <p className="text-justify">
            En réduisant les tensions musculaires et les blocages articulaires,
            vous retrouverez de la mobilité réduisant ainsi vos douleurs. Que
            vous soyez sportif, femme enceinte ou simplement en recherchant un
            meilleur bien-être, l'ostéopathie est adaptée à tous.
          </p>
        </SectionHomePage>
      </div>
      <div className="md:w-1/2 flex justify-end ">
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
