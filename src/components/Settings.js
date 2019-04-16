import React from "react";

import { Form, Modal } from "react-bootstrap";
import { CONVERT_HLJS, HEADER_LEVEL } from "../constants";

const Settings = ({ show, settings, changeSettings, toggleShowSettings }) => {
  const onSettingsChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;

    changeSettings({ name, value });
  };

  return (
    <Modal show={show} onHide={toggleShowSettings}>
      <Modal.Header closeButton>
        <Modal.Title>Настройки</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Добавить hljs"
              name={CONVERT_HLJS}
              id={CONVERT_HLJS}
              value={settings.convertHljs}
              checked={settings.convertHljs}
              onChange={onSettingsChange}
            />
            <label className="form-check-label" htmlFor="convert-hljs">
              Конвертация hljs
            </label>
          </div>
          <Form.Group>
            <Form.Label>Начинать с уровня заголовка:</Form.Label>
            <Form.Control
              as="select"
              value={settings.levelHeader}
              name={HEADER_LEVEL}
              onChange={onSettingsChange}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Settings;
