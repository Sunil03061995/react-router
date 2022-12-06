
import './App.css';

import React, { Component } from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          {/* <News pageSize={9} country="in" category="health"/> */}
        
          { /* Note:
            1. Switch need to replace with the Routes
            2. we need to add element key to the Route
            3. we have to use "exact" and "key" keywords to route to diffirent component. 
            4. if we are not using the above keywords we won't get any errors but component is not going to be route */}

          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={9} country="in" category="general"/>}></Route>
            <Route exact path="/business" element={<News  key="business" pageSize={9} country="in" category="business"/>}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} country="in" category="entertainment"/>}></Route>
            <Route exact path="/general" element={<News key="general" pageSize={9} country="in" category="general"/>}></Route>
            <Route exact path="/health" element={<News key="health" pageSize={9} country="in" category="health"/>}></Route>
            <Route exact path="/science" element={<News key="science" pageSize={9} country="in" category="science"/>}></Route>
            <Route exact path="/sports" element={<News key="sports" pageSize={9} country="in" category="sports"/>}></Route>
            <Route exact path="/technology" element={<News key="technology" pageSize={9} country="in" category="technology"/>}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}




