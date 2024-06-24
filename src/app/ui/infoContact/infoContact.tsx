const contactDetails = {
  contactNumber: "06 37 05 96 79 (mon numéro direct)",
  email: "demarle.adrien.osteopathe@gmail.com",
  openingHours: "du lundi au dimanche de 8h à 21h.",
  nearbyCities:
    "Deûlémont, Wervicq Sud, Wervicq, Quesnoy-sur-Deule, Warneton, Bousbecque",
  transport: [
    "Bus - Place De Gaulle (lignes L90 et 82).",
    "Bus - Vieil Dieu (lignes L90 et 84)",
    "Bus - 3 Ballots (lignes 82, 84 et 86)",
  ],
  publicParking: "8 Rue du Vieil Dieu, Comines.",
  practicalInfo: "Rez-de-chaussée.",
};

export default function InfoContact() {
  return (
    <div
      style={{ color: "var(--black-color)", width: "600", height: "350" }}
      className="p-4 md:p-8 bg-white shadow rounded-lg">
      <div className="mb-6">
        <p className="mb-2">
          <strong>Contact:</strong> {contactDetails.contactNumber}
        </p>
        <p className="mb-2">
          <strong>Email:</strong> {contactDetails.email}
        </p>
        <p className="mb-2">
          <strong>Horaires d&apos;ouverture du cabinet :</strong>{" "}
          {contactDetails.openingHours}
        </p>
        <p>
          <strong>Proximités villes :</strong> {contactDetails.nearbyCities}
        </p>
      </div>
      <div>
        <p className="mb-2">
          <strong>Moyens de transport :</strong>
        </p>
        <ul className="list-disc pl-5 mb-2">
          {contactDetails.transport.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
        <p className="mb-2">
          <strong>Parking public :</strong> {contactDetails.publicParking}
        </p>
        <p>
          <strong>Informations pratiques :</strong>{" "}
          {contactDetails.practicalInfo}
        </p>
      </div>
    </div>
  );
}
