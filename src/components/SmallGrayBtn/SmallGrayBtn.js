import React from 'react';
import styles from './smallGrayBtn.module.scss';

const SmallGrayBtn = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`${styles.btn} ${className && className}`}>
      {children}
    </button>
  );
};

export default SmallGrayBtn;
