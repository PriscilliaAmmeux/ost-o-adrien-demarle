import NavLink from "@/app/ui/navLink/navLink";
import SocialNetwork from "../socialNetwork/socialNetwork";

export default function navBar() {
  return (
    <section className="flex justify-between items-center p-4 w-full">
      <nav className="flex space-x-4">
        <NavLink href="/" title="Accueil" />
        <NavLink href="/consultation" title="Motifs de consultations" />
        <NavLink href="/price" title="Tarifs" />
        <NavLink href="/contact" title="Contact" />
      </nav>
      <SocialNetwork />
    </section>
  );
}
