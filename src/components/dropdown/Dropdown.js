/*INNER COMPONENT*/
import { useContext } from "react";
import { Context } from "../../logic/Context";
import { Link } from "react-router-dom";
/*STYLE*/
import classes from "./Dropdown.module.scss";
/*ICON*/
import {
  Delete,
  DeleteOutline,
  AddCircle,
  AddCircleOutline,
  RemoveCircle,
  RemoveCircleOutline,
} from "@material-ui/icons";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import SportsKabaddiOutlinedIcon from "@mui/icons-material/SportsKabaddiOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import SportsGymnasticsOutlinedIcon from "@mui/icons-material/SportsGymnasticsOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
/*LIBRARY*/
import * as cookieLib from "../../logic/Cookie";
import * as separateLib from "../../logic/Separate";
import * as cartLib from "../../logic/Cart";

export const Dropdown = (props) => {
  /*VARIABLE*/
  const sportsData = useContext(Context).typeCon.sports[0];
  const userInfo = useContext(Context).userInfoCon[0];
  const setLogin = useContext(Context).loginCon[1];
  const setAlert = useContext(Context).alertCon[1];
  const setPage = useContext(Context).pageCon[1];
  const cart = useContext(Context).cartCon[0];
  const checkTheCart = useContext(Context).checkTheCartCon[0];

  const increaseHandler = (product_id) => {
    cartLib.increaseCartHandler(userInfo.username, product_id);
    checkTheCart();
    checkTheCart();
  };

  const decreaseHandler = (product_id) => {
    cartLib.decreaseCartHandler(userInfo.username, product_id);
    checkTheCart();
    checkTheCart();
  };

  const deleteHandler = (product_id) => {
    setAlert({
      bool: true,
      text: "کالا از سبد حذف شد",
      type: "info",
    });
    cartLib.deleteCartHandler(userInfo.username, product_id);
    checkTheCart();
    checkTheCart();
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    if (window.confirm("آیا میخواهید از این حساب خارج شوید؟")) {
      cookieLib.setCookie("login", "", -100);
      setLogin(false);
      cookieLib.setCookie("user", "", -100);
      cookieLib.setCookie("pass", "", -100);
    }
  };

  /*JSX*/
  return (
    <>
      {props.type === "basket" ? (
        <span className={classes.cartDropdown}>
          <Link to="/cart" className={classes.goToCart}>
            <KeyboardDoubleArrowLeftOutlinedIcon className={classes.i} />
            <h1>مشاهده سبد خرید</h1>
          </Link>
          <article
            className={
              cart.length > 2
                ? classes.cartContainer
                : classes.cartContainer + " " + classes.noScrollbar
            }
          >
            {cart.map((res, index) => (
              <span key={index}>
                <img src={res.image} alt={res.fa_title} />
                <aside>
                  <h1 className={classes.productName}>{res.fa_title}</h1>
                  <article className={classes.changeCartContainer}>
                    {res.number < 2 ? (
                      <button
                        onClick={() => deleteHandler(res.product_id)}
                        className={classes.delete}
                      >
                        <Delete className={classes.fillDelete} />
                        <DeleteOutline className={classes.outlineDelete} />
                      </button>
                    ) : (
                      <button
                        onClick={() => decreaseHandler(res.product_id)}
                        className={classes.minus}
                      >
                        <RemoveCircle className={classes.fillMinus} />
                        <RemoveCircleOutline className={classes.outlineMinus} />
                      </button>
                    )}
                    <h1 className={classes.productCount}>{res.number}</h1>
                    <button
                      onClick={() => increaseHandler(res.product_id)}
                      className={classes.add}
                    >
                      <AddCircle className={classes.fillAdd} />
                      <AddCircleOutline className={classes.outlineAdd} />
                    </button>
                  </article>
                  <h1 className={classes.productPrice}>
                    {separateLib.separate(res.price) + " "}
                    تومان
                  </h1>
                </aside>
              </span>
            ))}
          </article>
          <button onClick={props.signInClick} className={classes.conformShop}>
            ادامه فرآیند خرید
          </button>
        </span>
      ) : props.type === "account" ? (
        <span className={classes.cartDropdown}>
          <Link to="/cart" className={classes.link}>
            <h1>{userInfo && userInfo.fullName.replace("_", " ")}</h1>
            <ManageAccountsOutlinedIcon className={classes.i} />
          </Link>
          <Link to="/cart" className={classes.link}>
            <h1>کیف پول</h1>
            <AccountBalanceWalletOutlinedIcon className={classes.i} />
          </Link>
          <Link to="/cart" className={classes.link}>
            <h1>علاقه مندی ها</h1>
            <FavoriteBorderOutlinedIcon className={classes.i} />
          </Link>
          <Link to="/cart" className={classes.link}>
            <h1>تراکنش های مالی</h1>
            <CreditCardOutlinedIcon className={classes.i} />
          </Link>
          <Link to="/cart" className={classes.link}>
            <h1>مدیریت اقساط</h1>
            <InsertDriveFileOutlinedIcon className={classes.i} />
          </Link>
          <Link to="/cart" className={classes.link}>
            <h1>تاریخچه سفارشات</h1>
            <RestoreOutlinedIcon className={classes.i} />
          </Link>
          <Link to="/cart" className={classes.link}>
            <h1>دیدگاه های من</h1>
            <CommentOutlinedIcon className={classes.i} />
          </Link>
          <Link to="/cart" className={classes.link}>
            <h1>پیام ها</h1>
            <SendOutlinedIcon className={classes.i} />
          </Link>
          <Link
            to="/"
            onClick={logoutHandler}
            className={classes.link + " " + classes.logoutLink}
          >
            <h1>خروج از حساب</h1>
            <LogoutOutlinedIcon className={classes.i} />
          </Link>
        </span>
      ) : props.type === "sports" ? (
        <main className={classes.dropdownContainer}>
          {sportsData.map((res, index) => (
            <span
              className={classes.dropdown}
              key={index}
              onClick={() => {
                setPage("products");
                window.location.href = "/category/" + res.category;
              }}
            >
              <h1>
                {res.fa_category}
                {res.category === "football" ? (
                  <SportsSoccerOutlinedIcon className={classes.i} />
                ) : res.category === "wrestling" ? (
                  <SportsKabaddiOutlinedIcon className={classes.i} />
                ) : res.category === "basketball" ? (
                  <SportsBasketballOutlinedIcon className={classes.i} />
                ) : res.category === "body-building" ? (
                  <FitnessCenterOutlinedIcon className={classes.i} />
                ) : res.category === "taekwondo" ? (
                  <SportsGymnasticsOutlinedIcon className={classes.i} />
                ) : (
                  <SportsKabaddiOutlinedIcon className={classes.i} />
                )}
              </h1>
            </span>
          ))}
        </main>
      ) : props.type === "online" ? (
        <button className={classes.logout} onClick={props.logoutClick}>
          خروج
        </button>
      ) : props.type === "description" ? (
        <div
          {...(props.dis === false
            ? { className: classes.displayNone }
            : { className: classes.description })}
        >
          {props.desc}
        </div>
      ) : props.type === "features" ? (
        <div
          {...(props.dis === false
            ? { className: classes.displayNone }
            : { className: classes.features })}
        >
          <p>قیمت محصول(تومان): {props.price}</p>
          <p>نوع محصول: {props.ty}</p>
          <p>جنس محصول: {props.kind}</p>
          <p>اندازه محصول(طول*عرض*ارتفاع): {props.size}</p>
        </div>
      ) : props.type === "comments" ? (
        <div
          {...(props.dis === false
            ? { className: classes.displayNone }
            : { className: classes.comments })}
        >
          نظری وجود ندارد
        </div>
      ) : null}
    </>
  );
};
