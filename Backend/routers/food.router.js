const express = require("express");
const {
  addFood,
  getDetailFood,
  getListFoodbyName,
  getListFoodByPriceASC,
  getListFoodByPriceDESC,
  getListFoodByType,
  removeFood,
  updateFood,
  uploadImgFood,
  getallfoodAsync,
} = require("../controllers/food.controller.js");
const { authenticate } = require("../middlewares/Auth/authenticate.js");
const { authorizeUser } = require("../middlewares/Auth/authorize.js");
const { uploadImage } = require("../middlewares/Upload/upload-image.js");
const foodRouter = express.Router();
foodRouter.post(
  "/addFood",
  authenticate,
  authorizeUser(["admin", "superAdmin"]),
  addFood
);
foodRouter.get("/detail/:id", getDetailFood);
foodRouter.post("/getListFoodbyName", getListFoodbyName);
foodRouter.get("/getListFoodByType", getListFoodByType);
foodRouter.get("/getListFoodByPriceASC", getListFoodByPriceASC);
foodRouter.get("/getListFoodByPriceDESC", getListFoodByPriceDESC);
foodRouter.get("/getListFood", getallfoodAsync);
foodRouter.put(
  "/updateFood/:id",
  authenticate,
  authorizeUser(["admin", "superAdmin"]),
  updateFood
);
foodRouter.post(
  "/uploadImg/:id",
  authenticate,
  authorizeUser(["admin", "superAdmin"]),
  uploadImage("food-img"),
  uploadImgFood
);
foodRouter.delete(
  "/deleteFood/:id",
  authenticate,
  authorizeUser(["admin", "superAdmin"]),
  removeFood
);
module.exports = { foodRouter };
