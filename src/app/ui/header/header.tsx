import Button from "../button/button";
import styles from "../../styles/header.module.css";
import Appointment from "../appointment/appointment";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const images = {
    src: "/cabinet.jpeg",
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
      <div className="absolute flex flex-col justify-center w-full h-full pl-10">
        <h1 className="text-4xl font-bold text-white pb-5">
          Adrien Demarle - Ostéopathe
        </h1>
        <div className="flex gap-10">
          <Appointment />
          <Button
            type={"button"}
            text={"Contacter"}
            aria-label={
              "Cliquez sur ce bouton pour contacter Adrien Demarle, cela vous dirigera vers la page contact"
            }
          />
        </div>
      </div>
    </header>
  );
}
