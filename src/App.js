// src/App.js
import React from 'react';
import Navbar from './Navbar';
import './App.css';
import  Screen1  from './Screen1Com/Screen1';
import  Screen2  from './Screen1Com/Screen2';

function App() {
  return (
    <div className="App">
      <div style={{backgroundColor:'#d3d3d3'}}>
      <Navbar />
      <br/>
      <Screen1/>
      <Screen2/>
      {/* <Screen3/> */}
      
     </div>
     
    </div>
  );
}

export default App;
