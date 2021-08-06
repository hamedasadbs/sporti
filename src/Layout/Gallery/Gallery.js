import React, { useEffect, useState } from "react";
import classes from "./Gallery.module.scss";

import axios from "axios";
import Product from "../Home/Aside/Products/Product/Product";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Gallery = (props) => {
  const [totalGallery, setTotalGallery] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  let [page, setPage] = useState(1);
  const url = "http://localhost/fantasima/index.php";
  const numberOfItemsToShow = 10;

  const updateRequest = () => {
    let offset = (page - 1) * numberOfItemsToShow;
    axios
      .post(
        url,
        JSON.stringify({
          method: "select",
          table: "products",
          condition: props.name,
        })
      )
      .then((res) => setTotalGallery(res.data));

    axios
      .post(
        url,
        JSON.stringify({
          method: "select",
          table: "products",
          condition: props.name,
          orderBy: "id",
          orderByType: "DESC",
          limit: numberOfItemsToShow,
          offset: offset,
        })
      )
      .then((res) => setGallery(res.data));

    axios
      .post(
        url,
        JSON.stringify({
          method: "select",
          table: "category",
        })
      )
      .then((res) => setCategoryFilter(res.data));
  };

  const numberOfOffsets = totalGallery.length / numberOfItemsToShow;
  useEffect(() => {
    updateRequest();
  }, []);
  const offsetCrescent = () => {
    if (page < parseInt(numberOfOffsets)) {
      page += 1;
      setPage(page);
      updateRequest();
    }
  };

  const offsetDecrescent = () => {
    if (page > 1) {
      page -= 1;
      setPage(page);
      updateRequest();
    }
  };

  const offsetFirst = () => {
    page = 1;
    setPage(page);
    updateRequest();
  };

  const offsetLast = () => {
    if (numberOfOffsets < 1) page = 1;
    else page = parseInt(numberOfOffsets);
    setPage(page);
    updateRequest();
  };

  const offsetNumber = (event) => {
    page = parseInt(event.target.innerText);
    setPage(page);
    updateRequest();
  };

  const numbers = [];
  for (let i = 0; i < numberOfOffsets; i++) {
    numbers.push(
      <li
        onClick={offsetNumber}
        {...(page === i + 1 && { style: { backgroundColor: "gold" } })}
      >
        {i + 1}
      </li>
    );
  }
  return (
    <>
      <div className={classes.galleries}>
        <div className={classes.gallery}>
          <span className={classes.title}>{props.label}</span>
          <main>
            {gallery.map((gal) => {
              return (
                <Product
                  btn="افزودن به سبد خرید"
                  label={gal.name}
                  price={gal.price}
                />
              );
            })}
          </main>
          <ul className={classes.offset}>
            <li onClick={offsetDecrescent}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </li>
            <li onClick={offsetFirst}>اول</li>
            {numbers}
            <li onClick={offsetLast}>آخر</li>
            <li onClick={offsetCrescent}>
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
          </ul>
        </div>
        <aside className={classes.filter}>
          <table>
            <thead>
              <tr>
                <td>فیلتر قیمت</td>
              </tr>
            </thead>
            <tbody className={classes.price}>
              <tr>
                <td>
                  555
                  <input type="checkbox" />
                </td>
              </tr>
            </tbody>
          </table>
          <table className={classes.type}>
            <thead>
              <tr>
                <td>فیلتر نوع کالا</td>
              </tr>
            </thead>
            <tbody className={classes.type}>
              {categoryFilter.map((filter) => {
                return (
                  <tr>
                    <td>
                      {filter.label}
                      <input type="checkbox" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </aside>
      </div>
    </>
  );
};

export default Gallery;
