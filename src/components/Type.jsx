import React from 'react'
import {TypeAnimation } from 'react-type-animation'
import Typed from "react-typed"

function Type() {
  return (
    <>
    
    <h2 style={{ marginTop:'70px',fontSize:'30px', color:'#fff'}}>
    <Typed
      strings={[
            "Deliveries .",
            "Bookings .",
            "Anything .",
            "Anytime .",
            "24/7 .",
            " "
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop={false}
          showCursor={true}
          style={{ lineHeight: '1.5' }}

        />
      </h2>
      <h3 style={{ color:'#72ED2F', fontSize:'18px', fontWeight:'bold', marginBottom:'20px'}}>One Tap, One App, 24/7.</h3>
      </>
  )
}

export default Type