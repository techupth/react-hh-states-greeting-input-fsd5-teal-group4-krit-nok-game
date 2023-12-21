import { useState } from "react";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("");
  const [display, setDisplay] = useState("Greeting Message");

  return (
    <div className="App">
      <div className="greeting-container">{display}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
        />
      </div>

      <div className="buttons" onClick={() => setDisplay(msg)}>
        <button>Update text</button>
      </div>
    </div>
  );
}

export default App;
