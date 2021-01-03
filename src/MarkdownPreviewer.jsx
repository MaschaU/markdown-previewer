import React from "react";
import classes from './MarkdownPreviewer.module.css';

const marked = require("marked");

// allows line breaks with return button
marked.setOptions({
  breaks: true,
});

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
`;
export default class MarkdownPreviewer extends React.Component {
  state = {
    markdown: placeholder,
  };

  updateMarkdown = (markdown) => {
    this.setState({ markdown });
  };

  handleChange = (e) => {
    this.updateMarkdown(e.target.value);
  };

  handleClearClick = () => {
    this.setState({
      markdown: "",
    });
  };

  render() {
    const { markdown } = this.state;
    console.log(classes);

    return (
      <>
        <div className={classes.markdownInput}>
          <h2 id="h2-input" classes={classes.title}>
            Markdown Input:
          </h2>
          <div className={classes.textareaWrapper}>
            <textarea
              className={classes.textarea}
              id="editor"
              value={markdown}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div
          id="preview"
          className={classes.preview}
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
        <div>
          <button className={classes.button} onClick={this.clearTextArea}>Clear</button>
        </div>
      </>
    );
  }
}
