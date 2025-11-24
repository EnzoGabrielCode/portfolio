import { Sequelize } from "sequelize";

const sequelize = new Sequelize("portfolio_db", "root", "fatec", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default sequelize;
