import express from "express";
import { sobreMim } from "../models/sobre.js"
import { disciplinas } from "../models/disciplinas.js"
import { projetos } from "../models/projetos.js"
import { contato } from "../models/contato.js"
import { dados } from "../models/dados.js";

const router = express.Router();

router.get("/", (req, res) => res.render("index"));

router.get("/sobre", (req, res) => res.render("sobre", { sobreMim }));

router.get("/disciplinas", (req, res) => res.render("disciplinas", { disciplinas }));

router.get("/projetos", (req, res) => res.render("projetos", { projetos }));

router.get("/contato", (req, res) => res.render("contato", { contato }));

router.get("/dashboard", (req, res) => res.render("dashboard", { dados }));

export default router;