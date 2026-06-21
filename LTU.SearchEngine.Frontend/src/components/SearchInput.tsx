import { useSearchParams } from "react-router-dom";

interface SearchInputProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export const SearchInput = ({ onSearch, isLoading }: SearchInputProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newQuery = formData.get("query-input") as string;
    setSearchParams({ query: newQuery });
    onSearch(newQuery);
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          className="search-form-input"
          name="query-input"
          type="text"
          key={query}
          defaultValue={query}
          placeholder='Try "cats" AND "dogs"...'
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>
    </div>
  );
};
