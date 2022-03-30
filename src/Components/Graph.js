// import "bootstrap/dist/css/bootstrap.css";
// //import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Tag from "./Tag";
import NetworthNumber from "./NetworthNumber";
import { useEffect, useState } from "react"
import { getHistoricNetworth, postHistoricNetworth } from "../data";
//import React from "react";

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

//Get previous data from database.
//If: current date === previous data from database
//do: nothing
//else: add current networth to database 


function Graph(props) {
   
  const historicNetworth = props.historicNetworth.map( hisEle => hisEle.get("networth"));
  
  const historicMonth = props.historicNetworth.map( hisEle => {
    return hisEle.get("date").getMonth() + 1
  });

  const lastHistoricMonth = historicMonth[ historicMonth.length -1 ]
  
  const [historiMonthState, setHistoriMonthState] = useState( lastHistoricMonth || 0 )
  
  // setHistoriMonthState(historicMonth)
  
  const currentMonth = new Date().getMonth() + 1


  //asd
  useEffect(() => {
    console.log("lastHistoricMonth = " + lastHistoricMonth)
    console.log("currentMonth = " + currentMonth)
    if(lastHistoricMonth === currentMonth){
      
      console.log("Saving to database")
    } 

  }, [historiMonthState])

  
  
  
  function saveHistoricNetworth(){
    try{
      const userId = localStorage.getItem("userId")
      const networth = 10000
      const date = new Date()
      postHistoricNetworth(userId, networth, date)
      console.log("inserted data")
    } catch(error){
      alert("Error in saveHistoricNetworth")
    }
  }
  
  
  const primaryData = historicNetworth;
  const labels = historicMonth;
   /*
  const currentDate = new Date();
  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth(); //Note: Be careful! January is 0 not 1
  const currentYear = currentDate.getFullYear();

  const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;

  console.log(dateString)
  */
  


  const data = {
    labels: labels,
    labelColor: "#18388C",
    datasets: [
      {
        label: "Networth",
        data: primaryData,
        borderWidth: 1.5, //line width
        backgroundColor: "#18388C",
        lineTension: 0.25, //rounding curves of line
        pointRadius: 3,
        // fill: true
      },
    ],
  };

  const options = {
    layout: {
      padding: 0,
    },
    responsive: true, //graph size
    borderColor: "#18388C", //The line color

    plugins: {
      legend: {
        display: false,
        labels: {
          padding: 5,
        },
      },
    },
  };

  return (
    <div
      className="card"
      style={{
        height: "100%",
        width: "100%",
        margin: "auto",
        padding: "70px 10px 10px 10px",
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
  ); //       <div> hej {console.log(historicNetworth)}</div>
     

}

export default Graph;
