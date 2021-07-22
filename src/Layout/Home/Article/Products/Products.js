import React from "react";
import classes from "./Products.module.scss";
import "../../../../../node_modules/font-awesome/css/font-awesome.min.css";

import Product from "./Product/Product"

const Products=()=>{
    const labels=[
        {id:1, name:'fantasy book', text:'فانتزیبوک'},
        {id:2, name:'action figour', text:'اکشن فیگور'},
        {id:3, name:'jakelidi', text:'جاکلیدی'},
        {id:4, name:'zivar alat', text:'زیورآلات'},
        {id:5, name:'t-shirt', text:'فانتزیپوش (با طرح دلخواه)'},
        {id:6, name:'game and stuffs', text:'بازی و تجهیزات'},
        {id:7, name:'fantasy art', text:'فانتزیآرت'},
        {id:8, name:'customs and character stuffs', text:'پوشاک و تجهیزات شخصیت ها'},
        {id:9, name:'pixels', text:'پیکسل ها'},
        {id:10, name:'mobile stuffs', text:'قاب موبایل (با طرح دلخواه)'},
        {id:11, name:'mug', text:'ماگ (با طرح دلخواه)'},
    ]

    return(
        <>
            <div className={classes.products}>
                {labels.map(lab=>{
                    return(
                        <Product label={lab.text} type={lab.name} />
                    )
                })}
            </div>
        </>
    )
}

export default Products;
