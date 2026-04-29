"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../context/languageContext";
import { useTheme } from "../context/themeContext";
import { t } from "../lib/translations";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const { lang, setLang } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const nav = t[lang].ui.nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => setLang(lang === "pt" ? "en" : "pt");

  const navToAbout = (e) => {
    e.preventDefault();
    router.push("/sobre");
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-[#0F172A]/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-[#1A9BDB]/20"
            : "bg-white dark:bg-[#0F172A] shadow-md dark:shadow-[#1A9BDB]/10"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); router.push("/"); }}
            className="text-base font-semibold tracking-tight text-gray-900 dark:text-[#F1F5F9] hover:text-[#1AC1D6] dark:hover:text-[#6EE2D6] transition-colors"
          >
            Henrique Rocha Bomfim
          </a>

          <nav className="flex items-center gap-1">
            <a
              href="/portfolio"
              onClick={(e) => { e.preventDefault(); router.push("/portfolio"); setMenuOpen(false); }}
              className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-slate-400 rounded-md hover:bg-gray-100 dark:hover:bg-[#162032] hover:text-gray-900 dark:hover:text-[#F1F5F9] transition-all"
            >
              {nav.portfolio}
            </a>

            <a
              href="#about"
              onClick={navToAbout}
              className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-slate-400 rounded-md hover:bg-gray-100 dark:hover:bg-[#162032] hover:text-gray-900 dark:hover:text-[#F1F5F9] transition-all"
            >
              {nav.about}
            </a>

            <button
              onClick={toggleLang}
              className="px-3 py-1.5 text-sm font-semibold rounded-md bg-gray-100 dark:bg-[#162032] text-gray-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-[#1A9BDB]/20 hover:text-blue-700 dark:hover:text-[#6EE2D6] transition-all"
              title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
            >
              {t[lang].ui.languageToggle}
            </button>

            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-[#162032] text-gray-700 dark:text-[#6EE2D6] transition-colors ml-1"
              aria-label={isDark ? "Modo claro" : "Modo escuro"}
              title={isDark ? "Modo claro" : "Modo escuro"}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-[#162032] text-gray-700 dark:text-slate-300 transition-colors ml-1"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 z-50"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 h-full w-72 bg-white dark:bg-[#0F172A] z-50 flex flex-col shadow-2xl dark:shadow-[#1A9BDB]/10"
            >
              <div className="flex items-center justify-between px-5 h-14 border-b border-gray-100 dark:border-[#1A9BDB]/20">
                <span className="text-sm font-semibold text-gray-900 dark:text-[#F1F5F9]">{nav.menu}</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-[#162032] text-gray-600 dark:text-slate-400 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col px-3 py-4 gap-1">
                <a
                  href="/"
                  onClick={() => { router.push("/"); setMenuOpen(false); }}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-[#162032] hover:text-gray-900 dark:hover:text-[#F1F5F9] transition-colors"
                >
                  {nav.home}
                </a>
                <a
                  href="/jogos"
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-[#162032] hover:text-gray-900 dark:hover:text-[#F1F5F9] transition-colors"
                >
                  {nav.games}
                </a>
                <a
                  href="/portfolio"
                  onClick={() => { router.push("/portfolio"); setMenuOpen(false); }}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-[#162032] hover:text-gray-900 dark:hover:text-[#F1F5F9] transition-colors"
                >
                  {nav.portfolio}
                </a>
                <a
                  href="/sobre"
                  onClick={navToAbout}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-[#162032] hover:text-gray-900 dark:hover:text-[#F1F5F9] transition-colors"
                >
                  {nav.about}
                </a>
                <a
                  href="/curriculo.pdf"
                  download
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-[#162032] hover:text-gray-900 dark:hover:text-[#F1F5F9] transition-colors"
                >
                  {nav.resume}
                </a>
              </nav>

              <div className="px-3 border-t border-gray-100 dark:border-[#1A9BDB]/20 mx-3 pt-3 space-y-2">
                <button
                  onClick={toggleLang}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-blue-700 dark:text-[#6EE2D6] bg-blue-50 dark:bg-[#1A9BDB]/10 hover:bg-blue-100 dark:hover:bg-[#1A9BDB]/20 transition-colors"
                >
                  🌐 {lang === "pt" ? "English" : "Português"}
                </button>
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-700 dark:text-[#6EE2D6] bg-gray-100 dark:bg-[#162032] hover:bg-gray-200 dark:hover:bg-[#1A9BDB]/20 transition-colors"
                >
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                  {isDark ? (lang === "pt" ? "Modo Claro" : "Light Mode") : (lang === "pt" ? "Modo Escuro" : "Dark Mode")}
                </button>
              </div>

              <div className="mt-auto px-5 py-6 border-t border-gray-100 dark:border-[#1A9BDB]/20">
                <p className="text-xs text-gray-400 dark:text-slate-600 mb-3 uppercase tracking-wide font-medium">Links</p>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/henriquerochabomfim/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2 rounded-lg text-gray-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-[#1AC1D6] hover:bg-blue-50 dark:hover:bg-[#1A9BDB]/10 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/HenriqueRBomfim"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2 rounded-lg text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-[#F1F5F9] hover:bg-gray-100 dark:hover:bg-[#162032] transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/_riquerocha_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="p-2 rounded-lg text-gray-500 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.startellite.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Startellite"
                    className="p-2 rounded-lg text-gray-500 dark:text-slate-400 hover:text-[#1AC1D6] dark:hover:text-[#6EE2D6] hover:bg-blue-50 dark:hover:bg-[#1A9BDB]/10 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
