"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../context/languageContext";
import { t } from "../lib/translations";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { lang, setLang } = useLanguage();
  const nav = t[lang].ui.nav;

  const handleClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const toggleLang = () => setLang(lang === "pt" ? "en" : "pt");

  return (
    <>
      <motion.div className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
        <h1 className="text-xl font-bold">Henrique Rocha Bomfim</h1>
        <nav className="flex items-center space-x-2 p-2 relative">
          {[{ label: nav.about, id: "about" }].map(({ label, id }) => (
            <div key={id} className="relative flex flex-col items-center">
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (router.pathname !== "/") {
                    router.push("/");
                    setTimeout(() => handleClick(id), 100);
                  } else {
                    handleClick(id);
                  }
                }}
                className="relative rounded px-4 py-2 transition border-2 border-transparent hover:bg-gray-200"
              >
                {label}
              </a>
            </div>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="px-3 py-1.5 rounded-lg border-2 border-blue-600 text-blue-700 font-mono text-sm font-bold hover:bg-blue-50 transition"
            title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            {t[lang].ui.languageToggle}
          </button>

          {/* Hamburger menu */}
          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 rounded hover:bg-gray-200 text-black"
          >
            <Menu size={28} />
          </button>
        </nav>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6 flex flex-col space-y-6"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">{nav.menu}</h2>
              <button onClick={() => setMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <a
              href="/"
              onClick={() => { router.push("/"); setMenuOpen(false); }}
              className="text-left px-4 py-2 hover:bg-gray-100 rounded"
            >
              {nav.home}
            </a>

            <a
              href="/jogos"
              className="text-left px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => setMenuOpen(false)}
            >
              {nav.games}
            </a>

            <a
              href="/curriculo.pdf"
              download
              className="text-left px-4 py-2 hover:bg-gray-100 rounded block"
            >
              {nav.resume}
            </a>

            <button
              onClick={toggleLang}
              className="text-left px-4 py-2 hover:bg-blue-50 rounded border border-blue-300 text-blue-700 font-mono font-bold"
            >
              {lang === "pt" ? "🌐 English" : "🌐 Português"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
