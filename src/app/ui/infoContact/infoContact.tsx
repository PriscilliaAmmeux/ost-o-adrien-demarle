const contactDetails = {
  contactNumber: "06 37 05 96 79 (mon numéro direct)",
  openingHours: "du lundi au dimanche de 8h à 21h.",
  nearbyCities:
    "Deûlémont, Wervicq Sud, Wervicq, Quesnoy-sur-Deule, Warneton, Bousbecque, Linselles, Frelinghien, Comines, Armentières, Verlinghem",

  publicParking: "8 Rue du Vieil Dieu, Comines.",
  practicalInfo: "Rez-de-chaussée.",
};

export default function InfoContact() {
  return (
    <section className="flex flex-wrap">
      <section
        className="flex-1 p-4 md:p-8 bg-white shadow rounded-lg mr-4"
        style={{ color: "var(--black-color)", width: "300", height: "350" }}>
        <p className="mb-2">
          <strong>Contact:</strong> {contactDetails.contactNumber}
        </p>
        <p className="mb-2">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:demarle.adrien.osteopathe@gmail.com"
            className="hover:font-bold hover:text-blue-900">
            demarle.adrien.osteopathe@gmail.com
          </a>
        </p>
        <p className="mb-2">
          <strong>Horaires d&apos;ouverture du cabinet :</strong>{" "}
          {contactDetails.openingHours}
        </p>
        <p>
          <strong>Proximités villes :</strong> {contactDetails.nearbyCities}
        </p>
      </section>
      <section
        className="flex-1 p-4 md:p-8 bg-white shadow rounded-lg"
        style={{ color: "var(--black-color)", width: "300", height: "350" }}>
        <p className="mb-2">
          <strong>Parking public :</strong> {contactDetails.publicParking}
        </p>
        <p className="mb-2">
          <strong>Informations pratiques :</strong>{" "}
          {contactDetails.practicalInfo}
        </p>
        <p className="mb-2">
          <strong>Adeli</strong> :590011581
        </p>
        <p className="mb-2">
          <strong>Siret</strong> : 84130121100014{" "}
        </p>
      </section>
    </section>
  );
}
