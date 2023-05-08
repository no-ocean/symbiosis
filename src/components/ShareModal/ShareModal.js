import React from 'react';
import { BsFacebook, BsLink45Deg, BsTelegram, BsTwitter } from 'react-icons/bs';
import styles from './shareModal.module.scss';

const ShareModal = ({ className, ...props }) => {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <div {...props} className={`${styles.wrapper} ${className && className}`}>
      <a href='' className={styles.link}>
        <BsTelegram />
        <span className={styles.text}>Share on telegram</span>
      </a>
      <a href='' className={styles.link}>
        <BsTwitter />
        <span className={styles.text}>Share on twitter</span>
      </a>
      <a href='' className={styles.link}>
        <BsFacebook />
        <span className={styles.text}>Share on facebook</span>
      </a>
      <a href='' className={styles.link} onClick={(e) => onClick(e)}>
        <BsLink45Deg />
        <span className={styles.text}>Copy link</span>
      </a>
    </div>
  );
};

export default ShareModal;
