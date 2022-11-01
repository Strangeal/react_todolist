import React from 'react';
import ReactDOM from 'react-dom/client';
// import TodoContainer from './classBased/components/TodoContainer';
import { BrowserRouter } from 'react-router-dom';
import TodoContainer from './functionBased/components/TodoContainer';
// import './classBased/App.css';
import './functionBased/App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
);
