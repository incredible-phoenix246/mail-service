import express from "express";
import { readdirSync } from "fs";
import { errorHandler } from "./middlewares";
import cors from "cors";
import https from "https";
import cron from "node-cron";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function keepAlive(url) {
  https
    .get(url, (res) => {
      console.log(`Status: ${res.statusCode}`);
    })
    .on("error", (error) => {
      console.error(`Error: ${error.message}`);
    });
}

// cron job to ping the server every minute and delete expired tokens every 5 minutes
cron.schedule("*/5 * * * *", () => {
  keepAlive("https://evento-qo6d.onrender.com/");
  console.log("pinging the server every minute");
});

//serve all routes dynamically using readdirsync
readdirSync("./src/routes").map((path) =>
  app.use("/api/v1", require(`./routes/${path}`))
);

app.use(errorHandler);
app.use(cors());
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
