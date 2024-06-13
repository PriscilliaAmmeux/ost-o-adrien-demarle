import Image from "next/image";
import Title from "../title/title";
import { CgProfile } from "react-icons/cg";

export default function Presentation() {
  return (
    <section className="max-w-6xl p-5 flex flex-col md:flex-row items-center font-sans text-gray-800 mt-10 mb-10">
      <Image
        src={""}
        alt="photo profil"
        className="rounded-full flex-shrink-0 mr-10 mb-10 md:mb-0"
        width={200}
        height={200}
      />

      <div>
        <Title title="Présentation" Icon={CgProfile} />
        <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          laudantium, id, eum tempora amet excepturi doloremque sapiente
          repellat nisi repellendus esse exercitationem, minima ratione dolorum
          at nostrum maiores in quod?
        </p>
      </div>
    </section>
  );
}
