import { useState, useEffect } from "react";
import "./css/Nav.css";
import logo from "./assets/logo.png";
import toast from "react-hot-toast";
import {addHome, reallogo} from "./icons"
import WeatherIcon from "../components/WeatherIcon"
import {NavLink} from "react-router-dom"

function Nav() {
  const [supportsPWA, setSupportsPWA] = useState(true);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    try{
      const handler = (e) => {
        e.preventDefault();
        console.log("we are being triggered");
        setSupportsPWA(true);
        setPromptInstall(e);
      };
      window.addEventListener("beforeinstallprompt", handler);
      return () => window.removeEventListener("transitionend", handler);
    }
    catch(err){
      console.log(err)
    }
  }, []);

  const addToHomeScreen = (e) => {
      e.preventDefault();
      if (promptInstall) {
        promptInstall.prompt();
      }
      if (!supportsPWA) {
        toast.error("PWA not supported");
      }
   
  };

  const currentTime = new Date().toLocaleTimeString();
  console.log(currentTime);
  
  return ( 
    <nav>
      <div className="nav-main">
        <div className="Logo-container">
          <NavLink to="/"><img src={logo} alt="logo image"/></NavLink>
        </div>
        <div className="Links-container">
          <NavLink to="/">
            <h5>⭐ Popular</h5>
          </NavLink>
          <NavLink to="/Wellness">
            <h5>Wellness</h5>
          </NavLink>
          <NavLink to="/Activities">
            <h5>Activities + Tours</h5>
          </NavLink>
          {/* <NavLink to="/Tours">
            <h5>Tours</h5>
          </NavLink> */}
          
          <NavLink to="/NightLife">
            <h5>Night Life</h5>
          </NavLink>
          <NavLink to="/VIP">
            <h5>VIP</h5>
          </NavLink>
          
        </div>
        {/* <h4><WalletConnect/></h4> */}
        <div className="pwa-btn">
          {supportsPWA ? (
            <div onClick={(e) => addToHomeScreen(e)}><button>Install</button></div>
          ) : null} 
        </div>
      
      </div>
    </nav>
  );
}

export default Nav;
