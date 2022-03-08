// import "bootstrap/dist/css/bootstrap.css";
// //import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Tag from "./Tag";
import NetworthNumber from "./NetworthNumber";

import React from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

function Graph() {
  const data = {
    labels: ["Jan21", "feb22", "mar22"],
    datasets: [
      {
        label: "Networth",
        data: [35000, 55000, 100000],
        borderWidth: 2,
        backgroundColor: "#18388C",
        lineTension: 0.2,
        pointRadius: 3,
        // fill: true
      },
    ],
  };

  const options = {
    layout: {
      padding: 10,
    },
    responsive: true,
    legend: {
      display: false,
    },
  };

  return (
    <div
      className="card"
      style={{
        height: "100%",
        width: "100%",
        margin: "auto",
        paddingTop: "5%",
        paddingRight: "10px",
      }}
    >
      <div
        name="graph text"
        style={{ position: "absolute", top: "10px", left: "70px" }}
      >
        <Tag text="Networth" />
        <NetworthNumber value={150000} />
      </div>
      <Chart type="line" data={data} options={options} style={{ bottom: 0 }} />
    </div>
  );
}

export default Graph;
