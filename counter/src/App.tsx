import React from 'react';
import Counter from './Counter';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Counter Application</h1>
        <p>A simple counter with persistent state</p>
      </header>
      <main className="app-main">
        <Counter />
      </main>
    </div>
  );
};

export default App;
