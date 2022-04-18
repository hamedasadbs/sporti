import style from "./infoTables.module.scss";
/*CHILD COMPONENTS*/
import { InfoTable } from "./InfoTable/infoTable";

export const InfoTables = (props) => {
  const tableInfo = {
    bus: [
      {
        title: "آخرین درخواست ها",
        name: "lastRequests",
        toples: [
          "شناسه درخواست",
          "زمان درخواست",
          "سیستم مبدا",
          "سیستم مقصد",
          "فعل",
          "اسم",
          "نوع درخواست",
        ],
      },
      {
        title: "آخرین پاسخ ها",
        name: "lastResponses",
        toples: [
          "شناسه درخواست",
          "زمان درخواست",
          "زمان پاسخ",
          "سیستم درخواست کننده",
          "سیستم پاسخ گیرنده",
          "فعل",
          "اسم",
          "مدت زمان اجرا",
          "نوع نتیجه",
        ],
      },
      {
        title: "نرم افزارهای پرکاربرد",
        name: "mostUsedSoftware",
        toples: ["نام نرم افزار", "تعداد درخواست ها", "تعداد پاسخ ها", "مجموع"],
      },
    ],
    softwares: [
      {
        title: "تراکنش ها",
        name: "transactions",
        toples: [
          "شناسه درخواست",
          "سیستم مبدا",
          "سیستم مقصد",
          "زمان درخواست",
          "زمان پاسخ",
          "نوع درخواست",
          "نوع پاسخ",
        ],
      },
      {
        title: "درخواست ها",
        name: "requests",
        toples: [
          "شناسه درخواست",
          "تاریخ درخواست",
          "سیستم مبدا",
          "سیستم مقصد",
          "فعل",
          "اسم",
          "نوع درخواست",
        ],
      },
      {
        title: "پاسخ ها",
        name: "responses",
        toples: [
          "شناسه درخواست",
          "زمان درخواست",
          "زمان پاسخ",
          "نام درخواست کننده",
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
              toples={it.toples.reverse()}
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
              toples={it.toples.reverse()}
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
