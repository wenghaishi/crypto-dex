import React from "react";
import { useState, useEffect } from "react";
import SwapItem from "./SwapItem";
import axios from "axios";

const Swap = () => {
  const [userAmount, setUserAmount] = useState();
  const [swapAmount, setSwapAmount] = useState();
  const [swapFrom, setSwapFrom] = useState();
  const [swapTo, setSwapTo] = useState();
  const [prices, setPrices] = useState({});

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
      } catch (error) {
        console.error(error);
      }
    };
    fetchPrices();
  }, [userAmount, swapAmount]);

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
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
      );
      setPrices(response.data);
      console.log(prices);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col item-center drop-shadow-md items-center mt-12">
      <div className="h-128 w-128 border rounded-xl flex flex-col item-center">
        <div className="bg-zinc-100 h-48 mt-4 mx-4 rounded-xl">
          <SwapItem
            handleUserAmountChange={handleUserAmountChange}
            handleSwapFrom={handleSwapFrom}
          />
        </div>
        <img
          src="arrow.png"
          alt=""
          className="absolute h-14 transform rotate-90 mt-48 ml-56"
        />
        <div className="bg-zinc-100 h-48 mt-4 mx-4 rounded-xl">
          <SwapItem
            handleSwapAmountChange={handleSwapAmountChange}
            handleSwapTo={handleSwapTo}
            swapAmount={swapAmount}
          />
        </div>
        <button
          onClick={handleSwap}
          className="bg-emerald-400 rounded-lg text-white font-bold px-4 h-16 mx-4 my-4"
        >
          Swap
        </button>
      </div>
    </div>
  );
};

export default Swap;
