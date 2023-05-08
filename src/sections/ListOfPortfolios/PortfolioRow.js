import React from 'react';
import Score from '../../components/Score';
import { coinsLimiter } from '../../helpers/helpers';
import styles from './listOfPortfolios.module.scss';

const PortfolioRow = ({ data, className }) => {
  const { id, title, coins, value, profit, score } = data;

  return (
    <div className={`${styles.row} ${className && className}`}>
      <div className={`${styles.position} smallTableText`}>{id && id}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.mobileRowBreaker}></div>
      <div className={styles.coins}>{coinsLimiter(styles, coins, 5)}</div>
      <div className={styles.value}>{value}</div>
      <div className={styles.profit}>
        {profit && (
          <div className={styles.profitImg}>
            <img src='./page/one_percent@2x.png' alt='profit' />
          </div>
        )}
      </div>
      <div className={styles.button}>{score && <Score data={score} />}</div>
    </div>
  );
};
export default PortfolioRow;
