import { useEffect } from "react";
import { playerChoices } from "./App";
import { GenericButton } from "./GenericButton";
import { ChoiceButton } from "./ChoiceButton";


export const ResultsContainer = ({ results, score, onSetScore, onReset }) => {
  function calculateResult(user, house) {
    return user === house
      ? undefined
      : user === "paper" && house === "scissors"
        ? false
        : user === "rock" && house === "paper"
          ? false
          : user === "scissors" && house === "rock"
            ? false
            : true;
  }

  let playerResult = playerChoices.filter((el) => el.id === results[0]);
  let houseResult = playerChoices.filter((el) => el.id === results[1]);

  playerResult = playerResult[0];
  houseResult = houseResult[0];

  const playOutcome = calculateResult(playerResult.id, houseResult.id);

  const currScore = score;

  useEffect(() => {
    if (playOutcome === undefined) {
      return;
    } else if (playOutcome) {
      onSetScore(currScore + 1);
    } else {
      onSetScore(currScore - 1);
    }
  }, []);

  return (
    <div className="results-container">
      <div className="result col-md-3">
        <h4>You Picked</h4>
        <ChoiceButton
          buttonImg={playerResult.image}
          buttonType={playerResult.id} />
      </div>
      <div className="result-input col-md-3">
        <p className="result-heading">
          {playOutcome
            ? "You win"
            : playOutcome === undefined
              ? "Draw"
              : "You lose"}
        </p>
        <GenericButton type={"reset"} onClickHandler={onReset}>
          Play again
        </GenericButton>
      </div>
      <div className="result col-md-3">
        <h4>The House Picked</h4>
        <ChoiceButton
          buttonImg={houseResult.image}
          buttonType={houseResult.id} />
      </div>
    </div>
  );
};
