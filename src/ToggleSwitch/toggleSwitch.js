/*CSS*/
import style from "./toggleSwitch.module.scss";

export const ToggleSwitch = (props) => {
  const modeHadler = (e) => {
    if (e.target.checked) props.mode("dark");
    else props.mode("light");
  };

  return (
    <label className={style.switch}>
      <input onChange={modeHadler} type="checkbox" />
      <span className={`${style.slider} ${style.round}`}></span>
    </label>
  );
};
