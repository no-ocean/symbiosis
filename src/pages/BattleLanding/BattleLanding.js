import React from 'react';
import Header from '../../components/Header/Header';
import TopSection from '../../sections/TopSection';
import AboutSection from '../../sections/AboutSection/AboutSection';
import BattleStages from '../../sections/BattleStages/BattleStages';

const BattleLanding = () => {
  return (
    <div>
      <Header />

      <TopSection />

      <AboutSection />

      <BattleStages />
    </div>
  );
};

export default BattleLanding;
