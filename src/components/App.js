import React, { Component } from "react";
import styled from "styled-components";
import Editor from "../containers/Editor";
import Header from "../containers/Header";
import ResultWrap from "../containers/ResultWrap";

const ApplicationWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <ApplicationWrap className="container-fluid">
        <Header />
        <div className="row flex-grow-1 pb-3">
          <div className="col-6">
            <Editor />
          </div>
          <div className="col-6 d-flex">
            <ResultWrap />
          </div>
        </div>
      </ApplicationWrap>
    );
  }
}

export default App;
