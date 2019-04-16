import React from "react";

import { Form, Modal } from "react-bootstrap";
import { CONVERT_HLJS, HEADER_LEVEL } from "../constants";

const Settings = ({ show, settings, changeSettings, toggleShowSettings }) => {
  return (
    <Modal show={show} onHide={toggleShowSettings}>
      <Modal.Header closeButton>
        <Modal.Title>Настройки</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="convert-hljs"
              checked={settings.convertHljs}
              name={CONVERT_HLJS}
              value={settings.convertHljs}
              onChange={evt => {
                const name = evt.target.name;
                changeSettings({ name });
              }}
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
