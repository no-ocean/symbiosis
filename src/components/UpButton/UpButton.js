import React from 'react';
import styles from './upButton.module.scss';

const UpButton = ({ id, value }) => {
  return (
    <div className={styles.wrapper}>
      <input
        id={id}
        className={styles.checkbox}
        type='checkbox'
        value={value}
      />
      <label htmlFor={id} className={styles.button}>
        +{value}%
      </label>
    </div>
  );
};

export default UpButton;
