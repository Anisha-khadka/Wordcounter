import React, { useState } from "react";
// import { IncreaseFont } from "./Increasefont";
import "../Components/style.css";
export default function Wordcount() {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleUpClicks = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [myStyle, setmyStyle] = useState({
    color: "white",
    backgroundColor: "black",
    border: " white",
  });
  const [btntext, setbtntext] = useState("Enable Light Mode");
  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
        border: " black",
      });
      setbtntext("Enable Dark Mode");
    } else {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
        border: " white",
      });
      setbtntext("Enable Light Mode");
    }
  };
  //   const NameChanger = () => {
  //     let b= prompt("What is the text that should be changed");
  //     for (let i=0;i<text.length;i++){
  //     if(b===text[i){
  //     let a = prompt("What is your text");
  //     setText(a);
  //     }
  // }
  //   };

  return (
    <>
      <div className="main">
        <div className="box">
          <h1>Enter your text here</h1>
          <textarea
            style={myStyle}
            value={text}
            onChange={handleOnChange}
            rows="18"
            cols="88"
          />
          <br />
          <button
            type="button"
            style={myStyle}
            className="btn btn-primary"
            onClick={handleUpClick}
          >
            Change to Uppercase
          </button>
          <button
            type="button"
            style={myStyle}
            className="btn btn-primary"
            onClick={handleUpClicks}
          >
            Change to Lowercase
          </button>
          <button
            type="button"
            style={myStyle}
            className="btn btn-primary"
            onClick={handleClearClick}
          >
            Clear text
          </button>
          <button
            type="button"
            style={myStyle}
            onClick={toggleStyle}
            className="btn btn-primary"
          >
            {btntext}
          </button>
          {/* <button onClick={NameChanger}>Textchanger</button> */}

          <h2>
            {text.split(" ").length} Words and {text.length} characters
          </h2>
          <h2>{0.008 * text.split(" ").length} minutes read</h2>
        </div>
      </div>
    </>
  );
}
