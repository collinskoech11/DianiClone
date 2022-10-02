 import React from "react";
import "../css/act.css";
import ReactWhatsapp from "react-whatsapp";
import {imagebg, glassboat, dolphins, quad, golf, camel, snorkeling} from "./images"

function Activities() {
  const data = [
    {
        name: "Sunset/Sunrise Boat Trip",
        message: "Hi Zanziapp 😊, Im interested in Sunset/Sunrise Boat Trip 🛥️",
        number: "+254773287540",
        background: imagebg,
        description: "Experience the beauty of nature while sailing towards the magical sunset/sunrise while enjoying the peace and beauty of the ocean. During the season you might occasionally see dolphins . As you sail from the shores, you enjoy the comfort and beautiful decorations of the dhow while enjoying your favorite drinks and alcohol.",
    },
    {
        name: "Glassboat Trip",
        number: "+254773287540",
        message: "Hi Zanziapp 😊, Im interested in Glassboat Trip 🛥️",
        background: glassboat,
        description: "Experience an incredible day out for those who want to stay dry but still enjoy the marine life, sail on a glass boat in the ocean and watch a school of colorful fish swim beneath you.",
    },
    {
        name: "Dolphin Watching",
        number: "+254773287540",
        message: "Hi Zanziapp 😊, Im interested in Dolphin Watching 🐬",
        background: dolphins,
        description: "Get to see the bottlenose dolphins up-close and personal in their natural environment. Bahamas will change your perception of the animals that are considered to have the near intelligence capacity of humans. You can also get a chance to swim with the dolphins. Enjoy watching whale sharks and have a chance to swim with these gentle giants.", 
    },
    {
        name: "Quad Bike Tour",
        number: "+254773287540",
        message: "Hi Zanziapp 😊, Im interested in Quad Bike Tour 🏍️",
        background: quad,
        description: "Get to drive around on a guided trip on dirt roads through small villages and beautiful scenery that is rarely seen and visited by tourists. All trips are available for everyone who holds a valid driving license.",
    },
    {
        name: "Golf",
        number: "+254773287540",
        message: "Hi Zanziapp 😊, Im interested in Golf 🏌️",
        background: golf,
        description: "With breathtaking views of the Atlantic Ocean and Nassau Harbor, our championship course is always in full swing. Masterfully designed by Tom Weiskopf, the Ocean Club Golf Course offers Atlantis guests all the makings of a perfect round. This 18-hole par 72 course stretches over 7,100 yards on Paradise Island Oceanside's peninsula, where crosswinds challenge even the most experienced players.",
    },
    {
        name: "Camel Rides",
        number: "+254773287540",
        message: "Hi Zanziapp 😊, Im interested in Camel rides🐫 ",
        background: camel,
        description: "Camel riding along the Beach is loads of fun and can also be a great way to get to the different beach restaurants along the coastline.         ",
    },
    {
        name: "Snorkeling",
        number: "+254773287540",
        message: "Hi Zanziapp 😊, Im interested in snorkelling 🤿",
        background: snorkeling,
        description: "This is an underwater activity that is much easier to do and is safe to trying even for kids from 10 years and above.You will have an opportunity to explore the underwater environment ",
    }
  ];

 
  return (
    <div className="activities">
      <h2>Activities & Tours</h2>
      <div className="act-container">
        {data.map ((item, index) => {
            let image = item.background
        return(
        <div>
            <div className="act-item" style={{ backgroundImage: `url(${image})`}}>
                <div className="act-full">
                    <div className="Text">
                        <h2 style={{color:'#fff'}}>{item.name}</h2>
                        <p style={{color:'#fff'}}sa>{item.description}</p>
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
        )
    })}
      </div>
    </div>
  );
}

export default Activities;
