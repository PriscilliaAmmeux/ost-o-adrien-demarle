"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../../styles/burger.module.css";
import { useState } from "react";
import NavLink from "@/app/ui/navLink/navLink";
import Logo from "@/app/ui/logo/logo";
import Appointment from "@/app/ui/appointment/appointment";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <section style={{ backgroundColor: "var(--blue-color-light)" }}>
      <div className="flex justify-between items-center p-4">
        <Logo width={50} />

        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold pl-2">Adrien Demarle</h1>
          <h2 className="text-xl">Ostéophate DO</h2>
        </div>

        <button
          className="lg:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermé le menu" : "Ouvrir le menu"}>
          {isOpen ? <FaTimes className="mr-6" /> : <FaBars className="mr-6" />}
        </button>
      </div>

      <div className={`${styles.burgerMenu} ${isOpen ? styles.open : ""}`}>
        <NavLink
          href="/"
          title="Accueil"
          onClick={handleCloseMenu}
          isActive={true}
          className="text-lg ml-10"
        />
        <NavLink
          href="/consultation"
          title="Motifs de consultations"
          onClick={handleCloseMenu}
          isActive={true}
          className="text-lg ml-10"
        />
        <NavLink
          href="/price"
          title="Tarifs"
          onClick={handleCloseMenu}
          isActive={true}
          className="text-lg ml-10"
        />
        <NavLink
          href="https://www.doctolib.fr/osteopathe/comines/adrien-demarle"
          title="Prendre rendez-vous par Doctolib"
          onClick={handleCloseMenu}
          isActive={true}
          className="text-lg ml-10"
        />
      </div>
    </section>
  );
}
