import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddMeal = ({ show, onHide }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {};

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Meal Menu
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <label>Meal name</label>
          <label>Description</label>
          <label>Description</label>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-shade-yellow" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddMeal;
