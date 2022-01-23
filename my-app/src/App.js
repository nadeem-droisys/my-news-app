import './App.css';
import React, { Component } from 'react'
import Navbar from './Navbar';
import News from './News';


export class App extends Component {


  render() {
    return (
      <div>
  
        <Navbar/> 
          <News key="sports"  country="us" category="sports"/>
          {/* <Route path="/business" element={<News key="business" pageSize={5} country="in" category="business"/>} /> 
          <Route path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment"/>} />  
          <Route path="/health" element={<News key="health" pageSize={5} country="in" category="health"/>} /> 
          <Route path="/science" element={<News key="science" pageSize={5} country="in" category="science"/>} /> 
          <Route path="/sports" element={<News key="sports" pageSize={5} country="in" category="sports"/>} /> 
          <Route path="/technology" element={<News key="technology" pageSize={5} country="in" category="technology"/>} />  */}
      </div>
    )
}
}

export default App;