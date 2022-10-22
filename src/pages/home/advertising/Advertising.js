/*STYLE*/
import classes from "./Advertising.module.scss";
/*IMAGE*/
import banner from "../../../assets/images/banner.svg";

export const Advertising = () => (
  <article className={classes.advertising}>
    <div className={classes.bannerContainer}>
      <img className={classes.banner} src={banner} alt="banner" />
    </div>
    <div className={classes.titleContainer}>
      <h1>فروشگاه اسپورتی</h1>
      <h2>سیستم آنلاین سفارش انواع لوازم ورزشی</h2>
      <p>با امکان ارسال رایگان به سراسر نقاط کشور در کمتر از 7 روز</p>
      <button className={classes.link}>شروع خرید</button>
    </div>
  </article>
);
