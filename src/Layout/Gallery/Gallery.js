import React, { useEffect, useState } from "react";
import classes from "./Gallery.module.scss";

import axios from "axios";
import Product from "./Product/Product";
import Details from "../Details/Details";

import { Link, Switch, Route } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Gallery = (props) => {
  const [totalGallery, setTotalGallery] = useState([]);
  const [gallery, setGallery] = useState([]);
  let [minPrice, setMinPrice] = useState(0);
  let [maxPrice, setMaxPrice] = useState(500000);
  const [productsData, setProductsData] = useState([]);
  let [page, setPage] = useState(1);
  const url = "http://localhost/bsShop/gallery.php";
  const productsURL = "http://localhost/bsShop/products.php";
  const numberOfItemsToShow = 10;

  const [typeFilter, setTypeFilter] = useState([]);
  const [kindFilter, setKindFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);

  const updateRequest = () => {
    let offset = (page - 1) * numberOfItemsToShow;
    axios
      .post(
        url,
        JSON.stringify({
          method: "gallery",
          condition: props.name,
        })
      )
      .then((res) => setTotalGallery(res.data));

    axios
      .post(
        url,
        JSON.stringify({
          method: "gallery",
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
          method: "gallery",
          selected: "type",
        })
      )
      .then((res) => setTypeFilter(res.data));

    axios
      .post(
        url,
        JSON.stringify({
          method: "gallery",
          selected: "kind",
        })
      )
      .then((res) => setKindFilter(res.data));

    axios
      .post(
        url,
        JSON.stringify({
          method: "gallery",
          selected: "brand",
        })
      )
      .then((res) => setBrandFilter(res.data));
  };

  const numberOfOffsets = totalGallery.length / numberOfItemsToShow;
  useEffect(() => {
    axios.post(productsURL).then((res) => setProductsData(res.data));
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
        key={i}
        onClick={offsetNumber}
        {...(page === i + 1 && { className: classes.hoveredOffset })}
      >
        {i + 1}
      </li>
    );
  }
  return (
    <>
      <Switch>
        {productsData.map((res) => {
          return (
            <Route
              path={`/category/${res.category}/${res.name}`}
              key={res.name}
            >
              <Details title={res.name} />
            </Route>
          );
        })}
        <Route path={`/category/${props.name}`}>
          <article className={classes.galleries}>
            <div className={classes.gallery}>
              <h1 className={classes.title}>{props.label}</h1>
              <main>
                {gallery.length > 0 ? (
                  gallery.map((gal) => {
                    return gal.price <= maxPrice && gal.price >= minPrice ? (
                      gal.existence === "1" ? (
                        <Product
                          exi={true}
                          label={gal.name}
                          price={gal.price}
                          image={gal.image}
                          key={gal.name}
                          url={props.name}
                        />
                      ) : (
                        <Product
                          exi={false}
                          label={gal.name}
                          price={gal.price}
                          image={gal.image}
                          key={gal.name}
                        />
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
            <div className={classes.filter}>
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
                  {typeFilter.map((filter) => {
                    return (
                      <tr key={filter.type}>
                        <td>
                          {filter.type}
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
                  {kindFilter.map((filter) => {
                    return (
                      <tr key={filter.kind}>
                        <td>
                          {filter.kind}
                          <input type="checkbox" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <table className={classes.brand}>
                <thead>
                  <tr>
                    <td>برند کالا</td>
                  </tr>
                </thead>
                <tbody>
                  {brandFilter.map((filter) => {
                    return (
                      <tr key={filter.brand}>
                        <td>
                          {filter.brand}
                          <input type="checkbox" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <button
                onClick={() => {
                  alert(typeof maxPrice);
                }}
              >
                اعمال فیلتر
              </button>
            </div>
          </article>
        </Route>
      </Switch>
    </>
  );
};

export default Gallery;
