import React, {useState} from "react";
import "./css/footer.css";
import Nai from "./assets/nAIROBI-ART.png";
import Logo from "./assets/logosmall.png"
import {amazon, uber, bookingcom, justEat, jumialogo, lalologo} from "./icons"

const MobileFooter = ({setItIsOpen}) => {
  
  const currentDate = new Date().getFullYear();
  
  const clicked = () =>{
    setItIsOpen(true)
    console.log("clicked")
  }
  return (
    <div className="foot-container">
       <p>
        <a href="/how-it-works"> How it works ❓</a>{" "}
      </p>
     
      <p>
       <br/><br/>
       <img src={Logo} alt="logo" height={"15px"}/> DianiApp &trade;<br/> is a partner based community dApp <br/><br/>
        within LaLo Communitie(s)<br/><br/> 
        ecosystem.  LaLo Communities <br/><br/>
        is a Web3+Blockchain powered <br/><br/> 
        Bookings & Deliveries<br/><br/>
        dApp for Anything. Anytime.<br/><br/>  
        A mashup of  .... <br/><br/>
      </p>
      <p>
        {amazon} &nbsp; &nbsp; {uber} &nbsp; &nbsp;   
      {bookingcom}&nbsp; &nbsp;  {justEat}
    </p>
    <p>
              {jumialogo}
    </p>
    <p>
        Serving small communities 🌎. Try US!
      </p>
      <p>
        <img src={Nai} alt="src alt" width="250px" style={{marginBottom:"-10px"}} />
      </p>
      <div><p onClick={clicked} style={{color:"#ff99ff"}}> {lalologo} <br/> Powered by LaLo Communitites </p></div>
      <p>&copy; {currentDate} DianiApp. All Rights Reserved</p>
    </div>
  );
}

export default MobileFooter;
