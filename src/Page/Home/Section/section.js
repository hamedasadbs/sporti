/*CSS*/
import style from "./section.module.scss";
/*ASSETS*/
import cart from "../../../Images/cart.png";
import food from "../../../Images/food.png";
import map from "../../../Images/map.png";

export const HomeSection = () => (
  <section className={style.section}>
    <div className={style.off}>
      <h1>تخفیف %10</h1>
      <h2>همه رستوران ها، همه غذاها</h2>
      <h3>!زمونه عوض شده</h3>
    </div>
    <div className={style.order}>
      <h1>سفارش آنلاین غذا از رستوران های تهران</h1>
      <p>
        .ریحون سرویس سفارش آنلاین غذاست. با ریحون میتونید هر جایی که هستید،
        رستوران های اطرافتون رو ببینید و غذای مورد علاقتون رو آنلاین سفارش بدید
      </p>
    </div>
    <div className={style.orderWays}>
      <main className={style.orderWay}>
        <img src={cart} alt="cart" />
        <div className={style.shape}></div>
        <h1>به صورت آنلاین پرداخت کنید</h1>
        <p>یک متن شانسی در این مکان نوشته شده است و نباید جدی گرفته شود</p>
      </main>
      <main className={style.orderWay}>
        <img src={food} alt="food" />
        <div className={style.shape}></div>
        <h1>رستوران و غذای مورد نظرتان را انتخاب کنید</h1>
        <p>یک متن شانسی در این مکان نوشته شده است و نباید جدی گرفته شود</p>
      </main>
      <main className={style.orderWay}>
        <img src={map} alt="map" />
        <div className={style.shape}></div>
        <h1>نام منطقه خود را انتخاب کنید</h1>
        <p>یک متن شانسی در این مکان نوشته شده است و نباید جدی گرفته شود</p>
      </main>
    </div>
  </section>
);
