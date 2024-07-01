"use client";

import Button from "@/app/ui/button/button";
import { Modal } from "@/app/ui/modal/modal";
import { useState } from "react";

interface CardProps {
  id: number;
  title: string;
  list: { text: string }[];
}

export default function Card({ id, title, list }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section
      id={`prestation-${id}`}
      className="relative bg-sky-800 rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
      <div className="p-4">
        <h1
          className="font-bold text-white text-lg mb-2"
          style={{ fontFamily: "cursive" }}>
          {title}
        </h1>
        <span className="flex justify-center mb-4 mt-2">
          <Button
            type="button"
            text="Cliquez pour lire en entier"
            onClick={() => {
              setIsModalOpen(true);
            }}
            ariaLabel="Cliquez sur le bouton pour lire en entier l'article"
            buttonStyle="base"
          />
        </span>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="flex flex-col gap-4">
            <ul className="list-disc pl-5">
              {list.map((item, index) => (
                <li className="text-white text-base mt-2" key={index}>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </Modal>
      </div>
    </section>
  );
}
