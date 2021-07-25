import React from "react";
import classes from "./Advertising.module.scss";
import { useEffect } from "react/cjs/react.development";

import s1 from "../../../../Assets/Images/s1.jpeg";
import s2 from "../../../../Assets/Images/s2.jpeg";
import s3 from "../../../../Assets/Images/s3.jpeg";

const Advertising = () => {
  var slideIndex = 1;
  useEffect(() => {
    showSlides(slideIndex);
  });

  const plusSlides = (n) => {
    showSlides((slideIndex += n));
  };

  const currentSlide = (n) => {
    showSlides((slideIndex = n));
  };

  const showSlides = (n) => {
    var i;
    const slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  };

  return (
    <>
      <div className={classes.slideshowContainer}>
        <div className={"mySlides " + classes.mySlides + " " + classes.fade}>
          <img alt={s1} src={s1} style={{ width: "100%" }} />
        </div>

        <div className={"mySlides " + classes.mySlides + " " + classes.fade}>
          <img alt={s2} src={s2} style={{ width: "100%" }} />
        </div>

        <div className={"mySlides " + classes.mySlides + " " + classes.fade}>
          <img alt={s3} src={s3} style={{ width: "100%" }} />
        </div>

        <a className={classes.prev} onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className={classes.next} onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>
    </>
  );
};

export default Advertising;
