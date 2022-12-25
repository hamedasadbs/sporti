/*INNER COMPONENT*/
import { useEffect, useState, useContext } from "react";
import { Context } from "../../logic/Context";
/*STYLE*/
import classes from "./Cart.module.scss";
/*CHILD COMPONENT*/
import { Product } from "./product/Product";
/*LIBRARY*/
import * as separateLib from "../../logic/Separate";

export const Cart = () => {
  /*STATE*/
  const [totalPrice, setTotalPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [load, setLoad] = useState(false);
  /*VARIABLE*/
  const cart = useContext(Context).cartCon[0];
  /*FUNCTION*/
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (load) {
      setTotalPrice(0);
      setPrice(0);
      for (let i = 0; i < cart.length; i++) {
        setTotalPrice(
          (prevState) => prevState + cart[i].price * cart[i].number
        );
        setPrice(
          (prevState) =>
            prevState +
            (cart[i].price - cart[i].price * (cart[i].off * 0.01)) *
              cart[i].number
        );
      }
    }
  }, [load, cart]);

  setTimeout(() => {
    setLoad(true);
  }, 1000);

  /*JSX*/
  if (load) {
    return (
      <article className={classes.carts}>
        <div className={classes.cart}>
          <h1 className={classes.title}>سبد خرید شما (2 کالا)</h1>
          <main>
            {cart.length > 0 ? (
              cart.map((res, index) => (
                <Product
                  length={cart.length}
                  card={res}
                  id={index}
                  key={index}
                />
              ))
            ) : (
              <span className={classes.nothingToShow}>!موردی یافت نشد</span>
            )}
          </main>
        </div>
        <div className={classes.filter}>
          <main className={classes.details}>
            <div>
              <span className={classes.label}>قیمت {cart.length} رقم کالا</span>
              <span className={classes.value}>
                {separateLib.separate(totalPrice)}
              </span>
            </div>
            <div>
              <span className={classes.label}>مبلغ قابل پرداخت</span>
              <span className={classes.value}>
                {separateLib.separate(price)}
              </span>
            </div>
            <div>
              <span className={classes.value}>
                {separateLib.separate(totalPrice - price)} تومان سود شما از این
                خرید
              </span>
            </div>
          </main>
          <button className={classes.conformShop}>ادامه فرآیند خرید</button>
        </div>
      </article>
    );
  } else return null;
};
