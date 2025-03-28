import React from 'react';

const QuerySelector = ({ queries, selectedQueryId, onQuerySelect }) => {
  return (
    <div className="query-selector">
      <h3>Sample Queries</h3>
      <select
        value={selectedQueryId}
        onChange={(e) => onQuerySelect(parseInt(e.target.value))}
      >
        <option value="">Select a sample query...</option>
        {queries.map((query) => (
          <option key={query.id} value={query.id}>
            {query.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default QuerySelector;