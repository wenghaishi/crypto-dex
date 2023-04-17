import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Swap from "./components/Swap";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Swap />
    </div>
  );
}

export default App;
