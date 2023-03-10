import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { editMeal } from "../../../api/admin-api";
import AuthContext from "../../../context/auth-context";

const EditMeal = ({
  show,
  onHide,
  mealId,
  mealName,
  description,
  ingredients,
  refresh,
}) => {
  const authCtx = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm({
    values: {
      mealName,
      description,
      ingredients,
    },
  });

  const onSubmitHandler = (data) => {
    const formData = new FormData();

    const mealName = data.mealName;
    const description = data.description;
    const ingredients = data.ingredients;
    const image = data.image[0];

    formData.append("mealName", mealName);
    formData.append("description", description);
    formData.append("ingredients", ingredients);
    formData.append("image", image);

    editMeal(authCtx.token, formData, mealId)
      .then((res) => {
        alert(res.data.message);
        refresh((prev) => (prev += 1));
        reset();
        onHide();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Meal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <label className="mb-1">Meal name</label>
          <div className="mb-3">
            <input
              type="text"
              className="form-control shadow-none"
              {...register("mealName", { required: true })}
            />
          </div>
          <label className="mb-1">Description</label>
          <div className="mb-3">
            <input
              type="text"
              className="form-control shadow-none"
              {...register("description", { required: true })}
            />
          </div>
          <label className="mb-1">Ingredients</label>
          <div className="mb-3">
            <input
              type="text"
              className="form-control shadow-none"
              placeholder="e.g: soy sauce,tomato,egg,salt"
              {...register("ingredients", { required: true })}
            />
          </div>
          <label className="mb-1">Image</label>
          <div className="mb-3">
            <input
              type="file"
              className="form-control shadow-none"
              {...register("image")}
            />
          </div>
          <button className="btn btn-shade-yellow" type="submit">
            Edit Meal
          </button>
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

export default EditMeal;
