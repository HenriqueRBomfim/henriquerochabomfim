"use client";
import Image from 'next/image';
import StoryBlock from "./components/storyBlock";
import Header from "./components/header";
import HighlightsCarousel from "./components/highlightsCarousel";
import CarrosselGrupos from './components/carrosselGrupos';
import ContactForm from "./components/contactForm";
import { GearDivider, FloatingGears } from "./components/gears";
import { useLanguage } from "./context/languageContext";
import { t } from "./lib/translations";

export default function Home() {
  const { lang } = useLanguage();
  const T = t[lang];

  return (
    <div className="bg-slate-50 text-gray-900 relative">
      <FloatingGears />
      <Header />

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center p-3 mt-5 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{ backgroundImage: "url('/banner1.png')" }}
        />

        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="bg-white bg-opacity-90 rounded-4xl p-3 shadow-lg">
            <Image
              src="/henrique-rocha-bomfim.jpeg"
              width={150}
              height={190}
              className="rounded-full"
              alt="Henrique Rocha Bomfim"
            />
          </div>

          <div className="bg-white bg-opacity-90 rounded-2xl px-6 py-3 shadow-md">
            <h2 className="text-3xl font-semibold text-black">
              {lang === "pt" ? "Oi! Eu sou o Henrique Rocha!" : "Hi! I'm Henrique Rocha!"}
            </h2>
          </div>

          <div className="bg-white bg-opacity-90 rounded-2xl px-6 py-3 shadow-md max-w-md">
            <p className="text-lg text-black text-center">{T.ui.hero.subtitle}</p>
          </div>

          {/* Stats bar */}
          <div className="flex gap-4 flex-wrap justify-center">
            {T.ui.hero.stats.map((stat, i) => (
              <div key={i} className="bg-blue-700 bg-opacity-90 text-white rounded-xl px-4 py-2 shadow-md text-center min-w-[70px]">
                <div className="text-xl font-bold font-mono">{stat.value}</div>
                <div className="text-xs opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="p-6 max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">{T.ui.sections.whereIveBeen}</h2>
      </section>

      <CarrosselGrupos grupos={T.groups} />

      <section id="about" className="p-6 max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">{T.ui.sections.myStory}</h2>
      </section>

      <div className="space-y-0">
        {T.stories.map((item, i) => {
          if (item.isGear) {
            return <GearDivider key={i} chapter={item.chapter} />;
          }
          if (item.isHeading) {
            return (
              <h2 key={i} className="text-2xl font-bold mb-2 text-center pt-10 pb-2">
                {item.text}
              </h2>
            );
          }
          return <StoryBlock key={item.id || i} {...item} />;
        })}
      </div>

      <HighlightsCarousel highlights={T.highlights} title={T.ui.highlights.title} />
      <ContactForm ui={T.ui.contact} />
    </div>
  );
}
