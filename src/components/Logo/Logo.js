import React from 'react';
import { Link } from 'react-router-dom';
import styles from './logo.module.scss';

const Logo = () => {
  return (
    <Link className={styles.logo} to='/'>
      <img className={styles.img} src='./logo.svg' alt='logo' />
    </Link>
  );
};

export default Logo;
