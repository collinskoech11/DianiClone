import React from "react";
import "../css/home.css";
import ReactWhatsapp from "react-whatsapp";
import { drink, dinner, plane, fx, food } from "../icons";

function NightLife() {
  const data = [
    {
      name: "Dinner Reservation",
      number: "+254773287540",
      message: "Hi JinjaApp 😊, I need to make a dinner reservation 🍝",
      className: "whatsapp",
      image: dinner,
      desc: "image desc",
    },
    {
      name: "Table Reservation",
      number: "+254773287540",
      message: "Hi JinjaApp 😊, I need to make a Table reservation 🍽️",
      className: "whatsapp",
      image: drink,
      desc: "image desc",
    },
    {
      name: "Luxury Reservation",
      number: "+254773287540",
      message: "Hi JinjaApp 😊, I want to make luxury reservation⚜️",
      className: "whatsapp",
      image: plane,
      desc: "image desc",
    },
    {
      name: "Browse Events",
      number: "+254773287540",
      message: "Hi JinjaApp 😊, I want to Browse events 🎆",
      className: "whatsapp",
      image: fx,
      desc: "image desc",
    },
    {
      name: "DJ Parties",
      number: "+254773287540",
      message: "Hi JinjaApp 😊,I want to attend a DJ party 🥳",
      className: "whatsapp",
      image: food,
      desc: "image desc",
    },
  ];
  return (
    <div className="container">
      <div className="Tabs-container">
        {data.map((item, index) => (
          <ReactWhatsapp
            key={index}
            number={item.number}
            message={item.message}
            className={item.className}
          >
            <div className="Tab-item-wellness" style={{color:"#fff"}}> {item.name}</div>
          </ReactWhatsapp>
        ))}
      </div>
    </div>
  );
}

export default NightLife;
