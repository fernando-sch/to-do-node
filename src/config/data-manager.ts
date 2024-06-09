import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { Task } from "@/app/entities/task";

export class DataManager {
  private dataSourceOptions: DataSourceOptions;
  private dataSource: DataSource;

  constructor(config: DataSourceOptions) {
    this.dataSourceOptions = config;
  }

  getDataSource() {
    return this.dataSource;
  }

  async initializeDataSource() {
    this.dataSource = new DataSource({
      ...this.dataSourceOptions,
      entities: [Task],
    });

    await this.dataSource
      .initialize()
      .then(() => {
        console.log("Data Source has been initialized!");
      })
      .catch((err) => {
        console.error("Error during Data Source initialization:", err);
      });
  }
}
