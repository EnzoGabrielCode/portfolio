import * as Disciplinas from "../models/disciplinas.js";

export function listar(req, res) {
  res.render("disciplinas", { disciplinas: Disciplinas.getAll() });
}

export function criar(req, res) {
  Disciplinas.create(req.body.nome);
  res.redirect("/disciplinas");
}

export function editar(req, res) {
  Disciplinas.update(req.params.id, req.body.nome);
  res.redirect("/disciplinas");
}

export function excluir(req, res) {
  Disciplinas.remove(req.params.id);
  res.redirect("/disciplinas");
}
