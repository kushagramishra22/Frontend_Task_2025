import React from 'react';

const QueryEditor = ({ query, onQueryChange }) => {
  return (
    <div className="query-editor">
      <h3>SQL Query</h3>
      <textarea
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Enter your SQL query here..."
      />
    </div>
  );
};

export default QueryEditor;