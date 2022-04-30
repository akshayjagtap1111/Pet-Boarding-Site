
import React from "react";
import axios from "axios";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { get_place } from "../../redux/places/action";
import { set_current_place } from "../../redux/current/action";
import Home_nav from "./Home_nav";
import Pet_card from "../User/pet_card/Pet_card";
import ReactLoading from "react-loading";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  ///setting header///////////////////////////
  const user = useSelector((state) => state.login);
  const admin = useSelector((state) => state.admin);
  const header = {
    Authorization: user.token,
  };
  ////////////////////////////////////////////

  // React.useEffect(() => {
  //   if (!user.isAuthenticated) {
  //     navigate("/user-login");
  //   }
  // });

  const initialstate = {
    ord1: "",
    ord2: "",
    city: "",
    verified: "",
    qty: 8,
  };

  const [queries, setqueries] = React.useState(initialstate);
  const [page, setpage] = React.useState(1);

  const { ord1, ord2, city, verified, qty } = queries;
  const initialurl = `https://pet-care-boarding.herokuapp.com/pet-place?ord1=${ord1}&ord2=${ord2}&city=${city}&verified=${verified}&qty=${qty}&page=${page}`;

  // const [data, setdata] = React.useState([]);

  React.useEffect(() => {
    console.log(initialurl);
    axios.get(initialurl, header).then((res) => {
      dispatch(get_place(res.data));
    });
  }, [queries, page]);

  const handlechange = (e) => {
    let { name, value, type, title } = e.target;
    if (name == "ord1" || name == "ord2") {
      value = parseInt(value);
    }
    if (name == "ord2") {
      setqueries((prev) => ({ ...prev, ord1: "" }));
    }
    setqueries((prev) => ({ ...prev, [name]: value }));
  };

  /// data from redux
  const _places = useSelector((state) => state.place);
  const places_data = _places.places;
  const PlaceisLoading = _places.isLoading;

  //////////////

  function lastpage() {
    if (places_data.length < qty) {
      return true;
    }
  }

  const handleNavToPlace = () => {};

  const handleNavToAddPet = (el) => {
    dispatch(set_current_place(el));
    navigate("/add-pet");
  };
  return (
    <>
      <Home_nav />

      <div id="u_dashboard_sub">
        <h3>
          “Pets are humanizing. They remind us we have an obligation and
          responsibility to preserve and nurture and care for all life.”
        </h3>
      </div>
      <div id="container">
        <div className="d-flex align-items-center" id="home_flex_cover">
          <div className="flex-shrink-0">
            <hr />
            <p className="filter_head">FILTER BY</p>
            <input
              type="text"
              name="city"
              value={city}
              onChange={handlechange}
              placeholder="Search City"
            />
            <div id="home_sorting_view">
              <label>
                PRICING
                <select
                  id="sel-back"
                  className="form-select"
                  size="3"
                  aria-label="size 3 select example"
                  name="ord1"
                  value={ord1}
                  onChange={handlechange}
                >
                  <option value={1}>LOW TO HIGH</option>
                  <option value={-1}>HIGH TO LOW</option>
                  <option value="">NONE</option>
                </select>
              </label>

              <label>
                RATINGS
                <select
                  id="sel-back"
                  className="form-select"
                  size="3"
                  aria-label="size 3 select example"
                  name="ord2"
                  value={ord2}
                  onChange={handlechange}
                >
                  <option value={1}>LOW TO HIGH</option>
                  <option value={-1}>HIGH TO LOW</option>
                  <option value="">NONE</option>
                </select>
              </label>

              <label>
                VARIFICATION
                <select
                  id="sel-back"
                  className="form-select"
                  size="3"
                  aria-label="size 3 select example"
                  name="verified"
                  value={verified}
                  onChange={handlechange}
                >
                  <option value="yes">VERIFIED</option>
                  <option value="">SHOW ALL</option>
                  <option value="no">NOT VERIFIED</option>
                </select>
              </label>
            </div>
            <div id="giff">
<img src="https://m.media-amazon.com/images/I/61TQ4qebeBL._AC_SS450_.jpg"/>
            </div>
          </div>
          <div
            id="User_Display_home"
            className="table-responsive flex-grow-1 ms-3"
          >
            {PlaceisLoading ? (
              <div
                style={{
                  border: "solid red 1px",
                  display: "flex",
                  justifyContent: "center",
                  height: "500px",
                  padding: "200px",
                }}
              >
                <ReactLoading type="spokes" color="blue" />
              </div>
            ) : (
              <table
                className="table"
                style={{
                  verticalAlign: "top",
                  fontSize: " 20px",
                  fontFamily: "Arvo, serif",
                }}
              >
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Address</th>
                    <th>Capacity</th>
                    <th>Cost Per Day</th>
                    <th>Verified</th>
                    <th>Ratings</th>
                    <th>Action</th>
                  </tr>
                  {places_data.map((el) => (
                    <tr key={el._id}>
                      <td onClick={handleNavToPlace}>{el.name}</td>
                      <td>{el.city}</td>
                      <td>{el.address}</td>
                      <td>{el.capacity}</td>
                      <td>{el.cost_per_day}</td>
                      <td style={{ color: "orange", fontWeight: "bold" }}>
                        {el.verified}
                      </td>
                      <td style={{ color: "orange", fontWeight: "bold" }}>
                        {el.rating}
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary"
                          onClick={() => {
                            handleNavToAddPet(el);
                          }}
                        >
                          book
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <div id="home_bottom">
          <button
            className="btn btn-primary active"
            data-bs-toggle="button"
            autocomplete="off"
            aria-pressed="true"
            onClick={() => {
              setpage((prev) => (prev > 1 ? prev - 1 : 1));
            }}
            name="page"
            disabled={page == 1}
          >
            prev
          </button>{" "}
          <button
            className="btn btn-primary active"
            data-bs-toggle="button"
            autocomplete="off"
            aria-pressed="true"
            onClick={() => {
              setpage((prev) => prev + 1);
            }}
            name="page"
            disabled={lastpage()}
          >
            next
          </button>
        </div>
        <p id="to_admin">
          {admin.isAuthenticated?<Link to="/admin-dashboard">@ Workspace admin</Link>:<Link to="/admin-login">@ Workspace admin</Link>}
          
        </p>
      </div>
    </>
  );
}
