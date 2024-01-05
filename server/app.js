const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 5001;

app.use(
  cors({
    origin: "https://gilded-haupia-740589.netlify.app",
    credentials: true,
    allowedHeaders: "Content-Type, Authorization",
    methods: "GET, POST, PUT, DELETE",
  })
);
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://gilded-haupia-740589.netlify.app"
  );
  res.header("Access-Control-Allow-Credentials", true);
  console.log("Incoming Request:", req.method, req.url);
  console.log("Headers Set:", res.getHeaders());
  next();
});
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
