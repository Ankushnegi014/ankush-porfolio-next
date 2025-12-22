"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

export function Timeline() {
  return (
    <div>
      <h2 className="mb-6 text-3xl font-semibold text-slate-50">Journey</h2>
      <div className="relative overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="relative flex min-w-max items-center gap-12">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 right-0 top-1/2 -z-10 h-px origin-left bg-gradient-to-r from-cyan-400 to-sky-500"
          />
          {timeline.map((item) => (
            <div key={item.year} className="flex min-w-[200px] flex-col items-start">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
                <span className="text-sm font-semibold text-cyan-200">
                  {item.year}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-200">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
