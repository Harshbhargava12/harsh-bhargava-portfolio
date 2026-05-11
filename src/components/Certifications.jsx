import { motion } from 'framer-motion';
import { FiAward, FiLayers } from 'react-icons/fi';
import { SiUdemy } from 'react-icons/si';

const certs = [
  {
    title: 'Blockchain for Enterprises',
    subtitle: 'Infosys',
    icon: FiLayers,
    accent: 'from-sky-500 to-blue-700'
  },
  {
    title: 'Web Development',
    subtitle: 'Infosys',
    icon: FiAward,
    accent: 'from-violet-500 to-indigo-600'
  },
  {
    title: 'AI Agents for AI',
    subtitle: 'Udemy',
    icon: SiUdemy,
    accent: 'from-purple-500 to-fuchsia-600'
  }
];

export default function Certifications() {
  return (
    <section id="certs" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Certifications
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Credentials
          </h2>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
              className="glass relative overflow-hidden rounded-2xl p-6"
            >
              <div
                className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br opacity-30 ${c.accent}`}
              />
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg ${c.accent}`}
              >
                <c.icon size={22} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">{c.title}</h3>
              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">{c.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
