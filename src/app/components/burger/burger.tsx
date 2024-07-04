"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../../styles/burger.module.css";
import { useState, useEffect } from "react";
import NavLink from "@/app/ui/navLink/navLink";
import Logo from "@/app/ui/logo/logo";
import Appointment from "@/app/ui/appointment/appointment";
import SocialNetwork from "@/app/ui/socialNetwork/socialNetwork";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleCloseMenu);
    } else {
      document.removeEventListener("click", handleCloseMenu);
    }

    return () => {
      document.removeEventListener("click", handleCloseMenu);
    };
  }, [isOpen]);

  return (
    <section
      style={{
        height: isOpen ? "100vh" : "auto",
      }}
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
    >
      <div className="flex justify-between items-center p-4">
        <Logo width={50} />

        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold pl-2">Adrien Demarle</h1>
          <h2 className="text-xl">Ostéophate DO</h2>
        </div>

        <button
          className="lg:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}>
          {isOpen ? <FaTimes className="mr-6" /> : <FaBars className="mr-6" />}
        </button>
      </div>

      {isOpen && (
        <div
          className={`${styles.burgerMenu} ${
            isOpen ? styles.open : ""
          } flex flex-col items-center`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
        >
          <button
            className="w-full flex justify-between items-center p-4"
            onClick={handleCloseMenu}>
            <FaTimes className="cursor-pointer" />
          </button>
          <NavLink
            href="/"
            title="Accueil"
            onClick={handleCloseMenu}
            isActive={true}
            className="text-lg"
          />
          <NavLink
            href="/consultation"
            title="Motifs de consultations"
            onClick={handleCloseMenu}
            isActive={true}
            className="text-lg"
          />
          <NavLink
            href="/price"
            title="Tarifs"
            onClick={handleCloseMenu}
            isActive={true}
            className="text-lg"
          />
          <span className="mt-10">
            <Appointment />
          </span>
        </div>
      )}
    </section>
  );
}
