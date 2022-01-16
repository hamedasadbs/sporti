/*INNER-COMPONENTS*/
import axios from "axios";
/*INNER-COMPONENTS*/
import { useState } from "react";
/*CSS*/
import style from "./restaurant.module.scss";

export const AdminRestaurant = (props) => {
  const url = "http://localhost/boofe/restaurants.php";
  const [inEdit, setInEdit] = useState(false);

  const deleteHandler = () => {
    if (window.confirm("آیا از حذف این رستوران مطمئن هستید؟")) {
      let id = props.id;
      axios
        .post(
          url,
          JSON.stringify({
            id,
            goal: "delete",
          })
        )
        .then(() => {
          props.update();
        });
    }
  };

  const editHandler = () => {
    if (inEdit) setInEdit(false);
    else setInEdit(true);
  };

  const saveEditHandler = () => {
    let id = props.id;
    let title = document.getElementById("title").value;
    let address = document.getElementById("address").value;
    let info1 = document.getElementById("info1").value;
    let info2 = document.getElementById("info2").value;

    if (title === "") title = props.title;
    if (address === "") address = props.address;
    if (info1 === "") info1 = props.info1;
    if (info2 === "") info2 = props.info2;

    if (
      title === props.title &&
      address === props.address &&
      info1 === props.info1 &&
      info2 === props.info2
    )
      editHandler();
    else {
      axios
        .post(
          url,
          JSON.stringify({
            id,
            title,
            address,
            info1,
            info2,
            goal: "update",
          })
        )
        .then((res) => {
          alert(res.data);
          props.update();
          editHandler();
        });
    }
  };

  return (
    <>
      <section className={style.restaurant}>
        <img src={`/Images/Restaurants/${props.img}`} alt="restaurant" />
        {inEdit ? (
          <>
            <h1>
              <input id="title" placeholder={props.title} />
            </h1>
            <div className={style.stars}>
              {[...Array(parseInt(props.stars))].map((x) => (
                <i className={`fa fa-star ${style.starOn}`}></i>
              ))}
              {[...Array(5 - parseInt(props.stars))].map((x) => (
                <i className={`fa fa-star ${style.starOff}`}></i>
              ))}
              <div className={style.point}>{props.points}</div>
            </div>
            <h2>
              <textarea id="address" placeholder={props.address}></textarea>
            </h2>
            <span>
              <input id="info1" placeholder={props.info1} />
            </span>
            <span>
              <input id="info2" placeholder={props.info2} />
            </span>
            {props.delete && (
              <button className={style.delete} onClick={deleteHandler}>
                حذف
              </button>
            )}
            {props.edit && (
              <div className={style.btn}>
                <button className={style.save} onClick={saveEditHandler}>
                  ذخیره تغییرات
                </button>
                <button className={style.cancel} onClick={editHandler}>
                  لغو کردن
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <h1>{props.title}</h1>
            <div className={style.stars}>
              {[...Array(parseInt(props.stars))].map((x) => (
                <i className={`fa fa-star ${style.starOn}`}></i>
              ))}
              {[...Array(5 - parseInt(props.stars))].map((x) => (
                <i className={`fa fa-star ${style.starOff}`}></i>
              ))}
              <div className={style.point}>{props.points}</div>
            </div>
            <h2>{props.address}</h2>
            <span>{props.info1}</span>
            <span>{props.info2}</span>
            {props.delete && (
              <button className={style.delete} onClick={deleteHandler}>
                حذف
              </button>
            )}
            {props.edit && (
              <button className={style.edit} onClick={editHandler}>
                ویرایش
              </button>
            )}
          </>
        )}
      </section>
    </>
  );
};
