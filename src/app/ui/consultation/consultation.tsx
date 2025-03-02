import BulletList from "@/app/components/bulletList/bulletList";
import SectionHomePage from "../sectionHomePage/sectionHomePage";

export default function Consultation() {
  const items = [
    { id: 1, name: "Difficulté à tourner la tête d'un côté (plagiocéphalie)" },
    { id: 2, name: "Reflux gastro-oesophagien (RGO)" },
    {
      id: 3,
      name: "Accouchement difficile (péridurale, césarienne, forceps, ventouse, cordon)",
    },
    { id: 4, name: "L'ostéopathie pour les femmes enceintes" },
    { id: 5, name: "Prévention, préparation à l'accouchement" },
    { id: 6, name: "Bilan post-partum" },
    { id: 7, name: "Douleurs costales, ligamentaires" },
    { id: 8, name: "Bébé qui ne se retourne pas" },
    { id: 9, name: "L'ostéopathie pour les sportifs" },
    { id: 10, name: "Entorses, tendinites, tendinopathies" },
    { id: 11, name: "Suite à une déchirure musculaire, fracture" },
    { id: 12, name: "Syndrome de l'essuie glace, pubalgie" },
    { id: 13, name: "L'ostéopathie pour les adultes" },
    {
      id: 14,
      name: "Douleurs : lumbago, lombalgies, dorsalgies, cervicalgies",
    },
    {
      id: 15,
      name: "Névralgies : sciatique, cruralgie, névralgie intercostales, névralgie cervico-brachiale",
    },
    { id: 16, name: "Douleurs/manque de mobilité suite à un traumatisme" },
    { id: 17, name: "L'ostéopathie pour les séniors" },
    { id: 18, name: "Suites opératoires (cicatrices, prothèse hanche/genou)" },
    { id: 19, name: "Certaines formes de vertiges et d'acouphènes" },
    { id: 20, name: "Douleurs en lien avec de l'arthrose/chute" },
    { id: 21, name: "QVT (Qualité de Vie au Travail)" },
  ];
  return (
    <SectionHomePage subtitle="Motifs de consultation">
      <BulletList items={items} />
    </SectionHomePage>
  );
}
