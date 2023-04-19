import React from "react";
import { useState, useEffect } from "react";
import SwapItem from "./SwapItem";
import axios from "axios";
import { ethers } from "ethers";
import { BsFillArrowDownSquareFill } from 'react-icons/bs';

const Swap = () => {
  const [userAmount, setUserAmount] = useState<any>();
  const [swapAmount, setSwapAmount] = useState<any>();
  const [swapFrom, setSwapFrom] = useState<any>();
  const [swapTo, setSwapTo] = useState<any>();
  const [prices, setPrices] = useState<any>({});
  const [swapFromPrice, setSwapFromPrice] = useState<number>();

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
        );
        const data = await response.json();
        setPrices(data);
        const swapped = (data[swapFrom].usd * userAmount) / data[swapTo].usd;
        setSwapAmount(swapped);
        setSwapFromPrice((data[swapFrom].usd * userAmount))
        console.log(swapFromPrice)
      } catch (error) {
        console.error(error);
      }
    };
    fetchPrices();
  }, [userAmount, swapAmount, swapFrom, swapTo]);

  const handleUserAmountChange = (e: any) => {
    setUserAmount(e.target.value);
  };

  const handleSwapAmountChange = (e: any) => {
    setSwapAmount(e.target.value);
    console.log(e);
  };

  const handleSwapFrom = (e: any) => {
    setSwapFrom(e.value);
  };

  const handleSwapTo = (e: any) => {
    setSwapTo(e.value);
  };

  
  const handleSwap = async () => {
    
  };

  return (
    <div className="flex flex-col item-center drop-shadow-md items-center mt-12">
      <div className="h-128 w-128 border rounded-xl flex flex-col item-center">
        <div className="bg-white h-48 mt-4 mx-4 rounded-xl">
          <SwapItem
            handleUserAmountChange={handleUserAmountChange}
            handleSwapFrom={handleSwapFrom}
            swapFromPrice={swapFromPrice}
          />
        </div>
        <BsFillArrowDownSquareFill className="text-5xl text-green mt-48 ml-60 absolute text-emerald-400 bg-white"/>
        <div className="bg-white h-48 mt-4 mx-4 rounded-xl">
          <SwapItem
            handleSwapAmountChange={handleSwapAmountChange}
            handleSwapTo={handleSwapTo}
            swapAmount={swapAmount}
            swapFromPrice={swapFromPrice}
          />
        </div>
        <button
          onClick={handleSwap}
          className="bg-emerald-400 rounded-lg text-white font-bold px-4 h-16 mx-4 my-4 hover:bg-emerald-300"
        >
          Swap
        </button>
      </div>
    </div>
  );
};

export default Swap;
