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
          "شناسه",
          "زمان درخواست",
          "نام سیستم",
          "نام مقصد",
          "فعل",
          "اسم",
          "نوع درخواست",
        ],
      },
      {
        title: "جدول آخرین پاسخ ها",
        name: "lastResponses",
        toples: [
          "شناسه",
          "تاریخ پاسخ",
          "تاریخ درخواست",
          "نام سیستم درخواست کننده",
          "نام پاسخ گیرنده",
          "فعل",
          "اسم",
          "زمان اجرا",
          "نوع نتیجه",
        ],
      },
      {
        title: "جدول نرم افزارهای پرکاربرد",
        name: "mostUsedSoftware",
        toples: [
          "نام نرم افزار",
          "تعداد درخواست های ارسال شده",
          "تعداد پاسخ های دریافت شده",
          "مجموع",
        ],
      },
    ],
    softwares: [
      {
        title: "جدول تراکنش ها",
        name: "transactions",
        toples: [
          "شناسه",
          "مبدا",
          "مقصد",
          "تاریخ درخواست",
          "تاریخ پاسخ",
          "نوع درخواست",
          "نوع پاسخ",
        ],
      },
      {
        title: "جدول درخواست ها",
        name: "requests",
        toples: [
          "شناسه",
          "تاریخ درخواست",
          "نام سیستم",
          "نام مقصد",
          "فعل",
          "اسم",
          "نوع درخواست",
        ],
      },
      {
        title: "جدول پاسخ ها",
        name: "responses",
        toples: [
          "شناسه",
          "تاریخ درخواست",
          "تاریخ پاسخ",
          "نام سیستم درخواست کننده",
          "نام پاسخ دهنده",
          "فعل",
          "اسم",
          "مدت زمان اجرا",
          "نوع نتیجه",
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
