
import React from "react";
import axios from "axios";
// import "./UserDashboard.css";
import {useDispatch,useSelector} from "react-redux"
import { get_place } from "../../../redux/places/action";

export default function UserDashboard() {

  const dispatch = useDispatch()
  const initialstate = {
    ord1: 1,
    ord2: 1,
    city: "",
    verified: "",
    qty: 8,
  };

  const [queries, setqueries] = React.useState(initialstate);
  const [page, setpage] = React.useState(1);

  const { ord1, ord2, city, verified, qty} = queries;
  const initialurl = `http://localhost:5000/pet-place?ord1=${ord1}&ord2=${ord2}&city=${city}&verified=${verified}&qty=${qty}&page=${page}`;

  // const [data, setdata] = React.useState([]);

  React.useEffect(() => {
console.log(initialurl)
    axios.get(initialurl).then((res)=>{
      dispatch(get_place(res.data))
    })
  }, [queries,page]);

  const handlechange = (e) => {

    let { name, value, type ,title} = e.target;
    if (name=="ord1" ||name=="ord2" ) {
      value = parseInt(value);
      
    }
    setqueries((prev)=>({...prev,[name]:value}))
  };

  

  return (
    <div>
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
      <div id="User_Display"></div>

      <div>
        <button
          onClick={() => {
            setpage((prev) => (prev > 1 ? prev - 1 : 1));
          }}
          name="page"
         disabled={page==1}
        >
          prev
        </button>{" "}
        <button
          onClick={() => {
            setpage((prev) => prev + 1);
          }}
          name="page"
        >
          next
        </button>
      </div>
    </div>
  );
}
