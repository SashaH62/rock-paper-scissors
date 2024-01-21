import './App.css';
import  PaperImg from './assets/images/icon-paper.svg';
import  RockImg from './assets/images/icon-rock.svg';
import  ScissorsImg from './assets/images/icon-scissors.svg';

const playerChoices = [
  {
    choice: 'paper',
    gradient: 'linear-gradient(0deg, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%)',
    image: PaperImg,
  },
  {
    choice: 'scissors',
    gradient: 'linear-gradient(0deg, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%)',
    image: ScissorsImg,
  },
  {
    choice: 'rock',
    gradient: 'linear-gradient(0deg, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%)',
    image: RockImg,
  },
]

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <GameContainer />
    </div>
  );
}

const HeaderContainer = () => {
  return(
    <section className='header-container'>
      <div className='header-text'>
        <h2>Rock</h2>
        <h2>Paper</h2>
        <h2>Scissors</h2>
      </div>
      <ScoreBoard />
    </section>
  )
}

const ScoreBoard = () => {
  return (
    <div className='score-board'>
      <h3>Score</h3>
      <p className="score">12</p>
    </div>
  )
}

const GameContainer = () => {
  return(
    <section>
      <PlayerInputContainer />
    </section>
  )
}

const PlayerInputContainer= () => {
  return(
    <div className='player-input-container'>
      {playerChoices.map((el, index) => <PlayerChoiceButton buttonImg={el.image} buttonType={el.choice} key={index}/>)}
    </div>
  )
}

const PlayerChoiceButton = ( { buttonImg, buttonType } ) => {
  return (
    <button className={`player-choice-btn`}>
      <div className={`player-choice-btn-inner ${buttonType}`}>
        <img src={buttonImg} alt={buttonType}/>
      </div>
    </button>
  )
}

export default App;
