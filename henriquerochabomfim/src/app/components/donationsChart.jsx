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
  const [isMobile, setIsMobile] = useState(false);

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

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    fetchCSVData();
    handleResize();
    window.addEventListener("resize", handleResize);
    const interval = setInterval(fetchCSVData, 30000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderCustomLabel = (props) => {
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      value,
      index,
    } = props;
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const color = COLORS[index % COLORS.length];

    return (
      <text
        x={x}
        y={y}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={12}
      >
        <tspan x={x} dy="-0.4em" fill={color}>
          {`R$ ${value.toLocaleString("pt-BR")}`}
        </tspan>
        <tspan x={x} dy="1.2em" fill={color}>
          {(percent * 100).toFixed(1) + "%"}
        </tspan>
      </text>
    );
  };

  return (
    <div className="w-full mt-10 flex justify-center">
      <div className="w-full sm:w-[90%] lg:w-[700px] flex flex-col items-center justify-center h-[350px] sm:h-[400px]">
        <h2 className="text-xl font-bold text-center mb-2">
          Progresso da Campanha
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              labelLine={false}
              outerRadius={isMobile ? 80 : 100}
              fill="#8884d8"
              dataKey="value"
              label={renderCustomLabel}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => `R$ ${value.toLocaleString("pt-BR")}`}
            />
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                fontSize: "12px",
                lineHeight: "1.2",
              }}
              formatter={(value) => value}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
