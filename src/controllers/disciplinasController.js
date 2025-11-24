import Disciplina from "../models/disciplinas.js";

export async function listar(req, res) {
  try {
    const disciplinas = await Disciplina.findAll();
    res.render("disciplinas", { disciplinas: disciplinas });
  } catch (error) {
    res.status(500).send("Erro ao listar: " + error.message);
  }
}

export async function criar(req, res) {
  try {
    await Disciplina.create({
      nome: req.body.nome,
      status: "Cursando",
    });
    res.redirect("/disciplinas");
  } catch (error) {
    res.status(500).send("Erro ao criar: " + error.message);
  }
}

export async function editar(req, res) {
  try {
    await Disciplina.update(
      { nome: req.body.nome },
      { where: { id: req.params.id } }
    );
    res.redirect("/disciplinas");
  } catch (error) {
    res.status(500).send("Erro ao editar: " + error.message);
  }
}

export async function excluir(req, res) {
  try {
    await Disciplina.destroy({ where: { id: req.params.id } });
    res.redirect("/disciplinas");
  } catch (error) {
    res.status(500).send("Erro ao excluir: " + error.message);
  }
}
