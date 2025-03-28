import React from 'react';
import { FixedSizeList as List } from 'react-window';
import './ResultTable.css';

const ResultTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="no-results">No results to display</div>;
  }

  const columns = Object.keys(data[0]);

  // Virtualized row renderer
  const Row = ({ index, style }) => (
    <div style={style} className="table-row">
      {columns.map((column) => (
        <div key={`${index}-${column}`} className="table-cell">
          {data[index][column]}
        </div>
      ))}
    </div>
  );

  return (
    <div className="result-table">
      <h3>Query Results ({data.length} rows)</h3>
      
      {/* Table header */}
      <div className="table-header">
        {columns.map((column) => (
          <div key={column} className="header-cell">{column}</div>
        ))}
      </div>

      {/* Virtualized list for rows */}
      <List
        height={400} // Visible height
        itemCount={data.length}
        itemSize={35} // Row height
        width="100%"
      >
        {Row}
      </List>
    </div>
  );
};

export default ResultTable;