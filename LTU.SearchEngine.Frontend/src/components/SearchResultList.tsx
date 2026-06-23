import type { SearchResultItem } from "../models/SearchInterface";

export const SearchResultList = ({
  searchResults,
}: {
  searchResults: SearchResultItem[];
}) => {
  return (
    <div className="search-results">
      {searchResults.map((result) => (
        <div key={result.id} className="search-result-item">
          <a className="search-result-title" href={result.url}>
            {result.title}
          </a>
          <br />
          <small>{result.url}</small>
          {/* FRQ-3014: Renderar snippet med HTML-highlighting */}
          {/* <p dangerouslySetInnerHTML={{ __html: result.snippet }} /> */}
        </div>
      ))}
    </div>
  );
};
