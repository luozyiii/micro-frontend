import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import CounterPage from './pages/CounterPage';
import TodosPage from './pages/TodosPage';
import NotFound from './pages/NotFound';
import './App.css';

const App: React.FC = () => {
  // GitHub Pages 部署时需要设置 basename
  const basename = process.env.NODE_ENV === 'production' ? '/micro-frontend' : '';

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="todos" element={<TodosPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
