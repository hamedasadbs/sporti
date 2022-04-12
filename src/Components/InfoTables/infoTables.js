import { useEffect, useState } from "react";
import axios from "axios";
/*CSS*/
import style from "./infoTables.module.scss";
/*CHILD COMPONENTS*/
import { InfoTable } from "./InfoTable/infoTable";

export const InfoTables = (props) => {
  const numberOfTableRows = 5;
  const [table, setTable] = useState({});
  /*->bus tables<-*/
  const [mostUsedSoftware, setMostUsedSoftware] = useState({});
  const [lastResponses, setLastResponses] = useState({});
  const [lastRequests, setLastRequests] = useState({});
  /*page*/
  const [mostUsedSoftwarePage, setMostUsedSoftwarePage] = useState(1);
  const [lastResponsesPage, setLastResponsesPage] = useState(1);
  const [lastRequestsPage, setLastRequestsPage] = useState(1);

  /*->softwares tables<-*/
  const [responses, setResponses] = useState({});
  const [requests, setRequests] = useState({});
  const [transactions, setTransactions] = useState({});
  /*page*/
  const [responsesPage, setResponsesPage] = useState(1);
  const [requestsPage, setRequestsPage] = useState(1);
  const [transactionsPage, setTransactionsPage] = useState(1);

  /*->bus tables<-*/
  useEffect(() => {
    axios({
      method: "get",
      url: `http://10.42.0.72:44351/api/Bus/LastRequests?PageSize=${numberOfTableRows}&PageNumber=${lastRequestsPage}`,
    }).then((res) => {
      setLastRequests(res.data.result);
    });
  }, [lastRequestsPage]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://10.42.0.72:44351/api/Bus/LastResponses?PageSize=${numberOfTableRows}&PageNumber=${lastResponsesPage}`,
    }).then((res) => {
      setLastResponses(res.data.result);
    });
  }, [lastResponsesPage]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://10.42.0.72:44351/api/Bus/MostUsedSoftware?PageSize=${numberOfTableRows}&PageNumber=${mostUsedSoftwarePage}`,
    }).then((res) => {
      setMostUsedSoftware(res.data.result);
    });
  }, [mostUsedSoftwarePage]);

  /*->softwares tables<-*/
  useEffect(() => {
    axios({
      method: "get",
      url: `http://10.42.0.72:44351/api/Software/Responses?software=${props.software}&PageSize=${numberOfTableRows}&PageNumber=${responsesPage}`,
    }).then((res) => {
      setResponses(res.data.result);
    });
  }, [responsesPage, props]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://10.42.0.72:44351/api/Software/Requests?software=${props.software}&PageSize=${numberOfTableRows}&PageNumber=${requestsPage}`,
    }).then((res) => {
      setRequests(res.data.result);
    });
  }, [requestsPage, props]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://10.42.0.72:44351/api/Software/Transactions?software=${props.software}&PageSize=${numberOfTableRows}&PageNumber=${transactionsPage}`,
    }).then((res) => {
      setTransactions(res.data.result);
    });
  }, [transactionsPage, props]);

  useEffect(() => {
    setTable({
      bus: [
        {
          title: "جدول آخرین درخواست ها",
          toples: [
            "نوع درخواست",
            "اسم",
            "فعل",
            "نام مقصد",
            "نام سیستم",
            "زمان درخواست",
            "شناسه",
          ],
          records: lastRequests.requests.map((res) => [
            res.requestType,
            res.noun,
            res.verb,
            res.destinationName,
            res.systemName,
            res.requestTime,
            res.correlationId,
          ]),
          pageHandler: (p) => {
            setLastRequestsPage(p);
          },
          numberOfPages: Math.ceil(lastRequests.count / numberOfTableRows),
          currentPage: lastRequestsPage,
        },
        {
          title: "جدول آخرین پاسخ ها",
          toples: [
            "تاریخ درخواست",
            "تاریخ پاسخ",
            "نام سیستم درخواست کننده",
            "نام پاسخ گیرنده",
            "فعل",
            "اسم",
            "زمان اجرا",
            "شناسه",
          ],
          records: lastResponses.responses.map((res) => [
            res.requestTime,
            res.responseTime,
            res.requestSystemName,
            res.responserName,
            res.verb,
            res.noun,
            res.executionTime,
            res.correlationId,
          ]),
          pageHandler: (p) => {
            setLastResponsesPage(p);
          },
          numberOfPages: Math.ceil(lastResponses.count / numberOfTableRows),
          currentPage: lastResponsesPage,
        },
        {
          title: "جدول نرم افزارهای پرکاربرد",
          toples: [
            "مجموع",
            "تعداد پاسخ های دریافت شده",
            "تعداد درخواست های ارسال شده",
            "نام نرم افزار",
          ],
          records: mostUsedSoftware.softwares.map((res) => [
            res.total,
            res.responseCount,
            res.requestCount,
            res.softwareName,
          ]),
          pageHandler: (p) => {
            setMostUsedSoftwarePage(p);
          },
          numberOfPages: Math.ceil(mostUsedSoftware.count / numberOfTableRows),
          currentPage: mostUsedSoftwarePage,
        },
      ],
      softwares: [
        {
          title: "جدول تراکنش ها",
          toples: [
            "نوع نتیجه",
            "نوع درخواست",
            "تاریخ پاسخ",
            "تاریخ درخواست",
            "مقصد",
            "مبدا",
            "شناسه",
          ],
          records: transactions.transactions.map((res) => [
            res.resultType,
            res.requestType,
            res.responseTime,
            res.requestTime,
            res.destination,
            res.source,
            res.correlationId,
          ]),
          pageHandler: (p) => {
            setTransactionsPage(p);
          },
          numberOfPages: Math.ceil(transactions.count / numberOfTableRows),
          currentPage: requestsPage,
        },
        {
          title: "جدول درخواست ها",
          toples: [
            "نوع درخواست",
            "اسم",
            "فعل",
            "نام مقصد",
            "نام سیستم",
            "تاریخ درخواست",
            "شناسه",
          ],
          records: requests.requests.map((res) => [
            res.requestType,
            res.noun,
            res.verb,
            res.destinationName,
            res.systemName,
            res.requestTime,
            res.correlationId,
          ]),
          pageHandler: (p) => {
            setRequestsPage(p);
          },
          numberOfPages: Math.ceil(requests.count / numberOfTableRows),
          currentPage: requestsPage,
        },
        {
          title: "جدول پاسخ ها",
          toples: [
            "نوع نتیجه",
            "مدت زمان اجرا",
            "اسم",
            "فعل",
            "نام پاسخ دهنده",
            "نام سیستم درخواست کننده",
            "تاریخ پاسخ",
            "تاریخ درخواست",
            "شناسه",
          ],
          records: responses.responses.map((res) => [
            res.resultType,
            res.executionTime,
            res.noun,
            res.verb,
            res.responserName,
            res.requestSystemName,
            res.responseTime,
            res.requestTime,
            res.correlationId,
          ]),
          pageHandler: (p) => {
            setResponsesPage(p);
          },
          numberOfPages: Math.ceil(responses.count / numberOfTableRows),
          currentPage: responsesPage,
        },
      ],
    });
  }, []);

  return (
    <article className={style.infoTables}>
      {props.infoIndex === "bus"
        ? table.bus.map((it, index) => (
            <InfoTable
              title={it.title}
              toples={it.toples}
              records={it.records}
              darkMode={props.darkMode}
              key={index}
              index={index}
              pageHandler={it.pageHandler}
              numberOfPages={it.numberOfPages}
              currentPage={it.currentPage}
            />
          ))
        : table.softwares.map((it, index) => (
            <InfoTable
              title={it.title}
              toples={it.toples}
              records={it.records}
              darkMode={props.darkMode}
              key={index}
              index={index}
              pageHandler={it.pageHandler}
              numberOfPages={it.numberOfPages}
              currentPage={it.currentPage}
            />
          ))}
    </article>
  );
};
