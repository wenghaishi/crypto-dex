import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Swap from "./components/Swap";


function App() {
  const [ethContract, setEthContract] = useState();
  const [btcContract, setBtcContract] = useState();

  useEffect(() => {
    const onLoad = async () => {
      const ethContract = getEthContract();
      setEthContract(ethContract);
      const btcContract = getBtcContract();
      setBtcContract(btcContract);
    };
    onLoad();
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar />
      <Swap />
    </div>
  );
}

export default App;
