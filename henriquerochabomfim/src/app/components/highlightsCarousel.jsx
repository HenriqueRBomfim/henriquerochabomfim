"use client";

import { useState } from "react";

import { useLanguage } from "../context/languageContext";

const HighlightsCarousel = ({ highlights = [], title = "Destaques" }) => {
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
    <section id="highlights" className="p-12 bg-gray-200 dark:bg-[#162032] mt-20 transition-colors duration-300">
      <div className="mx-auto max-w-6xl mb-6 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-center flex-1">{title}</h2>
        <button
          type="button"
          onClick={() => setIsPaused((current) => !current)}
          className="shrink-0 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-slate-800"
        >
          {buttonLabel}
        </button>
      </div>
      <div className="overflow-hidden w-full relative">
        <div className="flex w-max scroll-animation space-x-6 items-stretch" style={{ animationPlayState: isPaused ? "paused" : "running" }}>
          {[...highlights, ...highlights].map((highlight, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#0F172A] p-4 rounded-lg shadow-md dark:shadow-[#1A9BDB]/10 min-w-[250px] sm:min-w-[300px] min-h-[430px] flex-shrink-0 flex flex-col"
            >
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-full h-[280px] object-contain bg-gray-50 dark:bg-[#162032] rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{highlight.title}</h3>
              <p className="mt-2">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsCarousel;
