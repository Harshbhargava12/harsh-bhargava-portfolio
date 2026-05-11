import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 py-10 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <p className="text-center text-sm text-slate-600 dark:text-slate-400 sm:text-left">
          Built with <span className="font-semibold text-brand-600 dark:text-brand-400">React</span> &{' '}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">Tailwind</span>
        </p>
        <div className="flex items-center gap-4">
          <a
            href="tel:+919179288450"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:text-brand-300"
            aria-label="Phone"
          >
            <FiPhone size={18} />
          </a>
          <a
            href="mailto:harshbhargava20@gmail.com"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:text-brand-300"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
          <a
            href="https://github.com/Harshbhargava12"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:text-brand-300"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-bhargava-885a00347"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:text-brand-300"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} Harsh Bhargava. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
