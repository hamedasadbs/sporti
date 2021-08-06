import React, { useEffect, useState } from "react";
import classes from "./Products.module.scss";

import axios from "axios";
import Product from "./Product/Product";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Products = (props) => {
  const [topProducts, setTopProducts] = useState([]);
  const [totalGallery, setTotalGallery] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const url = "http://localhost/fantasima/index.php";
  const numberOfItemsToShow = 2;

  const updateRequest = () => {
    if (props.type == "topProducts") {
      axios
        .post(
          url,
          JSON.stringify({
            method: "select",
            table: "products",
            orderBy: "population",
            orderByType: "DESC",
            limit: 3,
          })
        )
        .then((res) => setTopProducts(res.data));
    } else {
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
    }
  };

  const numberOfOffsets = totalGallery.length / numberOfItemsToShow;

  useEffect(() => {
    updateRequest();
  }, []);

  const offsetCrescent = () => {
    if (page <= parseInt(numberOfOffsets)) {
      setPage(page + 1);
      alert(page);
      updateRequest();
    }
  };

  const offsetDecrescent = () => {
    if (page > 1) {
      setPage(page - 1);
      alert(page);
      updateRequest();
    }
  };

  const offsetFirst = () => {
    setPage(1);
    alert(page);
  };

  const offsetLast = () => {
    setPage(parseInt(numberOfOffsets));
    alert(page);
  };

  const numbers = [];
  for (let i = 0; i < numberOfOffsets; i++) {
    numbers.push(
      <li {...(page == i + 1 && { style: { backgroundColor: "gold" } })}>
        {i + 1}
      </li>
    );
  }

  const products =
    props.type == "topProducts" ? (
      <div className={classes.topProducts}>
        <span className={classes.title}>محصولات ویژه</span>
        {topProducts.map((lab) => {
          return (
            <Product btn="مشاهده جزئیات" label={lab.name} price={lab.price} />
          );
        })}
      </div>
    ) : (
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
    );

  return <>{products}</>;
};

export default Products;
