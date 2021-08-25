import React from "react";
import classes from "./Footer.module.scss";

import { Link } from "react-router-dom";

import {
  faFacebook,
  faInstagram,
  faTelegram,
  faWhatsapp,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
  <>
    <footer className={classes.footer}>
      <h1 className={classes.title}>
        بلو-اسنیک بزرگترین فروشگاه اینترنتی محصولات ورزشی در ایران
      </h1>
      <main>
        <div className={classes.leftSide}>
          <label>شماره تماس : 09338599015 (ساعت ۱۲-۱۷ شنبه تا چهارشنبه)</label>
          <label>بلو-اسنیک در شبکه های اجتماعی</label>
          <div className={classes.socialMedias}>
            <a rel="noreferrer" href="/" target="_blank">
              <FontAwesomeIcon
                icon={faFacebook}
                className={classes.i + " " + classes.facebook}
              />
            </a>
            <a
              rel="noreferrer"
              href="https://www.instagram.com/hamedasad_bs/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className={classes.i + " " + classes.instagram}
              />
            </a>
            <a
              rel="noreferrer"
              href="https://telegram.me/hamedasad_bs"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faTelegram}
                className={classes.i + " " + classes.telegram}
              />
            </a>
            <a rel="noreferrer" href="/" target="_blank">
              <FontAwesomeIcon
                icon={faGooglePlus}
                className={classes.i + " " + classes.google}
              />
            </a>
            <a rel="noreferrer" href="/" target="_blank">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className={classes.i + " " + classes.whatsapp}
              />
            </a>
          </div>
        </div>
        <div className={classes.rightSide}>
          <table className={classes.subjects}>
            <tbody>
              <tr>
                <td>
                  <Link className={classes.link} to="/#">
                    فرآیند خرید
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link className={classes.link} to="/faq">
                    پرسش های متداول
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link className={classes.link} to="/guarantee">
                    شرایط بازگرداندن کالا
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link className={classes.link} to="/privacy">
                    حریم خصوصی
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link className={classes.link} to="/request-form">
                    فرم پیشنهاد محصول
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <p className={classes.copyRight}>کلیه حقوق متعلق به گروه بلو-اسنیک است</p>
    </footer>
  </>
);

export default Footer;
