import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata = {
  title: "Sobre Henrique Rocha Bomfim | Founder & CEO da Startellite",
  description:
    "Conheça a trajetória de Henrique Rocha Bomfim: formação no Insper, experiência em BTG Pactual e BASF, e liderança como Founder & CEO da Startellite.",
  alternates: {
    canonical: "/sobre",
  },
};

const aboutPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.henriquerochabomfim.com.br/#henrique-rocha-bomfim",
  name: "Henrique Rocha Bomfim",
  url: "https://www.henriquerochabomfim.com.br/sobre",
  mainEntityOfPage: "https://www.henriquerochabomfim.com.br/sobre",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Insper",
    url: "https://www.insper.edu.br/",
  },
  worksFor: {
    "@type": "Organization",
    name: "Startellite",
    url: "https://www.startellite.com/",
  },
  sameAs: [
    "https://www.linkedin.com/in/henriquerochabomfim/",
    "https://github.com/HenriqueRBomfim",
    "https://www.startellite.com/",
    "https://www.instagram.com/_riquerocha_/",
  ],
};

export default function SobrePage() {
  return (
    <div className="bg-slate-50 dark:bg-[#0F172A] text-slate-900 dark:text-[#F1F5F9] min-h-screen transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPersonSchema) }}
      />
      <Header />

      <main className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        <h1 className="text-4xl font-bold tracking-tight">Henrique Rocha Bomfim</h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          Henrique Rocha Bomfim é engenheiro de computação em formação no Insper e atua na construção de
          produtos digitais com foco em impacto e execução. Hoje, Henrique Rocha Bomfim é Founder & CEO da
          Startellite, plataforma que conecta fundadores de startups a engenheiros de software pré-selecionados.
        </p>

        <section className="mt-10 space-y-4 rounded-2xl border border-slate-200 dark:border-[#1A9BDB]/20 bg-white dark:bg-[#162032] p-6 shadow-sm dark:shadow-[#1A9BDB]/10">
          <h2 className="text-2xl font-semibold">Formação</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Henrique Rocha Bomfim cursa Engenharia de Computação no Insper, com ênfase em fundamentos técnicos,
            gestão e aplicação prática em projetos de tecnologia e inovação.
          </p>
        </section>

        <section className="mt-6 space-y-4 rounded-2xl border border-slate-200 dark:border-[#1A9BDB]/20 bg-white dark:bg-[#162032] p-6 shadow-sm dark:shadow-[#1A9BDB]/10">
          <h2 className="text-2xl font-semibold">Experiência</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            A experiência profissional de Henrique Rocha Bomfim inclui passagem por instituições de alta performance,
            como BTG Pactual e BASF, com vivência em ambientes exigentes e orientados a resultado.
          </p>
        </section>

        <section className="mt-6 space-y-4 rounded-2xl border border-slate-200 dark:border-[#1A9BDB]/20 bg-white dark:bg-[#162032] p-6 shadow-sm dark:shadow-[#1A9BDB]/10">
          <h2 className="text-2xl font-semibold">Founder & CEO da Startellite</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Na Startellite, Henrique Rocha Bomfim lidera estratégia, produto e crescimento. O objetivo é reduzir
            o tempo entre ideia e execução, aproximando startups de talentos técnicos com alto potencial.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Conheça a empresa em
            {" "}
            <a
              href="https://www.startellite.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#1A9BDB] dark:text-[#6EE2D6] hover:text-[#1AC1D6] dark:hover:text-[#6EE2D6]/80"
            >
              Startellite.com
            </a>
            .
          </p>
        </section>

        <section className="mt-6 rounded-2xl border border-[#1A9BDB]/30 dark:border-[#1A9BDB]/40 bg-blue-50 dark:bg-[#1A9BDB]/10 p-6">
          <h2 className="text-xl font-semibold text-blue-900 dark:text-[#6EE2D6]">Perfis oficiais</h2>
          <ul className="mt-3 space-y-2 text-blue-900 dark:text-[#1AC1D6]">
            <li>
              <a className="hover:underline" href="https://www.linkedin.com/in/henriquerochabomfim/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="hover:underline" href="https://github.com/HenriqueRBomfim" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a className="hover:underline" href="https://www.startellite.com/" target="_blank" rel="noopener noreferrer">
                Startellite
              </a>
            </li>
          </ul>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-lg bg-slate-900 dark:bg-[#162032] dark:border dark:border-[#1A9BDB]/30 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 dark:hover:bg-[#1A9BDB]/20 transition-colors"
          >
            Voltar para a home
          </Link>
          <a
            href="https://www.startellite.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#1A9BDB] dark:bg-[#1AC1D6] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1AC1D6] dark:hover:bg-[#6EE2D6] dark:hover:text-[#0F172A] transition-colors"
          >
            Ir para Startellite
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
