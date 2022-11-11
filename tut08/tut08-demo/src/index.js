import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StoreProvider from './utils/store'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <StoreProvider>
        <React.StrictMode>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </React.StrictMode>
      </StoreProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
