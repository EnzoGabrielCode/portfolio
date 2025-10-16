import express from "express";
import { listar, criar, editar, excluir } from "../controllers/disciplinasController.js";

const router = express.Router();

router.get("/", listar);
router.post("/add", criar);
router.post("/edit/:id", editar);
router.post("/delete/:id", excluir);

export default router;
