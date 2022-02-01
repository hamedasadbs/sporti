/*CSS*/
import style from "./infoBoxes.module.scss";
/*CHILD COMPONENTS*/
import { InfoBox } from "./infoBox/infoBox";

export const InfoBoxes = (props) => {
  return (
    <article className={style.infoBoxes}>
      <InfoBox title="تعداد نرم افزارها" value="10" />
      <InfoBox title="تعداد پاسخ های موفق" value="12" />
      <InfoBox title="تعداد پاسخ های ناموفق" value="20" />
      <InfoBox title="تعداد کل درخواست ها" value="5" />
      <InfoBox title="تعداد کل پاسخ ها" value="30" />
    </article>
  );
};
