import { useState, useEffect, useRef } from "react";

export default function FrameMaps() {
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const loadHandler = () => setIsLoaded(true);
      iframe.addEventListener("load", loadHandler);

      const timeoutId = setTimeout(() => {
        setIsLoaded(true);
      }, 5000);

      return () => {
        iframe.removeEventListener("load", loadHandler);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return (
    <div className="relative w-full h-350">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <p>Chargement de la carte...</p>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.713424027585!2d3.01002857608018!3d50.76234726485839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcd36546a27ce3%3A0x971b658801406311!2sAdrien%20Demarle%20Ost%C3%A9opathe!5e0!3m2!1sfr!2sfr!4v1719259786410!5m2!1sfr!2sfr"
        width="100%"
        height="350"
        title="Localisation d'Adrien Demarle Ostéopathe sur Google Maps"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-md"></iframe>
    </div>
  );
}
