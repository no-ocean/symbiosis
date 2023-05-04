import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styles from './backLink.module.scss';

const BackLink = ({ to }) => {
  return (
    <Link className={styles.backLink} to={to}>
      <FiArrowLeft />
      <span className={styles.label}>Back to the battle</span>
    </Link>
  );
};

export default BackLink;
