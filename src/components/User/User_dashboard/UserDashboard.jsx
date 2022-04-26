import React from "react";
import axios from "axios";
import "./UserDashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get_place } from "../../../redux/places/action";
import { set_current_place } from "../../../redux/current/action";
import { getAllPet } from "../../../redux/pets/action";

export default function UserDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  ///setting header///////////////////////////
  const user = useSelector((state) => state.login);
  const header = {
    Authorization: user.token,
  };
  ////////////////////////////////////////////

  React.useEffect(() => {
    if (!user.isAuthenticated) {
      navigate("/");
    }
  });

  React.useEffect(() => {
    dispatch(getAllPet(header));
  }, []);

  const handledelete=(id)=>{

   
    axios
      .delete(`http://localhost:5000/pet/${id}`, {headers:header})
      .then((res) => {
        console.log(".then");
        dispatch(getAllPet(header));
      })
      .catch((err) => {
  
        console.log(".catch");
        alert("please enter valid credentials");
      });

  }

  const AllPets = useSelector((state) => state.pets.pets);
  return (
    <div>
      <div id="User_Display">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>breed</th>
              <th>weight</th>
              <th>from</th>
              <th>to</th>
              <td>Status</td>
            </tr>
            {AllPets.map((el) => (
              <tr key={el._id}>
                <td>{el.name}</td>
                <td>{el.breed}</td>
                <td>{el.weight}</td>
                <td>{el.from}</td>
                <td>{el.to}</td>
                <td>{el.status}</td>
                <td>
                  <button disabled={el.status === "Approved"} onClick={()=>{handledelete(el._id)}} >delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
