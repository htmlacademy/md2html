import React from "react";

import { Modal } from "react-bootstrap";
import { CONVERT_HLJS } from "../constants";

const Settings = ({
  show,
  convertHljs,
  changeSettings,
  toggleShowSettings
}) => {
  return (
    <Modal show={show} onHide={toggleShowSettings}>
      <Modal.Header closeButton>
        <Modal.Title>Настройки</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="convert-hljs"
              checked={convertHljs}
              name={CONVERT_HLJS}
              value={convertHljs}
              onChange={evt => changeSettings(evt.target.name)}
            />
            <label className="form-check-label" htmlFor="convert-hljs">
              Конвертация hljs
            </label>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Settings;
