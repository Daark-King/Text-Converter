import React, { useState } from "react";

import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase","success")
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase","success")
  };
  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
    <div>
      <h1 style={{color: props.mode==='light'?'#041227':'white'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          style={{backgroundColor: props.mode==='light'?'white':props.mode,
                    color: props.mode==='light'?'black':'white'}}
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'#041227':'white'}}>
     <h2>Your text summary</h2>
     <p>{text===""?text.split(" ").length-1:text.split(" ").length} Words and {text.length} Characters</p>
     <p>{text===""?0:0.008 * text.split(" ").length} Minutes read</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter something in above text box to preview it here"}</p>
    </div>
    </>
  );
}

TextForm.prototypes = {
  heading: PropTypes.string.isRequired,
};
