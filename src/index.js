import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import BattleLanding from './pages/BattleLanding';
import Portfolio from './pages/Portfolio';
import BeforeBattle from './pages/BeforeBattle';
import AfterBattle from './pages/AfterBattle';
import BattleStatistics from './pages/BattleStatistics';
import BattleStatisticsModalWallet from './pages/BattleStatisticsModalWallet';
import BattleStatisticsModalWallet2 from './pages/BattleStatisticsModalWallet2';
import BattleLandingThanks from './pages/BattleLandingThanks';
import BattleLandingPortfolioCreated from './pages/BattleLandingPortfolioCreated';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path='/start' element={<BeforeBattle />} />
        <Route exact path='/after' element={<AfterBattle />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/battle-statistics' element={<BattleStatistics />} />
        <Route
          exact
          path='/battle-statistics-modal-1'
          element={<BattleStatisticsModalWallet />}
        />
        <Route
          exact
          path='/battle-statistics-modal-2'
          element={<BattleStatisticsModalWallet2 />}
        />

        <Route
          exact
          path='/battle-statistics-modal-thanks'
          element={<BattleLandingThanks />}
        />

        <Route
          exact
          path='/battle-statistics-modal-portfolio-created'
          element={<BattleLandingPortfolioCreated />}
        />
        <Route exact path='/' element={<BattleLanding />} />
        {/* <Route path='*' element={<PageNotFound />} /> */}
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
