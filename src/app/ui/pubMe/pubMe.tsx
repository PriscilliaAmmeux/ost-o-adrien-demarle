export default function PubMe() {
  return (
    <section className="flex flex-col md:flex-row gap-2 items-center justify-center pb-20 md:pb-0">
      <p className="italic">
        Créé par <span className="font-bold">Priscillia Ammeux</span>
      </p>
      <p className="flex flex-col md:flex-row items-center justify-center">
        Conceptrice et Développeuse d&apos;Applications:
        <a
          href="http://www.priscillia-ammeux-portfolio.fr"
          className="pl-2 hover:underline hover:font-semibold"
          target="_blank"
          rel="noopener noreferrer">
          www.priscillia-ammeux-portfolio.fr
        </a>
      </p>
    </section>
  );
}
