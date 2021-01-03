import React from 'react';
import './App.css';

import MarkdownPreviewer from "./MarkdownPreviewer";

const App = () => (
  <div className="App">
    <div className="container">
      <div id="header">
        <h1>Markdown Previewer</h1>
      </div>

      <MarkdownPreviewer />
    </div>
  </div>
);

export default App;
