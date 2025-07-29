import React from 'react';
import TodoList from './TodoList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo Application</h1>
        <p>Manage your tasks efficiently</p>
      </header>
      <main className="app-main">
        <TodoList />
      </main>
    </div>
  );
};

export default App;
