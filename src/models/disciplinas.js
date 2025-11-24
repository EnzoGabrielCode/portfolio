import { Sequelize } from "sequelize";
import database from "../database/db.js";

const Disciplina = database.define("disciplina", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: "Cursando",
  },
});

export default Disciplina;
