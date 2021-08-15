import React from "react";
import classes from "./Advertising.module.scss";
import { useEffect } from "react/cjs/react.development";

const Advertising = () => {
  let slideIndex = 0;

  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  const plusSlides = (n) => {
    slideIndex+=n
    showSlides(slideIndex);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    if (n+1 > slides.length) {
      slideIndex = 0;
    }
    /*if (n < 1) {
      slideIndex = slides.length;
    }*/
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    setTimeout(()=>{plusSlides(1)}, 5000);
  };

  return (
    <>
      <div className={classes.slideshowContainer}>
        <div className={"mySlides " + classes.mySlides + " " + classes.fade}>
          <img src="/Images/Poster/swimming-poster.jpg" alt="swimming" />
        </div>

        <div className={"mySlides " + classes.mySlides + " " + classes.fade}>
          <img
            src="/Images/Poster/track-and-field-poster.jpg"
            alt="track-and-field"
          />
        </div>

        <div className={"mySlides " + classes.mySlides + " " + classes.fade}>
          <img src="/Images/Poster/dart-poster.jpg" alt="dart" />
        </div>

        <div className={"mySlides " + classes.mySlides + " " + classes.fade}>
          <img src="/Images/Poster/football-poster.jpg" alt="dart" />
        </div>

        <div className={"mySlides " + classes.mySlides + " " + classes.fade}>
          <img src="/Images/Poster/billiard-poster.jpg" alt="dart" />
        </div>
        <div className={classes.dark}></div>
      </div>
    </>
  );
};

export default Advertising;
