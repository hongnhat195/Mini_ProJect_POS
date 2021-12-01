const express = require("express");
const {
  ordering,
  viewOrderByCustomer,
  viewListOrder,
  viewListOrderToday,
  viewListOrderByDate,
  viewListOrderByMonth,
  viewListOrderByYear,
} = require("../controllers/order.controller.js");
const { authenticate } = require("../middlewares/Auth/authenticate.js");
const orderRouter = express.Router();
orderRouter.post("/order", authenticate, ordering);
orderRouter.get("/list/:id", authenticate, viewOrderByCustomer);
orderRouter.get(
  "/listallorder",
  // authenticate,
  viewListOrder
);
orderRouter.get(
  "/listallordertoday",
  // authenticate,
  viewListOrderToday
);
orderRouter.get(
  "/listallorderbydate/:id",
  // authenticate,
  viewListOrderByDate
);
orderRouter.get(
  "/listallorderbymonth",
  // authenticate,
  viewListOrderByMonth
);
module.exports = { orderRouter };
