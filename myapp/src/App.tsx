import React from 'react';
import logo from './logo.svg';
import ToDoList from './components/todolist';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoList />
      </header>
    </div>
  );
}

export default App;
