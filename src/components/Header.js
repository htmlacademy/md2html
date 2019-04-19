import React from "react";
import styled from "styled-components";
import { Button, ButtonGroup } from "react-bootstrap";
import { Tabs } from "../constants";
import { MdSettings } from "react-icons/md";
import { GoClippy } from "react-icons/go";

const SettingsBtn = styled.button`
  cursor: pointer;
`;

const CopyBtn = styled.button`
  cursor: pointer;
`;

export default function Header({
  currentTab,
  changeTab,
  toggleShowSettings,
  text
}) {
  const onCopyClick = () => {
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

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

          <CopyBtn className="btn" type="btn" onClick={onCopyClick}>
            <GoClippy size="1.5em" />
          </CopyBtn>

          <SettingsBtn
            className="btn"
            type="button"
            onClick={() => toggleShowSettings()}
          >
            <MdSettings />
          </SettingsBtn>
        </div>
      </div>
    </React.Fragment>
  );
}
