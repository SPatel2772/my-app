import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    
    function handleUpClick() {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    
    function handleLoClick() {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    
    function handleCopyText() {
        let text = document.getElementById("textForm");
        navigator.clipboard.writeText(text.value);
        // alert("Text Copied!");
        props.showAlert("Youe text copied!", "success");
    }

    function handleExtraSpace() {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space are removed!", "success");
    }

    function handleClearClick() {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared", "success");
    }

    function handleOnChange(event) {
        setText(event.target.value);
    }
    
  
    return (
        <>
        <div className="container" style={{color : props.mode === "light" ? "black" : "white"}}>
            <div className="mb-3">
                <h1 className="my-4">{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="textForm" rows="8" style={{backgroundColor : props.mode === "light" ? "white" : "gray" , color : props.mode === "light" ? "black" : "white" }}></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-4" style={{color : props.mode === "light" ? "black" : "white"}}>
            <h2> Your text summary </h2>
            <p>{text.split(" ").length} Characters and {text.length} Letter.</p>
            <p>{0.008 * text.split(" ").length} Minutes to read.</p>
        </div>
        </>
  )
}


