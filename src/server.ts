import { DataSourceOptions } from "typeorm";
import { EnvObject } from "@/config";
import app, { connectToDb } from "@/app";

const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: EnvObject.dbHost,
  port: EnvObject.dbPort,
  username: EnvObject.dbUser,
  password: EnvObject.dbPassword,
  database: EnvObject.dbName,
  synchronize: true,
  logging: false,
};

connectToDb(dataSourceOptions);

app.listen(8080, () => "Server running on port 8080");
