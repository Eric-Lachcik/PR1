import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Inicio from './Views/Inicio';
import Breeds  from './Views/Razas';
import RazaDet from './Views/Raza';

function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Inicio/>} />
          <Route path='Raza/id' element={<RazaDet id={""}/> }/>
          <Route path='Razas' element={<Breeds/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
