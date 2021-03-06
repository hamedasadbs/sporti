/*INNER-COMPONENTS*/
import React, { useState, useEffect } from "react";
/*CSS*/
import classes from "./Notice.module.scss";
/*ASSETS*/
import { Undo } from "@material-ui/icons";

export const Notice = (props) => {
  /*STATES*/
  const [aboutText, setAboutText] = useState(null);
  let [isCaptchaTrue, setIsCaptchaTrue] = useState(false);
  /*VARIABLES*/
  const symbol = ["+", "-", "*"];
  let symbolIndex = Math.floor(Math.random() * symbol.length);
  let firstNum = Math.floor(Math.random() * 50);
  let secondNum = Math.floor(Math.random() * 50);
  /*FUNCTIONS*/
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
              ???????? ????????: <span>02100000000</span>
            </p>
            <p>
              ???????????????? ?????????? ???? ???????? ???? ???????????????? ???????????? ?????? ????????????{" "}
              <span>12</span> ?????? ???? <span>5</span> ?????? ???? ??????
            </p>
            <p>
              ????????: ?????????? ???????? - ?????????????? ???????? - ???????? ???????? - ???????????? ???????? - ????????
              ???????? - ???????? ????????
            </p>
          </article>
          <br />
          <main className={classes.sendMassage}>
            <div>
              <input
                placeholder="??????"
                style={{ textAlign: "right" }}
                maxLength="20"
                size="30"
              />
              <label>:??????</label>
            </div>
            <div>
              <input
                placeholder="??????????"
                style={{ textAlign: "left" }}
                maxLength="20"
                size="30"
              />
              <label>:??????????</label>
            </div>
            <div>
              <input
                placeholder="?????????? ???????? (??????????????)"
                style={{ textAlign: "left" }}
                maxLength="12"
                size="20"
              />
              <label>:(??????????????) ?????????? ????????</label>
            </div>
            <div>
              <textarea
                placeholder="????????"
                style={{ textAlign: "right" }}
                cols="50"
                rows="5"
              ></textarea>
              <label>:????????</label>
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
                placeholder="???? ????????????"
                style={{ textAlign: "center" }}
                maxLength="5"
                size="10"
              />
              <label>:???? ????????????</label>
            </div>
            <div>
              <button className={classes.send} onClick={sendMassage}>
                ?????????? ????????
              </button>
            </div>
          </main>
        </div>
      ) : null}
    </>
  );
};
