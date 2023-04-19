import React from "react";
import { ethers } from "ethers";
import { useState, useEffect } from "react";


const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddr, setWalletAddr] = useState<string>("");

  const connectWallet = () => {
    window.ethereum.request({ method: "eth_requestAccounts" }).then((res: any) => {
      setIsConnected(true);
      setWalletAddr(window.ethereum.selectedAddress);
    });
  };

  const checkConnection = async () => {
    try {
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      setIsConnected(accounts.length > 0);
      setWalletAddr(accounts[0]);
    } catch (error) {
      console.log(error);
      setIsConnected(false);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <div className="h-20 border-b drop-shadow-md flex flex-row items-center justify-between">
      <img
        src="logo.jpeg"
        alt=""
        className="h-12 ml-8 drop-shadow-none border-none"
      />
      <button
        className="bg-emerald-400 rounded-lg text-white font-bold px-6 h-14 mr-8"
        onClick={connectWallet}
      >
        {isConnected ? `${walletAddr.substring(0, 6)}...${walletAddr.substring(walletAddr.length - 4)}` : "Connect Metamask"}
      </button>
    </div>
  );
};

export default Navbar;
