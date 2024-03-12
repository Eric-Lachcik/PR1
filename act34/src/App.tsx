import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Inicio from './Views/Inicio';
import fondo from './Images/Iniciofondo.png'
import Gato from './Views/Espe';
import Lista  from './Views/Lista';

function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar />
        <Routes>
          <Route index Component={Inicio} />
          <Route path='espe' Component={Gato} />
          <Route path='lista' Component={Lista} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
