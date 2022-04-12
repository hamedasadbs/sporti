/*INNER COMPONENTS*/
import { useEffect, useState } from "react";
import axios from "axios";
/*CSS*/
import style from "./busCharts.module.scss";
/*CHILD COMPONENTS*/
import { LineChart } from "../../../Components/Charts/LineChart/lineChart";
import { BarChart } from "../../../Components/Charts/BarChart/barChart";

export const BusCharts = (props) => {
  const [softwareRequestDiagramTimeRange, setSoftwareRequestDiagramTimeRange] =
    useState([]);
  const [
    softwareResponseDiagramTimeRange,
    setSoftwareResponseDiagramTimeRange,
  ] = useState([]);
  const [
    transactionsSuccessRatioTimeRange,
    setTransactionsSuccessRatioTimeRange,
  ] = useState([]);
  const [responseTimeAverageTimeRange, setResponseTimeAverageTimeRange] =
    useState([]);
  /*->line charts<-*/
  const [okResponseRatios, setOkResponseRatios] = useState([]);
  const [responseDiagram, setResponseDiagram] = useState([]);
  const [requestDiagram, setRequestDiagram] = useState([]);
  /*time type*/
  const [okResponseRatiosTimeType, setOkResponseRatiosTimeType] = useState(0);
  const [responseDiagramTimeType, setResponseDiagramTimeType] = useState(0);
  const [requestDiagramTimeType, setRequestDiagramTimeType] = useState(0);

  /*->bar charts<-*/
  const [softwareRequestDiagram, setSoftwareRequestDiagram] = useState([]);
  const [softwareResponseDiagram, setSoftwareResponseDiagram] = useState([]);
  const [transactionsSuccessRatio, setTransactionsSuccessRatio] = useState([]);
  const [responseTimeAverage, setResponseTimeAverage] = useState([]);

  /*->line charts<-*/
  useEffect(() => {
    axios({
      method: "get",
      url: `http://10.42.0.72:44351/api/Bus/OkResponseRatios?timeType=${okResponseRatiosTimeType}`,
    }).then((res) => {
      setOkResponseRatios(res.data.result);
    });
  }, [okResponseRatiosTimeType]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://10.42.0.72:44351/api/Bus/ResponseDiagram?timeType=${responseDiagramTimeType}`,
    }).then((res) => {
      setResponseDiagram(res.data.result);
    });
  }, [responseDiagramTimeType]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://10.42.0.72:44351/api/Bus/RequestDiagram?timeType=${requestDiagramTimeType}`,
    }).then((res) => {
      setRequestDiagram(res.data.result);
    });
  }, [requestDiagramTimeType]);

  /*->bar charts<-*/
  useEffect(() => {
    if (softwareRequestDiagramTimeRange.length) {
      alert(softwareRequestDiagramTimeRange[0]);
      axios({
        method: "get",
        url: `http://10.42.0.72:44351/api/Bus/SoftwareRequestDiagram?takeCount=10&start=${softwareRequestDiagramTimeRange[0]}%20${softwareRequestDiagramTimeRange[1]}&end=${softwareRequestDiagramTimeRange[2]}%20${softwareRequestDiagramTimeRange[3]}%2000`,
      }).then((res) => {
        setSoftwareRequestDiagram(res.data.result);
      });
    }
  }, [softwareRequestDiagramTimeRange]);

  useEffect(() => {
    if (softwareResponseDiagramTimeRange.length) {
      alert(softwareResponseDiagramTimeRange[0]);
      axios({
        method: "get",
        url: `http://10.42.0.72:44351/api/Bus/SoftwareResponseDiagram?takeCount=10&start=${softwareRequestDiagramTimeRange[0]}%20${softwareRequestDiagramTimeRange[1]}&end=${softwareRequestDiagramTimeRange[2]}%20${softwareRequestDiagramTimeRange[3]}%2000`,
      }).then((res) => {
        setSoftwareResponseDiagram(res.data.result);
      });
    }
  }, [softwareResponseDiagramTimeRange]);

  useEffect(() => {
    if (transactionsSuccessRatioTimeRange.length) {
      alert(transactionsSuccessRatioTimeRange[0]);
      axios({
        method: "get",
        url: `http://10.42.0.72:44351/api/Bus/TransactionsSuccessRatio?takeCount=10&start=${transactionsSuccessRatioTimeRange[0]}%20${transactionsSuccessRatioTimeRange[1]}&end=${transactionsSuccessRatioTimeRange[2]}%20${transactionsSuccessRatioTimeRange[3]}%2000`,
      }).then((res) => {
        setTransactionsSuccessRatio(res.data.result);
      });
    }
  }, [transactionsSuccessRatioTimeRange]);

  useEffect(() => {
    if (responseTimeAverageTimeRange.length) {
      alert(responseTimeAverageTimeRange[0]);
      axios({
        method: "get",
        url: `http://10.42.0.72:44351/api/Bus/ResponseTimeAverage?takeCount=10&start=${responseTimeAverageTimeRange[0]}%20${responseTimeAverageTimeRange[1]}&end=${responseTimeAverageTimeRange[2]}%20${responseTimeAverageTimeRange[3]}%2000`,
      }).then((res) => {
        setResponseTimeAverage(res.data.result);
      });
    }
  }, [responseTimeAverageTimeRange]);

  return (
    <main className={style.busCharts}>
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
          title="پاسخ های دریافت شده"
          color="#b37400"
          darkColor="#ffaf1a"
          id="2"
          dataset={responseDiagram}
          setTimeType={setResponseDiagramTimeType}
          yPosition={Object.keys(responseDiagram[0])[0]}
        />
      )}
      {requestDiagram.length && (
        <LineChart
          darkMode={props.darkMode}
          title="درخواست های ارسال شده"
          color="#651b65"
          darkColor="#a12ba1"
          id="3"
          dataset={requestDiagram}
          setTimeType={setRequestDiagramTimeType}
          yPosition={Object.keys(requestDiagram[0])[0]}
        />
      )}
      <BarChart
        darkMode={props.darkMode}
        title="نرم افزار هایی با بیشترین درخواست"
        color="#651b65"
        darkColor="#a12ba1"
        id={1}
        setTimeRange={setSoftwareRequestDiagramTimeRange}
      />
      <BarChart
        darkMode={props.darkMode}
        title="نرم افزار هایی با بیشترین پاسخ"
        color="#0606f9"
        darkColor="#5151fb"
        id={2}
        setTimeRange={setSoftwareResponseDiagramTimeRange}
      />
      <BarChart
        darkMode={props.darkMode}
        title="ضریب موفقیت تراکنش ها"
        color="#7b1e1e"
        darkColor="#b92d2d"
        id={3}
        setTimeRange={setTransactionsSuccessRatioTimeRange}
      />
      <BarChart
        darkMode={props.darkMode}
        title="متوسط زمان پاسخ نرم افزار ها"
        color="#a2102d"
        darkColor="#e81741"
        id={4}
        setTimeRange={setResponseTimeAverageTimeRange}
      />
    </main>
  );
};
