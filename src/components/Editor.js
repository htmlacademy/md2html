import React, { PureComponent } from "react";
import MonacoEditor from "react-monaco-editor";
import { debounce } from "lodash";

export default class Editor extends PureComponent {
  onEditorChange = text => {
    this.props.changeText(text);
  };

  onEditorMount = editor => {
    const model = editor.getModel();
    const value = model.getValue();
    model.updateOptions({ tabSize: 2 });
    this.props.changeText(value);
  };

  render() {
    const options = {
      selectOnLineNumbers: true,
      renderWhitespace: "all",
      wordWrap: "bounded",
      automaticLayout: true
    };

    return (
      <MonacoEditor
        language="markdown"
        theme="vs-dark"
        defaultValue={this.props.defaultText}
        options={options}
        editorDidMount={this.onEditorMount}
        onChange={debounce(this.onEditorChange, 1000)}
      />
    );
  }
}
