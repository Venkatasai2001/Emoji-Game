/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import './index.css'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import NavBar from '../NavBar'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  state = {
    emojisList,
    result: '',
    previousSelected: [],
    score: 0,
    topScore: 0,
  }

  youWin = () => {
    this.setState({result: true})
  }

  reset = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({topScore: score})
    }
    this.setState({emojisList, result: '', previousSelected: [], score: 0})
  }

  shuffleEmojis = () => {
    const {emojisList} = this.state
    return emojisList.sort(() => Math.random() - 0.5)
  }

  isWinOrLose = usesrselectedObj => {
    const {previousSelected, score} = this.state

    const res = previousSelected.includes(usesrselectedObj)

    if (!res) {
      this.setState(prevState => ({
        previousSelected: [...prevState.previousSelected, usesrselectedObj],
        score: prevState.score + 1,
      }))

      if (score >= 12) {
        this.youWin()
      }
    } else if (res) {
      this.setState({result: false})
    }
  }

  onClickEmojiFun = id => {
    const {emojisList, result} = this.state
    const usesrselected = emojisList.filter(each => each.id === id)

    usesrselected.map(each => {
      this.isWinOrLose(each.id)
    })
    const getshuffeledResList = this.shuffleEmojis()
    this.setState({emojisList: getshuffeledResList})
  }

  render() {
    const {emojisList, result, score, topScore} = this.state
    console.log(result)

    if (result || score === 12) {
      return (
        <div className="bg-container">
          <NavBar score={score} topScore={topScore} isDisplay="true" />
          <div className="emojisContainer">
            <WinOrLoseCard
              result={result}
              score={score}
              topScore={topScore}
              reset={this.reset}
            />
          </div>
        </div>
      )
    } else if (result === false) {
      return (
        <div className="bg-container">
          <NavBar score={score} topScore={topScore} isDisplay="true" />
          <div className="emojisContainer">
            <WinOrLoseCard
              result={result}
              score={score}
              topScore={topScore}
              reset={this.reset}
            />
          </div>
        </div>
      )
    }
    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} isDisplay="false" />
        <ul className="emojisContainer">
          {emojisList.map(eachEmoji => (
            <EmojiCard
              eachEmoji={eachEmoji}
              key={eachEmoji.id}
              onClickEmojiFun={this.onClickEmojiFun}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
