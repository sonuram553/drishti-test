const Pagination = ({ skip, limit, total, onPageChange }) => {
  const isPreviousDisabled = skip === 0;
  const isNextDisabled = skip + limit >= total;

  return (
    <div className="pagination">
      {/* Previous Button */}
      <button
        className={
          "pagination__btn" +
          (isPreviousDisabled ? " pagination__btn--disabled" : "")
        }
        onClick={() => !isPreviousDisabled && onPageChange("previous")}
      >
        Previous
      </button>

      {/* Current Page */}
      <p>{`${skip + 1} to ${
        skip + limit < total ? skip + limit : total
      } of ${total}`}</p>

      {/* Next Button */}
      <button
        className={
          "pagination__btn" +
          (isNextDisabled ? " pagination__btn--disabled" : "")
        }
        onClick={() => !isNextDisabled && onPageChange("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
