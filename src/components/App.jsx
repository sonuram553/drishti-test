import ActionList from "./ActionList";
import FilterList from "./FilterList";
import Pagination from "./Pagination";
import { useEffect, useMemo, useState } from "react";
import { actionListData, actions, dishes, stations } from "../data";

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

  useEffect(() => {
    // Reset pagination on filter change
    onPageChange("reset");
  }, [filtersApplied]);

  const onPageChange = (action) => {
    if (action === "reset") setPage((page) => ({ ...page, skip: 0 }));
    else if (action === "next")
      setPage((page) => ({ ...page, skip: page.skip + page.limit }));
    else setPage((page) => ({ ...page, skip: page.skip - page.limit }));
  };

  const onUpdateFilter = (type, selected) => {
    setFiltersApplied((filter) => ({ ...filter, [type]: selected }));
  };

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

  const pagedData = () => {
    const { skip, limit } = page;
    return filteredData.slice(skip, skip + limit);
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
      <ActionList items={pagedData()} />
      <Pagination {...page} onPageChange={onPageChange} />
    </section>
  );
}

export default App;
