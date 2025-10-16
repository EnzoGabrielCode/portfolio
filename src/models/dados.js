import { disciplinas } from "./disciplinas.js";
import { projetos } from "./projetos.js";

export function getDados() {
  return {
    totalDisciplinas: disciplinas.length,
    totalProjetos: projetos.length,
    tecnologias: [
      "Node.js", "Express", "EJS", "HTML", "CSS", "JavaScript",
      "Git", "GitHub", "Figma", "Scrum", "MySQL", "TypeScript", "React"
    ]
  };
}
