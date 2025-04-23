"use client";

import { useState } from "react";
import PixCopyButton from "./pixCopyButton";
import DonationsChart from "./donationsChart";
import CostTable from "./costTable";
import WiseDonationButton from './wiseDonationButton';

export default function ContactForm() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:henriquerochaintercambio@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  const doadores = [
    "Pedro Pereira Cecílio Ventura",
    "Stephany Araujo da Silva Lobato",
    "Nicolas Jesus Silveira",
    "Thiago de Jesus Santana",
    "Drielly Santana Farias",
    "Nereide De Oliveira Costa",
    "Pedro Henrique Stanzani De Freitas",
    "Rodney Matheus Santos Fernandes",
    "Sofia Maria Guimaraes Pavarina",
    "Julia Diniz Do Nascimento Zanini",
    "Maria Isabela Marques Pereira",
    "Giovana Coelho Santana Leite",
    "Florencio Vente Coha",
    "Valentina Nieto Garcia",
    "Leilany De Lima Alencar",
    "Suzette Amoroso Ribeiro",
    "Claudio Alves de Carvalho",
    "Bruno Schmitt Locatelli",
    "Railson da Silva Nunes",
    "Adriana Rodrigues Julio",
    "Flavio Augusto de Maia",
    "Adriana Fonseca de Souza",
    "Gustavo Colombi Ribolla",
    "Mariana Abigair Souza Sabino",
    "Luiz F A Steinberg",
    "Guilherme Katayama Kaidei",
    "Amanda Figueiredo Bittencourt",
    "Henrique Fazzio Badin",
    "Larissa Fernandes De Biagi",
    "Regiane Maria G Rodrigues",
    "Vanessa Rocha Barbosa Bonfim",
    "Lavignia Pietra De Souza Christianini",
    "Eunice Dias Da Fonseca",
    "Orllei Hernani Amaro Rozauro",
    "Ana Breatriz Alcântara de Souza",
    "Adriana Aparecida Ferreira",
    "Samandra Andraade De Melo",
    "Ana Paula Da Silva",
    "Luiza De Jesus Lopes",
    "Luiza A Pollaro",
    "Deborah Andrade De Oliveira",
    "Larissa Santos Bonfim",
    "Miguel Santos Bonfim",
    "Laís Uyeda Aivazoglou",
    "Sandra Bonfim",
    "Luiz Cesar Drnellas Do Nascimento",
    "Antonio Marques Bonfim Rosa",
    "William Chaine Stevenson",
    "Eduardo Felipe Z Santana",
    "Edinei Farias de Melo Soares",
    "Evelyn Da Cruz Farias",
    "Thiago Sato de Castro",
    "Guilherme Rocha Bomfim",
    "Renata Pereira Da Costa",
    "Arthur Pereira Lima Reis",
    "Aline Lilian Dos Santos",
    "Diego Correia Lima Pinheiro",
    "Heloísa Fernandes Dias Da Silva",
    "Gabriel de Castro Ribeiro",
    "Frederico Maradei Ayres",
    "Eliana Aparecida Diniz",
    "Márcio Fernando Stabile Junior",
    "Lucas Henrique Reis Bahia",
    "Vania Beck",
    "Rafael Mafort Coimbra",
    "Matheus Henrique Silva Amorim",
    "Celia Hanako Kano",
    "Roberto Candido De Oliveira Junior",
    "Aparecida Lurdes Vieira",
    "Gabriel Marmentini",
    "Marcelo Amarante S Carvalho",
    "Pedro Kenzo Muramatsu Carmo",
    "Luiz Carlos Siciliano",
  ];

  return (
    <section className="p-6 mt-10 text-center">
      <h1 className="text-2xl font-bold py-2">Ajude no Meu Intercâmbio</h1>

      <h2 className="text-2xl font-bold mb-4 py-6">Entre em contato:</h2>
      <p className="mb-6">
        Quer me mandar uma mensagem, sugerir uma adição ao site, fazer uma parceria, ou promover sua marca? Mande um e-mail abaixo:
      </p>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Assunto do email"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Conteúdo do email"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>

      <div className="p-4" id="donate">
        <h1 className="text-2xl font-bold mb-2">Apoie minha jornada até a Alemanha!</h1>
        <PixCopyButton />
      </div>

      <WiseDonationButton />

      <CostTable />

      <DonationsChart />

      <h2 className="text-2xl font-bold mb-2 text-center py-2">Metas</h2>
      <div className="flex justify-center items-center flex-col">
        <p className="text-sm text-center text-gray-600 mb-2 py-3">
          ✅ Meta até dia 12/04/2025: alcançar pelo menos 10% do valor arrecadado
          <br />
          <span className="text-xs text-gray-500">🏆 Meta alcançada em: 07/04/2025</span>
        </p>
        <p className="text-sm text-center text-gray-600 mb-2 py-3">
          ✅ Meta até dia 17/04/2025: alcançar pelo menos 20% do valor arrecadado
          <br />
          <span className="text-xs text-gray-500">🏆 Meta alcançada em: 09/04/2025</span>
        </p>
        <p className="text-sm text-center text-gray-600 mb-2 py-3">
          ⌛ Meta até dia 24/04/2025: alcançar pelo menos 30% do valor arrecadado
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-6">
        <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">✨ Pessoas que estão tornando esse sonho possível ✨</h3>
        <p className="text-lg text-center text-gray-700 mb-4">Total de doadores: {doadores.length}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto px-2">
          {doadores.map((nome, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl px-4 py-2 text-sm text-gray-700 text-center shadow-sm hover:bg-yellow-100 transition duration-200"
            >
              {nome}
            </div>
          ))}
        </div>
      </div>

      <div align="center" className="mt-8 flex justify-center items-center gap-2 py-8">
        <a href="https://www.instagram.com/_riquerocha_/" target="_blank">
            <img
            src="https://img.shields.io/static/v1?message=Instagram&logo=instagram&label=&color=E4405F&logoColor=white&labelColor=&style=for-the-badge"
            height="35"
            alt="instagram logo"
            />
        </a>
        <a href="https://www.linkedin.com/in/henriquerochabomfim/" target="_blank">
            <img
            src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge"
            height="35"
            alt="linkedin logo"
            />
        </a>
      </div>
    </section>
  );
}
