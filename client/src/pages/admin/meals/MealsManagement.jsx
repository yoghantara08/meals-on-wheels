import React, { useContext, useEffect, useState } from "react";
import { Dropdown, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getMeals } from "../../../api/admin-api";
import AuthContext from "../../../context/auth-context";
import AddMeal from "./AddMeal";
import EditMeal from "./EditMeal";

const MealsManagement = () => {
  const authCtx = useContext(AuthContext);
  const [meals, setMeals] = useState([]);
  const [show, setShow] = useState(false);
  const [editMeal, setEditMeal] = useState(false);
  const [mealData, setMealData] = useState({});
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    getMeals(authCtx.token)
      .then((res) => {
        setMeals(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [authCtx.token, refresh]);

  return (
    <div className="p-3 mt-2">
      <div className="d-flex justify-content-center align-items-center">
        <h2 className="fw-bold text-decoration-underline">Meals Management</h2>
      </div>
      <AddMeal show={show} onHide={() => setShow(false)} refresh={setRefresh} />
      <EditMeal
        show={editMeal}
        onHide={() => setEditMeal(false)}
        mealId={mealData.mealId}
        mealName={mealData.mealName}
        description={mealData.description}
        ingredients={mealData.ingredients}
        refresh={setRefresh}
      />
      <div className="mt-3">
        <h5 className="fw-bold">Meal List</h5>
        <button
          className="btn btn-shade-yellow mb-3"
          onClick={() => {
            setShow(true);
          }}
        >
          Add Meal <i className="fa-solid fa-plus"></i>
        </button>
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Meal Id</th>
              <th>Meal Name</th>
              <th>Description</th>
              <th>Ingredients</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {meals.map((meal) => (
              <tr key={meal._id}>
                <td>{meal._id}</td>
                <td>{meal.mealName}</td>
                <td>{meal.description}</td>
                <td>{meal.ingredients}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle variant="shade-yellow" id="dropdown-basic">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Link
                        to={`/meals/${meal.mealName.toLowerCase()}/${meal._id}`}
                        className="text-decoration-none text-darken dropdown-item"
                      >
                        Meal Details
                      </Link>
                      <Dropdown.Item
                        onClick={() => {
                          setEditMeal(true);
                          setMealData({
                            mealId: meal._id,
                            mealName: meal.mealName,
                            description: meal.description,
                            ingredients: meal.ingredients,
                          });
                        }}
                      >
                        Edit Meal
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MealsManagement;
