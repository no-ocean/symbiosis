import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ListOfPortfolios from '../../sections/ListOfPortfolios';
import MyPortfolio from '../../sections/MyPortfolio';
import TopSection from '../../sections/TopSection';

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

const portfoliosData = [
  {
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
  },
  {
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
    ],
    value: '$1000',
    profit: true,
    editable: false,
    score: ['+19%', 'grow'],
  },
  {
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
    ],
    value: '$200',
    profit: false,
    editable: false,
    score: ['-19%', 'loss'],
  },
];

const AfterBattle = () => {
  return (
    <>
      <Header />
      <div className='page'>
        <TopSection completed={false} />
        <MyPortfolio data={myPortfolioAfterData} />
        <ListOfPortfolios data={portfoliosData} />
      </div>
      <Footer />
    </>
  );
};

export default AfterBattle;
