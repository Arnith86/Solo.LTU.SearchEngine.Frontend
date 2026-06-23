import type { SearchResponse } from "../models/SearchInterface";
import { Pagination } from "./Pagination";
import { SearchResultList } from "./SearchResultList";

interface ResultContainerProps {
  pageChanger: (newPage: number) => void;
  searchResponseResults: SearchResponse;
}

export const ResultContainer = ({
  pageChanger: handlePageChange,
  searchResponseResults: searchData,
}: ResultContainerProps) => {
  return (
    <>
      <p>
        Ignored common terms:{" "}
        {searchData.ignoredTokens?.map((term) => term.token).join(", ") ||
          "None"}
      </p>
      <p>Found {searchData.metaData.totalItemCount} results</p>
      <small>{`Time taken: ${searchData.message}`}</small>
      <SearchResultList searchResults={searchData.searchResults} />
      {
        <Pagination
          metaData={searchData.metaData}
          onPageChange={handlePageChange}
        />
      }
    </>
  );
};
