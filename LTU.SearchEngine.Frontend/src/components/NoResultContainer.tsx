interface NoResultContainerProps {
  submittedQuery: string;
}

export const NoResultContainer = ({
  submittedQuery,
}: NoResultContainerProps) => {
  return (
    <div className="no-results-container">
      <h3>No results found</h3>
      <p>
        Your search for <strong>"{submittedQuery}"</strong> did not match any
        documents.
      </p>
      <ul>
        <li>Make sure all words are spelled correctly.</li>
        <li>Try different keywords.</li>
        <li>Try more general keywords.</li>
      </ul>
    </div>
  );
};
