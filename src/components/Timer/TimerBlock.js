import React from 'react';
import ScheduleTable from './ScheduleTable';
import WinnerTable from '../WinnerTable';
import Timer from './Timer';
import styles from './timer.module.scss';

const TimerBlock = ({ data, completed }) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.title} ${completed && styles.finished}`}>
        Registration
      </div>

      <div className={styles.topBlock}>
        {completed ? <ScheduleTable /> : <Timer />}
      </div>

      {completed && data ? <WinnerTable data={data} /> : <ScheduleTable />}
    </div>
  );
};

export default TimerBlock;
