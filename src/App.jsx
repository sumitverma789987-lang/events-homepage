import { useState } from "react";
import viteLogo from "/vite.svg";
import bgImage from "../assets/bg-image.png";
import Navbar from "./components/Navbar";
import Text from "./components/Text";


function App() {
  return (
    <div
      className="relative flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* overlay */}
        <Navbar />
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* content wrapper */}
      <div className="relative z-10 flex  flex-col min-h-screen">
        <Text />
      </div>
    </div>
  );
}


export default App;
