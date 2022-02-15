/*CSS*/
import style from "./infoTables.module.scss";
/*CHILD COMPONENTS*/
import { InfoTable } from "./InfoTable/infoTable";

export const InfoTables = (props) => {
  return (
    <article className={style.infoTables}>
      {props.infoTable.map((infotable) => (
        <InfoTable
          title={infotable.title}
          toples={infotable.toples}
          records={infotable.records}
          mode={props.mode}
        />
      ))}
    </article>
  );
};
