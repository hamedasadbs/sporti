import React from "react";
import classes from "./Notice.module.scss";
import src from "../../../../Assets/Images/free-delivery.png";

const Notice = (props) => (
  <>
    <div className={classes.notice}>
      <img alt={src} src={src} />
      ارسال و بسته بندی رایگان سفارشات برای خریدهای بالاتر از ۳۰۰ هزار تومان
    </div>
  </>
);

export default Notice;
