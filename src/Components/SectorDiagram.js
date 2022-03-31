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

/* Known Bugs:
    - Does not work if there is a category that doesn't have an asset under
      Could probably be solved if categories has default value of 0 
*/

function SectorDiagram(props) {
  
  // Initialises a list of categories with given properties. 
  var listOfCategories = [{
    id: null,
    name: null,
    value: 0, 
    procentage: 0
  }]


  
  function isNegative(number){
    if(number < 0){
      return true
    } else {
      return false
    }
  }
 
  //INFO!! Cannot calculate the Sectordiagram percentage if the networth is negative !!!!!!!!!!!!

  // Creates a list of categories based on categories props passed from dashboard.
listOfCategories = props.categories.map(category => (
    { id: category.id, 
      name: category.get("name"), 
      value: category.get("value"),
      procentage:  ( ((category.get("value"))*100)/(props.netWorth)).toFixed(1) 
    }
  ));
  
  // Array of colors for the diagram
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
    labels: listOfCategories.map((e) => `${e.procentage}% ${e.name}`),
    // what is shown
    datasets: [
      {
        label: listOfCategories.map((e) => e.name), // Takes the name properties for each category in the list of categories
        data: listOfCategories.map((e) => e.value), // Same as above only with values. 
        borderWidth: 2,
        backgroundColor: arrColors, // Loops through the array of colors
        lineTension: 0.2,
        pointRadius: 1,
      },
    ],
  };
  
  // Styling and features, config options in chart.js doc
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