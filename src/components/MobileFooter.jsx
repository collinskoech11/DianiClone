import React from "react";
import "./css/footer.css";
import Nai from "./assets/nAIROBI-ART.png"


function MobileFooter() {
  const currentDate = new Date().getFullYear();
  return (
    <div className="foot-container">
      <p><img src={Nai} alt="src alt" width="250px"/></p>
      <p >
        <a href="/how-it-works" style={{color:'#fff'}}> How it works</a>{" "}
      </p>
      <p style={{color:'#fff'}}>
      Powered by LaLo Communities
      </p>
      <p style={{color:'#fff'}}>&copy; {currentDate} Zanziapp</p>
    </div>
  );
}

export default MobileFooter;
