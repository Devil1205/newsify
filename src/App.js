import './App.css';

import React, { Component } from 'react'
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
export default class App extends Component {
  state = {progress: 10, theme: "light", color: "black"}
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  toggleTheme = ()=>{
    if(this.state.theme==="light")
    {
      this.setState({theme: "dark",color: "white"})
      document.body.style.backgroundColor="#0d041b";
      console.log(this.state.theme);
    }
    else if(this.state.theme==="dark")
    {
      this.setState({theme: "light",color: "black"})
      console.log(this.state.theme);
      document.body.style.backgroundColor="white";
    }
  }
  render() {
    return (
      <>
        <Router>
          <Navbar toggleTheme={this.toggleTheme} theme={this.state.theme} color={this.state.color}/>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News theme={this.state.theme} color={this.state.color} setProgress={this.setProgress} key="home" pageSize={pageSize} country={country} category="general" />}>
            </Route>
            <Route exact path="/business" element={<News theme={this.state.theme} color={this.state.color} setProgress={this.setProgress} key="business" pageSize={pageSize} country={country} category="business" />}>
            </Route>
            <Route exact path="/entertainment" element={<News theme={this.state.theme} color={this.state.color} setProgress={this.setProgress} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />}>
            </Route>
            <Route exact path="/general" element={<News theme={this.state.theme} color={this.state.color} setProgress={this.setProgress} key="general" pageSize={pageSize} country={country} category="general" />}>
            </Route>
            <Route exact path="/health" element={<News theme={this.state.theme} color={this.state.color} setProgress={this.setProgress} key="health" pageSize={pageSize} country={country} category="health" />}>
            </Route>
            <Route exact path="/science" element={<News theme={this.state.theme} color={this.state.color} setProgress={this.setProgress} key="science" pageSize={pageSize} country={country} category="science" />}>
            </Route>
            <Route exact path="/sports" element={<News theme={this.state.theme} color={this.state.color} setProgress={this.setProgress} key="sports" pageSize={pageSize} country={country} category="sports" />}>
            </Route>
            <Route exact path="/technology" element={<News theme={this.state.theme} color={this.state.color} setProgress={this.setProgress} key="technology" pageSize={pageSize} country={country} category="technology" />}>
            </Route>
          </Routes>
        </Router>
      </>
    )
  }
}
