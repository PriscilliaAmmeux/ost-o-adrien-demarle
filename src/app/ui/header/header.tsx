import styles from "../../styles/header.module.css";
import Appointment from "../appointment/appointment";

export default function Header() {
  const images = {
    src: "/cabinet.jpg",
    alt: "image du cabinet d'ostéopathie d'Adrien Demarle",
  };

  return (
    <header
      className={`${styles.customHeader} w-full flex flex-col justify-around items-center p-4 relative `}
      style={{
        width: "100vw",
        height: "auto",
        backgroundImage: `url(${images.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="flex flex-col justify-between items-center w-full h-full">
        <section className="flex flex-col justify-center w-full h-full md:pl-10 text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-white pb-5">
            Adrien Demarle Ostéopathe
          </h1>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            <Appointment />
          </div>
        </section>

        <section className="flex flex-col justify-center w-full text-xl font-bold text-white pb-5 text-center md:text-left md:w-1/2">
          <p>Adresse: 47 Rue Marceau, 59560 Comines</p>
          <p>Contact: +336 37 05 96 79 </p>
        </section>
      </div>
    </header>
  );
}
