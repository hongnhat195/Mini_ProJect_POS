const express = require("express");
const {
  addAdmiAccount,
  loginAdmin,
  removeAdmin,
  updateAdmin,
  getallEmployeeAsync,
  getDetailsAdmin,
  resetPassword,
} = require("../controllers/admin.controller.js");
const { authenticate } = require("../middlewares/Auth/authenticate.js");
const { authorizeUser } = require("../middlewares/Auth/authorize.js");
const {
  checkEmailDuplicateAdmin,
} = require("../middlewares/Validation/Email-exist.js");
const adminRouter = express.Router();
adminRouter.post("/login", loginAdmin);
adminRouter.put(
  "/updateAdmin/:id",
  authenticate,
  authorizeUser(["admin", "superAdmin"]),
  updateAdmin
);
adminRouter.post(
  "/addAdmin",
  authenticate,
  authorizeUser(["admin", "superAdmin"]),
  checkEmailDuplicateAdmin,
  addAdmiAccount
);
adminRouter.delete(
  "/deleteAdmin/:id",
  authenticate,
  authorizeUser(["admin", "superAdmin"]),
  removeAdmin
);
adminRouter.get("/getAllEmployee", getallEmployeeAsync);
adminRouter.get("/detailAdmin/:id", getDetailsAdmin);
adminRouter.put(
  "/updatePass/:id",
  authenticate,
  authorizeUser(["admin", "superAdmin"]),
  resetPassword
);
module.exports = { adminRouter };
