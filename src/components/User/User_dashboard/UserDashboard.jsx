import React from "react";
import axios from "axios";
import "./UserDashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get_place } from "../../../redux/places/action";
import { set_current_place } from "../../../redux/current/action";
import { getAllPet } from "../../../redux/pets/action";
import Home_nav from "../../home/Home_nav";

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
      alert("you have not logged in")
      navigate("/");
      
    }
  });

  React.useEffect(() => {
    dispatch(getAllPet(header));
  }, []);

  const handledelete = (id) => {
    axios
      .delete(`https://pet-care-boarding.herokuapp.com/pet/${id}`, { headers: header })
      .then((res) => {
        console.log(".then");
        dispatch(getAllPet(header));
      })
      .catch((err) => {
        console.log(".catch");
        // alert("please enter valid credentials");
      });
  };

  const AllPets = useSelector((state) => state.pets.pets);
  return (
    <div>
      <Home_nav />
      <div id="User_Display">
        <table className="table table-bordered" style={{
              color: "lightgray",
              verticalAlign: "top",
              
            }}>
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
                <td style={el.status === "Approved"?{color:"lightgreen"}:{color:"yellow"}}>{el.status}</td>
                <td>
                  <button
                   className="btn btn-secondary"
                    disabled={el.status === "Approved"}
                    style={el.status === "Approved"?{color:"lightgray"}:{color:"red"}}
                    onClick={() => {
                      handledelete(el._id);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
