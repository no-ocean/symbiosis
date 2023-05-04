import React, { useState } from 'react';
import styles from './numericInput.module.scss';

const NumericInput = ({ value, className }) => {
  const STEP = 50;

  const [val, setVal] = useState(value);

  const increment = (step) => {
    val < 10000 && setVal(+val + step);
  };
  const decrement = (step) => {
    val > 0 && setVal(+val - step);
  };

  const formatVal = (val) => {
    return String(val).padStart(4, '0');
  };

  return (
    <div className={`${styles.wrapper} ${className && className}`}>
      <button className={styles.decrement} onClick={() => decrement(STEP)}>
        -
      </button>
      <span className={styles.input}>
        $ <span className={styles.value}>{formatVal(val)}</span>
      </span>
      <button className={styles.increment} onClick={() => increment(STEP)}>
        +
      </button>
    </div>
  );
};

export default NumericInput;
