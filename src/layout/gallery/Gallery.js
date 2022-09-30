/*INNER-COMPONENTS*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
/*CSS*/
import classes from "./Gallery.module.scss";
/*CHILD-COMPONENTS*/
import { Product } from "./product/Product";
import { Details } from "../details/Details";
import { Logic } from "../../logic/Logic";
/*ASSETS*/
import Checkbox from "@material-ui/core/Checkbox";
import { ChevronRightTwoTone, ChevronLeftTwoTone } from "@material-ui/icons";

export const Gallery = (props) => {
  /*STATES*/
  const [totalGallery, setTotalGallery] = useState([]);
  const [gallery, setGallery] = useState([]);
  let [minPrice, setMinPrice] = useState(0);
  let [maxPrice, setMaxPrice] = useState(500000);
  const [productsData, setProductsData] = useState([]);
  let [page, setPage] = useState(1);
  const [typeFilter, setTypeFilter] = useState([]);
  const [kindFilter, setKindFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [type, setType] = useState(["کفش"]);
  /*VARIABLES*/
  const url = "http://localhost/bsShop/gallery.php";
  const productsURL = "http://localhost/bsShop/products.php";
  const numberOfItemsToShow = 10;
  const numberOfOffsets = totalGallery.length / numberOfItemsToShow;
  /*FUNCTIONS*/
  const updateRequest = () => {
    let offset = (page - 1) * numberOfItemsToShow;
    axios
      .post(
        url,
        JSON.stringify({
          method: "gallery",
          condition: props.categoryName,
        })
      )
      .then((res) => setTotalGallery(res.data));

    axios
      .post(
        url,
        JSON.stringify({
          method: "gallery",
          condition: props.categoryName,
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
          selected: "fa_type",
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
    //alert(Logic())
  };

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

  const offsetNumber = (e) => {
    page = parseInt(e.target.innerText);
    setPage(page);
    updateRequest();
  };

  const showMinRange = (e) => {
    setMinPrice(parseInt(e.target.value));
  };

  const showMaxRange = (e) => {
    setMaxPrice(parseInt(e.target.value));
  };

  const filterHandler = (e) => {
    if (e.target.checked) {
      setType((prevArray) => [...prevArray, e.target.value]);
    } else {
      setType(type.filter((i) => i !== e.target.value));
    }
  };
  /*FREE-CODE*/
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
      <Routes>
        {productsData.map((res) => (
          <Route
            path={`/category/${res.category}/${res.fa_title}`}
            key={res.name}
            element={
              <Details
                faTitle={res.fa_title}
                image={res.image}
                price={res.price}
                desc={res.description}
                type={res.type}
                kind={res.kind}
                size={res.size}
                exi={res.existence}
                checkTheCart={props.checkTheCart}
                key={res.id}
                id={res.id}
                cart={props.cart}
              />
            }
          />
        ))}
        {productsData.map((res) => (
          <Route
            path={`/category/${res.brand}/${res.fa_title}`}
            key={res.name}
            element={
              <Details
                faTitle={res.fa_title}
                image={res.image}
                price={res.price}
                desc={res.description}
                type={res.type}
                kind={res.kind}
                size={res.size}
                exi={res.existence}
                checkTheCart={props.checkTheCart}
                key={res.id}
                id={res.id}
                cart={props.cart}
              />
            }
          />
        ))}
        {productsData.map((res) => (
          <Route
            path={`/category/${res.type}/${res.fa_title}`}
            key={res.name}
            element={
              <Details
                faTitle={res.fa_title}
                image={res.image}
                price={res.price}
                desc={res.description}
                type={res.type}
                kind={res.kind}
                size={res.size}
                exi={res.existence}
                checkTheCart={props.checkTheCart}
                key={res.id}
                id={res.id}
                cart={props.cart}
              />
            }
          />
        ))}
        <Route
          path={`/category/${props.categoryName}`}
          element={
            <article className={classes.galleries}>
              <div className={classes.gallery}>
                <h1 className={classes.title}>{props.faTitle}</h1>
                <main>
                  <h1>dsf</h1>
                  {gallery.length > 0 ? (
                    gallery.map((res) => {
                      return res.price <= maxPrice && res.price >= minPrice ? (
                        res.existence !== 0 ? (
                          <Product
                            exi={res.existence}
                            faTitle={res.fa_title}
                            price={res.price}
                            image={res.image}
                            key={res.id}
                            id={res.id}
                            categoryName={props.categoryName}
                            checkTheCart={props.checkTheCart}
                            cart={props.cart}
                          />
                        ) : (
                          <Product
                            exi={res.existence}
                            faTitle={res.fa_title}
                            price={res.price}
                            image={res.image}
                            key={res.id}
                            categoryName={props.categoryName}
                          />
                        )
                      ) : null;
                    })
                  ) : (
                    <span className={classes.nothingToShow}>
                      !موردی یافت نشد
                    </span>
                  )}
                </main>
                {gallery.length > 0 && (
                  <ul className={classes.offset}>
                    <li onClick={offsetDecrescent}>
                      <ChevronLeftTwoTone />
                    </li>
                    <li onClick={offsetFirst}>اول</li>
                    {numbers}
                    <li onClick={offsetLast}>آخر</li>
                    <li onClick={offsetCrescent}>
                      <ChevronRightTwoTone />
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
                    {typeFilter.map((res) => (
                      <tr key={res.fa_type}>
                        <td>
                          {res.fa_type}
                          <Checkbox
                            onChange={filterHandler}
                            value={res.fa_type}
                            color="primary"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table className={classes.kind}>
                  <thead>
                    <tr>
                      <td>جنس کالا</td>
                    </tr>
                  </thead>
                  <tbody>
                    {kindFilter.map((res) => (
                      <tr key={res.kind}>
                        <td>
                          {res.kind}
                          <Checkbox color="secondary" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table className={classes.brand}>
                  <thead>
                    <tr>
                      <td>برند کالا</td>
                    </tr>
                  </thead>
                  <tbody>
                    {brandFilter.map((res) => (
                      <tr key={res.brand}>
                        <td>
                          {res.brand}
                          <Checkbox color="secondary" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button onClick={updateRequest}>اعمال فیلتر</button>
              </div>
            </article>
          }
        />
      </Routes>
    </>
  );
};
