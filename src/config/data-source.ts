import "reflect-metadata";
import { DataSource } from "typeorm";
import { EnvObject } from "@/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: EnvObject.dbHost,
  port: 5432,
  username: EnvObject.dbUser,
  password: EnvObject.dbPassword,
  database: EnvObject.dbName,
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});
