import React from "react";
import { useState } from "react";
import SwapItem from "./SwapItem";

const Swap = () => {
  const [userAmount, setUserAmount] = useState();
  const [swapAmount, setSwapAmount] = useState();
  const [swapFrom, setSwapFrom] = useState();
  const [swapTo, setSwapTo] = useState();

  const handleUserAmountChange = (e) => {
    setUserAmount(e.value);
  };

  const handleSwapAmountChange = (e) => {
    setSwapAmount(e.value);
    console.log(e)
  };

  const handleSwapFrom = (e) => {
    setSwapFrom(e.target.value)
  }

  const handleSwapTo = (e) => {
    setSwapTo(e.target.value)
  } 

  return (
    <div className="flex flex-col item-center drop-shadow-md items-center mt-12">
      <div className="h-128 w-128 border rounded-xl flex flex-col item-center">
        <div className="bg-zinc-100 h-48 mt-4 mx-4 rounded-xl">
          <SwapItem handleUserAmountChange={handleUserAmountChange} handleSwapFrom={handleSwapFrom}/>
        </div>
        <img
          src="arrow.png"
          alt=""
          className="absolute h-14 transform rotate-90 mt-48 ml-56"
        />
        <div className="bg-zinc-100 h-48 mt-4 mx-4 rounded-xl">
          <SwapItem handleSwapAmountChange={handleSwapAmountChange} handleSwapTo={handleSwapTo}/>
        </div>
        <button className="bg-emerald-400 rounded-lg text-white font-bold px-4 h-16 mx-4 my-4">
          Swap
        </button>
      </div>
    </div>
  );
};

export default Swap;
