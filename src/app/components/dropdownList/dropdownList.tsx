"use client";

import { useState } from "react";

interface DropdownListProps {
  title: string;
  items: { id: number; name: string }[];
}

export default function DropdownList({ title, items }: DropdownListProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex justify-center w-full pt-2 pb-5 pl-5 pr-5">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-5 w-full cursor-pointer">
        <button
          onClick={toggleDropdown}
          className="flex justify-between items-center w-full text-left px-4 py-2 rounded-lg  hover:font-bold"
          style={{ color: "var(--blue-color)" }}>
          <span>{title}</span>
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <ul className="mt-4 p-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 list-disc hover:bg-gray-200 rounded-lg">
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
