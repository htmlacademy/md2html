import React, { PureComponent } from "react";

const styles = `(
<link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500,700&amp;subset=cyrillic" rel="stylesheet">
<link rel="stylesheet" href="./style.css">
)`;

class ResultFrame extends PureComponent {
  frame = React.createRef();

  componentDidMount() {
    const frame = this.frame.current.contentWindow.document;
    frame.querySelector("head").innerHTML = styles;
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
