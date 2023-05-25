import React from "react";
import "./App.css";
import { getImage } from "../services/image.service";
import { extractFirstWord } from "../utils/utils";
import { useState } from "react";
import { getFact } from "../services/facts.service";
import image from "../mocks/download.jpg";

function App() {
  const [catFact, setCatFact] = useState("");
  const getOneFact = async () => {
    try {
      const { fact } = await getFact();
      setCatFact(extractFirstWord(fact));
      console.log(catFact);
    } catch (error) {}
  };

  const handleClick = () => {
    getOneFact();
  };

  return (
    <main className="main">
      <h1>app</h1>
      <button onClick={handleClick}>get fact</button>
      <p>
        <strong>fact is: </strong>
        <span>{catFact === "" ? `t` : catFact}</span>
      </p>
      <img src={image} alt="image from cat api" />
    </main>
  );
}

export default App;
