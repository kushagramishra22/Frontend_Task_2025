import React, { lazy, Suspense, useState, useEffect, useMemo, useCallback } from 'react';
import { sampleQueries } from './data/sampleData';
import QuerySelector from './components/QuerySelector';
import './App.css';

// Lazy loading heavy components to improve initial render performance
const ResultTable = lazy(() => import('./components/ResultTable'));
const QueryEditor = lazy(() => import('./components/QueryEditor'));

function App() {
  // Memoize queries to prevent reinitialization on re-renders
  const queries = useMemo(() => sampleQueries, []);

  const [selectedQueryId, setSelectedQueryId] = useState(null);
  const [currentQuery, setCurrentQuery] = useState('');
  const [currentResult, setCurrentResult] = useState([]);
  const [loadTime, setLoadTime] = useState(null);

  useEffect(() => {
    // Get the load time measured in index.js and update state once
    if (window.appLoadTime !== undefined) {
      setLoadTime(Math.round(window.appLoadTime));
    }
  }, []);

  // Memoized function to prevent unnecessary re-renders
  const handleQuerySelect = useCallback((queryId) => {
    setSelectedQueryId(queryId);
    if (queryId) {
      const selectedQuery = queries.find(q => q.id === queryId);
      setCurrentQuery(selectedQuery?.query || '');
      setCurrentResult(selectedQuery?.result || []);
    } else {
      setCurrentQuery('');
      setCurrentResult([]);
    }
  }, [queries]);

  const handleQueryChange = useCallback((newQuery) => {
    setCurrentQuery(newQuery);
  }, []);

  const handleRunQuery = useCallback(() => {
    if (selectedQueryId) {
      const selectedQuery = queries.find(q => q.id === selectedQueryId);
      setCurrentResult(selectedQuery?.result || []);
    }
  }, [selectedQueryId, queries]);
  
  return (
    <div className="app">
      <Suspense fallback={<div>Loading components...</div>}>
        <header>
          <h1>SQL Query Runner</h1>
          <p>A simple interface to run SQL queries and view results</p>
          {loadTime !== null && (
            <div className="load-time">
              Page loaded in <strong>{loadTime}ms</strong>
            </div>
          )}
        </header>
        <div className="main-content">
          <div className="left-panel">
            <QuerySelector
              queries={queries}
              selectedQueryId={selectedQueryId}
              onQuerySelect={handleQuerySelect}
            />
          </div>

          <div className="right-panel">
            <QueryEditor
              query={currentQuery}
              onQueryChange={handleQueryChange}
            />
            <div className="button-group">
              <button 
                className="run-button" 
                onClick={handleRunQuery}
                disabled={!currentQuery}
              >
                Run Query
              </button> 
              <button 
                onClick={() => setCurrentQuery('')}
                className="clear-btn"
              >
                Clear Query
              </button>
            </div>
            <ResultTable data={currentResult} />
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
