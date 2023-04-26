import React from 'react';
import SimpleLink from '../../components/SimpleLink';
import styles from './beOnStep.module.scss';

const BeOnStep = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.img}>
          <img src='/images/be_on_step_img@2x.png' alt='' />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Be on step Ahead!</h2>
          <p className={styles.desc}>
            Use your advantage and defeat other fighters.
          </p>
          <SimpleLink label='How to buy NFT' to='https://google.com' />
        </div>
      </div>
    </div>
  );
};

export default BeOnStep;
