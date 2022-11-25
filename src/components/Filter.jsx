const Filter = ({ type, values, selected, onChange }) => {
  return (
    <div className="filter">
      <label htmlFor={type}>{type}</label>
      <select
        id={type}
        value={selected}
        onChange={(e) => {
          onChange(type, e.target.value);
        }}
      >
        <option value="any">Any</option>
        {values.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
