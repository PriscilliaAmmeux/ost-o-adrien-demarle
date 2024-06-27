import { CiHome } from "react-icons/ci";
import ItemsContact from "../itemsContact/itemsContact";
import { IoIosInformationCircleOutline } from "react-icons/io";

const infoPractice = [
  {
    title: "Horaires d'ouvertures du cabinet",
    text: "du lundi au samedi de 8h à 21h.",
  },
  {
    title: "Proximités villes",
    text: "Deûlémont, Wervicq Sud, Wervicq, Quesnoy-sur-Deule, Warneton, Bousbecque, Linselles, Frelinghien, Comines, Armentières, Verlinghem",
  },

  {
    title: "Parking public",
    text: "8 Rue du Vieil Dieu, Comines.",
  },
  {
    title: "Informations pratiques",
    text: "Rez-de-chaussée.",
  },
];

const infoDetails = [
  {
    title: "Contact",
    text: "06 37 05 96 79 (mon numéro direct)",
  },
  {
    title: "Adeli",
    text: "590011581",
  },
  {
    title: "Siret",
    text: "84130121100014",
  },
];

export default function InfoContact() {
  return (
    <section className="flex flex-wrap text-white">
      <ItemsContact title="Le cabinet" info={infoPractice} Icon={CiHome} />

      <ItemsContact
        title="Contact & Informations"
        info={infoDetails}
        Icon={IoIosInformationCircleOutline}>
        <p className="mb-2">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:demarle.adrien.osteopathe@gmail.com"
            className="hover:font-bold hover:text-blue-900">
            demarle.adrien.osteopathe@gmail.com
          </a>
        </p>
      </ItemsContact>
    </section>
  );
}
