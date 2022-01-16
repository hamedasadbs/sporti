/*INNER-COMPONENTS*/
import axios from "axios";
import { useEffect, useState } from "react";
/*CSS*/
import style from "./section.module.scss";
/*CHILD-COMPONENTS*/
import { AdminRestaurant } from "../Restaurant/restaurant";

export const AdminSection = (props) => {
  const url = "http://localhost/boofe/restaurants.php";
  const [totalRestaurants, setTotalRestaurants] = useState([]);

  const pointHandler = (e) => {
    document.getElementById("pointLabel").innerHTML = e.target.value;
  };

  const updateHandler = () => {
    axios
      .post(
        url,
        JSON.stringify({
          goal: "get",
        })
      )
      .then((res) => setTotalRestaurants(res.data));
  };

  const addHandler = () => {
    let title = document.getElementById("title").value;
    let address = document.getElementById("address").value;
    let star = document.getElementById("star").value;
    let point = document.getElementById("point").value;
    let image = document.getElementById("image").value;
    let info1 = document.getElementById("info1").value;
    let info2 = document.getElementById("info2").value;

    if (title === "" || address === "")
      alert("لطفا تمامی اطلاعات رستوران را وارد کنید");
    else if (image === "") alert("لطفا تصویر رستوران را انتخاب کنید");
    else if (info1 === "" && info2 === "")
      alert("حداقل یک مورد از اطلاعات رستوران را وارد کنید");
    else {
      if (window.confirm("آیا از ایجاد این رستوران مطمئن هستید؟")) {
        axios
          .post(
            url,
            JSON.stringify({
              title,
              address,
              star,
              point,
              info1,
              info2,
              image: image.split(/(\\|\/)/g).pop(),
              goal: "add",
            })
          )
          .then((res) => {
            alert(res.data);
            updateHandler();
          });
      }
    }
  };

  const updateRestaurants = () => {
    axios
      .post(
        url,
        JSON.stringify({
          goal: "get",
        })
      )
      .then((res) => setTotalRestaurants(res.data));
  };

  useEffect(() => {
    updateRestaurants();
  }, []);

  const filterHandler = (e) => {
    let removeFilter = e.target.value;
    if (removeFilter != "") {
      setTotalRestaurants([]);
      totalRestaurants.map((res) => {
        if (res.title.indexOf(removeFilter) > -1) {
          setTotalRestaurants((totalRestaurants) => [...totalRestaurants, res]);
        }
      });
    } else {
      updateRestaurants();
    }
  };

  return (
    <section className={style.section}>
      {props.activeTab === "add" ? (
        <div className={style.admin}>
          <h1>افزودن رستوران جدید</h1>
          <main>
            <div>
              <input id="title" placeholder="نام رستوران" />
              <i className="fa fa-spoon"></i>
            </div>
            <div>
              <textarea id="address" placeholder="آدرس رستوران"></textarea>
              <i className="fa fa-map"></i>
            </div>
            <div>
              <input id="info1" placeholder="(بخش اول) اطلاعات رستوران" />
              <i className="fa fa-info-circle"></i>
            </div>
            <div>
              <input id="info2" placeholder="(بخش دوم) اطلاعات رستوران" />
              <i className="fa fa-info-circle"></i>
            </div>
            <div>
              <select id="star">
                <option selected value="5">
                  5
                </option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
                <option value="0">0</option>
              </select>
              <label>تعداد ستاره ها</label>
              <i className="fa fa-star"></i>
            </div>
            <div>
              <div className={style.slideContainer}>
                <input
                  onChange={pointHandler}
                  type="range"
                  min="0"
                  max="100"
                  className={style.slider}
                  id="point"
                />
              </div>
              <label>
                امتیاز: <span id="pointLabel">50</span>
              </label>
              <i className="fa fa-money"></i>
            </div>
            <iframe name="dummyframe"></iframe>
            <form
              action="http://localhost/boofe/uploadImage.php"
              method="post"
              enctype="multipart/form-data"
              target="dummyframe"
            >
              <div>
                <input type="file" name="file" id="image" />
                <label>تصویر</label>
                <i className="fa fa-picture-o"></i>
              </div>
              <button name="submit" onClick={addHandler}>
                افزودن
              </button>
            </form>
          </main>
        </div>
      ) : props.activeTab === "remove" ? (
        <div className={style.admin}>
          <h1>حذف رستوران</h1>
          <main>
            <div>
              <input
                onChange={filterHandler}
                placeholder="فیلتر بر اساس نام رستوران"
              />
              <i className="fa fa-filter"></i>
            </div>
          </main>
          <article>
            {totalRestaurants.map((res) => (
              <AdminRestaurant
                key={res.id}
                id={res.id}
                img={res.image}
                stars={res.star}
                points={res.point}
                address={res.address}
                title={res.title}
                info1={res.info1}
                info2={res.info2}
                update={updateHandler}
                delete
              />
            ))}
          </article>
        </div>
      ) : (
        <div className={style.admin}>
          <h1>ویرایش رستوران</h1>
          <main>
            <div>
              <input
                onChange={filterHandler}
                placeholder="فیلتر بر اساس نام رستوران"
              />
              <i className="fa fa-filter"></i>
            </div>
          </main>
          <article>
            {totalRestaurants.map((res) => (
              <AdminRestaurant
                key={res.id}
                id={res.id}
                img={res.image}
                stars={res.star}
                points={res.point}
                address={res.address}
                title={res.title}
                info1={res.info1}
                info2={res.info2}
                update={updateHandler}
                edit
              />
            ))}
          </article>
        </div>
      )}
    </section>
  );
};
