import Projeto from "../models/projetos.js";

export const listar = async (req, res) => {
  const projetos = await Projeto.findAll();
  res.render("projetos", { projetos });
};

export const renderCrudPage = async (req, res) => {
  const projetos = await Projeto.findAll();
  res.render("crud", { projetos });
};

export const renderEditPage = async (req, res) => {
  const { titulo } = req.params;
  const projeto = await Projeto.findOne({ where: { titulo: titulo } });

  if (projeto) {
    res.render("editar", { projeto });
  } else {
    res.status(404).send("Projeto não encontrado");
  }
};

export const adicionar = async (req, res) => {
  const { titulo, descricao, link, gitHub, png } = req.body;
  if (titulo && descricao) {
    await Projeto.create({ titulo, descricao, link, gitHub, png });
  }
  res.redirect("/projetos/crud");
};

export const editar = async (req, res) => {
  const { titulo } = req.params;
  const { novoTitulo, novaDescricao, novoLink, novoGitHub, novoPng } = req.body;

  await Projeto.update(
    {
      titulo: novoTitulo,
      descricao: novaDescricao,
      link: novoLink,
      gitHub: novoGitHub,
      png: novoPng,
    },
    {
      where: { titulo: titulo },
    }
  );

  res.redirect("/projetos/crud");
};

export const excluir = async (req, res) => {
  const { titulo } = req.params;
  await Projeto.destroy({ where: { titulo: titulo } });
  res.redirect("/projetos/crud");
};
