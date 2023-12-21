import { useState } from "react";

function GreetingMessageEx1() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");

  const handleLanguageClick = (event) => {
    setGreetingMessage(event.target.value);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        <button onClick={handleLanguageClick} value={"สวัสดี!"}>
          สวัสดี!
        </button>
        <button onClick={handleLanguageClick} value={"Hi!"}>
          Hi!
        </button>
        <button onClick={handleLanguageClick} value={"你好!"}>
          你好!
        </button>
      </div>
    </div>
  );
}

export default GreetingMessageEx1;
