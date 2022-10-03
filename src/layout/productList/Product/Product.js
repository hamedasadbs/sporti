/*INNER COMPONENT*/
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../../logic/Context";
/*STYLE*/
import classes from "./Product.module.scss";
/*ICON*/
import { Star, Favorite } from "@material-ui/icons";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
/*LIBRARY*/
import * as separateLib from "../../../logic/Separate";

export const Product = (props) => {
  /*STATE*/
  const [liked, setLiked] = useState([]);
  const [loaded, setLoaded] = useState(false);
  /*VARIABLE*/
  const login = useContext(Context).loginCon[0];
  const username = useContext(Context).usernameCon[0];
  /*FUNCTION*/
  useEffect(() => {
    checkTheLiked();
  }, [liked]);

  setTimeout(() => {
    setLoaded(true);
  }, 500);

  const checkTheLiked = () => {
    axios
      .get(`http://localhost:8080/like?username=${username}`)
      .then((res) => {
        setLiked(res.data.dataset);
      })
      .catch((err) => alert(err));
  };

  const addToLiked = (id) => {
    if (login) {
      axios
        .post("http://localhost:8080/like", {
          productId: id,
          username: username,
        })
        .then(() => {
          checkTheLiked();
        });
    } else alert("ابتدا وارد حساب خود شوید");
  };
  /*JSX*/
  if (loaded)
    return (
      <div className={classes.product}>
        <span className={classes.icons}>
          {liked.some((e) => e.product_id === props.card.id) ? (
            <Favorite
              onClick={() => {
                addToLiked(props.card.id);
              }}
              className={classes.liked}
            />
          ) : (
            <Favorite
              onClick={() => {
                addToLiked(props.card.id);
              }}
              className={classes.notLiked}
            />
          )}

          <div className={classes.stars}>
            {[...Array(5 - parseInt(props.card.population))].map((x, index) => (
              <Star key={index} className={classes.star} />
            ))}
            {[...Array(parseInt(props.card.population))].map((x, index) => (
              <Star key={index} className={classes.lightStar} />
            ))}
          </div>
        </span>
        <img
          src={`/Images/Product/${props.card.image}`}
          alt={props.card.fa_title}
        />
        <div className={classes.caption}>
          <h3 className={classes.productName}>{props.card.fa_title}</h3>
          <h5 className={classes.center}>
            <LocalMallOutlinedIcon className={classes.i} />
            موجود در فروشگاه اسپورتی
          </h5>
          <span className={classes.productPrice}>
            {props.card.off ? (
              <div className={classes.priceContainer}>
                <h4 className={classes.price}>
                  {separateLib.separate(
                    props.card.price - props.card.price * (props.card.off / 100)
                  )}{" "}
                  تومان
                </h4>
                <h4 className={classes.priceWithOff}>
                  {separateLib.separate(props.card.price)} تومان
                </h4>
              </div>
            ) : (
              <div className={classes.priceContainer}>
                <h4 className={classes.price}>
                  {separateLib.separate(props.card.price)} تومان
                </h4>
              </div>
            )}
            {props.card.off ? (
              <div className={classes.offContainer}>
                <h4 className={classes.off}>
                  {separateLib.separate(props.card.off)}%
                </h4>
              </div>
            ) : null}
          </span>
        </div>
        <Link
          className={classes.link}
          to={`/category/${props.card.category}/${props.card.fa_title}`}
        >
          <button>مشاهده جزئیات</button>
        </Link>
      </div>
    );
  else return null;
};
