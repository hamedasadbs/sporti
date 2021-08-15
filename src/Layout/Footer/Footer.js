import React from "react";
import classes from "./Footer.module.scss";

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
      <h2 className={classes.title}>
        بزرگترین فروشگاه اینترنتی محصولات ورزشی در ایران ,BlueSnake
      </h2>
      <main>
        <div className={classes.leftSide}>
          <label>شماره تماس : 09338599015 (ساعت ۱۲-۱۷ شنبه تا چهارشنبه)</label>
          <label>در شبکه های اجتماعی ,BlueSnake</label>
          <div className={classes.socialMedias}>
            <FontAwesomeIcon
              icon={faFacebook}
              className={classes.i + " " + classes.facebook}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className={classes.i + " " + classes.instagram}
            />
            <FontAwesomeIcon
              icon={faTelegram}
              className={classes.i + " " + classes.telegram}
            />
            <FontAwesomeIcon
              icon={faGooglePlus}
              className={classes.i + " " + classes.google}
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              className={classes.i + " " + classes.whatsapp}
            />
          </div>
        </div>
        <div className={classes.rightSide}>
          <table className={classes.subjects}>
            <tbody>
              <tr>
                <td>
                  <a href='/#'>فرآیند خرید</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='/#'>پرسش های متداول</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='/#'>شرایط بازگرداندن کالا</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='/#'>حریم خصوصی</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href='/#'>فرم پیشنهاد محصول</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <p className={classes.copyRight}>.کلیه حقوق متعلق به من است</p>
    </footer>
  </>
);

export default Footer;
