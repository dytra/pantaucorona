import React, { useEffect } from "react";
import "./GraphContainer.scss";
import Chart from "chart.js";
const GraphContainer = ({ data }) => {
  const { confirmed, recovered, deaths } = data;

  useEffect(() => {
    if (recovered) {
      var el = document.getElementById("graph");
      console.log("el is", el);
      const ctx = el.getContext("2d");
      var myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: [recovered.value, confirmed.value, deaths.value],
              backgroundColor: ["rgb(70, 231, 56)", "rgb(218, 186, 8)", "red"]
            }
          ],
          labels: [
            'Terkonfirmsi',
            'Meninggal',
            'Sembuh'
        ]
        },
        options: {
          legend : {
            display:false
          }
        }
      });
    }
    return function cleanup() {
      myChart = null;
    };
  }, [confirmed, recovered, deaths]);
  return (
    <section id="graph-container" className="card">
      <div className="card-title">
        <h2>Sorotan</h2>
      </div>
      <div className="card-body">
        <div id="main-graph">
          <canvas id="graph" />
        </div>
        <div id="graph-legend">
          <div className="legend-item recovered">
            <span className="legend-count">
              {recovered && recovered.value.toLocaleString()}
            </span>
            <span className="legend-label">Sembuh</span>
          </div>
          <div className="legend-item confirmed">
            <span className="legend-count">
              {confirmed && confirmed.value.toLocaleString()}
            </span>
            <span className="legend-label">Terkonfirmasi</span>
          </div>

          <div className="legend-item deaths">
            <span className="legend-count">
              {deaths && deaths.value.toLocaleString()}
            </span>
            <span className="legend-label">Meninggal</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GraphContainer;
