/*INNER COMPONENT*/
import { useContext } from "react";
import { Context } from "../../logic/Context";
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
/*LIBRARY*/
import * as separateLib from "../../logic/Separate";
import * as cartLib from "../../logic/Cart";

export const Dropdown = (props) => {
  /*VARIABLE*/
  const sportsData = useContext(Context).typeCon.sports[0];
  const brandsData = useContext(Context).typeCon.brands[0];
  const productTypeData = useContext(Context).typeCon.productType[0];
  const setPage = useContext(Context).pageCon[1];
  const cart = useContext(Context).cartCon[0];
  const checkTheCart = useContext(Context).checkTheCartCon[0];
  /*JSX*/
  return (
    <>
      {props.type === "basket" ? (
        <span className={classes.cartDropdown}>
          <table>
            {cart.map((res, index) => (
              <tr key={index}>
                <img src={`/Images/Product/${res.image}`} alt={res.fa_title} />
                <aside>
                  <h1 className={classes.productName}>{res.fa_title}</h1>
                  <article>
                    {res.number < 2 ? (
                      <span
                        onClick={() => {
                          cartLib.deleteCartHandler(
                            res.username,
                            res.product_id
                          );
                          checkTheCart();
                        }}
                        className={classes.delete}
                      >
                        <Delete className={classes.fillDelete} />
                        <DeleteOutline className={classes.outlineDelete} />
                      </span>
                    ) : (
                      <span
                        onClick={() => {
                          cartLib.decreaseCartHandler(
                            res.username,
                            res.product_id
                          );
                          checkTheCart();
                        }}
                        className={classes.minus}
                      >
                        <RemoveCircle className={classes.fillMinus} />
                        <RemoveCircleOutline className={classes.outlineMinus} />
                      </span>
                    )}
                    <h1 className={classes.productCount}>{res.number}</h1>
                    <span
                      onClick={() => {
                        cartLib.increaseCartHandler(
                          res.username,
                          res.product_id
                        );
                        checkTheCart();
                      }}
                      className={classes.add}
                    >
                      <AddCircle className={classes.fillAdd} />
                      <AddCircleOutline className={classes.outlineAdd} />
                    </span>
                  </article>
                  <h1 className={classes.productPrice}>
                    {separateLib.separate(res.price) + " "}
                    تومان
                  </h1>
                </aside>
              </tr>
            ))}
          </table>
          <button onClick={props.signInClick} className={classes.conformShop}>
            تکمیل فرآیند خرید
          </button>
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
              {res.fa_category}
            </span>
          ))}
        </main>
      ) : props.type === "brands" ? (
        <main className={classes.dropdownContainer}>
          {brandsData.map((res, index) => (
            <span
              className={classes.dropdown}
              key={index}
              onClick={() => {
                setPage("products");
                window.location.href = "/category/" + res.brand;
              }}
            >
              {res.brand}
            </span>
          ))}
        </main>
      ) : props.type === "productType" ? (
        <main className={classes.dropdownContainer}>
          {productTypeData.map((res, index) => (
            <span
              className={classes.dropdown}
              key={index}
              onClick={() => {
                setPage("products");
                window.location.href = "/category/" + res.type;
              }}
            >
              {res.fa_type}
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
