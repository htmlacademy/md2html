import React from "react";

import { Modal } from "react-bootstrap";

const Settings = ({ show, toggleShowSettings }) => {
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
              onChange={evt => console.log(evt.target.value)}
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
