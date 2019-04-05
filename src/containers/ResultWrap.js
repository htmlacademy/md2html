import { connect } from "react-redux";
import React, { Component } from "react";
import ResultCode from "../components/ResultCode";
import { Tabs } from "../constants";
import ResultFrame from "../components/ResultFrame";

const mapStateToProps = state => ({
  text: state.text,
  currentTab: state.currentTab
});

class ResultWrap extends Component {
  state = {
    [Tabs.code]: ResultCode,
    [Tabs.frame]: ResultFrame
  };

  render() {
    let { text, currentTab } = this.props;
    const CurrentElement = this.state[currentTab];

    return (
      <React.Fragment>
        <CurrentElement text={text} />
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(ResultWrap);
