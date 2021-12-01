import HomePage from "../container/Client/Home";
import SignIn from "../container/Client/Login/login.page";
import DetailFood from "../container/Client/DetailFood";
import Order from "../container/Client/Order";
import Checkout from "../container/Client/Checkout";
import UserPage from "../container/Client/user/user.page";
import Revenue from "../container/Admin/pages/Revenue";
import Categorys from "../container/Admin/pages/Category";
import Foods from "../container/Admin/pages/Food";
import Settings from "../container/Admin/pages/Setting";
import AnotherSettings from "../container/Admin/pages/AnotherSetting";
import InfoAdmin from "../container/Admin/pages/infoadmin";
import EditCategory from "../container/Admin/pages/UpdateCategory";
import UpdateFood from "../container/Admin/pages/UpdateFood";
import SignInSide from "../container/Admin/pages/LoginAdmin";
import Accounts from "../container/Admin/pages/Account";
const RouteHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/checkout",
    component: Checkout,
  },
  {
    exact: false,
    path: "/login",
    component: SignIn,
  },
  {
    exact: false,
    path: "/order",
    component: Order,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailFood,
  },
  {
    exact: false,
    path: "/user",
    component: UserPage,
  },
];
const RouteAdmin = [
  {
    exact: true,
    path: "/admin",
    component: Revenue,
  },
  {
    exact: false,
    path: "/admin/categorys",
    component: Categorys,
  },
  {
    exact: false,
    path: "/admin/foods",
    component: Foods,
  },
  {
    exact: false,
    path: "/admin/settings",
    component: Settings,
  },
  {
    exact: false,
    path: "/admin/anothersettings",
    component: AnotherSettings,
  },
  {
    exact: false,
    path: "/admin/info",
    component: InfoAdmin,
  },
  {
    exact: false,
    path: "/admin/editCategory/:id",
    component: EditCategory,
  },
  {
    exact: false,
    path: "/admin/editFood/:id",
    component: UpdateFood,
  },
  {
    exact: false,
    path: "/admin/accounts",
    component: Accounts,
  },
];
const RouteAdminLogin = [
  {
    exact: false,
    path: "/admin/login",
    component: SignInSide,
  },
];
export { RouteHome, RouteAdmin, RouteAdminLogin };
