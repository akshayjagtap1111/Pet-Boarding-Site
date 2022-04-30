import React from "react";
import Video from "./background.mp4";
import style from "./Welcome.css"
import NavBar from "./navbar";
import Info from  "./info"
const Welcome =()=>{
  return <>
  
   <video autoPlay loop muted >
       <source src={Video} type="video/mp4" />
     
   </video>
     <NavBar />
     
     <div id="info"> <Info/></div>
    
  </>
}
export default Welcome;