import * as express from "express";
import { routes } from "@/app_web/routes";
import { DataManager } from "@/config";
import { DataSourceOptions } from "typeorm";

export let dbManager: DataManager;

export const connectToDb = async (dataSourceOptions: DataSourceOptions) => {
  dbManager = new DataManager(dataSourceOptions);
  await dbManager.initializeDataSource();
};

const app = express();

app.use(express.json());

app.use("/", routes);

export default app;
