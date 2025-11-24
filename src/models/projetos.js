import { Sequelize } from "sequelize";
import database from "../database/db.js";

const Projeto = database.define("projeto", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  titulo: { type: Sequelize.STRING, allowNull: false },
  descricao: { type: Sequelize.TEXT },
  link: { type: Sequelize.STRING },
  gitHub: { type: Sequelize.STRING },
  png: { type: Sequelize.STRING },
});

export default Projeto;
