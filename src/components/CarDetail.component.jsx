import { Link } from "react-router-dom";

export const CarDetail = ({
  brand,
  model,
  year,
  max_speed,
  is_automatic,
  engine,
  numberOfDoors,
  id,
}) => {
  return (
    <div>
      <h2>
        <Link to={`/cars/${id}`}>{brand}</Link>
      </h2>
      <p>{model}</p>
      <p>{year}</p>
      <p>{max_speed}</p>
      <p>{is_automatic}</p>
      <p>{engine}</p>
      <p>{numberOfDoors}</p>
      <button>
        <Link to={`/edit/${id}`}>edit</Link>
      </button>
    </div>
  );
};
