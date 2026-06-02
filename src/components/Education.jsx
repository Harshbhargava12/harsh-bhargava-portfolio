import { motion } from 'framer-motion';
import { FiBook, FiAward } from 'react-icons/fi';

const education = [
  {
    title: 'B.Tech — Computer Science & Engineering',
    org: 'Jaypee University of Engineering and Technology, Guna (JUET)',
    period: 'Expected 2027',
    detail: 'CGPA 5.90 (up to 6th semester)',
    icon: FiBook
  },
  {
    title: 'Class XII (CBSE)',
    org: 'Vandana Convent School, Guna, Madhya Pradesh',
    period: '2023',
    detail: '70.30%',
    icon: FiAward
  },
  {
    title: 'Class X (CBSE)',
    org: 'Vandana Convent School, Guna, Madhya Pradesh',
    period: '2021',
    detail: '75.00%',
    icon: FiAward
  }
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Education
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Academic foundation
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {education.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-600 dark:text-brand-400">
                <e.icon size={20} />
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {e.period}
              </p>
              <h3 className="mt-1 font-display text-lg font-bold text-slate-900 dark:text-white">{e.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{e.org}</p>
              <p className="mt-3 text-sm font-medium text-brand-700 dark:text-brand-300">{e.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
