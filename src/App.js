import { useState } from "react";
import "./styles.css";

const emojis = {
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog Face",
  "🐕": "Dog",
  "🦮": "Guide Dog",
  "🐕‍🦺 ": "Service Dog",
  "🐩": "Poodle",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐃": "Water Buffalo",
  "🐄": "Cow",
  "🐏": "Sheep",
  "🐑": "Ewe",
  "🐐": "Goat",
  "🐪 ": "Camel",
  "🐫": "Two-Hump Camel",
  "🐅": "Tiger",
  "🦙": "Llama",
  "🦒": "Giraffe"
};
function App() {
  const [text, setText] = useState(
    "Search/click on emojis to see their meanings"
  );

  const [userName, setUserName] = useState("");
  function inputChanges(event) {
    setUserName(event.target.value);
  }

  const handleClick = (emoji) => {
    setText(emojis[emoji]);
  };

  const emojisKeys = Object.keys(emojis);
  return (
    <div>
      <header className="header">
        <h1 className="header-heading">Emoji Wala</h1>
      </header>
      <main className="main">
        <input
          placeholder="Enter your Name"
          className="main-input"
          type="text"
          onChange={inputChanges}
        />
        <div className="main-text">{userName}</div>
        <div className="emoji-name">{text} </div>
        <div className="emojis">
          {emojisKeys.map((emoji, index) => (
            <span
              key={index}
              onClick={() => handleClick(emoji)}
              className="emoji"
            >
              {emoji}
            </span>
          ))}
        </div>
      </main>
      <footer className="footer">
        <div>
          <div className="footer-heading">About Emoji Wala</div>
          <p className="footer-text">All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
