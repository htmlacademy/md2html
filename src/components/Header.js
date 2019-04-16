import React from "react";
import styled from "styled-components";
import { Button, ButtonGroup } from "react-bootstrap";
import { Tabs } from "../constants";
import { MdSettings } from "react-icons/md";

const StyledSettingsBtn = styled.button`
  cursor: pointer;
`;

export default function Header({ currentTab, changeTab, toggleShowSettings }) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <h2 className="text-center mt-3">Конвертер из MD в HTML</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-6" />
        <div className="col-6 d-flex flex-row mb-3 ml-auto">
          <ButtonGroup className="ml-auto">
            {Object.keys(Tabs).map(it => (
              <Button
                variant="secondary"
                active={Tabs[it] === currentTab}
                onClick={evt => {
                  changeTab(evt.target.textContent);
                }}
                key={Tabs[it]}
              >
                {Tabs[it]}
              </Button>
            ))}
          </ButtonGroup>
          <StyledSettingsBtn
            className="btn"
            type="button"
            onClick={() => toggleShowSettings()}
          >
            <MdSettings />
          </StyledSettingsBtn>
        </div>
      </div>
    </React.Fragment>
  );
}
