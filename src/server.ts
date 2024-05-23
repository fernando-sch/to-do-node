import * as express from "express";
import { AppDataSource } from "@/config";

import { Router, Request, Response } from "express";

const app = express();

const route = Router();

app.use(express.json());

AppDataSource.initialize()
  .then(() => console.log("DataBase successfully connected"))
  .catch((error) => console.log(error));

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello world with Typescript" });
});

app.use(route);

app.listen(8080, () => "Server running on port 8080");
