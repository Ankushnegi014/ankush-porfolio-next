"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <div>
      <h2 className="mb-6 text-3xl font-semibold text-slate-50">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <motion.a
            key={p.name}
            href={p.link}
            target={p.link === "#" ? "_self" : "_blank"}
            rel="noreferrer"
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <h3 className="text-base font-semibold text-cyan-200">{p.name}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {p.bullets.map((b) => (
                <li key={b}>• {b}</li>  
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-slate-900/60 px-3 py-1 text-xs text-slate-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
