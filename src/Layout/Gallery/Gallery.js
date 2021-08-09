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
  let [minPrice, setMinPrice] = useState(0);
  let [maxPrice, setMaxPrice] = useState(500000);
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
    window.scrollTo(0, 0);
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

  const showMinRange = (e) => {
    setMinPrice(parseInt(e.target.value));
  };

  const showMaxRange = (e) => {
    setMaxPrice(parseInt(e.target.value));
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
            {gallery.length > 0 ? (
              gallery.map((gal) => {
                return gal.price <= maxPrice && gal.price >= minPrice ? (
                  gal.existence == 1 ? (
                    <Product
                      btn="افزودن به سبد خرید"
                      label={gal.name}
                      price={gal.price}
                    />
                  ) : (
                    <Product btn="ناموجود" label={gal.name} price={gal.price} />
                  )
                ) : null;
              })
            ) : (
              <span className={classes.nothingToShow}>!موردی یافت نشد</span>
            )}
          </main>
          {gallery.length > 0 && (
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
          )}
        </div>
        <aside className={classes.filter}>
          <table className={classes.price}>
            <thead>
              <tr>
                <td>قیمت (تومان)</td>
              </tr>
            </thead>
            <tbody className={classes.price}>
              <tr>
                <td>
                  <span>{minPrice + " - " + maxPrice}</span>
                  <div className={classes.priceBar}>
                    <input
                      onChange={showMinRange}
                      type="range"
                      min="0"
                      max="500000"
                      value={minPrice}
                      step="10000"
                    />
                    <input
                      onChange={showMaxRange}
                      type="range"
                      min="0"
                      max="500000"
                      value={maxPrice}
                      step="10000"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <table className={classes.type}>
            <thead>
              <tr>
                <td>نوع کالا</td>
              </tr>
            </thead>
            <tbody>
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
          <table className={classes.kind}>
            <thead>
              <tr>
                <td>جنس کالا</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  فلزی
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>
                  پلاستیکی
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>
                  سفالی
                  <input type="checkbox" />
                </td>
              </tr>
            </tbody>
          </table>
          <table className={classes.brand}>
            <thead>
              <tr>
                <td>برند کالا</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  آدیداس
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>
                  نایکی
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>
                  پوما
                  <input type="checkbox" />
                </td>
              </tr>
              <tr className={classes.operation}>
                <td>
                  <button
                    onClick={() => {
                      alert(typeof maxPrice);
                    }}
                  >
                    اعمال فیلتر
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </aside>
      </div>
    </>
  );
};

export default Gallery;
