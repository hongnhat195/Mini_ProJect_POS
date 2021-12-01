import { configureStore } from "@reduxjs/toolkit";
import todoCart from "./Reducers/todoCart";
import paymentMethod from "./Reducers/paymentMethod";
import ThemeReducer from "./Reducers/ThemeReducer";
import loginUser from "./Reducers/loginUser";
import loginAdmin from "./Reducers/loginAdmin";
const rootReducer = {
  todoCart: todoCart,
  paymentMethod,
  ThemeReducer: ThemeReducer,
  loginUser: loginUser,
  loginAdmin: loginAdmin,
};
export const store = configureStore({
  reducer: rootReducer,
});
