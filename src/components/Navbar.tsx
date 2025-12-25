"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#timeline", label: "Timeline" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-4 z-30"
    >
      <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-6 py-3 backdrop-blur-xl">
        <span className="text-base font-semibold tracking-wide text-cyan-300">
          AN
        </span>
        <ul className="flex gap-6 text-sm md:text-base">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-200/80 transition hover:text-cyan-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
