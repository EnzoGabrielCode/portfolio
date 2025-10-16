// projetosRoutes.js
import express from "express";
import { 
    listar, 
    adicionar, 
    excluir, 
    editar, // Importe a função 'editar'
    renderCrudPage, // Importe a nova função
    renderEditPage  // Importe a nova função
} from "../controllers/projetosController.js";

const router = express.Router();

// Rota pública para listar projetos
router.get("/", listar);

// **NOVA** - Rota para a página de gerenciamento
router.get("/crud", renderCrudPage);

// Rota para adicionar um projeto
router.post("/add", adicionar);

// **NOVA** - Rota para mostrar o formulário de edição
router.get("/edit/:titulo", renderEditPage);

// **NOVA** - Rota para processar a edição de um projeto
router.post("/edit/:titulo", editar);

// Rota para deletar um projeto
router.post("/delete/:titulo", excluir);

export default router;