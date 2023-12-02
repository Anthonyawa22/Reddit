import './App.css';
import React from 'react';
import Sidenav from './components/Sidenav/Sidenav.js'
import Main from './components/Main/Main.js'

const App = () => {
  return (
    <div className="App">
      <div className="container">
         <Sidenav />
         <Main />
      </div>
    </div>
  );
};

export default App;

