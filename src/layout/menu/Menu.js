/*INNER-COMPONENTS*/
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../../logic/Context";
/*CSS*/
import classes from "./Menu.module.scss";
/*ASSETS*/
import { Cancel, ArrowDropDown, ArrowLeft, Search } from "@material-ui/icons";

import * as cookieLib from "../../logic/Cookie";

export const Menu = () => {
  /*STATE*/
  const [sportsData, setSportsData] = useState([]);
  const [brandsData, setBrandsData] = useState([]);
  const [productTypeData, setProductTypeData] = useState([]);
  const [isHiddenMenuShown, setIsHiddenMenuShown] = useState(false);
  const [isSignShown, setIsSignShown] = useState(false);
  const [isSportsOpen, setIsSportsOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isProductTypeOpen, setIsProductTypeOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [cart, setCart] = useState([]);
  /*VARIABLE*/
  const [login, setLogin] = useContext(Context).loginCon;
  const [username, setUsername] = useContext(Context).usernameCon;
  const [page, setPage] = useContext(Context).pageCon;
  const sportsURL = "http://localhost/bsShop/sports.php";
  const brandsURL = "http://localhost/bsShop/brands.php";
  const productTypeURL = "http://localhost/bsShop/productType.php";
  const cartURL = "http://localhost/bsShop/cart.php";

  const showHiddenMenu = () => {
    setIsHiddenMenuShown(true);
    window.scrollTo(0, 0);
  };

  const showSign = () => {
    if (login == false) {
      disableAll(true);
      setIsSignShown(true);
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
    axios.post(sportsURL).then((res) => setSportsData(res.data));
    axios.post(brandsURL).then((res) => setBrandsData(res.data));
    axios.post(productTypeURL).then((res) => setProductTypeData(res.data));
    if (login) {
      checkTheCart();
    }
  }, []);

  const checkTheCart = () => {
    axios
      .post(
        cartURL,
        JSON.stringify({
          method: "checkTheCart",
          username: username,
        })
      )
      .then((res) => setCart(res.data));
  };

  const closeHiddenMenu = () => {
    setIsHiddenMenuShown(false);
  };

  const closeForm = () => {
    disableAll(false);
    setIsSignShown(false);
    window.onscroll = function () {};
  };

  const openBasket = () => {
    if (isBasketOpen) setIsBasketOpen(false);
    else setIsBasketOpen(true);
  };

  const openSports = () => {
    if (isSportsOpen) setIsSportsOpen(false);
    else setIsSportsOpen(true);
  };

  const openBrands = () => {
    if (isBrandsOpen) setIsBrandsOpen(false);
    else setIsBrandsOpen(true);
  };

  const openProductType = () => {
    if (isProductTypeOpen) setIsProductTypeOpen(false);
    else setIsProductTypeOpen(true);
  };
  return (
    <div className={classes.hiddenMenu}>
      <Cancel onClick={closeHiddenMenu} className={classes.closeHiddenMenu} />
      <ul className={classes.rightSide}>
        <li className={classes.account}>
          <label
            onClick={() => {
              closeForm();
              showSign();
              closeHiddenMenu();
            }}
          >
            حساب من{" "}
          </label>
        </li>
        <li className={classes.basket} onClick={openBasket}>
          {isBasketOpen ? <ArrowDropDown /> : <ArrowLeft />}
          <label>سبد من </label>
          {isBasketOpen && (
            <ul>
              {login == false ? (
                <li>لطفا وارد حساب کاربری خود شوید</li>
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
          <Link to="/#" onClick={closeHiddenMenu}>
            خانه
          </Link>
        </li>
        <li className={classes.sports} onClick={openSports}>
          <Link>{isSportsOpen ? <ArrowDropDown /> : <ArrowLeft />}ورزش ها</Link>
          {isSportsOpen && (
            <ul>
              {sportsData.map((res) => (
                <li
                  key={res.id}
                  onClick={() => {
                    window.location.href = "/category/" + res.category;
                  }}
                >
                  <Link onClick={closeHiddenMenu} to={`/${res.category}`}>
                    {res.fa_category} -
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className={classes.brands} onClick={openBrands}>
          <Link>{isBrandsOpen ? <ArrowDropDown /> : <ArrowLeft />}برند ها</Link>
          {isBrandsOpen && (
            <ul>
              {brandsData.map((res) => (
                <li
                  key={res.id}
                  onClick={() => {
                    window.location.href = "/category/" + res.brand;
                  }}
                >
                  <Link onClick={closeHiddenMenu} to={`/${res.brand}`}>
                    {res.brand} -
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className={classes.productType} onClick={openProductType}>
          <Link>
            {isProductTypeOpen ? <ArrowDropDown /> : <ArrowLeft />}
            نوع محصول
          </Link>
          {isProductTypeOpen && (
            <ul>
              {productTypeData.map((res) => (
                <li
                  key={res.id}
                  onClick={() => {
                    window.location.href = "/category/" + res.type;
                  }}
                >
                  <Link onClick={closeHiddenMenu} to={`/${res.type}`}>
                    {res.fa_type} -
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
          <Link to="/blog-news" onClick={closeHiddenMenu}>
            بلاگ و اخبار
          </Link>
        </li>
        <li
          onClick={() => {
            setPage("about");
          }}
        >
          <Link to="/about" onClick={closeHiddenMenu}>
            درباره ما
          </Link>
        </li>
        <li
          onClick={() => {
            setPage("contact");
          }}
        >
          <Link to="/contact" onClick={closeHiddenMenu}>
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
  );
};
