import React from 'react';
import styles from './timer.module.scss';

const timerData = {
  statusText: 'Until the end of registration',
  timerValue: '10:55:32',
  completed: false,
};

const Timer = () => {
  return (
    <div className={styles.timer}>
      <span className={styles.statusText}>{timerData.statusText}</span>
      <span
        className={`${styles.timerValue} ${
          timerData.completed && styles.completed
        }`}
      >
        {timerData.timerValue}
      </span>
      <span className={styles.subtext}>Days/Hours/Minutes</span>
    </div>
  );
};

export default Timer;
