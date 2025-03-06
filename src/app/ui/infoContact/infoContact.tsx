import { CiHome } from "react-icons/ci";
import ItemsContact from "../itemsContact/itemsContact";
import { IoIosInformationCircleOutline } from "react-icons/io";

const infoPractice = [
  {
    title: "Adresse",
    text: "47 Rue Marceau, 59560 Comines",
  },
  {
    title: "Horaires d'ouvertures du cabinet",
    text: "du lundi au samedi",
  },
  {
    title: "Proximités villes",
    text: "Deûlémont, Wervicq Sud, Wervicq, Quesnoy-sur-Deule, Warneton, Bousbecque, Linselles, Frelinghien, Comines France, Armentières, Verlinghem",
  },

  {
    title: "Parking public",
    text: "8 Rue du Vieil Dieu, Comines.",
  },
  {
    title: "Informations pratiques",
    text: "Rez-de-chaussée. Rendez-vous en urgence possible.",
  },
];

const infoDetails = [
  {
    title: "Contact",
    text: "06 37 05 96 79",
  },
  {
    title: "Adeli",
    text: "590011581",
  },
  {
    title: "Siret",
    text: "84130121100014",
  },
  {
    title: "Tarif de la consultation",
    text: "60€ (remboursement mutuelle possible. Nos voisins les belges pourront bénéficier d'un remboursement de leur mutuelle, d'ici fin mars 2025)",
  },
  { title: "Moyens de paiement", text: "Chèques, espèces et carte bancaire" },
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
