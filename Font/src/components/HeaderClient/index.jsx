/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/images/foodcourt_infologo.png";

import "./HeaderClient.scss";

import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { delLoginAction } from "./../../redux/Reducers/loginUser";

function HeaderClient() {
  const number = useSelector((state) => state.todoCart.number);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loginUser);

  const handleLogout = (e) => {
    alert("Đăng xuất thành công!");
    localStorage.removeItem("user");
    dispatch(delLoginAction());
    history.push("/");
  };

  return (
    <nav class="navbar fixed-top navbar-expand-lg header" id="mainNavbar">
      <div class="container-fluid d-flex order-lg-1">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt />
          </Link>
        </div>
        <div className="header__ctn order-lg-3">
          {/* <div>
            <Link to="/" className="link">
              <i className="far fa-heart" />
              <span>Your Wishlist</span>
              <div className="qty">2</div>
            </Link>
          </div> */}
          <div>
            <Link to="/order" className="link">
              <i className="fa fa-shopping-cart" />
              <span>Giỏ hàng</span>
              <div className="qty">{number}</div>
            </Link>
          </div>
          <div>
            <Link to={user.isLogin ? "/user" : "/login"} className="link">
              <i className="fa fa-user" />
              {user.isLogin ? user.userInfo.username : "Đăng nhập"}
            </Link>
          </div>

          {user.isLogin ? (
            <div className="header__logout" title="Đăng xuất">
              <Button type="submit" onClick={handleLogout}>
                <LogoutIcon />
              </Button>
            </div>
          ) : (
            ""
          )}
        </div>
        <button
          class="navbar-toggler header__btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div
          class="collapse navbar-collapse order-lg-2"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <Link to="/" className="header__link nav-link">
              Trang chủ
            </Link>
            <Link to="/" className="header__link nav-link">
              Menu
            </Link>
            <Link to="/" className="header__link nav-link">
              Giới thiệu
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderClient;
