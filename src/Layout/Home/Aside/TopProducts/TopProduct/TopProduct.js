import React from "react";
import classes from "./TopProduct.module.scss";
import "../../../../../../node_modules/font-awesome/css/font-awesome.min.css";

import src from '../../../../../Assets/Images/11.jpg'
const TopProduct=(props)=>(
    <>

        <div className={classes.picture}>
          <div className={classes.mainImage}>
            <img src={src} alt="Cinque Terre" width="533" height="300" />
          </div>
          <div className={classes.caption}>
            <h2>{props.price} تومان</h2>
            <p>{props.label}</p>
          </div>
          <button className={classes.details}>مشاهده جزئیات</button>
        </div>
    </>
)

export default TopProduct;
