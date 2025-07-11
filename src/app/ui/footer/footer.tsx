import FrameMaps from "../frameMaps/frameMaps";
import InfoContact from "../infoContact/infoContact";
import PubMe from "../pubMe/pubMe";
import SocialNetwork from "../socialNetwork/socialNetwork";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{ background: "var(--blue-color)" }}
      className="w-full text-white flex flex-col p-6 md:p-10  md:text-left text-sm space-y-6">
      <InfoContact />

      <FrameMaps />

      <section className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <a href="/legalNotices" className=" hover:font-bold cursor-pointer">
          Mentions légales
        </a>
        <a href="/privacy" className=" hover:font-bold cursor-pointer">
          Politiques de confitentialité
        </a>
        <p>© {currentYear} Adrien Demarle. Tous droits réservés.</p>
        <SocialNetwork />
      </section>

      <PubMe />
    </footer>
  );
}
