export let disciplinas = [
    {id: 1, nome: "Algoritmo e Lógica de Programação", status: "Cursada"},
    {id: 2, nome: "Desing Digital", status: "Cursada"},
    {id: 3, nome: "Desenvolvimento Web I", status: "Cursada"},
    {id: 4, nome: "Engenharia de Software I", status: "Cursada"},
    {id: 5, nome: "Modelagem de Banco de Dados", status: "Cursada"},
    {id: 6, nome: "Sistemas Operacionais", status: "Cursada"},
    {id: 7, nome: "Banco de Dados Relacional", status: "Cursando"},
    {id: 8, nome: "Desenvolvimento Web II", status: "Cursando"},
    {id: 9, nome: "Engenharia de Software II", status: "Cursando"},
    {id: 10, nome: "Estrutura de Dados", status: "Cursando"},
    {id: 11, nome: "Matematica para Computação", status: "Cursando"},
    {id: 12, nome: "Técnica de Programação I", status: "Cursando"}
];

export function getAll() {
  return disciplinas;
}

export function create(nome) {
  const nova = { id: Date.now(), nome };
  disciplinas.push(nova);
  return nova;
}

export function update(id, novoNome) {
  const disciplina = disciplinas.find(d => d.id == id);
  if (disciplina) disciplina.nome = novoNome;
  return disciplina;
}

export function remove(id) {
  disciplinas = disciplinas.filter(d => d.id != id);
}