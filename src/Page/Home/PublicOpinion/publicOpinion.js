/*CSS*/
import style from "./publicOpinion.module.scss";
/*ASSETS*/
import hamed from "../../../Images/hamed.png";
import ramin from "../../../Images/ramin.png";

export const PublicOpinion = () => {
  return (
    <article className={style.pos}>
      <h1>ریحون و افکار عمومی</h1>
      <main>
        <div className={style.po}>
          <img src={ramin} alt="ramin" />
          <h1>رامین</h1>
          <p>
            بوفه این امکان را برای شما فراهم می آورد تا رستورا نهای اطرافتان را
            به راحتی ببینید و با مشاهده منو های عکس دار آنها غذای مورد علاقه تا
            را را به راحتی سفارش دهید و درب منزل و یا محل کارتان تحویل بگیرید
          </p>
          <i className="fa fa-twitter">
            <div className={style.tooltip}>twitter.com/raminabdollahi</div>
          </i>
        </div>
        <div className={style.po}>
          <img src={hamed} alt="hamed" />
          <h1>حامد</h1>
          <p>
            بوفه این امکان را برای شما فراهم می آورد تا رستورا نهای اطرافتان را
            به راحتی ببینید و با مشاهده منو های عکس دار آنها غذای مورد علاقه تا
            را را به راحتی سفارش دهید و درب منزل و یا محل کارتان تحویل بگیرید
          </p>
          <i className="fa fa-twitter">
            <div className={style.tooltip}>twitter.com/hamedasadollahi</div>
          </i>
        </div>
      </main>
    </article>
  );
};
