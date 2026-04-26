import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata = {
  title: "Sobre Henrique Rocha Bomfim | Founder & CEO da Startellite",
  description:
    "Conheca a trajetoria de Henrique Rocha Bomfim: formacao no Insper, experiencia em BTG Pactual e BASF, e lideranca como Founder & CEO da Startellite.",
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
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPersonSchema) }}
      />
      <Header />

      <main className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        <h1 className="text-4xl font-bold tracking-tight">Henrique Rocha Bomfim</h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          Henrique Rocha Bomfim e engenheiro de computacao em formacao no Insper e atua na construcao de
          produtos digitais com foco em impacto e execucao. Hoje, Henrique Rocha Bomfim e Founder & CEO da
          Startellite, plataforma que conecta fundadores de startups a engenheiros de software pre-selecionados.
        </p>

        <section className="mt-10 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Formacao</h2>
          <p className="text-slate-700 leading-relaxed">
            Henrique Rocha Bomfim cursa Engenharia de Computacao no Insper, com enfase em fundamentos tecnicos,
            gestao e aplicacao pratica em projetos de tecnologia e inovacao.
          </p>
        </section>

        <section className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Experiencia</h2>
          <p className="text-slate-700 leading-relaxed">
            A experiencia profissional de Henrique Rocha Bomfim inclui passagem por instituicoes de alta performance,
            como BTG Pactual e BASF, com vivencia em ambientes exigentes e orientados a resultado.
          </p>
        </section>

        <section className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Founder & CEO da Startellite</h2>
          <p className="text-slate-700 leading-relaxed">
            Na Startellite, Henrique Rocha Bomfim lidera estrategia, produto e crescimento. O objetivo e reduzir
            o tempo entre ideia e execucao, aproximando startups de talentos tecnicos com alto potencial.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Conheca a empresa em
            {" "}
            <a
              href="https://www.startellite.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-700 hover:text-blue-800"
            >
              Startellite.com
            </a>
            .
          </p>
        </section>

        <section className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-xl font-semibold text-blue-900">Perfis oficiais</h2>
          <ul className="mt-3 space-y-2 text-blue-900">
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
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Voltar para a home
          </Link>
          <a
            href="https://www.startellite.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Ir para Startellite
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
