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
      className="relative rounded-lg overflow-hidden shadow-lg flex flex-col h-full"
      style={{ backgroundColor: "var(--blue-color-light)" }}>
      <div className="p-4">
        <h1 className="font-bold text-lg mb-2 ">{title}</h1>
        <span className="flex justify-end mb-4 mt-2">
          {!isModalOpen ? (
            <Button
              type="button"
              text="En savoir plus"
              onClick={() => setIsModalOpen(true)}
              ariaLabel="Cliquez sur le bouton pour lire en entier l'article"
              buttonStyle="base"
            />
          ) : null}
        </span>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="flex flex-col gap-4">
            <ul className="list-disc pl-5">
              {list.map((item, index) => (
                <li className="text-base mt-2" key={index}>
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
