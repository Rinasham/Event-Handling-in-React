import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);

  function mouseOver() {
    setMouseOver(true);
  }

  function mouseOut() {
    setMouseOver(false);
  }

  function handleClick(e) {
    e.preventDefault();
    setInputVal(text);
  }

  function handleInput(e) {
    setText(e.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {inputVal}</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={handleInput}
          value={text}
        />
        <button
          type="submit"
          onClick={handleClick}
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
