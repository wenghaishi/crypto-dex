import React from "react";
import Select from "react-select";
import { useState } from "react";

const SwapItem = (props) => {
  const options = [
    { value: "USDC", label: "USDC" },
    { value: "ETH", label: "ETH" },
    { value: "BTC", label: "BTC" },
  ];

  return (
    <div className="w-full h-full flex flex-row items-center justify-evenly">
      <input type="number" className="h-16 text-4xl rounded-lg px-2 w-2/4" onChange={props.handleSwapFrom || props.handleSwapTo}/>
      <Select options={options} onChange={props.handleUserAmountChange || props.handleSwapAmountChange}/>
    </div>
  );
};

export default SwapItem;
