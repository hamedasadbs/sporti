/*INNER COMPONENT*/
import React, { useContext } from "react";
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
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import FmdBadOutlinedIcon from "@mui/icons-material/FmdBadOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export const Header = () => {
  /*VARIABLE*/
  const login = useContext(Context).loginCon[0];
  const username = useContext(Context).usernameCon[0];
  const [page, setPage] = useContext(Context).pageCon;
  const setAlert = useContext(Context).alertCon[1];
  const setIsMenuShown = useContext(Context).menuCon[1];
  const setIsSignShown = useContext(Context).signCon[1];
  const cart = useContext(Context).cartCon[0];
  /*FUNCTION*/
  const showHiddenMenu = () => {
    setIsMenuShown(true);
    window.scrollTo(0, 0);
  };

  const showSign = () => {
    if (!login) {
      setIsSignShown(true);
      window.scrollTo(0, 0);
    }
  };

  let photos = [];
  for (let i = 1; i <= 12; i++) {
    photos.push(`/Images/advertising/ad${i}.svg`);
  }
  /*JSX*/
  return (
    <header className={classes.header}>
      <nav className={classes.topHeader}>
        <ul className={classes.leftSide}>
          <li className={classes.account} onClick={showSign}>
            <PersonOutlinedIcon className={classes.i} />
            {login ? <label>{username}</label> : <label>حساب من</label>}
            {login ? (
              <div className={classes.account}>
                <Dropdown type="account" />
              </div>
            ) : null}
          </li>
          <li
            className={classes.basket}
            onClick={
              login
                ? null
                : () =>
                    setAlert({
                      bool: true,
                      text: "ابتدا وارد حساب خود شوید",
                      type: "warning",
                    })
            }
          >
            {login && cart.length ? (
              <div className={classes.carts}>{cart.length}</div>
            ) : null}
            <ShoppingCartOutlinedIcon className={classes.i} />
            <label>سبد من</label>
            {login && cart.length ? (
              <div className={classes.basket}>
                <Dropdown type="basket" />
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
              setPage("about");
            }}
            to="/about"
          >
            <span {...(page === "about" && { className: classes.activeNav })}>
              درباره ما
              <FmdBadOutlinedIcon />
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
              <FeedOutlinedIcon />
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={classes.link}
            onClick={() => {
              setPage("offers");
            }}
            to="/offers"
          >
            <span {...(page === "offers" && { className: classes.activeNav })}>
              پیشنهادات ویژه
              <LocalFireDepartmentOutlinedIcon />
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
              دسته بندی محصولات <CategoryOutlinedIcon />
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
              <HomeOutlinedIcon />
            </span>
          </Link>
        </li>
      </ul>
      <ul className={classes.photoContainer}>
        {photos.length &&
          photos.map((photo, index) => (
            <img
              className={classes.photo}
              key={index}
              src={photo}
              alt={photo}
              style={{
                right: (index + 1) * 10,
              }}
            />
          ))}
      </ul>
    </header>
  );
};
