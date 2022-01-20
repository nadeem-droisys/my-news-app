import './App.css';
import React, { Component } from 'react'
import Navbar from './Navbar';
import News from './News';
;


export class App extends Component {


  render() {
    return (
      <div>
        <Navbar/>
        <News  key="general" pageSize={10} country="us" category="general"/>
      </div>
    )
}
}

export default App;