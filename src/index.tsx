import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from './App';
import Sobre from './components/Sobre/Sobre';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/sobre' element={<Sobre titulo='Um titulo legal' />} />
      </Routes>
     </BrowserRouter>
  </React.StrictMode>
);


