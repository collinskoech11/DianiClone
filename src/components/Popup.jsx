import React, {useState, useEffect} from 'react'
import "./css/popup.css"

const Popup = ({ setIsOpen }) => {
  return (
    <div className="slack">
      <h5 style={{color:'orange'}}>24/7 deliveries coming soon </h5><div className='closer-con' onClick={() => setIsOpen(false)}><h5 className="closer" >+</h5></div>
    </div>
  )
}

export default Popup