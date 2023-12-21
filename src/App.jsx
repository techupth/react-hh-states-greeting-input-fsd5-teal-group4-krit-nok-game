import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const [inputGreetingMessage, setInputValue] = useState("");

  const handleSubmitMessage = (event) => {
    event.preventDefault();
    setGreetingMessage(inputGreetingMessage);
    setInputValue("");
  };

  return (
    <>
      <div className="App">
        <div className="greeting-container">{greetingMessage}</div>
        <div className="input-container">
          <label htmlFor="greeting-message">New Greeting Message</label>
          <input
            id="greeting-message"
            type="text"
            value={inputGreetingMessage}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
        </div>

        <div className="buttons">
          <button onClick={handleSubmitMessage} type="submit">
            Update text
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
