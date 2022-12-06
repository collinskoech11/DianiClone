import React from "react";
import "../css/act.css";
import ReactWhatsapp from "react-whatsapp";
import {
  canoeingmain,
  canoeingsub,
  raftingmain,
  rafting_sub_a,
  rafting_sub_b,
  bungeemain,
  bungee_sub_a,
  bungee_sub_b,
  boatride,
  boatride_sub_b,
  boatride_sub_a,
  citytour,
  citytour_sub_a,
  citytour_sub_b,
  kayaking,
  kayaking_sub_a,
  kayaking_sub_b,
  sugarcane,
  sugarcane_sub_a,
  sugarcane_sub_b,
  sunset,
  sunset_sub_a,
  sunset_sub_b,
  falls,
  falls_sub_a,
  falls_sub_b,
  cycling,
  cycling_sub_a,
  cycling_sub_b,
  sailing,
  sailing_sub_a,
  sailing_sub_b,
  biking,
  biking_sub_a,
  biking_sub_b,
  jetboat,
  jetboat_sub_a,
  jetboat_sub_b,
  sightseeing,
  sightseeing_sub_a,
  sightseeing_sub_b,
  horseriding,
  horseriding_sub_a,
  horseriding_sub_b
} from "./images";

function Activities() {
  const data = [
    {
      name: "Canoeing",
      message: "Hi JinjaApp 😊, Im interested in Sunset/Sunrise Boat Trip 🛥️",
      number: "+254773287540",
      background: canoeingmain,
      sub_image_a: canoeingsub,
      sub_image_b: canoeingsub,
      description:"Join us for a kayaking experience of a lifetime that will teach you the skills required to whitewater kayak as safely as possible. The day is designed to teach the skills you need to run a fun white-water section on your first day. One of our highly qualified guides will be with you every step of the way. With good reason, this is one of our incredibly popular and fun water activities!",
      price: "UGX 150k",
      duration: "Duration: 24hr",
      cost: [
        {
          title:"Full Day",
          price:"150k UGX"
        },
        {
          title:"Half Day",
          price:"135k UGX"
        },
        {
          title:"Full Day extreme",
          price:"160k UGX"
        },
        {
          title:"Half Day extreme",
          price:"155k UGX"
        },
        {
          title:"Two days Rafting",
          price:"250k UGX"
        },
        {
          title:"Riverboading",
          price:"150k UGX"
        },
        {
          title:"Family Whitewate adult",
          price:"60k UGX"
        },
        {
          title:"Family Whitewate children",
          price:"50k UGX"
        },

      ]
    },
    {
        name: "Horse Riding",
        message: "Hi JinjaApp 😊, Im interested in Sunset/Sunrise Boat Trip 🛥️",
        number: "+254773287540",
        background: horseriding,
        sub_image_a: horseriding_sub_a,
        sub_image_b: horseriding_sub_b,
        description:
          "If water-based activities aren’t for you, you can stick to land-based activities like our horse riding in Uganda. Of course we recommend you try both! Come and enjoy a leisurely ride on horseback through the villages and farmland framing the River Nile. Horses are known for their gentle natures, adding to the serenity of your escape to Uganda.",
        price: "40 USD",
        duration: "Duration: 24hr",
        cost: [
        {
          title:"Ugandans",
          price:"40 USD"
        },
        {
          title:"Foreigners",
          price:"80 USD"
        },

      ]
      },
    {
      name: "White Water Rafting",
      message: "Hi JinjaApp 😊, Im interested in White water Rafting 🛥️",
      number: "+254773287540",
      background: raftingmain,
      sub_image_a: rafting_sub_a,
      sub_image_b: rafting_sub_b,
      description:
        "Considered one of the best one-day white water trips in the world, no safari to  Uganda would be complete without truly experiencing the Nile from its source. With a commitment to safety, quality and value for money, Nile River explorers  focus on providing our clients with an all-inclusive experience of the Nile. We take a  personal interest in every detail of your day to ensure your time with us is simply  unforgettable. ",
      price: "1000 Ksh",
      duration: "Duration: 24hr",
      cost: [
        {
          title:"Full Day",
          price:"150k UGX"
        },
        {
          title:"Half Day",
          price:"135k UGX"
        },
        {
          title:"Full Day extreme",
          price:"160k UGX"
        },
        {
          title:"Half Day extreme",
          price:"155k UGX"
        },
        {
          title:"Two days Rafting",
          price:"250k UGX"
        },
        {
          title:"Riverboading",
          price:"150k UGX"
        },
        {
          title:"Family Whitewater adult",
          price:"60k UGX"
        },
        {
          title:"Family Whitewater children",
          price:"50k UGX"
        },

      ]
    },
    {
      name: "Bungee Jumping",
      message: "Hi JinjaApp 😊, Im interested in Sunset/Sunrise Boat Trip 🛥️",
      number: "+254773287540",
      background: bungeemain,
      sub_image_a: bungee_sub_a,
      sub_image_b: bungee_sub_b,
      description:
        "Jinja is well known for bungee jumping, an adrenaline pumping experience when you plunge yourself 43 meters down into open space before partly immersing yourself into Nile water at the Nile High Bungee. Bungee jumping is an activity much loved by those who want to test the limits of their adventure spirits.",
      price: "1000 Ksh",
      duration: "Duration: 24hr",
      cost: [
        {
          title:"Ugandans",
          price:"200k UGX"
        },
        {
          title:"East Africans",
          price:"100 USD"
        },
        {
          title:"Foreigners",
          price:"115 USD"
        }

      ]
    },
    {
        name: "Boatride",
        message: "Hi JinjaApp 😊, Im interested in Sunset/Sunrise Boat Trip 🛥️",
        number: "+254773287540",
        background: boatride,
        sub_image_a: boatride_sub_b,
        sub_image_b: boatride_sub_a,
        description:
          "Nothing beats an African sunset and particularly one on the river Nile. Salute the end of another great day with great",
        price: "1000 Ksh",
        duration: "Duration: 24hr",
        cost: [
        {
          title:"Full Day",
          price:"150k UGX"
        },
        {
          title:"Half Day",
          price:"135k UGX"
        },
        {
          title:"Full Day extreme",
          price:"160k UGX"
        },
        {
          title:"Half Day extreme",
          price:"155k UGX"
        },
        {
          title:"Two days Rafting",
          price:"250k UGX"
        },
        {
          title:"Riverboading",
          price:"150k UGX"
        },
        {
          title:"Family Whitewate adult",
          price:"60k UGX"
        },
        {
          title:"Family Whitewate children",
          price:"50k UGX"
        },

      ]
      },
      {
        name: "City Tour",
        message: "Hi JinjaApp 😊, Im interested in Sunset/Sunrise Boat Trip 🛥️",
        number: "+254773287540",
        background: citytour,
        sub_image_a: citytour_sub_a,
        sub_image_b: citytour_sub_b,
        description:
          "Experience the beauty of nature while sailing towards the magical sunset/sunrise while enjoying the peace and beauty of the ocean. During the season you might occasionally see dolphins . As you sail from the shores, you enjoy the comfort and beautiful decorations of the dhow while enjoying your favorite drinks and alcohol.",
        price: "1000 Ksh",
        duration: "Duration: 24hr",
        cost: [
        {
          title:"Full Day",
          price:"150k UGX"
        },
        {
          title:"Half Day",
          price:"135k UGX"
        },
        {
          title:"Full Day extreme",
          price:"160k UGX"
        },
        {
          title:"Half Day extreme",
          price:"155k UGX"
        },
        {
          title:"Two days Rafting",
          price:"250k UGX"
        },
        {
          title:"Riverboading",
          price:"150k UGX"
        },
        {
          title:"Family Whitewate adult",
          price:"60k UGX"
        },
        {
          title:"Family Whitewate children",
          price:"50k UGX"
        },

      ]
      },
      {
        name: "Kayaking",
        message: "Hi JinjaApp 😊, Im interested in Kayaking 🛥️",
        number: "+254773287540",
        background: kayaking,
        sub_image_a: kayaking_sub_a,
        sub_image_b: kayaking_sub_b,
        description:
          "Join us for a kayaking experience of a lifetime that will teach you the skills required to whitewater kayak as safely as possible. The day is designed to teach the skills you need to run a fun white-water section on your first day. One of our highly qualified guides will be with you every step of the way. With good reason, this is one of our incredibly popular and fun water activities!",
        price: "1000 Ksh",
        duration: "Duration: 24hr",
        cost: [
        {
          title:"Full Day",
          price:"150k UGX"
        },
        {
          title:"Half Day",
          price:"135k UGX"
        },
        {
          title:"Full Day extreme",
          price:"160k UGX"
        },
        {
          title:"Half Day extreme",
          price:"155k UGX"
        },
        {
          title:"Two days Rafting",
          price:"250k UGX"
        },
        {
          title:"Riverboading",
          price:"150k UGX"
        },
        {
          title:"Family Whitewate adult",
          price:"60k UGX"
        },
        {
          title:"Family Whitewate children",
          price:"50k UGX"
        },

      ]
      },
      {
        name: "Sugarcane",
        message: "Hi JinjaApp 😊, Im interested in Sunset/Sunrise Boat Trip 🛥️",
        number: "+254773287540",
        background: sugarcane,
        sub_image_a: sugarcane_sub_a,
        sub_image_b: sugarcane_sub_b,
        description:
          "Experience the beauty of nature while sailing towards the magical sunset/sunrise while enjoying the peace and beauty of the ocean. During the season you might occasionally see dolphins . As you sail from the shores, you enjoy the comfort and beautiful decorations of the dhow while enjoying your favorite drinks and alcohol.",
        price: "1000 Ksh",
        duration: "Duration: 24hr",
        cost: [
        {
          title:"Full Day",
          price:"150k UGX"
        },
        {
          title:"Half Day",
          price:"135k UGX"
        },
        {
          title:"Full Day extreme",
          price:"160k UGX"
        },
        {
          title:"Half Day extreme",
          price:"155k UGX"
        },
        {
          title:"Two days Rafting",
          price:"250k UGX"
        },
        {
          title:"Riverboading",
          price:"150k UGX"
        },
        {
          title:"Family Whitewate adult",
          price:"60k UGX"
        },
        {
          title:"Family Whitewate children",
          price:"50k UGX"
        },

      ]
      },
      {
        name: "Sunset Cruise",
        message: "Hi JinjaApp 😊, Im interested in Sunset/Sunrise Cruise 🛥️",
        number: "+254773287540",
        background: sunset,
        sub_image_a: sunset_sub_a,
        sub_image_b: sunset_sub_b,
        description:
          "Nothing beats an African sunset and particularly one on the river Nile. Salute the end of another great day with great adventure safari, enjoy the nature with an ice-cold beer and don’t forget to bring your cameras to capture not just the sunset but an array of birdlife including the African fish Eagles swooping for small fish",
        price: "1000 Ksh",
        duration: "Duration: 24hr",
        cost: [
        {
          title:"Full Day",
          price:"150k UGX"
        },
        {
          title:"Half Day",
          price:"135k UGX"
        },
        {
          title:"Full Day extreme",
          price:"160k UGX"
        },
        {
          title:"Half Day extreme",
          price:"155k UGX"
        },
        {
          title:"Two days Rafting",
          price:"250k UGX"
        },
        {
          title:"Riverboading",
          price:"150k UGX"
        },
        {
          title:"Family Whitewate adult",
          price:"60k UGX"
        },
        {
          title:"Family Whitewate children",
          price:"50k UGX"
        },

      ]
      },
      {
        name: "Itanda/Bujagali/Kyabirwa Falls Tour",
        message: "Hi JinjaApp 😊, Im interested in Sunset/Sunrise Boat Trip 🛥️",
        number: "+254773287540",
        background: falls,
        sub_image_a: falls_sub_a,
        sub_image_b: falls_sub_b,
        description:
          "These Falls are located along the Nile River, within a distance of about 10 kilometers from Jinja municipality. The place is famous for the scenery and white water rafting activities of Bujagali Falls.The falls also offer an opportunity for bird watching, tubing on the Nile, rafting, canoeing and kayaking among others but little activities happen here.",
        price: "1000 Ksh",
        duration: "Duration: 24hr",
        cost: [
        {
          title:"Full Day",
          price:"150k UGX"
        },
        {
          title:"Half Day",
          price:"135k UGX"
        },
        {
          title:"Full Day extreme",
          price:"160k UGX"
        },
        {
          title:"Half Day extreme",
          price:"155k UGX"
        },
        {
          title:"Two days Rafting",
          price:"250k UGX"
        },
        {
          title:"Riverboading",
          price:"150k UGX"
        },
        {
          title:"Family Whitewate adult",
          price:"60k UGX"
        },
        {
          title:"Family Whitewate children",
          price:"50k UGX"
        },

      ]
      },
      {
        name: "Cycling Tour",
        message: "Hi JinjaApp 😊, Im interested in Sunset/Sunrise Boat Trip 🛥️",
        number: "+254773287540",
        background: cycling,
        sub_image_a: cycling_sub_a,
        sub_image_b: cycling_sub_b,
        description:
          "With Jinja Cycling tour, you will discover Uganda in a different way. On a bicycle you have more time to enjoy the scenery, and be active and you can interact more with the people you see and meet. The tours can be organized in groups or on an individual base.",
        price: "1000 Ksh",
        duration: "Duration: 24hr",
        cost: [
        {
          title:"Full Day",
          price:"150k UGX"
        },
        {
          title:"Half Day",
          price:"135k UGX"
        },
        {
          title:"Full Day extreme",
          price:"160k UGX"
        },
        {
          title:"Half Day extreme",
          price:"155k UGX"
        },
        {
          title:"Two days Rafting",
          price:"250k UGX"
        },
        {
          title:"Riverboading",
          price:"150k UGX"
        },
        {
          title:"Family Whitewate adult",
          price:"60k UGX"
        },
        {
          title:"Family Whitewate children",
          price:"50k UGX"
        },

      ]
      },
      {
        name: "Sailing on River Nile & Lake Victoria",
        message: "Hi JinjaApp 😊, Im interested in Sunset/Sunrise Boat Trip 🛥️",
        number: "+254773287540",
        background: sailing,
        sub_image_a: sailing_sub_a,
        sub_image_b: sailing_sub_b,
        description:
          "The excursion departs from Jinja and Starts on Lake Victoria and motor on by the port, through the Source of the Nile and into the River Nile whilst enjoying the sites of the river at this unique location, enjoying birds such as the African Eagle, kingfisher, monitor lizards, snakes, otters and sometimes even some Owls. Enjoy a leisurely cruise in a wooden motorized boat around the first few kilometers of Lake Victoria and the River Nile searching along the shores and small islands for birds, otters and Nile Monitor lizards.",
        price: "1000 Ksh",
        duration: "Duration: 24hr",
        cost: [
        {
          title:"Full Day",
          price:"150k UGX"
        },
        {
          title:"Half Day",
          price:"135k UGX"
        },
        {
          title:"Full Day extreme",
          price:"160k UGX"
        },
        {
          title:"Half Day extreme",
          price:"155k UGX"
        },
        {
          title:"Two days Rafting",
          price:"250k UGX"
        },
        {
          title:"Riverboading",
          price:"150k UGX"
        },
        {
          title:"Family Whitewate adult",
          price:"60k UGX"
        },
        {
          title:"Family Whitewate children",
          price:"50k UGX"
        },

      ]
      },
      {
        name: "Mountain Biking",
        message: "Hi JinjaApp 😊, Im interested in Sunset/Sunrise Boat Trip 🛥️",
        number: "+254773287540",
        background: biking,
        sub_image_a: biking_sub_a,
        sub_image_b: biking_sub_b,
        description:
          "Get on the beaten track and take a good look around. Whether it’s a physical challenge you are looking for or just want to meander through villages on the banks of the Nile, we have a tour to suit you.",
        price: "1000 Ksh",
        duration: "Duration: 24hr",
        cost: [
        {
          title:"Full Day",
          price:"150k UGX"
        },
        {
          title:"Half Day",
          price:"135k UGX"
        },
        {
          title:"Full Day extreme",
          price:"160k UGX"
        },
        {
          title:"Half Day extreme",
          price:"155k UGX"
        },
        {
          title:"Two days Rafting",
          price:"250k UGX"
        },
        {
          title:"Riverboading",
          price:"150k UGX"
        },
        {
          title:"Family Whitewate adult",
          price:"60k UGX"
        },
        {
          title:"Family Whitewate children",
          price:"50k UGX"
        },

      ]
      },
      {
        name: "Jet Boat Adventures",
        message: "Hi JinjaApp 😊, Im interested in Sunset/Sunrise Boat Trip 🛥️",
        number: "+254773287540",
        background: jetboat,
        sub_image_a: jetboat_sub_a,
        sub_image_b: jetboat_sub_b,
        description:
          "Jet Boating on the Nile in Jinja is a must do adventure activity on the River Nile as you power along at amazing speeds and race through the rapids, turning and spinning. It's fun and safe. A trip to Uganda is not complete without experiencing this adventure. You can either take the ride with friends or family.",
        price: "1000 Ksh",
        duration: "Duration: 24hr",
        cost: [
        {
          title:"Full Day",
          price:"150k UGX"
        },
        {
          title:"Half Day",
          price:"135k UGX"
        },
        {
          title:"Full Day extreme",
          price:"160k UGX"
        },
        {
          title:"Half Day extreme",
          price:"155k UGX"
        },
        {
          title:"Two days Rafting",
          price:"250k UGX"
        },
        {
          title:"Riverboading",
          price:"150k UGX"
        },
        {
          title:"Family Whitewate adult",
          price:"60k UGX"
        },
        {
          title:"Family Whitewate children",
          price:"50k UGX"
        },

      ]
      },
      {
        name: "sightseeing",
        message: "Hi JinjaApp 😊, Im interested in Sunset/Sunrise Boat Trip 🛥️",
        number: "+254773287540",
        background: sightseeing,
        sub_image_a: sightseeing_sub_a,
        sub_image_b: sightseeing_sub_b,
        description:
          "Experience the beauty of nature while sailing towards the magical sunset/sunrise while enjoying the peace and beauty of the ocean. During the season you might occasionally see dolphins . As you sail from the shores, you enjoy the comfort and beautiful decorations of the dhow while enjoying your favorite drinks and alcohol.",
        price: "1000 Ksh",
        duration: "Duration: 24hr",
        cost: [
        {
          title:"Full Day",
          price:"150k UGX"
        },
        {
          title:"Half Day",
          price:"135k UGX"
        },
        {
          title:"Full Day extreme",
          price:"160k UGX"
        },
        {
          title:"Half Day extreme",
          price:"155k UGX"
        },
        {
          title:"Two days Rafting",
          price:"250k UGX"
        },
        {
          title:"Riverboading",
          price:"150k UGX"
        },
        {
          title:"Family Whitewate adult",
          price:"60k UGX"
        },
        {
          title:"Family Whitewate children",
          price:"50k UGX"
        },

      ]
      },
  ];
  return (
    <div className="activities">
      <h2>Activities + Tours</h2>

      <div className="act-container">
        {data.map((item, index) => {
          let image = item.background;
          let tag = item.name;
          let mapper = item.cost
          return (
            <div>
              <div className="act-item">
                <div
                  className="act-main-image"
                  style={{ backgroundImage: { image } }}
                >
                  <img src={image} />
                </div>
                <div className="images-sub">
                  <div className="price-per">
                    <h5>{item.price}</h5>
                  </div>
                  <div className="act-per">
                    <img
                      src={item.sub_image_a}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div className="act-per">
                    <img
                      src={item.sub_image_b}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                </div>
                <div className="text">
                  <h5
                    style={{
                      textAlign: "left",
                      padding: "20px",
                      color: "#ff66ff",
                      fontSize: "1.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.name} &nbsp;
                    <span style={{ fontSize: "0.5em" }}>{item.duration}</span>
                  </h5>
                  <p style={{ padding: "20px" }}> {item.description}</p>
                  <details open>
                    <summary style={{borderBottom:"1px solid lightgray", paddingBottom:"10px"}}>
                      Full Prices
                    </summary>
                    <div className="flexer"><b>Description</b><b>Price</b></div>
                    {mapper.map((index, price) => {
                      return(
                        <div className="flexer"><p>{index.title}</p><p>{index.price}</p></div>
                      )
                    })}
                  </details>
                </div>
              </div>
              <ReactWhatsapp
                key={index}
                number={item.number}
                message={item.message}
                className="none"
              >
                <h4>Book Now</h4>
              </ReactWhatsapp>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Activities;
