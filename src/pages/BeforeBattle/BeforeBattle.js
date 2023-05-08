import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import StatisticTable from '../../components/StatisticTable';
import BattleImage from '../../sections/BattleImage/BattleImage';
import MyPortfolio from '../../sections/MyPortfolio';
import TopSection from '../../sections/TopSection';

const BeforeBattle = () => {
  return (
    <>
      <Header />
      <div className='page'>
        <TopSection />
        <MyPortfolio />
        <StatisticTable />
        <BattleImage />
      </div>
      <Footer />
    </>
  );
};

export default BeforeBattle;
