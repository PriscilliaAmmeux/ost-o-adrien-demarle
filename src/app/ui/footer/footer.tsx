import FrameMaps from "../frameMaps/frameMaps";
import InfoContact from "../infoContact/infoContact";
import PubMe from "../pubMe/pubMe";

export default function Footer() {
  return (
    <footer
      style={{ background: "var(--blue-color)" }}
      className="w-full text-white flex flex-col items-center justify-center p-6 md:p-10 text-center md:text-left text-sm space-y-6">
      <section className="flex flex-row justify-center items-start gap-4">
        <div className="w-1/2">
          <FrameMaps />
        </div>
        <div className="w-1/2">
          <InfoContact />
        </div>
      </section>

      <section className="space-y-2">
        <PubMe />
      </section>
    </footer>
  );
}
