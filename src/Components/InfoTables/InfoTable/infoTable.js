/*INNER COMPONENTS*/
import { useEffect, useState } from "react";
/*CSS*/
import style from "./infoTable.module.scss";
/*CHILD COMPONENT*/
import { Pagination } from "../../Pagination/pagination";
import * as request from "../../../Middleware/Requests/axiosRequest";

export const InfoTable = (props) => {
  const numberOfTableRows = 5;
  const [page, setPage] = useState(1);
  const [dataset, setDataset] = useState([]);
  const [dataCount, setDataCount] = useState(0);

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
    switch (props.name) {
      /*bus table*/
      case "lastRequests":
        url = `http://10.42.0.72:44351/api/Bus/LastRequests?PageSize=${numberOfTableRows}&PageNumber=${page}`;
        break;
      case "lastResponses":
        url = `http://10.42.0.72:44351/api/Bus/LastResponses?PageSize=${numberOfTableRows}&PageNumber=${page}`;
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
  }, [page, props.software, props]);

  const tdHandler = (rec) => {
    let td = [];
    for (let i = 0; i < Object.keys(rec).length; i++) {
      td.push(rec[Object.keys(rec)[i]]);
    }
    return td;
  };

  return (
    <main className={style.infoTable}>
      <h1 className={style.title}>
        {props.title} <i className="fa fa-table"></i>
      </h1>
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
                {tdHandler(rec).map((r, i) => (
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
      />
    </main>
  );
};
