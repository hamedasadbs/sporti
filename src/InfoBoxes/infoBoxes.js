/*CSS*/
import style from "./infoBoxes.module.scss";
/*CHILD COMPONENTS*/
import { InfoBox } from "./InfoBox/infoBox";

export const InfoBoxes = (props) => {
  return (
    <article className={style.infoBoxes}>
      {props.infoBox.map((infobox) => (
        <InfoBox
          bgColor={infobox.bgColor}
          name={infobox.name}
          title={infobox.title}
          value={infobox.value}
          icon1={infobox.icon1}
          icon2={infobox.icon2}
          mode={props.mode}
        />
      ))}
    </article>
  );
};
