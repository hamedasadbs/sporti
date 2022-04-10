import { useEffect, useState } from "react";
import axios from "axios";
/*CSS*/
import style from "./infoBoxes.module.scss";
/*CHILD COMPONENTS*/
import { InfoBox } from "./InfoBox/infoBox";

export const InfoBoxes = (props) => {
  const [data, setData] = useState({ result: { allFailedResponses: 0 } });

  const dataHandler = () => {
    setData(props.dataset);
  };

  useEffect(() => {
    if (props.dataset) {
      dataHandler();
    }
  }, [props.dataset]);

  const infoBox = {
    bus: [
      {
        name: "failedRes",
        title: "تعداد پاسخ های ناموفق",
        value: data.result.allFailedResponses,
        icon1: "fa-reply",
        icon2: "fa-close",
      },
      {
        name: "okRes",
        title: "تعداد پاسخ های موفق",
        value: data.result.allOkResponses,
        icon1: "fa-reply",
        icon2: "fa-check",
      },
      {
        name: "totalRes",
        title: "تعداد کل پاسخ ها",
        value: data.result.allResponses,
        icon1: "fa-reply",
      },
      {
        name: "totalReq",
        title: "تعداد کل درخواست ها",
        value: data.result.allRequests,
        icon1: "fa-paper-plane",
      },
      {
        name: "totalEventsReq",
        title: "تعداد کل درخواست های رویدادها",
        value: data.result.allEventsRequests,
        icon1: "fa-paper-plane",
        icon2: "fa-calendar",
      },
    ],
    softwares: [
      {
        name: "totalRes",
        title: "تعداد پاسخ های دریافت شده",
        value: data.result.responsesCount,
        icon1: "fa-reply",
      },
      {
        name: "totalReq",
        title: "تعداد درخواست های ارسال شده",
        value: data.result.requestsCount,
        icon1: "fa-paper-plane",
      },
      {
        name: "totalTransaction",
        title: "تعداد کل تراکنش ها",
        value: data.result.transactionsCount,
        icon1: "fa-exchange",
      },
    ],
  };

  return (
    <article className={style.infoBoxes}>
      {props.infoBoxIndex == "bus"
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
