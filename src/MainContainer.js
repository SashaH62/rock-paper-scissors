import { useState } from "react";
import { playerChoices } from "./App";
import { ResultsContainer } from "./ResultsContainer";
import { InputContainer } from "./InputContainer";

export const MainContainer = ({ score, onSetScore }) => {
  const [userChoice, setUserChoice] = useState(null);
  const [houseChoice, setHouseChoice] = useState(null);

  const results = [userChoice, houseChoice];

  function handleUserPlay(choice) {
    const random = Math.floor(Math.random() * playerChoices.length);
    setHouseChoice(playerChoices[random].id);
    setUserChoice(choice);
  }

  function handleReset() {
    setUserChoice(null);
    setHouseChoice(null);
  }

  return (
    <section className="primary-container">
      {userChoice === null ? (
        <InputContainer onSetChoice={handleUserPlay} />
      ) : (
        <ResultsContainer
          results={results}
          score={score}
          onSetScore={onSetScore}
          onReset={handleReset} />
      )}
    </section>
  );
};
