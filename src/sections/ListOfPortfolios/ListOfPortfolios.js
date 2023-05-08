import React from 'react';
import Button from '../../components/Button/Button';
import styles from './listOfPortfolios.module.scss';
import PortfolioRow from './PortfolioRow';

const data = [
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

const ListOfPortfolios = () => {
  return (
    <div className={styles.wrapper}>
      <div className='container-fluid'>
        <h3>List of Portfolios</h3>
        <div className={styles.table}>
          {data.map((item, index) => {
            return <PortfolioRow key={index + item.title} data={item} />;
          })}
        </div>
        <div className={styles.pagination}>
          <Button label='Show next 20' view='largeBorderRed' />
          <Button label='Show all' view='largeBorderRed' />
        </div>
      </div>
    </div>
  );
};

export default ListOfPortfolios;
