import React from 'react';
import { BsDiscord, BsMedium, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styles from './navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
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
    </nav>
  );
};

export default Navigation;
