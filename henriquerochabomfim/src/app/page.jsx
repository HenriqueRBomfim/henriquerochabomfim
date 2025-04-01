import Image from 'next/image';
import StoryBlock from "./components/story_block";
import Header from "./components/header";
import HighlightsCarousel from "./components/HighlightsCarousel";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center p-3 mt-5">
        <Image src="/Henrique Rocha Bomfim.jpeg" width={150} height={190} className="rounded-full shadow-lg" alt="Henrique Rocha" />
        <h2 className="text-3xl font-semibold mt-4">Olá, sou o Henrique Rocha!</h2>
        <p className="text-lg mt-2">Engenheiro da Computação no Insper, buscando transformar vidas através da tecnologia e educação.</p>
      </section>
      
      {/* Sobre Mim */}
      <section id="about" className="p-6 max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Minha História</h2>
      </section>

      <div className="space-y-16">
        <StoryBlock
          title="Panorama Geral"
          text="Olá! Meu nome é Henrique Rocha, mas pode me chamar de Rique. Sou bolsista 
          integral de engenharia da computação no Insper e sou a primeira pessoa da minha 
          árvore genealógica a ingressar em uma universidade. Neste momento, estou me 
          preparando para estudar entre agosto de 2025 e fevereiro de 2026 na Technische 
          Hochschule Ingolstadt (THI), Universidade Técnica de Ciências Aplicadas de 
          Ingolstadt, lugar onde, após um esforço de anos, conquistei 1 das 5 vagas de 
          intercâmbio disponíveis para cursar disciplinar de tecnologia e negócios na Alemanha."
          image="/Henrique Rocha Bomfim.jpeg"
          reverse={false}
        />
        <StoryBlock
          title="Base Familiar"
          text="Antes de contar quem eu me tornei e que caminho estou seguindo, vou contar 
          um pouco sobre a minha origem: Nasci em um lar cristão em que meus pais já serviam 
          a Deus na Congregação Cristão no Brasil (CCB). Meu pai nasceu e foi criado no interior
           de uma cidade da Bahia, tendo estudado apenas até a 5ª série do ensino fundamental e 
           trabalha em um mercado atacadista. Minha mãe sempre foi de São Paulo, SP, e estudou 
           até o nível técnico em enfermagem, sempre se esforçando para trabalhar em hospitais 
           cada vez melhores e fazendo cursos que a desenvolveram na área. Tenho um irmão gêmeo 
           que está cursando Arquitetura e Urbanismo na Universidade Presbiteriana Mackenzie e 
           uma irmã mais nova no ensino fundamental."
          image="/familia.jpeg"
          reverse={true}
        />
        <StoryBlock
          title="Motivação de estudar e me esforçar"
          text="Meus pais sempre me motivaram a estudar, dizendo que era o melhor caminho para 
          transformar a nossa realidade e alcançar horizontes que eles não alcançaram. Estudei 
          em escola pública até o 9º ano do ensino fundamental mudando de escola em escola toda
          vez que notava que não estava sendo desafiado o suficiente."
          image="/plinio.jpg"
          reverse={false}
        />
        <StoryBlock
          title="Conhecendo e ingressando no ISMART (2018)"
          text="No 9º ano, estudando na EMEF Plínio de Queiroz, escola pública no Parque Boa Esperança em que sou muito grato pelo apoio dos professores e amigos, conheci o ISMART (Instituto Social para Motivar Apoiar e Reconhecer Talentos), uma ONG que desde 1999 vem buscando jovens talentos e oferece bolsas de estudo integrais (100%) para o ensino médio em colégios particulares de excelência para quem passar no longo processo seletivo no 7º ou 9º ano do fundamental. /n Após passar por 5 etapas, incluindo provas de português, matemática, lógica, entrevista individual, entrevista com a família e desafio de trabalho em grupo, ao longo de 2018, consegui finalizar o processo seletivo e garantir minha vaga no Colégio Objetivo da Avenida Paulista para cursar o ensino médio."
          image="/ismart.jpg"
          reverse={true}
        />
        <StoryBlock
          title="Desafios dessa mudança de realidade (2019)"
          text="Eu acordava às 04:00 da manhã e saia às 05:00 todos os dias do ensino médio para chegar a tempo para as aulas às 07:00. Como vim de escola pública, eu não tive uma base de física, química e biologia e acabava indo mal nessas matérias no início do ensino médio, tendo tirado notas baixas que eu nunca tinha tirado antes. Eu ficava triste ao ver que pessoal que sempre estudou em escola particular tratava como se fosse normal saber aqueles conteúdos enquanto eu tinha dificuldade. /n
