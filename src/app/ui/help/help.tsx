import Image from "next/image";
import SectionHomePage from "../sectionHomePage/sectionHomePage";
import BulletList from "@/app/components/bulletList/bulletList";

export default function Help() {
  return (
    <section className="max-w-7xl mx-auto pl-5 pr-5 flex flex-col md:flex-row items-center font-sans text-gray-800 md:gap-40">
      <div className="md:w-1/2 ">
        <Image
          src={"/manipulation2.webp"}
          alt="photo de manipulation d'ostéopathie"
          className="rounded-xl flex-shrink-0 shadow-lg"
          security="restricted"
          width={300}
          height={300}
        />
      </div>
      <div className="md:w-1/2 ">
        <SectionHomePage subtitle="L’ostéopathie peut vous aider si :">
          <BulletList
            items={[
              {
                id: 1,
                name: "Vous souffrez de douleurs récurrentes.",
              },
              {
                id: 2,
                name: "Vous ressentez des tensions musculaires persistantes.",
              },
              {
                id: 3,
                name: "Vous éprouvez des difficultés à bouger librement.",
              },
              {
                id: 4,
                name: "Vous souhaitez optimiser votre mobilité et votre bien-être.",
              },
              {
                id: 5,
                name: "Vous cherchez une approche globale pour soulager vos maux.",
              },
            ]}
          />
        </SectionHomePage>
      </div>
    </section>
  );
}
