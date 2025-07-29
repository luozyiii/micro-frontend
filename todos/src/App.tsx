import React from 'react';
import TodoList from './TodoList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>待办事项应用</h1>
        <p>高效管理您的任务</p>
      </header>
      <main className="app-main">
        <TodoList />
      </main>
    </div>
  );
};

export default App;
