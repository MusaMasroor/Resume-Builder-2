const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const app = express();

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());
app.use(require("./routes/auth"));

const databaseConnectionPromise = require("./db/connection");
const startServer = async () => {
  try {
    await databaseConnectionPromise;
    app.listen(port, () => {
      console.log(`listening for requests at port ${port}`);
    });
  } catch (error) {
    console.error(`Error starting server: ${error}`);
    throw error;
  }
};
startServer();
