import React from "react";
import classes from "./TopProducts.module.scss";
import "../../../../../node_modules/font-awesome/css/font-awesome.min.css";

import TopProduct from "./TopProduct/TopProduct"

const TopProducts=()=>{
    const labels=[
        {id:1, price:200000, text:'فانتزیبوک'},
        {id:2, price:250000, text:'اکشن فیگور'},
        {id:3, price:250000, text:'جاکلیدی'}
    ]

    return(
        <>
            <div className={classes.topProducts}>
                <span className={classes.title}>محصولات ویژه</span>
                {labels.map(lab=>{
                    return(
                        <TopProduct label={lab.text} price={lab.price} />
                    )
                })}
            </div>
        </>
    )
}

export default TopProducts;
