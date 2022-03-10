import "bootstrap/dist/css/bootstrap.css";

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
//https://www.chartjs.org/docs/latest/configuration/legend.html

const primaryData = [13, 15, 60, 2, 10];
const labels = [
  "Stocks",
  "Crypto",
  "Real estate",
  "Bank account",
  "Gold",
  "car",
];

function SectorDiagram() {
  const customLabels = labels.map(
    (label, index) => `${label} ${primaryData[index]}%`
  );

  const data = {
    labels: customLabels,
    datasets: [
      {
        label: "# of Votes",
        data: primaryData,
        borderWidth: 2,
        backgroundColor: "#18388C",
        lineTension: 0.2,
        pointRadius: 1,
        // fill: true,
      },
    ],
  };

  const options = {
    layout: {
      padding: 0,
    },
    responsive: true,
    cutout: "70%",

    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          padding: 5,
        },
      },
      // tooltip: {
      //   callbacks: {
      //     label: (context) => {
      //       let label = `${context.label.split(`${context.parsed}`)[0]}: ${context.parsed}%`;
      //       return label;
      //     }
      //   }
      // }
    },
  };

  return (
    <div>
      <div
        style={{
          width: "",
          maxHeight: "270px",
          padding: "50px 70px 0px 50px",
          position: "relative",
          top: "-117px",
        }}
      >
        <Chart type="doughnut" data={data} options={options} />
      </div>
    </div>
  );
}

export default SectorDiagram;
