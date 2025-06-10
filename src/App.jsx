import React, { useEffect } from "react";
import Background from "./Components/Background/";
import NavBar from "./Components/NavBar";
import { useState } from "react";
import Hero from "./Components/Hero";

const App = () => {
  let textData = [
    { text1: "Dive into", text2: "What you LOVE" },
    { text1: "Indulge", text2: "Your Passions" },
    { text1: "Give into your", text2: "Passions" },
  ]
  const [image, setImage] = useState(2);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setImage((count) => { return count === 2 ? 0 : count + 1 })
    }, 3000);
  }, []);
  return (
    <div>
      <Background image={image} playing={playing} />
      <NavBar />
      <Hero textData={textData[image]} image={image} setImage={setImage} playing={playing} setPlaying={setPlaying} />
    </div>
  )
}

export default App
