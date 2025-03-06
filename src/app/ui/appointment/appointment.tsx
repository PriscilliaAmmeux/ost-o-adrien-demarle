"use client";

import Button from "../button/button";

export default function Appointment() {
  return (
    <div className="flex justify-center">
      <Button
        type={"button"}
        text={"Prendre rendez-vous"}
        ariaLabel={"Cliquez sur ce bouton pour planifier un rendez-vous"}
        buttonStyle="base"
        className="inline-flex items-center justify-center px-4 py-2"
        onClick={() =>
          (window.location.href =
            "https://www.doctolib.fr/osteopathe/comines/adrien-demarle")
        }
      />
    </div>
  );
}
