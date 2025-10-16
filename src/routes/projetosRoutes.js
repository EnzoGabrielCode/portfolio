import express from "express";
import { 
    listar, 
    adicionar, 
    excluir, 
    editar, 
    renderCrudPage, 
    renderEditPage 
} from "../controllers/projetosController.js";

const router = express.Router();

router.get("/", listar);

router.get("/crud", renderCrudPage);

router.post("/add", adicionar);

router.get("/edit/:titulo", renderEditPage);

router.post("/edit/:titulo", editar);

router.post("/delete/:titulo", excluir);

export default router;