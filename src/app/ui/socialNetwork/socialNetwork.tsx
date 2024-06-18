import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function SocialNetwork() {
  return (
    <section className="flex items-center gap-2">
      <a
        href="https://www.linkedin.com/in/adrien-demarle-616996212/ "
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to LinkedIn profile"
        className="cursor-pointer hover:text-pink-300">
        <FaLinkedin size={24} className="text-current" />
      </a>
    </section>
  );
}
