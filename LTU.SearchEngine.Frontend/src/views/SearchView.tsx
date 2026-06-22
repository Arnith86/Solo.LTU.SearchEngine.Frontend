import { useState } from "react";
import { useSearch } from "../hooks/useSearch";
import { SearchInput } from "../components/SearchInput";
import { SearchResultList } from "../components/SearchResultList";
import { Pagination } from "../components/Pagination";
import { useLanguage } from "../hooks/useLanguage";
import { NoResultContainer } from "../components/NoResultContainer";

export const SearchView = () => {
  const { executeSearch, searchData, isLoading, error, warning } = useSearch();
  const [submittedQuery, setSubmittedQuery] = useState("");
  const { currentLanguage } = useLanguage();

  const handleSearch = (query: string) => {
    setSubmittedQuery(query);
    executeSearch(query, 1, currentLanguage);
  };

  const handlePageChange = (newPage: number) => {
    executeSearch(submittedQuery, newPage, currentLanguage);
  };

  return (
    <div className="search-view">
      <SearchInput onSearch={handleSearch} isLoading={isLoading} />

      {error && <p className="error-message">{error}</p>}
      {warning && <p className="warning-message">{warning}</p>}

      {/* Issue #12: Hantera noll resultat (FRQ-4003) */}
      {searchData && searchData.metaData.totalItemCount === 0 && (
        <NoResultContainer submittedQuery={submittedQuery} />
      )}

      {searchData && (
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
      )}
    </div>
  );
};
