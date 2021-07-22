import React from "react";
import classes from "./Product.module.scss";
import "../../../../../../node_modules/font-awesome/css/font-awesome.min.css";

import img1 from '../../../../../Assets/Images/11.jpg'
const Product=(props)=>(
    <>
        <div className={classes.product}>
            
            <div className={classes.label}>
                {props.label}
            </div>
            {(props.type=='mug' || props.type=='t-shirt' || props.type=='mobile stuffs')
                &&
                <div className={classes.moreDetails}>
                    <button>جزئیات بیشتر</button>
                </div>
            }
        </div>
    </>
)

export default Product;
