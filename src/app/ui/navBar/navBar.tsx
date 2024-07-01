import NavLink from "@/app/ui/navLink/navLink";
import Appointment from "../appointment/appointment";

export default function navBar() {
  return (
    <section className="flex justify-between items-center p-4 w-full">
      <div className="flex">
        <img
          src="/logo.webp"
          alt="logo du cabinet d'ostéopathie d'Adrien Demarle"
          width={50}
          height={100}
        />{" "}
        <div
          className="flex font-bold flex-col justify-center "
          style={{ color: "var(--blue-color-light)" }}>
          <p>Ostéopathe</p>
          <p>Adrien Demarle</p>
        </div>
      </div>

      <nav className="flex items-center space-x-4">
        <NavLink href="/" title="Accueil" isActive={true} />
        <NavLink
          href="/consultation"
          title="Motifs de consultations"
          isActive={true}
        />
        <NavLink href="/price" title="Tarifs" isActive={true} />
        <Appointment />
      </nav>
    </section>
  );
}
