"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavLinkProps {
  href: string;
  title: string;
  isActive: boolean;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({ href, title, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(pathname === href);
  }, [pathname, href]);

  return (
    <Link href={href} target="_self" rel="noopener noreferrer">
      <h2
        className="hover:cursor-pointer hover:font-bold hover:text-blue-900 px-2 py-1"
        onClick={onClick}
        style={{
          color: isActive ? "var(--blue-color)" : "var(--black-color)",
          fontWeight: isActive ? "bold" : "normal",
        }}>
        {title}
      </h2>
    </Link>
  );
}
