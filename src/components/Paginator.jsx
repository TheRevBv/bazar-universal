/* eslint-disable react/prop-types */
// import "../assets/styles/Paginator.css";

const Paginator = ({ page, pages, setPage }) => {
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="paginator">
      {page > 1 ? (
        <button onClick={handlePrev} className="btn">
          {"< "}
        </button>
      ) : (
        ""
      )}

      <span className="page">{page}</span>

      {page < pages ? (
        <button onClick={handleNext} className="btn">
          {"> "}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Paginator;
