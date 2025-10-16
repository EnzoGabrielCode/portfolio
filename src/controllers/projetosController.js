import { projetos } from "../models/projetos.js";
import * as Projetos from "../models/projetos.js";

export const listar = (req, res) => {
  res.render("projetos", { projetos: Projetos.getAll() });
};

export const renderCrudPage = (req, res) => {
  res.render("crud", { projetos: Projetos.getAll() });
};

export const renderEditPage = (req, res) => {
    const { titulo } = req.params;
    const projeto = Projetos.getAll().find(p => p.titulo === titulo);
    if(projeto){
        res.render('editar', { projeto });
    } else {
        res.status(404).send('Projeto não encontrado');
    }
}

export const adicionar = (req, res) => {
  const { titulo, descricao, link, gitHub, png } = req.body;
  if (titulo && descricao) {
    projetos.push({ titulo, descricao, link, gitHub, png });
  }
  res.redirect("/projetos/crud");
};

export const editar = (req, res) => {
  const { titulo } = req.params; 
  const { novoTitulo, novaDescricao, novoLink, novoGitHub, novoPng } = req.body;
  const projeto = projetos.find(p => p.titulo === titulo);
    if (projeto) {
    projeto.titulo = novoTitulo || projeto.titulo;
    projeto.descricao = novaDescricao || projeto.descricao;
    projeto.link = novoLink || projeto.link;
    projeto.gitHub = novoGitHub || projeto.gitHub;
    projeto.png = novoPng || projeto.png;
  }
    res.redirect("/projetos/crud");
};

export const excluir = (req, res) => {
  const { titulo } = req.params;
  const index = projetos.findIndex(p => p.titulo === titulo);
  if (index !== -1) projetos.splice(index, 1);
  res.redirect("/projetos/crud");
};