const Filter = ({ type, values }) => {
  return (
    <div className="filter">
      <label for={type}>{type}</label>
      <select id={type}>
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
