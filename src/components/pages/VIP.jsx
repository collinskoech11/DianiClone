import React from "react";
import "../css/act.css";
import ReactWhatsapp from "react-whatsapp";
import {
  skydiving,
  skiing,

} from "./images";

function VIP() {
  const data = [
    {
      name: "SKYDIVING",
      number: "+254773287540",
      background: skydiving,
      message: "Hi Zanziapp 😊, I want to go Sky Diving 🪂",
      description:
        "Enjoy some of the finest sceneries in the world and skydive onto the beach. This is a huge tourist attraction for tourists who want to see the landscape from a bird’s-eye view at 12, 000 ft.",
    },
    {
      name: "JET SKIING",
      number: "+254773287540",
      message: "Hi Zanziapp 😊, Im interested in Jet Skiing 🚤",
      background: skiing,
      description:
        "Experience the beautiful view from the open sea and get to know other fascinating parts of the coast.",
    },
  ];

  return (
    <div className="activities">
      <h2>VIP Tour</h2>
      <div className="act-container">
        {data.map((item, index) => {
          let image = item.background;
          return (
            <div>
              <div
                className="act-item"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="act-full">
                  <div className="Text">
                    <h2 style={{ color: "#fff" }}>{item.name}</h2>
                    <p style={{color:'#fff'}}>{item.description}</p>
                  </div>
                </div>
              </div>
              <ReactWhatsapp
                key={index}
                number={item.number}
                message={item.message}
                className={item.className}
              >
                <button>Book</button>
              </ReactWhatsapp>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VIP;
