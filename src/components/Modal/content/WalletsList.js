import React from 'react';
import styles from '../modal.module.scss';

const wallets = [
  {
    title: 'Coinbase Wallet',
    link: 'https://google.com',
    icon: './wallets/coinbase@2x.png',
  },
  {
    title: 'WalletConnect',
    link: 'https://google.com',
    icon: './wallets/wallet_connect@2x.png',
  },
  {
    title: 'MetaMask',
    link: 'https://google.com',
    icon: './wallets/meta_mask@2x.png',
  },
  {
    title: 'Formatic',
    link: 'https://google.com',
    icon: './wallets/formatic@2x.png',
  },
  {
    title: 'Portis',
    link: 'https://google.com',
    icon: './wallets/portis@2x.png',
  },
];

const WalletsList = () => {
  return (
    <>
      <h4 className={styles.title}>Wallet Connection</h4>
      <p className={styles.description}>
        By connecting the wallet, you agree to the Terms of Service and
        acknowledge that you have read and understood the protocol disclaimer
      </p>

      {wallets.map((item, index) => {
        const { title, icon, link } = item;
        return (
          <a
            href={link}
            className={styles.walletItem}
            key={title + index}
            target='_blank'
            rel='noreferrer'
          >
            <span className={styles.walletTitle}>{title}</span>
            <div className={styles.walletIcon}>
              <img src={icon} alt={title} />
            </div>
          </a>
        );
      })}
    </>
  );
};

export default WalletsList;
