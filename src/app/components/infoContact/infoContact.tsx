import Title from "@/app/ui/title/title";
import { RiContactsBook3Line } from "react-icons/ri";
import { FaCity } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import InfoItemContact from "@/app/ui/infoItemContact/infoItemContact";

export default function InfoContact() {
  return (
    <section>
      <Title title="Informations de contact" Icon={RiContactsBook3Line} />
      <InfoItemContact Icon={FaCity}>Ville</InfoItemContact>
      <InfoItemContact Icon={FiPhone}>+ 33 6 12 12 12 12</InfoItemContact>
      <div className="cursor hover:text-pink-700">
        <InfoItemContact Icon={AiOutlineMail}>
          <a href="">mail@example.com</a>
        </InfoItemContact>
      </div>
    </section>
  );
}
