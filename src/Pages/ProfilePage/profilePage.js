import { useEffect } from "react";
/*CSS*/
import style from "./profilePage.module.scss";
/*CHILD COMPONENTS*/
import { Header } from "../../Layouts/Header/header";
import { Title } from "../../Components/Title/title";
import userPhoto from "../../Assets/Images/user.jpg";

export const ProfilePage = (props) => {
  useEffect(() => {
    if (props.darkMode === 1)
      document
        .getElementsByClassName(style.profile)[0]
        .classList.add(style.profile_dark);
    else
      document
        .getElementsByClassName(style.profile)[0]
        .classList.remove(style.profile_dark);
  }, [props.darkMode]);

  return (
    <article className={style.profile}>
      <Header darkMode={props.darkMode} />
      <main>
        <Title>{props.title}</Title>
        <article>
          <div className={style.profileUpdate}>
            <h1>جزئیات حساب کاربری</h1>
            <main>
              <span>
                <label>نام خانوادگی</label>
                <input placeholder="علیپور" />
              </span>
              <span>
                <label>نام</label>
                <input placeholder="علی" />
              </span>
              <span className={style.leftAlign}>
                <label>رمز عبور</label>
                <input placeholder="******" />
              </span>
              <span className={style.leftAlign}>
                <label>ایمیل</label>
                <input placeholder="alialipour1975@yahoo.com" />
              </span>
              <span className={`${style.fullWidth} ${style.leftAlign}`}>
                <label>آدرس</label>
                <input />
              </span>
              <span className={style.fullWidth}>
                <label>توضیحات</label>
                <textarea />
              </span>
            </main>
          </div>
          <div className={style.profilePreview}>
            <img src={userPhoto} alt="userPhoto" />
            <h1>علی علیپور</h1>
            <h2>معاون پشتیبانی</h2>
            <div className={style.previewDescription}>
              <h1>توضیحات</h1>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
            </div>
          </div>
        </article>
      </main>
    </article>
  );
};
