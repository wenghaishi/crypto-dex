import React from "react";
import Select from "react-select";
import { useState } from "react";

const SwapItem = (props: any) => {
  const options = [
    { value: "USDC", label: "USDC" },
    { value: "ethereum", label: "ETH" },
    { value: "bitcoin", label: "BTC" },
  ];

  return (
    <div className="w-full h-full flex flex-row items-center justify-evenly">
      <input type="number" className="h-16 text-4xl rounded-lg px-2 w-2/4" onChange={props.handleUserAmountChange || props.handleSwapAmountChange}/>
      <Select options={options} onChange={props.handleSwapFrom || props.handleSwapTo}/>
    </div>
  );
};

export default SwapItem;
