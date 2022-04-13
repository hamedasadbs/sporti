import { useEffect, useState } from "react";
import axios from "axios";
/*CSS*/
import style from "./infoBoxes.module.scss";
/*CHILD COMPONENTS*/
import { InfoBox } from "./InfoBox/infoBox";
import * as request from "../../Middleware/Requests/axiosRequest";

export const InfoBoxes = (props) => {
  const [busInfoBoxData, setBusInfoBoxData] = useState({});
  const [softwaresInfoBoxData, setSoftwaresBusInfoBoxData] = useState({});

  useEffect(() => {
    request
      .axiosRequest("http://10.42.0.72:44351/api/Bus/StatisticsInfo")
      .then((res) => {
        setBusInfoBoxData(res);
      });

    request
      .axiosRequest("http://10.42.0.72:44351/api/Software/StatisticsInfo")
      .then((res) => {
        setSoftwaresBusInfoBoxData(res);
      });
  }, []);

  const infoBox = {
    bus: [
      {
        name: "failedRes",
        title: "تعداد پاسخ های ناموفق",
        value: busInfoBoxData.allFailedResponses,
        icon1: "fa-reply",
        icon2: "fa-close",
      },
      {
        name: "okRes",
        title: "تعداد پاسخ های موفق",
        value: busInfoBoxData.allOkResponses,
        icon1: "fa-reply",
        icon2: "fa-check",
      },
      {
        name: "totalRes",
        title: "تعداد کل پاسخ ها",
        value: busInfoBoxData.allResponses,
        icon1: "fa-reply",
      },
      {
        name: "totalReq",
        title: "تعداد کل درخواست ها",
        value: busInfoBoxData.allRequests,
        icon1: "fa-paper-plane",
      },
      {
        name: "totalEventsReq",
        title: "تعداد کل درخواست های رویدادها",
        value: busInfoBoxData.allEventsRequests,
        icon1: "fa-paper-plane",
        icon2: "fa-calendar",
      },
    ],
    softwares: [
      {
        name: "totalRes",
        title: "تعداد پاسخ های دریافت شده",
        value: softwaresInfoBoxData.responsesCount,
        icon1: "fa-reply",
      },
      {
        name: "totalReq",
        title: "تعداد درخواست های ارسال شده",
        value: softwaresInfoBoxData.requestsCount,
        icon1: "fa-paper-plane",
      },
      {
        name: "totalTransaction",
        title: "تعداد کل تراکنش ها",
        value: softwaresInfoBoxData.transactionsCount,
        icon1: "fa-exchange",
      },
    ],
  };

  return (
    <article className={style.infoBoxes}>
      {props.infoIndex === "bus"
        ? infoBox.bus.map((ib, index) => (
            <InfoBox
              name={ib.name}
              title={ib.title}
              value={ib.value}
              icon1={ib.icon1}
              icon2={ib.icon2}
              darkMode={props.darkMode}
              index={index}
              key={index}
            />
          ))
        : infoBox.softwares.map((ib, index) => (
            <InfoBox
              name={ib.name}
              title={ib.title}
              value={ib.value}
              icon1={ib.icon1}
              icon2={ib.icon2}
              darkMode={props.darkMode}
              index={index}
              key={index}
            />
          ))}
    </article>
  );
};
