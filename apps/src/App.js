
import './App.css';
import Navbar from './Componenets/Navbar';
import TextArea from './Componenets/TextArea'
import About from './Componenets/About'
import { useState } from 'react';
import Alert from './Componenets/Alert';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode]= useState('light');
 const[alert,setalert] = useState(null);
 const showalert=(message,type)=>{
   setalert({
    msg:message, type:type
   })
   setTimeout(()=>{
    setalert(null);
   },3000);
   
 }
  const toggleMode=()=>{
    if(mode ==='light'){
    setmode('dark');
    document.body.style.backgroundColor='#042743';
    showalert("Dark mode enabled", "success")
  /*  setTimeout(()=>{
      document.title='Dark Mode Enable';
     },2000);
     setTimeout(()=>{
      document.title='Check me out';
     },1500);*/
  }
    else {setmode('light')
    document.body.style.backgroundColor='white';
    showalert("Light mode enabled", "success")}
  }
  return (
   <>
      <Router>
   <Navbar title="Info"  mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} ></Alert>
<div className="container my-3">
            {/*<Routes>
            <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextArea heading="Enter the Text" mode={mode} showalert={showalert}/>}/>
  */}       <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
          <TextArea heading="Enter the Text" mode={mode} showalert={showalert} />
          </Route>
          </Switch>
 
 {/* <About></About>*/}
</div>
</Router>
</>
   
  );
}

export default App;
