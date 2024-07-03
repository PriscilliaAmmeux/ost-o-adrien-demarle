"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../../styles/burger.module.css";
import { useState } from "react";
import NavLink from "@/app/ui/navLink/navLink";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <section>
      <div className="flex justify-between items-center pt-4 pb-4">
        <h1 className="text-2xl font-bold uppercase pl-2">
          Adrien Demarle - Ostéophate DO - Comines
        </h1>
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
          className="text-lg pl-4"
        />
        <NavLink
          href="/price"
          title="Tarifs"
          onClick={handleCloseMenu}
          isActive={true}
          className="text-lg"
        />
      </div>
    </section>
  );
}
