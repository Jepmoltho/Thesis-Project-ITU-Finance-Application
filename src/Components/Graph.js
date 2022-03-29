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
import { set } from "parse/lib/browser/CoreManager";
import { async } from "parse/lib/browser/Storage";

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

//Get previous data from database.
//If: current date === previous data from database
//do: nothing
//else: add current networth to database 


function Graph(props) {
   
  const hisNetworth = props.historicNetworth.map( hisEle => hisEle.get("networth"))
  const hisDate = props.historicNetworth.map( hisEle => {
    return hisEle.get("date")
  })

  // const [graphData, setGraphData] = useState( hisNetworth || [])



  const primaryData = hisNetworth;
  const labels = hisDate;

// const primaryData = [50000, 150000, 155000, 160000, 145000, 160000];
// const labels = ["Jan22", "feb22", "mar22", "apr22", "may22", "jun21"];

// console.log(props.historicNetworth[0])
  
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


 
 
//  useEffect(() => {
//   //  saveHistoricNetworth()
//   const userId = localStorage.getItem("userId")
//   getHistoricNetworth(userId, setHistoricNetworth)
//   console.log(historicNetworth)
//   }, []);
  
  // useEffect(() => {
  //   isNewMonth()
  //   console.log(historicNetworth)
  // },[historicNetworth]);
  // console.log(historicNetworth[0].get("date"))
  // console.log(historicNetworth[0].get("date"))
  // useEffect(() => {
  //   isNewMonth()
  //   console.log(props.historicNetworth)
  // },[props.historicNetworth]);

  // // function isNewMonth(){
  // //   const currentDate = new Date().getMonth() +1; //Note! January is 0 not 1
  // //   // const dbDate = historicNetworth[0].get("networth")
  // //   const dbDate = props.historicNetworth[0].get("networth")


  //   if (currentDate === dbDate){
  //     console.log("yes set new date to networth")
  //   } else {
  //     console.log("No render nothing")
  //   }
  // }

//  console.log(saveHistoricNetworth()
// const date = new Date().getMonth() + 1
// console.log(date)
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
