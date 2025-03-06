"use client";

import Image from "next/image";
import Appointment from "../appointment/appointment";
import Button from "../button/button";

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
      <div className="absolute flex md:flex-row flex-col w-full h-full">
        <section className="flex flex-col justify-center w-full h-full md:pl-10 text-center md:text-left md:w-2/3">
          <h2 className="text-4xl font-bold text-white pb-5">
            Adrien Demarle Ostéopathe à Comines
          </h2>
          <div className="flex flex-col md:flex-row max-w-2xl mx-auto">
            <Appointment />
          </div>
        </section>

        <section className="flex flex-col justify-center w-full text-xl font-bold text-white pb-5 text-center md:text-left md:w-1/3 md:ml-10">
          <p>47 Rue Marceau 59560 Comines</p>
          <p></p>
          <p>06 37 05 96 79</p>
        </section>
      </div>
    </header>
  );
}
