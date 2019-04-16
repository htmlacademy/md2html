import React from "react";

import { Modal } from "react-bootstrap";

const Settings = ({
  show,
  convertHljs,
  toggleHljsSettings,
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
              onChange={() => toggleHljsSettings()}
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
