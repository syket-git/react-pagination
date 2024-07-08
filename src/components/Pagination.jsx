import PropTypes from "prop-types";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const Pagination = ({ skip, setSkip, total, limit = 5 }) => {
  const currentPage = skip + 1;
  const totalPages = Math.ceil(total / limit);

  const handleNext = () => {
    if (skip < totalPages - 1) {
      setSkip(skip + 1);
    }
  };

  const handlePrev = () => {
    if (skip > 0) {
      setSkip(skip - 1);
    }
  };

  const handlePageClick = (page) => {
    setSkip(page - 1);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - 3);
    const endPage = Math.min(totalPages, currentPage + 3);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`w-[35px] h-[35px] text-sm font-medium border-2 rounded-full flex items-center justify-center ${
            i === currentPage
              ? "bg-blue-500 text-white border-blue-500"
              : "text-gray-500 border-blue-500"
          }`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pt-10 flex items-center justify-center">
      <div className="flex items-center gap-x-5 justify-center">
        <FaCircleArrowLeft
          onClick={handlePrev}
          size={35}
          className={`cursor-pointer ${
            currentPage === 1 ? "text-gray-300" : "text-blue-500"
          }`}
        />
        {renderPageNumbers()}
        <FaCircleArrowRight
          onClick={handleNext}
          size={35}
          className={`cursor-pointer ${
            currentPage === totalPages ? "text-gray-300" : "text-blue-500"
          }`}
        />
      </div>
    </div>
  );
};

Pagination.propTypes = {
  skip: PropTypes.number.isRequired,
  setSkip: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  limit: PropTypes.number,
};

Pagination.defaultProps = {
  limit: 5,
};

export default Pagination;
