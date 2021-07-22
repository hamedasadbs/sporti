import React from "react";
import classes from "./Notice.module.scss";
import "../../../../../node_modules/font-awesome/css/font-awesome.min.css";
import src from "../../../../Assets/Images/free-delivery.png";

const Notice=(props)=>(
    <>
        <div className={classes.notice}>
            <img src={src} />
        ارسال و بسته بندی رایگان سفارشات برای خریدهای بالاتر از ۳۰۰ هزار تومان
        </div>
    </>
)

export default Notice;
