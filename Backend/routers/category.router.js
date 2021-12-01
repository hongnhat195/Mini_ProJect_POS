const express = require("express");
const {
  addCate,
  getallCategoryAsync,
  updateCate,
  removeCate,
  getDetailCate,
} = require("../controllers/category.controller.js");
const { authenticate } = require("../middlewares/Auth/authenticate.js");
const { authorizeUser } = require("../middlewares/Auth/authorize.js");
const categoryRouter = express.Router();
categoryRouter.post(
  "/addCategory",
  authenticate,
  authorizeUser(["admin", "superAdmin"]),
  addCate
);

categoryRouter.get("/getListCategory", getallCategoryAsync);
categoryRouter.put(
  "/updateCategory/:id",
  authenticate,
  authorizeUser(["admin", "superAdmin"]),
  updateCate
);
// categoryRouter.post(
//   "/uploadImg/:id",
//   authenticate,
//   authorizeUser(["admin", "superAdmin"]),
//   uploadImage("food-img"),
//   uploadImgFood
// );
categoryRouter.delete(
  "/deleteCategory/:id",
  authenticate,
  authorizeUser(["admin", "superAdmin"]),
  removeCate
);
categoryRouter.get("/detail/:id", getDetailCate);
module.exports = { categoryRouter };
