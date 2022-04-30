import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AddPet } from "../../../redux/pets/action";
import { add_Places } from "../../../redux/places/action";
import { useNavigate } from "react-router-dom";
import Home_nav from "../../home/Home_nav";
import "./Add_pet.css";
export default function Add_pet() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /////get user from redux and make hedar for user//////////////////////////////////////////////////
  const user = useSelector((state) => state.login);
  console.log(user.token);

  const header = {
    Authorization: user.token,
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////

  React.useEffect(() => {
    if (!user.isAuthenticated) {
      alert("you need to log in first");
      navigate("/user-login");
    }
  });

  const current = useSelector((state) => state.current);
  const currentPlace = current.current_place;
  console.log("currentPlace", currentPlace);
  const currentPlace_id = current.current_place._id;

  const initialState = {
    name: "",
    breed: "",
    weight: "",
    from: "",
    to: "",
    ///user from request body from backend ///////remaining task
    place: currentPlace_id,
  };

  const [pet, setpet] = React.useState(initialState);

  const handlechange = (e) => {
    let { name, value, type } = e.target;
    if (type === "number" || name === "rating") {
      value = parseInt(value);
    }

    setpet((prev) => ({ ...prev, [name]: value }));
  };

  const handle_submit = () => {
    axios
      .post("https://pet-care-boarding.herokuapp.com/pet/add", pet, { headers: header })
      .then((res) => {
        console.log(".then");
        navigate("/user-dashboard");
      })
      .catch((err) => {
        console.log(".catch");
        alert("opps something went wrong");
      });
  };

  const { name, breed, weight, from, to } = pet;

  return (
    <>
      <Home_nav />
      <div
        id="add_pet_cover"
        className="d-flex align-items-center"
        style={{
          textAlign: "left",
          
        }}
      >
        <div className="flex-shrink-0" >
          <h2>Reserve space for your pet in</h2>
          <h3>{currentPlace.name}</h3>
          <p>City : {currentPlace.city}</p>
          <p>Address : {currentPlace.address}</p>
          <p>verified : {currentPlace.verified}</p>
          <p>Ratings : {currentPlace.rating}</p>
        </div>
        <br />
        <div className="table-responsive flex-grow-1 ms-3">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              {" "}
              Name
            </span>
            <input
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              type="text"
              placeholder="enter name"
              name="name"
              value={name}
              onChange={handlechange}
            />
          </div>

          <br></br>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              {" "}
              Breed
            </span>
            <input
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              type="text"
              placeholder="enter breed"
              name="breed"
              value={breed}
              onChange={handlechange}
            />
          </div>

          <br />

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              {" "}
              Weight
            </span>
            <input
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              type="text"
              placeholder="enter weight"
              name="weight"
              value={weight}
              onChange={handlechange}
            />
          </div>

         
          <br />

          <div id="add_pet_date">
          <div className="input-group mb-3" style={{ width: "200px" }}>
            <span className="input-group-text" id="basic-addon3">
              {" "}
              From
            </span>
            <input
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              type="date"
              placeholder="enter from"
              name="from"
              value={from}
              onChange={handlechange}
            />
          </div>

          <div className="input-group mb-3" style={{ width: "200px" }}>
            <span className="input-group-text" id="basic-addon3">
              {" "}
              To
            </span>
            <input
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              type="date"
              placeholder="enter to"
              name="to"
              value={to}
              onChange={handlechange}
            />
          </div>
          </div>

          

          
          <br />
          <button className="btn btn-primary" onClick={handle_submit}>Book Place</button>
        </div>
      </div>
    </>
  );
}
