import { useState } from "react";
import { useSearch } from "../hooks/useSearch";
import { SearchInput } from "../components/SearchInput";
import { useLanguage } from "../hooks/useLanguage";
import { SearchBody } from "../components/SearchBody";

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

      <SearchBody
        submittedQuery={submittedQuery}
        searchData={searchData}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
