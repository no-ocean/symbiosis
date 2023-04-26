import React from 'react';
import {
  BsDiscord,
  BsGlobe,
  BsMedium,
  BsTelegram,
  BsTwitter,
} from 'react-icons/bs';
import styles from './aboutSection.module.scss';

const AboutSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className='container-fluid'>
        <h2 className={styles.title}>about the partner</h2>
        <div className={styles.main}>
          <div className={styles.left}>
            <div className={styles.subtitleRow}>
              <div className={styles.logo}>
                <img src='/page/logo@2x.png' alt='logo' />
              </div>
              <h3 className={styles.subtitle}>Symbiosis</h3>
            </div>
            <p className={styles.desc}>
              Symbiosis is a protocol for cross-chain transactions. But
              Symbiosis is not just a bridge for transferring assets from one
              network to another, rather, it is a multifunctional tool that
              allows you to conduct cross-chain swaps and transactions, use DeFi
              without being limited to one ecosystem or blockchain and earn
              money from providing liquidity and farming. Symbiosis is a
              protocol for cross-chain transactions. it is a multifunctional
              tool that allows you to conduct cross-chain swaps and
              transactions, use DeFi without being limited to one ecosystem or
              blockchain and earn money from providing liquidity and farming.
              Symbiosis is a protocol for cross-chain transactions.
            </p>
            <div className={styles.socials}>
              <a href='' className={styles.socialLink} target='_blank'>
                <BsTwitter />
              </a>
              <a href='' className={styles.socialLink} target='_blank'>
                <BsMedium />
              </a>
              <a href='' className={styles.socialLink} target='_blank'>
                <BsDiscord />
              </a>
              <a href='' className={styles.socialLink} target='_blank'>
                <BsGlobe />
              </a>
              <a href='' className={styles.socialLink} target='_blank'>
                <BsTelegram />
              </a>
            </div>
          </div>
          <div className={styles.image}>
            <img src='/images/about_partners_img@2x.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
