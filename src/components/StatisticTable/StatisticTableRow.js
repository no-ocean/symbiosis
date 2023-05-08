import React, { useState } from 'react';
import { FiX, FiTrendingUp } from 'react-icons/fi';
import Score from '../Score';
import styles from './statisticTable.module.scss';

const StatisticTableRow = ({ data }) => {
  const [mobBlock, setMobBlock] = useState(false);

  const {
    position,
    icon,
    title,
    share,
    sum,
    link,
    score,
    stats1h,
    stats24h,
    stats7d,
  } = data;

  return (
    <div className={`${styles.row}`}>
      <div className={`${styles.position} smallTableText`}>{position}</div>
      <div className={styles.img}>
        <img src={icon} alt={title} />
      </div>
      <div className={styles.coinTitle}>{title}</div>
      <div className={styles.share}>{share}</div>
      <div className={styles.sum}>{sum}</div>
      {!mobBlock && (
        <button
          className={styles.showMobileBlock}
          onClick={() => setMobBlock(true)}
        >
          View statistics
        </button>
      )}
      <div className={`${styles.statsWrapp} ${mobBlock && styles.active}`}>
        <div className={`${styles.mobHeader2} smallTableText`}>
          <span>1h</span>
          <span>24h</span>
          <span>7d</span>
        </div>
        <div className={styles.statsRow}>
          <div
            className={`
              ${styles.stats} 
              ${stats1h[1] === 'grow' && styles.statsUP}
              ${stats1h[1] === 'loss' && styles.statsDOWN}
            `}
          >
            {stats1h[0]}
          </div>
          <div
            className={`
              ${styles.stats} 
              ${stats24h[1] === 'grow' && styles.statsUP}
              ${stats24h[1] === 'loss' && styles.statsDOWN}
            `}
          >
            {stats24h[0]}
          </div>
          <div
            className={`
              ${styles.stats} 
              ${stats7d[1] === 'grow' && styles.statsUP}
              ${stats7d[1] === 'loss' && styles.statsDOWN}
            `}
          >
            {stats7d[0]}
          </div>
        </div>
        <div className={styles.chart}>
          <img src='./charts/table_statistics@2x.png' alt='' />
        </div>
      </div>
      <div className={`${styles.mobileButtons} ${mobBlock && styles.active}`}>
        <div className={styles.mobileStateControls}>
          <a
            href={link}
            className={styles.btn}
            target='_blank'
            rel='noreferrer'
          >
            <FiTrendingUp />
            <span className={styles.tooltip}>Go to {title}</span>
          </a>
          <button
            className={styles.closeBtn}
            onClick={() => setMobBlock(false)}
          >
            <FiX />
          </button>
        </div>
      </div>
      <div
        className={`${styles.score} ${mobBlock && styles.active} ${
          !score && styles.noScore
        }`}
      >
        {score && <Score data={score} />}
      </div>
    </div>
  );
};

export default StatisticTableRow;
