import Disciplina from "./disciplinas.js";
import Projeto from "./projetos.js";

export async function getDados() {
  const totalDisciplinas = await Disciplina.count();
  const totalProjetos = await Projeto.count();

  return {
    totalDisciplinas: totalDisciplinas,
    totalProjetos: totalProjetos,
    tecnologias: [
      "Node.js",
      "Express",
      "EJS",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
      "Figma",
      "Scrum",
      "MySQL",
      "Sequelize",
    ],
  };
}
