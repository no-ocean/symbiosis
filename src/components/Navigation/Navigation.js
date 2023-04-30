import React from 'react';
import { BsDiscord, BsMedium, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { mobileMenuBtnStore } from '../../store';
import { observer } from 'mobx-react-lite';
import Button from '../Button/Button';
import styles from './navigation.module.scss';

const Navigation = () => {
  const active = mobileMenuBtnStore.active;

  return (
    <nav className={`${styles.nav} ${active && styles.active}`}>
      <div className={styles.mobileWrapper}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to={'/'} className={styles.navLink}>
              Main page
            </Link>
          </li>
        </ul>
        <ul className={styles.socialList}>
          <li className={styles.socialItem}>
            <a href='' className={styles.socialLink} target='_blank'>
              <BsTwitter />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href='' className={styles.socialLink} target='_blank'>
              <BsMedium />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href='' className={styles.socialLink} target='_blank'>
              <BsDiscord />
            </a>
          </li>
        </ul>
        <Button
          to='https://google.com'
          className={styles.button}
          type='link'
          view='smallBorderRed'
          label='Connect Wallet'
        />
      </div>
    </nav>
  );
};

export default observer(Navigation);
