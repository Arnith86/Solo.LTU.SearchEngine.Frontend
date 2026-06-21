import type { PaginationMetaData } from "../models/SearchInterface";

interface PaginationProps {
  metaData: PaginationMetaData;
  onPageChange: (newPage: number) => void;
}

export const Pagination = ({ metaData, onPageChange }: PaginationProps) => {
  if (metaData.totalPages <= 1) return null;

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(metaData.currentPage - 1)}
        disabled={!metaData.hasPrevious}
      >
        Previous
      </button>

      <span>
        Page {metaData.currentPage} of {metaData.totalPages}
      </span>

      <button
        onClick={() => onPageChange(metaData.currentPage + 1)}
        disabled={!metaData.hasNext}
      >
        Next
      </button>
    </div>
  );
};
