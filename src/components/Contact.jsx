import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi';

const items = [
  {
    label: 'Email',
    value: 'harshbhargava20@gmail.com',
    href: 'mailto:harshbhargava20@gmail.com',
    icon: FiMail
  },
  {
    label: 'Phone',
    value: '+91 9179288450',
    href: 'tel:+919179288450',
    icon: FiPhone
  },
  {
    label: 'GitHub',
    value: 'github.com/Harshbhargava12',
    href: 'https://github.com/Harshbhargava12',
    icon: FiGithub
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/harsh-bhargava-885a00347',
    href: 'https://www.linkedin.com/in/harsh-bhargava-885a00347',
    icon: FiLinkedin
  }
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Contact
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Let&apos;s connect
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-400">
            Open to internships and full-time roles. Reach out for opportunities or collaboration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2"
        >
          {items.map((it, i) => (
            <motion.a
              key={it.label}
              href={it.href}
              target={it.href.startsWith('http') ? '_blank' : undefined}
              rel={it.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99 }}
              className="glass group flex items-center gap-4 rounded-2xl p-5 transition hover:border-brand-300/60 dark:hover:border-brand-500/30 sm:p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-600 transition group-hover:bg-brand-500/25 dark:text-brand-400">
                <it.icon size={22} />
              </span>
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {it.label}
                </p>
                <p className="font-medium text-slate-900 dark:text-white">{it.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
