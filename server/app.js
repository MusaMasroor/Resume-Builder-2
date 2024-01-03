const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 5001;

// CORS Configuration
const allowedOrigins = [
  "http://localhost:3000",
  "https://euphonious-brigadeiros-4d0865.netlify.app/",
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
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
