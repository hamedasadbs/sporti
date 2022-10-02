/*INNER COMPONENT*/
import { useState, useEffect } from "react";
/*STYLE*/
import classes from "./Notice.module.scss";
/*ICON*/
import { Undo } from "@material-ui/icons";

export const Notice = (props) => {
  /*STATE*/
  const [aboutText, setAboutText] = useState(null);
  let [isCaptchaTrue, setIsCaptchaTrue] = useState(false);
  /*VARIABLE*/
  const symbol = ["+", "-", "*"];
  let symbolIndex = Math.floor(Math.random() * symbol.length);
  let firstNum = Math.floor(Math.random() * 50);
  let secondNum = Math.floor(Math.random() * 50);
  /*FUNCTION*/
  useEffect(() => {
    fetch("/about.txt")
      .then((r) => r.text())
      .then((text) => {
        setAboutText(text);
      });
  }, []);

  const sendMassage = () => {
    if (symbol[symbolIndex] === "+") {
      if (
        firstNum + secondNum ===
        document.getElementById("captchaAnswer").value
      ) {
        setIsCaptchaTrue(true);
        isCaptchaTrue = true;
      }
    } else if (symbol[symbolIndex] === "-") {
      if (
        firstNum - secondNum ===
        document.getElementById("captchaAnswer").value
      ) {
        setIsCaptchaTrue(true);
        isCaptchaTrue = true;
      }
    } else if (symbol[symbolIndex] === "*") {
      if (
        firstNum * secondNum ===
        document.getElementById("captchaAnswer").value
      ) {
        setIsCaptchaTrue(true);
        isCaptchaTrue = true;
      }
    } else if (symbol[symbolIndex] === "/") {
      if (
        firstNum / secondNum ===
        document.getElementById("captchaAnswer").value
      ) {
        setIsCaptchaTrue(true);
        isCaptchaTrue = true;
      }
    }
    alert(isCaptchaTrue);
  };
  /*JSX*/
  return (
    <>
      {props.title === "about" ? (
        <table className={classes.about}>
          <tbody>
            <tr>
              <td>
                <p>{aboutText}</p>
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
              پاسخگویی تلفنی از شنبه تا چهارشنبه روزهای غیر تعطیل،{" "}
              <span>12</span> صبح تا <span>5</span> بعد از ظهر
            </p>
            <p>
              آدرس: استان مثال - شهرستان مثال - شهرک مثال - خیابان مثال - کوچه
              مثال - پلاک مثال
            </p>
          </article>
          <br />
          <main className={classes.sendMassage}>
            <div>
              <input
                placeholder="نام"
                style={{ textAlign: "right" }}
                maxLength="20"
                size="30"
              />
              <label>:نام</label>
            </div>
            <div>
              <input
                placeholder="ایمیل"
                style={{ textAlign: "left" }}
                maxLength="20"
                size="30"
              />
              <label>:ایمیل</label>
            </div>
            <div>
              <input
                placeholder="شماره تماس (اختیاری)"
                style={{ textAlign: "left" }}
                maxLength="12"
                size="20"
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
              <div>
                <button
                  onClick={() => {
                    window.location.href = window.location.href;
                  }}
                  className={classes.refresh}
                >
                  <Undo className={classes.i} />
                </button>
              </div>
              <div className={classes.captcha}>
                <span>
                  {firstNum +
                    " " +
                    symbol[symbolIndex] +
                    " " +
                    secondNum +
                    " ="}
                </span>
              </div>
              <input
                id="captchaAnswer"
                placeholder="کد امنیتی"
                style={{ textAlign: "center" }}
                maxLength="5"
                size="10"
              />
              <label>:کد امنیتی</label>
            </div>
            <div>
              <button className={classes.send} onClick={sendMassage}>
                ارسال پیام
              </button>
            </div>
          </main>
        </div>
      ) : null}
    </>
  );
};
