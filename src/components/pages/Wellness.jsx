import React from "react";
import "../css/home.css";
import ReactWhatsapp from "react-whatsapp";
import { drink, dinner, fx, food } from "../icons";

function Wellness() {
  const data = [
    {
      name: "On site Massage",
      number: "+254773287540",
      message: "Hi JinjaApp 😊, I'm Interested in a Massage 💆",
      className: "whatsapp",
      image: dinner,
      desc: "image desc",
    },
    {
      name: "On Site Hair & Make up",
      number: "+254773287540",
      message: "Hi JinjaApp 😊, I'm Interested in On site hair & make up 💇",
      className: "whatsapp",
      image: fx,
      desc: "image desc",
    },
    {
      name: "schedule a yoga class",
      number: "+254773287540",
      message: "Hi JinjaApp 😊, I'm want to schedule a yoga class🧘",
      className: "whatsapp",
      image: fx,
      desc: "image desc",
    },
    {
      name: "On Site Nail service",
      number: "+254773287540",
      message: "Hi JinjaApp 😊, I'm Interested in On site nail service 💅",
      className: "whatsapp",
      image: drink,
      desc: "image desc",
    },
    {
      name: "Today's special",
      number: "+254773287540",
      message: "Hi JinjaApp 😊, I'm Interested in Something special 😜",
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
            <div className="Tab-item-wellness">
              <div>{item.name}</div>
            </div>
          </ReactWhatsapp>
        ))}
      </div>
    </div>
  );
}

export default Wellness;
