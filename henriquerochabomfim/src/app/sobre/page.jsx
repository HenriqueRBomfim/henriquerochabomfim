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
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPersonSchema) }}
      />
      <Header />

      <main className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        <h1 className="text-4xl font-bold tracking-tight">Henrique Rocha Bomfim</h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          Henrique Rocha Bomfim é engenheiro de computação em formação no Insper e atua na construção de
          produtos digitais com foco em impacto e execução. Hoje, Henrique Rocha Bomfim é Founder & CEO da
          Startellite, plataforma que conecta fundadores de startups a engenheiros de software pré-selecionados.
        </p>

        <section className="mt-10 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Formação</h2>
          <p className="text-slate-700 leading-relaxed">
            Henrique Rocha Bomfim cursa Engenharia de Computação no Insper, com ênfase em fundamentos técnicos,
            gestão e aplicação prática em projetos de tecnologia e inovação.
          </p>
        </section>

        <section className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Experiência</h2>
          <p className="text-slate-700 leading-relaxed">
            A experiência profissional de Henrique Rocha Bomfim inclui passagem por instituições de alta performance,
            como BTG Pactual e BASF, com vivência em ambientes exigentes e orientados a resultado.
          </p>
        </section>

        <section className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Founder & CEO da Startellite</h2>
          <p className="text-slate-700 leading-relaxed">
            Na Startellite, Henrique Rocha Bomfim lidera estratégia, produto e crescimento. O objetivo é reduzir
            o tempo entre ideia e execução, aproximando startups de talentos técnicos com alto potencial.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Conheça a empresa em
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
