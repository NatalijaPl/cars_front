import React from "react";
import { carService } from "../services/CarService";
import { useState, useEffect } from "react";
import { CarDetail } from "../components/CarDetail.component";

export const AppCars = () => {
  const [carList, setCarList] = useState([]);

  const getHandler = async () => {
    const response = await carService.getAll();
    setCarList(response.data);
  };
  useEffect(() => {
    getHandler();
  }, []);

  const handleDelete = async (id) => {
    const data = await carService.delete(id);
    if (data) {
      setCarList(carList.filter((post) => post.id !== id));
    }
    setTimeout(() => {
      window.location.reload(true);
    }, 100);
  };

  return (
    <div>
      <ul>
        {carList.map((car) => (
          <li key={car.id}>
            <CarDetail
              id={car.id}
              brand={car.brand}
              model={car.model}
              year={car.year}
              director={car.director}
              max_speed={car.max_speed}
              is_automatic={car.is_automatic}
              engine={car.engine}
              number_of_doors={car.number_of_doors}
            />
            <br />
            <button onClick={() => handleDelete(car.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
