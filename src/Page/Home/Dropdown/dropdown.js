/*INNER-COMPONENTS*/
import { useEffect } from "react";
/*CSS*/
import style from "./dropdown.module.scss";

export const Dropdown = () => {
  const scroller = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  };
  useEffect(() => {
    scroller();
  }, []);
  const scrollHandler = () => {
    scroller();
  };

  return (
    <article className={style.dropdown}>
      <a onClick={scrollHandler} href="#qa">
        <i className="downArrow fa fa-angle-down"></i>
      </a>
    </article>
  );
};
