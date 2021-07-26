import React from "react";
import classes from "./Product.module.scss";

const Product = (props) => {
  let moreDetails=''
  if(props.type==1)
    moreDetails='(جزئیات بیشتر)'
    
  return(
    <>
      <div className={classes.product}>
        <div className={classes.label}>{props.label+" "+ moreDetails}</div>
        {props.type == 1 && (
          <div className={classes.moreDetails}>
            <button>جزئیات بیشتر</button>
          </div>
        )}
      </div>
    </>
  )
}

export default Product;
