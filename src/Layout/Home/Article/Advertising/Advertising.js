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
      <div className={classes.slideshowContainer}>
        <div className={"mySlides " + classes.mySlides + " " + classes.fade}>
          <img src="/Images/Poster/swimming-poster.jpg" alt="swimming" />
          <h2>ارائه بهترین محصولات ورزشی</h2>
        </div>

        <div className={"mySlides " + classes.mySlides + " " + classes.fade}>
          <img
            src="/Images/Poster/track-and-field-poster.jpg"
            alt="track-and-field"
          />
          <h2>با نازلترین قیمت ها</h2>
        </div>

        <div className={"mySlides " + classes.mySlides + " " + classes.fade}>
          <img src="/Images/Poster/dart-poster.jpg" alt="dart" />
          <h2>همکاران ما 24 ساعته برای خدمت رسانی آماده اند</h2>
        </div>

        <div className={"mySlides " + classes.mySlides + " " + classes.fade}>
          <img src="/Images/Poster/football-poster.jpg" alt="dart" />
          <h2>ارسال رایگان محصولات در کمترین زمان ممکن</h2>
        </div>

        <div className={"mySlides " + classes.mySlides + " " + classes.fade}>
          <img src="/Images/Poster/billiard-poster.jpg" alt="dart" />
          <h2>روی محصول خود کلیک کن تا برای همیشه مشتری ما باشی</h2>
        </div>
        <div className={classes.dark}></div>
      </div>
    </>
  );
};

export default Advertising;
