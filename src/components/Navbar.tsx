import React from "react";
import { ethers } from "ethers";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddr, setWalletAddr] = useState();

  const connectWallet = () => {
    window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
      setIsConnected(true);
      setWalletAddr(window.ethereum.selectedAddress);
    });
  };

  const checkConnection = async () => {
    try {
      // Check if MetaMask is connected
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      setIsConnected(true);
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
        className="h-12 ml-6 drop-shadow-none border-none"
      />
      <button
        className="bg-emerald-400 rounded-lg text-white font-bold px-6 h-14 mr-6"
        onClick={connectWallet}
      >
        {isConnected ? `${walletAddr.substring(0, 6)}...${walletAddr.substring(walletAddr.length - 4)}` : "Connect Metamask"}
      </button>
    </div>
  );
};

export default Navbar;