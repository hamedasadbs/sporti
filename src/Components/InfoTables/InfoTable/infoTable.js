/*INNER COMPONENTS*/
import { useEffect, useState } from "react";
/*CSS*/
import style from "./infoTable.module.scss";
/*CHILD COMPONENT*/
import { Pagination } from "../../Pagination/pagination";
import * as request from "../../../Middleware/Requests/axiosRequest";
import * as geo_jal from "../../../Middleware/Library/gregorian_Jalali";

export const InfoTable = (props) => {
  //const numberOfTableRows = 5;
  const [page, setPage] = useState(1);
  const [dataset, setDataset] = useState([]);
  const [dataCount, setDataCount] = useState(0);
  const [type, setType] = useState("");
  const [numberOfTableRows, setNumberOfTableRows] = useState(5);

  useEffect(() => {
    const infoTable = document.getElementsByClassName(style.infoTable);
    if (props.darkMode) {
      for (let i = 0; i < infoTable.length; i++) {
        infoTable[i].classList.add(style.infoTable_dark);
      }
    } else {
      for (let i = 0; i < infoTable.length; i++) {
        infoTable[i].classList.remove(style.infoTable_dark);
      }
    }
  }, [props.darkMode]);

  useEffect(() => {
    let url = "";
    let t = "";
    if (type !== "") {
      t = `&type=${type}`;
    }
    switch (props.name) {
      /*bus table*/
      case "lastRequests":
        url = `http://10.42.0.72:44351/api/Bus/LastRequests?PageSize=${numberOfTableRows}&PageNumber=${page}`;
        break;
      case "lastResponses":
        url = `http://10.42.0.72:44351/api/Bus/LastResponses?PageSize=${numberOfTableRows}&PageNumber=${page}${t}`;
        break;
      case "mostUsedSoftware":
        url = `http://10.42.0.72:44351/api/Bus/MostUsedSoftware?PageSize=${numberOfTableRows}&PageNumber=${page}`;
        break;
      /*softwares table*/
      case "transactions":
        url = `http://10.42.0.72:44351/api/Software/Transactions?software=${props.software}&PageSize=${numberOfTableRows}&PageNumber=${page}`;
        break;
      case "requests":
        url = `http://10.42.0.72:44351/api/Software/Requests?software=${props.software}&PageSize=${numberOfTableRows}&PageNumber=${page}`;
        break;
      case "responses":
        url = `http://10.42.0.72:44351/api/Software/Responses?software=${props.software}&PageSize=${numberOfTableRows}&PageNumber=${page}`;
        break;
      default:
        url = "";
    }
    request.axiosRequest(url).then((res) => {
      switch (props.name) {
        case "lastRequests":
          setDataset(res.requests);
          break;
        case "lastResponses":
          setDataset(res.responses);
          break;
        case "mostUsedSoftware":
          setDataset(res.softwares);
          break;
        case "transactions":
          setDataset(res.transactions);
          break;
        case "requests":
          setDataset(res.requests);
          break;
        case "responses":
          setDataset(res.responses);
          break;
        default:
          setDataset("");
      }
      setDataCount(res.count);
    });
  }, [page, props.software, props, type, numberOfTableRows]);

  const convertToJalali = (d) => {
    const date = d.split("T")[0];
    const time = d.split("T")[1].split(".")[0];

    const year = date.split("-")[0];
    const month = date.split("-")[1];
    const day = date.split("-")[2];

    const jDate = geo_jal.gregorian_to_jalali(
      parseInt(year),
      parseInt(month),
      parseInt(day)
    );

    const jYear = jDate[0];
    const jMonth = jDate[1];
    const jDay = jDate[2];
    return jYear + "/" + jMonth + "/" + jDay + " - " + time;
  };

  const tdHandler = (rec) => {
    let td = [];
    for (let i = 0; i < Object.keys(rec).length; i++) {
      if (rec[Object.keys(rec)[i]] !== null) {
        if (Object.keys(rec)[i] == "requestType") {
          if (rec[Object.keys(rec)[i]] == 1) {
            td.push("درخواست");
          } else if (rec[Object.keys(rec)[i]] == 2) {
            td.push("رویداد");
          }
        } else if (Object.keys(rec)[i] == "resultType") {
          if (rec[Object.keys(rec)[i]] == 0) {
            td.push("موفق");
          } else if (rec[Object.keys(rec)[i]] == 1) {
            td.push("ناموفق");
          }
        } else if (
          Object.keys(rec)[i] == "requestTime" ||
          Object.keys(rec)[i] == "responseTime"
        ) {
          td.push(convertToJalali(rec[Object.keys(rec)[i]]));
        } else {
          td.push(rec[Object.keys(rec)[i]]);
        }
      } else {
        td.push("-");
      }
    }
    return td;
  };

  const typeHandler = (e) => {
    setType(e.target.value);
  };

  const numberOfTableRowsHandler = (e) => {
    setNumberOfTableRows(e.target.value);
  };

  return (
    <main className={style.infoTable}>
      <h1 className={style.title}>
        {props.title} <i className="fa fa-table"></i>
      </h1>
      {props.name == "responses" ||
        (props.name == "lastResponses" && (
          <div className={style.filter}>
            <select onChange={typeHandler}>
              <option value="" selected>
                موفق و ناموفق
              </option>
              <option value={0}>موفق</option>
              <option value={1}>ناموفق</option>
            </select>
            <label>فیلتر نوع نتیجه</label>
          </div>
        ))}
      <div className={style.numberOfRecords}>
        <input
          onChange={numberOfTableRowsHandler}
          type="number"
          value={numberOfTableRows}
          min="1"
          max={dataCount}
        />
        <label>تعداد نتایج</label>
      </div>
      {dataset.length ? (
        <table className="table table-hover">
          <thead>
            <tr>
              {props.toples.map((tp, index) => (
                <th scope="col" key={index}>
                  {tp}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataset.map((rec, index) => (
              <tr key={index}>
                {tdHandler(rec)
                  .reverse()
                  .map((r, i) => (
                    <td key={i}>{r}</td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 className={style.noDataToShow}>اطلاعاتی جهت نمایش وجود ندارد</h1>
      )}
      <Pagination
        numberOfPages={Math.ceil(dataCount / numberOfTableRows)}
        pageHandler={setPage}
        currentPage={page}
        index={props.index}
        darkMode={props.darkMode}
      />
    </main>
  );
};
