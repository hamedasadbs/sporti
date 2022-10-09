/*INNER COMPONENT*/
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../logic/Context";
/*STYLE*/
import classes from "./Header.module.scss";
/*MUI*/
import { Search } from "@material-ui/icons";
/*CHILD COMPONENT*/
import { Dropdown } from "../../components/dropdown/Dropdown";
/*ICON*/
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SegmentIcon from "@mui/icons-material/Segment";
/*LIBRARY*/
import * as cookieLib from "../../logic/Cookie";

export const Header = () => {
  /*VARIABLE*/
  const [login, setLogin] = useContext(Context).loginCon;
  const [username, setUsername] = useContext(Context).usernameCon;
  const [page, setPage] = useContext(Context).pageCon;
  const setIsMenuShown = useContext(Context).menuCon[1];
  const setIsSignShown = useContext(Context).signCon[1];
  const cart = useContext(Context).cartCon[0];
  /*FUNCTION*/
  const showHiddenMenu = () => {
    setIsMenuShown(true);
    window.scrollTo(0, 0);
  };

  const showSign = () => {
    if (login) {
      logoutHandler();
    } else {
      setIsSignShown(true);
      window.scrollTo(0, 0);
    }
  };

  const logoutHandler = () => {
    if (window.confirm("آیا میخواهید از این حساب خارج شوید؟")) {
      cookieLib.setCookie("login", "", -100);
      setLogin(false);
      cookieLib.setCookie("username", "", -100);
      setUsername("");
    }
  };

  /*JSX*/
  return (
    <header className={classes.header}>
      <nav className={classes.topHeader}>
        <ul className={classes.leftSide}>
          <li className={classes.account} onClick={showSign}>
            <PersonOutlinedIcon className={classes.i} />
            {login ? <label>{username}</label> : <label>حساب من</label>}
          </li>
          <li
            className={classes.basket}
            onClick={login ? null : () => alert("ابتدا وارد حساب خود شوید")}
          >
            {login && <div className={classes.carts}>{cart.length}</div>}
            <ShoppingCartOutlinedIcon className={classes.i} />
            <label>سبد من</label>
            {login && cart.length ? (
              <div className={classes.basket}>
                <Dropdown login={login} type="basket" />
              </div>
            ) : null}
          </li>
        </ul>
        <ul className={classes.middleSide}>
          <button className={classes.search}>
            <Search />
          </button>
          <input
            spellCheck="false"
            type="search"
            placeholder="جست و جوی محصول یا برند"
          />
        </ul>
        <ul className={classes.bigLogo}>
          <div
            className={classes.mainLogo}
            onClick={() => {
              setPage("home");
            }}
          >
            <Link to="/#">
              <h1 className={classes.logo}>SPORTi</h1>
            </Link>
          </div>
        </ul>
        <ul className={classes.miniLogo}>
          <div
            className={classes.mainLogo}
            onClick={() => {
              setPage("home");
            }}
          >
            <Link to="/#">
              <h1 className={classes.logo}>SPORTi</h1>
            </Link>
          </div>
        </ul>
        <div onClick={showHiddenMenu} className={classes.dropdown}>
          <SegmentIcon className={classes.i} />
        </div>
      </nav>
      <ul className={classes.bottomHeader}>
        <li>
          <Link
            className={classes.link}
            onClick={() => {
              setPage("contact");
            }}
            to="/contact"
          >
            <span {...(page === "contact" && { className: classes.activeNav })}>
              ارتباط با ما
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={classes.link}
            onClick={() => {
              setPage("about");
            }}
            to="/about"
          >
            <span {...(page === "about" && { className: classes.activeNav })}>
              درباره ما
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={classes.link}
            onClick={() => {
              setPage("blog-news");
            }}
            to="/blog-news"
          >
            <span
              {...(page === "blog-news" && { className: classes.activeNav })}
            >
              بلاگ و اخبار
            </span>
          </Link>
        </li>
        <li>
          <Link className={classes.link}>
            <span className={classes.productType}>
              <div className={classes.productType}>
                <Dropdown type="productType" />
              </div>
              <KeyboardArrowDownIcon />
              نوع محصول
            </span>
          </Link>
        </li>
        <li>
          <Link className={classes.link}>
            <span className={classes.brands}>
              <div className={classes.brands}>
                <Dropdown type="brands" />
              </div>
              <KeyboardArrowDownIcon />
              برند ها
            </span>
          </Link>
        </li>
        <li>
          <Link className={classes.link}>
            <span className={classes.sports}>
              <div className={classes.sports}>
                <Dropdown type="sports" />
              </div>
              <KeyboardArrowDownIcon />
              ورزش ها
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={classes.link}
            onClick={() => {
              setPage("home");
            }}
            to="/#"
          >
            <span {...(page === "home" && { className: classes.activeNav })}>
              خانه
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
};
