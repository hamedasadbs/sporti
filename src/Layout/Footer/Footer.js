import React from "react";
import classes from "./Footer.module.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

import Twitter from "../../Assets/Images/Icon feather-twitter.svg";
import Telegram from "../../Assets/Images/Icon awesome-telegram-plane.svg";
import Instagram from "../../Assets/Images/Icon awesome-instagram.svg";
import Bazar from "../../Assets/Images/Bazaar-logo-and-logotype.svg";

const Footer=()=>(
    <>
        <footer className={classes.footer}>
            <h2 className={classes.title}>با ایزی دارت هدف هاتو نشونه بگیر</h2>
            <div className={classes.rightSide}>
                <table className={classes.subjects}>
                    <thead>
                        <tr>
                            <th><strong>عنوان</strong></th>
                            <th><strong>عنوان</strong></th>
                            <th><strong>عنوان</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>اولین آیتم</td>
                            <td>اولین آیتم</td>
                            <td>اولین آیتم</td>
                        </tr>
                        <tr>
                            <td>دومین آیتم</td>
                            <td>دومین آیتم</td>
                            <td>دومین آیتم</td>
                        </tr>
                        <tr>
                            <td>سومین آیتم</td>
                            <td>سومین آیتم</td>
                            <td>سومین آیتم</td>
                        </tr>
                        <tr>
                            <td>چهارمین آیتم</td>
                            <td>چهارمین آیتم</td>
                            <td>چهارمین آیتم</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={classes.leftSide}>
                <label className={classes.notificationLabel} htmlFor='notificationForm'>از اخبار و مسابقات با خبر شو</label>
                <div className={classes.notificationForm}>
                    <button>ارسال</button>
                    <input type='text' placeholder='ایمیل خود را وارد نمایید' />
                </div>
                <label className={classes.socialMediasLabel} htmlFor='socialMedias'>شبکه های اجتماعی ایزی دارت</label>
                <div className={classes.socialMedias}>
                    <img src={Twitter} />
                    <img src={Telegram} />
                    <img src={Instagram} />
                </div>
                <label className={classes.bazarLabel} htmlFor='bazar'>دانلود برنامه ایزی دارت</label>
                <button className={classes.bazar}>
                    <img src={Bazar} />
                    <p>دانلود از</p>
                </button>
            </div>
            <p className={classes.copyRight}>کلیه حقوق متعلق به ماست</p>
        </footer>
    </>
)

export default Footer;
