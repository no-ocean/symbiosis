import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './simpleLink.module.scss';

const SimpleLink = ({ className, to, label }) => {
  return (
    <a
      href={to}
      className={`${styles.wrapper} ${className ? className : ''}`}
      target='_blank'
      rel='noreferrer'
    >
      <span className={styles.icon}>
        <FiArrowUpRight />
      </span>
      <span className={styles.label}>{label}</span>
    </a>
  );
};

export default SimpleLink;
