import Filter from "./Filter";

const FilterList = ({ items, onChange }) => {
  return (
    <div className="filter-list">
      {items.map((item) => (
        <Filter key={item.type} {...item} onChange={onChange} />
      ))}
    </div>
  );
};

export default FilterList;
