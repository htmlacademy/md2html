import React, { PureComponent } from "react";
// eslint-disable-next-line
import bootstrapRawStyles from "!!raw-loader!../constants/style.css";
// eslint-disable-next-line
import hljsRawStyles from "!!raw-loader!highlight.js/styles/github.css";

const node = document.createElement("style");
node.appendChild(document.createTextNode(bootstrapRawStyles));
node.appendChild(document.createTextNode(hljsRawStyles));

const font = `<link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500,700&amp;subset=cyrillic" rel="stylesheet">`;

class ResultFrame extends PureComponent {
  frame = React.createRef();

  componentDidMount() {
    const frame = this.frame.current.contentWindow.document;
    frame.querySelector("head").innerHTML = font;
    frame.head.appendChild(node);
    frame.querySelector("body").innerHTML = this.props.text;
  }

  componentDidUpdate() {
    this.frame.current.contentWindow.document.querySelector(
      "body"
    ).innerHTML = this.props.text;
  }

  render() {
    return (
      <iframe
        frameBorder={0}
        width="100%"
        height="100%"
        title="result"
        ref={this.frame}
      />
    );
  }
}

export default ResultFrame;
