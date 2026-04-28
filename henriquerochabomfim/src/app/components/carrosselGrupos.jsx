"use client";

import { useState } from "react";

import { useLanguage } from "../context/languageContext";

export default function CarrosselGrupos({ grupos = [] }) {
  const { lang } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);

  const buttonLabel = isPaused
    ? lang === "pt"
      ? "Continuar"
      : "Resume"
    : lang === "pt"
      ? "Pausar"
      : "Pause";

  return (
    <section className="py-2">
      <div className="max-w-4xl mx-auto overflow-hidden relative">
        <button
          type="button"
          onClick={() => setIsPaused((current) => !current)}
          className="absolute right-3 top-3 z-10 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-900 shadow-md hover:bg-white"
        >
          {buttonLabel}
        </button>
        <div className="flex w-max animate-slide" style={{ animationPlayState: isPaused ? "paused" : "running" }}>
          {[...Array(2)].flatMap((_, repeatIdx) =>
            grupos.map((item, idx) => (
              <a
                key={`${repeatIdx}-${idx}-${item.nome}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[250px] sm:w-[300px] text-center px-4 shrink-0 inline-block"
              >
                <p className="text-sm font-semibold mb-2">{item.nome}</p>
                <div className="bg-white rounded-full w-20 h-20 mx-auto flex items-center justify-center shadow-md overflow-hidden hover:scale-105 transition-transform duration-200">
                  <img
                    src={item.logo}
                    alt={item.nome}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs mt-2 text-gray-600">{item.cargo}</p>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
