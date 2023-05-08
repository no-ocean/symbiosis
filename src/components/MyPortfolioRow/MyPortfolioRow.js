import React from 'react';
import { FiEdit3 } from 'react-icons/fi';
import SmallGrayBtn from '../SmallGrayBtn';
import styles from './myPortfolioRow.module.scss';

const MyPortfolioRow = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.position} smallTableText`}></div>
      <div className={styles.title}>Metacomet</div>
      <div className={styles.mobileCell}>
        <div className={styles.coins}>
          <div className={styles.coin}>
            <img src='./coins/act2.png' alt='' />
          </div>
          <div className={styles.coin}>
            <img src='./coins/abt.png' alt='' />
          </div>
          <div className={styles.coin}>
            <img src='./coins/aave.png' alt='' />
          </div>
          <div className={styles.coin}>
            <img src='./coins/$pac.png' alt='' />
          </div>
        </div>
        <div className={styles.value}>$1000</div>
      </div>
      <div className={styles.profit}>
        <div className={styles.profitImg}>
          <img src='./page/one_percent@2x.png' alt='profit' />
        </div>
      </div>
      <div className={styles.button}>
        <SmallGrayBtn className={styles.editBtn}>
          <FiEdit3 />
          <span>Edit</span>
        </SmallGrayBtn>
      </div>
    </div>
  );
};
export default MyPortfolioRow;
