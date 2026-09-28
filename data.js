// Conteúdo do site. Quando existir backoffice, estes dados passam a vir da API.
// Campos marcados com "placeholder: true" ainda precisam de informação real.

window.SITE = {
  telefone: "+351 913 955 987",
  telefoneLink: "+351913955987",
  email: "centro.de.estudos.joana@gmail.com",
  morada: "R. Cidade de Ponte de Sor, lote 227, 1685-145 Famões",
  mapaQuery: "R. Cidade de Ponte de Sor lote 227, 1685-145 Famões",

  horario: [
    { dia: "Segunda a sexta", horas: "08:00 – 19:00", dias: [1, 2, 3, 4, 5] },
    { dia: "Sábado", horas: "08:00 – 13:00", dias: [6] },
    { dia: "Domingo e feriados", horas: "Encerrado", dias: [0] },
  ],

  explicadores: [
    { nome: "Joana Aparício", papel: "Organizadora e explicadora", disciplinas: ["Físico-Química", "Matemática"], foto: "assets/equipa/joana-aparicio.jpg" },
    { nome: "Marco Freitas", papel: "Explicador", disciplinas: ["Matemática", "Biologia e Geologia"], foto: "assets/equipa/marco-freitas.jpg" },
    { nome: "Inês Filipa", papel: "Explicadora", disciplinas: ["Português", "Psicologia", "Filosofia"], foto: "assets/equipa/ines-filipa.jpg" },
    { nome: "Duarte Cunha", papel: "Explicador", disciplinas: ["Físico-Química", "Matemática"], foto: "assets/equipa/duarte-cunha.jpg" },
    { nome: "Matilde Teixeira", papel: "Explicadora", disciplinas: ["Matemática", "Biologia e Geologia"], foto: "assets/equipa/matilde-teixeira.jpg" },
    { nome: "Mariana Lage", papel: "Professora", disciplinas: ["Espanhol", "História", "Geografia"], foto: "assets/equipa/mariana-lage.jpg" },
    { nome: "Vânia Ferreira", papel: "Explicadora", disciplinas: ["Matemática", "Economia", "Gestão"], foto: "assets/equipa/vania-ferreira.jpg" },
  ],

  disciplinas: [
    { area: "Matemática", cor: "orange", itens: ["1.º ao 9.º ano", "Matemática A, B e MACS", "Cursos profissionais", "Álgebra Linear e Cálculo"] },
    { area: "Línguas", cor: "sky", itens: ["Português (1.º ao 12.º)", "Inglês (1.º ao 12.º)", "Apoio em Francês e Espanhol"] },
    { area: "Ciências", cor: "pink", itens: ["Físico-Química", "Biologia e Geologia", "Ciências Naturais"] },
    { area: "Humanidades e Economia", cor: "amber", itens: ["História e Geografia", "Filosofia e Psicologia", "Economia e Gestão"] },
  ],

  vagas: [
    { titulo: "[Vaga — ex.: Apoio ao estudo, 1.º ciclo]", detalhe: "[Detalhe da turma]", estado: "Vagas disponíveis", tipo: "ok", placeholder: true },
    { titulo: "[Vaga — ex.: Matemática A, 12.º ano]", detalhe: "[Detalhe da turma]", estado: "Últimas vagas", tipo: "warn", placeholder: true },
    { titulo: "[Vaga — ex.: Apoio ao estudo, secundário]", detalhe: "[Detalhe da turma]", estado: "Em formação", tipo: "info", placeholder: true },
  ],

  precos: {
    individuais: {
      titulo: "Explicações individuais",
      subtitulo: "Para quem prefere pagar por hora",
      colunas: ["Ano letivo", "1 vez por semana", "2 ou mais vezes por semana"],
      colunasCurtas: ["Ano", "1×/sem.", "2+×/sem."],
      linhas: [
        ["1.º ciclo", "28,00 €/h", "25,00 €/h"],
        ["2.º ciclo", "30,00 €/h", "28,00 €/h"],
        ["3.º ciclo", "32,00 €/h", "30,00 €/h"],
        ["10.º ano", "35,00 €/h", "32,00 €/h"],
        ["11.º ou 12.º ano", "40,00 €/h", "35,00 €/h"],
        ["Exames nacionais", "45,00 €/h", "40,00 €/h"],
        ["Ensino superior", "50,00 €/h", "45,00 €/h"],
      ],
      nota: "Ao domicílio: 5 € de deslocação até 5 km do centro, mais 1 € por cada km extra (ex.: 6,2 km acresce 7 €).",
    },
    packs: {
      titulo: "Packs de horas",
      subtitulo: "Até agosto · cada pack válido durante 3 meses",
      colunas: ["Ano", "6 h", "12 h", "24 h"],
      linhas: [
        ["1.º ciclo", "119 €", "209 €", "372 €"],
        ["2.º ciclo", "123 €", "222 €", "396 €"],
        ["3.º ciclo", "139 €", "259 €", "469 €"],
        ["10.º ano", "159 €", "294 €", "539 €"],
        ["11.º / 12.º", "169 €", "312 €", "576 €"],
      ],
    },
    apoio: {
      titulo: "Apoio ao estudo",
      subtitulo: "Mensalidade até julho · mínimo de 4 alunos por turma",
      colunas: ["Ano", "1×/sem.", "2×/sem.", "3×/sem."],
      linhas: [
        ["1.º ciclo", "89 €", "149 €", "179 €"],
        ["2.º ciclo", "99 €", "159 €", "199 €"],
        ["3.º ciclo", "109 €", "169 €", "219 €"],
        ["Secundário", "129 €", "189 €", "258 €"],
      ],
      nota: "TPC e exercícios com correção acompanhada, em todas as disciplinas.",
    },
  },

  extras: [
    { nome: "Avaliação de conhecimentos", valor: "+ 45 € por disciplina" },
    { nome: "Avaliação de conhecimentos — ano letivo completo", valor: "+ 100 €" },
    { nome: "Avaliação inicial com a psicóloga (45 min)", valor: "+ 65 €" },
  ],
};
