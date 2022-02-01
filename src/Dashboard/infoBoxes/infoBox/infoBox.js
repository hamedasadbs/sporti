/*CSS*/
import style from "./infoBox.module.scss";

export const InfoBox = (props) => {
  return (
    <span className={style.infoBox}>
      <label className={style.title}>{props.title}</label>
      <div className={style.icon}>
        <i className="fa fa-home"></i>
      </div>
      <span>{props.value}</span>
      <label className={style.moreInfo}>اطلاعات اضافی درباره این باکس</label>
    </span>
  );
};
