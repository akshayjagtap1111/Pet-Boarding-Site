import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_Places } from "../../../redux/places/action";
export default function Add_place() {
  const dispatch = useDispatch();

  const initialState = {
    name: "",
    city: "",
    address: "",
    capacity: "",
    cost_per_day: 0,
    verified: "",
    rating: 0,
  };

  const [place, setplace] = React.useState(initialState);

  const admin = useSelector((state) => state.admin);
  console.log(admin.token);

  const header = {
    Authorization: admin.token,
  };

  const handlechange = (e) => {
    let { name, value, type } = e.target;
    if (type === "number" || name === "rating") {
      value = parseInt(value);
    }
 
    setplace((prev) => ({ ...prev, [name]: value }));
  };

  const handle_submit = () => {
    dispatch(add_Places(place, header));
  };

  const { name, city, address, capacity, cost_per_day, verified, rating } =
    place;

  return (
    <div>
      <input
        type="text"
        placeholder="enter name"
        name="name"
        value={name}
        onChange={handlechange}
      />
      <input
        type="text"
        placeholder="enter city"
        name="city"
        value={city}
        onChange={handlechange}
      />
      <input
        type="text"
        placeholder="enter address"
        name="address"
        value={address}
        onChange={handlechange}
      />
      <input
        type="text"
        placeholder="enter capacity"
        name="capacity"
        value={capacity}
        onChange={handlechange}
      />
      <input
        type="number"
        placeholder="enter cost_per_day"
        name="cost_per_day"
        value={cost_per_day}
        onChange={handlechange}
      />

      <br />
      <label>
        varification status
        <select name="verified" value={verified} onChange={handlechange}>
          <option value="yes">verified</option>
          <option value="no">Not verified</option>
        </select>
      </label>
      <br />
      <label>
        ratings
        <select name="rating" value={rating} onChange={handlechange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>
      <br />

      <button onClick={handle_submit}>add</button>
    </div>
  );
}
