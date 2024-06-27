import FrameMaps from "../frameMaps/frameMaps";
import InfoContact from "../infoContact/infoContact";
import PubMe from "../pubMe/pubMe";
import SocialNetwork from "../socialNetwork/socialNetwork";

export default function Footer({ onRgpdClick }: { onRgpdClick: () => void }) {
  return (
    <footer
      style={{ background: "var(--blue-color-light)" }}
      className="w-full text-white flex flex-col p-6 md:p-10  md:text-left text-sm space-y-6">
      <InfoContact />

      <FrameMaps />

      <section className="flex flex-row justify-between">
        <p
          className="font-bold hover:underline hover:text-blue-900"
          onClick={onRgpdClick}
          style={{ cursor: "pointer" }}>
          Politiques de confidentialité
        </p>

        <p>© 2024 Adrien Demarle. Tous droits réservés.</p>
        <SocialNetwork />
      </section>

      <section className="flex justify-center items-center flex-col">
        <p>~</p>
        <PubMe />
      </section>
    </footer>
  );
}
