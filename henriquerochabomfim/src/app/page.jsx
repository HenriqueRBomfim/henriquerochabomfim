import HomePageClient from "./homePageClient";

export const metadata = {
  title: "Henrique Rocha Bomfim | Founder & CEO da Startellite",
  description:
    "Henrique Rocha Bomfim: engenheiro de computacao no Insper, ex-BTG Pactual e BASF, Founder & CEO da Startellite.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomePageClient />;
}
