/*CSS*/
import style from "./infoBoxes.module.scss";
/*CHILD COMPONENTS*/
import { InfoBox } from "./InfoBox/infoBox";

export const InfoBoxes = () => {
  return (
    <article className={style.infoBoxes}>
      <InfoBox
        bgColor="rgb(255, 43, 43)"
        title="تعداد پاسخ های ناموفق"
        value="20"
        icon1="fa-reply"
        icon2="fa-close"
      />
      <InfoBox
        bgColor="rgb(34, 131, 34)"
        title="تعداد پاسخ های موفق"
        value="12"
        icon1="fa-reply"
        icon2="fa-check"
      />
      <InfoBox
        bgColor="rgb(214, 155, 44)"
        title="تعداد کل پاسخ ها"
        value="30"
        icon1="fa-reply"
      />
      <InfoBox
        bgColor="rgb(126, 33, 126)"
        title="تعداد کل درخواست ها"
        value="5"
        icon1="fa-paper-plane"
      />
      <InfoBox
        bgColor="rgb(41, 41, 250)"
        title="تعداد نرم افزارها"
        value="10"
        icon1="fa-desktop"
      />
    </article>
  );
};
