import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

let country="in";
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="home" pageSize={3} country={country} category="general" />}>
            </Route>
            <Route exact path="/business" element={<News key="business" pageSize={3} country={country} category="business" />}>
            </Route>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={3} country={country} category="entertainment" />}>
            </Route>
            <Route exact path="/general" element={<News key="general" pageSize={3} country={country} category="general" />}>
            </Route>
            <Route exact path="/health" element={<News key="health" pageSize={3} country={country} category="health" />}>
            </Route>
            <Route exact path="/science" element={<News key="science" pageSize={3} country={country} category="science" />}>
            </Route>
            <Route exact path="/sports" element={<News key="sports" pageSize={3} country={country} category="sports" />}>
            </Route>
            <Route exact path="/technology" element={<News key="technology" pageSize={3} country={country} category="technology" />}>
            </Route>
          </Routes>
        </Router>
      </>
    )
  }
}
