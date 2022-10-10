import React, {useState} from "react";
import "../css/home.css";
import ReactWhatsapp from "react-whatsapp";
import { drink, dinner, fx, food } from "../icons";
// import * as ReactCSSTransitionGroup from 'react-transition-group'; 
import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";



function Wellness() {
  const duration = 300;

  const [inProp, setInProp] = useState(false);
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    padding: 20,
    display: "inline-block",
    backgroundColor: "#b3d0ff"
  };
  
  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
  };
  
  const data = [
    {
      name: "On site Massage",
      number: "+254773287540",
      message: "Hello Goombay 😊 I need Massage 💆",
      className: "whatsapp",
      image: dinner,
      desc: "image desc",
    },
    {
      name: "On Site Hair & Make up",
      number: "+254773287540",
      message: "Hello Goombay 😊 I need on site hair & make up 💇",
      className: "whatsapp",
      image: fx,
      desc: "image desc",
    },
    {
      name: "schedule a yoga class",
      number: "+254773287540",
      message: "Hello Goombay 😊 I need to schedule a yoga class🧘",
      className: "whatsapp",
      image: fx,
      desc: "image desc",
    },
    {
      name: "On Site Nail service",
      number: "+254773287540",
      message: "Hello Goombay 😊 I need on site nail service 💅",
      className: "whatsapp",
      image: drink,
      desc: "image desc",
    },
    {
      name: "Something special",
      number: "+254773287540",
      message: "Hello Goombay 😊 I need Today's special 😜",
      className: "whatsapp",
      image: food,
      desc: "image desc",
    },
    
  ];

  return (
    <div className="container">
      {/* <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}> */}
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
      {/* </ReactCSSTransitionGroup> */}
    </div>
  );
}

export default Wellness;
