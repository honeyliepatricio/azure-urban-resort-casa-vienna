"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#onebedroom", label: "1 Bedroom" },
  { href: "/#twobedroom", label: "2 Bedroom" },
  { href: "/#howtobook", label: "How to Book" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <Link href="/#home" className="brand">
          <span className="brand-name">Casa Vienna</span>
          <span className="brand-sub">AZURE URBAN RESORT</span>
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mainNav"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-nav${open ? " open" : ""}`} id="mainNav">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
