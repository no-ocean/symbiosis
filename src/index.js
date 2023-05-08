import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import BattleLanding from './pages/BattleLanding';
import Portfolio from './pages/Portfolio';
import BeforeBattle from './pages/BeforeBattle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/start' element={<BeforeBattle />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/' element={<BattleLanding />} />
        {/* <Route path='*' element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
