/*INNER-COMPONENTS*/
import React from "react";
import { Link } from "react-router-dom";
/*CSS*/
import classes from "./Footer.module.scss";
/*ASSETS*/
import { Facebook, Instagram, Telegram, WhatsApp } from "@material-ui/icons";

export const Footer = () => (
  <>
    <footer className={classes.footer}>
      <h1 className={classes.title}>
        اسپورتی بزرگترین فروشگاه اینترنتی محصولات ورزشی در ایران
      </h1>
      <main>
        <div className={classes.leftSide}>
          <label>شماره تماس : 09338599015 (ساعت ۱۲-۱۷ شنبه تا چهارشنبه)</label>
          <label>اسپورتی را در شبکه های اجتماعی دنبال کنید</label>
          <div className={classes.socialMedias}>
            <a rel="noreferrer" href="/" target="_blank">
              <Facebook className={classes.i + " " + classes.facebook} />
            </a>
            <a
              rel="noreferrer"
              href="https://www.instagram.com/hamedasad_bs/"
              target="_blank"
            >
              <Instagram className={classes.i + " " + classes.instagram} />
            </a>
            <a
              rel="noreferrer"
              href="https://telegram.me/hamedasad_bs"
              target="_blank"
            >
              <Telegram className={classes.i + " " + classes.telegram} />
            </a>
            <a rel="noreferrer" href="/" target="_blank">
              <WhatsApp className={classes.i + " " + classes.whatsapp} />
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
      <p className={classes.copyRight}>
        کلیه حقوق برای گروه بلو-اسکریپت محفوظ است
      </p>
    </footer>
  </>
);
