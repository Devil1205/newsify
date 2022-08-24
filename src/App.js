import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

let country = "in";
let pageSize = 6;
const App = () => {
  const [progress, setProgress] = useState(10);
  const [theme, setTheme] = useState("light");
  const [color, setColor] = useState("black");
  // setProgress = (progress)=>{
  //   setState({progress: progress})
  // }
  const toggleTheme = ()=>{
    if(theme==="light")
    {
      setTheme("dark");
      setColor("White");
      document.body.style.backgroundColor="#0d041b";
      console.log(theme);
    }
    else if(theme==="dark")
    {
      setTheme("light");
      setColor("black");
      console.log(theme);
      document.body.style.backgroundColor="white";
    }
  }
    return (
      <>
        <Router>
          <Navbar toggleTheme={toggleTheme} theme={theme} color={color}/>
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News theme={theme} color={color} setProgress={setProgress} key="home" pageSize={pageSize} country={country} category="general" />}>
            </Route>
            <Route exact path="/business" element={<News theme={theme} color={color} setProgress={setProgress} key="business" pageSize={pageSize} country={country} category="business" />}>
            </Route>
            <Route exact path="/entertainment" element={<News theme={theme} color={color} setProgress={setProgress} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />}>
            </Route>
            <Route exact path="/general" element={<News theme={theme} color={color} setProgress={setProgress} key="general" pageSize={pageSize} country={country} category="general" />}>
            </Route>
            <Route exact path="/health" element={<News theme={theme} color={color} setProgress={setProgress} key="health" pageSize={pageSize} country={country} category="health" />}>
            </Route>
            <Route exact path="/science" element={<News theme={theme} color={color} setProgress={setProgress} key="science" pageSize={pageSize} country={country} category="science" />}>
            </Route>
            <Route exact path="/sports" element={<News theme={theme} color={color} setProgress={setProgress} key="sports" pageSize={pageSize} country={country} category="sports" />}>
            </Route>
            <Route exact path="/technology" element={<News theme={theme} color={color} setProgress={setProgress} key="technology" pageSize={pageSize} country={country} category="technology" />}>
            </Route>
          </Routes>
        </Router>
      </>
    )
  }
export default App;