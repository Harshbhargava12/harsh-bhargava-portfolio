import { motion } from 'framer-motion';

const USER = 'Harshbhargava12';

const statsUrl = `https://github-readme-stats.vercel.app/api?username=${USER}&show_icons=true&hide_border=true&title_color=0ea5e9&icon_color=6366f1&text_color=334155&bg_color=ffffff00`;
const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${USER}&layout=compact&hide_border=true&title_color=0ea5e9&text_color=334155&bg_color=ffffff00`;
const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${USER}&hide_border=true&background=ffffff00&ring=0ea5e9&fire=6366f1&currStreakLabel=334155`;
const graphUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${USER}&bg_color=ffffff00&color=64748b&line=0ea5e9&point=6366f1&hide_border=true`;

export default function GitHubStats() {
  return (
    <section id="github" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Analytics
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            GitHub at a glance
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Live-style stats powered by open-source GitHub readme widgets. Refresh may apply after new
            contributions.
          </p>
        </motion.div>

        <div className="mt-12 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass overflow-hidden rounded-3xl p-4 sm:p-6"
          >
            <img
              src={graphUrl}
              alt={`${USER} contribution graph`}
              className="w-full rounded-2xl"
              loading="lazy"
            />
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass flex items-center justify-center rounded-3xl p-6"
            >
              <img src={statsUrl} alt="GitHub stats" className="max-w-full" loading="lazy" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="glass flex items-center justify-center rounded-3xl p-6"
            >
              <img src={langsUrl} alt="Top languages" className="max-w-full" loading="lazy" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass flex items-center justify-center rounded-3xl p-6"
          >
            <img src={streakUrl} alt="GitHub streak" className="max-w-full" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
