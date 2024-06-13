import Title from "@/app/ui/title/title";
import { MdOutlineWork } from "react-icons/md";
import Image from "next/image";
import ButtonContactMe from "../buttonContactMe/buttonContactMe";

export default function Qvt() {
  return (
    <section className="relative mt-1 mb-10 max-w-6xl mx-auto p-4 sm:p-6 md:p-10 flex flex-col md:flex-row items-center font-sans text-gray-800 bg-pink-100 shadow-lg rounded-lg">
      {/* image visible on desktop */}
      <div className="hidden md:block md:w-1/3">
        <Image
          key={""}
          src={""}
          alt={`arial-label info accessibilité) `}
          className="rounded-lg flex-shrink-0 mb-4 w-full"
          width={400}
          height={400}
        />
      </div>

      {/* Image visible on mobile */}
      <div className="md:hidden w-full mb-4">
        <Image
          src={""}
          alt="arial-label info accessibilité"
          className="rounded-lg flex-shrink-0 w-full"
          width={400}
          height={400}
        />
      </div>

      <div className="md:w-2/3 md:pl-10">
        <div className="flex justify-center md:justify-start mb-4">
          <Title title="CQVT" Icon={MdOutlineWork} />
        </div>
        <p className="text-lg leading-relaxed mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          laudantium, id, eum tempora amet excepturi doloremque sapiente
          repellat nisi repellendus esse exercitationem, minima ratione dolorum
          at nostrum maiores in quod?
        </p>
        <div className="flex justify-center md:justify-start">
          <ButtonContactMe />
        </div>
      </div>
    </section>
  );
}
