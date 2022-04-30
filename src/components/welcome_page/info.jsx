import React from "react";

import img from "./img.png"
const Info=()=>{
    return <>
    <div id="flex">
           <div className="lh">
               <h2>DOGS FILL OUR LIVES WITH JOY.</h2>
               <h1>IT’S TIME TO REPAY THE FAVOR</h1>
               <p>We’ve created a loving place with dogs’ wants and needs in mind. We offer everything your furry family member requires with award-winning dog daycare, overnight, weekend and holiday boarding, and spa services.  Use our webcams to watch them play all day with their BFFFs (best furry friends forever) in open and safe environments. Professionally trained Dogtopians will love and care for your pup like they are our own. You can trust your dog will come home overjoyed – and most likely overtired – from all of the excitement of the day.</p>
           </div>
            <div className="rh">
                <img src="https://s3-prod.dogtopia.com/wp-content/uploads/2022/03/Picture001-1.jpg"></img>
            </div>
    </div>

    <div id="flex">
             <div className="rh">
                <img src="https://s3-prod.dogtopia.com/wp-content/uploads/2018/10/Dogtopia_Pledge_to_Safety_website-600x350.jpg"></img>
            </div>

           <div className="lh">
               <h2>PLAY</h2>
               <h1>SAFE!</h1>
               <p>We chase the absolute highest standards of safety in everything we do! Our goal is to make sure all pups in our care are happy, safe and comfortable.</p>
           </div>
            
    </div>
    <div id="flex">
           <div className="lh">
               <h2>FIND YOUR</h2>
               <h1>NEAREST LOCATION</h1>
               <p>As North America’s fastest growing dog daycare franchise, Dogtopia has many locations ready to serve you and your pup. Get more information on the one closest to you.</p>
           </div>
            <div className="rh">
                <img src="https://s3-prod.dogtopia.com/wp-content/uploads/2018/10/DogtopiaScottsdale_0386-600x350.jpg"></img>
            </div>
    </div>
    <div id="flex">
         <div className="rh">
                <img src="https://s3-prod.dogtopia.com/wp-content/uploads/2018/07/homepage-slideshow-image-3-600x350.jpg"></img>
            </div>

           <div className="lh">
               <h2>RESOURCE GUIDE</h2>
               <h1>FAQS</h1>
               <p>We realize that your dog is a furry member of your family and they deserve the highest level of care. That’s why we offer expert advice and tips on a wide range of topics related to dog behavior, health, safety and more!</p>
           </div>
          
    </div>
    <img className="im" src={img}></img>
    </>
}
export default Info;