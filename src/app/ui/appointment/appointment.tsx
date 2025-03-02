"use client";

import Button from "../button/button";

export default function Appointment() {
  return (
    <Button
      type={"button"}
      text={"Prendre rendez-vous"}
      ariaLabel={"Cliquez sur ce bouton pour planifier un rendez-vous"}
      buttonStyle="base"
      onClick={() =>
        (window.location.href =
          "https://www.doctolib.fr/osteopathe/comines/adrien-demarle")
      }
    />
  );
}
