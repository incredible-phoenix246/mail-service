import express from "express";
import { readdirSync } from "fs";

import cors from "cors";
import https from "https";
import cron from "node-cron";
import { sayHelloController } from "./controllers";
import { errorHandler } from "./middlewares";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function keepAlive(url: string) {
  https
    .get(url, (res) => {
      console.log(`Status: ${res.statusCode}`);
    })
    .on("error", (error) => {
      console.error(`Error: ${error.message}`);
    });
}


cron.schedule("*/5 * * * *", () => {
  keepAlive("https://mail-service-1omd.onrender.com");
  console.log("pinging the server every minute");
});


//serve all routes dynamically using readdirsync
readdirSync("./src/routes").map((path) =>
  app.use("/api", require(`./routes/${path}`))
);

app.get("/", sayHelloController);

app.use(errorHandler);

app.use(cors());
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
