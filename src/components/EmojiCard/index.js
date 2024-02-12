// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, onClickEmojiFun} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const onClickemoji = () => {
    onClickEmojiFun(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" className="emoji-btn" onClick={onClickemoji}>
        <img src={emojiUrl} alt={emojiName} className="each-emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
