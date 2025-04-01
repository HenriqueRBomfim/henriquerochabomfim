"use client";

import { useState } from "react";

export default function PixCopyButton() {
  const pixKey = "henriquerochaintercambio@hotmail.com";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixKey)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Mensagem some após 2s
      })
      .catch(err => console.error("Erro ao copiar:", err));
  };

  return (
    <div>
      <p className="mt-2">Se quiser apoiar minha jornada, qualquer doação será bem-vinda!</p>
      <p className="mt-2">Me ajude a fazer intercâmbio ao transferir para este PIX: {pixKey}</p>
      <button 
        onClick={copyToClipboard} 
        className="mt-4 bg-green-500 text-white px-6 py-2 rounded text-lg cursor-pointer"
      >
        Copie a chave PIX aqui
      </button>
      {copied && <p className="mt-2 text-green-600">Chave copiada!</p>}
    </div>
  );
}
