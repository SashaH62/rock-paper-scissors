import { useState } from "react";
import "./App.css";
import PaperImg from "./assets/images/icon-paper.svg";
import RockImg from "./assets/images/icon-rock.svg";
import ScissorsImg from "./assets/images/icon-scissors.svg";
import { HeaderContainer } from "./HeaderContainer";
import { MainContainer } from "./MainContainer";

export const playerChoices = [
  {
    id: "paper",
    image: PaperImg,
  },
  {
    id: "scissors",
    image: ScissorsImg,
  },
  {
    id: "rock",
    image: RockImg,
  },
];

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <HeaderContainer score={score} />
      <MainContainer score={score} onSetScore={setScore} />
    </div>
  );
}

export default App;
