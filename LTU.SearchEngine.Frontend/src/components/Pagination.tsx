import { useCenteredPagination } from "../hooks/useCenteredPagination";
import type { PaginationMetaData } from "../models/SearchInterface";

interface PaginationProps {
  metaData: PaginationMetaData;
  onPageChange: (newPage: number) => void;
}

export const Pagination = ({ metaData, onPageChange }: PaginationProps) => {
  const pageNumbers = useCenteredPagination({
    currentPage: metaData.currentPage,
    totalPages: metaData.totalPages,
    windowSize: 10,
  });

  if (metaData.totalPages <= 1) return null;

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(metaData.currentPage - 1)}
        disabled={!metaData.hasPrevious}
      >
        Previous
      </button>

      <div className="pagination-numbers">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={pageNumber === metaData.currentPage ? "active" : ""}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(metaData.currentPage + 1)}
        disabled={!metaData.hasNext}
      >
        Next
      </button>

      <span>
        Page {metaData.currentPage} of {metaData.totalPages}
      </span>
    </div>
  );
};
