"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <ScrollProgress />

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.25),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(56,189,248,0.25),_transparent_60%)]" />

      <main className="relative mx-auto max-w-7xl pb-24 pt-28 space-y-24">
        {/* HERO */}
        <motion.section
          id="hero"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_80px_rgba(15,23,42,0.9)]"
        >
          <p className="text-base uppercase tracking-[0.3em] text-cyan-300">
            Frontend Lead • Full‑Stack Developer
          </p>
          <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
            Hi, I&apos;m <span className="text-cyan-300">Ankush</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-200 leading-relaxed">
            Building real‑time dashboards, micro‑frontends, and high‑performance web
            apps using React, Next.js, Socket.IO, and modern frontend architecture.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-8 py-3 text-base font-medium text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-8 py-3 text-base font-medium text-slate-100/90 hover:border-cyan-300 hover:text-cyan-200"
            >
              Contact
            </a>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2, once: true }}
        >
          <Experience />
        </motion.section>

        <motion.section
          id="projects"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2, once: true }}
        >
          <Projects />
        </motion.section>

        <motion.section
          id="skills"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2, once: true }}
        >
          <Skills />
        </motion.section>

        <motion.section
          id="timeline"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2, once: true }}
        >
          <Timeline />
        </motion.section>

        <motion.section
          id="contact"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2, once: true }}
        >
          <Contact />
        </motion.section>
      </main>
    </div>
  );
}
