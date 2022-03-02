import React, { useState, useEffect }  from "react";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

function SectorDiagram(){


    const data = {
        labels: ['Jan21', 'feb22'],
        datasets: [{
            label: '# of Votes',
            data: [35000, 55000],
            borderWidth: 2,
            backgroundColor: '#18388C',
            lineTension: 0.2,
            pointRadius: 1,
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
        <div className="card">
            <div  style={{height: "50%", width: "50%"}}  >
                <Chart 
                    type='doughnut'
                    data={data}
                    options={options}
                />
            </div>
        </div>
    )
}

export default SectorDiagram