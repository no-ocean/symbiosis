import React from 'react';
import styles from './mobileMenuBtn.module.scss';
import { observer } from 'mobx-react-lite';
import { mobileMenuBtnStore } from '../../store';

const MobileMenuBtn = ({ className }) => {
  const active = mobileMenuBtnStore.active;

  return (
    <div
      className={`${styles.wrapper} ${active && styles.active} ${
        className && className
      }`}
      onClick={() => mobileMenuBtnStore.onClick()}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default observer(MobileMenuBtn);
