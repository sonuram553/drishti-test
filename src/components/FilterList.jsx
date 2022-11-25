import { actions, dishes, stations } from "../data";
import Filter from "./Filter";

const FilterList = () => {
  return (
    <div className="filter-list">
      <Filter type={"action"} values={actions} />
      <Filter type={"dish"} values={dishes} />
      <Filter type={"station"} values={stations} />
    </div>
  );
};

export default FilterList;
