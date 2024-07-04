"use client";

import React, { useState, useEffect, useRef } from "react";

interface LogoProps {
  width: number;
}

export default function Logo({ width }: LogoProps = { width: 100 }) {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section>
      <img
        ref={imgRef}
        src={isVisible ? "/logo.webp" : undefined}
        loading="lazy"
        alt="logo d'entreprise (une colonne vertébrale stylisée en forme de S)"
        width={width}
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </section>
  );
}
