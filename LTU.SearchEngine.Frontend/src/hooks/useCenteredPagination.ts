import { useMemo } from "react";

interface IUseCenteredPaginationProps {
  currentPage: number;
  totalPages: number;
  windowSize: number;
}

/**
 * Custom hook to generate a sliding window array of page numbers.
 * Keeps the current page centered once the user navigates past the middle of the window.
 * @example
 * // If totalPages is 12, windowSize is 10, and currentPage is 6:
 * useCenteredPagination({ currentPage: 6, totalPages: 12, windowSize: 10 })
 * // Returns: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
 */
export const useCenteredPagination = ({
  currentPage,
  totalPages,
  windowSize = 10,
}: IUseCenteredPaginationProps): number[] => {
  return useMemo(() => {
    if (totalPages <= windowSize) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftOffset = Math.floor((windowSize - 1) / 2);
    let startPage = currentPage - leftOffset;
    startPage = clampToFirstPage(startPage);
    startPage = clampToLastPage(startPage, windowSize, totalPages);

    return Array.from({ length: windowSize }, (_, i) => startPage + i);
  }, [currentPage, totalPages, windowSize]);
};

/**
 * Keeps the starting index from going below the first page (1).
 */
function clampToFirstPage(leftOffset: number): number {
  return leftOffset < 1 ? 1 : leftOffset;
}

/**
 * Calculates if the current window layout overshoots the total page count.
 * If it overshoots, it drags the starting index back so the window perfectly seals flush against the final page.
 */
function clampToLastPage(
  startPage: number,
  windowSize: number,
  totalPages: number,
): number {
  return startPage + windowSize - 1 > totalPages
    ? totalPages - windowSize + 1
    : startPage;
}
