// import React from "react";
// import "./Home.css"

// import {Link} from "react-router-dom"
// import Home_nav from "./Home_nav";


// export default function Home() {


//   return <div id="home_display">
//     <Home_nav/>
//     <div id="top_home"></div>

// <Link to="/user-login">
// <button>Login</button>
// </Link>
// <br />
// <Link to="/user-register">
// Don'n have account... click here....
// </Link>


//   </div>;
// }


import React from "react";
import axios from "axios";
import "./Home.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get_place } from "../../redux/places/action";
import { set_current_place } from "../../redux/current/action";
import Home_nav from "./Home_nav";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  ///setting header///////////////////////////
  const user = useSelector((state) => state.login);
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
    qty: 5,
  };

  const [queries, setqueries] = React.useState(initialstate);
  const [page, setpage] = React.useState(1);

  const { ord1, ord2, city, verified, qty } = queries;
  const initialurl = `http://localhost:5000/pet-place?ord1=${ord1}&ord2=${ord2}&city=${city}&verified=${verified}&qty=${qty}&page=${page}`;

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
  const places_data = useSelector((state) => state.place.places);

  //////////////

  function lastpage() {
    if (places_data.length < qty) {
      return true;
    }
  }

  const handleNavToPlace = () => {

  };

  const handleNavToAddPet = (el) => {
   
    dispatch(set_current_place(el._id))
    navigate("/add-pet");
  };
  return (
    <div>
       <Home_nav/>
      <div>
        <input type="text" name="city" value={city} onChange={handlechange} />
        <div>
          <label>
            Pricing
            <select name="ord1" value={ord1} onChange={handlechange}>
              <option value={1}>LOW TO HIGH</option>
              <option value={-1}>HIGH TO LOW</option>
            </select>
          </label>

          <label>
            Ratings
            <select name="ord2" value={ord2} onChange={handlechange}>
              <option value={1}>LOW TO HIGH</option>
              <option value={-1}>HIGH TO LOW</option>
            </select>
          </label>

          <label>
            varification status
            <select name="verified" value={verified} onChange={handlechange}>
              <option value="yes">VERIFIED</option>
              <option value="">SHOW ALL</option>
              <option value="no">NOT VERIFIED</option>
            </select>
          </label>
        </div>
      </div>
      <div id="User_Display">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Address</th>
              <th>Capacity</th>
              <th>Cost Per Day</th>
              <th>Verified</th>
              <th>Ratings</th>
            </tr>
            {places_data.map((el) => (
              <tr key={el._id}>
                <td onClick={handleNavToPlace}>{el.name}</td>
                <td>{el.city}</td>
                <td>{el.address}</td>
                <td>{el.capacity}</td>
                <td>{el.cost_per_day}</td>
                <td>{el.verified}</td>
                <td>{el.rating}</td>
                <td>
                  <button onClick={()=>{handleNavToAddPet(el)}}>book</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <button
          onClick={() => {
            setpage((prev) => (prev > 1 ? prev - 1 : 1));
          }}
          name="page"
          disabled={page == 1}
        >
          prev
        </button>{" "}
        <button
          onClick={() => {
            setpage((prev) => prev + 1);
          }}
          name="page"
          disabled={lastpage()}
        >
          next
        </button>
      </div>
    </div>
  );
}

