import React from 'react';
import styles from './statisticTable.module.scss';
import StatisticTableRow from './StatisticTableRow';

const data = [
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
    score: ['+19%', 'loss'],
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
  },
];

const StatisticTable = () => {
  return (
    <div className='container-fluid'>
      <div className={styles.wrapper}>
        <div className={`${styles.row} ${styles.header1} smallTableText`}>
          <span className={styles.mobHeadPosition}>&nbsp;</span>
          <span className={styles.mobHeadImg}>Coin</span>
          <span className={styles.mobHeadTitle}>&nbsp;</span>
          <span className={styles.mobHeadShare}>Share</span>
          <span className={styles.mobHeadSum}>Sum</span>
          <span className={styles.mobHeadEmpty}>Coingecko Stats</span>
        </div>
        <div className={`${styles.row} ${styles.header2} smallTableText`}>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <div className={styles.statsRow}>
            <span>1h</span>
            <span>24h</span>
            <span>7d</span>
          </div>
        </div>

        {data.map((item, index) => {
          return <StatisticTableRow key={index + item.title} data={item} />;
        })}
      </div>
    </div>
  );
};

export default StatisticTable;
