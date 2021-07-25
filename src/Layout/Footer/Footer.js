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
        فانتزیما، اولین فروشگاه جامع اینترنتی ادبیات ، بازی های کامپیوتری و
        سینمای فانتزی در ایران
      </h2>
      <main>
        <div className={classes.leftSide}>
          <label>شماره تماس : ۰۲۱۸۸۵۴۸۹۵۵ (ساعت ۱۲- ۱۷ شنبه تا چهارشنبه)</label>
          <label>فانتزیما در شبکه های اجتماعی</label>
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
                  <a>فرآیند خرید</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a>پرسش های متداول</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a>شرایط بازگرداندن کالا</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a>حریم خصوصی</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a>فرم پیشنهاد محصول</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <p className={classes.copyRight}>.کلیه حقوق متعلق به فانتزیما است</p>
    </footer>
  </>
);

export default Footer;
