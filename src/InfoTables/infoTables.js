/*CSS*/
import style from "./infoTables.module.scss";
/*CHILD COMPONENTS*/
import { InfoTable } from "./InfoTable/infoTable";

export const InfoTables = () => {
  return (
    <article className={style.infoTables}>
      <InfoTable type="1" title="جدول آخرین تراکنش" />
      <InfoTable type="1" title="جدول آخرین تراکنش های موفق" />
      <InfoTable type="1" title="جدول آخرین تراکنش های ناموفق" />
      <InfoTable type="2" title="جدول نرم افزارهای پرکاربرد" />
    </article>
  );
};
