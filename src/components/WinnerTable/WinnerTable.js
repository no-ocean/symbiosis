import React from 'react';
import styles from './winnerTable.module.scss';

const winnerData = [
  {
    position: 3,
    title: 'Metacomet',
    value: '0000',
    score: '19.00',
  },
  {
    position: 1,
    title: 'Metacomet',
    value: '0000',
    score: '19.00',
  },
  {
    position: 2,
    title: 'Metacomet',
    value: '0000',
    score: '100.00',
  },
];

const WinnerTable = () => {
  return (
    <div className={styles.winners}>
      <h4>Winners</h4>
      <div className={styles.wrapper}>
        {winnerData
          .sort((a, b) => a.position - b.position)
          .map((item) => {
            return (
              <div key={item.position + item.title} className={styles.row}>
                <div className={styles.position}>
                  {item.position === 1 ? (
                    <img src='/winners/1@2x.png' alt='1' />
                  ) : item.position === 2 ? (
                    <img src='/winners/2@2x.png' alt='2' />
                  ) : (
                    <img src='/winners/3@2x.png' alt='3' />
                  )}
                </div>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.value}>${item.value}</div>
                <div className={styles.score}>+{item.score}%</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WinnerTable;
