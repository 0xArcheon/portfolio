import { useState } from "react";
import Navbar from "./components/Navbar";
import MainBanner from "./components/MainBanner";

function App() {
  return (
    <div className="bg bg-background">
      <Navbar />
      <MainBanner />
    </div>
  );
}

export default App;
