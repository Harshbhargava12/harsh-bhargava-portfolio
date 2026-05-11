import { motion } from 'framer-motion';
import { FiBookOpen, FiCpu, FiGitBranch, FiBriefcase } from 'react-icons/fi';

const steps = [
  {
    icon: FiBookOpen,
    title: 'Learning React & web stack',
    period: 'Foundations',
    text: 'HTML, CSS, JavaScript, and modern UI patterns toward full stack fluency.'
  },
  {
    icon: FiBriefcase,
    title: 'Industry exposure — NFL & Edunet',
    period: 'Internships',
    text: 'SQL-heavy reporting at NFL; AI fundamentals and computer vision via Microsoft & SAP TechSaksham.'
  },
  {
    icon: FiGitBranch,
    title: 'DevOps & GitOps projects',
    period: 'Automation',
    text: 'Docker, Kubernetes, GitHub Actions, and end-to-end CI/CD pipelines.'
  },
  {
    icon: FiCpu,
    title: 'AI / ML projects',
    period: 'Deep learning',
    text: 'Medical imaging workflows with TensorFlow, OpenCV, and NumPy.'
  }
];

export default function Timeline() {
  return (
    <section id="journey" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Journey
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            How I grew as an engineer
          </h2>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-2xl pl-2">
          <div className="absolute bottom-3 left-[19px] top-3 w-0.5 bg-gradient-to-b from-brand-400 via-indigo-400 to-brand-200/30 dark:from-brand-500 dark:via-indigo-500 dark:to-slate-700" />

          <ul className="space-y-10">
            {steps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative flex gap-6"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-brand-500 text-white shadow-lg shadow-brand-500/25 dark:border-slate-950">
                  <s.icon size={16} />
                </div>
                <motion.div whileHover={{ y: -3 }} className="glass flex-1 rounded-2xl p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                    {s.period}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-slate-900 dark:text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.text}</p>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
