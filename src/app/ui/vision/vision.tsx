import BulletList from "@/app/components/bulletList/bulletList";
import SectionHomePage from "../sectionHomePage/sectionHomePage";
import Image from "next/image";

export default function Vision() {
  return (
    <section className="max-w-7xl mx-auto pl-5 pr-5 flex flex-col md:flex-row items-center font-sans text-gray-800">
      <div className="md:w-1/2 flex justify-center md:hidden block">
        <Image
          src={"/baby.webp"}
          alt="photo de consultation avec un bébé"
          className="rounded-xl flex-shrink-0 shadow-lg"
          security="restricted"
          width={300}
          height={300}
        />
      </div>
      <div className="md:w-1/2">
        <SectionHomePage subtitle="Quelle est ma vision de l'ostéopathie et avec quelles techniques pourrais-je vous aider?">
          <p>
            J&apos;aime aller de l&apos;ostéopathie traditionnelle à celle plus
            moderne, du côté mécanique/rebouteux au côté plus intuitif/dans le
            ressenti. J&apos;utilise ainsi :
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
      <div className="md:w-1/2 flex justify-center hidden md:flex">
        <Image
          src={"/baby.webp"}
          alt="photo de consultation avec un bébé"
          className="rounded-xl flex-shrink-0 shadow-lg"
          security="restricted"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}
