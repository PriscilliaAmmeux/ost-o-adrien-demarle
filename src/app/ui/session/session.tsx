import BulletList from "@/app/components/bulletList/bulletList";
import SectionHomePage from "../sectionHomePage/sectionHomePage";

export default function Session() {
  return (
    <div className="ml-5 mr-5">
      {" "}
      <SectionHomePage subtitle="Comment se déroule une séance d'ostéopathie ?">
        <p className="text-justify">
          La consultation d&apos;ostéopathie dure environ 45 minutes et se
          compose de trois grandes parties :
        </p>
        <BulletList
          items={[
            { id: 1, name: "Anamnèse (entretien)" },
            { id: 2, name: "Examen clinique" },
            { id: 3, name: "Traitement ostéopathique" },
          ]}
        />
        <p className="text-align">Pas besoin de se déshabiller.</p>
        <p className="italic pt-5">
          Il est à noter que l&apos;ostéopathie est une thérapie de première
          intention, c&apos;est-à-dire sans nécessité de passer par un médecin
          au préalable.
        </p>
      </SectionHomePage>
    </div>
  );
}
