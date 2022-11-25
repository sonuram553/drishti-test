import Visual from "./Visual";
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

  return (
    <main>
      <Visual />
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
