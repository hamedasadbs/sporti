import style from "./infoTables.module.scss";
/*CHILD COMPONENTS*/
import { InfoTable } from "./InfoTable/infoTable";

export const InfoTables = (props) => {
  const tableInfo = {
    bus: [
      {
        title: "جدول آخرین درخواست ها",
        name: "lastRequests",
        toples: [
          "نوع درخواست",
          "اسم",
          "فعل",
          "نام مقصد",
          "نام سیستم",
          "زمان درخواست",
          "شناسه",
        ],
      },
      {
        title: "جدول آخرین پاسخ ها",
        name: "lastResponses",
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
      },
      {
        title: "جدول نرم افزارهای پرکاربرد",
        name: "mostUsedSoftware",
        toples: [
          "مجموع",
          "تعداد پاسخ های دریافت شده",
          "تعداد درخواست های ارسال شده",
          "نام نرم افزار",
        ],
      },
    ],
    softwares: [
      {
        title: "جدول تراکنش ها",
        name: "transactions",
        toples: [
          "نوع نتیجه",
          "نوع درخواست",
          "تاریخ پاسخ",
          "تاریخ درخواست",
          "مقصد",
          "مبدا",
          "شناسه",
        ],
      },
      {
        title: "جدول درخواست ها",
        name: "requests",
        toples: [
          "نوع درخواست",
          "اسم",
          "فعل",
          "نام مقصد",
          "نام سیستم",
          "تاریخ درخواست",
          "شناسه",
        ],
      },
      {
        title: "جدول پاسخ ها",
        name: "responses",
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
      },
    ],
  };

  return (
    <article className={style.infoTables}>
      {props.infoIndex === "bus"
        ? tableInfo.bus.map((it, index) => (
            <InfoTable
              title={it.title}
              name={it.name}
              toples={it.toples}
              darkMode={props.darkMode}
              key={index}
              index={index}
              numberOfPages={it.numberOfPages}
              currentPage={it.currentPage}
            />
          ))
        : tableInfo.softwares.map((it, index) => (
            <InfoTable
              title={it.title}
              name={it.name}
              toples={it.toples}
              darkMode={props.darkMode}
              key={index}
              index={index}
              numberOfPages={it.numberOfPages}
              currentPage={it.currentPage}
              software={props.software}
            />
          ))}
    </article>
  );
};
