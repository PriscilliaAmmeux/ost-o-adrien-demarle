import BulletList from "@/app/components/bulletList/bulletList";
import SectionHomePage from "../sectionHomePage/sectionHomePage";
import Image from "next/image";

export default function Vision() {
  return (
    <section className="max-w-7xl mx-auto pl-5 pr-5 flex flex-col md:flex-row items-center font-sans text-gray-800 ">
      <div className="md:w-1/2 ">
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
        <SectionHomePage subtitle="Qu'est-ce que l'ostéopathie ?">
          <BulletList
            items={[
              {
                id: 1,
                name: "L'ostéopathie est une méthode de soin manuelle et naturelle par laquelle l'ostéopathe va rechercher les différentes restrictions de mobilités au sein du corps.",
              },
              {
                id: 2,
                name: "Une perte de mobilité engendre un déséquilibre dans la santé du patient.",
              },
              {
                id: 3,
                name: "L'ostéopathie s'appuie sur le principe que l'être humain est une unité fonctionnelle qui possède des mécanismes d'autorégulation et que la structure et la fonction sont en lien.",
              },
              {
                id: 4,
                name: "Il est à noter que l'ostéopathie est une thérapie de première intention, c'est-à-dire sans nécessité de passer par un médecin au préalable.",
              },
            ]}
          />
        </SectionHomePage>
        <SectionHomePage subtitle="À quel âge consulter ?">
          <p className="text-justify">
            À tout âge : bébé, enfant, adulte, sénior, enceinte, post-partum...
          </p>
        </SectionHomePage>
        <SectionHomePage subtitle="Quelle est ma vision de l'ostéopathie et avec quelles techniques pourrais-je vous aider?">
          <p className="text-justify">
            J'aime aller de l'ostéopathie traditionnelle à celle plus moderne,
            du côté mécanique/rebouteux au côté plus intuitif/dans le ressenti.
            J'utilise ainsi :
          </p>
          <BulletList
            items={[
              { id: 1, name: "Des techniques articulaires" },
              { id: 2, name: "Des techniques viscérales" },
              { id: 3, name: "Des techniques crâniennes" },
              { id: 4, name: "Des techniques à relâchement myofasciales" },
            ]}
          />
        </SectionHomePage>
      </div>
    </section>
  );
}
