"use client";

import dataFormations from "../../../../api/formations.json";
import { useState } from "react";

export default function Formations() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex justify-center py-10 w-full p-5">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-5 w-full cursor-pointer">
        <button
          onClick={toggleDropdown}
          className="flex justify-between items-center w-full text-left px-4 py-2 rounded-lg mb-3 hover:font-bold">
          <span style={{ color: "var(--blue-color)" }}>Mes formations</span>
          <svg
            style={{ color: "var(--blue-color)" }}
            className={`ml-2 w-4 h-4 transition-transform transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        {isOpen && dataFormations && (
          <ul className=" mt-4 p-4">
            {dataFormations.map((formation: { id: number; name: string }) => (
              <li
                key={formation.id}
                className="px-4 py-2 list-disc hover:bg-gray-200 rounded-lg">
                {formation.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
