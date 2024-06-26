"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavLinkProps {
  href: string;
  title: string;
  isActive: boolean;
}

export default function NavLink({ href, title }: NavLinkProps) {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(pathname === href);
  }, [pathname, href]);

  return (
    <Link href={href} target="_self" rel="noopener noreferrer">
      <h1
        className="hover:cursor-pointer hover:font-bold hover:text-blue-900"
        style={{
          color: isActive ? "var(--blue-color-light)" : "var(--black-color)",
        }}>
        {title}
      </h1>
    </Link>
  );
}
