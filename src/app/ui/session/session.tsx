import BulletList from "@/app/components/bulletList/bulletList";
import SectionHomePage from "../sectionHomePage/sectionHomePage";

export default function Session() {
  return (
    <SectionHomePage subtitle="Comment se déroule une séance d'ostéopathie ?">
      <p className="text-justify">
        Durée de la consultation : 45 minutes qui se décomposent en 3 parties :
      </p>
      <BulletList
        items={[
          { id: 1, name: "Anamnèse (entretien)" },
          { id: 2, name: "Examen clinique" },
          { id: 3, name: "Traitement ostéopathique" },
        ]}
      />
      <p className="text-align">Pas besoin de se déshabiller.</p>
    </SectionHomePage>
  );
}
