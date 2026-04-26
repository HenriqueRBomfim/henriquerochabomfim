import Image from 'next/image';
import StoryBlock from "./components/storyBlock";
import Header from "./components/header";
import HighlightsCarousel from "./components/highlightsCarousel";
import CarrosselGrupos from './components/carrosselGrupos';
import ContactForm from "./components/contactForm";
// import { useTranslation } from 'next-i18next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  // const { t } = useTranslation();
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center p-3 mt-5 relative overflow-hidden">
        {/* Imagem de fundo com opacidade */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{ backgroundImage: "url('/banner1.png')" }}
        ></div>

        {/* Conteúdo acima da imagem */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          {/* Imagem com caixinha arredondada */}
          <div className="bg-white bg-opacity-90 rounded-4xl p-3 shadow-lg">
            <Image
              src="/henrique-rocha-bomfim.jpeg"
              width={150}
              height={190}
              className="rounded-full"
              alt="Henrique Rocha Bomfim"
            />
          </div>

          {/* Título com caixinha */}
          <div className="bg-white bg-opacity-90 rounded-2xl px-6 py-3 shadow-md">
            <h2 className="text-3xl font-semibold text-black">Oi! Eu sou o Henrique Rocha!</h2>
          </div>

          {/* Parágrafo com caixinha */}
          <div className="bg-white bg-opacity-90 rounded-2xl px-6 py-3 shadow-md max-w-md">
            <p className="text-lg text-black text-center">
              Estudante de Engenharia da Computação no Insper, fundador da Startellite e ex-estagiário da BASF global. Apaixonado por resolver problemas de altíssima escala.
            </p>
          </div>
        </div>
      </section>

      <section className="p-6 max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Por onde eu já passei</h2>
      </section>

      {/* Carrossel de grupos */}
      <CarrosselGrupos />

      {/* Sobre Mim */}
      <section id="about" className="p-6 max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Minha História</h2>
      </section>

      <div className="space-y-16">
        <StoryBlock
          title="Panorama Geral"
          text="Olá! Meu nome é Henrique Rocha, mas pode me chamar de Rique. Sou bolsista
          integral de engenharia da computação no Insper e sou a primeira pessoa da minha
          árvore genealógica a ingressar em uma universidade. /n
          Já fui estagiário de Engenharia de Software na sede mundial da BASF em Ludwigshafen, Alemanha, onde otimizei em 20x um pipeline global de análise química. Estudei na Technische Hochschule Ingolstadt (THI), percorri diversos países e cidades europeias durante o intercâmbio, incluindo Vaticano e Inglaterra, e voltei ao Brasil para fundar a Startellite — uma plataforma que conecta startups a engenheiros de software de alta qualidade. /n
          Essa página conta toda a minha história, desde o começo."
          image="/henrique-rocha-bomfim.jpeg"
          caption="Eu"
          reverse={false}
        />
        <StoryBlock
          title="Base Familiar"
          text="Antes de contar quem eu me tornei e que caminho estou seguindo, vou contar 
          um pouco sobre a minha origem: Nasci em um lar cristão em que meus pais já serviam 
          a Deus na Congregação Cristã no Brasil (CCB), onde atuo como violinista desde 2018. Meu pai nasceu e foi criado no interior
           da Bahia, tendo estudado apenas até a 5ª série do ensino fundamental e 
           trabalha em um mercado atacadista. Minha mãe sempre foi de São Paulo - SP, e estudou 
           até o nível técnico em enfermagem, sempre se esforçando para trabalhar em hospitais 
           cada vez melhores e fazendo cursos que a desenvolveram na área. Assim que eu passei 
           no Insper, minha mãe se sentiu motivada e começou a cursar faculdade de Enfermagem. 
           Tenho um irmão gêmeo que conseguiu bolsa de estudos pelo ProUni para cursar Arquitetura 
           e Urbanismo na Universidade Presbiteriana Mackenzie e uma irmã mais nova no ensino fundamental."
          image="/familia.jpeg"
          caption="Minha família ❤️"
          reverse={true}
        />
        <StoryBlock
          title="Motivação de estudar e me esforçar"
          text="Meus pais sempre me motivaram a estudar, dizendo que era o melhor caminho para 
          transformar a nossa realidade e alcançar horizontes que eles não alcançaram. Estudei 
          em escola pública até o 9º ano do ensino fundamental mudando de escola em escola toda
          vez que notava que não estava sendo desafiado o suficiente."
          image="/plinio.jpg"
          caption="Eu fazendo um projeto social para crianças no ensino fundamental"
          reverse={false}
        />
        <StoryBlock
          title="Conhecendo e ingressando no ISMART (2018)"
          text="No 9º ano, estudando na EMEF Plínio de Queiroz, escola pública no Parque Boa Esperança, conheci o ISMART (Instituto Social para Motivar Apoiar e Reconhecer Talentos), uma ONG que desde 1999 vem buscando jovens talentos e oferece bolsas de estudo integrais (100%) para o ensino médio em colégios particulares de excelência para quem passar no longo processo seletivo no 7º ou 9º ano do fundamental. /n Após passar por 5 etapas, incluindo provas de português, matemática, lógica, entrevista individual, entrevista com a família e desafio de trabalho em grupo, ao longo de 2018, consegui finalizar o processo seletivo e garantir minha vaga no Colégio Objetivo da Avenida Paulista para cursar o ensino médio."
          image="/ismart.jpg"
          caption="Parceiros do Ismart"
          reverse={true}
        />
        <StoryBlock
          title="Desafios dessa mudança de realidade (2019)"
          text="Eu acordava às 04:00 da manhã e saia às 05:00 todos os dias do ensino médio para chegar a tempo para as aulas às 07:00. Como vim de escola pública, eu não tive uma base de física, química e biologia e acabava indo mal nessas matérias no início do ensino médio, tendo tirado notas baixas que eu nunca tinha tirado antes. Eu ficava triste ao ver que pessoal que sempre estudou em escola particular tratava como se fosse normal saber aqueles conteúdos enquanto eu tinha dificuldade. /n
Porém, não deixei esses pensamentos durarem muito. Comecei a estudar muito mais do que o esperado e entrei em preparatórios para Olimpíadas do Conhecimento, em que eu não sabia que existiam outras além da OBMEP. /n
Sou muito grato pela amizade que fiz com o pessoal do Objetivo. Todos me receberam muito bem e tenho amizade até hoje ❤️. /n
Quando eu menos esperava, comecei a ir cada vez melhor na escola, melhorando muito em todas as matérias e ficando mais próximo das tão sonhadas medalhas.
"
          image="/objetivo.jpg"
          caption="Meus amigos do Colégio Objetivo ❤️"
          reverse={false}
        />
        <StoryBlock
          title="Fase das olimpíadas do conhecimento (2019 – 2021)
/n 1º ano de olimpíadas (2019)
"
          text="Para pôr a prova meus aprendizados e conhecer as opções de olimpíadas, apliquei para a Olimpíada Brasileira de Matemática (OBM) e Canguru de Matemática. A OBM me ensinou que eu tinha muito a aprender ainda, pois foi extremamente desafiadora, enquanto na Canguru eu consegui medalha de menção honrosa. /n
Nesse ano também fiz um curso de introdução à economia na Escola de Economia de São Paulo da FGV (EESP-FGV).
"
          image="/canguru.jpeg"
          caption="Medalha de menção honrosa na Canguru de Matemática"
          reverse={true}
        />
        <StoryBlock
          title="Primeiro contato com robótica e programação (2020)"
          text="Em janeiro do meu segundo ano no ensino médio, em 2020, fui aprovado para uma bolsa de estudos de 100% pelo Ismart para um curso de férias na Mundo Maker, onde tive aulas em conjunto com alunos do MIT e meu primeiro contato com programação em C++/Arduíno, robótica, impressão 3D e corte a laser. Com isso, fiz meu primeiro robô seguidor de linhas com luz infravermelha e comecei a sentir interesse por engenharia da computação."
          image="/mundomaker.jpg"
          caption="Robô seguidor de linha"
          reverse={false}
        />
        <StoryBlock
          title="2º ano de olimpíadas (2020)"
          text="Após o curso de férias na Mundo Maker, passaram-se dois meses e iniciou-se a pandemia do COVID-19, em março de 2020. Comecei a ter aulas remotas e acesso ao conteúdo online do Objetivo. Nesse período do segundo ano, fiz as provas da Olimpíada Brasileira de Biologia (OBB), Olimpíada Nacional de Ciências (ONC), Olimpíada Brasileira de Robótica Teórica (OBR) e Olimpíada Brasileira de Astronomia (OBA) para me incentivar a estudar esses conteúdos com mais intensidade do que o padrão do ensino médio e me preparar melhor para os simulados de vestibulares como FUVEST, INSPER e ENEM. /n
Como resultado, consegui medalha de prata na OBA e bronze na OBR.
"
          image="/obr.jpeg"
          caption="Medalha de bronze na OBR"
          reverse={true}
        />
        <StoryBlock
          title="3º ano de olimpíadas (2021)"
          text="Assim que iniciou 2021, finalizei um curso presencial de 120 horas do pacote office, Photoshop e empreendedorismo empresarial que eu vinha fazendo há anos na Futuro Qualificação Profissional/Estácio, conhecimento que uso até o presente momento. /n
Chegando no meu 3º ano do ensino médio, eu já estava mais preparado para enfrentar os vestibulares e as olimpíadas. Também havia feito testes vocacionais pelo Ismart que apontavam que eu teria interesse em ciências da computação. Fiz alguns cursos de programação em Python pelo Ismart e pelo site da Coursera, me deixando mais preparado para qualquer curso de computação que eu escolhesse. /n
Em relação às olimpíadas nesse momento, fiz a OBA, OBR e ONC, desta vez conquistando medalha de Ouro nas 3! Dos 2.318.452 estudantes inscritos na ONC em 2021, apenas o top 5% dos melhores alunos participantes da 2ª fase receberam medalhas, sendo que os melhores entre eles receberam a de ouro. Com isso, fui premiado presencialmente pelo ministro do MCTI e astronauta brasileiro Marcos Pontes no início de 2022.
"
          image="/marcos.jpg"
          caption="Eu e o astronauta Marcos Pontes"
          reverse={false}
        />
        <StoryBlock
          title="Vestibulares (2021)"
          text="Com esse histórico olímpico, acesso ao material do Objetivo, preparo e intenção de cursar computação na faculdade, apliquei para o Inteli e o Insper. No Inteli, passei para Engenharia de Software na primeira turma dessa faculdade, que fica na Cidade Universitária do Butantã, SP, com bolsa de estudos integral (a mensalidade está em R$7.440,80 no início de 2025). No Insper, que fica na Vila Olímpia, SP, passei para Engenharia da Computação, também com bolsa de estudos integral (desconto de 100% da mensalidade + ajudas de custo mensais) (a mensalidade para esse curso estava em R$ 7.665,00 ao final de 2024)"
          image="/insper.jpg"
          caption="Prédios Cláudio Haddad e Quatá 200 do Insper"
          reverse={true}
        />
        <StoryBlock
          title="Insper (2022 – 2026) /n
Insper, um novo mundo de possibilidades
"
          text="Chegando ao Insper, tive meu segundo choque de realidade: Passei de conviver com pessoas de classe média alta a classe alta para pessoas da elite brasileira. Porém, o choque durou pouco tempo tendo em vista que eu me acostumei com isso durante o ensino médio. /n
O Insper parecia um universo de possibilidades, muito além do que eu jamais sonhei em alcançar. Com uma infraestrutura extraordinária e muitos laboratórios para me preparar na prática como engenheiro de computação. Contando com professores incríveis e pessoas de diversos estados do Brasil, comecei a explorar as oportunidades desde o primeiro semestre. /n
Obs: Leve em consideração que tudo o que eu fiz a partir de agora foi morando na Vila Ré, a cerca de 1h25 do Insper.
"
          image="/insper2.jpg"
          caption="Uma sala harvard do Insper"
          reverse={false}
        />
        <StoryBlock
          title="1º Semestre  (2022.1)"
          text="Eu estava em uma sala com cerca de 50 pessoas que eu não conhecia. Para facilitar a minha integração, me candidatei em dupla para ser líder de sala. Diversas duplas fizeram suas campanhas e discursos. No fim das contas, eu e uma colega fomos os líderes de sala durante o primeiro semestre de 2022 (2022.1). /n
Descobri que existiam cerca de 50 organizações estudantis no Insper, grupos voltados à preparação de seus membros aos mais diversos setores do mercado de trabalho, todos geridos por alunos. Vi que existia uma chamada Insper Coding, que no momento possuía cerca de 11 pessoas e tinha áreas de desenvolvimento de jogos digitais, soluções com visão computacional e IA. /n
Ao longo desse semestre, eu só fui líder de sala mesmo, mas estudei a linguagem de programação Java e o desenvolvimento de modificações (Mods) para o jogo Minecraft, a fim de me preparar para entrar no Insper Coding no 2º semestre de 2022 (2022.2). No fim das contas, consegui fazer um mod que trabalhei meses para deixá-lo bonito e jogável: The Final Recipes - Minecraft Mods - CurseForge
"
          image="/1semestre.jpg"
          caption="Amigos do Insper no 1º semestre ❤️"
          reverse={true}
        />
        <StoryBlock
          title="2º Semestre (2022.2)
"
          text="No segundo semestre, apliquei para o processo seletivo do Insper Coding e fui aprovado como membro de Visão Computacional com IA, momento em que comecei a estudar sobre PyTorch e TensorFlow, e para o time de desenvolvimento de jogos com Unity. Nesse momento, o Insper Coding tinha cerca de 12 membros. Também fui reeleito como líder de sala. /n
Nesse semestre, o Grupo de Ação Social (GAS) do Insper estava iniciando as aulas de programação em Python e desenvolvimento web com HTML e CSS para comunidades carentes economicamente e precisavam de alunos do Insper que pudessem dar essas aulas de forma voluntária. Me candidatei e fui aprovado como professor de Python. Desde esse momento em 2022.2, eu nunca mais parei de ser professor de programação e web dev com eles, sempre atendendo novas turmas em institutos diferentes, atualmente já tendo ajudado a formar cerca de 100 alunos. Essa é uma experiência que reforçou minha satisfação em ver que estou sendo útil para ajudar o próximo e o quanto é possível aprender enquanto ensino.
"
          image={["/coding_2semestre.png", "/gas_1.png"]}
          caption={[
            "Apresentação de jogos do Insper Coding",
            "Aula de Python que fiz pelo GAS em 2022.2",
          ]}
          reverse={false}
        />
        <StoryBlock
          title="3º Semestre (2023.1)"
          text="No terceiro semestre, após o atual presidente e diretor de desenvolvimento de jogos do Insper Coding ter sido aprovado para um intercâmbio, ele abriu a oportunidade dos membros atuais se candidatarem para ocupar o cargo de Diretor de Game Dev. Eu estava iniciando meu terceiro semestre, não tinha tanta experiência ainda com esse assunto, mas tomei a decisão arriscada de me candidatar para gerenciar as equipes, projetos e capacitações desse setor naquela época. Com isso, no fim das contas, me tornei o novo Diretor de Game Dev no Insper Coding em 2023.1. /n

Nesse semestre, eu e meu amigo Humberto criamos a organização estudantil Insper Academy, que na época era voltada à preparação de alunos universitários para competirem nas olimpíadas de matemática de nível superior. Meu amigo ficou como Presidente e eu como Vice-Presidente. Essa organização mudou muito com o tempo, mas o processo de criar uma organização foi bem interessante. /n
Também participei do Desafio do Design (DD), que é o primeiro momento da segunda etapa do vestibular do Insper, onde diversos alunos veteranos fazem atividades para tranquilizar os candidatos antes das etapas avaliativas. /n
Além disso, entrei para o time de Apoio Acadêmico do Comitê de Bolsistas, pois eu gostava de dar aulas sobre os conteúdos que eu ia bem, mas que via alguns colegas com dificuldade em aprender. /n
Fui reeleito como líder de sala e continuei como professor de programação voluntário do GAS. Somando todas as atividades que fiz nesse semestre, consegui 97 horas de atividade extracurricular em 2023.1.
"
          image={["/coding_3.png", "/academy2023.1.png", "/dd2023.1.jpeg"]}
          caption={[
            "Apresentação do Roguelike Dungeons do Insper Coding na Semana Transforme",
            "Anúncio de criação da Insper Academy",
            "Eu com alguns alunos do DD",
          ]}
          reverse={true}
        />
        <StoryBlock
          title="4º Semestre (2023.2)"
          text="Nesse semestre, comecei a ir em conferências de inovação, liderança e tecnologia, além de diversos eventos com o Ismart. /n
Fui à conferência anual do Four Summit, um evento do Instituto Four que dura vários dias e reúne diversos líderes do mercado para discutir sobre inovação, tecnologia, liderança e sustentabilidade.   /n
Também passei 2 dias inteiros na sede da consultora global McKinsey, nas Corporate Towers da Faria Lima, para aprender sobre gestão de processos, design de ambiente de desenvolvimento e a importância de uma boa organização da equipe. /n
Fui a um evento do Ismart na Amazon, ao lado do shopping JK Iguatemi, para conhecer o processo de estágio regular dessa empresa e receber dicas para processos seletivos globais. /n
Nesse período, também conclui minha trilha de liderança internacional da Aspire Leaders Program from Harvard Business School. /n
Continuei como professor do GAS, membro do Apoio Acadêmico do comitê de bolsistas, líder de sala e Diretor de Game Dev no Insper Coding, além de que me tornei Presidente do Insper Academy. Até este momento, eu já tinha 252 horas de atividade complementar e atingi os 200 pontos de engajamento para intercâmbio (200 é o limite do quanto um aluno do Insper pode usar suas horas complementares para aumentar suas chances de conseguir uma vaga de intercâmbio.)
"
          image={["/foursummit1.jpeg", "/mckinsey.jpeg", "/amazon.jpeg", "/aspire_certificado.png"]}
          caption={[
            "Eu com amigos do Insper, Ismart e com o CEO do Instituto Four",
            "Eu e a Dri na sede da McKinsey",
            "Eu na Amazon",
            "Certificado da Aspire Leaders Program",
          ]}
          reverse={false}
        />
        <StoryBlock
          title="5º Semestre (2024.1)"
          text="Já comecei esse semestre apresentando o Insper Coding em inglês para os intercambistas que vieram ao Insper. Cerca de 70 intercambistas vêm estudar no Insper por 6 meses todo semestre. /n
Como projeto da disciplina de Computação Embarcada, eu e meu amigo Raul fizemos um controle Bluetooth para controlar o jogo Palworld sem precisar de cabos. Foi um projeto em que pratiquei bastante sobre design, Raspberry PI Pico e outras tecnologias. /n
Houve também uma competição do Ismart em que universitários receberam o desafio de divulgar o Ismart no máximo possível de escolas de ensino fundamental, a fim de trazer novos talentos para o programa, aumentar as conexões entre os alunos formados e os que estão estudando e fortalecer a comunidade. Eu e minha equipe Ordem do Falcão ficamos em 3º lugar dentre todas as equipes de São Paulo, além de termos sido premiados na Sede do Ifood em Osasco. /n
"
          image={["/intercambistas.jpg", "/palworld.jpeg", "/ismartordem.jpeg"]}
          caption={[
            "Eu apresentando o Insper Coding para os intercambistas",
            "Projeto de controle Bluetooth para o jogo Palworld",
            "Eu e os finalistas na premiação do Ismart",
          ]}
          reverse={true}
        />
        <StoryBlock
          title=""
          text="Nesse momento, eu também estava finalizando meu curso de análise de dados com Python na Bloomberg junto com amigos do Ismart. Como projeto final do curso, eu e alguns amigos fizemos o NutriU, um protótipo de aplicativo de nutrição personalizado e que foi muito aclamado pelo time da Bloomberg. /n
Virei membro da Insper Sec, continuei como professor do GAS, Diretor do Apoio Acadêmico do comitê de bolsistas, líder de sala, virei Vice-Presidente e continuei como Diretor de Game Dev no Insper Coding, Presidente do Insper Academy. Até este momento, eu já tinha 395 horas de atividade complementar e os 200 pontos de engajamento para intercâmbio.
"
          image={["/nutriu.jpeg", "/bloomberg.jpeg", "/gas.jpeg"]}
          caption={[
            "Aplicativo NutriU",
            "Eu e os formados do curso na Bloomberg",
            "Eu com os alunos do GAS",
          ]}
          reverse={true}
        />
        <h2 className="text-2xl font-bold mb-2 text-center">Férias (2024.1 – 2024.2)</h2>
        <StoryBlock
          title="Campus Party (2024.1 – 2024.2)"
          text="Durante as férias entre 2024.1 e 2024.2, trabalhei como voluntário da Life4Sec em dois eventos: Campus Party SP 2024 e HackerSec Conference 2024. /n
Em relação à Campus Party, participei de todos os dias do evento, tendo ajudado na bancada da Life4Sec, atraindo pessoas para conhecerem essa comunidade de Cyber Segurança e ajudando na organização geral do evento. /n
Tive a oportunidade de encontrar pessoas famosas nesse evento, como o Peter Jordan, do canal Ei Nerd, o Gustavo Guanabara, do canal Curso em Vídeo e o Domingos dos Santos, matemático e astrônomo. /n
"
          image={["/cppeter.jpeg", "/cpguanabara.jpeg", "/cpkaua.jpeg"]}
          caption={[
            "Eu com o Peter Jordan",
            "Eu com o Gustavo Guanabara",
            "Eu com o Kauã, da comunidade Life4Sec",
          ]}
          reverse={false}
        />
        <StoryBlock
          title="Conferência Gestão e Inovação (2024.1 – 2024.2)"
          text="Em julho de 2024, participei da Conferência Gestão e Inovação da Fundação Estudar, após ser aprovado no processo seletivo. O evento começou com uma palestra inspiradora de André Barrence, Head do Google for Startups, que compartilhou sua trajetória e valores — destacando frases como “Não busque a perfeição, busque o progresso”. Ao longo do dia, reencontrei amigos do Ismart e conheci pessoas incríveis, como Júlia Cerqueira Santos, Breno Santos e Raissa Paula. /n
Participei de talks sobre sustentabilidade, inovação e colaboração, com representantes de empresas como Itaú, Stone, Danone, Suzano e Lojas Renner. Consegui conexões importantes, como Fabio Guido (Itaú) e Carolina da Costa (Stone), que enriqueceram muito a experiência com suas histórias e conselhos valiosos. Também foi um prazer conhecer líderes como Luiz Fernando Silva Neto e Beatriz Claudino, com trajetórias admiráveis. /n
Durante os intervalos, conversei com representantes de empresas como Ambev, Wiz Co., Inspira e outras, explorando oportunidades futuras e formas de contribuir. O evento foi uma oportunidade única de aprendizado e networking com pessoas brilhantes, e saí inspirado a continuar participando de iniciativas transformadoras.
"
          image={["wcgi.jpeg","/cgi1.jpeg", "/cgi2.jpeg"]}
          caption={[
            "Workshop para a Gestão e Inovação",
            "Eu com o pessoal da Conferência Gestão e Inovação",
            "Eu com mais amigos da Conferência Gestão e Inovação",
          ]}
          reverse={true}
        />
        <StoryBlock
          title="Contando sobre o mundo universitário para os vestibulandos do Ismart (2024.1 – 2024.2)"
          text="Fui a um evento do Ismart no Inteli em que ajudei dezenas de jovens vestibulandos com a escolha de universidade, vestibular, oportunidades de desenvolvimento pessoal e profissional, dicas de como aproveitar a faculdade e muito mais. /n
Foi bem gratificante ver que motivei eles a ser esforçarem e os ajudei a decidir, um dos participantes desse dia até passou no vestibular do Insper e veio me contar sobre isso no encontro de boas-vindas dos bolsistas no Insper.
"
          image={["inteli0.jpeg","/inteli1.jpeg", "/inteli2.jpeg"]}
          caption={[
            "Eu na entrada do Inteli",
            "Eu com vestibulandos do Ismart",
            "Eu com mais vestibulandos do Ismart",
          ]}
          reverse={false}
        />
        <StoryBlock
          title="Evento sobre estágio no Itaú (2024.1 – 2024.2)"
          text="Fui a um evento na sede do banco Itaú. Nesse momento, conheci vários estagiários desse banco, recebi várias dicas de carreira e um panorama geral sobre como ser estagiário deles."
          image={["itau.jpeg","/itau2.jpeg"]}
          caption={[
            "Eu com amigos do Ismart na sede do Itaú",
            "Plateia do evento",
          ]}
          reverse={true}
        />
        <StoryBlock
          title="6º Semestre (2024.2)"
          text="Assim que esse semestre começou, fui aprovado no processo seletivo da Fundação Estudar como voluntário no Summer Job, cargo em que durante algumas semanas fiquei responsável por divulgar e vender o curso Liderança na Prática. No fim, fiquei em 4º lugar do time de Summers, tendo vendido o curso por pelo menos R$180,00 para 10 pessoas e conseguido 2 isenções de custo. /n
Quando as aulas começaram, eu fiz uma parceria entre o time de tecnologia da Boston Consulting Group (BCG X), o Insper Coding e o Insper Data. Com isso, fizemos um evento de explicação sobre o processo de estágio regular nessa empresa de consultoria que atraiu 46 universitários ao evento. /n
Nesse semestre, eu tinha criado setores no Insper Academy, ainda como presidente: Semana de Introdução, Raposa Fluente e Semana Academy. A Semana de Introdução foi um evento em que alunos veteranos de todos os cursos do Insper puderam dar dicas aos calouros sobre como ir bem nas matérias mais difíceis, esse evento começou a ter recorrência semestral. O Raposa Fluente se tornou o primeiro clube de idiomas no Insper, em que através de conversas e interações 100% em inglês e prática de questões de provas de proficiência, ajudamos dezenas de alunos a aumentarem suas chances de conseguir nota o bastante para fazer intercâmbio ou obter um certificado de proficiência. A Semana Academy foi um evento que ocorreu durante a Semana Transforme, tendo como objetivo incentivar outras organizações estudantis a divulgarem seus conhecimentos e arrecadarem doações ao programa de bolsas do Insper. /n
Fui buddy de um universitário da Catalunia, em que durante esse semestre nós interagimos em inglês e participamos de atividades de integração cultural para ele conhecer melhor o Brasil. /n
Fui chamado pela Life4Sec para trabalhar voluntariamente na organização do evento anual HackerSec Conference. Nesse evento, ouvi diversas palestras sobre o mundo da Cyber Segurança e pude conversar com o CEO da HackerSec, Andrew Martinez. Posteriormente, fiz uma parceria da Insper Sec com o Andrew Martinez e organizamos um evento de Cyber Segurança no Insper. /n
Neste semestre, após 1 ano e meio como Diretor de Games e 6 meses como Vice-Presidente, me tornei Presidente do Insper Coding. Essa organização passou de 12 membros em 2022.2 para 46 membros ativos em 2024.2 fazendo projetos de qualidade em Web Development, Jogos Digitais e outras soluções com tecnologia. Sou muito grato à gestão de 2024.2 e 2025.1, todos fazem muito bem suas responsabilidades e me ajudaram a não ficar tão sobrecarregado com as tarefas de gestão do Coding. /n
Continuei como Diretor do Apoio Acadêmico do Comitê de Bolsistas do Insper, fazendo tours, líder de sala, professor de programação do GAS Informar, membro da Insper Sec e alcancei a marca de 509 horas complementares, continuando com os 200 pontos de intercâmbio. 
"
          image={["/summerfundacao.jpeg", "/timesummer.jpeg", "/eventobcg.jpeg", "/semanadeintroducao.jpeg", "/buddies.jpeg", "/hackersec.jpeg", "/hackersecandrew.jpeg", "/codingdiretor.jpeg", "/codinginaugural.jpeg"]}
          caption={[
            "Eu no escritório da Fundação Estudar",
            "Eu e o time de Summer Job",
            "Evento do BCG X",
            "Davi, conselheiro de Direito do Academy, com os alunos do evento de introdução",
            "Eu e meu buddy",
            "Evento HackerSec Conference",
            "Eu e o Andrew Martinez",
            "Eu apresentando o cronograma do Insper Coding",
            "Membros do Coding na reunião inaugural do semestre",
          ]}
          reverse={false}
        />
        <StoryBlock
          title="7º Semestre (2025.1)"
          text="Em janeiro de 2025, fui aprovado para um estágio de férias no maior banco de investimentos da América Latina, o BTG Pactual. Durante esse mês, liderei o desenvolvimento do projeto Motor de Contas Contábeis Viradas, um sistema automatizado que otimizou processos, economizando 42 horas mensais da equipe de analistas, ampliando a capacidade de revisão de fechamentos incorretos e reduzindo erros humanos. /n
Paralelamente, me tornei Community Leader Voluntário dos Alumni na Aspire Leaders Program from Harvard Business School. Com essa nova responsabilidade, organizo eventos presenciais para mais de 700 brasileiros que passaram pelo programa e sou um dos principais divulgadores, frequentemente gravando depoimentos e interagindo com bolsistas universitários. /n
Além dessas conquistas, dei mais um grande passo na minha trajetória: apliquei para um intercâmbio altamente concorrido e fui aprovado em 1 das 5 vagas disponíveis para estudar na Technische Hochschule Ingolstadt (THI), na Alemanha. Para alcançar essa oportunidade, cumpri todos os critérios necessários, incluindo a obtenção do nível C1 no Duolingo English Test (DET), um alto desempenho acadêmico e uma carta de motivação bem estruturada. /n
Agora, estou focado em viabilizar essa experiência. Consegui uma bolsa bilateral que cobre a mensalidade e um auxílio para viagens na Europa, mas ainda preciso reunir recursos para os custos diários durante os seis meses de estadia. /n
Em relação às atividades que estou fazendo neste semestre: me tornei Gerente de Marketing na Insper Sec, liderando uma equipe de 4 membros a ficarem por dentro das mudanças no mundo da Cyber Segurança e publicarem curiosidades nas redes sociais da Sec; continuei como Presidente do Insper Coding, que neste momento passou por um Rebranding para “Insper Code”, após várias reuniões pela diretoria atual e membros de marketing. No Code, neste momento contando com 40 membros ativos, estamos desenvolvendo 9 projetos paralelamente, sendo 6 de web dev e programação como um todo, 1 de empreendedorismo e 2 de desenvolvimento de jogos digitais; Fui reeleito líder de sala pelo 7º semestre consecutivo; Continuei como Diretor de Idiomas do Insper Academy, agora com maior suporte para alemão e japonês; comecei um curso remoto ao vivo de inglês de nível avançado com um professor Nigeriano da Bloomberg, esse curso é 100% em inglês e terá duração de 1 ano; fui aprovado como NINJA/Aluno Monitor, da disciplina de Design de Software no Insper, um sonho que eu tinha desde meu 2º semestre da graduação;  estou estudando uma disciplina eletiva de Visão Computacional e outra de Análise de Dados Desestruturados da Web (WebScrapping e reconhecimento de texto) e continuo como violinista da CCB desde os meus 13 anos.
"
          image={["/btgequipe.jpeg","/btgceo.jpeg","/aspireequipe.jpeg","/aspireteam.jpeg", "intercambio/thi.jpeg","thi.png"]}
          caption={[
            "Eu com a equipe de estagiários do BTG Pactual",
            "Eu com o CEO do BTG Pactual, Roberto Sallouti",
            "Eu com os Alumni da Aspire Leaders Program",
            "Eu com minha dupla de CL de SP e a Diretora da Aspire no Brasil",
            "Universidade Técnica de Ciências Aplicadas de Ingolstadt",
            "Universidade Técnica de Ciências Aplicadas de Ingolstadt",
          ]}
          reverse={true}
        />
        <StoryBlock
          title="Por que escolhi a THI para meu intercâmbio?"
          text="Estudar na Technische Hochschule Ingolstadt (THI) representou um passo essencial na minha trajetória acadêmica e profissional. Como estudante de Engenharia da Computação, sempre busquei oportunidades para expandir meus conhecimentos e desenvolver soluções inovadoras. A THI, com sua forte ênfase em tecnologia aplicada e parcerias com grandes empresas como a Audi e a BMW, foi o ambiente ideal para aprofundar minhas habilidades e aprender com profissionais e pesquisadores de alto nível da Europa. /n
Além disso, a Alemanha é referência global em engenharia e inovação. Viver essa experiência imersiva me permitiu absorver metodologias de ensino avançadas, fazer um estágio na sede mundial da BASF, explorar a Europa e me conectar com uma comunidade acadêmica diversa e qualificada. /n
O intercâmbio foi muito mais do que crescimento acadêmico — foi uma virada de chave que moldou o engenheiro e empreendedor que sou hoje. Continue lendo para saber como foi!"
          image={["intercambio/thi.jpeg","intercambio/thi.png"]}
          caption={[
            "Universidade Técnica de Ciências Aplicadas de Ingolstadt",
            "Universidade Técnica de Ciências Aplicadas de Ingolstadt",
          ]}
          reverse={false}
        />
        <StoryBlock
          title="O Intercâmbio na Europa (Set/2025 – Fev/2026)"
          text="Em setembro de 2025, embarquei para a Alemanha para viver a experiência mais transformadora da minha vida. Além das disciplinas na THI — com foco em Inteligência Artificial, Software Security e Macroeconomia —, aproveitei cada semana livre para explorar a Europa. /n
No total, passei por Alemanha, França, Holanda, Bélgica, Luxemburgo, Áustria, Suíça, Itália, Espanha, Portugal, Vaticano e Inglaterra. /n
Para viabilizar os R$59.166 necessários para os 6 meses, organizei uma campanha de crowdfunding com 145 apoiadores. O Insper contribuiu com R$45 mil para a Bolsa Cultural, a campanha arrecadou R$37 mil e o complemento da BASF fechou o que faltava, além de ter me dado mais conforto depois. Gerenciar esse orçamento foi, por si só, uma formação valiosa em finanças e planejamento. /n
A vivência intercultural foi profunda: convivi com estudantes de dezenas de países, aprendi sobre diferentes formas de resolver problemas e voltei com uma visão muito mais ampla sobre engenharia, negócios e vida."
          image={[
            "/intercambio/THI%20Ingolstadt.jpg",
            "/intercambio/Faculdade%20THI%20Ingolstadt%20Alemanha.jpg",
            "/intercambio/Ingolstadt%20Alemanha.jpg",
            "/intercambio/thi.jpeg",
            "/intercambio/thi.png",
            "/intercambio/Port%C3%A3o%20de%20Brandemburgo%20Berlim%20Alemanha.jpg",
            "/intercambio/Marienplatz%20Munique%20Alemanha.jpg",
            "/intercambio/Oktoberfest%20Munique%20Alemanha.jpg",
            "/intercambio/Frankfurt%20Alemanha.jpg",
            "/intercambio/Rothenburg%20ob%20der%20Tauber%20Alemanha.jpg",
            "/intercambio/Stonehenge%20Inglaterra.jpg",
            "/intercambio/Torrei%20Eiffel%20Paris%20Fran%C3%A7a.jpg",
            "/intercambio/Girassois%20Museu%20do%20Van%20Gogh%20Amsterdam%20Holanda.jpg",
            "/intercambio/Parlamento%20Europeu%20Bruxelas%20B%C3%A9lgica.jpg",
            "/intercambio/Grindelwald%20First%20Mountain%20Su%C3%AD%C3%A7a.jpg",
            "/intercambio/Lago%20Brienz%20Su%C3%AD%C3%A7a.jpg",
            "/intercambio/Matterhorn%20Zermatt%20Su%C3%AD%C3%A7a.jpg",
            "/intercambio/Kufstein%20Austria.jpg",
            "/intercambio/Pompeia%20Italia.jpg",
            "/intercambio/Parque%20G%C3%BCell%20Barcelona%20Espanha.jpg",
            "/intercambio/La%20Sagrada%20Fam%C3%ADlia%20Barcelona%20Espanha.jpg",
            "/intercambio/Urso%20de%20Madrid%20Espanha.jpg",
            "/intercambio/Lisboa.jpg",
            "/intercambio/Universidade%20de%20Coimbra%20Portugal.jpg",
            "/intercambio/Escola%20de%20Atenas%20Vaticano.jpg",
          ]}
          caption={[
            "THI Ingolstadt",
            "Faculdade THI Ingolstadt, Alemanha",
            "Ingolstadt, Alemanha",
            "THI Ingolstadt",
            "THI Ingolstadt",
            "Portão de Brandemburgo, Berlim",
            "Marienplatz, Munique",
            "Oktoberfest, Munique",
            "Frankfurt",
            "Rothenburg ob der Tauber",
            "Stonehenge",
            "Torre Eiffel, Paris",
            "Museu do Van Gogh, Amsterdã",
            "Parlamento Europeu, Bruxelas",
            "Grindelwald First Mountain",
            "Lago Brienz",
            "Matterhorn, Zermatt",
            "Kufstein",
            "Pompeia",
            "Parque Güell, Barcelona",
            "La Sagrada Família, Barcelona",
            "Urso de Madrid",
            "Lisboa",
            "Universidade de Coimbra",
            "Escola de Atenas, Vaticano",
          ]}
          reverse={true}
        />
        <StoryBlock
          title="Estágio de Engenharia de Software na BASF — Sede Mundial (Out/2025 – Fev/2026)"
          text="Durante o intercâmbio, fui aprovado para um estágio de Engenharia de Software na sede global da BASF, a maior empresa química do mundo, em Ludwigshafen, Alemanha. /n
Estagiei por 4 meses, da metade de outubro até a metade de fevereiro. /n
Minha missão foi substituir um software legado em MatLab utilizado pela equipe de pesquisa e desenvolvimento global da empresa — um sistema pesado, difícil de manter e dependente de licenças caras. De forma autônoma, desenvolvi um Web App moderno em React/Vite para análise de calorimetria preditiva, sem nenhuma dependência externa, tornando a ferramenta acessível para engenheiros da BASF em todo o mundo. /n
O resultado mais impactante foi a otimização de performance: reduzi o tempo de processamento das predições químicas de 5 minutos para apenas 15 segundos — uma melhoria de 20x. Além de acelerar o fluxo de trabalho dos pesquisadores, a nova interface eliminou a necessidade de licenças de software e democratizou o acesso à ferramenta globalmente. /n
Essa experiência consolidou minha capacidade de entregar soluções de alto impacto de forma autônoma em um ambiente corporativo de nível mundial."
          image={["/Estágio na BASF Ludwigshafen Alemanha.jpg"]}
          caption={["Estágio na BASF em Ludwigshafen, Alemanha"]}
          reverse={false}
        />
        <StoryBlock
          title="Troféu Trajetória de Impacto — Insper (Novembro 2025)"
          text="Em novembro de 2025, enquanto ainda estava na Alemanha, recebi uma das maiores honrarias da minha trajetória acadêmica: o Troféu Trajetória de Impacto do Insper. /n
Esse prêmio é concedido anualmente aos bolsistas que mais se destacam em impacto acadêmico, extracurricular e social dentro da instituição. Em 2025, fui eleito 1 dos 2 bolsistas premiados em um universo de 400 estudantes bolsistas — o Top 0,5% da instituição. /n
O reconhecimento levou em conta minhas 642 horas extracurriculares (6x acima da exigência mínima de formatura), minha atuação em 5 organizações estudantis, 7 semestres consecutivos como líder de sala, a presidência do Insper Code (de 9 para 46 membros), a cofundação do Insper Academy, o estágio no BTG Pactual e a trajetória desde a escola pública até o intercâmbio internacional. /n
É o reconhecimento de que cada hora investida, cada aula dada no GAS, cada projeto entregue valeu a pena."
          image={["/premio_bolsista_trajetoria_de_impacto.jpeg"]}
          caption={["Troféu Trajetória de Impacto do Insper"]}
          reverse={true}
        />
        <StoryBlock
          title="Freelance em Contabilidade para Médicos — Kardium (2026)"
          text="Após o retorno ao Brasil, comecei a trabalhar como freelancer no projeto Kardium, uma plataforma de contabilidade especializada para médicos recém-formados. O projeto foi idealizado por profissionais experientes do mercado financeiro, da XP Investimentos e da RB Investimentos, que identificaram uma lacuna no mercado: médicos que acabam de iniciar suas carreiras têm grandes desafios para organizar suas finanças e contabilidade. /n
Meu papel foi atuar como desenvolvedor full-stack, traduzindo as regras de negócio complexas do mercado médico-financeiro em código estruturado, escalável e seguro. Esse projeto me introduziu profundamente ao domínio de finanças para profissionais liberais e foi a semente para o que viria a seguir."
          image={["/kardium.png"]}
          caption={["Logo do projeto Kardium"]}
          reverse={false}
        />
        <StoryBlock
          title="Fundação da Startellite (2026 – Presente)"
          text="Com a experiência acumulada no BTG Pactual, na BASF, no Kardium e como Presidente do Insper Code, identifiquei um problema recorrente no ecossistema de startups: fundadores com ótimas ideias de negócio têm dificuldade de encontrar engenheiros de software qualificados, confiáveis e alinhados com a velocidade de uma startup. /n
Em 2026, fundei a Startellite — uma plataforma que conecta fundadores de startups a desenvolvedores de software pré-selecionados das melhores universidades do Brasil (Insper, Inteli, USP e outras). Atuamos como elo de qualidade: apenas o Top 5% dos candidatos passam por nosso processo seletivo rigoroso de múltiplas etapas. /n
Além da curadoria de talentos, a Startellite oferece suporte operacional completo para startups em fase inicial: serviços de CTO fracionado, precificação transparente através de uma calculadora proprietária, suporte jurídico e contábil, e auxílio na abertura de CNPJ. /n
Como Tech Lead e desenvolvedor solo, conduzo o desenvolvimento full-stack da plataforma (front-end e back-end), projeto a arquitetura em nuvem (AWS), implemento protocolos de cybersegurança e traduzo a visão de negócio em um MVP escalável pronto para o go-to-market."
          image={["/site_startellite.png"]}
          caption={["Site da Startellite"]}
          reverse={true}
        />
        <StoryBlock
          title="Essa jornada continua!"
          text="Você chegou ao fim do que foi registrado até agora, mas a história está longe de terminar. /n
Continuarei adicionando novos capítulos aqui conforme a trajetória avança. /n
Se você quiser saber mais, entrar em contato ou conhecer a Startellite, acesse os links no topo da página ou entre em contato pelo Instagram ou LinkedIn."
          image="/continua.jpg"
          reverse={false}
        />
      </div>
      
      {/* Destaques */}
      <HighlightsCarousel />

      {/* Progresso */}
      <ContactForm />
    </div>
  );
}

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common'])),
//     },
//   };
// }