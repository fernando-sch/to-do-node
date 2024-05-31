import * as express from "express";
import { AppDataSource } from "@/config";
import { routes } from "@/app_web/routes";

const app = express();

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

app.use("/", routes);

app.listen(8080, () => "Server running on port 8080");
