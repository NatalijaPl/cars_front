import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CarDetail } from "./CarDetail.component";
import { carService } from "../services/CarService";

export const SingleCar = ({}) => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  const handleGetSingleCar = async ($id) => {
    const { data } = await carService.show($id);
    setCar(data);
  };

  useEffect(() => {
    handleGetSingleCar(id);
  }, [id]);

  return (
    <div>
      {car && (
        <CarDetail
          brand={car.brand}
          model={car.model}
          year={car.year}
          max_speed={car.max_speed}
          is_automatic={car.is_automatic}
          engine={car.engine}
          number_of_doors={car.number_of_doors}
        />
      )}
    </div>
  );
};
