import React from 'react';
import './App.css';



export default class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div className="container">
          <h1>Markdown Previewer</h1>
          <div className="text-area">
            <h2>Markdown Input</h2>
          </div>
          <div className="preview">
            <h2>Preview</h2>
          </div>
        </div>

      </div>
    );
  }
};
