import SectionHomePage from "../sectionHomePage/sectionHomePage";

export default function WhyToConsult() {
  return (
    <section>
      <SectionHomePage subtitle="Vous cherchez une solution pour des douleurs comme un mal de dos, sciatique...?">
        <p className="text-justify">
          L&apos;ostéopathie peut apporter un soulagement, aussi bien pour le
          dos que pour le reste du corps! En effet en libérant des tensions et
          des blocages, il est possible d&apos;atténuer des douleurs comme une
          sciatique, mal de dos, cruralgie, tendinite, entorse, névralgie,
          lumbago etc
        </p>
      </SectionHomePage>
      <SectionHomePage subtitle="Qu'est-ce que l'ostéopathie ?">
        <ul className="text-justify">
          <li>
            L&apos;ostéopathie est une méthode de soin manuelle et naturelle par
            laquelle l&apos;ostéopathe va rechercher les différentes
            restrictions de mobilités au sein du corps.
          </li>
          <li>
            Une perte de mobilité engendre un déséquilibre dans la santé du
            patient.
          </li>
          <li>
            &apos;ostéopathie s&apos;appuie sur le principe que l&apos;etre
            humain est une unité fonctionnelle qui possède des mécanismes
            d&apos;autorégulation et que la structure et la fonction sont en
            lien.
          </li>
          <li>
            Il est à noter que l&apos;ostéopathie est une thérapie de première
            intention, c&apos;est-à-dire sans nécessité de passer par un médecin
            au préalable.
          </li>
        </ul>
      </SectionHomePage>
      <SectionHomePage subtitle="À quel âge consulter ?">
        <p className="text-justify mb-5">
          À tout âge : bébé, enfant, adulte, sénior, enceinte, post-partum...
        </p>
      </SectionHomePage>
    </section>
  );
}
