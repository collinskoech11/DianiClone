import { useState, useEffect } from "react";
import "./css/Nav.css";
import toast from "react-hot-toast";
import {NavLink} from "react-router-dom"
import {logojinja, logosidejinja} from "./icons"
import Name from "./assets/name.svg"
import {usePwa} from "react-pwa-app"

function Nav() {
  const pwa = usePwa();

  console.log(pwa.registration); // ServiceWorkerRegistration
  const Pwabtn =()=>{
    if(pwa.isInstalled === "standalone"){
      return null
    } else {
      return(
        <>
        <div className="pwa-con">
          <div className="pwa-btn">
            <div>
              <h5>
                ⭐⭐⭐⭐⭐
              </h5>
            </div>
            <button onClick={pwa.install}>Install</button>
          </div>
        </div>
        </>
      )
    }

  }



  const currentTime = new Date().toLocaleTimeString("en-US", { timeZone: "America/Nassau"});
  console.log(currentTime);

  // let date = newDate.getDate();
  // let month = newDate.getMonth() + 1;
  // let year = newDate.getFullYear();
  // const today = `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  return (
    <nav>
      <div className="nav-main">
        <div className="Logo-container" style={{paddingTop:"15px", paddingBottom:"15px"}}>
          <NavLink to="/">{logojinja}<img src={Name} style={{height:'20px'}}/></NavLink>
        </div>
        <div className="Links-container">
          <NavLink to="/">
            <h5>⭐ Popular</h5>
          </NavLink>
          <NavLink to="/Wellness">
            <h5>Wellness</h5>
          </NavLink>
          <NavLink to="/NightLife">
            <h5>Night Life</h5>
          </NavLink>
          <NavLink to="/VIP">
            <h5>VIP</h5>
          </NavLink>
          <NavLink to="/Activities">
            <h5>Tours + Activities</h5>
          </NavLink>
        </div>
        <Pwabtn/>
      </div>
    </nav>
  );
}

export default Nav;
