"use client";

import { useEffect, useState } from "react";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRbn8oWqvkge2XSfs6uo2IuI4Nzmjf_lTA5O0JxkaPEZKKnuxWEPGOHJ9SKIAYGiiIWTJCWevdm3Hfd/pub?output=csv";

export default function CostTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchCSVData = async () => {
      try {
        const res = await fetch(CSV_URL);
        const text = await res.text();

        const lines = text
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean);

        const startIdx = lines.findIndex((line) =>
          line.toLowerCase().includes("descrição")
        );
        const endIdx = lines.findIndex((line) =>
          line.toLowerCase().includes("custo total")
        );

        const relevantLines = lines.slice(startIdx + 1, endIdx + 1);

        const parsedRows = relevantLines.map((line) => {
          return line
            .split(",")
            .slice(1)
            .map((cell) => cell.replace(/^"|"$/g, "").trim());
        });

        setRows(parsedRows);
      } catch (err) {
        console.error("Erro ao carregar tabela de custos:", err);
      }
    };

    fetchCSVData();
  }, []);

  return (
    <div className="w-full mt-10">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Tabela de Custos Estimados
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left rounded-xl shadow-md overflow-hidden">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="p-3">Descrição</th>
              <th className="p-3">€ Mínimo</th>
              <th className="p-3">€ Esperado</th>
              <th className="p-3">R$ Mínimo</th>
              <th className="p-3">R$ Esperado</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const isHighlight =
                row[0]?.toLowerCase().includes("total mensal") ||
                row[0]?.toLowerCase().includes("custo total");

              const rowClass =
                (i % 2 === 0 ? "bg-white" : "bg-gray-50") +
                (isHighlight ? " bg-yellow-100 font-semibold" : "");

              return (
                <tr key={i} className={`transition ${rowClass}`}>
                  {row.slice(0, 5).map((cell, j) => (
                    <td key={j} className="p-3 whitespace-nowrap">
                      {cell}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
