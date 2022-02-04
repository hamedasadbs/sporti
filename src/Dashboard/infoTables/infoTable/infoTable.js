/*CSS*/
import style from "./infoTable.module.scss";

export const InfoTable = (props) => {
  return (
    <main className={style.infoTable}>
      <h1 className={style.title}>
        {props.title} <i className="fa fa-table"></i>
      </h1>
      {props.type == "1" ? (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">اسم</th>
              <th scope="col">فعل</th>
              <th scope="col">سیستم</th>
              <th scope="col">تاریخ</th>
              <th scope="col">شناسه</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">تعداد درخواست دریافت شده</th>
              <th scope="col">تعداد درخواست های ارسال شده</th>
              <th scope="col">نام نرم افزار</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      )}
    </main>
  );
};
