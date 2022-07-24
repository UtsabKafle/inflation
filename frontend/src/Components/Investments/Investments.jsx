import React, { useState, useEffect } from 'react'
import Chart from 'chart.js/auto'
import './Styles/Investment.css'

function show_chart(){
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}


const Investments = () => {
  // useEffect(()=>{
  // show_chart();
  // });
  
  return (
    <div className="cont" >
      <div id="header">Investments</div>
    <div className="inv">
    <div className="inv-box">
    <div className="inv-start">2022-02-1</div>

      <div className="inv-heading">
        Stocks
      </div>
      <div className="inv-present-val">Rs.1500</div>
      <div className="button-holder">
        <button type='button'>View</button>
      </div>
    </div>

    <div className="inv-box">
    <div className="inv-start">2022-01-19</div>

      <div className="inv-heading">
      Savings
      </div>
      <div className="inv-present-val">Rs.200,00</div>
      <button type='button'>View</button>

    </div>


    </div>
    </div>
  )
}

export default Investments

