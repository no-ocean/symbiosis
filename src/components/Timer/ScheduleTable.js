import React from 'react';
import styles from './timer.module.scss';

const scheduleData = [
  {
    title: 'Registration',
    date: '12/04, 20:00',
    completed: true,
  },
  {
    title: 'Start',
    date: '12/04, 20:00',
    completed: false,
  },
  {
    title: 'Results',
    date: '12/04, 20:00',
    completed: false,
  },
];

const ScheduleTable = () => {
  return (
    <div className={styles.table}>
      {scheduleData.map((item) => {
        return (
          <div
            key={item.title + item.date}
            className={`${styles.row} ${item.completed && styles.completed}`}
          >
            <div className={styles.col1}>{item.title}</div>
            <div className={styles.col2}>{item.date}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ScheduleTable;
