/*inner components*/
import React, { useEffect } from "react";
/*css*/
import style from "./pagination.module.scss";
/*child components*/
import * as dark from "../../Middleware/Library/darkMode";

export const Pagination = (props) => {
  /*variables*/
  const page = props.numberOfPages;
  /*dark mode*/
  useEffect(() => {
    dark.darkMode(style.pagination, style.pagination_dark, props.darkMode);
  }, [props.darkMode]);
  /*check current page*/
  useEffect(() => {
    const list = document.getElementsByClassName(style.list);
    const pages = list[props.index].getElementsByClassName("pageLink");

    for (let i = 0; i < pages.length; i++) {
      pages[i].classList.remove(style.activePage);
      if (parseInt(pages[i].id) === props.currentPage) {
        pages[i].classList.add(style.activePage);
      }
    }
  }, [props.currentPage, props]);
  /*set active page*/
  const activePageHandler = (e) => {
    if (e.currentTarget.id === "previous") {
      if (props.currentPage > 1) {
        props.pageHandler(props.currentPage - 1);
      }
    } else if (e.currentTarget.id === "next") {
      if (props.currentPage < page) {
        props.pageHandler(props.currentPage + 1);
      }
    } else {
      props.pageHandler(parseInt(e.currentTarget.id));
    }
  };
  /*check index*/
  const indexHandler = () => {
    let span = [];
    if (page > 1) {
      if (page < 6) {
        for (let i = 2; i < page; i++) {
          span.push(
            <span
              key={i}
              className="pageLink"
              id={i.toString()}
              onClick={activePageHandler}
            >
              {i}
            </span>
          );
        }
      } else {
        span.push(
          <span key={2} className="pageLink" id="2" onClick={activePageHandler}>
            {2}
          </span>
        );

        if (props.currentPage > 2 && props.currentPage < page - 1) {
          span.push(<div className={style.threeDots}>...</div>);
          span.push(
            <span
              key={props.currentPage}
              className="pageLink"
              id={props.currentPage.toString()}
              onClick={activePageHandler}
            >
              {props.currentPage}
            </span>
          );
          span.push(<div className={style.threeDots}>...</div>);
        } else {
          span.push(<div className={style.threeDots}>...</div>);
        }

        span.push(
          <span
            key={page - 1}
            className="pageLink"
            id={(page - 1).toString()}
            onClick={activePageHandler}
          >
            {page - 1}
          </span>
        );
      }
      return span;
    }
  };
  /*render component*/
  return (
    <nav className={style.pagination}>
      <div className={style.list}>
        <span id="previous" onClick={activePageHandler}>
          <i className="fa fa-angle-left"></i>
        </span>
        {
          <span className="pageLink" id="1" onClick={activePageHandler}>
            1
          </span>
        }

        {indexHandler()}

        {page > 1 && (
          <span
            className="pageLink"
            id={page.toString()}
            onClick={activePageHandler}
          >
            {page}
          </span>
        )}
        <span id="next" onClick={activePageHandler}>
          <i className="fa fa-angle-right"></i>
        </span>
      </div>
    </nav>
  );
};
