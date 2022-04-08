import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize(
  `postgres://${config.username}:${config.password}@${config.host}:${config.dbPort}/${config.database}`
);
// export const sequelize = new Sequelize({
//   username: config.username,
//   password: config.localPassword,
//   database: config.database,
//   host: config.localhost,
//   port: config.dbPort,

//   dialect: "postgres",
//   storage: ":memory:",
// });
