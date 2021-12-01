import React, { useState } from 'react';
import { useStyles } from './login.style.page';
import { Button } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
// import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { useDispatch } from 'react-redux';
import { setLoginAction } from './../../../redux/Reducers/loginUser';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const renderSignInPage = (event) => {
  document.getElementById('signUpPage').style.transition = 'all 0.5s';
  document.getElementById('signInPage').style.transition =
    '0.7s 0.5s ease-in-out';
  document.getElementById('signInPage').style.transform = 'translateX(0px)';
  document.getElementById('signUpPage').style.transform = 'translateX(100%)';
};

const renderSignUpPage = (event) => {
  document.getElementById('signUpPage').style.transition =
    '0.7s 0.5s ease-in-out';
  document.getElementById('signInPage').style.transition = 'all 0.5s';
  document.getElementById('signInPage').style.transform = 'translateX(-100%)';
  document.getElementById('signUpPage').style.transform = 'translateX(0px)';
};

function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const Login = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:5000/api/v1/customer/login",
        login
      );
      if (result.data) {
        alert("Đăng nhập thành công!");
        localStorage.setItem("user", JSON.stringify(result.data));
        const dataload = {
          isLogin: true,
          userInfo: result.data,
        }
        dispatch(setLoginAction(dataload));
        history.push('/');
      }
    } catch (err) {
      alert("Đăng nhập không thành công! Vui lòng thử lại!");
    }
  };

  const [signUp, setSignUp] = useState(
    {
      name: "",
      email: "",
      password: "",
      phone: "",
      username: "",
    }
  );

  const handleChangeSignUp = (e) => {
    const { name, value } = e.target;
    setSignUp({...signUp, [name]: value});
  }

  const Register = async (e) => {
    const cfpass = document.getElementById('cfpass');
    if (cfpass.value !== signUp.password)
    {
      alert('Mật khẩu không khớp! Vui lòng nhập lại!');
      return;
    }
    try {
      const result = await axios.post(
        "http://localhost:5000/api/v1/customer/register",
        signUp
      );
      alert("Đăng ký thành công!");
    } catch (err) {
      alert("Đăng ký không thành công!");
    }
  }

  return (
    <div className={classes.root}>
      {/* <div style={{ height: '70px' }}></div> */}
      <div className={classes.flexBox}>
        <div className={classes.signIn} id="signInPage">
          <div className={classes.boxSignIn}>
            <div className={classes.it}>
              <div className={classes.btnChangePage}>
                <Button
                  onClick={renderSignUpPage}
                  variant="contained"
                  color="primary"
                >
                  Đăng ký
                </Button>
              </div>
            </div>
            <div className={classes.it}>
              <div className={classes.itBox}>
                <div className={classes.formBox}>
                  <div className={classes.title}>ĐĂNG NHẬP</div>
                  <form action="" autoComplete="off">
                    <div className={classes.inputField}>
                      <PersonIcon />
                      <input
                        onChange={handleChangeLogin}
                        type="text"
                        name="email"
                        placeholder="email"
                      ></input>
                    </div>
                    <div className={classes.inputField}>
                      <LockIcon />
                      <input
                        onChange={handleChangeLogin}
                        type="password"
                        name="password"
                        placeholder="password"
                      ></input>
                    </div>
                    <div className={classes.btnBox}>
                      <Button onClick={Login}>Đăng nhập</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.signUp} id="signUpPage">
          <div className={classes.boxSignUp}>
            <div className={classes.it}>
              <div className={classes.itBox}>
                <div className={classes.formBox}>
                  <div className={classes.title}>ĐĂNG KÝ</div>
                  <form action="" autoComplete="off">
                    <div className={classes.inputField}>
                      <MailOutlineIcon />
                      <input
                        onChange={handleChangeSignUp}
                        type="email"
                        name="email"
                        placeholder="email"
                      ></input>
                    </div>
                    <div className={classes.inputField}>
                      <PersonIcon />
                      <input
                      onChange={handleChangeSignUp}
                        type="text"
                        name="username"
                        placeholder="username"
                      ></input>
                    </div>
                    <div className={classes.inputField}>
                      <LockIcon />
                      <input
                      onChange={handleChangeSignUp}
                        type="password"
                        name="password"
                        placeholder="password"
                      ></input>
                    </div>
                    <div className={classes.inputField}>
                      <LockIcon />
                      <input
                        type="password"
                        name="cfpassword"
                        id="cfpass"
                        placeholder="confirm password"
                      ></input>
                    </div>

                    <div className={classes.btnBox}>
                      <Button onClick={Register}>ĐĂNG KÝ</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className={classes.it}>
              <div className={classes.btnChangePage}>
                <Button
                  onClick={renderSignInPage}
                  variant="contained"
                  color="primary"
                >
                  ĐĂNG NHẬP
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
