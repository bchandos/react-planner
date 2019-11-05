import React from 'react';
import './App.css';
import TaskItems from './TaskItems.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Bill's Amazing Productivity App</p>
      </header>
      <body className="App-body">
        <h2>Here be content:</h2>
        <TaskItems />
        </body>
      <footer className="App-footer">Here will be foooter stuff.</footer>
    </div>
  );
}

export default App;
