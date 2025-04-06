"use client";

import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#00C49F", "#FF8042"];
const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRbn8oWqvkge2XSfs6uo2IuI4Nzmjf_lTA5O0JxkaPEZKKnuxWEPGOHJ9SKIAYGiiIWTJCWevdm3Hfd/pub?output=csv";

export default function DonationsChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCSVData = async () => {
      try {
        const res = await fetch(CSV_URL);
        const text = await res.text();
        const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);

        let meta = 0;
        let arrecadado = 0;

        for (const line of lines) {
          const cells = line.split(",").map((cell) =>
            cell
              .normalize("NFD")
              .replace(/\p{Diacritic}/gu, "")
              .toLowerCase()
              .trim()
          );

          cells.forEach((cell, i) => {
            const rawValue = lines.length > i + 1 ? cells[i + 1] : "";

            const cleanValue = rawValue
              ?.replace("r$", "")
              .replace(/\s/g, "")
              .replace(/\./g, "")
              .replace(",", ".");

            const parsed = parseFloat(cleanValue);

            if (cell.includes("meta") && !isNaN(parsed)) {
              meta = parsed;
            }

            if (cell.includes("arrecadado") && !isNaN(parsed)) {
              arrecadado = parsed;
            }
          });
        }

        if (meta > 0 && arrecadado >= 0) {
          setData([
            { name: "Arrecadado", value: arrecadado },
            { name: "Faltando", value: Math.max(0, meta - arrecadado) },
          ]);
        }
      } catch (err) {
        console.error("Erro ao carregar CSV:", err);
      }
    };

    fetchCSVData();
    const interval = setInterval(fetchCSVData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto h-[300px] sm:h-[400px] mt-10">
      <h2 className="text-xl font-bold text-center mb-4">
        Progresso da Campanha
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) =>
              `${name}: R$${value.toLocaleString("pt-BR")}`
            }
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `R$ ${value.toLocaleString("pt-BR")}`} />
          <Legend layout="horizontal" verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
