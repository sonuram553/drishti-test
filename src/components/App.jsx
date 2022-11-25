import ActionList from "./ActionList";
import FilterList from "./FilterList";
import Pagination from "./Pagination";
import { useEffect, useMemo, useState } from "react";
import { actionListData, actions, dishes, stations } from "../data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const [page, setPage] = useState({
    skip: 0,
    limit: 5,
    total: actionListData.length,
  });

  const [filtersApplied, setFiltersApplied] = useState({
    action: "any",
    dish: "any",
    station: "any",
  });

  // useMemo is used because we don't want to reply filtering logic on page change.
  const filteredData = useMemo(
    () =>
      actionListData.filter((data) => {
        if (
          filtersApplied.action !== "any" &&
          filtersApplied.action !== data.action
        )
          return false;

        if (filtersApplied.dish !== "any" && filtersApplied.dish !== data.dish)
          return false;

        if (
          filtersApplied.station !== "any" &&
          filtersApplied.station !== data.station
        )
          return false;

        return true;
      }),
    [filtersApplied]
  );

  useEffect(() => {
    // Reset pagination on filter change
    resetPagination();
  }, [filtersApplied]);

  const onPageChange = (action) => {
    if (action === "next")
      setPage((page) => ({ ...page, skip: page.skip + page.limit }));
    else setPage((page) => ({ ...page, skip: page.skip - page.limit }));
  };

  const resetPagination = () => {
    setPage((page) => ({ ...page, skip: 0, total: filteredData.length }));
  };

  const onUpdateFilter = (type, selected) => {
    setFiltersApplied((filter) => ({ ...filter, [type]: selected }));
  };

  const pagedData = () => {
    const { skip, limit } = page;
    return filteredData.slice(skip, skip + limit);
  };
  const chartData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <main>
      <section className="chart">
        <div>
          <Doughnut data={chartData} />
        </div>
        <div>
          <Doughnut data={chartData} />
        </div>
        <div>
          <Doughnut data={chartData} />
        </div>
      </section>

      <section>
        <FilterList
          onChange={onUpdateFilter}
          items={[
            {
              type: "action",
              values: actions,
              selected: filtersApplied.action,
            },
            { type: "dish", values: dishes, selected: filtersApplied.dish },
            {
              type: "station",
              values: stations,
              selected: filtersApplied.station,
            },
          ]}
        />
        <ActionList items={pagedData()} />
        <Pagination {...page} onPageChange={onPageChange} />
      </section>
    </main>
  );
}

export default App;
