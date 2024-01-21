
export const ChoiceButton = ({ buttonImg, buttonType, onSetChoice }) => {
  return (
    <button
      className={`player-choice-btn ${buttonType}`}
      onClick={() => onSetChoice(buttonType)}
    >
      <div className={`player-choice-btn-inner`}>
        <img src={buttonImg} alt={buttonType} />
      </div>
    </button>
  );
};
