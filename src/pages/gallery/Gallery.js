/*INNER COMPONENT*/
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../logic/Context";
/*STYLE*/
import classes from "./Gallery.module.scss";
/*CHILD COMPONENT*/
import { Product } from "./product/Product";
/*MUI*/
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
/*ICON*/
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
/*LIBRARY*/
import * as separateLib from "../../logic/Separate";

export const Gallery = (props) => {
  /*STATE*/
  const [totalGallery, setTotalGallery] = useState([]);
  const [gallery, setGallery] = useState([]);
  let [minPrice, setMinPrice] = useState(0);
  let [maxPrice, setMaxPrice] = useState(500000);
  let [page, setPage] = useState(1);
  const [type, setType] = useState("none");
  const [kind, setKind] = useState("none");
  const [brand, setBrand] = useState("none");
  /*VARIABLE*/
  const numberOfItemsToShow = 10;
  const numberOfOffsets = totalGallery.length / numberOfItemsToShow;
  const brandsData = useContext(Context).typeCon.brands[0];
  const productTypeData = useContext(Context).typeCon.productType[0];
  const productKindData = useContext(Context).typeCon.productKind[0];
  /*FUNCTION*/
  const updateRequest = () => {
    let offset = (page - 1) * numberOfItemsToShow;
    axios
      .post("http://localhost:8080/products", {
        category: props.category,
      })
      .then((res) => {
        setTotalGallery(res.data.pro);
      });
    axios
      .post("http://localhost:8080/products", {
        category: props.category,
        orderBy: "id",
        orderByType: "DESC",
        limit: numberOfItemsToShow,
        offset: offset,
        type: type,
        kind: kind,
        brand: brand,
      })
      .then((res) => {
        setGallery(res.data.pro);
      });
  };

  useEffect(() => {
    updateRequest();
  }, [type, kind, brand]);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const typeHandler = (e) => {
    setType(e.target.value);
  };

  const kindHandler = (e) => {
    setKind(e.target.value);
  };

  const brandHandler = (e) => {
    setBrand(e.target.value);
  };
  /*JSX*/
  return (
    <article className={classes.galleries}>
      <div className={classes.gallery}>
        <h1 className={classes.title}>{props.faTitle}</h1>
        <main>
          {gallery.length > 0 ? (
            gallery.map((res, index) => {
              return res.price <= maxPrice && res.price >= minPrice ? (
                <Product
                  checkTheCart={props.checkTheCart}
                  card={res}
                  key={index}
                />
              ) : null;
            })
          ) : (
            <span className={classes.nothingToShow}>!موردی یافت نشد</span>
          )}
        </main>
        {gallery.length > 0 && (
          <ul className={classes.offset}>
            <li onClick={offsetDecrescent}>
              <KeyboardArrowLeftIcon />
            </li>
            <li onClick={offsetFirst}>
              <KeyboardDoubleArrowLeftIcon />
            </li>
            {numbers}
            <li onClick={offsetLast}>
              <KeyboardDoubleArrowRightIcon />
            </li>
            <li onClick={offsetCrescent}>
              <KeyboardArrowRightIcon />
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
                <span>
                  {separateLib.separate(minPrice) +
                    " - " +
                    separateLib.separate(maxPrice)}
                </span>
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
        <button onClick={() => (window.location.href = window.location.href)}>
          حذف همه فیلترها
        </button>
        <table className={classes.type}>
          <thead>
            <tr>
              <td>نوع کالا</td>
            </tr>
          </thead>
          <tbody>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={typeHandler}
            >
              {productTypeData.map((res) => (
                <tr key={res.fa_type}>
                  <td>
                    <FormControlLabel
                      value={res.type}
                      control={<Radio />}
                      label={<h1>{res.fa_type}</h1>}
                    />
                  </td>
                </tr>
              ))}
            </RadioGroup>
          </tbody>
        </table>
        <table className={classes.kind}>
          <thead>
            <tr>
              <td>جنس کالا</td>
            </tr>
          </thead>
          <tbody>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={kindHandler}
            >
              {productKindData.map((res, index) => (
                <tr key={index}>
                  <td>
                    <FormControlLabel
                      value={res.kind}
                      control={<Radio />}
                      label={<h1>{res.kind}</h1>}
                    />
                  </td>
                </tr>
              ))}
            </RadioGroup>
          </tbody>
        </table>
        <table className={classes.brand}>
          <thead>
            <tr>
              <td>برند کالا</td>
            </tr>
          </thead>
          <tbody>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={brandHandler}
            >
              {brandsData.map((res, index) => (
                <tr key={index}>
                  <td>
                    <FormControlLabel
                      value={res.brand}
                      control={<Radio />}
                      label={<h1>{res.brand}</h1>}
                    />
                  </td>
                </tr>
              ))}
            </RadioGroup>
          </tbody>
        </table>
      </div>
    </article>
  );
};
