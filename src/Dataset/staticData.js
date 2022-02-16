const infoBox = {
  bus: [
    {
      bgColor: "rgb(255, 43, 43)",
      name: "failedRes",
      title: "تعداد پاسخ های ناموفق",
      value: "20",
      icon1: "fa-reply",
      icon2: "fa-close",
    },
    {
      bgColor: "rgb(34, 131, 34)",
      name: "okRes",
      title: "تعداد پاسخ های موفق",
      value: "12",
      icon1: "fa-reply",
      icon2: "fa-check",
    },
    {
      bgColor: "rgb(228, 148, 0)",
      name: "totalRes",
      title: "تعداد کل پاسخ ها",
      value: "30",
      icon1: "fa-reply",
    },
    {
      bgColor: "rgb(126, 33, 126)",
      name: "totalReq",
      title: "تعداد کل درخواست ها",
      value: "5",
      icon1: "fa-paper-plane",
    },
    {
      bgColor: "rgb(41, 41, 250)",
      name: "totalSoft",
      title: "تعداد نرم افزارها",
      value: "10",
      icon1: "fa-desktop",
    },
  ],
  softwares: [
    {
      bgColor: "rgb(228, 148, 0)",
      name: "totalRes",
      title: "تعداد پاسخ های دریافت شده",
      value: "30",
      icon1: "fa-reply",
    },
    {
      bgColor: "rgb(126, 33, 126)",
      name: "totalReq",
      title: "تعداد درخواست های ارسال شده",
      value: "5",
      icon1: "fa-paper-plane",
    },
    {
      bgColor: "rgb(158, 38, 38)",
      name: "totalTransaction",
      title: "تعداد کل تراکنش ها",
      value: "10",
      icon1: "fa-exchange",
    },
  ],
};

const infoTable = {
  bus: [
    {
      title: "جدول آخرین تراکنش",
      toples: ["اسم", "فعل", "سیستم", "تاریخ", "شناسه"],
      records: [
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
      ],
    },
    {
      title: "جدول آخرین تراکنش های موفق",
      toples: ["اسم", "فعل", "سیستم", "تاریخ", "شناسه"],
      records: [
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
      ],
    },
    {
      title: "جدول آخرین تراکنش های ناموفق",
      toples: ["اسم", "فعل", "سیستم", "تاریخ", "شناسه"],
      records: [
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
      ],
    },
    {
      title: "جدول نرم افزارهای پرکاربرد",
      toples: [
        "تعداد درخواست های دریافت شده",
        "تعداد درخواست های ارسال شده",
        "نام نرم افزار",
      ],
      records: [
        ["@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo"],
      ],
    },
  ],
  softwares: [
    {
      title: "جدول تراکنش ها",
      toples: [
        "وضعیت",
        "نوع پیام",
        "نوع تراکنش",
        "از سیستم",
        "تاریخ",
        "به سیستم",
        "شناسه",
      ],
      records: [
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
      ],
    },
    {
      title: "جدول درخواست ها",
      toples: ["وضعیت", "نوع پیام", "تاریخ", "به سیستم", "شناسه"],
      records: [
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
      ],
    },
    {
      title: "جدول پاسخ ها",
      toples: ["وضعیت", "نوع پیام", "شناسه درخواست", "از سیستم", "شناسه"],
      records: [
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
        ["@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
      ],
    },
  ],
};

const info = [infoBox, infoTable];

export { info };
