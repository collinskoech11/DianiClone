import React from "react";
import "./css/home.css";
import ReactWhatsapp from "react-whatsapp";
import {
  drink,
  dinner,
  taxi,
  plane,
  fx,
  scooter,
  bike,
  food,
  cryptobtc,
  hotel,
  boatsvg,
  groceries,
  packageicon
} from "./icons";

function Home() {
  const data = [
    {
      name: "Cash, Currencies + Exchange",
      number: "+254773287540",
      message: "Hi DianiAPP 😊 I need some Ksh 💰",
      className: "whatsapp",
      image: fx,
      desc: "image desc",
    },
    {
      name: "Spend Crypto",
      number: "+254773287540",
      message: "Hi Zanziapp 😊 I want to spend some crypto ₿",
      className: "whatsapp spex",
      image: cryptobtc,
      desc: "image desc",
    },
    {
      name: "$200 Shillings (TZS)",
      number: "+254773287540",
      message: "Hi Zanziapp 😊 Im want to rent a boat 🛥️",
      className: "whatsapp",
      desc: "image desc",
    },
    {
      name: "$400 Shillings (TZS)",
      number: "+254773287540",
      message: "Hi Zanziapp 😊, I need to get accomodation 🏨",
      className: "whatsapp",
      desc: "image desc",
    },
    {
      name: "$600 Shillings (TZS)",
      number: "+254773287540",
      message: "Hi Zanziapp 😊, I need to get a package delivered 📦",
      className: "whatsapp",
      desc: "image desc",
    },
    {
      name: "$800 Shillings (TZS)",
      number: "+254773287540",
      message: "Hi Zanziapp 😊 Im want to rent a boat 🛥️",
      className: "whatsapp",
      desc: "image desc",
    },
    {
      name: "$1000 Shillings (TZS)",
      number: "+254773287540",
      message: "Hi Zanziapp 😊, I need to get accomodation 🏨",
      className: "whatsapp",
      desc: "image desc",
    },
    {
      name: "LARGER AMOUNT",
      number: "+254773287540",
      message: "Hi Zanziapp 😊, I need to get a package delivered 📦",
      className: "whatsapp",
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
            <div className="Tab-item">
              <div className="grid-left">{item.image} &nbsp; &nbsp; </div>
              <div className="grid-right">{item.name}</div>
            </div>
          </ReactWhatsapp>
        ))}
        <h3>Virtual Concierge</h3>
        <ReactWhatsapp
              number="+254773287540"
              message="Hi Zanziapp Im interested in renting a car scooter bike "
              className="whatsapp"
            >
          <div className="Tab-item">
              <p>Use Zanzi AG for taxis, table reservations, parties, events, rentals, VIP services and much more… </p>
            </div>
        </ReactWhatsapp>
      </div>
    </div>
  );
}

export default Home;
