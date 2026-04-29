"use client";

import DonationsChart from "./donationsChart";
import { useLanguage } from "../context/languageContext";
import { t } from "../lib/translations";

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
    "Maria Eduarda Rodrigues De Barros",
    "Ana Teresa Alvarez Calderon Velarde",
    "Michelle Araujo Mesquita",
    "Fabio Roberto De Miranda",
    "Carolina Tardin",
    "Felipe Adeildo Da Silva",
    "Gabriela Abib",
    "Elder Leandro Da Silva",
    "Rodolfo Da Silva Avelino",
    "José Israel Masiero Neto",
    "Andressa Jesus Cardoso",
    "Luana Moreira Dias",
    "Victor Alexandre Alves Machado",
    "Monise Christina Santos Souza",
    "Mariana Roth Aparício",
    "Mariana Araujo De Albuquerque",
    "Erik Leonardo Soares De Oliveira",
    "Alessandra K C Barbosa",
    "Fernando Hartmann Barazzetti",
    "Cleiciane Bonfim Aguiar",
    "Vanessa Aparecida Da Silva Sampaio",
    "Matheus Siqueira De Azevedo",
    "Lara Victoria Araújo Lima",
    "Paulina A Achurra Burgos",
    "Luis Antonio Santana Rodrigues",
    "Ricardo Slem Ribeiro",
    "Ricardo Wurzmann",
    "João Pereira Rodrigues Chade",
    "Pedro Carvalho Ribeiro Neto",
    "Tomas Rolim Miele",
    "Yuri Tabacof",
    "Sofia Lara Rodrigues De Avelar",
    "Juliano Silva Nunes",
    "Vivia de Souza",
    "Eduardo Machado De Oliveira",
    "Vinicius Clemente da Silva",
    "Rebeca Pereira Gusmao Borges Alves",
    "Amanda De Souza Missel",
    "Aline Barbosa De Brito",
    "Keiya Nishio",
    "Leandro Dos Santos Da Costa",
    "Marcel Marques Boonen",
    "Luigi Orlandi Quinze",
    "Maria Leda Pereira De Oliveira",
    "Osvaldo Cotinguiba Bonfim",
    "Andrew Toshiaki N Kurauchi",
    "Tio Mia",
    "Tia Cida",
    "Pedro Wagner",
    "Gabriel Hideki Stanzani Onishi",
    "Crisley Da Silva Guenin",
    "João Marco barros",
    "Andreia Ferreira Forte",
    "Marina Hermógenes Siqueira",
    "Lister Ogusuku Ribeiro",
    "Tawany Oliveira Santos",
    "Ivan Diniz Assan",
    "Carlos Henrique Ferreira",
    "Isabela Braga Coelho Faria",
    "Paulo Guimaraes",
    "Marcio Carneiro De Moura",
    "Gabriel Correira da Costa",
    "Lorena Stephanie Silveira Dos Santos",
    "Barbara Pereira Barroso Grecco",
    "Sabrina Da Silva Frazão",
    "Gustavo Kramer",
    "Natalia Siqueira Alves",
    "Lucca Mesquita Perticarrari",
    "Eliana Aparecida Diniz",
    "Marco Antonio Graziano Finoti",
    "Carolina Franch Soares Leite",
    "Lucas Silva Puig",
];

export default function ContactForm() {
  const { lang } = useLanguage();
  const ui = t[lang].ui.contact;

  return (
    <section className="p-6 mt-10 text-center">
      <h1 className="text-2xl font-bold py-2">{ui.campaignTitle}</h1>

      <p className="mb-6 text-gray-700 dark:text-slate-300">{ui.campaignSubtitle}</p>

      <DonationsChart chartLabels={ui.chartLabels} />

      <h2 className="text-2xl font-bold mb-2 text-center py-2">{ui.milestonesTitle}</h2>
      <div className="flex justify-center items-center flex-col">
        {ui.milestones.map((m, i) => (
          <p key={i} className="text-sm text-center text-gray-600 dark:text-slate-400 mb-2 py-3">
            {m.text}
            <br />
            <span className="text-xs text-gray-500">{m.achieved}</span>
          </p>
        ))}
      </div>

      <div className="w-full max-w-4xl mx-auto bg-white dark:bg-[#162032] shadow-lg rounded-2xl p-6 mt-6">
        <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-[#F1F5F9] mb-4">{ui.donorsTitle}</h3>
        <p className="text-lg text-center text-gray-700 dark:text-slate-300 mb-4">{ui.donorsCount}{doadores.length}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto px-2">
          {doadores.map((nome, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-[#0F172A] rounded-xl px-4 py-2 text-sm text-gray-700 dark:text-slate-300 text-center shadow-sm hover:bg-yellow-100 dark:hover:bg-[#1A9BDB]/10 transition duration-200"
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
