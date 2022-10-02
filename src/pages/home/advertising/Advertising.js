/*STYLE*/
import classes from "./Advertising.module.scss";
/*IMAGE*/
import banner from "../../../assets/images/banner.svg";

export const Advertising = () => {
  let photos = [];
  for (let i = 1; i <= 12; i++) {
    photos.push(`/Images/advertising/ad${i}.svg`);
  }
  /*JSX*/
  return (
    <article className={classes.advertising}>
      <div className={classes.photoContainer}>
        {photos.length &&
          photos.map((photo, index) => (
            <img
              className={classes.photo}
              key={index}
              src={photo}
              alt={photo}
              style={{
                top: Math.random() * (500 + 80) - 80,
                right: (index + 1) * 100,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
      </div>
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
};
