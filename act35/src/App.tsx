import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Inicio from './Views/Inicio';
import Gatos from  './Views/Gatos';

function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar />
        <Routes>
          <Route index Component={Inicio} />
          <Route path='Gatos' Component={Gatos} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
