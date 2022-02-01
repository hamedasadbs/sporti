/*CSS*/
import style from "./infoBox.module.scss";

export const InfoBox = (props) => {
  return (
    <span className={style.infoBox}>
      <label className={style.title}>{props.title}</label>
      <div
        style={{ backgroundColor: props.bgColor }}
        className={`${style.icon}`}
      >
        {props.icon2 && <i className={`fa ${props.icon2}`}></i>}
        <i className={`fa ${props.icon1}`}></i>
      </div>
      <span>{props.value}</span>
      <label className={style.moreInfo}>اطلاعات اضافی درباره این باکس</label>
    </span>
  );
};
