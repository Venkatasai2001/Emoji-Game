// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {result, score, topScore, reset} = props

  const playAgainSetting = () => {
    reset()
  }

  let paragraphTextContent
  let wonOrLoose

  if (result || score >= 12) {
    console.log(score)
    paragraphTextContent = 'Best Score'
    wonOrLoose = 'Won'
  } else {
    paragraphTextContent = 'Score'
    wonOrLoose = 'Lose'
  }
  const imgUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="bg-card">
      <div>
        <h1 className="you-won-title">You {wonOrLoose}</h1>
        <p className="Score-display">{paragraphTextContent}</p>
        <p className="score-board">{score}/12</p>
        <button
          type="button"
          className="Play-Again-btn"
          onClick={playAgainSetting}
          testid="Play Again"
        >
          Play Again
        </button>
      </div>
      <div>
        <img src={imgUrl} className="won-image" alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
