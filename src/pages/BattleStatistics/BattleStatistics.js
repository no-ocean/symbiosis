import React from 'react';
import BackLink from '../../components/BackLink';
import DescWithEdit from '../../components/DescWithEdit/DescWithEdit';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Profit from '../../components/Profit/Profit';
import BattleStatSection from '../../sections/BattleStatSection';
import MyPortfolio from '../../sections/MyPortfolio';
import StatisticTable from '../../components/StatisticTable';
import PortfolioChart from '../../components/PortfolioChart';

//data withot score. example: ['+19%', 'grow'] or ['-19%', 'less']
const statisticTableAfterData = [
  {
    position: '0000',
    icon: './coins/abt2.png',
    title: 'Oooo',
    share: '10%',
    sum: '$1000.0',
    stats1h: ['+2.87%', 'grow'],
    stats24h: ['-0.17%', 'loss'],
    stats7d: ['0.00%', ''],
    link: 'https://google.com',
    score: ['+19%', 'grow'],
  },
  {
    position: '0000',
    icon: './coins/act2.png',
    title: 'Usdt',
    share: '20%',
    sum: '$200.0',
    stats1h: ['+2.87%', 'grow'],
    stats24h: ['-0.17%', 'loss'],
    stats7d: ['0.00%', ''],
    link: 'https://google.com',
    score: ['-19%', 'loss'],
  },
  {
    position: '0000',
    icon: './coins/abt2.png',
    title: 'Oooo',
    share: '10%',
    sum: '$1000.0',
    stats1h: ['+2.87%', 'grow'],
    stats24h: ['-0.17%', 'loss'],
    stats7d: ['0.00%', ''],
    link: 'https://google.com',
    score: ['+19%', 'grow'],
  },
  {
    position: '0000',
    icon: './coins/act2.png',
    title: 'USDT',
    share: '20%',
    sum: '$200.0',
    stats1h: ['+2.87%', 'grow'],
    stats24h: ['-0.17%', 'loss'],
    stats7d: ['0.00%', ''],
    link: 'https://google.com',
    score: ['+19%', 'grow'],
  },
];

const myPortfolioAfterData = {
  id: '0000',
  title: 'Metacomet',
  coins: [
    {
      title: 'Act',
      icon: './coins/act2.png',
    },
    {
      title: 'Abt',
      icon: './coins/abt.png',
    },
    {
      title: 'Aave',
      icon: './coins/aave.png',
    },
    {
      title: 'Pac',
      icon: './coins/$pac.png',
    },
    {
      title: 'Act',
      icon: './coins/act2.png',
    },
    {
      title: 'Abt',
      icon: './coins/abt.png',
    },
    {
      title: 'Aave',
      icon: './coins/aave.png',
    },
    {
      title: 'Pac',
      icon: './coins/$pac.png',
    },
    {
      title: 'Act',
      icon: './coins/act2.png',
    },
    {
      title: 'Abt',
      icon: './coins/abt.png',
    },
    {
      title: 'Aave',
      icon: './coins/aave.png',
    },
    {
      title: 'Pac',
      icon: './coins/$pac.png',
    },
  ],
  value: '$1000',
  profit: true,
  editable: false,
  score: ['+19%', 'grow'],
};

const BattleStatistics = () => {
  return (
    <>
      <Header />
      <div className='page'>
        <div className='container-fluid'>
          <div className='row rowWithLink'>
            <div className='col-md-12'>
              <BackLink to='/' />
            </div>
          </div>
        </div>

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-5 col-xl-4'>
              <Profit hasNFT={true} />
              <DescWithEdit editable={false} />
            </div>
            <div className='col-lg-7 col-xl-8'>
              <BattleStatSection />
            </div>
          </div>
        </div>

        <MyPortfolio data={myPortfolioAfterData} />
        <StatisticTable data={statisticTableAfterData} />
        <PortfolioChart />
      </div>

      <Footer />
    </>
  );
};

export default BattleStatistics;
