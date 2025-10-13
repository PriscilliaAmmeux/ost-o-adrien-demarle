export default function PubMe() {
  return (
    <section className="flex flex-col md:flex-row gap-2 items-center justify-center pb-20 md:pb-0">
      <p className="italic">
        Créé par{" "}
        <a
          href="https://www.pixelia-and-co.fr/"
          className="font-bold hover:underline hover:font-semibold"
          target="_blank"
          rel="noopener noreferrer">
          Pixelia&Co
        </a>
      </p>
    </section>
  );
}
