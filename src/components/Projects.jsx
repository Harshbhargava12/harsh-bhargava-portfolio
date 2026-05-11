import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'GitOps CI/CD Pipeline',
    description:
      'Enterprise-style DevOps project: automated builds, container images, Kubernetes manifests, GitOps with ArgoCD, and monitoring-ready architecture.',
    image:
      'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=900&q=80&auto=format&fit=crop',
    tags: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Monitoring'],
    github: 'https://github.com/Harshbhargava12/GitOps-CICD-Pipeline-Project',
    live: 'https://github.com/Harshbhargava12/GitOps-CICD-Pipeline-Project'
  },
  {
    title: 'Brain Tumor Detection',
    description:
      'Developed an AI-based system for detecting brain tumors from medical imaging data using machine learning techniques for accurate and early diagnosis.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format&fit=crop',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'NumPy', 'Deep Learning'],
    github: 'https://github.com/Harshbhargava12/Brain-Tumor-Detection-by-using-deep-learning-',
    live: 'https://github.com/Harshbhargava12/Brain-Tumor-Detection-by-using-deep-learning-'
  },
  {
    title: 'Daily Report Management System',
    description:
      'Designed and implemented a system for National Fertilizers Limited (NFL), Vijaypur to streamline data entry, reporting, and real-time monitoring of plant operations.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80&auto=format&fit=crop',
    tags: ['JSP', 'Servlets', 'Apache Tomcat', 'Oracle'],
    github: null,
    live: null,
    badge: 'Internship project'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Projects
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Selected work
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass group flex flex-col overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80" />
                {p.badge && (
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 dark:bg-slate-900/90 dark:text-white">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-800 dark:bg-brand-500/15 dark:text-brand-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.github && (
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-900 sm:flex-none sm:px-5"
                    >
                      <FiGithub size={18} />
                      GitHub
                    </motion.a>
                  )}
                  {p.live && (
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/80 py-3 text-sm font-semibold text-slate-800 dark:border-slate-600 dark:bg-slate-800/60 dark:text-white sm:flex-none sm:px-5"
                    >
                      <FiExternalLink size={18} />
                      Repo / Demo
                    </motion.a>
                  )}
                  {!p.github && !p.live && (
                    <p className="text-sm italic text-slate-500 dark:text-slate-400">
                      Delivered on-site at NFL — codebase under company NDA.
                    </p>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
