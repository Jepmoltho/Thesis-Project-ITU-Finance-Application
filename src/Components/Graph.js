import "bootstrap/dist/css/bootstrap.css";
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
            // fill: true,
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
        <div className="card" style={{height: "430px", width: "720px"}}  >
            <Chart 
                type='line'
                data={data}
                options={options}
            />
            <div>
                {/* <button onClick={'addData()'} id="insertdata">Add data</button> */}
                
            </div>
        </div>
    )
}

export default Graph