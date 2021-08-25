import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Notice.module.scss";

const Notice = (props) => {
  const [aboutText, setAboutText] = useState([]);
  const url = "http://localhost/fantasima/index.php";

  useEffect(() => {
    axios
      .post(
        url,
        JSON.stringify({
          method: "select",
          table: "documents",
        })
      )
      .then((res) => setAboutText(res.data));
  }, []);
  let notice =
    props.title === "about" ? (
      <table className={classes.about}>
        <tbody>
          <tr>
            <td>
              {aboutText.map((res) => {
                return <p>{res.text}</p>;
              })}
            </td>
          </tr>
        </tbody>
      </table>
    ) : props.title === "contact" ? (
      <div className={classes.contact}>
        <article className={classes.contactAddress}>
          <p>
            تلفن تماس: <span>02100000000</span>
          </p>
          <p>
            پاسخگویی تلفنی از شنبه تا چهارشنبه روزهای غیر تعطیل، <span>12</span>{" "}
            صبح تا <span>5</span> بعد از ظهر
          </p>
          <p>
            آدرس: استان مثال - شهرستان مثال - شهرک مثال - خیابان مثال - کوچه
            مثال - پلاک مثال
          </p>
        </article>
        <br />
        <main className={classes.sendMassage}>
          <div>
            <input placeholder="نام" style={{ textAlign: "right" }} />
            <label>:نام</label>
          </div>
          <div>
            <input placeholder="ایمیل" style={{ textAlign: "left" }} />
            <label>:ایمیل</label>
          </div>
          <div>
            <input
              placeholder="شماره تماس (اختیاری)"
              style={{ textAlign: "left" }}
            />
            <label>:(اختیاری) شماره تماس</label>
          </div>
          <div>
            <textarea
              placeholder="پیام"
              style={{ textAlign: "right" }}
              cols="50"
              rows="5"
            ></textarea>
            <label>:پیام</label>
          </div>
          <div>
            <input placeholder="کد امنیتی" style={{ textAlign: "center" }} />
            <div className={classes.captcha}>96328</div>
            <label>:کد امنیتی</label>
          </div>
        </main>
      </div>
    ) : null;
  return <>{notice}</>;
};

export default Notice;
