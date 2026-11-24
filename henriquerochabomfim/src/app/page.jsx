import HomePageClient from "./homePageClient";

export const metadata = {
  title: "Henrique Rocha Bomfim",
  description:
    "Henrique Rocha Bomfim: engenheiro de computacao no Insper, ex-BTG Pactual e BASF, criador da plataforma Startellite.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomePageClient />;
}
