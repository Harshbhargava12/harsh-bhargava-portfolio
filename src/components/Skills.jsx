import { motion } from 'framer-motion';
import { FiRefreshCw, FiCode } from 'react-icons/fi';
import { DiJava, DiHtml5, DiCss3 } from 'react-icons/di';
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiMysql,
  SiPython,
  SiGit,
  SiGithub,
  SiTensorflow,
  SiOpencv,
  SiCplusplus
} from 'react-icons/si';

const iconSkills = [
  { name: 'Core Java', icon: DiJava, color: 'text-orange-600' },
  { name: 'C++', icon: SiCplusplus, color: 'text-blue-600' },
  { name: 'Python', icon: SiPython, color: 'text-blue-500' },
  { name: 'HTML', icon: DiHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: DiCss3, color: 'text-blue-500' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
  { name: 'React.js', icon: SiReact, color: 'text-cyan-500' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-700' },
  { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500' },
  { name: 'OpenCV', icon: SiOpencv, color: 'text-emerald-600' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600' },
  { name: 'GitHub Actions', icon: SiGithubactions, color: 'text-slate-700 dark:text-slate-200' },
  { name: 'CI/CD', icon: FiRefreshCw, color: 'text-violet-500' },
  { name: 'Git & GitHub', icon: SiGithub, color: 'text-slate-800 dark:text-white' },
  { name: 'VS Code', icon: FiCode, color: 'text-sky-600' },
  { name: 'Git', icon: SiGit, color: 'text-orange-600' }
];

const concepts = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'RDBMS',
  'Operating Systems',
  'Computer Networks',
  'Keras',
  'NumPy'
];

const grid = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.03 } }
};

const card = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.32 } }
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Skills
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Tools & foundations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Aligned with my resume: languages, web, databases, DevOps tooling, and ML stack.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {concepts.map((c) => (
            <span
              key={c}
              className="rounded-full border border-slate-200/80 bg-white/60 px-4 py-2 text-xs font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-200"
            >
              {c}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {iconSkills.map((s) => (
            <motion.div
              key={s.name}
              variants={card}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              className="glass group flex flex-col items-center gap-2 rounded-2xl p-5 text-center"
            >
              <s.icon className={`text-2xl transition group-hover:scale-110 sm:text-3xl ${s.color}`} />
              <span className="text-xs font-semibold leading-tight text-slate-800 dark:text-slate-100 sm:text-sm">
                {s.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
