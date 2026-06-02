import { motion } from 'framer-motion';
import { FiTarget, FiLayers, FiCpu } from 'react-icons/fi';

const highlights = [
  {
    icon: FiTarget,
    title: 'Career focus',
    text: 'Applying classroom learning to real-world software—reliable systems, clear documentation, and measurable outcomes.'
  },
  {
    icon: FiLayers,
    title: 'Full stack & data',
    text: 'Web fundamentals (HTML, CSS, JavaScript), backend patterns, SQL, and practical reporting workflows.'
  },
  {
    icon: FiCpu,
    title: 'AI / ML',
    text: 'Medical imaging and deep learning projects using Python, TensorFlow, OpenCV, and NumPy.'
  }
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            About
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Motivated. Curious. Engineering-minded.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="glass rounded-3xl p-8 sm:p-10"
          >
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              I am <strong className="text-slate-900 dark:text-white">Harsh Bhargava</strong>, a{' '}
              <strong>B.Tech Computer Science &amp; Engineering</strong> student at{' '}
              <strong>Jaypee University of Engineering and Technology, Guna (JUET)</strong> (expected{' '}
              <strong>2027</strong>), pursuing a career in software engineering with strengths in{' '}
              <strong>full stack development</strong>, <strong>data-backed systems</strong>, and{' '}
              <strong>AI/ML</strong>.
            </p>
            <p className="mt-5 rounded-2xl border border-brand-100/80 bg-brand-50/40 p-5 text-base leading-relaxed text-slate-700 dark:border-brand-500/20 dark:bg-brand-950/30 dark:text-slate-200">
              <strong className="text-slate-900 dark:text-white">Career objective:</strong> Motivated and
              curious Computer Science student eager to apply classroom learning to real-world projects.
              Passionate about exploring innovative solutions, building practical skills, and contributing
              meaningfully to a forward-thinking organization.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-1">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass flex gap-4 rounded-2xl p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-600 dark:text-brand-400">
                  <h.icon size={22} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-slate-900 dark:text-white">{h.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{h.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
