const express = require("express");
const {
  changePassword,
  getDetailsCus,
  login,
  register,
  removeCus,
  updateCustomer,
  getListCustomer,
} = require("../controllers/customer.controller.js");
const {
  checkEmailDuplicate,
} = require("../middlewares/Validation/Email-exist.js");
const { authenticate } = require("../middlewares/Auth/authenticate.js");
const { authorizeUser } = require("../middlewares/Auth/authorize.js");
const customerRouter = express.Router();
customerRouter.post("/register", checkEmailDuplicate, register);
customerRouter.post("/login", login);
customerRouter.get(
  "/",
  authenticate,
  authorizeUser(["admin,superAdmin"]),
  getListCustomer
);
customerRouter.get(":/id", authenticate, getDetailsCus);
customerRouter.put("/updateCus/:id", authenticate, updateCustomer);
customerRouter.put("/changePwd/:id", authenticate, changePassword);
customerRouter.delete(
  "/deleteCus/:id",
  authenticate,
  authorizeUser(["admin", "superAdmin"]),
  removeCus
);
module.exports = { customerRouter };
