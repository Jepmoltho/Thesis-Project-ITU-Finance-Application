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

/* BUGS:
    Does not work if there is a category that doesn't have an asset under
      - Could be solved if categories has default value of 0 
*/

function SectorDiagram(props) {
  var listOfCategories = [{
    id: null,
    name: null,
    value: 0, 
    procentage: 0
  }]

  listOfCategories = props.categories.map(category => (
    { id: category.id, 
      name: category.get("name"), 
      value: category.get("value"),
      procentage: (((category.get("value"))*100)/(props.netWorth)).toFixed(1) 
    }
  ));

  var arrColors = [
    "#00145E",
    "#18388C",
    "rgb(24,56,140, 0.5)",
    "rgb(205, 241, 131, 0.5",
    "rgb(205, 241, 131",
    "#9ABE54",
    "#00145E",
    "#5462BD",
  ]
  
  // dataset properties in chart.js doc
  const data = {
    labels: listOfCategories.map((e) => `${e.name} ${e.procentage}%`),
    // what is shown
    datasets: [
      {
        label: listOfCategories.map((e) => e.name),
        data: listOfCategories.map((e) => e.value),
        borderWidth: 2,
        backgroundColor: arrColors, // the background color needs to be different for each
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


  // ---- DONE ---- step 1. fix % calc in the left display
  // ---- DONE ---- step 2. Try to display the % icon when hovering
  // ---- DONE ---- step 3. Spend 30 min trying to solve colors issue.PoC - 10 stk. 
  // ---- DONE ---- step 4. reduce decimals to two
  // when you add new category it fucks up until you add an asset

// prosentage
//onst primaryData = [10, 15, 60, 5, 10];

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

 // Map values and calculate procentage
  const values = props.categories.map((category) => category.get("value"))
  const calc = values.map((value) => ((value*100)/(props.netWorth)))

 */

   // Information displayed on the side of the diagram
  /*
  const catLabels = props.categories.map((category) => 
  `${category.get("name")}`  //${(category.get("value"))}%
  );

  const catLabels = listOfCategories.map((category) => 
    `${category.name} ${(category.procentage)}%`
  );
  */