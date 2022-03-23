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

function SectorDiagram(props) {
  // prosentage
  const primaryData = [10, 15, 60, 5, 10];
  
  // category labels
  /*
  const labels = [
    "Stocks",
    "Crypto",
    "Real estate",
    "Bank account",
    "Gold",
    "car",
  ];
  */

 
 // maps array at line 22
 /*
 const customLabels = labels.map(
   (label, index) => `${label} ${primaryData[index]}%`
   );
   */
  
  console.log(props.categories[0])

  const catLabels = props.categories.map((category) => 
    `${category.get("name")}` //${category.get("value")}%
  );

  const values = props.categories.map((category) => category.get("value"))
  function calc(){
    values.map((value) => ((value*100)/3000))
  }
  
  console.log(values)
  console.log(calc)
  
  console.log(catLabels)

  // dataset properties in chart.js doc
  const data = {
    labels: catLabels,
    // what is shown
    datasets: [
      {
        label: "# of Votes",
        data: calc(),
        borderWidth: 2,
        backgroundColor: "#18388C", // the background color needs to be different for each
        lineTension: 0.2,
        pointRadius: 1,
        // fill: true,
      },
    ],
  };

  // styling and features, config options in chart.js doc
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
