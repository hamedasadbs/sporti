import React from "react";
import classes from "./Bulletin.module.scss";
import src from "../../../../Assets/Images/free-delivery.png";

const Bulletin = (props) => (
  <>
    <div className={classes.bulletin}>
      <img alt={src} src={src} />
      ارسال و بسته بندی رایگان سفارشات برای خریدهای بالاتر از ۳۰۰ هزار تومان
    </div>
  </>
);

export default Bulletin;
