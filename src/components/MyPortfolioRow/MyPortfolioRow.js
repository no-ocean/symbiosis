import React from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { coinsLimiter } from '../../helpers/helpers';
import Score from '../Score';
import SmallGrayBtn from '../SmallGrayBtn';
import styles from './myPortfolioRow.module.scss';

const MyPortfolioRow = ({ data, className }) => {
  const { id, title, coins, value, profit, editable, score } = data;

  return (
    <div className={`${styles.wrapper} ${className && className}`}>
      <div className={`${styles.position} smallTableText`}>{id && id}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.mobileCell}>
        <div className={styles.coins}>{coinsLimiter(styles, coins, 5)}</div>
        <div className={styles.value}>{value}</div>
      </div>
      <div className={styles.profit}>
        {profit && (
          <div className={styles.profitImg}>
            <img src='./page/one_percent@2x.png' alt='profit' />
          </div>
        )}
      </div>
      <div className={styles.button}>
        {editable && (
          <SmallGrayBtn className={styles.editBtn}>
            <FiEdit3 />
            <span>Edit</span>
          </SmallGrayBtn>
        )}
        {score && <Score data={score} />}
      </div>
    </div>
  );
};
export default MyPortfolioRow;
