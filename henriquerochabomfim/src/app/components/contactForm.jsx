"use client";

import { useState } from "react";
import PixCopyButton from "./pixCopyButton";
import DonationsChart from "./donationsChart";
import CostTable from "./costTable";

export default function ContactForm() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:henriquerochaintercambio@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="donate" className="p-6 mt-10 text-center">
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

    <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">Apoie minha jornada até a Alemanha!</h1>
            <PixCopyButton />
    </div>

    <CostTable />

    <DonationsChart />

    {/* Metas */}
    <h2 className="text-2xl font-bold mb-2 text-center py-2">Metas</h2>
    <div className="flex justify-center items-center flex-col">
      <p className="text-sm text-center text-gray-600 mb-2 py-3">
        ☑ Meta até dia 15/04/2025: alcançar pelo menos 10% do valor arrecadado
      </p>
      <p className="text-sm text-center text-gray-600 mb-2 py-3">
        ⌛Meta até dia 30/04/2025: alcançar pelo menos 20% do valor arrecadado
      </p>
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
