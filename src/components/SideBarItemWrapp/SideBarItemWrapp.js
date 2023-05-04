import React from 'react';
import styles from './sideBarItemWrapp.module.scss';

const SideBarItemWrapp = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default SideBarItemWrapp;
