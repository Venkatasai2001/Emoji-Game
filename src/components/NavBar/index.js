// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isDisplay} = props

  if (isDisplay === 'false') {
    return (
      <div className="navbar">
        <div className="navabar-img-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="logo"
            alt="emoji logo"
          />
          <h1 className="paragraph-Emoji-game">Emoji Game</h1>
        </div>
        <div className="navabar-img-section">
          <p testid="Score" className="score-paragraph">
            Score: {score}
          </p>
          <p testid="Total Score">Top Score: {topScore}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="navbar">
      <div className="navabar-img-section">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="logo"
          alt="emoji logo"
        />
        <h1 className="paragraph-Emoji-game">Emoji Game</h1>
      </div>
    </div>
  )
}

export default NavBar
