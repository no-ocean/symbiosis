import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import styles from '../modal.module.scss';

const wallets = [
  {
    title: 'Formatic',
    description: 'Easy-to-use browser extension.',
    link: 'https://google.com',
    icon: './wallets/formatic@2x.png',
  },
];

const WalletConnection = () => {
  return (
    <>
      <div className={styles.loader}>
        <RotatingLines
          strokeColor='#A10B0B'
          strokeWidth='3'
          animationDuration='0.75'
          width='104'
          visible={true}
        />
      </div>
      <h4 className={styles.title}>Wallet Connection</h4>
      <p className={styles.description}>
        By connecting the wallet, you agree to the Terms of Service and
        acknowledge that you have read and understood the protocol disclaimer
      </p>

      {wallets.map((item, index) => {
        const { title, icon, link, description } = item;
        return (
          <a
            href={link}
            className={styles.walletItem}
            key={title + index}
            target='_blank'
            rel='noreferrer'
          >
            <div className={styles.walletInfo}>
              <span className={styles.walletTitle}>{title}</span>
              {description && (
                <span className={styles.walletDesc}>{description}</span>
              )}
            </div>

            <div className={styles.walletIcon}>
              <img src={icon} alt={title} />
            </div>
          </a>
        );
      })}
    </>
  );
};

export default WalletConnection;
