import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { useTypingEffect } from '../hooks/useTypingEffect';

const phrases = [
  'Software Engineer',
  'Full Stack Developer',
  'DevOps Enthusiast',
  'AI / ML learner'
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export default function Hero() {
  const typed = useTypingEffect(phrases, 52, 32, 2200);

  return (
    <section id="hero" className="relative flex min-h-screen items-center pb-16 pt-28 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.p
            variants={item}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-brand-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-700 dark:border-brand-500/30 dark:bg-brand-950/40 dark:text-brand-300"
          >
            B.Tech CSE — JIET Guna (expected 2027)
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Harsh Bhargava
          </motion.h1>

          <motion.div variants={item} className="mt-4 min-h-[2.5rem] sm:min-h-[3rem]">
            <p className="font-display text-xl font-semibold text-slate-600 sm:text-2xl dark:text-slate-300">
              <span className="text-gradient">{typed}</span>
              <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-brand-500 align-middle sm:h-7" />
            </p>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400"
          >
            Motivated and curious Computer Science student eager to apply classroom learning to real-world
            projects—building practical skills across full stack development, DevOps, and AI/ML.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/Harshbhargava12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              <FiGithub size={18} />
              View GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.linkedin.com/in/harsh-bhargava-885a00347"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-brand-300 hover:bg-brand-50/50 dark:border-slate-600 dark:bg-slate-800/60 dark:text-white dark:hover:border-brand-500/40"
            >
              <FiLinkedin size={18} />
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="/harshresume.pdf"
              download="Harsh-Bhargava-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:from-brand-500 hover:to-indigo-500"
            >
              <FiDownload size={18} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute right-4 top-1/3 hidden w-[min(42vw,480px)] lg:block"
        >
          <div className="glass relative aspect-square rounded-[2rem] p-1">
            <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-brand-400/30 via-indigo-500/20 to-transparent blur-2xl" />
            <div className="relative flex h-full flex-col justify-between rounded-[1.75rem] border border-white/50 bg-gradient-to-br from-white/90 to-brand-50/40 p-8 dark:border-slate-700/50 dark:from-slate-800/90 dark:to-slate-900/60">
              <div className="font-mono text-xs text-slate-500 dark:text-slate-400">
                <span className="text-emerald-500">●</span> resume.json
              </div>
              <pre className="overflow-hidden text-left text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
                {`{\n  "name": "Harsh Bhargava",\n  "degree": "B.Tech CSE",\n  "institute": "JIET Guna",\n  "expected": 2027,\n  "focus": ["Full Stack", "DevOps", "AI/ML"]\n}`}
              </pre>
              <div className="flex gap-2">
                <span className="h-2 flex-1 rounded-full bg-brand-500/40" />
                <span className="h-2 w-8 rounded-full bg-indigo-500/40" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
