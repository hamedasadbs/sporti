const dataset = {
  minute: [],
  hour: [],
  day: [],
  month: [],
  year: [],
  software: [
    {
      swName: "نرم افزار اول",
      data: 50,
    },
    {
      swName: "نرم افزار سوم",
      data: 10,
    },
    {
      swName: "نرم افزار هفتم",
      data: 70,
    },
    {
      swName: "نرم افزار ششم",
      data: 25,
    },
    {
      swName: "نرم افزار دوم",
      data: 25,
    },
    {
      swName: "نرم افزار دوازدهم",
      data: 23,
    },
  ],
};

function randomData() {
  return Math.ceil(Math.random() * (200 - 10) + 10);
}

for (let i = 0; i < 100; i++) {
  dataset.minute.push({
    label: i,
    data: randomData(),
  });
}

for (let i = 0; i < 30; i++) {
  dataset.hour.push({
    label: i,
    data: randomData(),
  });
}

for (let i = 0; i < 50; i++) {
  dataset.day.push({
    label: i,
    data: randomData(),
  });
}

for (let i = 0; i < 30; i++) {
  dataset.month.push({
    label: i,
    data: randomData(),
  });
}

for (let i = 0; i < 10; i++) {
  dataset.year.push({
    label: i,
    data: randomData(),
  });
}

export { dataset };
