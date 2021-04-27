import React from "react";
import classes from "./HeadTitle.module.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import theMan from "../../Assets/Images/16847696.svg";

const HeadTitle=(props)=>{
    return (
        <>
            <article className={classes.headTitle}>
                <div className={classes.rightSide}>
                    <img src={theMan} />
                </div>
                <div className={classes.leftSide}>
                    <h1>با ایزی دارت هدف هاتو نشونه بگیر</h1>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
            برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
            باشد<br/>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است<br/>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
            برای شرایط
                    </p>
                    <button onClick={props.click} className={classes.signUp}>عضویت</button>
                </div>
            </article>
        </>
    )
};

export default HeadTitle;
