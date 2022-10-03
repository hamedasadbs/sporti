/*INNER COMPONENT*/
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../../logic/Context";
/*STYLE*/
import classes from "./Header.module.scss";
/*MUI*/
import { Search, HorizontalSplit } from "@material-ui/icons";
/*CHILD COMPONENT*/
import { Dropdown } from "../../tool/dropdown/Dropdown";
/*ICON*/
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
/*LIBRARY*/
import * as cookieLib from "../../logic/Cookie";

export const Header = (props) => {
  /*STATE*/
  const [isHiddenMenuShown, setIsHiddenMenuShown] = useState(false);
  const [cart, setCart] = useState([]);
  /*VARIABLE*/
  const [login, setLogin] = useContext(Context).loginCon;
  const [username, setUsername] = useContext(Context).usernameCon;
  const [page, setPage] = useContext(Context).pageCon;
  const sportsURL = "http://localhost/bsShop/sports.php";
  const brandsURL = "http://localhost/bsShop/brands.php";
  const productTypeURL = "http://localhost/bsShop/productType.php";

  const showHiddenMenu = () => {
    setIsHiddenMenuShown(true);
    window.scrollTo(0, 0);
  };

  const showSign = () => {
    if (login == false) {
      disableAll(true);
      props.setIsSignShown(true);
      window.scrollTo(0, 0);
      disableScroll();
    } else {
      logoutHandler();
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

  const disableScroll = () => {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  };

  const disableAll = (disable) => {
    const tagsArray = ["li", "button", "input", "a"];

    for (let t = 0; t < tagsArray.length; t++) {
      const tagsDom = document.querySelectorAll(tagsArray[t]);
      for (let i = 0; i < tagsDom.length; i++) {
        if (disable) tagsDom[i].classList.add("disable");
        else tagsDom[i].classList.remove("disable");
      }
    }
  };

  useEffect(() => {
    if (login) {
      checkTheCart();
    }
  }, []);

  const checkTheCart = () => {
    axios.get(`http://localhost:8080/cart?username=${username}`).then((res) => {
      setCart(res.data.dataset);
    });
  };
  /*JSX*/
  return (
    <header className={classes.header}>
      <nav className={classes.topHeader}>
        <ul className={classes.rightSide}>
          <li onClick={showHiddenMenu} className={classes.dropdown}>
            <HorizontalSplit className={classes.i} />
          </li>
          <div
            className={classes.mainLogo}
            onClick={() => {
              setPage("home");
            }}
          >
            <Link to="/#">
              <img
                data-toggle="tooltip"
                src="/sporti-label.png"
                alt="sporti.com"
              />
            </Link>
          </div>
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
                <Dropdown
                  login={login}
                  type="basket"
                  checkTheCart={checkTheCart}
                  cart={cart}
                />
              </div>
            ) : null}
          </li>
        </ul>
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
            <span
              {...(page === "contact" ? { className: classes.activeNav } : {})}
            >
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
            <span
              {...(page === "about" ? { className: classes.activeNav } : {})}
            >
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
              {...(page === "blog-news"
                ? { className: classes.activeNav }
                : {})}
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
            <span
              {...(page === "home" ? { className: classes.activeNav } : {})}
            >
              خانه
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
};
