import React from 'react';
import Counter from './Counter';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>计数器应用</h1>
        <p>带持久化状态的简单计数器</p>
      </header>
      <main className="app-main">
        <Counter />
      </main>
    </div>
  );
};

export default App;
