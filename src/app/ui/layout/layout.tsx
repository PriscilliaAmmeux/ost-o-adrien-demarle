"use client";

import React, { useState } from "react";
import Footer from "../footer/footer";
import Navigation from "../navigation/navigation";
import RgpdModal from "../rgpd/rgpdModal";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isRgpdModalOpen, setRgpdModalOpen] = useState(false);

  const handleRgpdClick = () => {
    setRgpdModalOpen(true);
  };

  const closeRgpdModal = () => {
    setRgpdModalOpen(false);
  };
  return (
    <section>
      <Navigation />
      {children}
      <Footer onRgpdClick={handleRgpdClick} />
      {isRgpdModalOpen && <RgpdModal onClose={closeRgpdModal} />}
    </section>
  );
}
