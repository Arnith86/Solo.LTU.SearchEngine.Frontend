import type { SearchResponse } from "../models/SearchInterface";
import { NoResultContainer } from "./NoResultContainer";
import { ResultContainer } from "./ResultContainer";

interface SearchBodyProps {
  searchData: SearchResponse | undefined;
  submittedQuery: string;
  onPageChange: (newPage: number) => void;
}

export const SearchBody = ({
  searchData,
  submittedQuery,
  onPageChange,
}: SearchBodyProps) => {
  if (!searchData) return null;

  if (searchData.metaData.totalItemCount === 0)
    return <NoResultContainer submittedQuery={submittedQuery} />;

  return (
    <ResultContainer
      pageChanger={onPageChange}
      searchResponseResults={searchData}
    />
  );
};
