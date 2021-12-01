import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ThemeAction from "../../redux/actions/ThemeAction";
import Sidebar from "../../components/sidebar/Sidebar";
import Topnav from "../../components/topnav/TopNav";
import "./layout.css";
const LayoutAdmin = (props) => {
  const themeReducer = useSelector((state) => state.ThemeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);
  return (
    <>
      <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
        <Sidebar {...props} />
        <div className="layout__content">
          <Topnav />
          <div className="layout__content-main">{props.children}</div>
        </div>
      </div>
    </>
  );
};
export default function AdminTemplate(props) {
  const { exact, path, component } = props;
  if (!localStorage.getItem("admin")) return <Redirect to="/admin/login" />;
  return (
    <LayoutAdmin>
      <Route exact={exact} path={path} component={component} />
    </LayoutAdmin>
  );
}
