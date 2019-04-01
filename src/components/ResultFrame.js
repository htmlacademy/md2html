import React, { PureComponent } from "react";

const bootstrapLink = `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">`;
const hljsLink = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/github.min.css">`;
class ResultFrame extends PureComponent {
  frame = React.createRef();

  componentDidMount() {
    const frame = this.frame.current.contentWindow.document;
    frame.querySelector("head").innerHTML = `${bootstrapLink} ${hljsLink}`;
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
