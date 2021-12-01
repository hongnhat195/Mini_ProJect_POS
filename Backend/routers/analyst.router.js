const {
  getCounTotalbyDay,
  getCounTotalbyMonth,
} = require("../controllers/analyst.controller.js");
const express = require("express");
const analystRoute = express.Router();
analystRoute.get("/totalByDate", getCounTotalbyDay);
analystRoute.get("/totalByMonth", getCounTotalbyMonth);
module.exports = analystRoute;
