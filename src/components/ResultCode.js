import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  flex-grow: 1;
  resize: none;
`;

const ResultCode = ({ text }) => {
  return <TextArea readOnly className="form-control" value={text} />;
};

export default ResultCode;
