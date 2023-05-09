import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import StatisticTable from '../../components/StatisticTable';
import BattleImage from '../../sections/BattleImage/BattleImage';
import MyPortfolio from '../../sections/MyPortfolio';
import TopSection from '../../sections/TopSection';

//data withot score. example: ['+19%', 'grow'] or ['-19%', 'loss']
const statisticTableBeforeData = [
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
  },
];

const myPortfolioBeforeData = {
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
  ],
  value: '$1000',
  profit: true,
  editable: true,
};

const BeforeBattle = () => {
  return (
    <>
      <Header />
      <div className='page'>
        <TopSection completed={false} />
        <MyPortfolio data={myPortfolioBeforeData} />
        <StatisticTable data={statisticTableBeforeData} />
        <BattleImage />
      </div>
      <Footer />
    </>
  );
};

export default BeforeBattle;