Porém, não deixei esses pensamentos durarem muito. Comecei a estudar muito mais do que o esperado e entrei em preparatórios para Olimpíadas do Conhecimento, em que eu não sabia que existiam outras além da OBMEP. /n
Quando eu menos esperava, comecei a ir cada vez melhor na escola, melhorando muito em todas as matérias e ficando mais próximo das tão sonhadas medalhas.
"
          image="/objetivo.jpg"
          caption="Meus amigos do Colégio Objetivo S2"
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
Como resultado, consegui medalha de prata na OBA e bronze na OBR, mas não consegui nem menção honrosa na ONC.
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
O Insper parecia um universo de possibilidades, muito além do que eu jamais sonhei em alcançar. Com uma infraestrutura extraordinária e muitos laboratórios para me preparar na prática como engenheiro de computação. Contando com professores incríveis e pessoas de diversos estados do Brasil, comecei a explorar as oportunidades desde o primeiro semestre.
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
          caption="Amigos do Insper no 1º semestre S2"
          reverse={true}
        />
        <StoryBlock
          title="Motivação de estudar e me esforçar"
          text="Meus pais sempre me motivaram a estudar, dizendo que era o melhor caminho para 
          transformar a nossa realidade e alcançar horizontes que eles não alcançaram. Estudei 
          em escola pública até o 9º ano do ensino fundamental mudando de escola em escola toda
          vez que notava que não estava sendo desafiado o suficiente."
          image="/plinio.jpg"
          reverse={false}
        />
        <StoryBlock
          title="Base Familiar"
          text="Antes de contar quem eu me tornei e que caminho estou seguindo, vou contar 
          um pouco sobre a minha origem: Nasci em um lar cristão em que meus pais já serviam 
          a Deus na Congregação Cristão no Brasil (CCB). Meu pai nasceu e foi criado no interior
           de uma cidade da Bahia, tendo estudado apenas até a 5ª série do ensino fundamental e 
           trabalha em um mercado atacadista. Minha mãe sempre foi de São Paulo, SP, e estudou 
           até o nível técnico em enfermagem, sempre se esforçando para trabalhar em hospitais 
           cada vez melhores e fazendo cursos que a desenvolveram na área. Tenho um irmão gêmeo 
           que está cursando Arquitetura e Urbanismo na Universidade Presbiteriana Mackenzie e 
           uma irmã mais nova no ensino fundamental."
          image="/familia.jpeg"
          reverse={true}
        />
        <StoryBlock
          title="Motivação de estudar e me esforçar"
          text="Meus pais sempre me motivaram a estudar, dizendo que era o melhor caminho para 
          transformar a nossa realidade e alcançar horizontes que eles não alcançaram. Estudei 
          em escola pública até o 9º ano do ensino fundamental mudando de escola em escola toda
          vez que notava que não estava sendo desafiado o suficiente."
          image="/plinio.jpg"
          reverse={false}
        />
      </div>
      
      {/* Destaques */}
      <HighlightsCarousel />
      
      {/* Doação */}
      <section id="donate" className="p-6 text-center mt-20">
        <h2 className="text-2xl font-bold">Ajude no Meu Intercâmbio</h2>
        <p className="mt-2">Se quiser apoiar minha jornada, qualquer doação será bem-vinda!</p>
        <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded text-lg">Fazer uma Doação</button>
      </section>
    </div>
  );
}
