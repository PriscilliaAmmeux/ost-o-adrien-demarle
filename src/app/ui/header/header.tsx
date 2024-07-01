import Button from "../button/button";
import styles from "../../styles/header.module.css";
import Appointment from "../appointment/appointment";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const images = {
    src: "/cabinet.jpg",
    alt: "image du cabinet d'ostéopathie d'Adrien Demarle",
  };

  return (
    <header
      className={`${styles.headerBackground} bg-transparent w-full flex flex-col md:flex-row justify-around items-center p-4 relative ${className}`}
      style={{
        width: "100%",
        height: "600px",
        backgroundImage: `url(${images.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="flex justify-between items-center w-full h-full">
        <section className="flex flex-col justify-center w-1/2 h-full pl-10">
          <h1 className="text-4xl font-bold text-white pb-5">
            Adrien Demarle - Ostéopathe
          </h1>
          <div className="flex gap-10">
            <Appointment />
          </div>
        </section>

        <section className="flex flex-col justify-center w-1/2 text-xl font-bold text-white pb-5">
          <p>Adresse: 47 Rue Marceau, 59560 Comines</p>
          <p>Contact: +336 37 05 96 79 </p>
        </section>
      </div>
    </header>
  );
}
