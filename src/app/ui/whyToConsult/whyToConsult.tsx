import SectionHomePage from "../sectionHomePage/sectionHomePage";
import Image from "next/image";

export default function WhyToConsult() {
  return (
    <section className="max-w-7xl mx-auto pl-5 pr-5 flex flex-col md:flex-row items-center font-sans text-gray-800 md:mt-10 md:mb-10 ">
      <div className="md:w-1/2 flex justify-center ">
        <Image
          src={"/manipulation.webp"}
          alt="photo de manipulation ostéopathique"
          className="rounded-xl flex-shrink-0 shadow-lg"
          security="restricted"
          width={300}
          height={300}
        />
      </div>
      <div className="md:w-1/2 ">
        <SectionHomePage subtitle="Il est temps que votre situation s'améliore !">
          <p className="text-justify">
            En réduisant les tensions musculaires et les blocages articulaires,
            vous retrouverez de la mobilité réduisant ainsi vos douleurs. Que
            vous soyez sportif, femme enceinte ou simplement en recherchant un
            meilleur bien-être, l&apos;ostéopathie est adaptée à tous.
          </p>
        </SectionHomePage>
      </div>
    </section>
  );
}
