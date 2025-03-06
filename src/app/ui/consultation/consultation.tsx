import Title from "../title/title";
import DropdownList from "./../../components/dropdownList/dropdownList";

export default function Consultation() {
  const itemsForInfantsAndChildren = [
    { id: 1, name: "Difficulté à tourner la tête d'un côté (plagiocéphalie)" },
    { id: 2, name: "Reflux gastro-oesophagien (RGO)" },
    {
      id: 3,
      name: "Accouchement difficile (péridurale, césarienne, forceps, ventouse, cordon)",
    },
  ];

  const itemsForPregnantWomen = [
    { id: 4, name: "Prévention, préparation à l'accouchement" },
    { id: 5, name: "Bilan post-partum" },
    { id: 6, name: "Douleurs costales, ligamentaires" },
    { id: 7, name: "Bébé qui ne se retourne pas" },
  ];

  const itemsForAthletes = [
    { id: 8, name: "Entorses, tendinites, tendinopathies" },
    { id: 9, name: "Suite à une déchirure musculaire, fracture" },
    { id: 10, name: "Syndrome de l'essuie glace, pubalgie" },
  ];

  const itemsForAdults = [
    {
      id: 11,
      name: "Douleurs : lumbago, lombalgies, dorsalgies, cervicalgies",
    },
    {
      id: 12,
      name: "Névralgies : sciatique, cruralgie, névralgie intercostales, névralgie cervico-brachiale",
    },
    { id: 13, name: "Douleurs/manque de mobilité suite à un traumatisme" },
  ];

  const itemsForSeniors = [
    { id: 14, name: "Suites opératoires (cicatrices, prothèse hanche/genou)" },
    { id: 15, name: "Certaines formes de vertiges et d'acouphènes" },
    { id: 16, name: "Douleurs en lien avec de l'arthrose/chute" },
  ];

  return (
    <div className="bg-gray-100 p-8 mb-5">
      <Title title="Motif de consultations" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DropdownList
          title="L'ostéopathie pour les nourrissons et les enfants"
          items={itemsForInfantsAndChildren}
        />
        <DropdownList
          title="L'ostéopathie pour les femmes enceintes"
          items={itemsForPregnantWomen}
        />
        <DropdownList
          title="L'ostéopathie pour les sportifs"
          items={itemsForAthletes}
        />
        <DropdownList
          title="L'ostéopathie pour les adultes"
          items={itemsForAdults}
        />
        <DropdownList
          title="L'ostéopathie pour les séniors"
          items={itemsForSeniors}
        />
      </div>
    </div>
  );
}
