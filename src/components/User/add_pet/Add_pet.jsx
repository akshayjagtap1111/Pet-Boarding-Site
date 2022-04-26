import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AddPet } from "../../../redux/pets/action";
import { add_Places } from "../../../redux/places/action";
import {useNavigate} from "react-router-dom"
export default function Add_pet() {
  const navigate =useNavigate();
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
      alert("you need to log in first")
      navigate("/user-login");
    }
  });

  const current= useSelector((state)=>state.current)
  const currentPlace=current.current_place
  console.log(currentPlace)

  const initialState = {
    name: "",
    breed: "",
    weight: "",
    from: "",
    to:"",
    ///user from request body from backend ///////remaining task
    place:currentPlace
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
    .post("http://localhost:5000/pet/add",pet, {headers:header})
    .then((res) => {
      console.log(".then");
     navigate("/user-dashboard")
    })
    .catch((err) => {
   
      console.log(".catch");
      alert("opps something went wrong");
    });
  };

  const { name, breed, weight, from, to } = pet;

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
        placeholder="enter breed"
        name="breed"
        value={breed}
        onChange={handlechange}
      />
      <input
        type="text"
        placeholder="enter weight"
        name="weight"
        value={weight}
        onChange={handlechange}
      />
      <input
        type="date"
        placeholder="enter from"
        name="from"
        value={from}
        onChange={handlechange}
      />

      <input
        type="date"
        placeholder="enter to"
        name="to"
        value={to}
        onChange={handlechange}
      />

      

      <button onClick={handle_submit}>add</button>
    </div>
  );
}
