import React from 'react';
import styles from './statisticTable.module.scss';
import StatisticTableRow from './StatisticTableRow';

const StatisticTable = ({ data }) => {
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
