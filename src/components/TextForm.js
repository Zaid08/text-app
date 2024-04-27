import React, { useState } from 'react'



export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log('Upper Case was clicked')
        // setText('you have clicked on handleUpClick click');
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log('on change');
        setText(event.target.value)
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleCapClick = () => {

        let words = text.split(" ").map(words => words.charAt(0).toUpperCase() + words.slice(1)).join(" ");
        setText(words);
    };


    const handleClearClick = () => {
        let newText = '';
        setText(newText);

    };

    

    // const [text, setText] = useState('Enter the text here');
    const [text, setText] = useState('');

    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCapClick}>Capatilize</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p><b>{text.split(" ").length}</b> words,  <b>{text.length}</b> characters</p>
                <p><b>{0.008 * text.split(" ").length}</b> Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'enter something to preview it here'}</p>
            </div>
        </>
    )
}
