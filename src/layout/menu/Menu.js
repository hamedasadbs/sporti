/*INNER COMPONENT*/
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../logic/Context";
/*STYLE*/
import classes from "./Menu.module.scss";
/*ICON*/
import { ArrowDropDown, ArrowLeft, Search } from "@material-ui/icons";
/*LIBRARY*/
import * as cookieLib from "../../logic/Cookie";

export const Menu = () => {
  /*STATE*/
  const [isSportsOpen, setIsSportsOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isProductTypeOpen, setIsProductTypeOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  /*VARIABLE*/
  const [login, setLogin] = useContext(Context).loginCon;
  const setUsername = useContext(Context).usernameCon[1];
  const setPage = useContext(Context).pageCon[1];
  const setIsMenuShown = useContext(Context).menuCon[1];
  const setIsSignShown = useContext(Context).signCon[1];

  const sportsData = useContext(Context).typeCon.sports[0];
  const brandsData = useContext(Context).typeCon.brands[0];
  const productTypeData = useContext(Context).typeCon.productType[0];
  const cart = useContext(Context).cartCon[0];

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

  const closeMenu = () => {
    setIsMenuShown(false);
  };

  const closeForm = () => {
    disableAll(false);
    setIsSignShown(false);
    window.onscroll = function () {};
  };

  const notCloseHandler = (e) => {
    e.stopPropagation();
  };
  /*JSX*/
  return (
    <div
      onClick={() => setIsMenuShown(false)}
      id="container"
      className={classes.menuContainer}
    >
      <div onClick={notCloseHandler} className={classes.menu}>
        <ul className={classes.rightSide}>
          <li className={classes.account}>
            <label
              onClick={() => {
                closeForm();
                showSign();
                closeMenu();
              }}
            >
              حساب من{" "}
            </label>
          </li>
          <li
            className={classes.basket}
            onClick={() => setIsBasketOpen((prevState) => !prevState)}
          >
            <span>
              {isBasketOpen ? <ArrowDropDown /> : <ArrowLeft />}سبد من
            </span>
            {isBasketOpen && (
              <ul>
                {login == false ? (
                  <li className={classes.alert}>
                    لطفا وارد حساب کاربری خود شوید
                  </li>
                ) : cart.length === 0 ? (
                  <li>سبد شما خالی است</li>
                ) : (
                  cart.map((res) => <li>{res.fa_title}</li>)
                )}
              </ul>
            )}
          </li>
          <li
            onClick={() => {
              setPage("home");
            }}
          >
            <Link to="/#" onClick={closeMenu}>
              خانه
            </Link>
          </li>
          <li
            className={classes.sports}
            onClick={() => setIsSportsOpen((prevState) => !prevState)}
          >
            <span>
              {isSportsOpen ? <ArrowDropDown /> : <ArrowLeft />}
              ورزش ها
            </span>
            {isSportsOpen && (
              <ul>
                {sportsData.map((res) => (
                  <li
                    key={res.id}
                    onClick={() => {
                      window.location.href = "/category/" + res.category;
                    }}
                  >
                    <Link onClick={closeMenu} to={`/${res.category}`}>
                      {res.fa_category}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li
            className={classes.brands}
            onClick={() => setIsBrandsOpen((prevState) => !prevState)}
          >
            <span>
              {isBrandsOpen ? <ArrowDropDown /> : <ArrowLeft />}برند ها
            </span>
            {isBrandsOpen && (
              <ul>
                {brandsData.map((res) => (
                  <li
                    key={res.id}
                    onClick={() => {
                      window.location.href = "/category/" + res.brand;
                    }}
                  >
                    <Link onClick={closeMenu} to={`/${res.brand}`}>
                      {res.brand}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li
            className={classes.productType}
            onClick={() => setIsProductTypeOpen((prevState) => !prevState)}
          >
            <span>
              {isProductTypeOpen ? <ArrowDropDown /> : <ArrowLeft />}
              نوع محصول
            </span>
            {isProductTypeOpen && (
              <ul>
                {productTypeData.map((res) => (
                  <li
                    key={res.id}
                    onClick={() => {
                      window.location.href = "/category/" + res.type;
                    }}
                  >
                    <Link onClick={closeMenu} to={`/${res.type}`}>
                      {res.fa_type}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li
            onClick={() => {
              setPage("blog-news");
            }}
          >
            <Link to="/blog-news" onClick={closeMenu}>
              بلاگ و اخبار
            </Link>
          </li>
          <li
            onClick={() => {
              setPage("about");
            }}
          >
            <Link to="/about" onClick={closeMenu}>
              درباره ما
            </Link>
          </li>
          <li
            onClick={() => {
              setPage("contact");
            }}
          >
            <Link to="/contact" onClick={closeMenu}>
              ارتباط با ما
            </Link>
          </li>
          <li className={classes.search}>
            <button>
              <Search />
            </button>
            <input
              spellCheck="false"
              type="search"
              placeholder="جست و جوی محصول یا برند"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
