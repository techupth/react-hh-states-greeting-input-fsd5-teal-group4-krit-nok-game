import "./App.css";
import { useState } from "react";

function App() {
  const [greetingText, setGreetingText] = useState("Greeting Message");
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <div className="greeting-container">{greetingText}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input 
          id="greeting-message" 
          type="text" 
          onChange={(event) => {
            setInputText(event.target.value);
          }}
          value={inputText} />
      </div>

      <div className="buttons">
        <button 
          onClick={() => {
            setGreetingText(inputText);
          }}
        >Update text</button>
      </div>
    </div>
  );
}

export default App;
