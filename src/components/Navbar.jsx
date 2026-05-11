import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const links = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'github', label: 'GitHub' },
  { id: 'certs', label: 'Certs' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          className={`glass flex items-center justify-between gap-4 rounded-2xl px-4 py-3 sm:px-6 ${
            scrolled ? 'shadow-lg' : ''
          }`}
        >
          <button
            type="button"
            onClick={() => scrollTo('hero')}
            className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white"
          >
            HB<span className="text-brand-600">.</span>
          </button>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(l.id)}
                  className="rounded-xl px-2.5 py-2 text-xs font-medium text-slate-600 transition hover:bg-brand-500/10 hover:text-brand-700 xl:px-3 xl:text-sm dark:text-slate-300 dark:hover:bg-brand-500/15 dark:hover:text-brand-300"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/50 text-slate-700 transition hover:bg-white dark:border-slate-700 dark:bg-slate-800/50 dark:text-amber-300 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/50 lg:hidden dark:border-slate-700 dark:bg-slate-800/50"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-2 glass rounded-2xl p-4 lg:hidden"
            >
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.id}>
                    <button
                      type="button"
                      onClick={() => scrollTo(l.id)}
                      className="w-full rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-700 hover:bg-brand-500/10 dark:text-slate-200"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
