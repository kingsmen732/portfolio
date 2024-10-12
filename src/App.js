import React from 'react';
import MainContainer from "./components/MainContainer";
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <MainContainer />
    </div>
  );
}

export default App;
