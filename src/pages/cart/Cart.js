/*INNER COMPONENT*/
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../logic/Context";
/*STYLE*/
import classes from "./Cart.module.scss";
/*CHILD COMPONENT*/
import { Product } from "./product/Product";
/*LIBRARY*/
import * as separateLib from "../../logic/Separate";

export const Cart = (props) => {
  /*STATE*/
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [price, setPrice] = useState(0);
  /*VARIABLE*/
  const username = useContext(Context).usernameCon[0];
  /*FUNCTION*/
  const checkTheCart = () => {
    axios
      .get(`http://localhost:8080/cart?username=${username}`)
      .then((res) => setCart(res.data.dataset));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    checkTheCart();
  }, []);

  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      setTotalPrice((prevState) => prevState + cart[i].price);
      setPrice(
        (prevState) =>
          prevState + (cart[i].price - cart[i].price * (cart[i].off * 0.01))
      );
    }
  }, []);

  /*JSX*/
  return (
    <article className={classes.carts}>
      <div className={classes.cart}>
        <h1 className={classes.title}>سبد خرید شما (2 کالا)</h1>
        <main>
          {cart.length > 0 ? (
            cart.map((res, index) => (
              <Product length={cart.length} card={res} id={index} key={index} />
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
            <span className={classes.value}>{separateLib.separate(price)}</span>
          </div>
          <div>
            <span className={classes.value}>
              {separateLib.separate(totalPrice - price)} تومان سود شما از این
              خرید
            </span>
          </div>
        </main>
        <button className={classes.conformShop}>تکمیل فرآیند خرید</button>
      </div>
    </article>
  );
};
