"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/header.module.css";
import Appointment from "../appointment/appointment";

export default function Header() {
  const [backgroundImage, setBackgroundImage] = useState(
    "/placeholder-image.webp"
  );

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = "/cabinet.webp";
    imageToLoad.onload = () => setBackgroundImage(imageToLoad.src); // Change to the high-quality image once loaded
  }, []);

  return (
    <header
      className={`${styles.customHeader} w-full flex flex-col justify-around items-center p-4 relative `}
      style={{
        width: "100vw",
        height: "auto",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="flex md:flex-row flex-col justify-between items-center w-full h-full">
        <section className="flex flex-col justify-center items-center w-full h-full md:pl-10 text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-white pb-5">
            Adrien Demarle Ostéopathe
          </h1>
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
