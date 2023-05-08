import React from 'react';
import styles from './score.module.scss';

const Score = ({ data }) => {
  return (
    <div
      className={`
      ${styles.wrapper} 
      ${data[1] === 'grow' && styles.scoreUP}
      ${data[1] === 'loss' && styles.scoreDOWN}
    `}
    >
      {data[0]}
    </div>
  );
};

export default Score;
