import Button from "../button/button";
import Title from "../title/title";

interface FooterProps {
  onClose: () => void;
}

export default function RgpdModal({ onClose }: FooterProps) {
  return (
    <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <Title title="Politique de Confidentialité" />
        <p className="mb-4">
          Les données conservées le sont à des fins professionnelles dans le
          cadre de mon activité seulement.
        </p>
        <p className="mb-4">
          Les données ne sont pas utilisées à des fins commerciales, ni
          transmises à des tiers.
        </p>
        <p className="mb-4">
          Vous pouvez à tout moment demander la suppression de vos données en me
          contactant par mail.
        </p>
        <Button
          onClick={onClose}
          type={"button"}
          ariaLabel="Cliquez sur le bouton pour fermer la modal"
          text={"Fermer"}
          buttonStyle="base"
        />
      </div>
    </section>
  );
}
