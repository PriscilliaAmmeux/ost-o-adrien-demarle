"use client";

import Image from "next/image";
import Appointment from "../appointment/appointment";

export default function Header() {
  return (
    <header
      className="w-full flex flex-col justify-around items-center p-4 relative"
      style={{
        width: "100%",
        height: "400px",
      }}>
      <Image
        src={"/cabinet.webp"}
        alt="photo cabinet"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute flex md:flex-row flex-col justify-between items-center w-full h-full">
        <section className="flex flex-col justify-center items-center w-full h-full md:pl-10 text-center md:text-left md:w-1/2">
          <h2 className="text-4xl font-bold text-white pb-5">
            Adrien Demarle Ostéopathe
          </h2>
          <div className="gap-10 justify-center items-center">
            <Appointment />
          </div>
        </section>

        <section className="flex flex-col justify-center w-full text-xl font-bold text-white pb-5 text-center md:text-left md:w-1/2">
          <p>Adresse: 47 Rue Marceau, 59560 Comines</p>
          <p>Contact: 06 37 05 96 79 </p>
        </section>
      </div>
    </header>
  );
}
