import React from 'react';
import styles from './profit.module.scss';

const Profit = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img src='./page/one_percent@2x.png' alt='one percent' />
      </div>
      <div className={styles.text}>
        You got <span className={styles.red}>+1%</span> to profit and access to
        battle <span className={styles.red}>statistics!</span>
      </div>
    </div>
  );
};

export default Profit;
