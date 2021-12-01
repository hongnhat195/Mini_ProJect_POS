import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AdminTemplate from "./container/Admin";
import SignInSide from "./container/Admin/pages/LoginAdmin";
import HomeTemplate from "./container/Client";
import { RouteHome, RouteAdmin } from "./routers";
function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };
  const showLayoutAdmin = (routes) => {
    if (routes.length > 0 && routes) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };
  return (
    <div>
      <BrowserRouter>
        <Switch>{showLayoutHome(RouteHome)}</Switch>
        <Switch>{showLayoutAdmin(RouteAdmin)}</Switch>
        <Switch>
          <Route exact={true} path="/admin/login" component={SignInSide} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
