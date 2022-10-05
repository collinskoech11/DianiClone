import React, { useState } from "react";
import { walletconnecticon } from "./icons";
import "./css/walletModal.css";
import Popup from 'reactjs-popup';

function WalletConnect() {
  const [currentAccount, setCurrentAccount] = useState("");
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Make sure you have metamask");
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found and authorized account : ", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account available");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get Metamask");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div className="main-connect">
      <Popup trigger={<button className="connection-btn">{walletconnecticon}</button>} position="right center">
        <div className="chat-box">
            <div className="logo-top-con">
                <h3>Lalo Interactive</h3>
            </div>
            <div className="message-wifi">

            </div>
        </div>
      </Popup>
        {/* <div className="main-connect">
            {!currentAccount && (
            <div className="main-icon" onClick={connectWallet}>
              {walletconnecticon}
            </div>
             )}
        </div> */}
        </div>
    </>
  );
}

export default WalletConnect;
