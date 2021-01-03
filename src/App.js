import React from 'react';
import './App.css';



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: "",
    };
  }

  updateMarkdown(markdown) {
    this.setState({markdown});
  }
  render () {
    return (
      <div className="App">
        <div className="container">
          <h1>Markdown Previewer</h1>
          <div className="markdown-input">
            <h2>Markdown Input</h2>
            <div className="mark-input">
              <textarea className="input" value={this.state.markdown} onChange={(e)=>{this.updateMarkdown(e.target.value);}}>
                {console.log(this.state.markdown)}
              </textarea>
            </div>
          </div>
          <div className="preview">
            <h2>Preview</h2>
          </div>
          
        </div>

      </div>
    );
  }
};
