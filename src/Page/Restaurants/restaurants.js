/*INNER-COMPONENTS*/
import axios from "axios";
import { useEffect, useState } from "react";
/*CSS*/
import style from "./restaurants.module.scss";
/*CHILD-COMPONENTS*/
import { Restaurant } from "./Restaurant/restaurant";

export const Restaurants = () => {
  const url = "http://localhost/boofe/restaurants.php";
  const [totalRestaurants, setTotalRestaurants] = useState([]);
  let [page, setPage] = useState(1);
  const numberOfItemsToShow = 6;
  const numberOfOffsets =
    Math.floor(totalRestaurants.length / numberOfItemsToShow) + 1;
  let [startOffset, setStartOffset] = useState(0);
  let [endOffset, setEndOffset] = useState(numberOfItemsToShow);

  const updateRestaurants = () => {
    setStartOffset((page - 1) * numberOfItemsToShow);
    startOffset = (page - 1) * numberOfItemsToShow;
    setEndOffset(startOffset + numberOfItemsToShow);
    endOffset = startOffset + numberOfItemsToShow;
  };

  useEffect(() => {
    axios
      .post(
        url,
        JSON.stringify({
          goal: "get",
        })
      )
      .then((res) => setTotalRestaurants(res.data));
    updateRestaurants();
  }, []);

  const offsetCrescent = () => {
    if (page < parseInt(numberOfOffsets)) {
      page += 1;
      setPage(page);
      updateRestaurants();
    }
  };

  const offsetDecrescent = () => {
    if (page > 1) {
      page -= 1;
      setPage(page);
      updateRestaurants();
    }
  };

  const offsetFirst = () => {
    page = 1;
    setPage(page);
    updateRestaurants();
  };

  const offsetLast = () => {
    if (numberOfOffsets < 1) page = 1;
    else page = numberOfOffsets;
    setPage(page);
    updateRestaurants();
  };

  const offsetNumber = (e) => {
    page = parseInt(e.target.innerText);
    setPage(page);
    updateRestaurants();
  };

  const numbers = [];
  for (let i = 0; i < numberOfOffsets; i++) {
    numbers.push(
      <li
        key={i}
        onClick={offsetNumber}
        {...(page === i + 1 && { className: style.hoveredOffset })}
      >
        {i + 1}
      </li>
    );
  }

  return (
    <div className={style.restaurants}>
      <main>
        {totalRestaurants.slice(startOffset, endOffset).map((res, index) => (
          <Restaurant
            img={res.image}
            stars={res.star}
            points={res.point}
            address={res.address}
            title={res.title}
            index={index}
            key={index}
            info1={res.info1}
            info2={res.info2}
          />
        ))}
      </main>
      {totalRestaurants.length > 0 && (
        <ul className={style.offset}>
          <li onClick={offsetDecrescent}>
            <i className="fa fa-angle-left"></i>
          </li>
          <li onClick={offsetFirst}>اول</li>
          {numbers}
          <li onClick={offsetLast}>آخر</li>
          <li onClick={offsetCrescent}>
            <i className="fa fa-angle-right"></i>
          </li>
        </ul>
      )}
    </div>
  );
};
