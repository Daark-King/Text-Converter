import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React ,{useState} from "react";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode,setMode]= useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert =(message,type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null)
        }, 2000);
  }

   const toggleGreen=()=>{
      setMode('green')
      document.body.style.backgroundColor='green';
     showAlert("Green Mode has been enabled","success")
   }
   const toggleDark=()=>{
      setMode('#041227')
      document.body.style.backgroundColor='#041227';
     showAlert("Dark Mode has been enabled","success")
   }
   const toggleRed=()=>{
      setMode('red')
      document.body.style.backgroundColor='red';
     showAlert("Red Mode has been enabled","success")
   }
   const toggleLight=()=>{
      setMode('light')
      document.body.style.backgroundColor='white';
     showAlert("Light Mode has been enabled","success")
   }
  return (
    <>
     <Router>
      <Navbar title='Text Converter' mode={mode} toggleDark={toggleDark}
           toggleGreen={toggleGreen} toggleLight={toggleLight} toggleRed={toggleRed}/>
      <Alert  alert={alert}/>
      <div className="container my-4">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
       
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text here to analyse" mode={mode} toggleDark={toggleDark}
            toggleGreen={toggleGreen} toggleLight={toggleLight} togleRed={toggleRed}/>
          </Route>
        </Switch>
      
      
      </div>
      </Router>
    </>
  );
}

export default App;
