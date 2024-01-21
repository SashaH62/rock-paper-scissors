import { playerChoices } from "./App";
import { ChoiceButton } from "./ChoiceButton";


export const InputContainer = ({ onSetChoice }) => {
  return (
    <div className="player-input-container">
      {playerChoices.map((el, index) => (
        <ChoiceButton
          buttonImg={el.image}
          buttonType={el.id}
          onSetChoice={onSetChoice}
          key={index} />
      ))}
    </div>
  );
};
