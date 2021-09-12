import React from "react";
import classes from "./Advertising.module.scss";
import { useEffect } from "react/cjs/react.development";

const Advertising = () => {
  let slideIndex = 0;

  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  const plusSlides = (n) => {
    if (window.location.href === "http://localhost:3000/") {
      slideIndex += n;
      showSlides(slideIndex);
    }
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    if (n + 1 > slides.length) {
      slideIndex = 0;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    setTimeout(() => {
      plusSlides(1);
    }, 5000);
  };

  return (
    <>
      <article className={classes.slideshowContainer}>
        <div className={"mySlides " + classes.mySlides + " " + classes.fade}>
          <img src="/Images/Poster/jogging-poster.jpg" alt="poster1" />
          <h1 className={classes.poster1}>ارائه بهترین محصولات ورزشی</h1>
        </div>

        <div className={"mySlides " + classes.mySlides + " " + classes.fade}>
          <img src="/Images/Poster/track-and-field-poster.jpg" alt="poster2" />
          <h1 className={classes.poster2}>با نازلترین قیمت ها</h1>
        </div>

        <div className={"mySlides " + classes.mySlides + " " + classes.fade}>
          <img src="/Images/Poster/dart-poster.jpg" alt="poster3" />
          <h1 className={classes.poster3}>
            همکاران ما 24 ساعته برای خدمت رسانی آماده اند
          </h1>
        </div>

        <div className={"mySlides " + classes.mySlides + " " + classes.fade}>
          <img src="/Images/Poster/football-poster.jpg" alt="poster4" />
          <h1 className={classes.poster4}>
            ارسال رایگان محصولات در کمترین زمان ممکن
          </h1>
        </div>

        <div className={"mySlides " + classes.mySlides + " " + classes.fade}>
          <img src="/Images/Poster/tennis-poster.jpg" alt="poster5" />
          <h1 className={classes.poster5}>
            روی محصول خود کلیک کن تا برای همیشه مشتری ما باشی
          </h1>
        </div>
      </article>
    </>
  );
};

export default Advertising;
