import ActionList from "./ActionList";
import FilterList from "./FilterList";
import { actionListData, actions, dishes, stations } from "../data";
import { useState } from "react";

function App() {
  const [filtersApplied, setFiltersApplied] = useState({
    action: "any",
    dish: "any",
    station: "any",
  });

  const onUpdateFilter = (type, selected) => {
    setFiltersApplied((filter) => ({ ...filter, [type]: selected }));
  };

  const filteredData = () => {
    return actionListData.filter((data) => {
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
    });
  };

  return (
    <section>
      <FilterList
        onChange={onUpdateFilter}
        items={[
          { type: "action", values: actions, selected: filtersApplied.action },
          { type: "dish", values: dishes, selected: filtersApplied.dish },
          {
            type: "station",
            values: stations,
            selected: filtersApplied.station,
          },
        ]}
      />
      <ActionList items={filteredData()} />
    </section>
  );
}

export default App;
