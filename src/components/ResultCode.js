import React from "react";
import styled from "styled-components";

const Textarea = styled.textarea`
  flex-grow: 1;
  resize: none;
`;

const ResultCode = ({ text }) => {
  return <Textarea readOnly className="form-control" value={text} />;
};

export default ResultCode;
