const Pagination = ({ skip, limit, total, onPageChange }) => {
  return (
    <div>
      <button
        onClick={() => {
          if (skip > 0) onPageChange("previous");
        }}
      >
        Previous
      </button>

      <p>1 to 10 of 100</p>

      <button
        onClick={() => {
          if (skip + limit < total) onPageChange("next");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
