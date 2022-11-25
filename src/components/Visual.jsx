import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const Visual = ({ actionListData }) => {
  const gen = (type) => {
    const map = {};

    for (const data of actionListData) {
      map[data[type]] = (map[data[type]] || 0) + 1;
    }

    const labels = [];
    const data = [];

    for (const key in map) {
      labels.push(key);
      data.push(map[key]);
    }

    return {
      labels,
      datasets: [
        {
          label: "My First Dataset",
          data,
          backgroundColor: data.map(
            () =>
              `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${
                Math.random() * 256
              })`
          ),
        },
      ],
    };
  };

  return (
    <section className="visual">
      <div>
        <Doughnut data={gen("action")} />
      </div>
      <div>
        <Doughnut data={gen("dish")} />
      </div>
      <div>
        <Doughnut data={gen("station")} />
      </div>
    </section>
  );
};

export default React.memo(Visual);
