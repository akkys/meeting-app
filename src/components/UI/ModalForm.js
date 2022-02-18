import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./ModalForm.css";

const ModalForm = ({
  show,
  handleClose,
  modalTitle,
  handleSubmit,
  size,
  children,
  buttons,
}) => {
  return (
    <Modal show={show} onHide={handleClose} size={size}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <Form onSubmit={handleSubmit}>{children}</Form>
        </>
      </Modal.Body>
      {/* <Modal.Footer>
        {buttons ? (
          buttons.map((btn, i) => (
            <Button
              key={i}
              type="submit"
              variant={btn.color}
              className="shadow-none"
              size="md text-light"
              onClick={btn.onClick}
            >
              {btn.label}
            </Button>
          ))
        ) : (
          <Button
            type="submit"
            variant="dark"
            className="shadow-none"
            size="md"
            onClick={handleSubmit}
          >
            Save
          </Button>
        )}
      </Modal.Footer> */}
    </Modal>
  );
};

export default ModalForm;
