"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <div>
      <h2 className="mb-6 text-3xl font-semibold text-slate-50">Skills</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div
            key={group}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <h3 className="mb-5 text-base font-semibold capitalize text-cyan-300">
              {group}
            </h3>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:gap-4">
              {items.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="group flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                  >
                    <Icon className="h-10 w-10 text-slate-300 transition group-hover:text-cyan-300" />
                    <span className="text-center text-xs text-slate-400 transition group-hover:text-slate-200">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
