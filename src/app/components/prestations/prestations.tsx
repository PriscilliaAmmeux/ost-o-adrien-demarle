"use client";

import dataPrestations from "../../../../api/prestations.json";
import { useState } from "react";

export default function Consultations() {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setIsOpen(isOpen === id ? null : id);
  };

  return (
    <div className="py-10 mx-4">
      {dataPrestations.map((consultation) => (
        <div
          key={consultation.id}
          className="bg-white border border-gray-300 rounded-lg shadow-lg p-5 mb-6 w-full cursor-pointer"
          onClick={() => toggleCard(consultation.id)}>
          <div className="flex justify-between items-center">
            <div
              className="font-bold text-lg mb-2"
              style={{ color: "var(--blue-color)" }}>
              {consultation.title}
            </div>
            <svg
              style={{ color: "var(--blue-color)" }}
              className={`ml-2 w-4 h-4 transition-transform transform ${
                isOpen === consultation.id ? "rotate-180" : "rotate-0"
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
          </div>

          {isOpen === consultation.id && (
            <ul className="list-disc ml-6">
              {consultation.list.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-200 rounded-lg">
                  {item.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
