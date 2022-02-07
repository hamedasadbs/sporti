/*CSS*/
import style from "./infoTable.module.scss";

export const InfoTable = (props) => {
  return (
    <main className={style.infoTable}>
      <h1 className={style.title}>
        {props.title} <i className="fa fa-table"></i>
      </h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {props.toples.map((tp) => (
              <th scope="col">{tp}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.records.map((rec) => (
            <tr>
              {rec.map((rc) => (
                <td>{rc}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
