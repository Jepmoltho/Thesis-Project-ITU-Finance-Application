// import "bootstrap/dist/css/bootstrap.css";
// //import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Tag from "./Tag";
import NetworthNumber from "./NetworthNumber";


import React, { useState, useEffect }  from "react";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);



function Graph(){

    const data = {
        labels: ['Jan21', 'feb22'],
        datasets: [{
            label: '# of Votes',
            data: [35000, 55000],
            borderWidth: 2,
            backgroundColor: '#18388C',
            lineTension: 0.2,
            pointRadius: 3,
            // fill: true
        }]
    };

    const options = {
        layout: {
            padding: 10
        },
        responsive: true,
        legend: {
            display: false
        },
    } 

    return (
        <div className="card" style={{height: "100%", width: "100%"}}>
            
            <div name="graph text" style={{position: "absolute", top:"50px", left: "100px"}}> 
                <Tag text="Networth"/>
                <NetworthNumber value={150000} />

            </div>
            <div name="graph visualization" style={{ height: "auto", width: "auto", paddingTop: "0px", position: "relative", top:"0px", left: "0px"}}  >    
                <Chart 
                    type='line'
                    data={data}
                    options={options}
                    />
                </div>
        </div>
    )
}

export default Graph