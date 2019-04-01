import React from "react";
import ResultCode from "./ResultCode";
import mdConverter from "../utils/mdConverter";

const ResultWrap = ({ text }) => {
  text = mdConverter(text);

  return (
    <React.Fragment>
      <ResultCode text={text} />
      {/*<div>Предпросмотр</div>*/}
    </React.Fragment>
  );
};

export default ResultWrap;
