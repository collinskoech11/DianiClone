import { useState, useEffect } from "react";
import "./css/Nav.css";
import toast from "react-hot-toast";
import {NavLink} from "react-router-dom"
import {logojinja} from "./icons"

function Nav() {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log("we are being triggered");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("transitionend", handler);
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
          <NavLink to="/">{logojinja}</NavLink>
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
        <div className="pwa-con">
          <div className="pwa-btn">
            {/* {supportsPWA ? ( */}
              <div><h5>Get the Jinja App<br/>⭐⭐⭐⭐⭐</h5></div> <button onClick={(e) => addToHomeScreen(e)}>Install</button>
            {/* ) : null} */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
