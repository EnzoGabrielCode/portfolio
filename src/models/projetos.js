export let projetos = [
    {   
        titulo: "multiverso spider-man", 
        descricao: "Este projeto é uma página dedicada ao multiverso do Homem-Aranha, com diversas seções criadas para apresentar cada filme da franquia de forma única e interativa. Projeto feito por mim através de um curso da plataforma DIO, onde eles mostravam como eu feito e eu desenvolvia.", 
        link: "https://enzogabrielcode.github.io/spider-man-multiversus/index.html", 
        gitHub: "https://github.com/EnzoGabrielCode/spider-man-multiversus",
        png: "spiderman"
    },
    {
        titulo: "MUNDO INVERTIDO", 
        descricao: "Este projeto é inspirado na série Stranger Things, desenvolvido para oferecer uma experiência interativa e explorar de forma criativa os elementos icônicos da trama. Projeto feito por Enzo Gabriel utilizando um curso da plataforma DIO.", 
        link: "#", 
        gitHub: "https://github.com/EnzoGabrielCode/landing-page-mundo-invertido",
        png: "mundoinvertido"
    },
    {
        titulo: "estatistica de comércio exterior", 
        descricao: "Este projeto é uma API (aprendizado por projeto integrado) desenvolvido durante o primeiro semestre de DSM (Desenvolvimento de Software e multiplataforma) para o gerenciamento de dados estatísticos de exportações no estado de São Paulo. Esse projeto foi desenvolvido na faculdade, participei ativamente como time de desenvolvimento no back-end na primeira sprint e como Scrum Master a partir da segunda sprint.", 
        link: "#", 
        gitHub: "https://github.com/Team-Chronos/API-DSM-1SEMESTRE-2025",
        png: "api"
    }
];

export function getAll() {
  return projetos;
}

export function create(nome) {
  const nova = { id: Date.now(), nome };
  projetos.push(nova);
  return nova;
}

export function update(id, novoNome) {
  const disciplina = projetos.find(d => d.id == id);
  if (disciplina) disciplina.nome = novoNome;
  return disciplina;
}

export function remove(id) {
  projetos = projetos.filter(d => d.id != id);
}