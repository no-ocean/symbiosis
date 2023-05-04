import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import BattleLanding from './pages/BattleLanding';
import Portfolio from './pages/Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/' element={<BattleLanding />} />
        {/* <Route path='*' element={<PageNotFound />} /> */}
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
