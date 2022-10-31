import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodoContainer from './components/TodoContainer';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <TodoContainer />
  </React.StrictMode>
);
