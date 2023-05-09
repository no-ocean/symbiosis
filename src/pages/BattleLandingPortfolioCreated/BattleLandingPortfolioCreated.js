import React from 'react';
import Header from '../../components/Header/Header';
import TopSection from '../../sections/TopSection';
import AboutSection from '../../sections/AboutSection/AboutSection';
import BattleStages from '../../sections/BattleStages/BattleStages';
import BeOnStep from '../../sections/BeOnStep/BeOnStep';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import PortfolioCreated from '../../components/Modal/content/PortfolioCreated';

const BattleLandingPortfolioCreated = () => {
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
      <Modal>
        <PortfolioCreated />
      </Modal>
    </>
  );
};

export default BattleLandingPortfolioCreated;
