import React from 'react';
import logo from './logo.svg';
import './App.css';
import Inicio from './Views/Inicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hotel from './Views/Hotel';
import actividad from './Views/Actividad';
import Puntos from './Views/Puntos';
import Restaurante from './Views/Restaurante';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={Inicio} />
          <Route path='/puntos' Component={Puntos} />
          <Route path='/restaurante' Component={Restaurante} />
          <Route path='/hotel' Component={Hotel} />
          <Route path='/actividad' Component={actividad} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
