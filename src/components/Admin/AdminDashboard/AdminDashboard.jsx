import React from "react";
import axios from "axios";
import "./AdminDashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get_place } from "../../../redux/places/action";
import { set_current_place } from "../../../redux/current/action";
import { getAllPet } from "../../../redux/pets/action";
import Admin_nav from "../admin_nav/Admin_nav";

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  ///setting header///////////////////////////
  const admin = useSelector((state) => state.admin);
  const header = {
    Authorization: admin.token,
  };
  ////////////////////////////////////////////

  React.useEffect(() => {
    if (!admin.isAuthenticated) {
      alert("Please log in.....");
      navigate("/admin-login");
    }
  });

  React.useEffect(() => {
    dispatch(getAllPet(header));
  }, []);

  const handledelete = (id) => {
    axios
      .delete(`https://pet-care-boarding.herokuapp.com/pet/${id}`, {
        headers: header,
      })
      .then((res) => {
        console.log(".then");
        dispatch(getAllPet(header));
      })
      .catch((err) => {
        console.log(".catch");
        // alert("please enter valid credentials");
      });
  };

  const handleApproval = (id) => {
    axios
      .patch(`https://pet-care-boarding.herokuapp.com/pet/approve/${id}`, {
        headers: header,
      })
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
      <Admin_nav />
      <div id="User_Display">
        <table
          className="table table-bordered"
          style={{
            verticalAlign: "top",
            fontSize:" 17px",
            fontFamily: 'Arvo, serif'
          }}
        >
          <tbody>
            <tr>
              <th>Name</th>
              <th>breed</th>
              <th>weight</th>
              <th>from</th>
              <th>to</th>
              <td>Status</td>
              <td>Action</td>
            </tr>
            {AllPets.map((el) => (
              <tr key={el._id}>
                <td>{el.name}</td>
                <td>{el.breed}</td>
                <td>{el.weight}</td>
                <td>{el.from}</td>
                <td>{el.to}</td>
                <td
                  style={
                    el.status === "Approved"
                      ? { color: "lightgreen" }
                      : { color: "yellow" }
                  }
                >
                  {el.status}
                </td>
                <td>
                  {el.status === "Approved" ? (
                    <button
                      className="btn btn-secondary" id="admin_btn"
                   
                      style={
                        el.status === "Approved"
                          ? { color: "lightgray" }
                          : { color: "red" }
                      }
                      onClick={() => {
                        handledelete(el._id);
                      }}
                    >
                      delete
                    </button>
                  ) : (
                    <button
                      className="btn btn-secondary" id="admin_btn"
                      disabled={el.status === "Approved"}
                      style={
                        el.status === "Approved"
                          ? { color: "lightgray" }
                          : { color: "lightgreen" }
                      }
                      onClick={() => {
                        handleApproval(el._id);
                      }}
                    >
                      Approve
                    </button>
                  )}

                  {el.status !== "Approved" ? <button
                      className="btn btn-secondary"  id="admin_btn"
                      disabled={el.status === "Approved"}
                      style={
                        el.status === "Approved"
                          ? { color: "lightgray" }
                          : { color: "red" }
                      }
                      onClick={() => {
                        handledelete(el._id);
                      }}
                    >
                      Decline
                    </button>: ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
