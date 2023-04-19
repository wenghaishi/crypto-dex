import React from "react";
import Select from "react-select";
import { useState } from "react";

const SwapItem = (props: any) => {
  const options = [
    { value: "ethereum", label: "ETH" },
    { value: "bitcoin", label: "BTC" },
  ];

  return (
    <div className="w-full h-full flex flex-row items-center justify-evenly">
      <input type="number" step="any" d-none className="h-12 text-3xl rounded-lg border px-2 w-2/4" onChange={props.handleUserAmountChange || props.handleSwapAmountChange} value={props.swapAmount}/>
      <div className="absolute mt-24 mr-80 pl-2">{props.swapFromPrice > 0? "$" + `${props.swapFromPrice.toLocaleString()}` : ""}</div>
      <Select options={options} onChange={props.handleSwapFrom || props.handleSwapTo}/>
    </div>
  );
};

export default SwapItem;
