const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const body = require("body-parser");
const sequelize = require("./models").sequelize;
const rootRouter = require("./routers");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(body.json());
app.use(express.json());
app.use(cors());
const publicPath = path.join(__dirname, "./public");
app.use("/public", express.static(publicPath));
app.use("/api/v1", rootRouter);
app.listen(process.env.PORT || 5000, async () => {
  console.log("App listening on http://localhost:5000");
  try {
    await sequelize.authenticate();
    console.log("Connection database successfully");
  } catch (error) {
    console.log("Unable to connect to database");
  }
});
