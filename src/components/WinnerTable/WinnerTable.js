import React from 'react';
import styles from './winnerTable.module.scss';

const WinnerTable = ({ data }) => {
  const filteredData = data.filter((item) => item.winPosition !== undefined);
  return (
    <div className={styles.winners}>
      <h4>Winners</h4>
      <div className={styles.wrapper}>
        {filteredData
          .sort((a, b) => a.winPosition - b.winPosition)
          .map((item) => {
            const { title, winPosition, value, score } = item;
            return (
              <div key={winPosition + title} className={styles.row}>
                <div className={styles.position}>
                  {winPosition === 1 ? (
                    <img src='./winners/1@2x.png' alt='1' />
                  ) : winPosition === 2 ? (
                    <img src='./winners/2@2x.png' alt='2' />
                  ) : (
                    <img src='./winners/3@2x.png' alt='3' />
                  )}
                </div>
                <div className={styles.title}>{title}</div>
                <div className={styles.value}>{value}</div>
                <div
                  className={`
                  ${styles.score} 
                  ${score[1] === 'grow' && styles.scoreUP}
                  ${score[1] === 'loss' && styles.scoreDOWN}
                `}
                >
                  {score[0]}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WinnerTable;
