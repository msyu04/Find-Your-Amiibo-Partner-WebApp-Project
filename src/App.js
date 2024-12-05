import { useState, useEffect } from "react";
import Input from "./Input";
import AmiiboCard from "./Amiibo Card";
import "./styles.css";

export default function App() {
  const [amiiboData, setAmiiboData] = useState([]);
  const [amiibo, setAmiibo] = useState(null);
  const [number, setNumber] = useState(null);
  const [continent, setContinent] = useState("na");
  const [game, setGame] = useState("");

  function fetchNewAmiibo() {
    const videogame = encodeURIComponent(game.trim());
    const url = `https://amiiboapi.com/api/amiibo/?type=Figure&amiiboSeries=${videogame}`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => {
        setAmiiboData(r.amiibo);
        // Set a random amiibo only if we have amiiboData
        if (r.amiibo.length > 0) {
          const randomNumber = Math.floor(Math.random() * r.amiibo.length);
          setNumber(randomNumber);
        } else {
          setAmiibo(null); // No Amiibo found for the selected game
        }
      });
  }

  // Use Effect to fetch new Amiibo when game changes
  useEffect(() => {
    if (game) {
      fetchNewAmiibo();
    }
  }, [game]);

  // Use Effect to set the selected Amiibo when amiiboData is available
  useEffect(() => {
    if (number !== null && amiiboData.length > 0) {
      setAmiibo(amiiboData[number]);
    } else {
      setAmiibo(null);
    }
  }, [number, amiiboData]);

  return (
    <div className="App">
      <header>
        <h1>Find Your Amiibo Partner</h1>
      </header>
      <main>
        <Input
          action={setNumber} // Pass the setNumber function to get the random number
          action2={setContinent}
          action3={setGame}
          info={amiiboData}
        />
        <h2>Amiibo Character</h2>
        <div>
          <AmiiboCard info={amiibo} info2={continent} />
        </div>
      </main>
    </div>
  );
}
