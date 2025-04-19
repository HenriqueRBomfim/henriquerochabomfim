"use client";
import GameSection from "@/app/components/gameSection";
import Header from "@/app/components/header";

export default function JogosPage() {
  return (
    <div className="bg-gray-100 text-gray-900">
        <Header/>
        <section className="p-6 mt-10 text-center">
            <div className="pt-24 px-4">
                <h1 className="text-3xl font-bold mb-6 py-8">Jogos</h1>
                <GameSection />
            </div>
        </section>
    </div>
  );
}
