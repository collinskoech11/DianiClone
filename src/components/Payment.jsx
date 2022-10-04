import React from "react";
import { crypto, credit, paypal, kes } from "./icons";
import "./css/Payment.css";
const Payment = () => {
  return (
    <div className="Payment-container">
      <h4 style={{fontSize:"0.8em"}}>Accepts</h4> &nbsp;&nbsp;&nbsp; {kes}&nbsp; {crypto} &nbsp; {credit} &nbsp; {paypal}
    </div>
  );
};

export default Payment;
