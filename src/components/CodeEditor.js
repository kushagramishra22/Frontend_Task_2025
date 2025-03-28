import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ value, onChange, onExecute }) => {
  return (
    <div className="code-editor-container">
      <Editor
        height="300px"
        defaultLanguage="sql"
        value={value}
        onChange={onChange}
        options={{
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          fontSize: 14,
          wordWrap: 'on',
          automaticLayout: true,
        }}
      />
      <button onClick={onExecute} className="execute-button">
        Execute Query
      </button>
    </div>
  );
};

export default CodeEditor;