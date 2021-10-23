import React from 'react';
import './App.css';
import Logo from './logo512.png';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskProvider from './TaskContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <img className="App-logo" src={Logo} alt="Logo" />
          Bill's Amazing Productivity App
          <img className="App-logo-flipped" src={Logo} alt="Logo" />
        </p>
      </header>
      <body className="App-body">
        <TaskProvider>
          <TaskForm />
          <TaskList />
        </TaskProvider>
        </body>
      <footer className="App-footer">Here will be foooter stuff.</footer>
    </div>
  );
}

export default App;
