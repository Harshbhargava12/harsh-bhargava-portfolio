import { motion } from 'framer-motion';
import { FiDatabase, FiCpu } from 'react-icons/fi';

const roles = [
  {
    icon: FiDatabase,
    title: 'Report Management Intern',
    org: 'National Fertilizers Limited (NFL), Vijaypur',
    type: 'On-site',
    period: 'June 2025 – July 2025',
    points: [
      'Wrote and optimized SQL queries, stored procedures, and views for efficient data retrieval.',
      'Assisted in database design, data cleaning, and performance tuning for backend operations.'
    ]
  },
  {
    icon: FiCpu,
    title: 'AI Intern',
    org: 'Edunet Foundation (Microsoft & SAP — TechSaksham)',
    type: 'Remote',
    period: 'December 2025 – February 2026',
    points: [
      'Program: “AI: Transformative Learning with TechSaksham”.',
      'Learned ML fundamentals, computer vision, and real-time data processing.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Experience
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Internships & impact
          </h2>
        </motion.div>

        <div className="mx-auto mt-14 max-w-3xl space-y-8">
          {roles.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45 }}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
                    <r.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{r.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{r.org}</p>
                  </div>
                </div>
                <div className="text-right text-sm">
                  <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {r.type}
                  </span>
                  <p className="mt-2 text-slate-500 dark:text-slate-400">{r.period}</p>
                </div>
              </div>
              <ul className="mt-5 list-inside list-disc space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
