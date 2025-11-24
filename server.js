import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import db from "./src/database/db.js";

import Disciplina from "./src/models/disciplinas.js";
import Projeto from "./src/models/projetos.js";

import disciplinasRouter from "./src/routes/disciplinasRoutes.js";
import projetosRouter from "./src/routes/projetosRoutes.js";
import portifolioRouter from "./src/routes/portifolioRoutes.js";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/disciplinas", disciplinasRouter);
app.use("/projetos", projetosRouter);
app.use("/", portifolioRouter);

const disciplinasIniciais = [
  { nome: "Algoritmo e Lógica de Programação", status: "Cursada" },
  { nome: "Desing Digital", status: "Cursada" },
  { nome: "Desenvolvimento Web I", status: "Cursada" },
  { nome: "Engenharia de Software I", status: "Cursada" },
  { nome: "Modelagem de Banco de Dados", status: "Cursada" },
  { nome: "Sistemas Operacionais", status: "Cursada" },
  { nome: "Banco de Dados Relacional", status: "Cursando" },
  { nome: "Desenvolvimento Web II", status: "Cursando" },
  { nome: "Engenharia de Software II", status: "Cursando" },
  { nome: "Estrutura de Dados", status: "Cursando" },
  { nome: "Matematica para Computação", status: "Cursando" },
  { nome: "Técnica de Programação I", status: "Cursando" },
];

const projetosIniciais = [
  {
    titulo: "multiverso spider-man",
    descricao:
      "Este projeto é uma página dedicada ao multiverso do Homem-Aranha, com diversas seções criadas para apresentar cada filme da franquia de forma única e interativa. Projeto feito por mim através de um curso da plataforma DIO.",
    link: "https://enzogabrielcode.github.io/spider-man-multiversus/index.html",
    gitHub: "https://github.com/EnzoGabrielCode/spider-man-multiversus",
    png: "spiderman",
  },
  {
    titulo: "MUNDO INVERTIDO",
    descricao:
      "Este projeto é inspirado na série Stranger Things, desenvolvido para oferecer uma experiência interativa e explorar de forma criativa os elementos icônicos da trama.",
    link: "#",
    gitHub: "https://github.com/EnzoGabrielCode/landing-page-mundo-invertido",
    png: "mundoinvertido",
  },
  {
    titulo: "estatistica de comércio exterior",
    descricao:
      "Este projeto é uma API desenvolvido durante o primeiro semestre de DSM para o gerenciamento de dados estatísticos de exportações no estado de São Paulo.",
    link: "#",
    gitHub: "https://github.com/Team-Chronos/API-DSM-1SEMESTRE-2025",
    png: "api",
  },
];

db.sync()
  .then(async () => {
    console.log("Banco de dados conectado!");

    const countDisciplinas = await Disciplina.count();
    if (countDisciplinas === 0) {
      await Disciplina.bulkCreate(disciplinasIniciais);
      console.log("Disciplinas antigas inseridas com sucesso!");
    }

    const countProjetos = await Projeto.count();
    if (countProjetos === 0) {
      await Projeto.bulkCreate(projetosIniciais);
      console.log("Projetos antigos inseridos com sucesso!");
    }

    app.listen(PORT, () =>
      console.log(`Servidor rodando em http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.log("Erro ao conectar no banco:", err));
