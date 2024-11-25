import Subtitle from "../subtitle/subtitle";

export default function WhyToConsult() {
  return (
    <section className="max-w-7xl mx-auto p-5 items-center font-sans">
      <section>
        <Subtitle
          subtitle="Vous cherchez une solution pour des douleurs comme un mal de dos,
          sciatique...?"
        />

        <p>
          L'ostéopathie peut apporter un soulagement, aussi bien pour le dos que
          pour le reste du corps! En effet en libérant des tensions et des
          blocages, il est possible d'atténuer des douleurs comme une sciatique,
          mal de dos, cruralgie, tendinite, entorse, névralgie, lumbago etc
        </p>
      </section>
      <section>
        <Subtitle subtitle="Qu'est-ce que l'ostéopathie ?" />
        <ul>
          <li>
            L'ostéopathie est une méthode de soin manuelle et naturelle par
            laquelle l'ostéopathe va rechercher les différentes restrictions de
            mobilités au sein du corps.
          </li>
          <li>
            Une perte de mobilité engendre un déséquilibre dans la santé du
            patient.
          </li>
          <li>
            L'ostéopathie s'appuie sur le principe que l'etre humain est une
            unité fonctionnelle qui possède des mécanismes d'autorégulation et
            que la structure et la fonction sont en lien.
          </li>
          <li>
            Il est à noter que l'ostéopathie est une thérapie de première
            intention, c'est-à-dire sans nécessité de passer par un médecin au
            préalable.
          </li>
        </ul>
      </section>
      <section>
        <Subtitle subtitle="À quel âge consulter ?" />
        <p>
          À tout âge : bébé, enfant, adulte, sénior, enceinte, post-partum...
        </p>
      </section>
    </section>
  );
}
