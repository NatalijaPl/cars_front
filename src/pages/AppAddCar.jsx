import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { carService } from "../services/CarService";

export const AppAddCar = () => {
  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: "",
    max_speed: "",
    is_automatic: "",
    engine: "",
    number_of_doors: "",
  });

  const { id } = useParams();
  const history = useHistory();

  const resetForm = () => {
    setNewCar("");
  };

  const handlePreviewData = (car) => {
    let message;
    for (const key in car) {
      let item = key + ": " + car[key] + "\n";
      message += item;
    }
    alert(message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = null;

    if (id) {
      data = await carService.update(id, newCar);
    } else {
      data = await carService.add(newCar);
    }

    if (!data) {
      // alert("The new car is not created");
      return;
    }

    history.push("/cars");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          brand:
          <input
            type="text"
            required
            minLength={2}
            value={newCar.brand}
            onChange={(e) => {
              setNewCar({ ...newCar, brand: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          model:
          <input
            type="text"
            value={newCar.model}
            required
            minLength={2}
            onChange={(e) => {
              setNewCar({ ...newCar, model: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          year:
          <input
            type="number"
            required
            minLength={1920}
            maxLength={2023}
            value={newCar.year}
            onChange={(e) => {
              setNewCar({ ...newCar, year: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          max speed:
          <input
            type="number"
            required
            minLength={20}
            maxLength={300}
            value={newCar.max_speed}
            onChange={(e) => {
              setNewCar({ ...newCar, max_speed: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          is automatic:
          <input
            type="number"
            required
            value={newCar.is_automatic}
            onChange={(e) => {
              setNewCar({ ...newCar, is_automatic: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          engine:
          <input
            type="text"
            value={newCar.engine}
            required
            onChange={(e) => {
              setNewCar({ ...newCar, engine: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          number of doors:
          <input
            type="number"
            value={newCar.number_of_doors}
            required
            minLength={2}
            maxLength={5}
            onChange={(e) => {
              setNewCar({ ...newCar, number_of_doors: e.target.value });
            }}
          />
        </label>

        <br />
        <br />
        <button>{id ? "edit" : "add"}</button>
        <br />
        <br />
        <button type="reset" value="Reset" onClick={() => resetForm()}>
          reset
        </button>
        <br />
        <br />
        <button onClick={() => handlePreviewData(newCar)}>preview</button>
      </form>
    </div>
  );
};
