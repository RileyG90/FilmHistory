import { Sequelize } from "sequelize";

const db = new Sequelize({
  database: "favouritemovie",
  username: "root",
  password: "",
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

export default db;
