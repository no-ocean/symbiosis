import React from 'react';
import Header from '../../components/Header/Header';
import TopSection from '../../sections/TopSection';
import AboutSection from '../../sections/AboutSection/AboutSection';
import BattleStages from '../../sections/BattleStages/BattleStages';
import BeOnStep from '../../sections/BeOnStep/BeOnStep';

const BattleLanding = () => {
  return (
    <>
      <Header />

      <TopSection />

      <AboutSection />

      <BattleStages />

      <BeOnStep />
    </>
  );
};

export default BattleLanding;
