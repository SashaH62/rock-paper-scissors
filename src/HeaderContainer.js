import { ScoreBoard } from "./ScoreBoard";

export const HeaderContainer = ({ score }) => {
  return (
    <section className="header-container">
      <div className="header-text">
        <h2>Rock</h2>
        <h2>Paper</h2>
        <h2>Scissors</h2>
      </div>
      <ScoreBoard score={score} />
    </section>
  );
};
