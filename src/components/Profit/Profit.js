import React from 'react';
import styles from './profit.module.scss';
import { BsArrowRight } from 'react-icons/bs';

const Profit = ({ hasNFT }) => {
  return hasNFT ? (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img src='./page/if_nft@2x.png' alt='NFT' />
      </div>
      <div className={styles.text}>
        You got <span className={styles.red}>+1%</span> to profit and access to
        battle <span className={styles.red}>statistics!</span>
      </div>
    </div>
  ) : (
    <div className={`${styles.wrapper} ${styles.noNFT}`}>
      <div className={styles.img}>
        <img src='./page/if_no_nft@2x.png' alt='no NFT' />
      </div>
      <div className={styles.noNftText}>
        <div className={styles.text}>
          You got <span className={styles.red}>+1%</span> to profit and access
          to battle <span className={styles.red}>statistics!</span>
        </div>
        <a href='' className={styles.link} target='_blank'>
          <span>Buy NFT</span>
          <BsArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Profit;
