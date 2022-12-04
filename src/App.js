
import './App.css';

import React, { Component } from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import News from './Components/News';


export default class App extends Component {
  render() {
    return (
      <>
        <Navbar title="mytitle" description="mydec"/>
       <News />
      </>
    )
  }
}




