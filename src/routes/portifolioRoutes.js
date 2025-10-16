import express from "express";
import { sobreMim } from "../models/sobre.js"
import { contato } from "../models/contato.js"
import { getDados } from "../models/dados.js";

const router = express.Router();

router.get("/", (req, res) => res.render("index"));

router.get("/sobre", (req, res) => res.render("sobre", { sobreMim }));

router.get("/contato", (req, res) => res.render("contato", { contato }));

router.get("/dashboard", (req, res) => {
  const dados = getDados();
  res.render("dashboard", { dados });
});

export default router;