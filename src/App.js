import React from 'react';
import './App.css';

let marked = require("marked");

// allows line breaks with return button
marked.setOptions({
  breaks: true
});

// inserts target="_blank" into href tags (required for codepen links)
const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};

const placeholder = `# Check out my React Markdown Previewer!
## A lot of cool stuff here:
### Like this code, \`<div></div>\`, between two backticks.
\`\`\`

// or this multi-line code:

function soCool(firstLine, secondline) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can make stuff appear **bold** or _italic_.
Or you can just ~~cross stuff out~~

You can also [link](https://www.github.com/MaschaU) to an amazing destination,
and 
> Block Quotes!

Or you can create tables to your heart's content:
Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------

- Let's not forget about lists!
- Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
![Cute Overload](https://ahead4-thegreatprojects.s3.eu-west-2.amazonaws.com/image-cache/6/5/3/a/6/653a650a7f47332c8833716c76a7e0c36a291f23-international-sloth-day-2018-sloths-need-our-help-so-lets-get-moving-6879.jpeg)
`
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: placeholder,
    };
    this.clearTextArea = this.clearTextArea.bind(this);
  }

  updateMarkdown(markdown) {
    this.setState({markdown});
  }

  clearTextArea() {
    this.setState({
      markdown: ""
    });
  }
  render () {
    return (
      <div className="App">
        <div className="container">
          <div id="header">
            <h1>Markdown Previewer</h1>
          </div>
          <div className="markdown-input">
            <h2 id="h2-input">Markdown Input:</h2>
            <div className="mark-input">
              <textarea id="editor" value={this.state.markdown} onChange={(e)=>{this.updateMarkdown(e.target.value);}}>
                {console.log(this.state.markdown)}
              </textarea>
            </div>
          </div>
          <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}>
          </div>
          <div>
            <button onClick={this.clearTextArea}>Clear</button>
          </div>
          
        </div>

      </div>
    );
  }
};
