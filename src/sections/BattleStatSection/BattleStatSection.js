import React from 'react';
import { FiArrowRight, FiTrendingDown, FiTrendingUp } from 'react-icons/fi';
import styles from './battleStatSection.module.scss';

const BattleStatSection = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Batte Statistics</h3>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.statsItem}>
            <h4 className={`${styles.statsTitle} ${styles.grow}`}>
              <FiTrendingUp />
              <span>+17.5%</span>
            </h4>
            <p className={styles.description}>Profit max</p>
          </div>
          <div className={styles.statsItem}>
            <h4 className={styles.statsTitle}>
              <FiArrowRight />
              <span>+7.5%</span>
            </h4>
            <p className={styles.description}>Average profit</p>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.statsItem}>
            <h4 className={`${styles.statsTitle} ${styles.loss}`}>
              <FiTrendingDown />
              <span>+2.5%</span>
            </h4>
            <p className={styles.description}>Profit min</p>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.descItem}>
            <div className={styles.descIcon}>
              <img src='./page/raytaians_item@2x.png' alt='raytaians' />
            </div>
            <div className={styles.descInner}>
              <h4 className={styles.descTitle}>
                <span>475</span>
              </h4>
              <p className={styles.description}>Number of raytaians</p>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.descItem}>
            <div className={styles.descInner}>
              <h4 className={styles.descTitle}>
                <span>180</span>
                <img src='./page/one_percent@2x.png' alt='plus' />
              </h4>
              <p className={styles.description}>Raytaians with NFT</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.descItem}>
            <div className={styles.descIcon}>
              <img src='./page/prize_fund_item@2x.png' alt='posrtfolios' />
            </div>
            <div className={styles.descInner}>
              <h4 className={styles.descTitle}>
                <span>475</span>
              </h4>
              <p className={styles.description}>Profitable portfolios</p>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.descItem}>
            <div className={styles.descInner}>
              <h4 className={styles.descTitle}>
                <span>103</span>
              </h4>
              <p className={styles.description}>Losing Portfolios</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattleStatSection;
