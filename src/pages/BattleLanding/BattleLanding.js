import React from 'react';
import Header from '../../components/Header/Header';
import TopSection from '../../sections/TopSection';
import AboutSection from '../../sections/AboutSection/AboutSection';
import BattleStages from '../../sections/BattleStages/BattleStages';
import BeOnStep from '../../sections/BeOnStep/BeOnStep';
import Footer from '../../components/Footer/Footer';

const BattleLanding = () => {
  return (
    <>
      <Header />

      <div className='page'>
        <TopSection completed={false} />

        <AboutSection />

        <BattleStages />

        <BeOnStep />
      </div>

      <Footer />
    </>
  );
};

export default BattleLanding;
