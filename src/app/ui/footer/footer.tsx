import FrameMaps from "../frameMaps/frameMaps";
import InfoContact from "../infoContact/infoContact";
import PubMe from "../pubMe/pubMe";
import SocialNetwork from "../socialNetwork/socialNetwork";

export default function Footer({ onRgpdClick }: { onRgpdClick: () => void }) {
  return (
    <footer
      style={{ background: "var(--blue-color)" }}
      className="w-full text-white flex flex-col p-6 md:p-10  md:text-left text-sm space-y-6">
      <InfoContact />

      <FrameMaps />

      <section className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <button
          className="font-bold hover:underline"
          onClick={onRgpdClick}
          style={{ cursor: "pointer" }}>
          Politiques de confidentialité
        </button>
        <p>© 2024 Adrien Demarle. Tous droits réservés.</p>
        <SocialNetwork />
      </section>

      <PubMe />
    </footer>
  );
}
