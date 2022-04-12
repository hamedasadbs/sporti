/*INNER COMPONENTS*/
import { useEffect, useState } from "react";
import axios from "axios";
/*CSS*/
import style from "./softwaresCharts.module.scss";
/*CHILD COMPONENTS*/
import { LineChart } from "../../../Components/Charts/LineChart/lineChart";
import { BarChart } from "../../../Components/Charts/BarChart/barChart";

export const SoftwaresCharts = (props) => {
  /*->line charts<-*/
  const [okResponseRatios, setOkResponseRatios] = useState([]);
  const [responseDiagram, setResponseDiagram] = useState([]);
  const [requestDiagram, setRequestDiagram] = useState([]);
  /*time type*/
  const [okResponseRatiosTimeType, setOkResponseRatiosTimeType] = useState(0);
  const [responseDiagramTimeType, setResponseDiagramTimeType] = useState(0);
  const [requestDiagramTimeType, setRequestDiagramTimeType] = useState(0);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://10.42.0.72:44351/api/Software/OkResponseRatios?software=${props.software}&timeType=${okResponseRatiosTimeType}`,
    }).then((res) => {
      setOkResponseRatios(res.data.result);
    });
  }, [okResponseRatiosTimeType, props]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://10.42.0.72:44351/api/Software/ResponseDiagram?software=${props.software}&timeType=${responseDiagramTimeType}`,
    }).then((res) => {
      setResponseDiagram(res.data.result);
    });
  }, [responseDiagramTimeType, props]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://10.42.0.72:44351/api/Software/RequestDiagram?software=${props.software}&timeType=${requestDiagramTimeType}`,
    }).then((res) => {
      setRequestDiagram(res.data.result);
    });
  }, [requestDiagramTimeType, props]);

  return (
    <main className={style.softwaresCharts}>
      {okResponseRatios.length && (
        <LineChart
          darkMode={props.darkMode}
          title="نسبت موفقیت پاسخ ها"
          color="#1a651a"
          darkColor="#2aa22a"
          id="1"
          dataset={okResponseRatios}
          setTimeType={setOkResponseRatiosTimeType}
          yPosition={Object.keys(okResponseRatios[0])[0]}
        />
      )}
      {responseDiagram.length && (
        <LineChart
          darkMode={props.darkMode}
          title="تعداد درخواست ها"
          color="#651b65"
          darkColor="#a12ba1"
          id="2"
          dataset={responseDiagram}
          setTimeType={setResponseDiagramTimeType}
          yPosition={Object.keys(responseDiagram[0])[0]}
        />
      )}
      {requestDiagram.length && (
        <LineChart
          darkMode={props.darkMode}
          title="تعداد پاسخ ها"
          color="#b37400"
          darkColor="#ffaf1a"
          id="3"
          dataset={requestDiagram}
          setTimeType={setRequestDiagramTimeType}
          yPosition={Object.keys(requestDiagram[0])[0]}
        />
      )}
      <BarChart
        darkMode={props.darkMode}
        title="تراکنش با سیستم های پر استفاده"
        color="#7b1e1e"
        darkColor="#b92d2d"
        id="1"
      />
      <BarChart
        darkMode={props.darkMode}
        title="درخواست به سیستم های پر استفاده"
        color="#0606f9"
        darkColor="#5151fb"
        id="2"
      />
      <BarChart
        darkMode={props.darkMode}
        title="دریافت رویداد و پاسخ از سیستم های پر تراکنش"
        color="#7b1e1e"
        darkColor="#b92d2d"
        id="3"
      />
    </main>
  );
};
