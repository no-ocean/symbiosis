import React from 'react';
import Logo from '../Logo';
import { BsDiscord, BsMedium, BsTwitter, BsEnvelope } from 'react-icons/bs';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container-fluid'>
        <div className={styles.footerRow}>
          <Logo />
          <ul className={styles.socialList}>
            <li className={styles.socialItem}>
              <a href='' className={styles.socialLink} target='_blank'>
                <BsEnvelope />
              </a>
            </li>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
