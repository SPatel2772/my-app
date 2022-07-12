import React, { useState } from 'react';
import './App.css';
import Alert from './conponents/Alert';
import About from './conponents/About';
import Navbar from './conponents/Navbar';
import TextForm from './conponents/TextForm';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable dark mode");

  const [alert, setAtert] = useState(null);

  const showAlert = (message, type) => {
    setAtert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAtert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Disable dark mode");
      document.body.style.backgroundColor = "#0d1849";
      showAlert("Dark mode is enabled", "success");
    }
    else {
      setMode("light");
      setModeText("Enable dark mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} modeText={modeText} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about"> 
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
