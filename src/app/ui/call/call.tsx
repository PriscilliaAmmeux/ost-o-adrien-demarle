import { FaPhoneFlip } from "react-icons/fa6";

export default function Call() {
  return (
    <a
      href="tel:+33637059679"
      className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg md:hidden"
      style={{ zIndex: 1000 }}>
      {" "}
      <div className="flex flex-row gap-2">
        <FaPhoneFlip size={20} />
        Appeler
      </div>
    </a>
  );
}
