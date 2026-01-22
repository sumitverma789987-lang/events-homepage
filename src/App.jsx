import { useState } from "react";
import viteLogo from "/vite.svg";
import bgImage from "../assets/bg-image.png";
import Navbar from "./components/Navbar";
import Text from "./components/Text";



function App() {
  return (
    <div
      className=" flex h-screen bg-cover bg-center z-20 "
      style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-black/50" />

      <Navbar />
      <div className=" flex   ">

        <Text />
      </div>
    </div>
  );
}

export default App;
