import React from "react";
import classes from "./Bulletin.module.scss";

const Bulletin = () => (
  <>
    <div className={classes.bulletin}>
      <img src="/free-delivery.png" alt="free-delivery" />
      ارسال و بسته بندی رایگان سفارشات برای خریدهای بالاتر از ۳۰۰ هزار تومان
    </div>
  </>
);

export default Bulletin;
