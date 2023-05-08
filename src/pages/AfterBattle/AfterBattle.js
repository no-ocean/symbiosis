import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ListOfPortfolios from '../../sections/ListOfPortfolios';
import MyPortfolio from '../../sections/MyPortfolio';
import TopSection from '../../sections/TopSection';

const AfterBattle = () => {
  return (
    <>
      <Header />
      <div className='page'>
        <TopSection />
        <MyPortfolio />
        <ListOfPortfolios />
      </div>
      <Footer />
    </>
  );
};

export default AfterBattle;
