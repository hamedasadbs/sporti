const dynamicData = {
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
  dynamicData.minute.push({
    label: i,
    data: randomData(),
  });
}

for (let i = 0; i < 30; i++) {
  dynamicData.hour.push({
    label: i,
    data: randomData(),
  });
}

for (let i = 0; i < 50; i++) {
  dynamicData.day.push({
    label: i,
    data: randomData(),
  });
}

for (let i = 0; i < 30; i++) {
  dynamicData.month.push({
    label: i,
    data: randomData(),
  });
}

for (let i = 0; i < 10; i++) {
  dynamicData.year.push({
    label: i,
    data: randomData(),
  });
}

export { dynamicData };
