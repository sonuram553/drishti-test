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
      <ActionList items={actionListData} />
    </section>
  );
}

export default App;
