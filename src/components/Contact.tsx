"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/lib/data";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export function Contact() {
  return (
    <div>
      <h2 className="mb-4 text-3xl font-semibold text-slate-50">Contact</h2>
      <p className="mb-8 text-base text-slate-300 leading-relaxed">
        Open to frontend leadership and full‑stack roles, especially around real‑time
        dashboards, micro‑frontends, and high‑performance web apps.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Email */}
        <motion.a
          href={`mailto:${contactInfo.email}`}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-cyan-300/50"
        >
          <div className="rounded-lg bg-cyan-400/10 p-3">
            <MdEmail className="h-6 w-6 text-cyan-400" />
          </div>
          <div>
            <p className="text-xs text-slate-400">Email</p>
            <p className="text-sm text-slate-200">{contactInfo.email}</p>
          </div>
        </motion.a>

        {/* Phone */}
        <motion.a
          href={`tel:${contactInfo.phone}`}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-cyan-300/50"
        >
          <div className="rounded-lg bg-cyan-400/10 p-3">
            <MdPhone className="h-6 w-6 text-cyan-400" />
          </div>
          <div>
            <p className="text-xs text-slate-400">Phone</p>
            <p className="text-sm text-slate-200">{contactInfo.phone}</p>
          </div>
        </motion.a>

        {/* Location */}
        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
        >
          <div className="rounded-lg bg-cyan-400/10 p-3">
            <MdLocationOn className="h-6 w-6 text-cyan-400" />
          </div>
          <div>
            <p className="text-xs text-slate-400">Location</p>
            <p className="text-sm text-slate-200">{contactInfo.location}</p>
          </div>
        </motion.div>
      </div>

      {/* Social Media */}
      <div className="mt-8">
        <h3 className="mb-4 text-lg font-semibold text-cyan-300">Connect with me</h3>
        <div className="flex gap-4">
          {contactInfo.socials.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl transition hover:border-cyan-300/50"
                title={social.name}
              >
                <Icon className="h-6 w-6 text-slate-300 transition group-hover:text-cyan-300" />
                <span className="text-sm text-slate-200">{social.name}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
