import express from "express";
import { sobreMim } from "../models/sobre.js";
import { contato } from "../models/contato.js";
import { getDados } from "../models/dados.js";

const router = express.Router();

router.get("/", (req, res) => res.render("index", { nome: "Enzo Gabriel" }));

router.get("/sobre", (req, res) => res.render("sobre", { sobreMim }));

router.get("/contato", (req, res) => res.render("contato", { contato }));

router.get("/dashboard", async (req, res) => {
  const dados = await getDados();
  res.render("dashboard", { dados });
});

export default router;
