import React from 'react';
import ScheduleTable from './ScheduleTable';
import WinnerTable from '../WinnerTable';
import Timer from './Timer';
import styles from './timer.module.scss';

const timerBlockData = {
  completed: false,
};

const TimerBlock = () => {
  const { completed } = timerBlockData;
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Registration</div>

      <div className={styles.topBlock}>
        {completed ? <ScheduleTable /> : <Timer />}
      </div>

      {completed ? <WinnerTable /> : <ScheduleTable />}
    </div>
  );
};

export default TimerBlock;
