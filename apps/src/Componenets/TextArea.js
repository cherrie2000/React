import React, {useState} from 'react'

export default function TextArea(props) {
    const handleUpclick=()=>{
        let newText = text.toUpperCase();
     setText(newText);
     props.showalert("Text is changed to Uppercase","success");
    }
    const handleLoclick=()=>{
        let newText = text.toLowerCase();
     setText(newText);
     props.showalert("Text is changed to Lowercase","success");
    }
    const hanldeOnChange=(event)=>{
     setText(event.target.value)
    }
 const[text,setText] = useState('Enter Text here2');
    return (
        <>
    <div className='container' style={{color:props.mode === 'dark'?'white':'black'}} >
       <h1>{props.heading}</h1>
<div className="mb-3">
   
  <label htmlFor="mybox" className="form-label"></label>
  <textarea className="form-control" id="mybox" rows="8" value={text} onChange={hanldeOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpclick}> Convert To UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoclick}> Convert To LowerCase</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Avg minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

