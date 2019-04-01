import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Tabs } from "../constants";

export default function Header({ currentTab, changeTab }) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <h2 className="text-center">Конвертер из MD в HTML</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-6 d-flex flex-column mb-3 ml-auto">
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
        </div>
      </div>
    </React.Fragment>
  );
}
